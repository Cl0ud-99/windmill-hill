import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

/* ---------------- 体积光（屏幕空间径向模糊） ---------------- */
const RAYS_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 uSun;
uniform float uDensity;
uniform float uThreshold;
uniform float uIntensity;
uniform vec3 uTint;
varying vec2 vUv;

float hash12( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

void main() {
  vec2 dir = uSun - vUv;
  float dist = length( dir );
  vec3 sum = vec3( 0.0 );
  float wsum = 0.0;
  const int N = 56;
  // 抖动起点，消除环状条带
  float jitter = hash12( gl_FragCoord.xy ) * 1.4;
  for ( int i = 0; i < N; i ++ ) {
    float t = ( float( i ) + jitter ) / float( N );
    vec2 p = vUv + dir * t * uDensity;
    vec3 c = texture2D( tDiffuse, p ).rgb;
    float l = dot( c, vec3( 0.299, 0.587, 0.114 ) );
    // 只取高亮区（天空 / 被阳光照亮的雾）
    c *= smoothstep( uThreshold, uThreshold * 2.2, l );
    // 按到太阳的屏幕距离加权，让光晕聚在太阳附近而不是整片天空
    float sw = 1.0 - smoothstep( 0.0, 0.55, length( p - uSun ) );
    float w = exp( -t * 2.2 ) * ( 0.12 + 0.88 * sw );
    sum += c * w;
    wsum += w;
  }
  sum /= wsum;
  // 靠近太阳时更强
  float prox = 1.0 - smoothstep( 0.0, 1.05, dist );
  vec3 col = sum * uTint * uIntensity * ( 0.28 + 0.72 * prox );
  gl_FragColor = vec4( col, 1.0 );
}
`;

export class GodRaysPass extends Pass {
  constructor() {
    super();
    this.needsSwap = false;
    this.rt = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType, depthBuffer: false, stencilBuffer: false,
      colorSpace: THREE.LinearSRGBColorSpace,
    });
    this.material = new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: RAYS_FRAG,
      uniforms: {
        tDiffuse: { value: null },
        uSun: { value: new THREE.Vector2(0.5, 0.5) },
        uDensity: { value: 0.55 },
        uThreshold: { value: 1.15 },
        uIntensity: { value: 0.35 },
        uTint: { value: new THREE.Color(1.0, 0.92, 0.74) },
      },
      depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
    this.sun = new THREE.Vector2(0.5, 0.5);
    this.enabled = true;
  }
  setSize(w, h) { this.rt.setSize(Math.max(1, Math.ceil(w / 2)), Math.max(1, Math.ceil(h / 2))); }
  render(renderer, writeBuffer, readBuffer) {
    this.material.uniforms.tDiffuse.value = readBuffer.texture;
    this.material.uniforms.uSun.value.copy(this.sun);
    renderer.setRenderTarget(this.rt);
    this.quad.render(renderer);
    renderer.setRenderTarget(null);
  }
}

/* ---------------- 最终调色 ---------------- */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    tRays: { value: null },
    uExposure: { value: 0.88 },
    uSat: { value: 1.52 },
    uLift: { value: 0.006 },
    uVignette: { value: 0.30 },
    uGrain: { value: 0.020 },
    uTime: { value: 0 },
    uRayStrength: { value: 0.26 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uWarmth: { value: 0.5 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D tRays;
uniform float uExposure, uSat, uLift, uVignette, uGrain, uTime, uRayStrength, uWarmth;
uniform vec2 uResolution;
varying vec2 vUv;

vec3 aces( vec3 x ) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp( ( x * ( a * x + b ) ) / ( x * ( c * x + d ) + e ), 0.0, 1.0 );
}

void main() {
  vec2 uv = vUv;
  vec2 dc = uv - 0.5;
  float r2 = dot( dc, dc );
  vec2 off = dc * r2 * 0.0022;

  vec3 col;
  col.r = texture2D( tDiffuse, uv + off ).r;
  col.g = texture2D( tDiffuse, uv ).g;
  col.b = texture2D( tDiffuse, uv - off ).b;

  col *= uExposure;
  col += texture2D( tRays, uv ).rgb * uRayStrength;

  col = aces( col );
  col = pow( col, vec3( 1.0 / 2.2 ) );

  float l = dot( col, vec3( 0.299, 0.587, 0.114 ) );

  // 分离色调：暗部偏青，亮部偏暖金
  vec3 cool = col * vec3( 0.93, 0.995, 1.07 );
  vec3 warm = col * vec3( 1.075, 1.005, 0.915 );
  col = mix( cool, col, smoothstep( 0.02, 0.46, l ) );
  col = mix( col, warm, smoothstep( 0.5, 1.0, l ) * uWarmth );

  // 提亮暗部（吉卜力式的通透感）
  col = mix( col, col * 0.88 + vec3( 0.045, 0.055, 0.062 ), 0.12 );
  col = col * ( 1.0 - uLift ) + uLift;

  // 饱和度
  l = dot( col, vec3( 0.299, 0.587, 0.114 ) );
  col = mix( vec3( l ), col, uSat );

  // 轻微 S 曲线，增加层次
  col = clamp( col, 0.0, 1.0 );
  col = mix( col, col * col * ( 3.0 - 2.0 * col ), 0.26 );
  // 高光轻微柔化
  col = mix( col, smoothstep( 0.0, 1.0, col ), 0.08 );

  // 暗角
  float v = smoothstep( 0.15, 0.95, length( dc ) * 1.35 );
  col *= 1.0 - uVignette * v * v;

  // 颗粒
  float g = fract( sin( dot( uv * uResolution + uTime, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
  col += ( g - 0.5 ) * uGrain;

  gl_FragColor = vec4( clamp( col, 0.0, 1.0 ), 1.0 );
}
`,
};

export function buildPost(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    colorSpace: THREE.LinearSRGBColorSpace,
    depthBuffer: true,
    stencilBuffer: false,
    samples: 4,
  });
  const composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new RenderPass(scene, camera);
  // 电影模式景深（默认关闭，避免实时漫游时的额外开销）
  const bokeh = new BokehPass(scene, camera, {
    focus: 30, aperture: 0.0022, maxblur: 0.0075,
  });
  bokeh.enabled = false;

  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.26, 0.68, 1.02);
  const rays = new GodRaysPass();
  const grade = new ShaderPass(GradeShader);

  composer.addPass(renderPass);
  composer.addPass(bokeh);
  composer.addPass(bloom);
  composer.addPass(rays);
  composer.addPass(grade);

  return { composer, bloom, rays, grade, rt, bokeh };
}
