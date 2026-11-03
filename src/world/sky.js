import * as THREE from 'three';
import { shared } from '../core/materials.js';

const SKY_VERT = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w; // 永远在最远
}
`;

const SKY_FRAG = /* glsl */`
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform float uTime;
uniform float uCloudCover;
uniform vec3 uZenith;
uniform vec3 uHorizon;

varying vec3 vDir;

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
float fbm6( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 6; i ++ ) { s += a * vnoise( p ); p = p * 2.03 + vec2( 1.7, -3.1 ); a *= 0.5; }
  return s;
}

// 积云密度场
float cloudDensity( vec2 p, float t ) {
  vec2 w = vec2( t * 0.0075, t * 0.0032 );
  float base = fbm6( p * 0.52 + w );
  float det  = fbm6( p * 1.75 - w * 2.1 + 3.7 );
  float d = base * 0.86 + det * 0.44 - 0.18;
  return smoothstep( 0.30, 0.54, d );
}

void main() {
  vec3 d = normalize( vDir );
  vec3 L = uSunDir;

  float h = clamp( d.y, -0.2, 1.0 );

  // ---- 天空渐变 ----
  vec3 col = mix( uHorizon, uSkyColor, smoothstep( -0.02, 0.34, h ) );
  col = mix( col, uZenith, smoothstep( 0.10, 0.95, h ) );

  // ---- 太阳 ----
  float sd = max( dot( d, L ), 0.0 );
  float disc = smoothstep( 0.9993, 0.99985, sd );
  col += uSunColor * disc * 5.0;
  col += uSunColor * pow( sd, 220.0 ) * 1.4;
  col += uSunColor * pow( sd, 14.0 ) * 0.30;
  col += uSunColor * pow( sd, 3.0 ) * 0.10;
  col += vec3( 0.06, 0.09, 0.05 ) * pow( sd, 1.4 );

  // ---- 云 ----
  float above = smoothstep( -0.02, 0.10, h );
  float t = uTime;

  // 低层大积云
  vec2 p = d.xz / max( d.y + 0.16, 0.055 ) * 3.4;
  float dens = cloudDensity( p, t );
  float dens2 = cloudDensity( p * 1.06 + vec2( 0.02 ), t * 1.05 );

  vec2 sunOff = L.xz * 0.55;
  float dSun = cloudDensity( p + sunOff, t );
  float lit = clamp( 0.52 + ( dens - dSun ) * 2.6, 0.0, 1.0 );

  vec3 cShade = vec3( 0.42, 0.52, 0.70 );
  vec3 cMid   = vec3( 0.78, 0.83, 0.91 );
  vec3 cLit   = vec3( 1.15, 1.13, 1.06 );
  vec3 cc = mix( cShade, cMid, smoothstep( 0.0, 0.55, lit ) );
  cc = mix( cc, cLit, smoothstep( 0.55, 1.0, lit ) );

  // 云的边缘透光
  float edge = smoothstep( 0.0, 0.35, dens ) * ( 1.0 - smoothstep( 0.35, 0.85, dens ) );
  cc += uSunColor * edge * pow( max( dot( normalize( vec3( d.x, 0.45, d.z ) ), L ), 0.0 ), 3.0 ) * 0.35;

  float cover = uCloudCover * mix( 0.55, 1.0, smoothstep( 0.0, 0.35, h ) );
  float a = clamp( dens * cover * above, 0.0, 1.0 );
  // 靠近太阳的云被照亮
  cc += uSunColor * pow( sd, 6.0 ) * 0.25 * a;
  col = mix( col, cc, a * 0.96 );

  // 高层卷云
  vec2 q = d.xz / max( d.y + 0.30, 0.12 );
  float cir = fbm6( vec2( q.x * 0.9 + t * 0.004, q.y * 3.4 - t * 0.002 ) + 11.0 );
  cir = smoothstep( 0.55, 0.86, cir ) * smoothstep( 0.02, 0.35, h ) * 0.45;
  col = mix( col, vec3( 1.0, 0.99, 0.97 ), cir * 0.5 );

  // ---- 地平线雾霭 ----
  float haze = smoothstep( 0.16, -0.06, h );
  vec3 hazeCol = mix( vec3( 0.50, 0.66, 0.74 ), uSunColor * 0.92, pow( sd, 2.0 ) * 0.5 );
  col = mix( col, hazeCol, haze * 0.92 );

  // 地平线以下
  col = mix( col, vec3( 0.72, 0.79, 0.74 ), smoothstep( -0.01, -0.14, h ) );

  // 轻微抖动，避免色带
  col += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;

  gl_FragColor = vec4( col, 1.0 );
}
`;

export function buildSky() {
  const geo = new THREE.SphereGeometry(1, 48, 32);
  const mat = new THREE.ShaderMaterial({
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    uniforms: {
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uSkyColor: { value: new THREE.Color(0.115, 0.335, 0.66) },
      uZenith: { value: new THREE.Color(0.045, 0.175, 0.50) },
      uHorizon: { value: new THREE.Color(0.40, 0.58, 0.71) },
      uTime: shared.uTime,
      uCloudCover: { value: 1.0 },
    },
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.scale.setScalar(3000);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1000;
  mesh.name = 'sky';
  return { mesh, material: mat };
}
