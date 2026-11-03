import * as THREE from 'three';

/* 统一的 UV 密度：一张贴图 = tile 米 */
export const TILE = 2.0;

export function scaleUV(geo, su, sv) {
  const uv = geo.attributes.uv;
  if (!uv) return geo;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  uv.needsUpdate = true;
  return geo;
}

/* 盒体：按面朝向烘焙正确贴图密度 */
export function box(w, h, d, tile = TILE) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  // 面顺序: +X, -X, +Y, -Y, +Z, -Z（每面 4 顶点）
  const sizes = [
    [d, h], [d, h], [w, d], [w, d], [w, h], [w, h],
  ];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = sizes[f];
    // 钳制最小 UV 跨度：小构件不会只采到贴图上的一条暗缝
    const us = Math.max(su / tile, 0.34);
    const vs = Math.max(sv / tile, 0.34);
    for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, uv.getX(k) * us, uv.getY(k) * vs);
    }
  }
  uv.needsUpdate = true;
  return g;
}

export function cyl(rTop, rBot, h, seg = 24, tile = TILE, open = false) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg, 1, open);
  const circ = Math.PI * (rTop + rBot);
  scaleUV(g, circ / tile, h / tile);
  g.translate(0, h / 2, 0);
  return g;
}

export function lathe(profile, seg = 64, su = 1, sv = 1) {
  const pts = profile.map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(pts, seg);
  scaleUV(g, su, sv);
  return g;
}

/* 三角截面屋顶（山墙） */
export function gableRoof(w, d, rise, overhang = 0.45, tile = 1.2) {
  const W = w + overhang * 2, D = d + overhang * 2;
  const hw = W / 2, hd = D / 2;
  const slope = Math.hypot(hd, rise);
  const verts = [], uvs = [], idx = [];
  const push = (x, y, z, u, v) => { verts.push(x, y, z); uvs.push(u, v); return verts.length / 3 - 1; };

  // 两个坡面
  const a = push(-hw, 0, -hd, 0, 0);
  const b = push(hw, 0, -hd, W / tile, 0);
  const c = push(hw, rise, 0, W / tile, slope / tile);
  const d0 = push(-hw, rise, 0, 0, slope / tile);

  const e = push(-hw, 0, hd, 0, 0);
  const f = push(hw, 0, hd, W / tile, 0);
  const g = push(hw, rise, 0, W / tile, slope / tile);
  const h = push(-hw, rise, 0, 0, slope / tile);

  idx.push(a, c, b, a, d0, c);       // 北坡
  idx.push(e, f, g, e, g, h);        // 南坡
  // 山墙三角（用木/石材质另建，这里给薄片）
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/* 拱形（门/窗）平面 */
export function archShape(w, h, r = 0.35) {
  const s = new THREE.Shape();
  const hw = w / 2;
  s.moveTo(-hw, 0);
  s.lineTo(-hw, h - hw * (r * 2));
  s.quadraticCurveTo(-hw, h, 0, h);
  s.quadraticCurveTo(hw, h, hw, h - hw * (r * 2));
  s.lineTo(hw, 0);
  s.closePath();
  return s;
}

export function archGeo(w, h, depth = 0.06) {
  const g = new THREE.ExtrudeGeometry(archShape(w, h), {
    depth, bevelEnabled: false, curveSegments: 12,
  });
  g.translate(0, 0, -depth / 2);
  return g;
}

/* 圆环片段（阳台/栏杆） */
export function arcRing(r, tube, thetaStart, thetaLength, seg = 32) {
  return new THREE.TorusGeometry(r, tube, 6, seg, thetaLength);
}

export function mergeGeos(list) {
  const geos = list.map(g => g.index ? g.toNonIndexed() : g);
  let count = 0;
  for (const g of geos) count += g.attributes.position.count;
  const pos = new Float32Array(count * 3);
  const nor = new Float32Array(count * 3);
  const uv = new Float32Array(count * 2);
  const hasColor = geos.every(g => g.attributes.color);
  const col = hasColor ? new Float32Array(count * 3) : null;
  let o = 0;
  for (const g of geos) {
    const p = g.attributes.position, n = g.attributes.normal, u = g.attributes.uv;
    pos.set(p.array, o * 3);
    if (n) nor.set(n.array, o * 3);
    if (u) uv.set(u.array, o * 2);
    if (hasColor) col.set(g.attributes.color.array, o * 3);
    o += p.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (hasColor) out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return out;
}

export function paintGeo(geo, color) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

/* 变形：给几何体加噪声（岩石） */
export function jitter(geo, amount = 0.2, freq = 1.2, seed = 0) {
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n1 = Math.sin(v.x * freq + seed) * Math.cos(v.y * freq * 1.3 + seed) * Math.sin(v.z * freq * 0.9 + seed * 2);
    const n2 = Math.sin(v.x * freq * 2.7 + 1.1) * Math.cos(v.z * freq * 2.2 + seed);
    const k = 1 + (n1 * 0.7 + n2 * 0.3) * amount;
    pos.setXYZ(i, v.x * k, v.y * k, v.z * k);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

export function rockGeo(seed = 0, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  jitter(g, 0.34, 1.7, seed);
  // 压扁一点
  g.scale(1, 0.72, 0.92);
  g.computeVertexNormals();
  return g;
}
