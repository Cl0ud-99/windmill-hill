import * as THREE from 'three';
import {
  WORLD, HALF, WATER_Y, terrainHeight, riverCenterZ, riverHalfWidth,
  PATH_MAIN, PATH_GARDEN, WALL_PTS, STREAM_PTS, resample, nearestOnPolyline,
} from './layout.js';
import { shared, makeToon } from '../core/materials.js';
import { fbm, hash2, clamp, smoothstep, mulberry32 } from '../core/noise.js';
import { dirtTexture } from '../core/textures.js';

const LIGHT_GLSL = /* glsl */`
uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uBounceColor;
uniform vec3  uShadowTint;
uniform vec3  uFogColor;
uniform float uFogDensity;
uniform float uTime;

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
  float a = hash21( i ), b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) ), d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}
float fbm2l( vec2 p ) {
  return vnoise( p ) * 0.66 + vnoise( p * 2.07 + 5.3 ) * 0.34;
}
`;

const TERRAIN_VERT = /* glsl */`
precision highp float;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying float vHeight;

#include <shadowmap_pars_vertex>

void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vWorld = wp.xyz;
  vNormalW = normalize( mat3( modelMatrix ) * normal );
  vView = cameraPosition - wp.xyz;
  vHeight = position.y;

  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vDirectionalShadowCoord[ 0 ] = directionalShadowMatrix[ 0 ] * vec4( wp.xyz + vNormalW * 0.10, 1.0 );
  #endif

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const TERRAIN_FRAG = /* glsl */`
precision highp float;

uniform sampler2D uSplat;
uniform sampler2D uDirt;
uniform sampler2D uAO;
uniform vec4 uAORegion;  // cx, cz, size, -
uniform vec3 uGrass1;
uniform vec3 uGrass2;
uniform vec3 uGrass3;
uniform vec3 uDirtCol;
uniform vec3 uRockCol;
uniform float uWaterY;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying float vHeight;

${LIGHT_GLSL}

void main() {
  vec2 sp = vec2( ( vWorld.x + 210.0 ) / 420.0, ( vWorld.z + 210.0 ) / 420.0 );
  vec3 splat = texture2D( uSplat, sp ).rgb;

  vec3 N = normalize( vNormalW );
  vec3 V = normalize( vView );
  vec3 L = uSunDir;

  // 烘焙环境光遮蔽（建筑 / 石墙 / 树根与地面的接触阴影）
  vec2 aoUv = ( vWorld.xz - vec2( uAORegion.x - uAORegion.z * 0.5, uAORegion.y - uAORegion.z * 0.5 ) ) / uAORegion.z;
  float ao = 1.0;
  if ( aoUv.x > 0.0 && aoUv.x < 1.0 && aoUv.y > 0.0 && aoUv.y < 1.0 ) {
    ao = texture2D( uAO, aoUv ).r;
  }

  float slope = 1.0 - clamp( N.y, 0.0, 1.0 );

  float n1 = fbm2( vWorld.xz * 0.055 );
  float n2 = fbm2( vWorld.xz * 0.62 + 13.0 );
  float n3 = fbm2( vWorld.xz * 3.4 + 41.0 );
  float n0 = fbm2( vWorld.xz * 0.0135 + 77.0 );

  // 草色：黄绿 → 深绿，大尺度田块变化
  vec3 grass = mix( uGrass1, uGrass2, smoothstep( 0.30, 0.78, n1 ) );
  grass = mix( grass, uGrass3, smoothstep( 0.40, 0.86, n2 ) * 0.62 );
  grass = mix( grass, uGrass3 * 1.08, smoothstep( 0.45, 0.85, n0 ) * 0.45 );
  grass *= 0.88 + 0.24 * n3;

  vec3 dirt = texture2D( uDirt, vWorld.xz * 0.85 ).rgb;
  dirt = mix( uDirtCol, dirt, 0.55 );
  // 碎石颗粒
  float gravel = smoothstep( 0.66, 0.94, vnoise( vWorld.xz * 7.0 ) );
  dirt = mix( dirt, dirt * 1.35 + 0.03, gravel * 0.5 );
  // 车辙：沿路方向的两道浅槽
  dirt *= 0.88 + 0.12 * smoothstep( 0.2, 0.7, abs( sin( vWorld.z * 1.6 ) ) );

  float dirtMask = clamp( splat.g * 1.25, 0.0, 1.0 );
  dirtMask *= 0.75 + 0.35 * n2;
  vec3 col = mix( grass, dirt, dirtMask );

  // 坡地岩石
  float rockMask = smoothstep( 0.42, 0.80, slope ) * 0.75 + splat.b * 0.16 * ( 1.0 - splat.g );
  rockMask = clamp( rockMask, 0.0, 1.0 );
  vec3 rock = uRockCol * ( 0.78 + 0.42 * n3 );
  col = mix( col, rock, rockMask * 0.9 );

  // 河岸湿土
  float shore = smoothstep( 0.15, 0.85, splat.b ) * ( 1.0 - splat.g * 1.6 );
  shore = clamp( shore, 0.0, 1.0 );
  col = mix( col, uDirtCol * 0.34, shore * 0.50 );

  // 草间的细碎花点（远距离）
  float dist = length( vWorld - cameraPosition );
  float fl = hash21( floor( vWorld.xz * 9.0 ) );
  float fm = step( 0.988, fl ) * smoothstep( 0.5, 0.8, n2 ) * ( 1.0 - dirtMask ) * ( 1.0 - rockMask );
  fm *= smoothstep( 34.0, 12.0, dist );
  col = mix( col, vec3( 1.0, 0.98, 0.82 ) * 1.02, fm * 0.35 );

  // 水下焦散
  float depth = uWaterY - vWorld.y;
  float caustic = 0.0;
  if ( depth > 0.0 ) {
    vec2 cuv = vWorld.xz * 1.1;
    float c1 = fbm2l( cuv + vec2( uTime * 0.13, uTime * 0.07 ) );
    float c2 = fbm2l( cuv * 1.7 - vec2( uTime * 0.09, uTime * 0.16 ) );
    caustic = pow( abs( c1 - c2 ), 1.6 ) * 6.0;
    caustic *= smoothstep( 0.0, 0.35, depth ) * ( 1.0 - smoothstep( 1.2, 3.0, depth ) );
  }
  col += caustic * vec3( 0.55, 0.72, 0.55 ) * 0.55;

  col *= ao;

  float shadow = getShadowMask();
  float ndl = dot( N, L );
  float diff = clamp( ( ndl + 0.15 ) / 1.15, 0.0, 1.0 );
  float cs = fbm2l( vWorld.xz * 0.0075 + vec2( uTime * 0.0035, uTime * 0.0018 ) );
  cs = smoothstep( 0.44, 0.60, cs );
  float term = diff * mix( 0.45, 1.0, shadow ) * mix( 0.62, 1.0, cs );
  float lit = smoothstep( 0.06, 0.62, term );
  float hi = smoothstep( 0.55, 0.99, term );

  vec3 shadowC = col * uShadowTint * 0.88;
  vec3 midC = col * 1.0;
  vec3 litC = col * uSunColor * 1.08;

  vec3 outc = mix( shadowC, midC, lit );
  outc = mix( outc, litC, hi * 0.9 );

  outc += col * uSkyColor * 0.05 * ( 0.5 + 0.5 * N.y ) * ( 0.5 + 0.5 * shadow );
  outc += col * uBounceColor * 0.05;

  // 湿地面反光
  float wet = clamp( shore * 0.9 + caustic * 0.1, 0.0, 1.0 );
  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 4.0 );
  vec3 R = reflect( -V, N );
  vec3 skyRefl = mix( uFogColor * 1.1, uSkyColor * 1.1, clamp( R.y * 0.5 + 0.5, 0.0, 1.0 ) );
  outc = mix( outc, skyRefl, fres * ( 0.05 + wet * 0.28 ) );
  vec3 H = normalize( L + V );
  float spec = pow( max( dot( N, H ), 0.0 ), 26.0 );
  outc += uSunColor * spec * ( 0.02 + wet * 0.16 ) * mix( 0.3, 1.0, shadow );

  // 大气
  vec3 vd = normalize( vWorld - cameraPosition );
  float hLow = exp( -max( vWorld.y - 1.5, 0.0 ) * 0.045 );
  float density = 0.55 + 0.45 * hLow;
  float f = 1.0 - exp( -dist * uFogDensity * density );
  float sunAmt = pow( max( dot( vd, L ), 0.0 ), 3.0 );
  vec3 fogC = uFogColor + uSunColor * ( 0.20 + 0.30 * hLow ) * sunAmt;
  float lum0 = dot( outc, vec3( 0.299, 0.587, 0.114 ) );
  outc = mix( outc, vec3( lum0 ) * 0.9 + outc * 0.1, f * 0.22 );
  outc = mix( outc, fogC, clamp( f, 0.0, 0.95 ) );

  outc += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;
  gl_FragColor = vec4( outc, 1.0 );
}
`;

/* ---------------- 地表贴图（草地 / 土路 / 湿地 / 石砾） ---------------- */
export function buildSplatMap(size = 2048) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const S = size / WORLD;
  const X = (x) => (x + HALF) * S;
  const Z = (z) => (z + HALF) * S;

  g.fillStyle = 'rgb(150,0,0)';
  g.fillRect(0, 0, size, size);

  // 草地茂盛度变化
  const rnd = mulberry32(5);
  g.globalCompositeOperation = 'source-over';
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * size, y = rnd() * size;
    const r = 12 + rnd() * 90;
    g.fillStyle = `rgba(${120 + rnd() * 135},0,0,${0.05 + rnd() * 0.16})`;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }

  // 河流湿地
  const riverPts = [];
  for (let x = -HALF; x <= HALF; x += 2) {
    const hw = riverHalfWidth(x);
    riverPts.push([x, riverCenterZ(x) - hw - 1.6]);
  }
  for (let x = HALF; x >= -HALF; x -= 2) {
    const hw = riverHalfWidth(x);
    riverPts.push([x, riverCenterZ(x) + hw + 1.6]);
  }
  g.save();
  g.filter = 'blur(7px)';
  g.fillStyle = 'rgb(0,0,225)';
  g.beginPath();
  riverPts.forEach(([x, z], i) => i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)));
  g.closePath(); g.fill();
  g.restore();

  // 溪流
  g.save();
  g.filter = 'blur(6px)';
  g.strokeStyle = 'rgb(0,0,255)';
  g.lineWidth = 1.0 * S;
  g.lineCap = 'round'; g.lineJoin = 'round';
  g.beginPath();
  STREAM_PTS.forEach(([x, z], i) => i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)));
  g.stroke();
  g.restore();

  // 土路
  const drawPath = (pts, w) => {
    g.save();
    g.filter = 'blur(4px)';
    g.strokeStyle = 'rgb(0,255,0)';
    g.lineWidth = w * S;
    g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath();
    pts.forEach(([x, z], i) => i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)));
    g.stroke();
    g.restore();
  };
  drawPath(PATH_MAIN, 2.4);
  drawPath(PATH_MAIN, 2.4);
  drawPath(PATH_GARDEN, 1.5);

  // 花园土床
  const beds = [
    [13.2, 13.6, 4.6, 2.6], [18.6, 13.2, 4.2, 2.4], [17.2, 7.6, 5.0, 2.2],
    [21.4, 9.8, 2.6, 3.0], [12.4, 9.0, 2.4, 1.8],
  ];
  for (const [x, z, rx, rz] of beds) {
    g.save();
    g.filter = 'blur(6px)';
    g.fillStyle = 'rgb(0,120,0)';
    g.beginPath(); g.ellipse(X(x), Z(z), rx * S, rz * S, 0.2, 0, 7); g.fill();
    g.restore();
  }

  // 建筑根部裸土
  g.save();
  g.filter = 'blur(6px)';
  g.fillStyle = 'rgb(0,235,0)';
  g.beginPath(); g.ellipse(X(0), Z(0), 4.5 * S, 4.5 * S, 0, 0, 7); g.fill();
  g.beginPath(); g.ellipse(X(-8.3), Z(1.5), 5.0 * S, 4.0 * S, 0.1, 0, 7); g.fill();
  g.restore();

  // 花园碎石地
  g.save();
  g.filter = 'blur(8px)';
  g.fillStyle = 'rgb(0,150,0)';
  g.beginPath();
  g.ellipse(X(16.4), Z(11.4), 8.2 * S, 6.4 * S, 0.1, 0, 7);
  g.fill();
  g.restore();

  // 石墙脚下的裸土
  g.save();
  g.filter = 'blur(5px)';
  g.strokeStyle = 'rgba(0,150,0,0.55)';
  g.lineWidth = 1.0 * S;
  g.beginPath();
  WALL_PTS.forEach(([x, z], i) => i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)));
  g.stroke();
  g.restore();

  const data = g.getImageData(0, 0, size, size);
  const t = new THREE.DataTexture(new Uint8Array(data.data), size, size, THREE.RGBAFormat);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.flipY = false;
  t.needsUpdate = true;
  return { texture: t, canvas: c, data: data.data, size };
}

/* ---------------- 高度图（供水体计算水深，16 位精度编码进 RGBA8） ---------------- */
export function buildHeightTexture(size = 512) {
  const data = new Uint8Array(size * size * 4);
  const MIN = -8, RANGE = 40;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const wx = (x / (size - 1)) * WORLD - HALF;
      const wz = (y / (size - 1)) * WORLD - HALF;
      const h = terrainHeight(wx, wz);
      const v = clamp((h - MIN) / RANGE, 0, 1);
      const v16 = Math.round(v * 65535);
      const i = (y * size + x) * 4;
      data[i] = (v16 >> 8) & 255;
      data[i + 1] = v16 & 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearFilter;
  t.flipY = false;
  t.needsUpdate = true;
  t.userData = { MIN, RANGE };
  return t;
}

/* ---------------- 地形网格 ---------------- */
const WHITE_TEX = new THREE.DataTexture(new Uint8Array([255,255,255,255]), 1, 1);
WHITE_TEX.needsUpdate = true;

export function buildTerrain(splatTex, aoTex) {
  const seg = 460;
  const geo = new THREE.PlaneGeometry(WORLD, WORLD, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, terrainHeight(x, z));
  }
  geo.computeVertexNormals();
  geo.computeBoundingSphere();

  const dirt = dirtTexture(512);
  dirt.repeat.set(1, 1);

  const mat = new THREE.ShaderMaterial({
    vertexShader: TERRAIN_VERT,
    fragmentShader: TERRAIN_FRAG,
    uniforms: Object.assign({}, THREE.UniformsLib.lights, shared, {
      uSplat: { value: splatTex },
      uDirt: { value: dirt },
      uAO: { value: aoTex || WHITE_TEX },
      uAORegion: { value: new THREE.Vector4(2, 34, 220, 0) },
      uGrass1: { value: new THREE.Color(0x82a03c) },
      uGrass2: { value: new THREE.Color(0x4c6e28) },
      uGrass3: { value: new THREE.Color(0x2c4a1c) },
      uDirtCol: { value: new THREE.Color(0x9c855f) },
      uRockCol: { value: new THREE.Color(0x6d6858) },
      uWaterY: { value: WATER_Y },
    }),
    lights: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.name = 'terrain';
  return { mesh, material: mat };
}

/* ---------------- 远山 ---------------- */
export function buildFarHills() {
  const group = new THREE.Group();
  const layers = [
    { r0: 150, r1: 400, h: 32, color: 0x6f8a63, seed: 1.3, seg: 220 },
    { r0: 360, r1: 680, h: 62, color: 0x7e97a0, seed: 4.7, seg: 180 },
    { r0: 620, r1: 1150, h: 96, color: 0x9db2b8, seed: 9.1, seg: 150 },
  ];
  for (const L of layers) {
    const seg = L.seg, rings = 7;
    const geo = new THREE.BufferGeometry();
    const verts = [], idx = [], uvs = [];
    for (let j = 0; j <= rings; j++) {
      const rt = j / rings;
      const r = L.r0 + (L.r1 - L.r0) * rt;
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const ridge = fbm(Math.cos(a) * 3.2 + L.seed, Math.sin(a) * 3.2 + L.seed, 4);
        const ridge2 = fbm(Math.cos(a) * 8.0 + L.seed * 2, Math.sin(a) * 8.0, 3);
        let hh = (ridge * 0.75 + ridge2 * 0.35) * L.h * Math.sin(Math.PI * Math.min(1, rt * 1.15));
        hh *= 0.55 + 0.45 * smoothstep(0, 0.35, rt);
        hh += 12 * Math.sin(a * 5 + L.seed) * rt;
        verts.push(x, hh - 2, z);
        uvs.push(i / seg, rt);
      }
    }
    for (let j = 0; j < rings; j++) {
      for (let i = 0; i < seg; i++) {
        const a = j * (seg + 1) + i;
        const b = a + seg + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();

    const mat = makeToon({
      color: L.color, rim: 0.18, spec: 0, fresnel: 0.02,
      noise: 0.10, noiseScale: 0.02, side: THREE.DoubleSide, ao: 1.0,
      saturation: 0.9,
    });
    mat.uniforms.uFogDensity = { value: 0.0024 };
    const m = new THREE.Mesh(geo, mat);
    m.frustumCulled = false;
    group.add(m);
  }
  return group;
}
