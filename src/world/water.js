import * as THREE from 'three';
import { shared } from '../core/materials.js';
import {
  WATER_Y, HALF, WORLD, riverCenterZ, riverHalfWidth, terrainHeight,
  STREAM_PTS, resample,
} from './layout.js';
import { waterNormalTexture } from '../core/textures.js';
import { clamp } from '../core/noise.js';

const WATER_VERT = /* glsl */`
precision highp float;
uniform mat4 uReflectMatrix;
uniform float uTime;
uniform float uWaveAmp;
varying vec3 vWorld;
varying vec2 vUv;
varying vec4 vReflectCoord;

void main() {
  vec3 p = position;
  vec4 wp = modelMatrix * vec4( p, 1.0 );
  // 轻微起伏
  float w = sin( wp.x * 0.9 + uTime * 1.1 ) * 0.02 + sin( wp.z * 1.3 - uTime * 0.9 ) * 0.015;
  wp.y += w * uWaveAmp;
  vWorld = wp.xyz;
  vUv = uv;
  vReflectCoord = uReflectMatrix * wp;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const WATER_FRAG = /* glsl */`
precision highp float;

uniform sampler2D uNormal;
uniform sampler2D uHeight;
uniform sampler2D uReflect;
uniform float uTime;
uniform float uWaterY;
uniform float uDepthScale;
uniform float uFlowSpeed;
uniform float uIsStream;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uFoamColor;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uReflectStrength;
uniform float uDebug;

varying vec3 vWorld;
varying vec2 vUv;
varying vec4 vReflectCoord;

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i ), b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) ), d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}

void main() {
  vec3 V = normalize( cameraPosition - vWorld );
  vec3 L = uSunDir;

  // 双层滚动法线
  vec2 uv1 = vUv * vec2( 1.6, 1.0 ) + vec2( 0.0, uTime * 0.055 * uFlowSpeed );
  vec2 uv2 = vUv * vec2( 2.9, 2.1 ) - vec2( 0.0, uTime * 0.032 * uFlowSpeed );
  vec3 n1 = texture2D( uNormal, uv1 ).rgb * 2.0 - 1.0;
  vec3 n2 = texture2D( uNormal, uv2 ).rgb * 2.0 - 1.0;
  vec3 nrm = normalize( n1 + n2 * 0.75 );

  float depth = 0.9;
  if ( uIsStream < 0.5 ) {
    vec2 huv = vec2( ( vWorld.x + 210.0 ) / 420.0, ( vWorld.z + 210.0 ) / 420.0 );
    vec4 hs = texture2D( uHeight, huv );
    float hv = ( hs.r * 255.0 * 256.0 + hs.g * 255.0 ) / 65535.0;
    float bed = hv * 40.0 - 8.0;
    depth = clamp( uWaterY - bed, 0.0, 3.0 );
  } else {
    depth = 0.34;
  }

  vec3 N = normalize( vec3( nrm.x * ( uIsStream > 0.5 ? 0.18 : 0.32 ), 1.0, nrm.z * ( uIsStream > 0.5 ? 0.18 : 0.32 ) ) );

  // ---- 反射 ----
  vec2 ruv = vReflectCoord.xy / max( vReflectCoord.w, 0.0001 );
  ruv += N.xz * 0.075;
  vec3 refl = texture2D( uReflect, clamp( ruv, vec2( 0.001 ), vec2( 0.999 ) ) ).rgb;

  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 3.4 );
  fres = clamp( fres * 1.05 + 0.04, 0.0, 0.78 );

  float dt = smoothstep( 0.0, 0.95, depth );
  vec3 waterCol = mix( uShallowColor, uDeepColor, dt );

  vec3 col = mix( waterCol, refl, fres * uReflectStrength );

  // ---- 水面自身的柔和明暗（模拟天空散射） ----
  col += uSkyColor * 0.05;

  // ---- 泡沫 ----
  float shore = ( 1.0 - smoothstep( 0.02, 0.22, depth ) ) * ( 1.0 - uIsStream );
  float fn = fbm2( vWorld.xz * 2.2 + vec2( uTime * 0.15, -uTime * 0.42 ) );
  float foam = smoothstep( 0.86, 1.14, shore * 1.0 + fn * 0.45 - 0.10 ) * 0.75;
  // 流动的白色条纹
  float streak = smoothstep( 0.66, 0.96, fbm2( vec2( vUv.x * 5.0, vUv.y * 1.6 - uTime * 1.1 ) ) );
  foam = max( foam, streak * uIsStream * 0.14 );
  col = mix( col, uFoamColor, clamp( foam, 0.0, 1.0 ) * 0.85 );

  // ---- 阳光高光 ----
  vec3 H = normalize( L + V );
  float spec = pow( max( dot( N, H ), 0.0 ), 260.0 );
  float spec2 = pow( max( dot( N, H ), 0.0 ), 26.0 ) * 0.16;
  col += uSunColor * ( spec * 2.2 + spec2 );

  // ---- 大气 ----
  vec3 vd = normalize( vWorld - cameraPosition );
  float dist = length( vWorld - cameraPosition );
  float f = 1.0 - exp( -pow( dist * uFogDensity, 1.45 ) );
  vec3 fogC = uFogColor + uSunColor * 0.25 * pow( max( dot( vd, L ), 0.0 ), 3.0 );
  col = mix( col, fogC, clamp( f, 0.0, 0.9 ) );

  float alpha = mix( 0.52, 0.96, smoothstep( 0.0, 0.55, depth ) ) * ( uIsStream > 0.5 ? 0.82 : 1.0 );
  // 水岸软过渡，避免硬边
  alpha *= smoothstep( 0.0, 0.14, vUv.x ) * smoothstep( 1.0, 0.86, vUv.x );
  alpha = max( alpha, foam * 0.9 );
  alpha = mix( alpha, 1.0, fres * 0.5 );

  if ( uDebug > 0.5 && uDebug < 1.5 ) { gl_FragColor = vec4( vec3( depth * 0.5 ), 1.0 ); return; }
  if ( uDebug > 1.5 && uDebug < 2.5 ) { gl_FragColor = vec4( refl, 1.0 ); return; }
  if ( uDebug > 2.5 && uDebug < 3.5 ) { gl_FragColor = vec4( vec3( foam ), 1.0 ); return; }
  if ( uDebug > 3.5 && uDebug < 4.5 ) { gl_FragColor = vec4( N * 0.5 + 0.5, 1.0 ); return; }
  if ( uDebug > 4.5 ) { gl_FragColor = vec4( vec3( fres ), 1.0 ); return; }

  gl_FragColor = vec4( col, alpha );
}
`;

/* ---------------- 几何：河道条带 ---------------- */
function riverGeometry(segX = 340, segZ = 10) {
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= segX; i++) {
    const x = -HALF + (i / segX) * WORLD;
    const cz = riverCenterZ(x);
    const hw = riverHalfWidth(x) * 1.12;
    for (let j = 0; j <= segZ; j++) {
      const t = j / segZ;
      const z = cz + (t * 2 - 1) * hw;
      pos.push(x, WATER_Y, z);
      uv.push(t, x / 7.0);
    }
  }
  for (let i = 0; i < segX; i++) {
    for (let j = 0; j < segZ; j++) {
      const a = i * (segZ + 1) + j;
      const b = a + segZ + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function streamGeometry() {
  const path = resample(STREAM_PTS, 0.7);
  const pos = [], uv = [], idx = [];
  const segZ = 4;
  for (let i = 0; i < path.length; i++) {
    const [x, z] = path[i];
    const prev = path[Math.max(0, i - 1)], next = path[Math.min(path.length - 1, i + 1)];
    let tx = next[0] - prev[0], tz = next[1] - prev[1];
    const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const nx = -tz, nz = tx;
    const y = terrainHeight(x, z) + 0.20;
    const w = 0.46;
    for (let j = 0; j <= segZ; j++) {
      const t = j / segZ;
      const off = (t * 2 - 1) * w;
      pos.push(x + nx * off, y, z + nz * off);
      uv.push(t, i * 0.7);
    }
  }
  for (let i = 0; i < path.length - 1; i++) {
    for (let j = 0; j < segZ; j++) {
      const a = i * (segZ + 1) + j;
      const b = a + segZ + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/* ---------------- 平面反射 ---------------- */
class PlanarReflection {
  constructor(width = 1024, height = 512) {
    this.rt = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      colorSpace: THREE.LinearSRGBColorSpace,
      depthBuffer: true,
      stencilBuffer: false,
      samples: 0,
    });
    this.camera = new THREE.PerspectiveCamera();
    this.matrix = new THREE.Matrix4();
    this.textureMatrix = new THREE.Matrix4();
    this._v = new THREE.Vector3();
    this._t = new THREE.Vector3();
    this._rot = new THREE.Matrix4();
    this._normal = new THREE.Vector3(0, 1, 0);
    this._plane = new THREE.Plane();
    this._clip = new THREE.Vector4();
    this._q = new THREE.Vector4();
  }

  update(renderer, scene, camera, hideList) {
    const camPos = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    // 反射相机位置
    const pos = camPos.clone();
    pos.y = 2 * WATER_Y - camPos.y;
    this.camera.position.copy(pos);
    this.camera.up.set(0, 1, 0);
    // 反射朝向
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    dir.y = -dir.y;
    this.camera.lookAt(pos.clone().add(dir));
    this.camera.projectionMatrix.copy(camera.projectionMatrix);
    this.camera.projectionMatrixInverse.copy(camera.projectionMatrixInverse);
    this.camera.updateMatrixWorld();

    // 斜裁剪近平面（避免水下物体进入反射）
    const plane = this._plane.setFromNormalAndCoplanarPoint(
      this._normal, new THREE.Vector3(0, WATER_Y, 0)
    );
    plane.applyMatrix4(this.camera.matrixWorldInverse);
    const clip = this._clip.set(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const proj = this.camera.projectionMatrix;
    const q = this._q;
    q.x = (Math.sign(clip.x) + proj.elements[8]) / proj.elements[0];
    q.y = (Math.sign(clip.y) + proj.elements[9]) / proj.elements[5];
    q.z = -1.0;
    q.w = (1.0 + proj.elements[10]) / proj.elements[14];
    clip.multiplyScalar(2.0 / clip.dot(q));
    proj.elements[2] = clip.x;
    proj.elements[6] = clip.y;
    proj.elements[10] = clip.z + 1.0 - 0.003;
    proj.elements[14] = clip.w;

    // 纹理矩阵
    this.textureMatrix.set(
      0.5, 0.0, 0.0, 0.5,
      0.0, 0.5, 0.0, 0.5,
      0.0, 0.0, 0.5, 0.5,
      0.0, 0.0, 0.0, 1.0
    );
    this.textureMatrix.multiply(this.camera.projectionMatrix);
    this.textureMatrix.multiply(this.camera.matrixWorldInverse);

    const vis = hideList.map(o => o.visible);
    hideList.forEach(o => { o.visible = false; });
    const prevTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(this.rt);
    renderer.clear();
    renderer.render(scene, this.camera);
    renderer.setRenderTarget(prevTarget);
    hideList.forEach((o, i) => { o.visible = vis[i]; });
  }
}

/* ---------------- 构建水体 ---------------- */
export function buildWater(heightTex) {
  const normalTex = waterNormalTexture(512);
  const reflection = new PlanarReflection(1024, 512);

  const makeMat = (isStream) => new THREE.ShaderMaterial({
    vertexShader: WATER_VERT,
    fragmentShader: WATER_FRAG,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uNormal: { value: normalTex },
      uHeight: { value: heightTex },
      uReflect: { value: reflection.rt.texture },
      uReflectMatrix: { value: reflection.textureMatrix },
      uTime: shared.uTime,
      uWaterY: { value: WATER_Y },
      uDepthScale: { value: 1 },
      uFlowSpeed: { value: isStream ? 2.6 : 0.75 },
      uIsStream: { value: isStream ? 1 : 0 },
      uDeepColor: { value: new THREE.Color(isStream ? 0x1d4a42 : 0x174c56) },
      uShallowColor: { value: new THREE.Color(isStream ? 0x356e5c : 0x458a7e) },
      uFoamColor: { value: new THREE.Color(0xf2f7ee) },
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uSkyColor: shared.uSkyColor,
      uFogColor: shared.uFogColor,
      uFogDensity: shared.uFogDensity,
      uReflectStrength: { value: isStream ? 0.30 : 0.60 },
      uWaveAmp: { value: isStream ? 1.6 : 1.0 },
      uDebug: { value: 0 },
    },
  });

  const river = new THREE.Mesh(riverGeometry(), makeMat(false));
  river.receiveShadow = false;
  river.renderOrder = 10;
  river.name = 'river';

  const stream = new THREE.Mesh(streamGeometry(), makeMat(true));
  stream.renderOrder = 10;
  stream.name = 'stream';

  return { river, stream, reflection, meshes: [river, stream] };
}
