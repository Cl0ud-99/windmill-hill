import * as THREE from 'three';
import { shared } from '../core/materials.js';
import { mulberry32 } from '../core/noise.js';
import { terrainHeight, riverCenterZ, riverHalfWidth, STREAM_PTS, WATER_Y } from './layout.js';

/* ============================================================
   花粉 / 浮尘（三层）
   ------------------------------------------------------------
   原来是一层均匀撒在 90m 盒子里的点，看着像"满屏噪点"。
   现在拆成三层，各层的高度、大小、漂移速度、透明度都不同：

     低层  贴着草尖的一层浮絮：大、慢、亮，只在 34m 内可见
     中层  正常花粉：中等大小，72m 范围
     高层  高空细尘 / 飞絮：小、快、淡，铺到 130m

   水平方向仍然围着相机循环包裹（永远在视野附近又不会跟着走），
   垂直方向改成「贴地的一条带子」循环，这样花粉不会飘到地下去。
   ============================================================ */
const POLLEN_VERT = /* glsl */`
precision highp float;
uniform float uTime;
uniform vec3  uCam;
uniform float uGround;
uniform float uBoxXZ;
uniform float uYMin;
uniform float uYRange;
uniform float uSize;
uniform float uSway;
uniform vec2  uDrift;
uniform float uAlphaMul;
uniform vec3  uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  float t = uTime;
  float ph = aSeed * 6.2831853;

  // 摆动 + 单向风漂移
  float dx = sin( t * 0.21 + ph ) * uSway + t * uDrift.x;
  float dz = cos( t * 0.17 + ph * 0.75 ) * uSway + t * uDrift.y;
  float dy = sin( t * 0.33 + ph * 0.5 ) * uSway * 0.55;

  // XZ 围着相机循环
  float x = position.x + dx;
  float z = position.z + dz;
  vec3 wp;
  wp.x = uCam.x + mod( x - uCam.x + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  wp.z = uCam.z + mod( z - uCam.z + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  // Y 贴地循环
  wp.y = uGround + uYMin + mod( position.y + dy, uYRange );

  vec4 mv = viewMatrix * vec4( wp, 1.0 );
  float dist = -mv.z;

  // 太近 / 太远都淡出；远边界收在包裹半径内，避免突然弹出
  vAlpha = smoothstep( 1.4, 3.8, dist )
         * ( 1.0 - smoothstep( uBoxXZ * 0.30, uBoxXZ * 0.48, dist ) )
         * uAlphaMul;

  // 逆光更亮
  vec3 vd = normalize( wp - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 2.0 );

  gl_PointSize = min( uSize * aScale * ( 300.0 / max( dist, 0.5 ) ), 70.0 );
  gl_Position = projectionMatrix * mv;
}
`;

const POLLEN_FRAG = /* glsl */`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
uniform float uDusk;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.06, d );
  vec3 col = mix( uColor, uSunColor * 1.4, vBack * 0.75 );
  // 黄昏：整体压暗并往暖橘偏
  col = mix( col, col * vec3( 1.22, 0.86, 0.62 ), uDusk * 0.8 );
  gl_FragColor = vec4( col, a * vAlpha * ( 0.28 + vBack * 0.75 ) );
}
`;

const POLLEN_LAYERS = [
  // 低层：草尖浮絮
  { box: 34, count: 640, yMin: 0.10, yRange: 3.2, size: 0.090, sway: 0.55, drift: [0.10, 0.05], alpha: 1.30, color: 0xfff6dd },
  // 中层：花粉
  { box: 72, count: 1500, yMin: 0.35, yRange: 9.0, size: 0.058, sway: 0.90, drift: [0.22, 0.10], alpha: 0.98, color: 0xfff2d0 },
  // 高层：高空细尘
  { box: 132, count: 900, yMin: 2.80, yRange: 17.0, size: 0.036, sway: 1.30, drift: [0.40, 0.18], alpha: 0.55, color: 0xffffff },
];

export function buildPollen() {
  const group = new THREE.Group();
  group.name = 'pollen';

  const layers = POLLEN_LAYERS.map((L, li) => {
    const rnd = mulberry32(5 + li * 97);
    const pos = new Float32Array(L.count * 3);
    const seeds = new Float32Array(L.count);
    const scales = new Float32Array(L.count);
    for (let i = 0; i < L.count; i++) {
      pos[i * 3] = (rnd() - 0.5) * L.box;
      pos[i * 3 + 1] = rnd() * L.yRange;
      pos[i * 3 + 2] = (rnd() - 0.5) * L.box;
      seeds[i] = rnd();
      scales[i] = 0.55 + rnd() * 1.25;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

    const mat = new THREE.ShaderMaterial({
      vertexShader: POLLEN_VERT,
      fragmentShader: POLLEN_FRAG,
      uniforms: {
        uTime: shared.uTime,
        uCam: { value: new THREE.Vector3() },
        uGround: { value: 0 },
        uBoxXZ: { value: L.box },
        uYMin: { value: L.yMin },
        uYRange: { value: L.yRange },
        uSize: { value: L.size },
        uSway: { value: L.sway },
        uDrift: { value: new THREE.Vector2(...L.drift) },
        uAlphaMul: { value: L.alpha },
        uSunDir: shared.uSunDir,
        uColor: { value: new THREE.Color(L.color) },
        uSunColor: shared.uSunColor,
        uDusk: shared.uDusk,
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    pts.renderOrder = 20 + li;
    group.add(pts);
    return pts;
  });

  /* 每帧把相机位置和脚下地面高度喂进去 */
  group.userData.update = (camPos, groundY) => {
    for (const pts of layers) {
      const u = pts.material.uniforms;
      u.uCam.value.copy(camPos);
      u.uGround.value = groundY;
    }
  };
  group.userData.layers = layers;
  return group;
}

/* ============================================================
   河面薄雾
   ------------------------------------------------------------
   沿河道和尾水渠撒一批大尺寸软点，贴着水面缓慢打转。
   不做整体漂移（那样会飘出河道），只用低频正弦做局部涡流，
   看起来像水汽在原地翻涌。
   ============================================================ */
const MIST_VERT = /* glsl */`
precision highp float;
uniform float uTime;
uniform vec3  uCam;
uniform float uSize;
uniform float uAlphaMul;
uniform vec3  uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  float t = uTime;
  float ph = aSeed * 6.2831853;

  vec3 p = position;
  // 局部涡流：不产生净位移，所以雾团始终待在河道上方
  p.x += sin( t * 0.085 + ph ) * 2.4 + sin( t * 0.031 + ph * 2.1 ) * 1.3;
  p.z += cos( t * 0.067 + ph * 1.3 ) * 1.7;
  p.y += sin( t * 0.19 + ph * 0.7 ) * 0.28;

  vec4 mv = viewMatrix * vec4( p, 1.0 );
  float dist = -mv.z;

  // 近处不要糊住镜头，远处自然消失
  float fade = smoothstep( 2.0, 12.0, dist ) * ( 1.0 - smoothstep( 55.0, 135.0, dist ) );
  // 每团自己也有呼吸
  float breathe = 0.62 + 0.38 * sin( t * 0.23 + ph * 1.7 );
  vAlpha = fade * breathe * uAlphaMul;

  vec3 vd = normalize( p - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 3.0 );

  gl_PointSize = uSize * aScale * ( 300.0 / max( dist, 1.0 ) );
  gl_Position = projectionMatrix * mv;
}
`;

const MIST_FRAG = /* glsl */`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
uniform float uDusk;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  // 边缘收得很软，避免看出是个圆
  float a = smoothstep( 0.5, 0.0, d );
  a *= a;
  vec3 col = mix( uColor, uSunColor * 1.15, vBack * 0.55 );
  col = mix( col, col * vec3( 1.25, 0.84, 0.62 ), uDusk * 0.85 );
  // 傍晚水汽更重
  gl_FragColor = vec4( col, a * vAlpha * ( 1.0 + 0.55 * uDusk ) );
}
`;

export function buildRiverMist(riverCount = 200, streamCount = 54) {
  const rnd = mulberry32(913);
  const n = riverCount + streamCount;
  const pos = new Float32Array(n * 3);
  const seeds = new Float32Array(n);
  const scales = new Float32Array(n);

  let i = 0;
  // 主河道
  for (let k = 0; k < riverCount; k++, i++) {
    const x = -230 + (k / (riverCount - 1)) * 460 + (rnd() - 0.5) * 7;
    const zc = riverCenterZ(x);
    const hw = riverHalfWidth(x);
    pos[i * 3] = x;
    pos[i * 3 + 1] = WATER_Y + 0.18 + rnd() * 1.05;
    pos[i * 3 + 2] = zc + (rnd() - 0.5) * hw * 2.6;
    seeds[i] = rnd();
    scales[i] = 0.55 + rnd() * 1.05;
  }
  // 尾水渠（水车下游）
  for (let k = 0; k < streamCount; k++, i++) {
    const f = (k / Math.max(1, streamCount - 1)) * (STREAM_PTS.length - 1);
    const j = Math.min(STREAM_PTS.length - 2, Math.floor(f));
    const fr = f - j;
    const x = STREAM_PTS[j][0] + (STREAM_PTS[j + 1][0] - STREAM_PTS[j][0]) * fr;
    const z = STREAM_PTS[j][1] + (STREAM_PTS[j + 1][1] - STREAM_PTS[j][1]) * fr;
    pos[i * 3] = x + (rnd() - 0.5) * 1.6;
    pos[i * 3 + 1] = terrainHeight(x, z) + 0.25 + rnd() * 0.6;
    pos[i * 3 + 2] = z + (rnd() - 0.5) * 1.6;
    seeds[i] = rnd();
    scales[i] = 0.40 + rnd() * 0.55;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: MIST_VERT,
    fragmentShader: MIST_FRAG,
    uniforms: {
      uTime: shared.uTime,
      uCam: { value: new THREE.Vector3() },
      uSize: { value: 5.0 },
      uAlphaMul: { value: 0.28 },
      uSunDir: shared.uSunDir,
      uColor: { value: new THREE.Color(0xdfe9ee) },
      uSunColor: shared.uSunColor,
      uDusk: shared.uDusk,
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 17;
  pts.name = 'riverMist';
  pts.userData.update = (camPos) => { mat.uniforms.uCam.value.copy(camPos); };
  return pts;
}

/* ============================================================
   蝴蝶
   ============================================================ */
const BUTTERFLY_PALETTES = [
  [0xffe9a8, 0xe8a24e],   // 菜粉蝶
  [0xf8f4e8, 0xd6cfbb],   // 白粉蝶
  [0xffd6e6, 0xd483aa],   // 粉蝶
  [0xbfe4ff, 0x6fa8d8],   // 灰蝶
  [0xfff0b0, 0xd9a441],   // 黄粉蝶
];

/* 四片翅膀的局部布局：左上 / 右上 / 左下 / 右下
   pal 指向配色表里的第 0 或第 1 个颜色 */
const WING_CFG = [
  { side: 1,  pos: [0.044, 0.008, 0],       s: 1.0, pal: 0, flapK: 1.0 },
  { side: -1, pos: [-0.044, 0.008, 0],      s: 1.0, pal: 1, flapK: 1.0 },
  { side: 1,  pos: [0.042, -0.013, -0.013], s: 0.7, pal: 1, flapK: 0.8 },
  { side: -1, pos: [-0.042, -0.013, -0.013], s: 0.7, pal: 0, flapK: 0.8 },
];

export function buildButterflies(spots, count = 26) {
  const group = new THREE.Group();
  group.name = 'butterflies';
  const rnd = mulberry32(31);

  /* 全部蝴蝶只用两个 InstancedMesh 画完：
     身体一个、四片翅膀合成一个。之前每只 5 个 Mesh，
     26 只就是 130 次 draw call，实测要 2ms；合并后 2 次。 */
  const wingGeo = new THREE.PlaneGeometry(0.086, 0.068);
  const wingMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const bodyGeo = new THREE.CapsuleGeometry(0.008, 0.05, 3, 6);
  bodyGeo.rotateX(Math.PI / 2);
  const bodyMat = new THREE.MeshBasicMaterial({ color: 0x3a2c1c });

  const wings = new THREE.InstancedMesh(wingGeo, wingMat, count * 4);
  const bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, count);
  wings.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  bodies.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  wings.frustumCulled = false;
  bodies.frustumCulled = false;
  wings.renderOrder = 6;
  bodies.renderOrder = 6;
  group.add(wings, bodies);

  const state = [];
  const _c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const spot = spots[Math.floor(rnd() * spots.length)];
    const pal = BUTTERFLY_PALETTES[Math.floor(rnd() * BUTTERFLY_PALETTES.length)];
    state.push({
      cx: spot.x + (rnd() - 0.5) * 3.4,
      cz: spot.z + (rnd() - 0.5) * 3.4,
      baseY: terrainHeight(spot.x, spot.z) + 0.45 + rnd() * 1.15,
      phase: rnd() * 6.28,
      speed: 0.42 + rnd() * 0.75,
      radius: 0.8 + rnd() * 2.1,
      flapRate: 15 + rnd() * 8,
      bob: 0.16 + rnd() * 0.22,
      sz: 0.78 + rnd() * 0.55,
      pal,
    });
    for (let k = 0; k < 4; k++) {
      wings.setColorAt(i * 4 + k, _c.setHex(WING_CFG[k].pal === 0 ? pal[0] : pal[1]));
    }
  }

  const _pos = new THREE.Vector3(), _q = new THREE.Quaternion(), _scl = new THREE.Vector3();
  const _pos2 = new THREE.Vector3(), _q2 = new THREE.Quaternion(), _scl2 = new THREE.Vector3();
  const _e = new THREE.Euler();
  const _m = new THREE.Matrix4(), _m2 = new THREE.Matrix4();

  let t = 0;
  group.userData.update = (dt) => {
    t += dt;

    // 跟着太阳变色：黄昏时整体压暗并染暖
    const s = shared.uSunColor.value;
    const k = 0.45 + 0.55 * (s.r * 0.35 + s.g * 0.45 + s.b * 0.20);
    for (let i = 0; i < count; i++) {
      const pal = state[i].pal;
      for (let w = 0; w < 4; w++) {
        _c.setHex(WING_CFG[w].pal === 0 ? pal[0] : pal[1]).multiplyScalar(k).lerp(s, 0.22);
        wings.setColorAt(i * 4 + w, _c);
      }
    }
    if (wings.instanceColor) wings.instanceColor.needsUpdate = true;

    for (let i = 0; i < count; i++) {
      const u = state[i];
      const a = t * u.speed + u.phase;
      _pos.set(
        u.cx + Math.cos(a) * u.radius,
        u.baseY + Math.sin(a * 2.3) * u.bob,
        u.cz + Math.sin(a * 0.83) * u.radius
      );
      _e.set(0, -a + Math.PI / 2, 0);
      _q.setFromEuler(_e);
      _scl.setScalar(u.sz);
      _m.compose(_pos, _q, _scl);
      bodies.setMatrixAt(i, _m);

      const flap = Math.sin(t * u.flapRate + u.phase) * 0.9;
      for (let w = 0; w < 4; w++) {
        const c = WING_CFG[w];
        _pos2.set(c.pos[0], c.pos[1], c.pos[2]);
        _e.set(0, c.side * 0.35, flap * c.flapK);
        _q2.setFromEuler(_e);
        _scl2.set(c.s, c.s, 1);
        _m2.compose(_pos2, _q2, _scl2);
        _m2.premultiply(_m);
        wings.setMatrixAt(i * 4 + w, _m2);
      }
    }
    wings.instanceMatrix.needsUpdate = true;
    bodies.instanceMatrix.needsUpdate = true;
  };
  group.userData.count = count;
  return group;
}

/* ============================================================
   烟囱炊烟
   ============================================================ */
const SMOKE_VERT = /* glsl */`
precision highp float;
uniform float uTime;
uniform float uRise;
uniform float uSpread;
attribute float aSeed;
varying float vAlpha;

void main() {
  float t = fract( uTime * 0.13 + aSeed );
  vec3 p = position;
  p.y += t * uRise;
  p.x += sin( t * 4.2 + aSeed * 6.28 ) * uSpread * t + t * t * uSpread * 0.9;
  p.z += cos( t * 3.1 + aSeed * 4.71 ) * uSpread * 0.8 * t;

  vec4 mv = modelViewMatrix * vec4( p, 1.0 );
  float dist = -mv.z;
  vAlpha = smoothstep( 0.0, 0.10, t ) * ( 1.0 - smoothstep( 0.45, 1.0, t ) ) * 0.42;
  gl_PointSize = ( 0.22 + t * 1.05 ) * 320.0 / max( dist, 1.0 );
  gl_Position = projectionMatrix * mv;
}
`;

const SMOKE_FRAG = /* glsl */`
precision highp float;
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.05, d );
  gl_FragColor = vec4( uColor, a * vAlpha );
}
`;

export function buildSmoke(count = 22, rise = 3.4, spread = 0.5) {
  const rnd = mulberry32(404);
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rnd() - 0.5) * 0.16;
    pos[i * 3 + 1] = 0;
    pos[i * 3 + 2] = (rnd() - 0.5) * 0.16;
    seed[i] = rnd();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: SMOKE_VERT,
    fragmentShader: SMOKE_FRAG,
    uniforms: {
      uTime: shared.uTime,
      uRise: { value: rise },
      uSpread: { value: spread },
      uColor: { value: new THREE.Color(0xd8d6cf) },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 18;
  return pts;
}
