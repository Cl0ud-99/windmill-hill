import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { cyl, jitter } from '../core/geom.js';
import { mulberry32 } from '../core/noise.js';

/* ============================================================
   卡通动物 —— 统一造型语言
   ------------------------------------------------------------
   · 头身比 ≈ 1 : 1.2，脑袋是全身视觉重心
   · 全部由椭球 / 圆锥拼出来，不贴任何贴图
   · 只用三块色：主色、亮部（肚皮/口鼻/爪）、深部（耳朵/尾尖）
   · 眼睛是黑豆 + 一点高光，会眨
   · 四肢极短，脚掌是压扁的球
   ============================================================ */

const M = {};

/* —— 造型基元 ——————————————————————————————— */

const add = (parent, geo, mat, x = 0, y = 0, z = 0, shadow = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  parent.add(m);
  return m;
};

/* 椭球：卡通身体唯一需要的基元
   seg 给大形体用高分段，色块交界才不会出现锯齿 */
const ball = (parent, mat, r, sx, sy, sz, x, y, z, shadow = true, seg = 0) => {
  const [w, h] = seg === 1 ? [20, 16] : seg === 2 ? [32, 24] : [26, 20];
  const m = add(parent, new THREE.SphereGeometry(r, w, h), mat, x, y, z, shadow);
  m.scale.set(sx, sy, sz);
  return m;
};

/* 花斑：直接在球面上刷顶点色，比另外叠一个球干净得多（不会有 z-fighting）
   spots: [x, y, z, 半径]，坐标是几何体本地坐标 */
function paintSpots(geo, ratio, spots) {
  const pos = geo.attributes.position;
  const n = pos.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    let m = 0;
    for (const sp of spots) {
      const dx = x - sp[0], dy = y - sp[1], dz = z - sp[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz) / sp[3];
      const k = 1 - Math.min(1, Math.max(0, (d - 0.88) / 0.12));
      if (k > m) m = k;
    }
    m = m * m * (3 - 2 * m);
    arr[i * 3] = 1 + (ratio.r - 1) * m;
    arr[i * 3 + 1] = 1 + (ratio.g - 1) * m;
    arr[i * 3 + 2] = 1 + (ratio.b - 1) * m;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

/* 两个颜色在着色器里是相乘关系，所以先算好比值 */
function ratioOf(base, patch) {
  const b = new THREE.Color(base), p = new THREE.Color(patch);
  return new THREE.Color(p.r / b.r, p.g / b.g, p.b / b.b);
}

/* 翅膀：把球沿 -Z 收窄成水滴，折叠的翅膀才有方向感 */
function wingGeo(r = 0.08, flat = 0.42) {
  const g = new THREE.SphereGeometry(r, 20, 14);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const t = Math.min(1, Math.max(0, 0.5 - v.z / (2 * r)));  // 1 = 前端，0 = 后端
    const k = 0.28 + 0.72 * Math.pow(t, 0.55);
    const ky = 0.52 + 0.48 * Math.pow(t, 0.80);
    p.setXYZ(i, v.x * flat, v.y * ky, v.z);
  }
  p.needsUpdate = true;
  g.computeVertexNormals();
  return g;
}

/* 从枢轴向下生长的圆柱（腿） */
const rod = (rTop, rBot, h, seg = 10) => {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg, 1);
  g.translate(0, -h / 2, 0);
  return g;
};

/* 两点之间一根锥形管（尾巴 / 脖子） */
function tubeBetween(parent, mat, a, b, ra, rb) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(rb, ra, len, 8, 1);
  geo.translate(0, len / 2, 0);
  const m = new THREE.Mesh(geo, mat);
  m.position.copy(a);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

/* 一条腿：髋球 + 上段 + 膝球 + 下段 + 蹄
   髋球的球心就是转轴，所以腿怎么摆都不会和身体之间露出缝 */
function makeLeg(parent, o) {
  const {
    x, y, z, ph = 0, amp = 0.5, bend = 0.5,
    hipR = 0.08, hipSY = 0.55, rTop, rKnee, rAnkle,
    upper, lower, kneeZ = 0.010,
    mat, hipMat, hoofMat, hoofR, hoofSY = 0.6, hoofZ = 0.004,
    seg = 10,
  } = o;

  const hip = new THREE.Group();
  hip.position.set(x, y, z);
  parent.add(hip);

  // 髋部做成一块压扁、前后拉长的「肉丘」，贴着身体曲线，
  // 而不是一颗球——球会像贴上去的补丁
  ball(hip, hipMat || mat, hipR, 1.12, hipSY, 1.42, 0, 0, 0, true, 1);
  add(hip, rod(rTop, rKnee, upper, seg), mat, 0, 0, 0);

  const knee = new THREE.Group();
  knee.position.set(0, -upper, kneeZ);
  hip.add(knee);
  ball(knee, mat, rKnee * 0.99, 1, 1, 1, 0, 0, 0, false, 1);
  add(knee, rod(rKnee, rAnkle, lower, seg), mat, 0, 0, 0);

  const foot = new THREE.Group();
  foot.position.y = -lower;
  knee.add(foot);
  if (hoofR > 0) ball(foot, hoofMat, hoofR, 1, hoofSY, 1.1, 0, 0, hoofZ, true, 1);

  return { g: hip, knee, foot, ph, amp, bend, rest: 0 };
}

/* 折线串成一条尾巴 */
function chain(parent, mat, pts, r0, r1, tipMat) {
  const n = pts.length - 1;
  for (let i = 0; i < n; i++) {
    const ra = r0 + (r1 - r0) * (i / n);
    const rb = r0 + (r1 - r0) * ((i + 1) / n);
    tubeBetween(parent, mat, pts[i], pts[i + 1], ra, rb);
  }
  if (tipMat) {
    const p = pts[n];
    add(parent, new THREE.SphereGeometry(r1, 10, 8), tipMat, p.x, p.y, p.z);
  }
}

const V = (x, y, z) => new THREE.Vector3(x, y, z);

/* —— 材质 ——————————————————————————————————— */

function animalMats(c) {
  return {
    main: makeToon({
      color: c.main, rim: 0.20, rimColor: 0xfff2d8, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30, saturation: 1.05,
    }),
    light: makeToon({
      color: c.light, rim: 0.18, rimColor: 0xffffff, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30,
    }),
    dark: makeToon({
      color: c.dark, rim: 0.16, rimColor: 0xffe8c8, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30,
    }),
    eye: makeToon({
      color: 0x201c19, rim: 0.0, spec: 0.55, specPower: 70,
      fresnel: 0.0, noise: 0.0,
    }),
  };
}

function initMats() {
  if (M.ready) return;
  M.ready = true;

  M.cat = {
    ...animalMats({ main: 0xd9a86a, light: 0xf2e6d2, dark: 0xa8763f }),
    pink: makeToon({ color: 0xe89a9a, rim: 0.1, spec: 0.0, fresnel: 0.02, noise: 0.0 }),
  };
  M.dog = {
    ...animalMats({ main: 0xc07a44, light: 0xf7ecd8, dark: 0x7c4a28 }),
    pink: makeToon({ color: 0xd9748a, rim: 0.1, spec: 0.0, fresnel: 0.02, noise: 0.0 }),
    nose: makeToon({ color: 0x2a2320, rim: 0.05, spec: 0.4, specPower: 40, fresnel: 0.0, noise: 0.0 }),
  };
  M.chicken = {
    main: makeToon({ color: 0xf8f2e4, rim: 0.22, rimColor: 0xfffaf0, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    light: makeToon({ color: 0xfffbf2, rim: 0.20, rimColor: 0xffffff, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    dark: makeToon({ color: 0xe4d9c2, rim: 0.18, rimColor: 0xfff2d8, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    wing: makeToon({ color: 0xe6dcc6, rim: 0.20, rimColor: 0xfff2d8, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.32 }),
    red: makeToon({ color: 0xd4463a, rim: 0.22, rimColor: 0xffb0a0, spec: 0.06, specPower: 20, fresnel: 0.03, noise: 0.0 }),
    beak: makeToon({ color: 0xe8a63c, rim: 0.2, rimColor: 0xffd890, spec: 0.05, specPower: 20, fresnel: 0.03, noise: 0.0 }),
    eye: makeToon({ color: 0x201c19, rim: 0.0, spec: 0.6, specPower: 70, fresnel: 0.0, noise: 0.0 }),
  };
  // —— 牛：奶油底 + 暖褐花斑（花斑走顶点色，见 paintSpots）——
  M.cow = {
    base: makeToon({
      color: 0xe8dabd, rim: 0.20, rimColor: 0xfff6e2, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30, vcolor: true,
    }),
    plain: makeToon({
      color: 0xe8dabd, rim: 0.20, rimColor: 0xfff6e2, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30,
    }),
    leg: makeToon({ color: 0xd0bf9d, rim: 0.18, rimColor: 0xfff2dc, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.30 }),
    patch: makeToon({
      color: 0x9a5f36, rim: 0.18, rimColor: 0xe8c49a, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.30,
    }),
    muzzle: makeToon({ color: 0xd99a92, rim: 0.16, rimColor: 0xffd0c8, spec: 0.0, fresnel: 0.02, noise: 0.0 }),
    horn: makeToon({ color: 0xd8c9a8, rim: 0.22, rimColor: 0xfff6e0, spec: 0.08, specPower: 20, fresnel: 0.04, noise: 0.0 }),
    hoof: makeToon({ color: 0x4a3b30, rim: 0.12, rimColor: 0x8a7460, spec: 0.1, specPower: 16, fresnel: 0.02, noise: 0.0 }),
    eye: makeToon({ color: 0x201c19, rim: 0.0, spec: 0.55, specPower: 70, fresnel: 0.0, noise: 0.0 }),
  };
  // —— 羊：羊毛 + 深色脸 ——
  M.sheep = {
    wool: makeToon({
      color: 0xf4efe2, rim: 0.24, rimColor: 0xfffdf4, spec: 0.0,
      fresnel: 0.02, noise: 0.0, wrap: 0.36,
    }),
    face: makeToon({ color: 0x6b5c50, rim: 0.18, rimColor: 0xa89a8c, spec: 0.04, specPower: 14, fresnel: 0.03, noise: 0.0 }),
    ear: makeToon({ color: 0xd8b6a8, rim: 0.16, rimColor: 0xffd8c8, spec: 0.0, fresnel: 0.02, noise: 0.0 }),
    eye: makeToon({ color: 0x201c19, rim: 0.0, spec: 0.55, specPower: 70, fresnel: 0.0, noise: 0.0 }),
    hoof: makeToon({ color: 0x4a3b30, rim: 0.12, rimColor: 0x8a7460, spec: 0.08, specPower: 16, fresnel: 0.02, noise: 0.0 }),
  };
  M.duck = {
    main: makeToon({ color: 0xf7f3ea, rim: 0.22, rimColor: 0xfffaf0, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    light: makeToon({ color: 0xfffdf8, rim: 0.20, rimColor: 0xffffff, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    dark: makeToon({ color: 0xe6ddcb, rim: 0.18, rimColor: 0xfff2d8, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.34 }),
    wing: makeToon({ color: 0xece4d3, rim: 0.20, rimColor: 0xfff2d8, spec: 0.0, fresnel: 0.02, noise: 0.0, wrap: 0.32 }),
    bill: makeToon({ color: 0xe89a34, rim: 0.22, rimColor: 0xffd08a, spec: 0.08, specPower: 24, fresnel: 0.03, noise: 0.0 }),
    eye: makeToon({ color: 0x201c19, rim: 0.0, spec: 0.6, specPower: 70, fresnel: 0.0, noise: 0.0 }),
  };
}

/* —— 一对黑豆眼（含高光 + 眨眼枢轴）———————————— */

function beanEyes(parent, P, o) {
  const { x, y, z, r } = o;
  const out = [];
  for (const s of [-1, 1]) {
    const eg = new THREE.Group();
    eg.position.set(s * x, y, z);
    parent.add(eg);
    const eye = add(eg, new THREE.SphereGeometry(r, 14, 12), P.eye, 0, 0, 0, false);
    eye.scale.set(1, 1.12, 0.70);
    add(eg, new THREE.SphereGeometry(r * 0.33, 8, 6), P.light,
      s * r * 0.27, r * 0.51, r * 0.41, false);
    out.push(eg);
  }
  return out;
}

/* —— 行为：游荡 + 步态 + 眨眼 + 呼吸 ————————————— */

function attachBehaviour(g, rig, cfg = {}) {
  const speed = cfg.speed ?? 0.42;
  const radius = cfg.radius ?? 1.3;
  const turn = cfg.turn ?? 3.2;
  const wander = cfg.wander !== false;

  const st = {
    mode: 'idle',
    timer: 0.8 + Math.random() * 2.2,
    yaw: g.rotation.y,
    phase: Math.random() * Math.PI * 2,
    gait: 0,
    tx: 0, tz: 0,
    blinkIn: 2 + Math.random() * 4,
    blink: 0,
    extra: 0,
  };
  g.userData.st = st;
  if (!g.userData.home) g.userData.home = { x: g.position.x, z: g.position.z };

  g.userData.update = (dt, t) => {
    const home = g.userData.home;

    /* —— 决策：走到家附近的一个点，停下，再来 —— */
    if (st.mode === 'walk') {
      const dx = st.tx - g.position.x;
      const dz = st.tz - g.position.z;
      const d = Math.hypot(dx, dz);
      if (d < 0.09 || st.timer <= 0) {
        st.mode = 'idle';
        st.timer = 1.2 + Math.random() * 2.6;
      } else {
        const want = Math.atan2(dx, dz);
        let diff = want - st.yaw;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        st.yaw += diff * Math.min(1, dt * turn);
        g.rotation.y = st.yaw;
        const step = speed * dt * Math.min(1, d * 3.0);
        const ox = g.position.x, oz = g.position.z;
        g.position.x += Math.sin(st.yaw) * step;
        g.position.z += Math.cos(st.yaw) * step;
        // 出界就退回，重新挑一个目标点
        if (g.userData.canStand && !g.userData.canStand(g.position.x, g.position.z)) {
          g.position.x = ox; g.position.z = oz;
          st.mode = 'idle';
          st.timer = 0.6 + Math.random() * 1.2;
          st.tx = home.x; st.tz = home.z;
        }
        st.timer -= dt;
      }
      st.gait = Math.min(1, st.gait + dt * 5);
      st.phase += dt * (5.0 + speed * 7);
    } else {
      st.timer -= dt;
      st.gait = Math.max(0, st.gait - dt * 4);
      if (st.timer <= 0) {
        if (!wander) {
          st.timer = 1e9;
        } else {
          const a = Math.random() * Math.PI * 2;
          const r = radius * (0.3 + Math.random() * 0.7);
          st.tx = home.x + Math.cos(a) * r;
          st.tz = home.z + Math.sin(a) * r;
          st.mode = 'walk';
          st.timer = 8;
        }
      }
    }
    if (g.userData.ground) g.position.y = g.userData.ground(g.position.x, g.position.z);

    const w = st.gait;
    const ph = st.phase;

    /* —— 腿：摆动 + 屈膝 + 脚掌保持水平 —— */
    for (const L of rig.legs) {
      const th = ph + L.ph;
      const sw = Math.sin(th) * (L.amp ?? 0.55) * w;
      L.g.rotation.x = (L.rest || 0) + sw;
      if (L.knee) {
        // 支撑相（腿向后走）膝盖伸直，摆动相抬腿屈膝
        const lift = Math.max(0, -Math.cos(th));
        L.knee.rotation.x = -lift * (L.bend ?? 0.5) * w;
      }
      if (L.foot) {
        L.foot.rotation.x = -sw * 0.45 + (L.knee ? L.knee.rotation.x * 0.55 : 0);
      }
    }
    /* —— 身体弹跳 —— */
    if (rig.bob) {
      rig.bob.position.y = (Math.abs(Math.sin(ph)) * 0.85 + 0.15) * 0.020 * w
        + Math.sin(t * 1.7 + 0.4) * 0.004 * (1 - w);
      rig.bob.rotation.z = Math.sin(ph) * 0.045 * w;
      rig.bob.rotation.x = -Math.sin(ph * 2) * 0.012 * w;
    }
    /* —— 吃草：慢节奏低头抬头 —— */
    if (cfg.graze) {
      st.grazeT = (st.grazeT ?? 2) - dt;
      if (st.grazeT <= 0) {
        st.grazeT = 2.2 + Math.random() * 5.0;
        st.grazeOn = !st.grazeOn;
      }
      const target = st.grazeOn ? 1 : 0;
      st.graze = (st.graze ?? 0) + (target - (st.graze ?? 0)) * Math.min(1, dt * 1.5);
    }
    const gz = st.graze || 0;

    /* —— 头 —— */
    if (rig.head) {
      const idle = 1 - w;
      rig.head.rotation.y = (rig.headY || 0)
        + Math.sin(t * 0.37 + 1.3) * 0.32 * idle * (1 - gz)
        + Math.sin(ph * 0.5) * 0.05 * w;
      rig.head.rotation.x = (rig.headX || 0)
        + Math.sin(t * 0.29) * 0.06 * idle
        + Math.sin(ph * 2) * 0.05 * w
        + gz * (rig.grazeDip ?? 0.85);
      rig.head.rotation.z = Math.sin(t * 0.23 + 0.7) * 0.05 * idle;
    }
    /* —— 尾巴 —— */
    if (rig.tail) {
      rig.tail.rotation.z = (rig.tailZ || 0)
        + Math.sin(t * (2.0 + w * 4.0)) * (0.09 + 0.20 * (1 - w));
      rig.tail.rotation.x = (rig.tailX || 0) + Math.sin(t * 1.3) * 0.07;
    }
    /* —— 翅膀 —— */
    if (rig.wings) {
      for (const wg of rig.wings) {
        wg.m.rotation.z = wg.rz + Math.sin(t * 0.9 + wg.ph) * 0.05;
      }
    }
    /* —— 眨眼 —— */
    st.blinkIn -= dt;
    if (st.blinkIn <= 0) { st.blink = 1; st.blinkIn = 2.4 + Math.random() * 4.5; }
    if (st.blink > 0) {
      st.blink = Math.max(0, st.blink - dt * 7.5);
      const k = 1 - Math.sin(st.blink * Math.PI) * 0.93;
      for (const e of rig.eyes) e.scale.y = k;
    }
    /* —— 附加小动作 —— */
    if (rig.idle) rig.idle(dt, t, w, st);
  };

  return g;
}

/* ============================================================
   1. 猫（坐姿）
   ============================================================ */
export function buildCartoonCat(cfg = {}) {
  initMats();
  const P = M.cat;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  // 身体：一颗蛋
  ball(bob, P.main, 0.130, 1.00, 1.12, 0.94, 0, 0.155, 0, true, 2);
  // 胸前白毛：明确凸出体表，避免和身体共面打架
  ball(bob, P.light, 0.098, 0.98, 1.10, 0.62, 0, 0.135, 0.078, true, 2);
  // 后腿：两团圆
  for (const s of [-1, 1]) ball(bob, P.main, 0.060, 0.82, 1.00, 1.12, s * 0.084, 0.062, -0.014, true, 1);
  // 前腿 + 爪
  for (const s of [-1, 1]) {
    add(bob, rod(0.026, 0.030, 0.118, 8), P.main, s * 0.052, 0.128, 0.070);
    ball(bob, P.light, 0.033, 1.00, 0.68, 1.15, s * 0.052, 0.016, 0.086, true, 1);
  }

  // 头
  const headG = new THREE.Group();
  headG.position.set(0, 0.335, 0.020);
  bob.add(headG);
  ball(headG, P.main, 0.115, 1.06, 0.98, 0.98, 0, 0, 0, true, 2);

  // 耳朵
  for (const s of [-1, 1]) {
    const ear = add(headG, new THREE.ConeGeometry(0.045, 0.086, 8), P.main, s * 0.066, 0.094, -0.006);
    ear.rotation.z = -s * 0.26;
    const inner = add(headG, new THREE.ConeGeometry(0.025, 0.054, 7), P.pink, s * 0.066, 0.091, 0.006);
    inner.rotation.z = -s * 0.26;
  }

  // 眼睛（比上一版小 15%）
  const eyes = beanEyes(headG, P, { x: 0.0461, y: 0.012, z: 0.099, r: 0.0265 });

  // 鼻子
  add(headG, new THREE.ConeGeometry(0.0125, 0.016, 3), P.pink, 0, -0.027, 0.1155, false).rotation.x = Math.PI;
  // 嘴：一个很小的 ω
  const mouth = new THREE.Group();
  mouth.position.set(0, -0.041, 0.1095);
  headG.add(mouth);
  for (const s of [-1, 1]) {
    const arc = add(mouth, new THREE.TorusGeometry(0.0108, 0.0032, 5, 8, Math.PI * 0.9), P.eye,
      s * 0.0097, 0.0035, 0, false);
    arc.rotation.z = s > 0 ? Math.PI * 0.95 : Math.PI * 1.05;
  }

  // 胡须
  for (const s of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const w = add(headG, cyl(0.0021, 0.0021, 0.094, 3, 1), P.light,
        s * 0.070, -0.016 - i * 0.015, 0.088, false);
      w.rotation.z = -s * (Math.PI / 2 - 0.16);
      w.rotation.y = s * 0.30;
    }
  }

  // 尾巴：绕到身侧，正面也能看见
  const tail = new THREE.Group();
  tail.position.set(0, 0.105, -0.095);
  bob.add(tail);
  chain(tail, P.main, [
    V(0, 0, 0), V(0.035, 0.062, -0.048), V(0.082, 0.118, -0.052),
    V(0.122, 0.152, -0.012), V(0.142, 0.160, 0.040), V(0.140, 0.148, 0.088),
  ], 0.030, 0.0145, P.dark);

  g.scale.setScalar(0.80);
  g.userData.height = 0.38;

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes,
    legs: [],
    headY: 0, headX: 0, tailZ: 0, tailX: 0,
  }, { speed: 0.30, radius: 0.9, wander: cfg.wander });
}

/* ============================================================
   2. 狗（站姿，柴犬体型：长身短腿卷尾）
   ============================================================ */
export function buildCartoonDog(cfg = {}) {
  initMats();
  const P = M.dog;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  // 躯干：三段椭球，半径接近，避免出现「葫芦腰」
  ball(bob, P.main, 0.175, 0.92, 0.95, 1.34, 0, 0.262, 0, true, 2);
  ball(bob, P.main, 0.162, 0.95, 0.98, 0.95, 0, 0.264, 0.132, true, 2);
  ball(bob, P.main, 0.164, 0.95, 0.98, 0.95, 0, 0.262, -0.132, true, 2);
  // 胸口 / 肚子亮块（都明确凸出体表 1.5cm 以上）
  ball(bob, P.light, 0.135, 0.86, 0.78, 1.02, 0, 0.185, 0.020, true, 2);
  ball(bob, P.light, 0.082, 0.86, 0.92, 0.72, 0, 0.300, 0.255, true, 1);

  // 脖子
  tubeBetween(bob, P.main, V(0, 0.334, 0.185), V(0, 0.432, 0.262), 0.088, 0.076);

  // 头
  const headG = new THREE.Group();
  headG.position.set(0, 0.454, 0.292);
  bob.add(headG);
  ball(headG, P.main, 0.135, 1.05, 1.00, 1.00, 0, 0, 0, true, 2);
  // 腮
  for (const s of [-1, 1]) ball(headG, P.main, 0.070, 1.00, 0.92, 1.00, s * 0.062, -0.030, 0.048, true, 1);
  // 口鼻
  ball(headG, P.light, 0.058, 1.05, 0.76, 0.98, 0, -0.044, 0.108, true, 1);
  add(headG, new THREE.SphereGeometry(0.021, 12, 9), P.nose, 0, -0.020, 0.152, false)
    .scale.set(1.15, 0.90, 0.90);
  // 嘴
  for (const s of [-1, 1]) {
    const arc = add(headG, new THREE.TorusGeometry(0.0115, 0.0030, 5, 8, Math.PI * 0.85), P.nose,
      s * 0.0105, -0.060, 0.140, false);
    arc.rotation.z = s > 0 ? Math.PI * 0.96 : Math.PI * 1.04;
  }
  // 耳朵：立起来的三角，做大一点，正面能看清
  for (const s of [-1, 1]) {
    const ear = add(headG, new THREE.ConeGeometry(0.070, 0.138, 8), P.dark, s * 0.080, 0.112, -0.012);
    ear.rotation.z = -s * 0.26;
    ear.rotation.x = -0.10;
    const inner = add(headG, new THREE.ConeGeometry(0.039, 0.085, 6), P.pink, s * 0.080, 0.105, 0.006);
    inner.rotation.z = -s * 0.24;
    inner.rotation.x = -0.10;
  }
  // 眼睛
  const eyes = beanEyes(headG, P, { x: 0.054, y: 0.020, z: 0.113, r: 0.0285 });
  // 眉毛点（柴犬招牌）
  for (const s of [-1, 1]) {
    ball(headG, P.light, 0.017, 1.15, 0.80, 0.55, s * 0.052, 0.074, 0.108, false, 1);
  }
  // 舌头
  ball(headG, P.pink, 0.019, 0.95, 1.30, 0.55, 0.024, -0.068, 0.142, false, 1);

  // 四条短腿（粗一点、矮一点，别像桌腿）
  const legs = [];
  const mkLeg = (x, z, ph) => {
    legs.push(makeLeg(g, {
      x, z, y: 0.234, ph, amp: 0.62, bend: 0.58,
      hipR: 0.050, hipSY: 0.60, rTop: 0.046, rKnee: 0.040, rAnkle: 0.038,
      upper: 0.115, lower: 0.085, kneeZ: 0.008,
      mat: P.main, hipMat: P.main, hoofMat: P.light,
      hoofR: 0.052, hoofSY: 0.66, hoofZ: 0.010, seg: 9,
    }));
  };
  mkLeg(-0.095, 0.180, 0);
  mkLeg(0.095, 0.180, Math.PI);
  mkLeg(-0.100, -0.175, Math.PI);
  mkLeg(0.100, -0.175, 0);

  // 尾巴：卷在背上，做大做粗
  const tail = new THREE.Group();
  tail.position.set(0, 0.372, -0.248);
  bob.add(tail);
  const tp = [];
  for (let i = 0; i <= 7; i++) {
    const a = -2.28 + i * 0.47;
    tp.push(V(0, Math.sin(a) * 0.132 + 0.010, Math.cos(a) * 0.132 + 0.020));
  }
  chain(tail, P.main, tp, 0.050, 0.030, P.light);

  g.scale.setScalar(0.84);
  g.userData.height = 0.54;

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes, legs,
    headY: 0, headX: 0, tailZ: 0, tailX: 0,
  }, { speed: 0.52, radius: 1.8, wander: cfg.wander });
}

/* ============================================================
   3. 鸡（一个球 + 一个尖嘴 + 一撮尾羽）
   ============================================================ */
export function buildCartoonChicken(cfg = {}) {
  initMats();
  const P = M.chicken;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  // 身体
  ball(bob, P.main, 0.115, 1.00, 1.02, 1.18, 0, 0.196, 0, true, 2);
  ball(bob, P.light, 0.092, 0.90, 0.96, 0.78, 0, 0.176, 0.078, true, 2);
  // 翅膀：向外挪，必须从身体轮廓里探出来
  const wings = [];
  for (const s of [-1, 1]) {
    const wg = new THREE.Group();
    wg.position.set(s * 0.100, 0.184, -0.014);
    wg.rotation.z = -s * 0.10;
    bob.add(wg);
    add(wg, wingGeo(0.074, 0.42), P.wing, 0, 0, 0);
    wings.push({ m: wg, rz: -s * 0.10, ph: s > 0 ? 0 : 1.1 });
  }
  // 尾羽：五片扇开，比身体深一档色，才看得出是尾巴
  const tail = new THREE.Group();
  tail.position.set(0, 0.258, -0.116);
  bob.add(tail);
  for (let i = -2; i <= 2; i++) {
    const f = add(tail, new THREE.ConeGeometry(0.054, 0.172, 5), P.wing, i * 0.022, 0.014, 0);
    f.rotation.x = -0.94 + Math.abs(i) * 0.06;
    f.rotation.z = i * 0.19;
    f.scale.set(1, 1, 0.55);
  }

  // 脖子 + 头
  tubeBetween(bob, P.main, V(0, 0.268, 0.018), V(0, 0.344, 0.052), 0.048, 0.038);
  const headG = new THREE.Group();
  headG.position.set(0, 0.356, 0.055);
  bob.add(headG);
  ball(headG, P.main, 0.072, 1.00, 1.00, 1.00, 0, 0, 0, true, 2);
  // 冠
  for (let i = 0; i < 3; i++) {
    ball(headG, P.red, i === 1 ? 0.029 : 0.024, 0.72, 1.20, 0.55,
      (i - 1) * 0.027, 0.064 + (i === 1 ? 0.010 : 0), 0.004, false, 1);
  }
  // 喙
  const beak = add(headG, new THREE.ConeGeometry(0.021, 0.052, 6), P.beak, 0, -0.006, 0.076, false);
  beak.rotation.x = Math.PI / 2;
  beak.scale.set(1, 1, 0.72);
  // 肉垂：单叶，垂在喙正下方
  ball(headG, P.red, 0.013, 0.85, 1.30, 0.72, 0, -0.062, 0.050, false, 1);
  // 眼睛
  const eyes = beanEyes(headG, P, { x: 0.043, y: 0.014, z: 0.052, r: 0.0165 });

  // 腿 + 爪
  const legs = [];
  for (const s of [-1, 1]) {
    const L = makeLeg(g, {
      x: s * 0.043, z: 0.006, y: 0.140, ph: s > 0 ? 0 : Math.PI,
      amp: 0.70, bend: 0.55,
      hipR: 0.0125, hipSY: 0.70, rTop: 0.0115, rKnee: 0.0105, rAnkle: 0.0105,
      upper: 0.078, lower: 0.062, kneeZ: 0.004,
      mat: P.beak, hipMat: P.main, hoofMat: P.beak,
      hoofR: 0, seg: 6,
    });
    for (let i = -1; i <= 1; i++) {
      const toe = add(L.foot, new THREE.BoxGeometry(0.010, 0.009, 0.052), P.beak, 0, 0.002, 0.020);
      toe.rotation.y = i * 0.42;
      toe.position.x = Math.sin(i * 0.42) * 0.020;
    }
    legs.push(L);
  }

  g.scale.setScalar(0.92);
  g.userData.height = 0.42;

  const idle = (dt, t, w, st) => {
    // 啄地：偶尔快速低头
    st.extra = (st.extra || 0) + dt;
    if (w < 0.1 && st.extra > 4.5) {
      st.extra = 0;
      st.peck = 1;
    }
    if (st.peck > 0) {
      st.peck = Math.max(0, st.peck - dt * 2.6);
      const k = Math.sin((1 - st.peck) * Math.PI);
      headG.rotation.x += k * 1.15;
    }
  };

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes, legs, wings, idle,
    headY: 0, headX: 0, tailZ: 0, tailX: 0,
  }, { speed: 0.34, radius: 1.2, wander: cfg.wander });
}

/* ============================================================
   4. 鸭（扁嘴 + 白身 + 橙脚）
   ============================================================ */
export function buildCartoonDuck(cfg = {}) {
  initMats();
  const P = M.duck;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  // 身体
  ball(bob, P.main, 0.115, 1.00, 0.94, 1.36, 0, 0.176, 0, true, 2);
  ball(bob, P.light, 0.098, 0.88, 0.86, 1.05, 0, 0.130, 0.020, true, 2);
  // 翅膀：从身体轮廓里探出来
  const wings = [];
  for (const s of [-1, 1]) {
    const wg = new THREE.Group();
    wg.position.set(s * 0.102, 0.180, -0.016);
    wg.rotation.z = -s * 0.09;
    bob.add(wg);
    add(wg, wingGeo(0.078, 0.40), P.wing, 0, 0, 0);
    wings.push({ m: wg, rz: -s * 0.09, ph: s > 0 ? 0.4 : 1.5 });
  }
  // 尾：上翘的三片小尖
  const tail = new THREE.Group();
  tail.position.set(0, 0.212, -0.150);
  bob.add(tail);
  for (let i = -1; i <= 1; i++) {
    const tf = add(tail, new THREE.ConeGeometry(0.056, 0.152, 6), P.main, i * 0.020, 0.012, 0);
    tf.rotation.x = -1.00;
    tf.rotation.z = i * 0.22;
    tf.scale.set(1.0, 1.0, 0.55);
  }

  // 脖子 + 头
  tubeBetween(bob, P.main, V(0, 0.232, 0.048), V(0, 0.300, 0.088), 0.044, 0.036);
  const headG = new THREE.Group();
  headG.position.set(0, 0.310, 0.092);
  bob.add(headG);
  ball(headG, P.main, 0.070, 1.00, 1.00, 1.00, 0, 0, 0, true, 2);
  // 扁嘴
  ball(headG, P.bill, 0.050, 0.96, 0.76, 1.20, 0, -0.018, 0.060, false, 2);
  // 眼睛
  const eyes = beanEyes(headG, P, { x: 0.042, y: 0.016, z: 0.050, r: 0.0175 });

  // 腿 + 蹼
  const legs = [];
  for (const s of [-1, 1]) {
    const L = makeLeg(g, {
      x: s * 0.046, z: 0.010, y: 0.108, ph: s > 0 ? 0 : Math.PI,
      amp: 0.55, bend: 0.45,
      hipR: 0.0130, hipSY: 0.70, rTop: 0.0120, rKnee: 0.0110, rAnkle: 0.0110,
      upper: 0.056, lower: 0.052, kneeZ: 0.003,
      mat: P.bill, hipMat: P.main, hoofMat: P.bill,
      hoofR: 0, seg: 6,
    });
    const web = add(L.foot, new THREE.BoxGeometry(0.048, 0.010, 0.062), P.bill, 0, 0.002, 0.014);
    web.rotation.y = -s * 0.10;
    legs.push(L);
  }

  g.scale.setScalar(0.90);
  g.userData.height = 0.34;

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes, legs, wings,
    headY: 0, headX: 0, tailZ: 0, tailX: 0,
  }, { speed: 0.30, radius: 1.0, wander: cfg.wander });
}

/* ============================================================
   5. 牛（卡通，奶油底 + 暖褐花斑）
   ============================================================ */
export function buildCartoonCow(cfg = {}) {
  initMats();
  const P = M.cow;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  const R = ratioOf(0xe8dabd, 0x9a5f36);

  // 躯干：一颗大桶，花斑直接刷在顶点色上
  const bodyGeo = new THREE.SphereGeometry(0.40, 44, 30);
  paintSpots(bodyGeo, R, [
    [0.14, 0.18, 0.16, 0.25], [-0.22, 0.04, -0.18, 0.26],
    [0.26, -0.10, -0.06, 0.21], [-0.10, 0.24, -0.26, 0.19],
    [0.20, 0.06, 0.34, 0.17], [-0.18, -0.18, 0.20, 0.18],
    [0.02, -0.27, -0.04, 0.16], [-0.06, 0.14, -0.38, 0.15],
    [0.10, -0.16, -0.34, 0.14],
  ]);
  const body = new THREE.Mesh(bodyGeo, P.base);
  body.scale.set(0.90, 0.90, 1.52);
  body.position.y = 0.90;
  body.castShadow = true; body.receiveShadow = true;
  bob.add(body);

  // 胸 / 臀
  const chestGeo = new THREE.SphereGeometry(0.30, 32, 24);
  paintSpots(chestGeo, R, [[0.14, 0.04, 0.14, 0.22], [-0.16, -0.10, 0.10, 0.16]]);
  const chest = new THREE.Mesh(chestGeo, P.base);
  chest.scale.set(1.02, 0.98, 0.95);
  chest.position.set(0, 0.92, 0.34);
  chest.castShadow = true; chest.receiveShadow = true;
  bob.add(chest);

  const rumpGeo = new THREE.SphereGeometry(0.29, 32, 24);
  paintSpots(rumpGeo, R, [[-0.08, 0.10, -0.16, 0.17], [0.14, -0.12, -0.12, 0.15]]);
  const rump = new THREE.Mesh(rumpGeo, P.base);
  rump.scale.set(1.02, 0.98, 0.95);
  rump.position.set(0, 0.90, -0.34);
  rump.castShadow = true; rump.receiveShadow = true;
  bob.add(rump);

  // 脖子
  tubeBetween(bob, P.plain, V(0, 1.00, 0.40), V(0, 1.13, 0.60), 0.20, 0.17);

  // 头
  const headG = new THREE.Group();
  headG.position.set(0, 1.215, 0.690);
  bob.add(headG);
  const headGeo = new THREE.SphereGeometry(0.200, 36, 26);
  paintSpots(headGeo, R, [[-0.15, 0.06, 0.11, 0.17], [0.17, 0.10, -0.03, 0.15]]);
  const head = new THREE.Mesh(headGeo, P.base);
  head.scale.set(0.95, 1.00, 1.10);
  head.castShadow = true; head.receiveShadow = true;
  headG.add(head);

  // 口鼻
  ball(headG, P.muzzle, 0.118, 1.00, 0.80, 0.86, 0, -0.082, 0.166, true, 2);
  for (const s of [-1, 1]) {
    ball(headG, P.hoof, 0.018, 1.1, 0.9, 0.6, s * 0.043, -0.056, 0.256, false, 1);
  }
  // 眼睛
  const eyes = beanEyes(headG, P, { x: 0.098, y: 0.044, z: 0.144, r: 0.044 });
  // 耳朵：横向张开
  for (const s of [-1, 1]) {
    const ear = ball(headG, P.plain, 0.084, 1.55, 0.55, 0.90, s * 0.216, 0.050, -0.034, true, 1);
    ear.rotation.z = -s * 0.38;
    ball(headG, P.muzzle, 0.046, 1.4, 0.5, 0.8, s * 0.228, 0.044, -0.020, false, 1)
      .rotation.z = -s * 0.38;
  }
  // 角
  for (const s of [-1, 1]) {
    const horn = add(headG, new THREE.ConeGeometry(0.042, 0.155, 7), P.horn, s * 0.108, 0.196, 0.010);
    horn.rotation.z = -s * 0.72;
    horn.rotation.x = -0.10;
  }
  // 额顶一撮毛
  ball(headG, P.patch, 0.064, 1.15, 0.75, 1.0, 0, 0.202, 0.022, false, 1);

  // 四条腿
  const legs = [];
  const mkLeg = (x, z, ph) => {
    legs.push(makeLeg(g, {
      x, z, y: 0.674, ph, amp: 0.46, bend: 0.40,
      hipR: 0.115, hipSY: 0.54, rTop: 0.108, rKnee: 0.086, rAnkle: 0.072,
      upper: 0.335, lower: 0.290, kneeZ: 0.014,
      mat: P.leg, hipMat: P.plain, hoofMat: P.hoof,
      hoofR: 0.082, hoofSY: 0.60, hoofZ: 0.004, seg: 10,
    }));
  };
  mkLeg(-0.228, 0.360, 0);
  mkLeg(0.228, 0.360, Math.PI);
  mkLeg(-0.232, -0.350, Math.PI);
  mkLeg(0.232, -0.350, 0);

  // 尾巴
  const tail = new THREE.Group();
  tail.position.set(0, 1.02, -0.545);
  bob.add(tail);
  chain(tail, P.plain, [
    V(0, 0, 0), V(0, -0.20, -0.03), V(0.01, -0.40, -0.05), V(0.015, -0.56, -0.05),
  ], 0.032, 0.022, null);
  ball(tail, P.patch, 0.055, 0.8, 1.25, 0.8, 0.015, -0.60, -0.05, false, 1);

  g.scale.setScalar(1.0);
  g.userData.height = 1.45;

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes, legs,
    headY: 0, headX: 0, tailZ: 0, tailX: 0, grazeDip: 0.80,
  }, { speed: 0.30, radius: cfg.radius ?? 3.4, turn: 1.6, graze: true, wander: cfg.wander });
}

/* ============================================================
   6. 羊（卡通，羊毛用抖动球做出蓬松轮廓）
   ============================================================ */
export function buildCartoonSheep(cfg = {}) {
  initMats();
  const P = M.sheep;
  const g = new THREE.Group();
  const bob = new THREE.Group();
  g.add(bob);

  // 羊毛
  const woolGeo = new THREE.SphereGeometry(0.30, 30, 22);
  jitter(woolGeo, 0.16, 9.0, cfg.seed ?? 3);
  const wool = new THREE.Mesh(woolGeo, P.wool);
  wool.scale.set(1.00, 0.95, 1.22);
  wool.position.y = 0.60;
  wool.castShadow = true; wool.receiveShadow = true;
  bob.add(wool);

  // 背上再加几团，破一下球的轮廓
  const rnd = mulberry32(cfg.seed ?? 11);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.4;
    ball(bob, P.wool, 0.105, 1.0, 0.9, 1.0,
      Math.cos(a) * 0.20, 0.60 + 0.20 + (rnd() - 0.5) * 0.03, Math.sin(a) * 0.26, false, 1);
  }

  // 头
  const headG = new THREE.Group();
  headG.position.set(0, 0.80, 0.38);
  bob.add(headG);
  ball(headG, P.face, 0.125, 1.00, 1.05, 1.15, 0, 0, 0, true, 2);
  // 额前一小撮羊毛
  ball(headG, P.wool, 0.098, 1.05, 0.85, 0.85, 0, 0.075, -0.010, false, 1);
  // 耳朵
  for (const s of [-1, 1]) {
    const ear = ball(headG, P.face, 0.058, 1.60, 0.45, 0.95, s * 0.135, 0.020, -0.020, false, 1);
    ear.rotation.z = -s * 0.30;
  }
  // 眼睛
  const eyes = beanEyes(headG, P, { x: 0.058, y: 0.028, z: 0.100, r: 0.030 });
  // 鼻子
  ball(headG, P.face, 0.030, 1.15, 0.75, 0.55, 0, -0.058, 0.140, false, 1);

  // 四条细腿
  const legs = [];
  const mkLeg = (x, z, ph) => {
    legs.push(makeLeg(g, {
      x, z, y: 0.431, ph, amp: 0.62, bend: 0.50,
      hipR: 0.039, hipSY: 0.62, rTop: 0.036, rKnee: 0.032, rAnkle: 0.030,
      upper: 0.225, lower: 0.180, kneeZ: 0.008,
      mat: P.face, hipMat: P.wool, hoofMat: P.hoof,
      hoofR: 0.042, hoofSY: 0.62, hoofZ: 0.004, seg: 8,
    }));
  };
  mkLeg(-0.150, 0.200, 0);
  mkLeg(0.150, 0.200, Math.PI);
  mkLeg(-0.155, -0.195, Math.PI);
  mkLeg(0.155, -0.195, 0);

  // 尾巴：一小团羊毛
  const tail = new THREE.Group();
  tail.position.set(0, 0.70, -0.350);
  bob.add(tail);
  ball(tail, P.wool, 0.070, 1.0, 1.0, 1.0, 0, -0.02, -0.02, false, 1);

  g.scale.setScalar(1.0);
  g.userData.height = 0.95;

  return attachBehaviour(g, {
    bob, head: headG, tail, eyes, legs,
    headY: 0, headX: 0, tailZ: 0, tailX: 0, grazeDip: 1.05,
  }, { speed: 0.42, radius: cfg.radius ?? 2.2, turn: 2.6, graze: true, wander: cfg.wander });
}
