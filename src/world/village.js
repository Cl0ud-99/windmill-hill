import * as THREE from 'three';
import { box, cyl, gableRoof, mergeGeos } from '../core/geom.js';
import { MAT } from './matlib.js';
import { doorUnit, windowUnit, strutMesh } from './buildings.js';
import { terrainHeight } from './layout.js';
import { mulberry32 } from '../core/noise.js';
import { buildSmoke } from './particles.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

/* ============================================================
   谷仓：石基 + 深色木板墙 + 大门 + 干草阁楼
   ============================================================ */
export function buildBarn(W = 9.0, D = 6.2, H = 4.2, RISE = 2.45) {
  const g = new THREE.Group();

  // 石基
  add(g, box(W + 0.2, 1.25, D + 0.2, 3.4), MAT.stone, 0, 0.62, 0);
  // 木板墙
  add(g, box(W, H - 1.25, D, 1.6), MAT.wood, 0, 1.25 + (H - 1.25) / 2, 0);
  // 横向压条（代替密集竖板条）
  for (let i = 0; i < 3; i++) {
    add(g, box(W - 0.1, 0.09, 0.05), MAT.woodDark, 0, 1.7 + i * 1.05, D / 2 + 0.015);
  }
  // 转角立柱
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(g, box(0.16, H - 1.2, 0.16), MAT.wood, sx * (W / 2 - 0.05), 1.25 + (H - 1.25) / 2, sz * (D / 2 - 0.05));
  }

  // 屋顶
  const roofGeo = gableRoof(W, D, RISE, 0.34, 1.7);
  add(g, roofGeo, MAT.roof, 0, H, 0);
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0); shape.lineTo(D / 2, 0); shape.lineTo(0, RISE); shape.closePath();
    const m = add(g, new THREE.ShapeGeometry(shape), MAT.woodDark, s * (W / 2 - 0.02), H, 0);
    m.rotation.y = s * Math.PI / 2;
  }
  add(g, box(W + 0.9, 0.14, 0.2, 1), MAT.roof, 0, H + RISE - 0.02, 0);

  // 封檐板 + 博风板（山墙斜边压条）
  for (const s of [-1, 1]) {
    add(g, box(W + 0.72, 0.17, 0.07), MAT.woodDark, 0, H - 0.06, s * (D / 2 + 0.32));
    // 博风板：沿坡面斜着贴
    for (const sx of [-1, 1]) {
      const len = Math.hypot(D / 2 + 0.34, RISE);
      const b = add(g, box(0.07, 0.16, len), MAT.woodDark,
        sx * (W / 2 + 0.32), H + RISE / 2, 0);
      b.rotation.x = Math.atan2(RISE, D / 2 + 0.34);
      b.rotation.y = sx * Math.PI / 2;
    }
  }

  // 大门（双开，带门框与斜撑）
  add(g, box(3.3, 3.15, 0.1), MAT.darkInset, 0, 1.56, D / 2 + 0.02);
  for (const s of [-1, 1]) {
    add(g, box(1.42, 2.96, 0.1), MAT.woodDark, s * 0.74, 1.5, D / 2 + 0.06);
    const brace = add(g, box(0.075, 1.25, 0.045), MAT.woodDark, s * 0.74, 1.5, D / 2 + 0.11);
    brace.rotation.z = s * 0.95;
    // 铁铰链
    add(g, box(0.5, 0.07, 0.04), MAT.metal, s * 1.15, 2.45, D / 2 + 0.12);
    add(g, box(0.5, 0.07, 0.04), MAT.metal, s * 1.15, 0.75, D / 2 + 0.12);
  }
  add(g, box(3.4, 0.18, 0.26), MAT.woodDark, 0, 3.12, D / 2 + 0.05);
  add(g, box(0.16, 3.2, 0.22), MAT.woodDark, -1.62, 1.6, D / 2 + 0.05);
  add(g, box(0.16, 3.2, 0.22), MAT.woodDark, 1.62, 1.6, D / 2 + 0.05);

  // 干草阁楼口（带木框）
  add(g, box(1.42, 1.02, 0.1), MAT.darkInset, 0, 3.28, D / 2 + 0.03);
  add(g, box(1.62, 0.11, 0.18), MAT.woodDark, 0, 3.82, D / 2 + 0.07);
  add(g, box(1.62, 0.11, 0.18), MAT.woodDark, 0, 2.74, D / 2 + 0.07);
  for (const s of [-1, 1]) add(g, box(0.11, 1.14, 0.18), MAT.woodDark, s * 0.76, 3.28, D / 2 + 0.07);
  // 吊臂：水平伸出，压在屋檐之下
  add(g, box(0.13, 0.13, 1.35), MAT.woodDark, 0, 4.12, D / 2 + 0.62);
  g.add(strutMesh(V3(0, 3.55, D / 2 + 0.12), V3(0, 4.1, D / 2 + 0.95), 0.08, MAT.woodDark));
  add(g, cyl(0.01, 0.01, 0.62, 4, 1), MAT.woodDark, 0, 3.8, D / 2 + 1.22);
  add(g, new THREE.TorusGeometry(0.06, 0.014, 5, 8), MAT.metal, 0, 3.48, D / 2 + 1.22);

  // 小窗
  const w = windowUnit(0.5, 0.62);
  w.position.set(-W / 2 + 0.02, 2.1, 0);
  w.rotation.y = -Math.PI / 2;
  g.add(w);

  return g;
}

/* ============================================================
   石屋：小屋 + 烟囱 + 菜园
   ============================================================ */
export function buildCottage(W = 6.2, D = 4.6, H = 3.0, RISE = 1.75) {
  const g = new THREE.Group();

  add(g, box(W, H, D, 3.4), MAT.stone, 0, H / 2, 0);
  add(g, box(W + 0.24, 0.4, D + 0.24, 3.4), MAT.stone, 0, 0.2, 0);

  const roofGeo = gableRoof(W, D, RISE, 0.38, 1.6);
  add(g, roofGeo, MAT.roof, 0, H, 0);
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0); shape.lineTo(D / 2, 0); shape.lineTo(0, RISE); shape.closePath();
    const m = add(g, new THREE.ShapeGeometry(shape), MAT.stone, s * (W / 2 - 0.01), H, 0);
    m.rotation.y = s * Math.PI / 2;
  }
  add(g, box(W + 0.7, 0.12, 0.18, 1), MAT.roof, 0, H + RISE - 0.02, 0);

  // 封檐板 + 博风板
  for (const s of [-1, 1]) {
    add(g, box(W + 0.56, 0.14, 0.06), MAT.woodDark, 0, H - 0.05, s * (D / 2 + 0.26));
    for (const sx of [-1, 1]) {
      const len = Math.hypot(D / 2 + 0.3, RISE);
      const b = add(g, box(0.06, 0.13, len), MAT.woodDark,
        sx * (W / 2 + 0.26), H + RISE / 2, 0);
      b.rotation.x = Math.atan2(RISE, D / 2 + 0.3);
      b.rotation.y = sx * Math.PI / 2;
    }
  }

  // 烟囱
  add(g, box(0.5, 1.9, 0.5, 1.8), MAT.stone, W / 2 - 0.9, H + RISE * 0.55, -0.9);
  add(g, box(0.64, 0.12, 0.64, 1.8), MAT.stone, W / 2 - 0.9, H + RISE * 0.55 + 0.98, -0.9);

  // 门与窗
  const d = doorUnit(1.0, 2.0, { mat: MAT.woodDark });
  d.position.set(-0.6, 0, D / 2 - 0.02);
  g.add(d);
  const w1 = windowUnit(0.62, 0.78, { shutters: true, box: true });
  w1.position.set(1.5, 1.35, D / 2 - 0.02);
  g.add(w1);
  const w2 = windowUnit(0.55, 0.7);
  w2.position.set(W / 2 - 0.02, 1.4, 0.6);
  w2.rotation.y = Math.PI / 2;
  g.add(w2);

  // 炊烟
  const smoke = buildSmoke(20, 3.2, 0.45);
  smoke.position.set(W / 2 - 0.9, H + RISE * 0.55 + 1.15, -0.9);
  g.add(smoke);

  // 门前小板凳
  add(g, box(0.7, 0.08, 0.28), MAT.woodPlain, -0.6, 0.42, D / 2 + 0.55);
  for (const s of [-1, 1]) {
    add(g, box(0.07, 0.42, 0.07), MAT.woodPlain, -0.6 + s * 0.26, 0.21, D / 2 + 0.55);
  }

  return g;
}

/* ============================================================
   敞棚（放车/柴）
   ============================================================ */
export function buildShed(W = 4.2, D = 3.2, H = 2.4) {
  const g = new THREE.Group();
  // 四柱
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(g, box(0.16, H, 0.16), MAT.woodDark, sx * (W / 2 - 0.1), H / 2, sz * (D / 2 - 0.1));
  }
  // 横梁
  for (const sz of [-1, 1]) {
    add(g, box(W, 0.14, 0.14), MAT.woodDark, 0, H - 0.07, sz * (D / 2 - 0.1));
  }
  // 单坡顶
  const roof = add(g, box(W + 0.6, 0.12, D + 0.7, 2.4), MAT.roof, 0, H + 0.12, 0);
  roof.rotation.x = -0.13;
  // 背板
  add(g, box(W - 0.2, H - 0.2, 0.1, 1.6), MAT.woodDark, 0, (H - 0.2) / 2, -D / 2 + 0.1);
  // 柴堆
  for (let i = 0; i < 6; i++) {
    const m = add(g, cyl(0.09, 0.09, 1.6, 6, 1), MAT.wood, -1.1 + (i % 3) * 0.22, 0.09 + Math.floor(i / 3) * 0.2, 0.4);
    m.rotation.z = Math.PI / 2;
  }
  return g;
}

/* ============================================================
   石砌水井：砌石井圈 + 木架 + 绞盘 + 吊桶 + 双坡小顶
   ============================================================ */
export function buildWell() {
  const g = new THREE.Group();

  // 井圈：一圈石块，比整圆柱更像砌筑
  const N = 12;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const m = add(g, box(0.58, 0.86, 0.26, 2.6), MAT.stone,
      Math.sin(a) * 0.98, 0.43, Math.cos(a) * 0.98);
    m.rotation.y = a;
  }
  // 井沿
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.075, 6, 26), MAT.stone);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.88;
  rim.castShadow = true;
  g.add(rim);
  // 水面
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.9, 22), MAT.darkInset);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.55;
  g.add(water);

  // 立柱
  for (const s of [-1, 1]) {
    add(g, box(0.13, 2.05, 0.13), MAT.woodDark, s * 0.92, 1.02, 0);
    // 斜撑
    const br = add(g, box(0.07, 0.5, 0.07), MAT.woodDark, s * 0.92, 0.9, 0.16);
    br.rotation.x = 0.55;
  }
  // 横梁（沿 X 贯通）
  const beamGeo = new THREE.CylinderGeometry(0.07, 0.07, 2.2, 8);
  beamGeo.rotateZ(Math.PI / 2);
  add(g, beamGeo, MAT.woodDark, 0, 2.02, 0);
  // 绞盘
  const drumGeo = new THREE.CylinderGeometry(0.115, 0.115, 0.62, 12);
  drumGeo.rotateZ(Math.PI / 2);
  add(g, drumGeo, MAT.woodDark, 0.28, 2.02, 0);
  // 摇柄
  add(g, box(0.05, 0.05, 0.30), MAT.woodDark, 0.62, 2.02, 0.16);
  add(g, box(0.05, 0.22, 0.05), MAT.woodDark, 0.62, 1.92, 0.30);

  // 绳 + 吊桶
  add(g, cyl(0.011, 0.011, 0.82, 4, 1), MAT.woodDark, 0, 1.6, 0);
  add(g, cyl(0.155, 0.125, 0.26, 12, 1), MAT.woodDark, 0, 1.06, 0);
  add(g, new THREE.TorusGeometry(0.15, 0.016, 5, 12), MAT.metal, 0, 1.16, 0).rotation.x = Math.PI / 2;

  // 双坡小顶（脊沿 Z）
  for (const s of [-1, 1]) {
    const panel = add(g, box(1.25, 0.09, 2.35, 2.6), MAT.roof, s * 0.55, 2.2, 0);
    panel.rotation.z = -s * 0.44;
  }
  add(g, box(0.12, 0.1, 2.4, 2.6), MAT.roof, 0, 2.46, 0);
  // 脊饰
  add(g, new THREE.SphereGeometry(0.06, 8, 6), MAT.metal, 0, 2.55, 0);

  return g;
}

/* ============================================================
   菜园：垄 + 卷心菜
   ============================================================ */
export function buildVegetablePatch(rows = 4, len = 3.2) {
  const g = new THREE.Group();
  const rnd = mulberry32(303);
  for (let r = 0; r < rows; r++) {
    const z = (r - (rows - 1) / 2) * 0.62;
    add(g, box(len, 0.10, 0.42, 1.2), MAT.dirt, 0, 0.05, z);
    const n = Math.floor(len / 0.42);
    for (let i = 0; i < n; i++) {
      const x = -len / 2 + 0.2 + i * 0.42;
      const s = 0.11 + rnd() * 0.05;
      const cab = new THREE.Mesh(new THREE.SphereGeometry(s, 7, 5), MAT.cabbage);
      cab.scale.set(1, 0.78, 1);
      cab.position.set(x + (rnd() - 0.5) * 0.05, 0.12 + s * 0.5, z);
      cab.castShadow = true;
      g.add(cab);
    }
  }
  return g;
}

/* ============================================================
   干草堆（圆锥顶）
   ============================================================ */
export function buildHayRick(r = 1.1, h = 2.0) {
  const g = new THREE.Group();
  add(g, cyl(r, r * 1.06, h * 0.62, 14, 1), MAT.straw, 0, 0, 0);
  const cap = add(g, new THREE.ConeGeometry(r * 1.08, h * 0.5, 14), MAT.straw, 0, h * 0.62, 0);
  add(g, cyl(0.05, 0.05, 0.5, 5, 1), MAT.woodDark, 0, h * 1.05, 0);
  return g;
}


/* ============================================================
   小道具：梯子、麻袋、柴堆
   ============================================================ */
export function buildLadder(h = 3.2, w = 0.52) {
  const g = new THREE.Group();
  for (const s of [-1, 1]) {
    add(g, box(0.07, h, 0.07), MAT.woodPlain, s * w / 2, h / 2, 0);
  }
  const n = Math.floor(h / 0.34);
  for (let i = 0; i < n; i++) {
    add(g, box(w, 0.05, 0.05), MAT.woodPlain, 0, 0.25 + i * 0.34, 0);
  }
  return g;
}

export function buildSack() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), MAT.straw);
  body.scale.set(0.82, 1.05, 0.78);
  body.position.y = 0.26;
  body.castShadow = body.receiveShadow = true;
  g.add(body);
  const neck = add(g, cyl(0.1, 0.14, 0.16, 8, 1), MAT.straw, 0, 0.5, 0);
  add(g, new THREE.TorusGeometry(0.105, 0.018, 5, 10), MAT.woodDark, 0, 0.62, 0).rotation.x = Math.PI / 2;
  return g;
}

export function buildWoodpile(w = 2.0, h = 1.0) {
  const g = new THREE.Group();
  const rnd = mulberry32(71);
  const rows = Math.floor(h / 0.2);
  for (let r = 0; r < rows; r++) {
    const n = Math.floor(w / 0.22);
    for (let i = 0; i < n; i++) {
      if (rnd() > 0.9) continue;
      const m = add(g, cyl(0.085, 0.09, 0.5, 6, 1), MAT.wood,
        -w / 2 + 0.12 + i * 0.22, 0.09 + r * 0.19, (rnd() - 0.5) * 0.06);
      m.rotation.x = Math.PI / 2;
      m.rotation.z = (rnd() - 0.5) * 0.15;
    }
  }
  return g;
}

/* ============================================================
   放置
   ============================================================ */
export function placeVillage(scene) {
  const group = new THREE.Group();
  group.name = 'village';

  const put = (obj, x, z, ry = 0, dy = 0) => {
    obj.position.set(x, terrainHeight(x, z) + dy, z);
    obj.rotation.y = ry;
    group.add(obj);
    return obj;
  };

  // 谷仓（墙外下坡，主镜头可见）
  put(buildBarn(), 29.5, 37.5, -0.42, -0.45);

  // 石屋（墙外左侧）
  put(buildCottage(), -20.0, 33.0, 0.52, -0.38);

  // 菜园（石屋前）
  put(buildVegetablePatch(), -16.4, 30.2, 0.52, 0.02);

  // 敞棚
  put(buildShed(), -15.0, 8.5, 0.25, -0.28);

  // 水井（路边）
  put(buildWell(), 8.2, 13.8, 0.3, -0.12);

  // 干草堆
  put(buildHayRick(1.15, 2.2), 34.0, 33.5, 0.6, 0);
  put(buildHayRick(0.95, 1.8), 32.2, 35.4, 1.4, 0);

  // ---- 谷仓周边杂物 ----
  const ladder = buildLadder(3.4, 0.55);
  ladder.position.set(terrainHeight(25.2, 41.0), terrainHeight(25.2, 41.0) + 0.0, 41.0);
  ladder.rotation.set(0, -0.42, 0.16);
  ladder.position.y = terrainHeight(25.2, 41.0);
  group.add(ladder);

  const wp = buildWoodpile(2.2, 1.0);
  wp.position.set(terrainHeight(34.2, 40.0), terrainHeight(34.2, 40.0), 40.0);
  wp.rotation.y = -0.42;
  group.add(wp);

  for (const [x, z, r] of [[27.6, 43.2, 0.4], [28.4, 43.8, 1.2], [26.9, 44.1, 2.1]]) {
    const sk = buildSack();
    sk.position.set(terrainHeight(x, z), terrainHeight(x, z), z);
    sk.rotation.y = r;
    group.add(sk);
  }

  // ---- 小屋周边 ----
  const wp2 = buildWoodpile(1.5, 0.8);
  wp2.position.set(terrainHeight(-16.6, 35.6), terrainHeight(-16.6, 35.6), 35.6);
  wp2.rotation.y = 0.52;
  group.add(wp2);
  const sk2 = buildSack();
  sk2.position.set(terrainHeight(-22.6, 35.2), terrainHeight(-22.6, 35.2), 35.2);
  sk2.rotation.y = 0.8;
  group.add(sk2);

  scene.add(group);
  return group;
}
