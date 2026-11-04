import * as THREE from 'three';
import { makeToon } from '../core/materials.js';

/* ============================================================
   天空中的鸟
   ------------------------------------------------------------
   从地面往上看，鸟只剩一个剪影，所以「翅膀外轮廓」是唯一重要的东西。
   四种鸟用四种完全不同的翼型 + 尾型区分：
     海鸥  细长后掠、翼尖深色、慢拍 + 长滑翔
     乌鸦  宽圆翼、翼尖分指、快而稳的拍打
     燕子  镰刀翼、深叉尾、又快又碎
     鹰    宽翼、翼尖开槽、几乎不拍、一直盘旋
   ============================================================ */

const V = (x, y, z) => new THREE.Vector3(x, y, z);

/* 翼型：pts 是 (展向, 前后) 的二维轮廓，映射到 XZ 平面 */
function wingGeo(pts) {
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  const g = new THREE.ShapeGeometry(s, 4);
  g.rotateX(Math.PI / 2);
  return g;
}

/* 按展向刷色，用来做深色翼尖 / 浅色翼下 */
function paintSpan(geo, x0, x1, color) {
  const pos = geo.attributes.position;
  const c = new THREE.Color(color);
  const arr = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const t = Math.min(1, Math.max(0, (Math.abs(pos.getX(i)) - x0) / (x1 - x0)));
    arr[i * 3] = 1 + (c.r - 1) * t;
    arr[i * 3 + 1] = 1 + (c.g - 1) * t;
    arr[i * 3 + 2] = 1 + (c.b - 1) * t;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function mat(color, opts = {}) {
  return makeToon({
    color, rim: 0.16, rimColor: 0xfff2d8, spec: 0.0,
    fresnel: 0.02, noise: 0.0, wrap: 0.5,
    side: THREE.DoubleSide, ...opts,
  });
}

/* 两点之间一根锥形管 */
function rodBetween(parent, material, a, b, r0, r1, seg = 6) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  geo.translate(0, len / 2, 0);
  const m = new THREE.Mesh(geo, material);
  m.position.copy(a);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  parent.add(m);
  return m;
}

/* 一具身体：椭球 + 头 + 喙 + 尾，可选长脖子和拖在身后的腿 */
function buildBody(o) {
  const g = new THREE.Group();
  const bodyMat = mat(o.body);
  const headMat = mat(o.head || o.body);
  const tailMat = mat(o.tail || o.body);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), bodyMat);
  torso.scale.set(o.bodyW, o.bodyH, o.bodyL);
  torso.position.z = o.bodyZ || 0;
  g.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(o.headR, 12, 10), headMat);
  head.position.set(0, o.headY || 0.02, o.headZ);
  head.scale.set(1, 0.92, 1.08);
  g.add(head);

  // 喙
  const beak = new THREE.Mesh(new THREE.ConeGeometry(o.beakR, o.beakL, 5), mat(o.beak));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, o.headY ? o.headY - 0.012 : 0, o.headZ + o.headR + o.beakL * 0.42);
  g.add(beak);

  // 长脖子（鹤、鹭这类）
  if (o.neck) {
    const n = o.neck;
    rodBetween(g, headMat,
      V(0, n.y0, n.z0), V(0, o.headY || 0, o.headZ), n.r0, n.r1, 6);
  }

  // 拖在身后的长腿（鹤的标志性剪影）
  if (o.legs) {
    const l = o.legs;
    const legMat = mat(l.color);
    for (const s2 of [-1, 1]) {
      rodBetween(g, legMat,
        V(s2 * l.x, l.y0, l.z0), V(s2 * l.x1, l.y1, l.z1), l.r, l.r * 0.6, 5);
    }
  }

  // 尾：一片薄板，形状由调用方给
  if (o.tailPts) {
    const t = new THREE.Mesh(wingGeo(o.tailPts), tailMat);
    g.add(t);
  }
  return g;
}

/* ============================================================
   1. 海鸥
   ============================================================ */
export function makeGull() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0xcdd2d4, head: 0xdcdedc, beak: 0xd89c32, tail: 0xc6cacb,
    bodyW: 0.056, bodyH: 0.058, bodyL: 0.235, bodyZ: -0.02,
    headR: 0.058, headY: 0.022, headZ: 0.225, beakR: 0.015, beakL: 0.092,
    tailPts: [[-0.055, -0.20], [0.055, -0.20], [0.075, -0.36], [-0.075, -0.36]],
  }));

  const wingMat = makeToon({
    color: 0xbcc4cc, rim: 0.18, rimColor: 0xffffff, spec: 0.0,
    fresnel: 0.02, noise: 0.0, wrap: 0.5, side: THREE.DoubleSide, vcolor: true,
  });
  const pts = [
    [0.00, 0.155], [0.18, 0.150], [0.36, 0.120], [0.54, 0.055], [0.74, -0.045],
    [0.70, -0.115], [0.50, -0.135], [0.28, -0.150], [0.00, -0.145],
  ];
  const mk = (side) => {
    const p = pts.map(([x, z]) => [x * side, z]);
    const geo = paintSpan(wingGeo(p), 0.50, 0.74, 0x3a4148);
    return new THREE.Mesh(geo, wingMat);
  };
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.55, flapAmp: 0.52, flapRate: 4.2, glideTilt: 0.10 };
  g.userData.span = 1.5;
  return g;
}

/* ============================================================
   2. 乌鸦
   ============================================================ */
export function makeCrow() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x2b2e35, beak: 0x1c1e22, tail: 0x2b2e35,
    bodyW: 0.058, bodyH: 0.060, bodyL: 0.205, bodyZ: -0.01,
    headR: 0.054, headY: 0.020, headZ: 0.195, beakR: 0.019, beakL: 0.082,
    tailPts: [[-0.075, -0.17], [0.075, -0.17], [0.105, -0.40], [-0.105, -0.40]],
  }));

  const wingMat = mat(0x30343b);
  // 翼尖分指：靠三个内凹口做出「指头」
  const pts = [
    [0.00, 0.175], [0.16, 0.170], [0.32, 0.140], [0.44, 0.075],
    [0.52, 0.010], [0.455, 0.030], [0.50, -0.045], [0.435, -0.035],
    [0.475, -0.115], [0.34, -0.160], [0.16, -0.175], [0.00, -0.170],
  ];
  const mk = (side) => new THREE.Mesh(wingGeo(pts.map(([x, z]) => [x * side, z])), wingMat);
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.15, flapAmp: 0.62, flapRate: 6.4, glideTilt: 0.06 };
  g.userData.span = 1.04;
  return g;
}

/* ============================================================
   3. 燕子
   ============================================================ */
export function makeSwallow() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x37404f, head: 0x2e3644, beak: 0x1c1e22, tail: 0x37404f,
    bodyW: 0.040, bodyH: 0.042, bodyL: 0.150, bodyZ: -0.005,
    headR: 0.042, headY: 0.014, headZ: 0.140, beakR: 0.011, beakL: 0.052,
    // 深叉尾：中间一个尖口
    tailPts: [
      [-0.052, -0.12], [0.052, -0.12], [0.095, -0.40], [0.0, -0.30], [-0.095, -0.40],
    ],
  }));

  const wingMat = mat(0x333c4a);
  // 镰刀翼：后掠到几乎拖在身后
  const pts = [
    [0.00, 0.105], [0.13, 0.095], [0.27, 0.030], [0.40, -0.090], [0.48, -0.215],
    [0.355, -0.150], [0.195, -0.105], [0.00, -0.085],
  ];
  const mk = (side) => new THREE.Mesh(wingGeo(pts.map(([x, z]) => [x * side, z])), wingMat);
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.10, flapAmp: 0.78, flapRate: 9.0, glideTilt: 0.04 };
  g.userData.span = 0.96;
  return g;
}

/* ============================================================
   4. 鹰（鵟）
   ============================================================ */
export function makeHawk() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x7a6244, head: 0x8a7250, beak: 0xc8a44e, tail: 0x8a7250,
    bodyW: 0.070, bodyH: 0.068, bodyL: 0.265, bodyZ: -0.01,
    headR: 0.064, headY: 0.022, headZ: 0.245, beakR: 0.017, beakL: 0.076,
    tailPts: [[-0.085, -0.21], [0.085, -0.21], [0.115, -0.46], [-0.115, -0.46]],
  }));

  const wingMat = makeToon({
    color: 0xa98f68, rim: 0.18, rimColor: 0xfff0d0, spec: 0.0,
    fresnel: 0.02, noise: 0.0, wrap: 0.5, side: THREE.DoubleSide, vcolor: true,
  });
  // 宽翼 + 翼尖开槽
  const pts = [
    [0.00, 0.205], [0.20, 0.200], [0.40, 0.170], [0.58, 0.100],
    [0.70, 0.015], [0.655, -0.030], [0.735, -0.075], [0.645, -0.105],
    [0.705, -0.155], [0.560, -0.180], [0.380, -0.205], [0.180, -0.215], [0.00, -0.205],
  ];
  const mk = (side) => {
    const p = pts.map(([x, z]) => [x * side, z]);
    const geo = paintSpan(wingGeo(p), 0.42, 0.74, 0x6d5533);
    return new THREE.Mesh(geo, wingMat);
  };
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.82, flapAmp: 0.34, flapRate: 2.6, glideTilt: 0.14 };
  g.userData.span = 1.8;
  return g;
}

/* ============================================================
   5. 灰鹤 —— 全场最大，长脖子 + 拖在身后的长腿
   ============================================================ */
export function makeCrane() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x9aa0a4, head: 0x2c2f33, beak: 0xc8b478, tail: 0x8d9397,
    bodyW: 0.082, bodyH: 0.080, bodyL: 0.30, bodyZ: -0.03,
    headR: 0.055, headY: 0.175, headZ: 0.60, beakR: 0.014, beakL: 0.22,
    neck: { y0: 0.035, z0: 0.16, r0: 0.040, r1: 0.026 },
    legs: { x: 0.030, x1: 0.042, y0: -0.02, y1: -0.10, z0: -0.14, z1: -0.80, r: 0.013, color: 0x3a3d40 },
    tailPts: [[-0.06, -0.26], [0.06, -0.26], [0.08, -0.40], [-0.08, -0.40]],
  }));

  const wingMat = makeToon({
    color: 0xa8aeb1, rim: 0.18, rimColor: 0xffffff, spec: 0.0,
    fresnel: 0.02, noise: 0.0, wrap: 0.5, side: THREE.DoubleSide, vcolor: true,
  });
  // 又长又宽，翼尖一大片黑
  const pts = [
    [0.00, 0.215], [0.24, 0.205], [0.48, 0.170], [0.72, 0.090],
    [0.96, -0.010], [1.16, -0.110], [1.10, -0.185], [0.86, -0.200],
    [0.58, -0.215], [0.30, -0.225], [0.00, -0.220],
  ];
  const mk = (side) => {
    const p = pts.map(([x, z]) => [x * side, z]);
    const geo = paintSpan(wingGeo(p), 0.62, 0.98, 0x2a2d31);
    return new THREE.Mesh(geo, wingMat);
  };
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.50, flapAmp: 0.62, flapRate: 2.1, glideTilt: 0.12 };
  g.userData.span = 2.4;
  return g;
}

/* ============================================================
   6. 绿头鸭 —— 短粗身子、短脖子、翅膀拍得又快又碎
   ============================================================ */
export function makeMallard() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x8a7358, head: 0x1f5a46, beak: 0xd8c04a, tail: 0x7a6448,
    bodyW: 0.078, bodyH: 0.070, bodyL: 0.215, bodyZ: -0.01,
    headR: 0.062, headY: 0.030, headZ: 0.170, beakR: 0.022, beakL: 0.085,
    tailPts: [[-0.055, -0.17], [0.055, -0.17], [0.045, -0.30], [-0.045, -0.30]],
  }));

  const wingMat = makeToon({
    color: 0x8f7a5e, rim: 0.16, rimColor: 0xfff0d4, spec: 0.0,
    fresnel: 0.02, noise: 0.0, wrap: 0.5, side: THREE.DoubleSide, vcolor: true,
  });
  const pts = [
    [0.00, 0.135], [0.14, 0.130], [0.28, 0.100], [0.40, 0.040],
    [0.44, -0.045], [0.36, -0.085], [0.20, -0.115], [0.00, -0.120],
  ];
  const mk = (side) => {
    const p = pts.map(([x, z]) => [x * side, z]);
    // 翼镜：中段一块蓝紫色的斑
    const geo = paintSpan(wingGeo(p), 0.24, 0.34, 0x3f5aa8);
    return new THREE.Mesh(geo, wingMat);
  };
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.05, flapAmp: 0.58, flapRate: 8.2, glideTilt: 0.05 };
  g.userData.span = 0.86;
  return g;
}

/* ============================================================
   7. 麻雀 —— 只有海鸥五分之一大，扑腾得极快
   ============================================================ */
export function makeSparrow() {
  const g = new THREE.Group();
  g.add(buildBody({
    body: 0x6b543c, head: 0x5a4530, beak: 0x2a2620, tail: 0x5a4530,
    bodyW: 0.030, bodyH: 0.030, bodyL: 0.078, bodyZ: -0.004,
    headR: 0.027, headY: 0.012, headZ: 0.070, beakR: 0.007, beakL: 0.024,
    tailPts: [[-0.022, -0.07], [0.022, -0.07], [0.030, -0.135], [-0.030, -0.135]],
  }));

  const wingMat = mat(0x6f5940);
  const pts = [
    [0.00, 0.052], [0.052, 0.048], [0.098, 0.020], [0.128, -0.028],
    [0.100, -0.052], [0.052, -0.062], [0.00, -0.060],
  ];
  const mk = (side) => new THREE.Mesh(wingGeo(pts.map(([x, z]) => [x * side, z])), wingMat);
  const wl = new THREE.Group(); wl.add(mk(-1));
  const wr = new THREE.Group(); wr.add(mk(1));
  g.add(wl, wr);

  g.userData.rig = { wl, wr, glide: 0.0, flapAmp: 0.92, flapRate: 16.0, glideTilt: 0.03 };
  g.userData.span = 0.28;
  return g;
}

export const SPECIES = {
  gull: makeGull, crow: makeCrow, swallow: makeSwallow, hawk: makeHawk,
  crane: makeCrane, mallard: makeMallard, sparrow: makeSparrow,
};

/* ============================================================
   飞行行为：绕圈 + 压坡转弯 + 拍打/滑翔交替
   ============================================================ */
export function fly(bird, cfg) {
  const rig = bird.userData.rig;
  const st = {
    t: cfg.phase ?? Math.random() * 10,
    glide: 0,
    glideT: 1 + Math.random() * 3,
    y: cfg.y,
    cx: cfg.cx, cz: cfg.cz, r: cfg.r,
    a: cfg.phase ?? Math.random() * 6.28,
    speed: cfg.speed ?? 0.09,
    dir: cfg.dir ?? 1,
    bob: Math.random() * 6.28,
  };
  bird.userData.st = st;

  bird.userData.update = (dt) => {
    st.t += dt;
    st.a += dt * st.speed * st.dir;
    st.bob += dt * 0.7;

    const x = st.cx + Math.cos(st.a) * st.r;
    const z = st.cz + Math.sin(st.a) * st.r;
    bird.position.set(x, st.y + Math.sin(st.bob) * 1.6, z);

    // 朝向切线方向，并按转弯半径压坡
    const yaw = Math.atan2(
      -Math.sin(st.a) * st.dir,
      Math.cos(st.a) * st.dir,
    );
    bird.rotation.set(0, yaw, 0);
    const bank = -0.55 * st.dir;
    bird.rotateZ(bank);

    // 拍打 / 滑翔切换
    st.glideT -= dt;
    if (st.glideT <= 0) {
      st.glideT = 1.5 + Math.random() * 3.5;
      st.glide = st.glide ? 0 : 1;
    }
    const g = st.glide;
    const flap = Math.sin(st.t * rig.flapRate) * rig.flapAmp * (1 - g * 0.85);
    const tilt = rig.glideTilt * g + 0.06;
    rig.wr.rotation.z = flap + tilt;
    rig.wl.rotation.z = -flap - tilt;
    // 拍翅时翼面略微扭转，剪影才不是一块硬板
    const twist = Math.cos(st.t * rig.flapRate) * 0.22 * (1 - g * 0.85);
    rig.wr.rotation.x = twist;
    rig.wl.rotation.x = twist;
    // 身体随拍打轻轻上下
    bird.children[0].position.y = Math.sin(st.t * rig.flapRate + 1.2) * 0.012 * (1 - g);
  };
  return bird;
}
