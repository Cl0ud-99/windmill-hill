import * as THREE from 'three';
import { box, cyl, gableRoof, mergeGeos } from '../core/geom.js';
import { MAT } from './matlib.js';
import { doorUnit, windowUnit, strutMesh } from './buildings.js';
import { terrainHeight } from './layout.js';
import { mulberry32 } from '../core/noise.js';

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
  add(g, box(W + 0.2, 1.25, D + 0.2, 2.4), MAT.stone, 0, 0.62, 0);
  // 木板墙
  add(g, box(W, H - 1.25, D, 1.6), MAT.woodDark, 0, 1.25 + (H - 1.25) / 2, 0);
  // 竖向板缝
  const planks = Math.round(W / 0.42);
  for (let i = 1; i < planks; i++) {
    const x = -W / 2 + (i / planks) * W;
    add(g, box(0.035, H - 1.3, 0.04), MAT.wood, x, 1.25 + (H - 1.25) / 2, D / 2 + 0.01);
  }
  // 转角立柱
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(g, box(0.16, H - 1.2, 0.16), MAT.wood, sx * (W / 2 - 0.05), 1.25 + (H - 1.25) / 2, sz * (D / 2 - 0.05));
  }

  // 屋顶
  const roofGeo = gableRoof(W, D, RISE, 0.34, 3.0);
  add(g, roofGeo, MAT.roof, 0, H, 0);
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0); shape.lineTo(D / 2, 0); shape.lineTo(0, RISE); shape.closePath();
    const m = add(g, new THREE.ShapeGeometry(shape), MAT.woodDark, s * (W / 2 - 0.02), H, 0);
    m.rotation.y = s * Math.PI / 2;
  }
  add(g, box(W + 0.9, 0.14, 0.2, 1), MAT.roof, 0, H + RISE - 0.02, 0);

  // 大门（双开）
  for (const s of [-1, 1]) {
    const d = add(g, box(1.35, 3.0, 0.09), MAT.wood, s * 0.72, 1.5, D / 2 + 0.03);
    // 斜撑
    const brace = add(g, box(0.09, 3.3, 0.05), MAT.woodDark, s * 0.72, 1.5, D / 2 + 0.08);
    brace.rotation.z = s * 0.42;
  }
  add(g, box(3.1, 0.16, 0.22), MAT.woodDark, 0, 3.08, D / 2 + 0.06);

  // 干草阁楼口
  add(g, box(1.5, 1.25, 0.12), MAT.darkInset, 0, 3.95, D / 2 + 0.02);
  add(g, box(1.7, 0.12, 0.2), MAT.woodDark, 0, 4.6, D / 2 + 0.08);
  // 吊臂
  g.add(strutMesh(V3(0, 4.5, D / 2 + 0.1), V3(0, 5.1, D / 2 + 1.1), 0.11, MAT.woodDark));
  add(g, cyl(0.01, 0.01, 0.9, 4, 1), MAT.woodDark, 0, 4.6, D / 2 + 1.0);

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
export function buildCottage(W = 6.2, D = 4.6, H = 2.9, RISE = 2.0) {
  const g = new THREE.Group();

  add(g, box(W, H, D, 2.2), MAT.stone, 0, H / 2, 0);
  add(g, box(W + 0.24, 0.4, D + 0.24, 2.2), MAT.stone, 0, 0.2, 0);

  const roofGeo = gableRoof(W, D, RISE, 0.38, 2.8);
  add(g, roofGeo, MAT.roof, 0, H, 0);
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0); shape.lineTo(D / 2, 0); shape.lineTo(0, RISE); shape.closePath();
    const m = add(g, new THREE.ShapeGeometry(shape), MAT.stone, s * (W / 2 - 0.01), H, 0);
    m.rotation.y = s * Math.PI / 2;
  }
  add(g, box(W + 0.7, 0.12, 0.18, 1), MAT.roof, 0, H + RISE - 0.02, 0);

  // 烟囱
  add(g, box(0.5, 1.9, 0.5, 1.8), MAT.stone, W / 2 - 0.9, H + RISE * 0.55, -0.9);
  add(g, box(0.64, 0.12, 0.64, 1.8), MAT.stone, W / 2 - 0.9, H + RISE * 0.55 + 0.98, -0.9);

  // 门与窗
  const d = doorUnit(1.0, 2.0);
  d.position.set(-0.6, 0, D / 2 - 0.02);
  g.add(d);
  const w1 = windowUnit(0.62, 0.78, { shutters: true, box: true });
  w1.position.set(1.5, 1.35, D / 2 - 0.02);
  g.add(w1);
  const w2 = windowUnit(0.55, 0.7);
  w2.position.set(W / 2 - 0.02, 1.4, 0.6);
  w2.rotation.y = Math.PI / 2;
  g.add(w2);

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
   石砌水井
   ============================================================ */
export function buildWell() {
  const g = new THREE.Group();
  // 井圈
  add(g, cyl(1.05, 1.15, 0.85, 20, 1.6), MAT.stone, 0, 0, 0);
  add(g, new THREE.TorusGeometry(1.06, 0.09, 6, 20), MAT.stone, 0, 0.86, 0);
  // 水面
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.92, 20), MAT.darkInset);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.62;
  g.add(water);
  // 立柱与横梁
  for (const s of [-1, 1]) {
    add(g, box(0.12, 1.9, 0.12), MAT.woodDark, s * 0.95, 0.95, 0);
  }
  add(g, cyl(0.07, 0.07, 2.0, 8, 1), MAT.woodDark, -1.0, 1.86, 0).rotation.z = Math.PI / 2;
  // 顶棚
  const roof = add(g, box(2.5, 0.1, 1.4, 2.4), MAT.roof, 0, 2.16, 0);
  roof.rotation.z = 0.06;
  // 吊桶
  add(g, cyl(0.012, 0.012, 0.7, 4, 1), MAT.woodDark, 0, 1.55, 0);
  add(g, cyl(0.16, 0.13, 0.26, 10, 1), MAT.woodDark, 0, 1.1, 0);
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

  // 谷仓前的小围栏
  const fencePts = [[-30.5, 14.0], [-20.5, 13.2]];
  scene.add(group);
  return group;
}
