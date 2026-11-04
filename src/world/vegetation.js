import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { mergeGeos, jitter, paintGeo } from '../core/geom.js';
import { MAT } from './matlib.js';
import {
  terrainHeight, terrainNormal, isUnderwater, nearestOnPolyline,
  PATH_MAIN, PATH_GARDEN, STREAM_PTS, riverCenterZ, riverHalfWidth, WATER_Y,
  WORLD, HALF, inRiverChannel,
} from './layout.js';
import { mulberry32, fbm, smoothstep, clamp } from '../core/noise.js';

/* ---------------- 采样 splat ---------------- */
export function makeSplatSampler(splat, size) {
  const d = splat.data;
  return (x, z) => {
    const u = clamp((x + HALF) / WORLD), v = clamp((z + HALF) / WORLD);
    const ix = Math.min(size - 1, Math.floor(u * size));
    const iy = Math.min(size - 1, Math.floor(v * size));
    const i = (iy * size + ix) * 4;
    return [d[i] / 255, d[i + 1] / 255, d[i + 2] / 255];
  };
}

/* ---------------- 草叶几何 ---------------- */
function blade(w, h, bend, segs = 3) {
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const y = h * t;
    const ww = w * (1 - t * 0.9);
    const zz = bend * t * t;
    pos.push(-ww * 0.5, y, zz, ww * 0.5, y, zz);
    uv.push(0, t, 1, t);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2, b = a + 1, c = a + 2, dd = a + 3;
    idx.push(a, c, b, b, c, dd);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export function tuftGeometry(seed = 1, blades = 5, height = 0.36, spread = 0.11) {
  const rnd = mulberry32(seed);
  const list = [];
  for (let i = 0; i < blades; i++) {
    const a = rnd() * Math.PI * 2;
    const g = blade(0.014 + rnd() * 0.012, height * (0.6 + rnd() * 0.6), (rnd() - 0.5) * 0.35, 3);
    const m = new THREE.Matrix4()
      .makeRotationY(a)
      .setPosition((rnd() - 0.5) * spread, 0, (rnd() - 0.5) * spread);
    g.applyMatrix4(m);
    list.push(g);
  }
  return mergeGeos(list);
}

/* ---------------- 草 ---------------- */
export function buildGrass(sampleSplat, opts = {}) {
  const {
    count = 60000, cx = 6, cz = 30, radius = 66,
    height = 0.36, spread = 0.11, blades = 5, seed = 3, tall = false,
    ao = null,
  } = opts;

  const rnd = mulberry32(seed);
  const geo = tuftGeometry(seed, blades, height, spread);
  const mat = makeToon({
    color: 0xffffff,
    rim: 0.10, rimColor: 0xeef8d0, spec: 0.04, specPower: 8,
    fresnel: 0.03, noise: 0.10, noiseScale: 1.4, wrap: 0.6, trans: 0.42,
    side: THREE.DoubleSide, saturation: 1.06,
    windAmp: tall ? 0.17 : 0.095, windSpeed: 1.5, bendH: height, billow: 0.012,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  let n = 0, guard = 0;
  while (n < count && guard < count * 24) {
    guard++;
    const ang = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd()) * radius;
    const x = cx + Math.cos(ang) * r;
    const z = cz + Math.sin(ang) * r;
    const h = terrainHeight(x, z);
    if (inRiverChannel(x, z, 1.2)) continue;  // 只避开真正的河道
    const sp = sampleSplat(x, z);
    if (sp[1] > 0.42) continue;               // 土路
    if (sp[2] > 0.55) continue;               // 水面/湿地
    const nrm = terrainNormal(x, z, 1.2);
    if (nrm.y < 0.62) continue;
    // 建筑附近不长草
    if (Math.hypot(x, z) < 4.3) continue;
    if (x > -13.5 && x < -3.4 && z > -2.2 && z < 5.4) continue;
    if (Math.hypot(x - 15.6, z - 11.6) < 3.0) continue;
    if (opts.skip && opts.skip(x, z)) continue;

    // 成簇：有的地方茂密高挺，有的地方被啃短
    const clump = fbm(x * 0.085 + 13, z * 0.085 - 7, 3);
    const clumpK = 0.52 + clump * 1.05;
    const gk = opts.grazeScale ? opts.grazeScale(x, z) : 1;
    const s = (0.65 + rnd() * 0.85) * clumpK * gk;
    dummy.position.set(x, h - 0.02, z);
    dummy.rotation.set((rnd() - 0.5) * 0.12, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.12);
    dummy.scale.set(s, s * (0.8 + rnd() * 0.6), s);
    dummy.updateMatrix();
    mesh.setMatrixAt(n, dummy.matrix);

    // 颜色：深绿 → 黄绿
    const t = fbm(x * 0.09, z * 0.09, 3);
    const dry = smoothstep(0.66, 0.88, fbm(x * 0.03 + 9, z * 0.03, 3));
    col.setHSL(
      0.238 + t * 0.040 - dry * 0.020,
      0.38 + rnd() * 0.18 - dry * 0.08,
      0.135 + t * 0.085 + rnd() * 0.040
    );
    if (ao) col.multiplyScalar(0.30 + 0.70 * ao(x, z));
    mesh.setColorAt(n, col);
    n++;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}


/* ---------------- 穗草（细茎 + 穗头） ---------------- */
export function buildSeedGrass(sampleSplat, count = 9000, seed = 91, ao = null, opts = {}) {
  const rnd = mulberry32(seed);

  // 单株：细茎 + 顶端穗
  const parts = [];
  const stem = new THREE.CylinderGeometry(0.004, 0.007, 0.62, 3, 1);
  stem.translate(0, 0.31, 0);
  paintGeo(stem, new THREE.Color(0.30, 0.36, 0.16));
  parts.push(stem);
  const head = new THREE.SphereGeometry(0.019, 5, 4);
  head.scale(1, 3.4, 1);
  head.translate(0, 0.66, 0);
  paintGeo(head, new THREE.Color(0.46, 0.42, 0.22));
  parts.push(head);
  // 两片叶
  for (const sgn of [-1, 1]) {
    const leaf = new THREE.PlaneGeometry(0.035, 0.22);
    leaf.rotateZ(sgn * 0.5);
    leaf.rotateY(sgn * 1.2);
    leaf.translate(sgn * 0.03, 0.14, 0);
    paintGeo(leaf, new THREE.Color(0.26, 0.34, 0.14));
    parts.push(leaf);
  }
  const geo = mergeGeos(parts);

  const mat = makeToon({
    color: 0xffffff, rim: 0.12, rimColor: 0xe6f2c0, spec: 0.05,
    fresnel: 0.03, noise: 0.10, noiseScale: 1.6, wrap: 0.6, trans: 0.45,
    side: THREE.DoubleSide, saturation: 1.02, vcolor: true,
    windAmp: 0.17, windSpeed: 1.15, bendH: 0.62, billow: 0.02,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  let n = 0, guard = 0;
  while (n < count && guard < count * 24) {
    guard++;
    const ang = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd()) * 62;
    const x = 6 + Math.cos(ang) * r;
    const z = 30 + Math.sin(ang) * r;
    const h = terrainHeight(x, z);
    if (inRiverChannel(x, z, 1.0)) continue;
    const sp = sampleSplat(x, z);
    if (sp[1] > 0.42 || sp[2] > 0.55) continue;
    const nrm = terrainNormal(x, z, 1.2);
    if (nrm.y < 0.66) continue;
    if (Math.hypot(x, z) < 4.4) continue;
    if (x > -13.5 && x < -3.4 && z > -2.2 && z < 5.4) continue;
    if (opts.skip && opts.skip(x, z)) continue;

    // 成片分布：只在部分区域长穗草
    const patch = fbm(x * 0.055 + 41, z * 0.055 - 17, 3);
    if (patch < 0.56 && rnd() > 0.12) continue;

    const s = 0.72 + rnd() * 0.62;
    dummy.position.set(x, h - 0.02, z);
    dummy.rotation.set((rnd() - 0.5) * 0.1, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.1);
    dummy.scale.set(s, s * (0.85 + rnd() * 0.5), s);
    dummy.updateMatrix();
    mesh.setMatrixAt(n, dummy.matrix);

    const tint = 0.86 + rnd() * 0.3;
    col.setRGB(tint, tint, tint);
    if (ao) col.multiplyScalar(0.35 + 0.65 * ao(x, z));
    mesh.setColorAt(n, col);
    n++;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* ---------------- 树 ---------------- */
function branchGeo(from, to, r0, r1, seg = 6) {
  const dir = new THREE.Vector3().subVectors(to, from);
  const len = dir.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  g.translate(0, len / 2, 0);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  g.applyQuaternion(q);
  g.translate(from.x, from.y, from.z);
  return g;
}

/* 树冠表面的叶簇卡片：三级尺寸，外缘大、内部小 */
function leafCards(rnd, cy, cr, count = 120) {
  const parts = [];
  const up = new THREE.Vector3(0, 0, 1);
  for (let i = 0; i < count; i++) {
    const tier = i / count;
    let sizeMul, rrMul;
    if (tier < 0.34) {          // 大：轮廓外缘
      sizeMul = 0.30 + rnd() * 0.14;
      rrMul = 0.84 + rnd() * 0.20;
    } else if (tier < 0.70) {   // 中
      sizeMul = 0.18 + rnd() * 0.10;
      rrMul = 0.70 + rnd() * 0.22;
    } else {                    // 小：内部
      sizeMul = 0.10 + rnd() * 0.07;
      rrMul = 0.52 + rnd() * 0.24;
    }

    const u = rnd() * 2 - 1;
    const th = rnd() * Math.PI * 2;
    const sxy = Math.sqrt(Math.max(0, 1 - u * u));
    const nx = sxy * Math.cos(th), ny = u, nz = sxy * Math.sin(th);

    const rr = cr * rrMul;
    const px = nx * rr;
    const py = cy + ny * cr * 0.80;
    const pz = nz * rr;
    const size = cr * sizeMul;

    const g = new THREE.PlaneGeometry(size, size);
    const q = new THREE.Quaternion().setFromUnitVectors(
      up, new THREE.Vector3(nx, ny * 0.7 + 0.35, nz).normalize()
    );
    const roll = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(nx, ny, nz).normalize(), rnd() * Math.PI * 2
    );
    g.applyQuaternion(roll);
    g.applyQuaternion(q);
    g.translate(px, py, pz);

    // 顶点色：随高度提亮，外缘大卡略暗以增加层次
    const t = clamp((py - (cy - cr * 0.8)) / (cr * 1.85));
    const v = (0.38 + t * 0.76) * (sizeMul > 0.28 ? 0.90 : 1.0);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) {
      col[k * 3] = v * (0.94 + rnd() * 0.12);
      col[k * 3 + 1] = v;
      col[k * 3 + 2] = v * 0.88;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    parts.push(g);
  }
  return mergeGeos(parts);
}

export function treeGeometry(seed = 1, type = 0, lod = 0) {
  const rnd = mulberry32(seed);
  const cfg = [
    { th: 4.8, tr: 0.36, cy: 6.4, cr: 4.0, lobes: 10 },   // 阔叶大树
    { th: 6.6, tr: 0.30, cy: 7.8, cr: 3.0, lobes: 8 },    // 高瘦
    { th: 2.5, tr: 0.19, cy: 3.4, cr: 2.1, lobes: 7 },    // 小树
    { th: 1.7, tr: 0.13, cy: 2.0, cr: 1.5, lobes: 6 },    // 灌木
  ][type];
  const { th, tr, cy, cr, lobes } = cfg;

  /* ---- LOD2：远景剪影，杆和冠合并成一个几何体，约 30 面 ----
     200m 外一棵树只有十几像素，这个精度足够 */
  if (lod >= 2) {
    const trunk = new THREE.CylinderGeometry(tr * 0.9, tr * 1.15, th * 0.85, 4, 1);
    trunk.translate(0, th * 0.42, 0);
    paintGeo(trunk, new THREE.Color(0.26, 0.20, 0.14));
    const crown = new THREE.IcosahedronGeometry(cr * 0.92, 0);
    crown.scale(1, 0.88, 1);
    crown.translate(0, cy, 0);
    paintGeo(crown, new THREE.Color(0.42, 0.53, 0.33));
    return { trunk: mergeGeos([trunk, crown]), canopy: null, cards: null, height: cy + cr };
  }

  /* ---- LOD1：一根杆 + 五团圆，不生成叶片卡片，约 500 面 ---- */
  if (lod >= 1) {
    const trunk = mergeGeos([branchGeo(
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, th * 0.78, 0), tr, tr * 0.55, 5,
    )]);
    const blobs = [];
    const cD = new THREE.Color(0.40, 0.50, 0.32);
    const cM = new THREE.Color(0.74, 0.83, 0.58);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + rnd();
      const rr = cr * (0.16 + rnd() * 0.34);
      const g = new THREE.SphereGeometry(cr * (0.56 + rnd() * 0.16), 8, 6);
      g.scale(1, 0.86, 1);
      g.translate(Math.cos(a) * rr, cy + (rnd() - 0.5) * cr * 0.28, Math.sin(a) * rr);
      paintGeo(g, i % 2 ? cM : cD);
      blobs.push(g);
    }
    return { trunk, canopy: mergeGeos(blobs), cards: null, height: cy + cr };
  }

  /* ---- 主干（带弯曲） ---- */
  const trunkParts = [];
  const segs = 5;
  let px = 0, pz = 0;
  for (let i = 0; i < segs; i++) {
    const t0 = i / segs, t1 = (i + 1) / segs;
    const y0 = th * t0, y1 = th * t1;
    const bx = Math.sin(t0 * 2.2 + seed) * th * 0.055;
    const bz = Math.cos(t0 * 1.7 + seed) * th * 0.045;
    trunkParts.push(branchGeo(
      new THREE.Vector3(px, y0, pz),
      new THREE.Vector3(bx, y1, bz),
      tr * (1 - t0 * 0.5), tr * (1 - t1 * 0.55), 8
    ));
    px = bx; pz = bz;
  }
  const pointOnSpine = (y) => {
    const t = clamp(y / th, 0, 1);
    return new THREE.Vector3(
      Math.sin(t * 2.2 + seed) * th * 0.055,
      y,
      Math.cos(t * 1.7 + seed) * th * 0.045
    );
  };

  /* ---- 主枝 + 二级枝（伸进树冠，形成可见骨架） ---- */
  const nb = type === 3 ? 4 : (type === 2 ? 4 : 5);
  for (let i = 0; i < nb; i++) {
    const a = (i / nb) * Math.PI * 2 + rnd() * 0.8;
    const y0 = th * (0.42 + rnd() * 0.36);
    const base = pointOnSpine(y0);
    const len = cr * (0.62 + rnd() * 0.34);
    const tip = new THREE.Vector3(
      base.x + Math.cos(a) * len,
      y0 + len * (0.55 + rnd() * 0.35),
      base.z + Math.sin(a) * len
    );
    trunkParts.push(branchGeo(base, tip, tr * 0.40, tr * 0.11, 6));

    for (let k = 0; k < 2; k++) {
      const mid = base.clone().lerp(tip, 0.55 + rnd() * 0.2);
      const a2 = a + (rnd() - 0.5) * 1.6;
      const l2 = len * (0.32 + rnd() * 0.22);
      const tip2 = new THREE.Vector3(
        mid.x + Math.cos(a2) * l2,
        mid.y + l2 * (0.6 + rnd() * 0.4),
        mid.z + Math.sin(a2) * l2
      );
      trunkParts.push(branchGeo(mid, tip2, tr * 0.16, tr * 0.055, 5));
    }
  }
  const trunk = mergeGeos(trunkParts);

  /* ---- 三层树冠：下暗、中调、顶亮 ---- */
  const blobs = [];
  const addBlob = (x, y, z, r, squash, tint) => {
    const g = new THREE.SphereGeometry(r, 11, 9);
    jitter(g, 0.20, 1.9, seed + x * 3.1 + z);
    g.scale(1, squash, 1);
    g.translate(x, y, z);
    paintGeo(g, tint);
    blobs.push(g);
  };
  const cDark = new THREE.Color(0.40, 0.50, 0.32);
  const cMid = new THREE.Color(0.78, 0.86, 0.60);
  const cLight = new THREE.Color(1.16, 1.10, 0.86);

  for (let i = 0; i < lobes + 4; i++) {
    const a = (i / lobes) * Math.PI * 2 + rnd() * 0.6;
    const rr = cr * (0.44 + rnd() * 0.28);
    addBlob(Math.cos(a) * rr, cy - cr * (0.10 + rnd() * 0.22), Math.sin(a) * rr,
      cr * (0.34 + rnd() * 0.16), 0.78, cDark);
  }
  for (let i = 0; i < lobes + 3; i++) {
    const a = (i / lobes) * Math.PI * 2 + 0.7 + rnd() * 0.6;
    const rr = cr * (0.26 + rnd() * 0.28);
    addBlob(Math.cos(a) * rr, cy + cr * (0.10 + rnd() * 0.24), Math.sin(a) * rr,
      cr * (0.30 + rnd() * 0.15), 0.88, cMid);
  }
  for (let i = 0; i < 4; i++) {
    const a = rnd() * Math.PI * 2;
    addBlob(Math.cos(a) * cr * 0.26, cy + cr * (0.44 + rnd() * 0.22), Math.sin(a) * cr * 0.26,
      cr * (0.28 + rnd() * 0.14), 0.92, cLight);
  }
  const canopy = mergeGeos(blobs);

  // 叠加高度渐变，让顶部更亮
  const pos = canopy.attributes.position;
  const colAttr = canopy.attributes.color;
  const yMin = cy - cr * 0.80, yMax = cy + cr * 1.05;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    let t = clamp((y - yMin) / (yMax - yMin));
    t = t * t * (3 - 2 * t);
    const k = 0.70 + t * 0.56;
    colAttr.setXYZ(i, colAttr.getX(i) * k, colAttr.getY(i) * k, colAttr.getZ(i) * k);
  }
  colAttr.needsUpdate = true;

  const cards = leafCards(rnd, cy, cr, type === 3 ? 40 : 90);

  return { trunk, canopy, cards, height: cy + cr };
}

export function buildTrees(sampleSplat, placements) {
  const group = new THREE.Group();
  group.name = 'trees';
  const byType = new Map();

  for (const p of placements) {
    // key = 类型 + lod * 10
    const key = (p.type ?? 0) + (p.lod ?? 0) * 10;
    if (!byType.has(key)) byType.set(key, []);
    byType.get(key).push(p);
  }

  const dummy = new THREE.Object3D();
  const col = new THREE.Color();

  for (const [key, list] of byType) {
    const type = key % 10;
    const lod = Math.floor(key / 10);
    const geo = treeGeometry(11 + type * 7, type, lod);
    // LOD2 把树干和树冠合成了一个几何体，用树叶材质渲染
    const trunkMesh = geo.canopy
      ? new THREE.InstancedMesh(geo.trunk, MAT.bark, list.length)
      : new THREE.InstancedMesh(geo.trunk, MAT.leaf, list.length);
    const canopyMesh = geo.canopy
      ? new THREE.InstancedMesh(geo.canopy, MAT.leaf, list.length)
      : null;
    const cardMesh = geo.cards
      ? new THREE.InstancedMesh(geo.cards, MAT.leafCard, list.length)
      : null;
    trunkMesh.castShadow = trunkMesh.receiveShadow = true;
    trunkMesh.frustumCulled = false;
    if (canopyMesh) {
      canopyMesh.castShadow = canopyMesh.receiveShadow = true;
      canopyMesh.frustumCulled = false;
    }
    if (cardMesh) {
      cardMesh.castShadow = false;
      cardMesh.receiveShadow = true;
      cardMesh.frustumCulled = false;
    }

    list.forEach((p, i) => {
      const y = terrainHeight(p.x, p.z);
      const s = p.scale ?? 1;
      dummy.position.set(p.x, y - 0.15, p.z);
      dummy.rotation.set(0, p.rot ?? Math.random() * 6.28, 0);
      dummy.scale.set(s, s * (p.stretch ?? 1), s);
      dummy.updateMatrix();
      trunkMesh.setMatrixAt(i, dummy.matrix);
      col.setHSL(0.19 + Math.random() * 0.085, 0.30 + Math.random() * 0.26, 0.30 + Math.random() * 0.30);
      if (canopyMesh) {
        canopyMesh.setMatrixAt(i, dummy.matrix);
        canopyMesh.setColorAt(i, col);
      } else {
        trunkMesh.setColorAt(i, col);
      }
      if (cardMesh) {
        cardMesh.setMatrixAt(i, dummy.matrix);
        cardMesh.setColorAt(i, col);
      }
    });
    trunkMesh.instanceMatrix.needsUpdate = true;
    if (trunkMesh.instanceColor) trunkMesh.instanceColor.needsUpdate = true;
    if (canopyMesh) {
      canopyMesh.instanceMatrix.needsUpdate = true;
      if (canopyMesh.instanceColor) canopyMesh.instanceColor.needsUpdate = true;
    }
    if (cardMesh) {
      cardMesh.instanceMatrix.needsUpdate = true;
      if (cardMesh.instanceColor) cardMesh.instanceColor.needsUpdate = true;
    }
    group.add(trunkMesh);
    if (canopyMesh) group.add(canopyMesh);
    if (cardMesh) group.add(cardMesh);
  }
  return group;
}

/* ---------------- 河边芦苇 ---------------- */
export function buildReeds(count = 5200, seed = 55, ao = null) {
  const rnd = mulberry32(seed);
  const geo = tuftGeometry(seed, 7, 1.15, 0.15);
  const mat = makeToon({
    color: 0xffffff, rim: 0.12, rimColor: 0xe6f4c4, spec: 0.05,
    fresnel: 0.03, noise: 0.10, noiseScale: 1.6, wrap: 0.6, trans: 0.45,
    side: THREE.DoubleSide, saturation: 1.04,
    windAmp: 0.16, windSpeed: 1.1, bendH: 1.15, billow: 0.02,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  let n = 0, guard = 0;
  while (n < count && guard < count * 20) {
    guard++;
    const x = -130 + rnd() * 260;
    const zc = riverCenterZ(x);
    const hw = riverHalfWidth(x);
    const side = rnd() < 0.5 ? -1 : 1;
    const off = hw * (0.88 + rnd() * 0.75);
    const z = zc + side * off;
    const h = terrainHeight(x, z);
    if (h < WATER_Y - 0.25) continue;
    const s = 0.7 + rnd() * 0.8;
    dummy.position.set(x, h - 0.05, z);
    dummy.rotation.set((rnd() - 0.5) * 0.15, rnd() * 6.28, (rnd() - 0.5) * 0.15);
    dummy.scale.set(s, s * (0.8 + rnd() * 0.7), s);
    dummy.updateMatrix();
    mesh.setMatrixAt(n, dummy.matrix);
    col.setHSL(0.19 + rnd() * 0.05, 0.44 + rnd() * 0.16, 0.18 + rnd() * 0.10);
    if (ao) col.multiplyScalar(0.45 + 0.55 * ao(x, z));
    mesh.setColorAt(n, col);
    n++;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* ---------------- 野花 ---------------- */
export function buildWildflowers(sampleSplat, count = 14000, seed = 21, ao = null, opts = {}) {
  const rnd = mulberry32(seed);
  const parts = [];
  // 花头：小多面体，任何角度都读作一点颜色
  const head = new THREE.SphereGeometry(0.017, 5, 4);
  head.translate(0, 0.235, 0);
  paintGeo(head, new THREE.Color(1, 1, 1));
  parts.push(head);
  const stem = new THREE.CylinderGeometry(0.004, 0.007, 0.22, 3, 1);
  stem.translate(0, 0.11, 0);
  paintGeo(stem, new THREE.Color(0.30, 0.42, 0.18));
  parts.push(stem);
  const geo = mergeGeos(parts);
  const mat = makeToon({
    color: 0xffffff, rim: 0.20, rimColor: 0xffffff, spec: 0.05,
    noise: 0.05, wrap: 0.7, trans: 0.4, side: THREE.DoubleSide,
    windAmp: 0.05, windSpeed: 1.6, bendH: 0.25, saturation: 1.05, vcolor: true,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  const palette = [
    [0.13, 0.30, 0.90], // 白
    [0.14, 0.72, 0.88], // 黄
    [0.74, 0.42, 0.80], // 淡紫
    [0.02, 0.46, 0.88], // 粉白
    [0.13, 0.18, 0.86], // 近白
  ];
  let n = 0, guard = 0;
  while (n < count && guard < count * 20) {
    guard++;
    const ang = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd()) * 62;
    const x = 6 + Math.cos(ang) * r;
    const z = 30 + Math.sin(ang) * r;
    const h = terrainHeight(x, z);
    if (inRiverChannel(x, z, 1.0)) continue;
    const sp = sampleSplat(x, z);
    if (sp[1] > 0.5 || sp[2] > 0.5) continue;
    if (opts.skip && opts.skip(x, z)) continue;
    // 成片分布
    const patch = fbm(x * 0.06 + 21, z * 0.06 + 5, 3);
    if (patch < 0.52 && rnd() > 0.15) continue;

    dummy.position.set(x, h, z);
    dummy.rotation.set(0, rnd() * 6.28, 0);
    const s = 0.7 + rnd() * 0.8;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(n, dummy.matrix);
    const c = palette[Math.floor(rnd() * palette.length)];
    col.setHSL(c[0], c[1], c[2]);
    if (ao) col.multiplyScalar(0.45 + 0.55 * ao(x, z));
    mesh.setColorAt(n, col);
    n++;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* ---------------- 绣球花丛 ---------------- */
export function hydrangeaGeometry(seed = 5, radius = 0.66, blobs = 105) {
  const rnd = mulberry32(seed);
  const parts = [];

  // 叶丛
  const foliage = new THREE.SphereGeometry(radius, 14, 9);
  jitter(foliage, 0.24, 3.2, seed);
  foliage.scale(1.22, 0.82, 1.22);
  foliage.translate(0, radius * 0.62, 0);
  paintGeo(foliage, new THREE.Color(0.26, 0.40, 0.16));
  parts.push(foliage);

  // 花球：贴在叶丛球面上（叶丛被缩放成 1.22 / 0.82 / 1.22）
  for (let i = 0; i < blobs; i++) {
    const a = rnd() * Math.PI * 2;
    const b = Math.acos(1 - rnd() * 1.12);
    const k = 0.94 + rnd() * 0.14;
    const x = Math.sin(b) * Math.cos(a) * radius * 1.22 * k;
    const z = Math.sin(b) * Math.sin(a) * radius * 1.22 * k;
    const y = radius * 0.62 + Math.cos(b) * radius * 0.82 * k;
    const g = new THREE.SphereGeometry(0.048 + rnd() * 0.034, 6, 5);
    jitter(g, 0.2, 3.4, i + seed);
    g.translate(x, y, z);
    const tint = 0.86 + rnd() * 0.24;
    paintGeo(g, new THREE.Color(0.44 * tint, 0.56 * tint, 0.92 * tint));
    parts.push(g);
  }
  // 外伸叶片
  for (let i = 0; i < 7; i++) {
    const a = rnd() * Math.PI * 2;
    const g = new THREE.SphereGeometry(0.17 + rnd() * 0.09, 6, 4);
    g.scale(1.5, 0.28, 1);
    g.rotateY(a);
    g.rotateZ(0.3);
    g.translate(Math.cos(a) * radius * 1.05, 0.14 + rnd() * 0.3, Math.sin(a) * radius * 1.05);
    paintGeo(g, new THREE.Color(0.30, 0.45, 0.18));
    parts.push(g);
  }
  return mergeGeos(parts);
}

export function buildHydrangeas(placements) {
  const group = new THREE.Group();
  const geo = hydrangeaGeometry(5);
  const mesh = new THREE.InstancedMesh(geo, MAT.flowerBlue, placements.length);
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  placements.forEach((p, i) => {
    const y = terrainHeight(p.x, p.z);
    dummy.position.set(p.x, y - 0.05, p.z);
    dummy.rotation.set(0, p.rot ?? Math.random() * 6.28, 0);
    const s = p.scale ?? 1;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    col.setHSL(p.hue ?? 0.62, 0.34, 0.72);
    mesh.setColorAt(i, col);
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  group.add(mesh);
  return group;
}
