import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { MAT } from './matlib.js';
import { terrainHeight } from './layout.js';
import { box, mergeGeos } from '../core/geom.js';
import { mulberry32 } from '../core/noise.js';

/* ============================================================
   牧场围栏：木桩 + 两道横杆
   所有桩和杆合并成一个几何体，只占一次 draw call
   ============================================================ */

function beamGeo(a, b, w, h) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = box(w, h, len, 1.0);
  const q = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1), dir.normalize(),
  );
  const m = new THREE.Matrix4().compose(
    a.clone().add(b).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1),
  );
  g.applyMatrix4(m);
  return g;
}

/* pts: [[x,z], ...] 闭合折线；gap: { from, to } 留出门的位置（按弧长比例 0~1） */
export function buildPasture(pts, opts = {}) {
  const group = new THREE.Group();
  group.name = 'pasture';

  const postMat = makeToon({
    map: MAT.wood.map, normalMap: MAT.wood.uniforms.uNormalMap.value, normalScale: 0.9,
    color: 0xffffff, tint: 0x8d7250, mapMix: 1,
    rim: 0.24, rimColor: 0xffe8c4, spec: 0.05, specPower: 12,
    fresnel: 0.06, noise: 0.14, noiseScale: 1.4, grime: [0.0, 1.6], roughVar: 0.8,
  });
  const railMat = makeToon({
    map: MAT.wood.map, normalMap: MAT.wood.uniforms.uNormalMap.value, normalScale: 0.9,
    color: 0xffffff, tint: 0x9a7f5c, mapMix: 1,
    rim: 0.24, rimColor: 0xffe8c4, spec: 0.05, specPower: 12,
    fresnel: 0.06, noise: 0.14, noiseScale: 1.4, grime: [0.0, 1.6], roughVar: 0.8,
  });

  // 闭合折线加密
  const path = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.max(1, Math.round(len / 2.5));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      path.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  const N = path.length;
  const rnd = mulberry32(opts.seed ?? 5);

  // 门的位置：给一个世界坐标点，附近的桩和杆都跳过
  const gapAt = opts.gapAt ?? [0, 0];
  const gapW = opts.gapW ?? 1.35;
  const nearGap = (x, z) => Math.hypot(x - gapAt[0], z - gapAt[1]) < gapW;

  const postGeos = [];
  const railGeos = [];
  const posts = [];
  const skipped = [];
  for (let i = 0; i < N; i++) {
    const [x, z] = path[i];
    const y = terrainHeight(x, z);
    const h = 1.12 + (rnd() - 0.5) * 0.10;
    skipped.push(nearGap(x, z));
    posts.push({ x, y, z, h });
    if (skipped[i]) continue;
    const g = box(0.115, h, 0.115, 1.0);
    g.translate(x, y + h / 2 - 0.06, z);
    // 轻微歪斜，像真的手钉的
    const m = new THREE.Matrix4().makeRotationFromEuler(
      new THREE.Euler((rnd() - 0.5) * 0.05, rnd() * 0.5, (rnd() - 0.5) * 0.05),
    );
    g.applyMatrix4(new THREE.Matrix4().makeTranslation(-x, -(y + h / 2 - 0.06), -z));
    g.applyMatrix4(m);
    g.applyMatrix4(new THREE.Matrix4().makeTranslation(x, y + h / 2 - 0.06, z));
    postGeos.push(g);
  }

  // 横杆：相邻桩之间两根
  for (let i = 0; i < N; i++) {
    if (skipped[i] || skipped[(i + 1) % N]) continue;
    const a = posts[i], b = posts[(i + 1) % N];
    const dx = b.x - a.x, dz = b.z - a.z;
    const dl = Math.hypot(dx, dz) || 1;
    // 稍微缩进，避免杆端戳出桩外
    const shrink = 0.05 / dl;
    for (const hh of [0.46, 0.88]) {
      const p0 = new THREE.Vector3(
        a.x + dx * shrink, a.y + hh, a.z + dz * shrink,
      );
      const p1 = new THREE.Vector3(
        b.x - dx * shrink, b.y + hh, b.z - dz * shrink,
      );
      railGeos.push(beamGeo(p0, p1, 0.075, 0.13));
    }
  }

  const postMesh = new THREE.Mesh(mergeGeos(postGeos), postMat);
  postMesh.castShadow = true; postMesh.receiveShadow = true;
  group.add(postMesh);

  const railMesh = new THREE.Mesh(mergeGeos(railGeos), railMat);
  railMesh.castShadow = true; railMesh.receiveShadow = true;
  group.add(railMesh);

  /* —— 门：五道横杆，两根加粗门柱 —— */
  // 找缺口两端最近的桩
  let gi = -1, gj = -1;
  for (let i = 0; i < N; i++) {
    if (skipped[i]) continue;
    if (skipped[(i + 1) % N]) gi = i;
    if (skipped[(i - 1 + N) % N]) gj = i;
  }
  if (gi < 0 || gj < 0) { gi = 0; gj = 1; }
  const ga = posts[gi], gb = posts[gj];
  const gy = (ga.y + gb.y) * 0.5;
  for (const p of [ga, gb]) {
    const g = box(0.16, 1.42, 0.16, 1.0);
    g.translate(p.x, p.y + 0.66, p.z);
    postGeos.push(g);
  }
  const gateGeos = [];
  for (let k = 0; k < 5; k++) {
    const hh = 0.22 + k * 0.24;
    const p0 = new THREE.Vector3(ga.x, ga.y + hh, ga.z);
    const p1 = new THREE.Vector3(gb.x, gb.y + hh, gb.z);
    gateGeos.push(beamGeo(p0, p1, 0.06, 0.105));
  }
  // 斜撑
  gateGeos.push(beamGeo(
    new THREE.Vector3(ga.x, ga.y + 0.22, ga.z),
    new THREE.Vector3(gb.x, gb.y + 1.18, gb.z), 0.055, 0.09,
  ));
  const gateMesh = new THREE.Mesh(mergeGeos(gateGeos), railMat);
  gateMesh.castShadow = true; gateMesh.receiveShadow = true;
  group.add(gateMesh);

  group.userData.gate = { x: (ga.x + gb.x) / 2, z: (ga.z + gb.z) / 2, y: gy };
  group.userData.center = {
    x: pts.reduce((s2, p) => s2 + p[0], 0) / pts.length,
    z: pts.reduce((s2, p) => s2 + p[1], 0) / pts.length,
  };
  return group;
}

/* 干草卷：横躺的圆柱，牧场里最好认的农事道具 */
export function buildHayBales(x, z, rot = 0) {
  const g = new THREE.Group();
  const y = terrainHeight(x, z);
  g.position.set(x, y, z);
  g.rotation.y = rot;

  const hayMat = makeToon({
    color: 0xa89160, rim: 0.26, rimColor: 0xecd8a0, spec: 0.02,
    fresnel: 0.03, noise: 0.26, noiseScale: 6.5, saturation: 0.86, wrap: 0.4,
  });
  const hayEndMat = makeToon({
    color: 0x94804f, rim: 0.24, rimColor: 0xe4d094, spec: 0.02,
    fresnel: 0.03, noise: 0.36, noiseScale: 9.5, saturation: 0.84, wrap: 0.4,
  });

  const geo = new THREE.CylinderGeometry(0.40, 0.40, 0.92, 18, 1);
  geo.rotateZ(Math.PI / 2);

  const mk = (dx, dz, ry, dy = 0) => {
    const b = new THREE.Mesh(geo, hayMat);
    b.position.set(dx, 0.40 + dy, dz);
    b.rotation.y = ry;
    b.castShadow = true; b.receiveShadow = true;
    g.add(b);
    // 两端切面颜色深一点，像压紧的草茬
    for (const s2 of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.CircleGeometry(0.395, 18), hayEndMat);
      cap.position.set(dx + Math.cos(ry) * s2 * 0.462, 0.40 + dy, dz - Math.sin(ry) * s2 * 0.462);
      cap.rotation.y = ry + (s2 > 0 ? Math.PI / 2 : -Math.PI / 2);
      cap.castShadow = false; cap.receiveShadow = true;
      g.add(cap);
    }
  };
  mk(0, 0, 0);
  mk(0.05, 0.86, 0.22);
  mk(0.98, 0.40, -0.35);

  return g;
}
