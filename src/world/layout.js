import * as THREE from 'three';
import { fbm, smoothstep, mix, clamp } from '../core/noise.js';

/* ============================================================
   世界坐标与地形定义（单位：米）
   ============================================================ */
export const WORLD = 420;           // 地形边长
export const HALF = WORLD / 2;
export const WATER_Y = -0.55;

/* ---- 河流中心线：z = f(x)，向 +z 方向弯曲 ---- */
export function riverCenterZ(x) {
  return 46.5 + 5.2 * Math.sin(x * 0.0245 + 0.5) + 2.4 * Math.sin(x * 0.0092 + 2.2);
}
export function riverHalfWidth(x) {
  return 3.1 + 0.85 * Math.sin(x * 0.043 + 1.1) + 0.3 * Math.sin(x * 0.11);
}

/* ---- 溪流（尾水渠）从水车下流向河流 ---- */
export const STREAM_PTS = [
  [4.05, 2.2], [4.15, 6.2], [4.9, 9.4], [6.0, 13.2], [7.0, 17.6],
  [7.8, 22.5], [8.7, 28.0], [9.6, 33.5], [10.4, 38.6], [11.2, 44.0],
  [12.1, 48.5], [12.7, 52.4],
];

/* ---- 土路 ---- */
export const PATH_MAIN = [
  [-1.0, 3.8], [0.6, 7.2], [2.0, 10.6], [3.4, 14.2], [5.2, 18.0],
  [7.6, 21.8], [10.2, 24.6], [12.6, 27.2], [13.6, 31.0], [14.0, 35.5],
  [14.2, 40.0], [14.4, 44.5],
];
export const PATH_GARDEN = [
  [6.2, 14.0], [8.6, 12.6], [11.6, 11.6], [14.6, 11.0], [17.4, 10.4],
];

/* ---- 石墙中心线 ---- */
export const WALL_PTS = [
  [-96, 33.0], [-76, 31.4], [-56, 29.6], [-38, 27.6], [-24, 26.4], [-11, 25.6],
  [2, 25.0], [9.2, 25.2], [12.6, 27.2], [16.4, 25.4], [25, 24.6], [38, 24.2],
  [52, 24.8], [66, 26.4], [82, 29.0], [100, 32.0],
];
export const GATE = { x: 12.6, z: 27.2 };

/* ---- 建筑台基 ---- */
const PADS = [
  { x: 0.0, z: 0.0, r: 6.4, f: 9.5, y: 7.30 },
  { x: -7.8, z: 1.4, r: 5.4, f: 6.5, y: 6.96 },
  { x: 15.6, z: 11.6, r: 7.6, f: 9.0, y: 5.02 },
];

/* ============================================================
   地形高度函数
   ============================================================ */
export function terrainHeight(x, z) {
  let h = 0;
  h += 2.55 * Math.sin(x * 0.0126 + 0.9) * Math.cos(z * 0.0108 - 0.5);
  h += 1.25 * Math.sin(x * 0.0290 - 1.2) * Math.sin(z * 0.0261 + 0.7);
  h += (fbm(x * 0.0112 + 3.1, z * 0.0112 - 2.4, 4) - 0.5) * 7.2;
  h += (fbm(x * 0.047 + 7.0, z * 0.047 + 3.0, 3) - 0.5) * 0.85;

  // 风车小丘
  const d = Math.hypot(x, z);
  h += 8.7 * Math.exp(-Math.pow(d / 26.5, 2.0));

  // 北侧背景山脊
  h += smoothstep(16, -95, z) * 11.0;
  h += smoothstep(-60, -140, z) * 16.0;

  // 河床
  const rz = riverCenterZ(x);
  const rw = riverHalfWidth(x);
  const dr = Math.abs(z - rz);
  const bed = WATER_Y - 0.95 + 0.18 * Math.sin(x * 0.07);
  let m = 1.0 - smoothstep(rw * 0.85, rw * 0.85 + 17.0, dr);
  m = m * m * (3 - 2 * m);
  h = mix(h, bed, m * 0.985);

  // 溪流浅沟
  const s = nearestOnPolyline(x, z, STREAM_PTS);
  const sm = 1.0 - smoothstep(0.55, 2.3, s.dist);
  h -= sm * 0.62;

  // 建筑台基
  for (const p of PADS) {
    const dd = Math.hypot(x - p.x, z - p.z);
    const w = 1.0 - smoothstep(p.r, p.r + p.f, dd);
    h = mix(h, p.y, w * w * (3 - 2 * w));
  }

  // 水车下的水池
  const bd = Math.hypot(x - 4.05, z - 2.9);
  h -= (1.0 - smoothstep(1.1, 3.6, bd)) * 0.9;

  return h;
}

export function nearestOnPolyline(x, z, pts) {
  let best = { dist: 1e9, t: 0, x: 0, z: 0 };
  let acc = 0, total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    total += Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
  }
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i][0], az = pts[i][1], bx = pts[i + 1][0], bz = pts[i + 1][1];
    const dx = bx - ax, dz = bz - az;
    const len2 = dx * dx + dz * dz;
    let t = ((x - ax) * dx + (z - az) * dz) / (len2 || 1);
    t = clamp(t, 0, 1);
    const px = ax + dx * t, pz = az + dz * t;
    const dist = Math.hypot(x - px, z - pz);
    if (dist < best.dist) {
      const segLen = Math.sqrt(len2);
      best = { dist, t: (acc + segLen * t) / total, x: px, z: pz };
    }
    acc += Math.sqrt(len2);
  }
  return best;
}

export function terrainNormal(x, z, eps = 0.6) {
  const hL = terrainHeight(x - eps, z), hR = terrainHeight(x + eps, z);
  const hD = terrainHeight(x, z - eps), hU = terrainHeight(x, z + eps);
  const n = new THREE.Vector3(hL - hR, 2 * eps, hD - hU);
  return n.normalize();
}

export function isUnderwater(x, z) {
  return terrainHeight(x, z) < WATER_Y - 0.02;
}

/* 折线加密 */
export function resample(pts, step = 1.2) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const n = Math.max(1, Math.round(len / step));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      out.push([mix(ax, bx, t), mix(az, bz, t)]);
    }
  }
  out.push(pts[pts.length - 1].slice());
  return out;
}

/* 世界坐标 → UV */
export function worldToUv(x, z) {
  return [(x + HALF) / WORLD, (z + HALF) / WORLD];
}
