import * as THREE from 'three';

/* ============================================================
   全局共享光照 / 大气参数
   ============================================================ */
export const SUN_DIR = new THREE.Vector3(0.70, 0.60, 0.26).normalize();

export const shared = {
  uTime: { value: 0 },
  uSunDir: { value: SUN_DIR.clone() },
  uSunColor: { value: new THREE.Color(1.0, 0.94, 0.80) },
  uSkyColor: { value: new THREE.Color(0.66, 0.80, 0.94) },
  uBounceColor: { value: new THREE.Color(0.62, 0.62, 0.36) },
  uShadowTint: { value: new THREE.Color(0.54, 0.58, 0.70) },
  uFogColor: { value: new THREE.Color(0.44, 0.60, 0.72) },
  uFogDensity: { value: 0.00145 },
  uWindDir: { value: new THREE.Vector2(0.86, 0.51) },
};

export function setTime(t) { shared.uTime.value = t; }

/* ============================================================
   卡通 / 绘画风格着色器
   ============================================================ */
const TOON_VERT = /* glsl */`
precision highp float;

uniform float uTime;
uniform float uWindAmp;
uniform float uWindSpeed;
uniform vec2  uWindDir;
uniform float uBendH;
uniform float uPhase;
uniform float uBillow;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying vec3 vInst;
varying float vH;

#ifdef USE_VCOL
  attribute vec3 color;
  varying vec3 vVCol;
#endif

#include <shadowmap_pars_vertex>

void main() {
  vUv = uv;
  vec3 p = position;
  vec3 n = normal;
  vInst = vec3(1.0);
  #ifdef USE_VCOL
    vVCol = color;
  #endif

  #ifdef USE_INSTANCING
    p = (instanceMatrix * vec4(p, 1.0)).xyz;
    n = mat3(instanceMatrix) * n;
    #ifdef USE_INSTANCING_COLOR
      vInst = instanceColor;
    #endif
  #endif

  vec4 wp = modelMatrix * vec4(p, 1.0);

  float hh = clamp(p.y / max(uBendH, 0.001), 0.0, 1.6);
  float ph = wp.x * 0.42 + wp.z * 0.33 + uPhase;
  float gust = 0.62 + 0.38 * sin(uTime * 0.31 + wp.x * 0.016 + wp.z * 0.011);
  float sway = (sin(ph + uTime * uWindSpeed) + 0.42 * sin(ph * 2.6 + uTime * uWindSpeed * 1.57 + 1.3)) * gust;
  float bend = sway * uWindAmp * hh * hh;
  wp.x += bend * uWindDir.x;
  wp.z += bend * uWindDir.y;
  wp.y -= abs(bend) * 0.16;
  wp.y += sin(ph * 3.1 + uTime * uWindSpeed * 1.9) * uBillow * hh;

  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * n);
  vView = cameraPosition - wp.xyz;
  vH = hh;

  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vDirectionalShadowCoord[ 0 ] = directionalShadowMatrix[ 0 ] * vec4( wp.xyz + vNormalW * 0.05, 1.0 );
  #endif

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const TOON_FRAG = /* glsl */`
precision highp float;

uniform sampler2D uMap;
#ifdef USE_NORMALMAP
uniform sampler2D uNormalMap;
uniform float uNormalScale;
#endif
uniform vec3  uColor;
uniform vec3  uColor2;
uniform float uMapMix;
uniform vec2  uUvScale;
uniform float uRim;
uniform vec3  uRimColor;
uniform float uSpec;
uniform float uSpecPower;
uniform float uFresnel;
uniform float uNoiseAmt;
uniform float uNoiseScale;
uniform float uWrap;
uniform float uTrans;
uniform float uAO;
uniform float uEmissive;
uniform float uSaturation;
uniform float uAlphaTest;
uniform float uOpacity;
uniform vec3  uTint;
uniform vec2  uGrime;      // 垂直脏污渐变起止高度（x==y 时不启用）
uniform float uRoughVar;   // 粗糙度扰动强度
uniform float uWet;        // 潮湿程度：压暗 + 提亮高光

uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uBounceColor;
uniform vec3  uShadowTint;
uniform vec3  uFogColor;
uniform float uFogDensity;
uniform float uTime;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying vec3 vInst;
varying float vH;

#ifdef USE_VCOL
  varying vec3 vVCol;
#endif

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i );
  float b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) );
  float d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}

void main() {
  vec3 base = uColor;

  #ifdef USE_MAP
    vec4 t = texture2D( uMap, vUv * uUvScale );
    base = mix( base, t.rgb, uMapMix );
    #ifdef USE_ALPHA_MAP
      if ( t.a < uAlphaTest ) discard;
    #endif
  #endif

  base *= vInst;
  base *= uTint;
  #ifdef USE_VCOL
    base *= vVCol;
  #endif

  // 手绘感的色块扰动
  float pn = fbm2( vWorld.xz * uNoiseScale + vWorld.y * 0.45 );
  base *= 1.0 + ( pn - 0.5 ) * uNoiseAmt;

  float lum = dot( base, vec3( 0.299, 0.587, 0.114 ) );
  base = mix( vec3( lum ), base, uSaturation );

  // 垂直脏污渐变：越靠近地面越脏
  if ( uGrime.y > uGrime.x ) {
    float gy = smoothstep( uGrime.x, uGrime.y, vWorld.y );
    base *= mix( 0.74, 1.0, gy );
    base *= mix( vec3( 0.94, 0.93, 0.88 ), vec3( 1.0 ), gy );
  }
  // 潮湿：整体压暗，稍后给更强高光
  if ( uWet > 0.001 ) {
    base *= mix( 1.0, 0.62, uWet );
  }

  vec3 N = normalize( vNormalW );

  // 法线贴图：用世界坐标导数构建切线基（无需顶点切线）
  #ifdef USE_NORMALMAP
  {
    vec3 q0 = dFdx( vWorld );
    vec3 q1 = dFdy( vWorld );
    vec2 st0 = dFdx( vUv * uUvScale );
    vec2 st1 = dFdy( vUv * uUvScale );
    vec3 q1perp = cross( q1, N );
    vec3 q0perp = cross( N, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float sc = det > 0.0 ? inversesqrt( det ) : 0.0;
    T *= sc; B *= sc;
    vec3 nt = texture2D( uNormalMap, vUv * uUvScale ).xyz * 2.0 - 1.0;
    nt.xy *= uNormalScale;
    N = normalize( T * nt.x + B * nt.y + N * nt.z );
  }
  #endif

  vec3 V = normalize( vView );
  vec3 L = uSunDir;

  float shadow = getShadowMask();
  float ndl = dot( N, L );
  float diff = clamp( ( ndl + uWrap ) / ( 1.0 + uWrap ), 0.0, 1.0 );

  // 云影
  float cs = fbm2( vWorld.xz * 0.0075 + vec2( uTime * 0.0035, uTime * 0.0018 ) );
  cs = smoothstep( 0.44, 0.60, cs );
  float cloudShade = mix( 0.62, 1.0, cs );

  float term = diff * mix( 0.42, 1.0, shadow ) * cloudShade;

  float lit = smoothstep( 0.08, 0.60, term );
  float hi  = smoothstep( 0.56, 0.98, term );

  vec3 up = vec3( 0.5 + 0.5 * N.y );
  vec3 shadowC = base * uShadowTint * ( 0.66 + 0.30 * up );
  vec3 midC    = base * ( 0.90 + 0.14 * up );
  vec3 litC    = base * uSunColor * ( 0.80 + 0.36 * diff );

  vec3 col = mix( shadowC, midC, lit );
  col = mix( col, litC, hi * 0.92 );

  // 天光 / 地面反弹
  col += base * uSkyColor * 0.125 * ( 0.55 + 0.45 * N.y ) * ( 0.55 + 0.45 * shadow );
  col += base * uBounceColor * 0.098 * ( 0.55 - 0.45 * N.y );

  // 高光
  vec3 H = normalize( L + V );
  // 粗糙度扰动：让高光在同一材质上也有强弱变化
  float rough = 1.0 + ( fbm2( vWorld.xz * 3.1 + vWorld.y * 2.2 ) - 0.5 ) * uRoughVar * 2.0;
  float spec = pow( max( dot( N, H ), 0.0 ), uSpecPower * clamp( rough, 0.45, 2.2 ) );
  float wetSpec = uWet * pow( max( dot( N, H ), 0.0 ), 42.0 ) * 0.9;
  col += uSunColor * ( spec * uSpec + wetSpec ) * mix( 0.25, 1.0, shadow );

  // 菲涅尔天光反射：按反射向量取天空梯度（石头 / 瓦片 / 地面的一层“反光”）
  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 4.0 );
  vec3 R = reflect( -V, N );
  float skyUp = clamp( R.y * 0.5 + 0.5, 0.0, 1.0 );
  vec3 skyRefl = mix( uFogColor * 1.15, uSkyColor * 1.25, skyUp );
  skyRefl += uSunColor * pow( max( dot( R, L ), 0.0 ), 10.0 ) * 0.55;
  col = mix( col, skyRefl, clamp( fres * uFresnel, 0.0, 0.85 ) );

  // 边缘光
  float rim = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 2.6 );
  rim *= smoothstep( -0.25, 0.5, ndl );
  col += uRimColor * rim * uRim * ( 0.35 + 0.65 * shadow );

  // 叶片透光
  col += base * uSunColor * uTrans * pow( max( dot( -N, L ), 0.0 ), 1.4 ) * 0.55;

  col += base * uEmissive;
  col *= uAO;

  // 大气透视
  vec3 vd = normalize( vWorld - cameraPosition );
  float dist = length( vWorld - cameraPosition );
  // 高度雾：越贴近地面越浓，形成谷地薄霭
  float hLow = exp( -max( vWorld.y - 1.5, 0.0 ) * 0.045 );
  float density = 0.55 + 0.45 * hLow;
  float f = 1.0 - exp( -dist * uFogDensity * density );
  // 朝向太阳时雾里带暖光
  float sunAmt = pow( max( dot( vd, L ), 0.0 ), 3.0 );
  vec3 fogC = uFogColor + uSunColor * ( 0.20 + 0.30 * hLow ) * sunAmt;
  // 远处轻微去饱和（空气透视）
  float lum0 = dot( col, vec3( 0.299, 0.587, 0.114 ) );
  col = mix( col, vec3( lum0 ) * 0.9 + col * 0.1, f * 0.22 );
  col = mix( col, fogC, clamp( f, 0.0, 0.94 ) );

  col += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;

  gl_FragColor = vec4( col, uOpacity );
}
`;

const LIGHT_UNIFORMS = THREE.UniformsLib.lights;

export function makeToon(opts = {}) {
  const defines = {};
  if (opts.map) defines.USE_MAP = '';
  if (opts.normalMap) defines.USE_NORMALMAP = '';
  if (opts.map && opts.alphaMap) defines.USE_ALPHA_MAP = '';
  if (opts.vcolor) defines.USE_VCOL = '';
  if (opts.defines) Object.assign(defines, opts.defines);

  const uniforms = Object.assign({}, LIGHT_UNIFORMS, shared, {
    uMap: { value: opts.map || null },
    uNormalMap: { value: opts.normalMap || null },
    uNormalScale: { value: opts.normalScale ?? 1.0 },
    uColor: { value: new THREE.Color(opts.color ?? 0xffffff) },
    uColor2: { value: new THREE.Color(opts.color2 ?? 0xffffff) },
    uMapMix: { value: opts.mapMix ?? 1 },
    uUvScale: { value: new THREE.Vector2(...(opts.uvScale ?? [1, 1])) },
    uRim: { value: opts.rim ?? 0.0 },
    uRimColor: { value: new THREE.Color(opts.rimColor ?? 0xfff0c8) },
    uSpec: { value: opts.spec ?? 0.0 },
    uSpecPower: { value: opts.specPower ?? 24 },
    uFresnel: { value: opts.fresnel ?? 0.0 },
    uNoiseAmt: { value: opts.noise ?? 0.12 },
    uNoiseScale: { value: opts.noiseScale ?? 0.35 },
    uWrap: { value: opts.wrap ?? 0.0 },
    uTrans: { value: opts.trans ?? 0.0 },
    uAO: { value: opts.ao ?? 1.0 },
    uEmissive: { value: opts.emissive ?? 0.0 },
    uSaturation: { value: opts.saturation ?? 1.0 },
    uAlphaTest: { value: opts.alphaTest ?? 0.5 },
    uOpacity: { value: opts.opacity ?? 1.0 },
    uTint: { value: new THREE.Color(opts.tint ?? 0xffffff) },
    uGrime: { value: new THREE.Vector2(...(opts.grime ?? [0, 0])) },
    uRoughVar: { value: opts.roughVar ?? 0.0 },
    uWet: { value: opts.wet ?? 0.0 },
    uWindAmp: { value: opts.windAmp ?? 0.0 },
    uWindSpeed: { value: opts.windSpeed ?? 1.6 },
    uBendH: { value: opts.bendH ?? 1.0 },
    uPhase: { value: opts.phase ?? 0.0 },
    uBillow: { value: opts.billow ?? 0.0 },
  });

  const mat = new THREE.ShaderMaterial({
    vertexShader: TOON_VERT,
    fragmentShader: TOON_FRAG,
    uniforms,
    defines,
    lights: true,
    side: opts.side ?? THREE.FrontSide,
    transparent: opts.transparent ?? false,
    depthWrite: opts.depthWrite ?? true,
  });
  mat.userData.uniforms = uniforms;
  return mat;
}

/* 快速材质预设 */
export const P = {
  grassBlade: (o = {}) => makeToon({
    color: 0x6f9a3a, rim: 0.55, rimColor: 0xd8f0a0, spec: 0.05, specPower: 8,
    fresnel: 0.05, noise: 0.22, noiseScale: 0.9, wrap: 0.55, trans: 0.35,
    side: THREE.DoubleSide, saturation: 1.05, ...o,
  }),
  leaf: (o = {}) => makeToon({
    color: 0x4d7a2e, rim: 0.75, rimColor: 0xd6ec9a, spec: 0.06, specPower: 10,
    fresnel: 0.04, noise: 0.26, noiseScale: 0.55, wrap: 0.62, trans: 0.5,
    saturation: 1.08, ...o,
  }),
  stone: (o = {}) => makeToon({
    color: 0xa9a08c, rim: 0.30, rimColor: 0xfff2d6, spec: 0.10, specPower: 12,
    fresnel: 0.14, noise: 0.16, noiseScale: 0.8, ...o,
  }),
  wood: (o = {}) => makeToon({
    color: 0x8a6a44, rim: 0.22, rimColor: 0xffe6bc, spec: 0.05, specPower: 10,
    fresnel: 0.06, noise: 0.14, noiseScale: 0.9, ...o,
  }),
  plaster: (o = {}) => makeToon({
    color: 0xdccfae, rim: 0.26, rimColor: 0xfff4da, spec: 0.04, specPower: 8,
    fresnel: 0.10, noise: 0.10, noiseScale: 0.6, ...o,
  }),
};
