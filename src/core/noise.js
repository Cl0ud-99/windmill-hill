// 轻量确定性噪声工具（同时供 JS 地形与 Canvas 贴图使用）
export function clamp(x, a = 0, b = 1) { return x < a ? a : x > b ? b : x; }
export function mix(a, b, t) { return a + (b - a) * t; }
export function smoothstep(a, b, x) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}
export function smootherstep(a, b, x) {
  const t = clamp((x - a) / (b - a));
  return t * t * t * (t * (t * 6 - 15) + 10);
}
export function fract(x) { return x - Math.floor(x); }

export function hash2(x, y) {
  const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return h - Math.floor(h);
}
export function hash3(x, y, z) {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123;
  return h - Math.floor(h);
}

// 值噪声
export function noise2(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return mix(mix(a, b, ux), mix(c, d, ux), uy);
}

export function fbm(x, y, oct = 4, lac = 2.03, gain = 0.5) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise2(x * f, y * f);
    n += a;
    f *= lac;
    a *= gain;
  }
  return s / n;
}

export function ridged(x, y, oct = 4) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * (1 - Math.abs(noise2(x * f, y * f) * 2 - 1));
    n += a; f *= 2.07; a *= 0.5;
  }
  return s / n;
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 可平铺的 sin 叠加高度场（用于水面法线、云层细节）
export function tileNoise(x, y, freq = 3, seed = 0) {
  let v = 0;
  for (let i = 0; i < freq; i++) {
    const kx = Math.round(Math.cos(i * 2.399 + seed) * 3) + 1;
    const ky = Math.round(Math.sin(i * 2.399 + seed) * 3) + 1;
    v += Math.sin((x * kx + y * ky) * Math.PI * 2 + i * 1.7 + seed) / (i + 1);
  }
  return v * 0.5 + 0.5;
}
