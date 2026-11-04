import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

/* ============================================================
   景深：薄透镜弥散圆 + 两趟分离高斯
   ------------------------------------------------------------
   自带 BokehPass 的问题是把 |z-focus| 直接夹到 maxblur，
   远近虚化一样强，看着就是「整体糊了一层」。
   这里按真实光学算 coc = A·|z-f|/z：
   近处虚化随距离急剧变强，远处收敛到一个上限。
   ============================================================ */

const VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`;

const COC = /* glsl */`
#include <packing>

uniform sampler2D tDepth;
uniform float uNear;
uniform float uFar;
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;
uniform float uFarScale;   // 远景虚化打折，避免中景糊成一片

float linearDist( vec2 uv ) {
  float d = unpackRGBAToDepth( texture2D( tDepth, uv ) );
  return -perspectiveDepthToViewZ( d, uNear, uFar );
}

float cocPx( vec2 uv ) {
  float z = linearDist( uv );
  float d = ( z < uFocus )
    ? ( uFocus / max( z, 0.05 ) - 1.0 )
    : ( 1.0 - uFocus / max( z, 0.05 ) ) * uFarScale;
  return clamp( uAperture * d, 0.0, uMaxCoc );
}
`;

const BLUR_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 uDir;
uniform vec2 uRes;
varying vec2 vUv;
${COC}

void main() {
  float r = cocPx( vUv );
  if ( r < 0.35 ) { gl_FragColor = texture2D( tDiffuse, vUv ); return; }

  vec4 sum = vec4( 0.0 );
  float wsum = 0.0;
  for ( int i = -8; i <= 8; i ++ ) {
    float fi = float( i );
    float w = exp( -fi * fi * 0.062 );
    vec2 off = uDir * ( fi / 8.0 ) * r / uRes;
    sum += texture2D( tDiffuse, vUv + off ) * w;
    wsum += w;
  }
  gl_FragColor = sum / wsum;
}
`;

const COMP_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D tBlur;
varying vec2 vUv;
${COC}

void main() {
  vec4 sharp = texture2D( tDiffuse, vUv );
  vec4 soft  = texture2D( tBlur, vUv );
  float k = smoothstep( 0.6, 2.4, cocPx( vUv ) );
  gl_FragColor = mix( sharp, soft, k );
}
`;

export class DofPass extends Pass {
  constructor(scene, camera) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.needsSwap = true;

    this.rtDepth = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      depthBuffer: true, stencilBuffer: false,
    });
    // 半分辨率做模糊：同样的屏幕半径只需要一半的采样步长，重影少很多
    const half = {
      type: THREE.HalfFloatType, depthBuffer: false, stencilBuffer: false,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      colorSpace: THREE.LinearSRGBColorSpace,
    };
    this.rtH = new THREE.WebGLRenderTarget(1, 1, half);
    this.rtV = new THREE.WebGLRenderTarget(1, 1, half);

    this.depthMat = new THREE.MeshDepthMaterial();
    this.depthMat.depthPacking = THREE.RGBADepthPacking;
    this.depthMat.blending = THREE.NoBlending;

    // 两趟 blur 与合成共用同一组 uniform 对象，改一处即生效
    this.uniforms = {
      tDepth: { value: this.rtDepth.texture },
      uNear: { value: camera.near },
      uFar: { value: camera.far },
      uFocus: { value: 20 },
      uAperture: { value: 10 },
      uMaxCoc: { value: 12 },
      uFarScale: { value: 0.7 },
      uRes: { value: new THREE.Vector2(1, 1) },
    };

    this.blurMat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: BLUR_FRAG,
      uniforms: {
        ...this.uniforms,
        tDiffuse: { value: null },
        uDir: { value: new THREE.Vector2(1, 0) },
      },
      depthTest: false, depthWrite: false,
    });
    this.compMat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: COMP_FRAG,
      uniforms: {
        ...this.uniforms,
        tDiffuse: { value: null },
        tBlur: { value: null },
      },
      depthTest: false, depthWrite: false,
    });

    this.quad = new FullScreenQuad(this.blurMat);
    this.enabled = true;
  }

  setFocus(f) { this.uniforms.uFocus.value = f; }
  setAperture(a) { this.uniforms.uAperture.value = a; }

  setSize(w, h) {
    const W = Math.max(1, Math.floor(w));
    const H = Math.max(1, Math.floor(h));
    this.rtDepth.setSize(W, H);
    const hw = Math.max(1, Math.ceil(W / 2));
    const hh = Math.max(1, Math.ceil(H / 2));
    this.rtH.setSize(hw, hh);
    this.rtV.setSize(hw, hh);
    this.uniforms.uRes.value.set(hw, hh);
  }

  render(renderer, writeBuffer, readBuffer) {
    // 1. 深度。阴影贴图主通道已经算过，这里别再算一遍
    const bg = this.scene.background;
    const shadowAuto = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    this.scene.overrideMaterial = this.depthMat;
    renderer.setRenderTarget(this.rtDepth);
    renderer.clear();
    renderer.render(this.scene, this.camera);
    this.scene.overrideMaterial = null;
    renderer.shadowMap.autoUpdate = shadowAuto;
    this.scene.background = bg;

    // 2. 横向
    this.blurMat.uniforms.tDiffuse.value = readBuffer.texture;
    this.blurMat.uniforms.uDir.value.set(1, 0);
    this.quad.material = this.blurMat;
    renderer.setRenderTarget(this.rtH);
    renderer.clear();
    this.quad.render(renderer);

    // 3. 纵向
    this.blurMat.uniforms.tDiffuse.value = this.rtH.texture;
    this.blurMat.uniforms.uDir.value.set(0, 1);
    renderer.setRenderTarget(this.rtV);
    renderer.clear();
    this.quad.render(renderer);

    // 4. 按 coc 合成回清晰图
    this.compMat.uniforms.tDiffuse.value = readBuffer.texture;
    this.compMat.uniforms.tBlur.value = this.rtV.texture;
    this.quad.material = this.compMat;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    renderer.clear();
    this.quad.render(renderer);
  }
}
