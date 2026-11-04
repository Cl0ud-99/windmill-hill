import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { box, cyl, rockGeo, jitter, mergeGeos, paintGeo } from '../core/geom.js';
import { MAT } from './matlib.js';
import { terrainHeight, PATH_MAIN, riverCenterZ, riverHalfWidth, WATER_Y } from './layout.js';
import { mulberry32 } from '../core/noise.js';

function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

/* ---------------- 车轮 ---------------- */
export function wheel(radius = 0.62, spokes = 10, width = 0.12) {
  const g = new THREE.Group();
  const rim = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.055, 6, 30), MAT.woodDark);
  rim.castShadow = true; g.add(rim);
  const rim2 = new THREE.Mesh(new THREE.TorusGeometry(radius - 0.1, 0.035, 5, 26), MAT.woodDark);
  rim2.castShadow = true; g.add(rim2);
  for (let i = 0; i < spokes; i++) {
    const a = (i / spokes) * Math.PI * 2;
    const m = new THREE.Mesh(box(0.062, radius * 2 - 0.1, 0.055), MAT.woodDark);
    m.rotation.z = a;
    m.castShadow = true;
    g.add(m);
  }
  const hub = new THREE.Mesh(cyl(0.1, 0.1, width, 10, 1), MAT.woodDark);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = -width / 2;
  hub.castShadow = true;
  g.add(hub);
  return g;
}

/* ---------------- 破木车 ---------------- */
export function buildCart() {
  const g = new THREE.Group();
  const W = 2.3, D = 1.35;

  // 车板
  for (let i = 0; i < 6; i++) {
    add(g, box(W, 0.06, D / 6 - 0.02), MAT.wood, 0, 0, -D / 2 + (i + 0.5) * D / 6);
  }
  // 侧板
  for (const s of [-1, 1]) {
    add(g, box(W, 0.3, 0.06), MAT.wood, 0, 0.16, s * D / 2);
    for (let i = 0; i < 4; i++) {
      add(g, box(0.06, 0.34, 0.09), MAT.woodDark, -W / 2 + 0.2 + i * (W - 0.4) / 3, 0.16, s * D / 2);
    }
  }
  // 底架
  for (const s of [-1, 1]) add(g, box(W * 0.96, 0.1, 0.12), MAT.woodDark, 0, -0.07, s * D * 0.34);
  // 车辕
  for (const s of [-1, 1]) {
    const m = add(g, box(2.1, 0.09, 0.09), MAT.woodDark, -W / 2 - 0.95, -0.02, s * 0.34);
    m.rotation.z = 0.06;
  }
  add(g, box(0.5, 0.09, 0.9), MAT.woodDark, -W / 2 - 1.85, 0.1, 0);
  // 轴
  const ax = add(g, cyl(0.055, 0.055, D + 0.3, 8, 1), MAT.woodDark, -0.1, -0.12, -(D + 0.3) / 2);
  ax.rotation.x = Math.PI / 2;

  // 轮子
  const w1 = wheel(0.66, 10, 0.14);
  w1.position.set(-0.1, -0.62, D / 2 + 0.12);
  g.add(w1);
  const w2 = wheel(0.66, 10, 0.14);
  w2.position.set(-0.1, -0.62, -D / 2 - 0.12);
  g.add(w2);

  return g;
}

/* ---------------- 长椅 ---------------- */
export function buildBench() {
  const g = new THREE.Group();
  const L = 1.9;
  for (let i = 0; i < 3; i++) add(g, box(L, 0.055, 0.14), MAT.wood, 0, 0.46, -0.18 + i * 0.16);
  for (let i = 0; i < 2; i++) {
    const m = add(g, box(L, 0.14, 0.05), MAT.wood, 0, 0.72 + i * 0.17, 0.28);
    m.rotation.x = -0.16;
  }
  for (const s of [-1, 1]) {
    add(g, box(0.09, 0.46, 0.09), MAT.woodPlain, s * (L / 2 - 0.14), 0.23, -0.2);
    add(g, box(0.09, 0.46, 0.09), MAT.woodPlain, s * (L / 2 - 0.14), 0.23, 0.24);
    const back = add(g, box(0.07, 0.62, 0.07), MAT.woodPlain, s * (L / 2 - 0.14), 0.72, 0.28);
    back.rotation.x = -0.16;
    add(g, box(0.08, 0.07, 0.52), MAT.woodPlain, s * (L / 2 - 0.14), 0.44, 0.02);
  }
  return g;
}

/* ---------------- 路灯 ---------------- */
export function buildLamp() {
  const g = new THREE.Group();
  // 细铁杆 + 底座
  add(g, cyl(0.042, 0.058, 2.55, 10, 1), MAT.metal, 0, 0, 0);
  add(g, cyl(0.15, 0.19, 0.10, 12, 1), MAT.metal, 0, 0.02, 0);

  // 灯箱：四根角柱 + 玻璃，而不是实心盒子
  const boxG = new THREE.Group();
  const gw = 0.15, gh = 0.30;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(boxG, box(0.022, gh, 0.022), MAT.metal, sx * gw, gh / 2, sz * gw);
  }
  const glass = add(boxG, box(gw * 1.9, gh * 0.94, gw * 1.9), MAT.lampGlass, 0, gh / 2, 0);
  glass.castShadow = false;
  // 上下框
  add(boxG, box(gw * 2.3, 0.03, gw * 2.3), MAT.metal, 0, 0.012, 0);
  add(boxG, box(gw * 2.3, 0.035, gw * 2.3), MAT.metal, 0, gh, 0);
  // 四坡顶
  const top = add(boxG, new THREE.ConeGeometry(0.20, 0.15, 4), MAT.metal, 0, gh + 0.075, 0);
  top.rotation.y = Math.PI / 4;
  // 顶饰
  add(boxG, new THREE.SphereGeometry(0.026, 8, 6), MAT.metal, 0, gh + 0.17, 0);

  boxG.position.y = 2.46;
  g.add(boxG);
  return g;
}

/* ---------------- 陶盆 ---------------- */
export function buildPot(scale = 1, plant = true) {
  const g = new THREE.Group();
  // 车削剖面：口沿外翻、腹部微鼓、底部收进
  const profile = [
    [0.00, 0.00], [0.17, 0.00], [0.185, 0.03], [0.215, 0.10],
    [0.232, 0.20], [0.238, 0.28], [0.250, 0.315], [0.252, 0.345],
    [0.235, 0.352], [0.215, 0.330], [0.00, 0.330],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const pot = new THREE.Mesh(new THREE.LatheGeometry(profile, 18), MAT.terracotta);
  pot.castShadow = pot.receiveShadow = true;
  g.add(pot);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.245, 0.028, 6, 16), MAT.terracotta);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.17;
  rim.castShadow = true;
  g.add(rim);
  const soil = new THREE.Mesh(new THREE.CircleGeometry(0.22, 12), MAT.darkInset);
  soil.rotation.x = -Math.PI / 2;
  soil.position.y = 0.16;
  g.add(soil);
  if (plant) {
    const rnd = mulberry32(Math.floor(Math.random() * 999));
    const parts = [];
    for (let i = 0; i < 7; i++) {
      const a = rnd() * 6.28, r = rnd() * 0.16;
      const s = new THREE.SphereGeometry(0.09 + rnd() * 0.06, 8, 6);
      jitter(s, 0.25, 3, i);
      s.translate(Math.cos(a) * r, 0.24 + rnd() * 0.16, Math.sin(a) * r);
      paintGeo(s, new THREE.Color(0.22, 0.36, 0.14));
      parts.push(s);
    }
    for (let i = 0; i < 6; i++) {
      const a = rnd() * 6.28, r = rnd() * 0.18;
      const s = new THREE.SphereGeometry(0.045, 6, 4);
      s.translate(Math.cos(a) * r, 0.36 + rnd() * 0.14, Math.sin(a) * r);
      paintGeo(s, new THREE.Color(0.95, 0.86, 0.55));
      parts.push(s);
    }
    const plantMesh = new THREE.Mesh(mergeGeos(parts), MAT.potPlant);
    plantMesh.castShadow = true;
    g.add(plantMesh);
  }
  g.scale.setScalar(scale);
  return g;
}

/* ---------------- 木栅栏 ---------------- */
export function buildFence(pts, height = 0.95) {
  const g = new THREE.Group();
  const path = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const n = Math.max(1, Math.round(len / 1.6));
    for (let k = 0; k < n; k++) {
      path.push([ax + (bx - ax) * (k / n), az + (bz - az) * (k / n)]);
    }
  }
  path.push(pts[pts.length - 1]);

  for (let i = 0; i < path.length; i++) {
    const [x, z] = path[i];
    const y = terrainHeight(x, z);
    const post = add(g, box(0.1, height + 0.18, 0.1), MAT.woodPlain, x, y + (height + 0.18) / 2, z);
    post.rotation.y = Math.random() * 0.2;
    if (i < path.length - 1) {
      const [nx, nz] = path[i + 1];
      const ny = terrainHeight(nx, nz);
      const dx = nx - x, dz = nz - z;
      const len = Math.hypot(dx, dz);
      const ang = Math.atan2(dx, dz);
      for (const hh of [0.35, 0.78]) {
        const rail = add(g, box(0.055, 0.09, len + 0.05), MAT.woodPlain, x + dx / 2, (y + ny) / 2 + hh, z + dz / 2);
        rail.rotation.y = ang;
        rail.rotation.x = Math.atan2(ny - y, len) * 0.0;
      }
    }
  }
  return g;
}

/* ---------------- 小木桥 ---------------- */
export function buildBridge(len = 3.4, width = 1.7) {
  const g = new THREE.Group();
  // 整块桥面（避免缝隙透视产生条纹）
  const deck = add(g, box(width, 0.12, len), MAT.wood, 0, 0.1, 0);
  // 木板缝（细凹槽）
  for (let i = 1; i < 9; i++) {
    const z = -len / 2 + (i / 9) * len;
    add(g, box(width - 0.06, 0.02, 0.03), MAT.woodDark, 0, 0.17, z);
  }
  for (const s of [-1, 1]) {
    add(g, box(0.1, 0.12, len), MAT.woodDark, s * width / 2, 0.06, 0);
    for (const e of [-1, 1]) {
      add(g, box(0.1, 0.85, 0.1), MAT.woodDark, s * width / 2, 0.42, e * (len / 2 - 0.15));
    }
    const rail = add(g, box(0.07, 0.07, len - 0.2), MAT.woodDark, s * width / 2, 0.82, 0);
  }
  return g;
}

/* ---------------- 鸟屋 ---------------- */
export function buildBirdhouse() {
  const g = new THREE.Group();
  add(g, box(0.12, 1.8, 0.12), MAT.woodDark, 0, 0.9, 0);
  add(g, box(0.42, 0.5, 0.38), MAT.woodPlain, 0, 1.9, 0);
  const roof = add(g, new THREE.ConeGeometry(0.36, 0.26, 4), MAT.roof, 0, 2.24, 0);
  roof.rotation.y = Math.PI / 4;
  const hole = add(g, new THREE.CircleGeometry(0.075, 12), MAT.darkInset, 0, 1.94, 0.2);
  hole.castShadow = false;
  return g;
}

/* ---------------- 木桶 / 木箱 ---------------- */
export function buildBarrel() {
  const g = new THREE.Group();
  const b = add(g, cyl(0.28, 0.24, 0.72, 14, 1), MAT.woodDark, 0, 0, 0);
  for (const y of [0.14, 0.36, 0.58]) {
    const ring = add(g, new THREE.TorusGeometry(0.275 - Math.abs(y - 0.36) * 0.1, 0.022, 5, 16), MAT.metal, 0, y, 0);
    ring.rotation.x = Math.PI / 2;
  }
  return g;
}

export function buildCrate(s = 0.5) {
  const g = new THREE.Group();
  add(g, box(s, s * 0.8, s), MAT.wood, 0, s * 0.4, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(g, box(0.05, s * 0.82, 0.05), MAT.woodDark, sx * s / 2, s * 0.4, sz * s / 2);
  }
  return g;
}

/* ---------------- 干草捆 ---------------- */
export function buildHaystack() {
  const g = new THREE.Group();
  const m = add(g, new THREE.CylinderGeometry(0.75, 0.85, 1.1, 14, 1), MAT.straw, 0, 0.55, 0);
  m.rotation.z = Math.PI / 2;
  return g;
}

/* ---------------- 河石 ---------------- */
export function buildRiverStones(count = 1100) {
  const group = new THREE.Group();
  const geos = [rockGeo(11, 1), rockGeo(12, 1), rockGeo(13, 1), rockGeo(14, 0)];
  const lists = [[], [], [], []];
  const rnd = mulberry32(2024);
  for (let i = 0; i < count; i++) {
    const x = -150 + rnd() * 300;
    const zc = riverCenterZ(x);
    const hw = riverHalfWidth(x);
    const inWater = rnd() < 0.45;
    const off = inWater
      ? hw * (0.15 + rnd() * 0.95)
      : hw * (0.95 + rnd() * 0.55);
    const side = rnd() < 0.5 ? -1 : 1;
    const z = zc + side * off;
    const gy = terrainHeight(x, z);
    const s = inWater ? 0.22 + rnd() * 0.55 : 0.16 + rnd() * 0.42;
    const y = inWater ? Math.max(gy, WATER_Y - 0.35) : gy + s * 0.15;
    lists[Math.floor(rnd() * 4)].push({
      p: [x, y, z],
      s: [s * (0.9 + rnd() * 0.7), s * (0.6 + rnd() * 0.5), s * (0.9 + rnd() * 0.6)],
      r: [rnd() * 6.28, rnd() * 6.28, rnd() * 6.28],
    });
  }
  const mat = makeToon({
    color: 0x8d887a, rim: 0.34, rimColor: 0xe8f0e0, spec: 0.22, specPower: 26,
    fresnel: 0.30, noise: 0.24, noiseScale: 2.0, saturation: 0.95, wet: 0.55, roughVar: 0.9,
  });
  const dummy = new THREE.Object3D();
  lists.forEach((list, k) => {
    const mesh = new THREE.InstancedMesh(geos[k], mat, list.length);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    list.forEach((it, i) => {
      dummy.position.set(...it.p);
      dummy.rotation.set(...it.r);
      dummy.scale.set(...it.s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
  });
  return group;
}

/* ---------------- 场景摆件 ---------------- */
export function placeScenery(scene) {
  const group = new THREE.Group();
  group.name = 'scenery';

  // 破木车（河边）
  const cart = buildCart();
  cart.position.set(21.0, terrainHeight(21.0, 59.0) + 0.35, 59.0);
  cart.rotation.set(-0.08, 0.92, 0.24);
  group.add(cart);

  // 掉落的车轮
  const lw = wheel(0.66, 10, 0.14);
  lw.position.set(17.6, terrainHeight(17.6, 60.4) + 0.12, 60.4);
  lw.rotation.set(-Math.PI / 2 + 0.22, 0.4, 0.3);
  group.add(lw);

  // 长椅：必须落在花园台基的平地上，且避开绣球丛
  const b1 = buildBench();
  b1.position.set(14.4, terrainHeight(14.4, 11.2), 11.2);
  b1.rotation.y = -2.15;
  group.add(b1);

  const b2 = buildBench();
  b2.position.set(18.9, terrainHeight(18.9, 15.6), 15.6);
  b2.rotation.y = -2.05;
  group.add(b2);

  // 路灯
  const lamp = buildLamp();
  lamp.position.set(13.6, terrainHeight(13.6, 19.5), 19.5);
  group.add(lamp);

  // 鸟屋
  const bh = buildBirdhouse();
  bh.position.set(21.8, terrainHeight(21.8, 15.4), 15.4);
  group.add(bh);

  // 栅栏
  const fence = buildFence([[23.2, 6.2], [24.6, 11.6], [22.6, 17.2], [17.0, 18.6], [11.4, 16.4]]);
  group.add(fence);

  // 陶盆
  const potPos = [
    [11.7, 13.4, 1.0], [12.35, 12.85, 0.8], [19.9, 8.3, 1.0],
    [20.6, 9.0, 0.75], [-2.6, 4.6, 0.95], [-1.9, 5.4, 0.7],
    [-6.2, 5.2, 0.9], [8.6, 10.4, 0.85],
  ];
  for (const [x, z, s] of potPos) {
    const p = buildPot(s);
    p.position.set(x, terrainHeight(x, z), z);
    p.rotation.y = Math.random() * 6.28;
    group.add(p);
  }

  // 木桶木箱
  const barrel = buildBarrel();
  barrel.position.set(2.9, terrainHeight(2.9, 5.3), 5.3);
  group.add(barrel);
  const crate = buildCrate(0.55);
  crate.position.set(3.7, terrainHeight(3.7, 4.7), 4.7);
  crate.rotation.y = 0.5;
  group.add(crate);
  const crate2 = buildCrate(0.42);
  crate2.position.set(3.5, terrainHeight(3.5, 4.7) + 0.44, 4.72);
  crate2.rotation.y = 0.9;
  group.add(crate2);

  // 干草
  const hay = buildHaystack();
  hay.position.set(-13.2, terrainHeight(-13.2, 6.5), 6.5);
  hay.rotation.y = 0.4;
  group.add(hay);

  scene.add(group);
  return group;
}
