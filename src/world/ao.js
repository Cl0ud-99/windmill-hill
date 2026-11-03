import * as THREE from 'three';
import { WALL_PTS } from './layout.js';

/* ============================================================
   烘焙环境光遮蔽
   静态场景的遮挡关系在构建时已知，直接烘进一张贴图：
   地表乘这张图，草的实例色也乘一次 —— 运行时零开销。

   贴图只覆盖核心区域（约 220m 见方），换取足够的像素密度：
   2048 / 220 ≈ 9.3 px/m，1 米的接触阴影有 9 个像素。
   ============================================================ */
export const AO_REGION = { cx: 2, cz: 34, size: 220 };

export function buildAOMap({ trees = [], props = [], size = 2048 } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.fillRect(0, 0, size, size);

  const R = AO_REGION;
  const S = size / R.size;
  const X = (x) => (x - (R.cx - R.size / 2)) * S;
  const Z = (z) => (z - (R.cz - R.size / 2)) * S;

  const blob = (x, z, r, alpha) => {
    const px = X(x), pz = Z(z), pr = Math.max(1.5, r * S);
    if (px < -pr || pz < -pr || px > size + pr || pz > size + pr) return;
    const grd = g.createRadialGradient(px, pz, 0, px, pz, pr);
    grd.addColorStop(0, `rgba(0,0,0,${alpha})`);
    grd.addColorStop(0.55, `rgba(0,0,0,${alpha * 0.92})`);
    grd.addColorStop(0.80, `rgba(0,0,0,${alpha * 0.42})`);
    grd.addColorStop(0.93, `rgba(0,0,0,${alpha * 0.12})`);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(px, pz, pr, 0, 7);
    g.fill();
  };

  // 风车塔：塔基 r≈3.6，遮蔽环落在 3.6–5m
  blob(0, 0, 5.0, 0.86);
  // 主屋
  for (let i = -1; i <= 1; i++) {
    blob(-8.3 + i * 2.5, 1.5, 4.4, 0.70);
  }
  // 石墙
  for (let i = 0; i < WALL_PTS.length - 1; i++) {
    const [ax, az] = WALL_PTS[i], [bx, bz] = WALL_PTS[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const n = Math.max(1, Math.round(len / 0.8));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      blob(ax + (bx - ax) * t, az + (bz - az) * t, 1.5, 0.30);
    }
  }
  // 树根
  for (const t of trees) {
    blob(t.x, t.z, 1.3 * (t.scale ?? 1), 0.55);
  }
  // 道具
  for (const p of props) {
    blob(p.x, p.z, p.r ?? 0.8, p.a ?? 0.55);
  }

  const data = g.getImageData(0, 0, size, size).data;
  const sample = (x, z) => {
    const ix = Math.floor((x - (R.cx - R.size / 2)) * S);
    const iy = Math.floor((z - (R.cz - R.size / 2)) * S);
    if (ix < 0 || iy < 0 || ix >= size || iy >= size) return 1;
    return data[(iy * size + ix) * 4] / 255;
  };

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.NoColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.flipY = false;
  tex.needsUpdate = true;

  return { texture: tex, sample, canvas: c };
}
