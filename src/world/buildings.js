import * as THREE from 'three';
import { box, cyl, lathe, gableRoof, archGeo, mergeGeos, TILE } from '../core/geom.js';
import { MAT } from './matlib.js';
import { clamp } from '../core/noise.js';
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

export function strutMesh(a, b, t, mat, tile = TILE) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = box(t, len, t, tile);
  const m = new THREE.Mesh(g, mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

/* ---------------- 窗 ----------------
   层叠顺序（局部 z）：墙体 0 → 暗部 0.02 → 窗框 0.05 → 窗台 0.10
   暗部必须贴在墙面前方，否则会被实体墙挡住变成黑洞
------------------------------------- */
export function windowUnit(w = 0.85, h = 1.15, opts = {}) {
  const g = new THREE.Group();

  // 石质窗套（贴在墙面）
  const surround = add(g, archGeo(w + 0.34, h + 0.30, 0.10), MAT.stone, 0, -0.06, 0.05);
  surround.castShadow = false;

  // 暗部：稍微凹进去一点，但仍在墙面前
  add(g, archGeo(w, h, 0.06), MAT.darkInset, 0, 0, 0.03).castShadow = false;

  // 木窗框
  const fr = 0.07;
  add(g, box(fr, h, 0.10), MAT.woodDark, -w / 2, h / 2, 0.09);
  add(g, box(fr, h, 0.10), MAT.woodDark, w / 2, h / 2, 0.09);
  add(g, box(w + fr * 2, fr, 0.10), MAT.woodDark, 0, h, 0.09);
  add(g, box(w + fr * 2, fr, 0.10), MAT.woodDark, 0, 0.02, 0.09);
  // 十字窗棂
  add(g, box(w, 0.045, 0.06), MAT.woodDark, 0, h * 0.55, 0.11);
  add(g, box(0.04, h * 0.9, 0.05), MAT.woodDark, 0, h * 0.5, 0.11);
  // 窗台
  add(g, box(w + 0.46, 0.10, 0.32), MAT.stone, 0, -0.08, 0.14);

  if (opts.shutters) {
    for (const s of [-1, 1]) {
      const sh = add(g, box(w * 0.5, h * 0.94, 0.05), MAT.wood,
        s * (w * 0.5 + w * 0.28), h * 0.5, 0.14);
      sh.rotation.y = s * 0.12;
    }
  }
  if (opts.box) {
    add(g, box(w + 0.3, 0.24, 0.30), MAT.woodDark, 0, -0.16, 0.20);
  }
  return g;
}

/* ---------------- 门 ---------------- */
export function doorUnit(w = 1.35, h = 2.45, opts = {}) {
  const g = new THREE.Group();

  // 门洞暗部（贴在墙前）
  add(g, archGeo(w, h, 0.06), MAT.darkInset, 0, 0, 0.02).castShadow = false;

  // 门扇：横板拼成，位于暗部之前
  add(g, archGeo(w, h, 0.10), opts.mat || MAT.woodDark, 0, 0, 0.07);
  const boards = 5;
  for (let i = 0; i < boards; i++) {
    const bh = (h - 0.06) / boards;
    add(g, box(w * 0.94, bh * 0.92, 0.04), opts.boardMat || MAT.wood,
      0, 0.03 + i * bh + bh * 0.5, 0.115);
  }
  // 铁箍与门环
  add(g, box(w * 0.9, 0.07, 0.03), MAT.metal, 0, h * 0.70, 0.135);
  add(g, box(w * 0.9, 0.07, 0.03), MAT.metal, 0, h * 0.24, 0.135);
  add(g, new THREE.TorusGeometry(0.075, 0.017, 6, 12), MAT.metal, w * 0.3, h * 0.47, 0.145);

  // 石框（凸出墙面）
  const fw = 0.16;
  add(g, box(fw, h + 0.12, 0.24), MAT.stone, -w / 2 - fw / 2, (h + 0.12) / 2, 0.10);
  add(g, box(fw, h + 0.12, 0.24), MAT.stone, w / 2 + fw / 2, (h + 0.12) / 2, 0.10);
  add(g, box(w + fw * 2 + 0.34, 0.18, 0.30), MAT.stone, 0, h + 0.16, 0.10);
  add(g, box(w + 1.0, 0.16, 0.55), MAT.stone, 0, -0.08, 0.22);
  return g;
}

/* ============================================================
   风车塔
   ============================================================ */
export function buildWindmill() {
  const root = new THREE.Group();
  root.position.set(0, 7.30, 0);
  root.name = 'windmill';

  const H = 12.2;
  const towerR = (y) => {
    const t = clamp(y / H, 0, 1);
    return 3.55 - 0.58 * Math.pow(t, 0.72);
  };

  // ---- 塔身 ----
  const prof = [];
  const N = 26;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    prof.push([towerR(t * H), t * H]);
  }
  prof.push([towerR(H) * 1.02, H + 0.05]);
  prof.push([towerR(H) * 1.04, H + 0.22]);
  prof.push([0, H + 0.22]);
  const towerGeo = lathe(prof, 80, 1, 1);
  {
    // 手筑墙体的轻微起伏：沿径向 ±2.5cm 的噪声
    const pos = towerGeo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const r = Math.hypot(v.x, v.z);
      if (r < 0.2) continue;
      const n = Math.sin(v.x * 1.7 + v.y * 2.3) * Math.cos(v.z * 1.9 - v.y * 1.1);
      const k = 1 + n * 0.0085;
      pos.setXYZ(i, v.x * k, v.y + n * 0.012, v.z * k);
    }
    pos.needsUpdate = true;
    towerGeo.computeVertexNormals();
  }
  add(root, towerGeo, MAT.stuccoTower);

  // ---- 石砌基座 ----
  add(root, cyl(3.68, 3.80, 1.05, 64, 2.0), MAT.stone, 0, 0, 0);
  add(root, cyl(3.84, 3.88, 0.14, 64, 2.0), MAT.stone, 0, 1.0, 0);

  // ---- 腰线 ----
  const belt = (y, h, r, mat) => add(root, cyl(r, r, h, 64, 2.0, true), mat, 0, y, 0);
  belt(2.62, 0.20, towerR(2.62) + 0.05, MAT.stone);
  belt(6.20, 0.24, towerR(6.20) + 0.06, MAT.woodDark);
  belt(6.44, 0.08, towerR(6.44) + 0.04, MAT.woodDark);
  belt(9.62, 0.20, towerR(9.62) + 0.05, MAT.stone);
  belt(11.86, 0.34, towerR(11.86) + 0.10, MAT.stone);

  // ---- 屋顶 ----
  const roofProf = [
    [3.50, 0.00], [3.52, 0.10], [3.44, 0.42], [3.22, 0.95],
    [2.90, 1.60], [2.45, 2.30], [1.90, 3.00], [1.30, 3.60],
    [0.72, 4.05], [0.46, 4.32], [0.44, 4.52], [0.00, 4.58],
  ];
  const roofGeo = lathe(roofProf, 80, Math.PI * 2 * 3.5 / 3.2, 4.58 / 3.2);
  add(root, roofGeo, MAT.roof, 0, 12.22, 0);

  // 屋顶棱线
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const pts = [[3.44, 0.05], [3.20, 0.95], [2.75, 1.90], [2.15, 2.85], [1.25, 3.70], [0.45, 4.42]];
    for (let k = 0; k < pts.length - 1; k++) {
      const [r0, y0] = pts[k], [r1, y1] = pts[k + 1];
      const m = strutMesh(
        V3(Math.sin(a) * r0, y0, Math.cos(a) * r0),
        V3(Math.sin(a) * r1, y1, Math.cos(a) * r1),
        0.085, MAT.roof, 1.0);
      m.position.y += 12.22;
      root.add(m);
    }
  }
  // 檐口
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const m = add(root, box(0.075, 0.075, 0.55), MAT.woodDark,
      Math.sin(a) * 3.36, 12.14, Math.cos(a) * 3.36);
    m.rotation.y = a;
  }
  // 顶饰
  add(root, new THREE.SphereGeometry(0.24, 18, 12), MAT.metal, 0, 16.85, 0);
  add(root, cyl(0.035, 0.06, 0.9, 8, 1), MAT.metal, 0, 17.0, 0);
  add(root, new THREE.SphereGeometry(0.1, 12, 10), MAT.metal, 0, 17.86, 0);

  // ---- 窗 ----
  const placeOnTower = (obj, y, theta, off = 0.0) => {
    const r = towerR(y) + off;
    obj.position.set(Math.sin(theta) * r, y, Math.cos(theta) * r);
    obj.rotation.y = theta;
    root.add(obj);
    return obj;
  };
  placeOnTower(windowUnit(0.78, 1.05), 4.55, 0.0, -0.03);
  placeOnTower(windowUnit(0.70, 0.95, { shutters: true }), 7.25, -0.62, -0.03);
  placeOnTower(windowUnit(0.62, 0.85), 10.15, 0.30, -0.03);
  placeOnTower(windowUnit(0.58, 0.78), 5.65, 1.15, -0.03);

  // ---- 门 ----
  placeOnTower(doorUnit(1.5, 2.5), 1.05, 0.0, -0.02);

  // ---- 底部抹灰剥落，露出砌石 ----
  {
    let s2 = 2027;
    const rnd2 = () => (s2 = (s2 * 16807) % 2147483647) / 2147483647;
    const parts = [];
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < 7; i++) {
      const th = rnd2() * Math.PI * 2;
      const y = 1.1 + rnd2() * 1.9;
      const w = 0.45 + rnd2() * 0.55;
      const h = 0.30 + rnd2() * 0.40;
      const r = towerR(y) - 0.02;
      const plate = box(w, h, 0.07, 1.1);
      m4.makeRotationFromEuler(new THREE.Euler(0, th, (rnd2() - 0.5) * 0.3));
      plate.applyMatrix4(m4);
      plate.translate(Math.sin(th) * r, y, Math.cos(th) * r);
      parts.push(plate);
    }
    add(root, mergeGeos(parts), MAT.stone);
  }

  // ---- 阳台 ----
  const balcony = new THREE.Group();
  const arcStart = -0.72, arcLen = 1.44;
  const platGeo = new THREE.CylinderGeometry(3.78, 3.78, 0.14, 48, 1, false, arcStart, arcLen);
  const plat = new THREE.Mesh(platGeo, MAT.wood);
  plat.castShadow = plat.receiveShadow = true;
  balcony.add(plat);

  const posts = [];
  const NP = 9;
  for (let i = 0; i <= NP; i++) {
    const a = arcStart + (i / NP) * arcLen;
    const px = Math.sin(a) * 3.72, pz = Math.cos(a) * 3.72;
    add(balcony, box(0.075, 0.92, 0.075), MAT.woodDark, px, 0.52, pz);
    posts.push(V3(px, 0, pz));
  }
  for (let i = 0; i < NP; i++) {
    const a = posts[i], b = posts[i + 1];
    balcony.add(strutMesh(V3(a.x, 0.98, a.z), V3(b.x, 0.98, b.z), 0.075, MAT.woodDark, 1));
    balcony.add(strutMesh(V3(a.x, 0.55, a.z), V3(b.x, 0.55, b.z), 0.05, MAT.woodDark, 1));
    // 竖向栏板
    for (let k = 1; k < 3; k++) {
      const t = k / 3;
      const x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
      add(balcony, box(0.04, 0.42, 0.04), MAT.woodDark, x, 0.34, z);
    }
  }
  for (const a of [-0.62, 0, 0.62]) {
    balcony.add(strutMesh(
      V3(Math.sin(a) * 3.05, -0.1, Math.cos(a) * 3.05),
      V3(Math.sin(a) * 3.7, -1.05, Math.cos(a) * 3.7), 0.1, MAT.woodDark));
  }
  balcony.position.y = 9.05;
  root.add(balcony);

  // ---- 吊臂 ----
  root.add(strutMesh(V3(0, 10.55, 3.0), V3(0.35, 11.3, 5.0), 0.16, MAT.woodDark));
  root.add(strutMesh(V3(0, 9.85, 3.05), V3(0.3, 10.6, 4.6), 0.09, MAT.woodDark));
  add(root, cyl(0.012, 0.012, 1.5, 4, 1), MAT.woodDark, 0.35, 10.6, 4.95);
  add(root, new THREE.TorusGeometry(0.11, 0.025, 5, 10), MAT.metal, 0.35, 9.85, 4.95);

  return { root };
}


/* ============================================================
   小风车（替代原来的水车）
   与主塔同源但不同：更矮更粗、灰蓝石板顶、四片木格帆
   ============================================================ */
export function buildSmallWindmill() {
  const root = new THREE.Group();
  root.name = 'smallWindmill';

  const H = 5.2;
  const bodyR = (y) => {
    const t = clamp(y / H, 0, 1);
    return 1.95 - 0.35 * Math.pow(t, 0.7);
  };

  // 石基
  add(root, cyl(2.06, 2.16, 1.0, 40, 2.2), MAT.stone, 0, 0, 0);
  add(root, cyl(2.18, 2.22, 0.12, 40, 2.2), MAT.stone, 0, 0.96, 0);

  // 塔身
  const prof = [];
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    prof.push([bodyR(t * H), t * H]);
  }
  prof.push([0, H]);
  const geo = lathe(prof, 40, 1, 1);
  add(root, geo, MAT.stuccoTower);

  // 木腰线
  add(root, cyl(bodyR(2.6) + 0.05, bodyR(2.6) + 0.05, 0.16, 40, 2.0, true), MAT.woodDark, 0, 2.6, 0);
  add(root, cyl(bodyR(4.3) + 0.05, bodyR(4.3) + 0.05, 0.14, 40, 2.0, true), MAT.woodDark, 0, 4.3, 0);

  // 木质回廊
  const gal = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(2.42, 2.42, 0.12, 40), MAT.wood);
  ring.castShadow = ring.receiveShadow = true;
  gal.add(ring);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    add(gal, box(0.07, 0.72, 0.07), MAT.woodDark, Math.sin(a) * 2.34, 0.42, Math.cos(a) * 2.34);
  }
  const rail = new THREE.Mesh(new THREE.TorusGeometry(2.34, 0.045, 5, 44), MAT.woodDark);
  rail.rotation.x = Math.PI / 2;
  rail.position.y = 0.78;
  gal.add(rail);
  gal.position.y = 3.35;
  root.add(gal);

  // 灰蓝石板顶
  const roofProf = [
    [2.02, 0.00], [2.04, 0.10], [1.86, 0.55], [1.56, 1.15],
    [1.16, 1.72], [0.72, 2.16], [0.34, 2.44], [0.32, 2.60], [0, 2.66],
  ];
  const roofGeo = lathe(roofProf, 40, Math.PI * 2 * 2.0 / 2.4, 2.66 / 2.4);
  add(root, roofGeo, MAT.slate, 0, H, 0);
  add(root, new THREE.SphereGeometry(0.13, 12, 9), MAT.metal, 0, H + 2.78, 0);
  add(root, cyl(0.02, 0.035, 0.5, 6, 1), MAT.metal, 0, H + 2.86, 0);

  // 门与窗
  const d = doorUnit(0.95, 1.85);
  d.position.set(0, 0.95, bodyR(0.95) - 0.02);
  root.add(d);
  const w1 = windowUnit(0.55, 0.72);
  w1.position.set(0, 3.9, bodyR(3.9) - 0.02);
  root.add(w1);

  // ---- 风帆 ----
  const sails = new THREE.Group();
  sails.position.set(0, 4.75, bodyR(4.75) + 0.35);
  // 轴
  const shaft = add(sails, cyl(0.13, 0.13, 0.55, 10, 1), MAT.woodDark, 0, 0, -0.28);
  shaft.rotation.x = Math.PI / 2;
  add(sails, new THREE.SphereGeometry(0.17, 12, 9), MAT.woodDark, 0, 0, 0.03);

  const R = 3.35;
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Group();
    blade.rotation.z = (i * Math.PI) / 2 + 0.22;
    // 主梁
    add(blade, box(0.11, R, 0.085), MAT.woodDark, 0, R / 2, 0);
    // 横档
    for (let k = 0; k < 6; k++) {
      const y = 0.55 + k * 0.5;
      add(blade, box(0.78, 0.045, 0.045), MAT.woodDark, 0.34, y, 0.012);
    }
    // 帆布
    add(blade, box(0.66, R * 0.74, 0.016), MAT.sailCloth, 0.37, R * 0.56, 0.02);
    sails.add(blade);
  }
  root.add(sails);

  return { root, sails };
}

/* ============================================================
   磨坊主屋
   ============================================================ */
export function buildMillHouse() {
  const g = new THREE.Group();
  g.position.set(-8.3, 6.96, 1.5);
  g.rotation.y = 0.10;

  const W = 8.4, D = 5.9, H = 4.25, RISE = 2.85;

  add(g, box(W, H, D, 2.6), MAT.stone, 0, H / 2, 0);
  add(g, box(W + 0.26, 0.55, D + 0.26, 2.6), MAT.stone, 0, 0.27, 0);

  const roofGeo = gableRoof(W, D, RISE, 0.34, 1.8);
  add(g, roofGeo, MAT.roof, 0, H, 0);
  // 封檐板
  for (const s of [-1, 1]) {
    add(g, box(W + 0.7, 0.16, 0.09), MAT.woodDark, 0, H - 0.02, s * (D / 2 + 0.34));
  }
  // 檐口实体瓦当：一排半圆筒瓦
  {
    const n = Math.round((W + 0.8) / 0.26);
    for (const s of [-1, 1]) {
      for (let i = 0; i < n; i++) {
        const x = -(W + 0.8) / 2 + (i + 0.5) * ((W + 0.8) / n);
        const tile = new THREE.CylinderGeometry(0.10, 0.10, 0.30, 8, 1, false, 0, Math.PI);
        tile.rotateZ(Math.PI / 2);
        tile.rotateY(Math.PI / 2);
        const m = add(g, tile, MAT.roof, x, H - 0.02, s * (D / 2 + 0.30));
        m.rotation.x = s * 0.52;
      }
    }
  }
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0); shape.lineTo(D / 2, 0); shape.lineTo(0, RISE); shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    const m = add(g, geo, MAT.stone, s * (W / 2 - 0.02), H, 0);
    m.rotation.y = s * Math.PI / 2;
  }
  add(g, box(W + 1.1, 0.14, 0.22, 1), MAT.roof, 0, H + RISE - 0.03, 0);

  // 檐下椽
  for (const s of [-1, 1]) {
    for (let i = 0; i < 9; i++) {
      const x = -W / 2 + 0.5 + (i / 8) * (W - 1.0);
      add(g, box(0.1, 0.1, 0.7), MAT.woodDark, x, H - 0.05, s * (D / 2 + 0.35));
    }
  }

  // ---- 护角石条：贴着两面墙包住转角（合并成单网格） ----
  {
    const quoinParts = [];
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        for (let i = 0; i < 8; i++) {
          const y = 0.30 + i * 0.52;
          const hh = i % 2 === 0 ? 0.34 : 0.26;
          const a = box(0.10, hh, 0.46, 1.2);
          a.translate(sx * (W / 2 + 0.02), y, sz * (D / 2 - 0.25));
          quoinParts.push(a);
          const b = box(0.46, hh, 0.10, 1.2);
          b.translate(sx * (W / 2 - 0.25), y, sz * (D / 2 + 0.02));
          quoinParts.push(b);
        }
      }
    }
    add(g, mergeGeos(quoinParts), MAT.stone);
  }

  // ---- 屋脊瓦 ----
  {
    const n = Math.round(W / 0.26);
    const parts = [];
    for (let i = 0; i < n; i++) {
      const x = -W / 2 + (i + 0.5) * (W / n);
      const tile = new THREE.CylinderGeometry(0.11, 0.11, (W / n) * 0.92, 8, 1, false, 0, Math.PI);
      tile.rotateZ(Math.PI / 2);
      tile.translate(x, H + RISE + 0.03, 0);
      parts.push(tile);
    }
    add(g, mergeGeos(parts), MAT.roof);
  }

  // ---- 檐沟与落水管 ----
  for (const sz of [-1, 1]) {
    const gut = new THREE.CylinderGeometry(0.045, 0.045, W + 0.4, 8, 1, true, 0, Math.PI);
    gut.rotateZ(Math.PI / 2);
    const m = add(g, gut, MAT.zinc, 0, H - 0.05, sz * (D / 2 + 0.20));
    m.rotation.z = Math.PI;
  }
  add(g, cyl(0.035, 0.035, H - 0.3, 8, 1), MAT.zinc, W / 2 - 0.10, 0.1, D / 2 + 0.24);

  add(g, box(0.62, 2.7, 0.62, 2.0), MAT.stone, 2.6, H + 0.95, -1.55);
  add(g, box(0.8, 0.16, 0.8, 2.0), MAT.stone, 2.6, H + 2.3, -1.55);
  // 炊烟
  const smoke = buildSmoke(22, 3.6, 0.5);
  smoke.position.set(2.6, H + 2.5, -1.55);
  g.add(smoke);

  const d = doorUnit(1.25, 2.35);
  d.position.set(1.5, 0, D / 2 - 0.02);
  g.add(d);
  add(g, box(1.9, 0.16, 0.16), MAT.woodDark, 1.5, 2.52, D / 2 + 0.10);
  const porch = add(g, box(2.4, 0.14, 1.05, 1.6), MAT.wood, 1.5, 2.72, D / 2 + 0.38);
  porch.rotation.x = -0.16;
  for (const s of [-1, 1]) add(g, box(0.1, 2.65, 0.1), MAT.woodDark, 1.5 + s * 1.0, 1.33, D / 2 + 0.75);

  const w1 = windowUnit(0.9, 1.1, { shutters: true, box: true });
  w1.position.set(-1.7, 1.5, D / 2 - 0.02);
  g.add(w1);
  const w2 = windowUnit(0.85, 1.05, { box: true });
  w2.position.set(-1.7, 1.5, -D / 2 + 0.02);
  w2.rotation.y = Math.PI;
  g.add(w2);
  const w3 = windowUnit(0.75, 0.95);
  w3.position.set(W / 2 - 0.02, 1.55, 1.3);
  w3.rotation.y = Math.PI / 2;
  g.add(w3);

  // 门口水桶
  add(g, cyl(0.22, 0.19, 0.42, 12, 1), MAT.woodDark, 3.0, 0.21, D / 2 + 0.5);

  return { root: g };
}
