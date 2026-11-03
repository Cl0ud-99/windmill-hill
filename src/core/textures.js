import * as THREE from 'three';
import { fbm, noise2, hash2, clamp, mix, smoothstep, mulberry32 } from './noise.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}
function tex(c, { srgb = true, repeat = [1, 1] } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

/* ---------------- 灰泥 / 石塔墙体 ---------------- */
export function stuccoTexture(size = 1024) {
  const c = canvas(size, size), g = c.getContext('2d');
  const img = g.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const n = fbm(u * 7, v * 7, 5);
      const n2 = fbm(u * 34 + 11, v * 34 + 3, 3);
      const blotch = fbm(u * 2.4 + 30, v * 2.4 + 7, 3);
      // 暖奶油色石灰墙
      let r = 233, gr = 221, b = 194;
      const dark = (n - 0.5) * 26 + (n2 - 0.5) * 12;
      r += dark; gr += dark * 0.97; b += dark * 0.86;
      const stain = smoothstep(0.48, 0.80, blotch);
      r -= stain * 14; gr -= stain * 10; b -= stain * 14;
      const grain = (hash2(x * 1.7, y * 1.7) - 0.5) * 9;
      r += grain; gr += grain; b += grain;
      const i = (y * size + x) * 4;
      d[i] = clamp(r, 0, 255); d[i + 1] = clamp(gr, 0, 255); d[i + 2] = clamp(b, 0, 255); d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);

  // 淡淡的雨痕
  g.globalAlpha = 0.05;
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * size;
    const w = 1 + Math.random() * 4;
    const y0 = Math.random() * size * 0.6;
    const grd = g.createLinearGradient(0, y0, 0, y0 + size * (0.2 + Math.random() * 0.5));
    grd.addColorStop(0, 'rgba(120,118,96,0)');
    grd.addColorStop(1, 'rgba(110,108,88,0.9)');
    g.fillStyle = grd;
    g.fillRect(x, y0, w, size);
  }
  // 剥落斑点
  g.globalAlpha = 1;
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    const r = 2 + Math.random() * 11;
    g.globalAlpha = 0.03 + Math.random() * 0.06;
    g.fillStyle = Math.random() > 0.5 ? '#a89c80' : '#fff6e2';
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  // 细裂纹
  g.globalAlpha = 0.14;
  g.strokeStyle = '#9c9276'; g.lineWidth = 1.0;
  for (let i = 0; i < 6; i++) {
    let x = Math.random() * size, y = Math.random() * size * 0.7;
    g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 12; k++) {
      x += (Math.random() - 0.5) * 12; y += Math.random() * 18;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  g.globalAlpha = 1;
  return tex(c, { repeat: [1, 1] });
}


/* ---------------- 风车塔专用（不平铺，整张覆盖塔身） ---------------- */
export function stuccoTowerTexture(w = 2048, h = 1024) {
  const c = canvas(w, h), g = c.getContext('2d');
  const img = g.createImageData(w, h), d = img.data;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const u = x / w, v = y / h;
      const n = fbm(u * 26, v * 13, 5);
      const n2 = fbm(u * 90 + 11, v * 45 + 3, 3);
      const blotch = fbm(u * 7 + 30, v * 3.5 + 7, 3);
      let r = 219, gr = 206, b = 178;
      const dark = (n - 0.5) * 38 + (n2 - 0.5) * 16;
      r += dark; gr += dark * 0.97; b += dark * 0.86;
      const stain = smoothstep(0.46, 0.82, blotch);
      r -= stain * 34; gr -= stain * 26; b -= stain * 32;
      const grain = (hash2(x * 1.7, y * 1.7) - 0.5) * 9;
      r += grain; gr += grain; b += grain;
      const i = (y * w + x) * 4;
      d[i] = clamp(r, 0, 255); d[i + 1] = clamp(gr, 0, 255); d[i + 2] = clamp(b, 0, 255); d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);

  const V = (yWorld) => (yWorld / 12.2) * 26 / 29 * h;

  // 腰线下的积灰带
  for (const yWorld of [2.55, 6.30, 9.45]) {
    const y0 = V(yWorld) - 3, hh = 16 + Math.random() * 8;
    const grd = g.createLinearGradient(0, y0, 0, y0 + hh);
    grd.addColorStop(0, 'rgba(92,86,68,0.55)');
    grd.addColorStop(1, 'rgba(96,92,74,0)');
    g.fillStyle = grd;
    g.fillRect(0, y0, w, hh);
  }

  // 顶部雨水冲刷痕
  g.globalAlpha = 0.10;
  for (let i = 0; i < 130; i++) {
    const x = Math.random() * w;
    const y0 = Math.random() * h * 0.18;
    const len = h * (0.12 + Math.random() * 0.42);
    const grd = g.createLinearGradient(0, y0, 0, y0 + len);
    grd.addColorStop(0, 'rgba(104,100,82,0.9)');
    grd.addColorStop(1, 'rgba(104,100,82,0)');
    g.fillStyle = grd;
    g.fillRect(x, y0, 1 + Math.random() * 4, len);
  }
  g.globalAlpha = 1;

  // 底部青苔
  const mg = g.createLinearGradient(0, h * 0.80, 0, h);
  mg.addColorStop(0, 'rgba(96,120,58,0)');
  mg.addColorStop(1, 'rgba(88,112,52,0.55)');
  g.fillStyle = mg;
  g.fillRect(0, h * 0.80, w, h * 0.20);
  for (let i = 0; i < 420; i++) {
    const x = Math.random() * w, y = h * (0.84 + Math.random() * 0.16);
    g.globalAlpha = 0.04 + Math.random() * 0.12;
    g.fillStyle = Math.random() > 0.4 ? '#7f9a54' : '#5d7a42';
    g.beginPath(); g.arc(x, y, 2 + Math.random() * 14, 0, 7); g.fill();
  }
  g.globalAlpha = 1;

  // 掉灰露出的石块
  const rnd = mulberry32(88);
  for (let i = 0; i < 9; i++) {
    const cx = rnd() * w;
    const cy = h * (0.86 + rnd() * 0.12);
    const rr = 26 + rnd() * 46;
    g.save();
    g.beginPath();
    const pts = 9;
    for (let k = 0; k <= pts; k++) {
      const a = (k / pts) * Math.PI * 2;
      const rad = rr * (0.6 + rnd() * 0.55);
      const px = cx + Math.cos(a) * rad * 1.3;
      const py = cy + Math.sin(a) * rad * 0.8;
      k ? g.lineTo(px, py) : g.moveTo(px, py);
    }
    g.closePath();
    g.clip();
    g.fillStyle = '#9d9480';
    g.fillRect(cx - rr * 2, cy - rr, rr * 4, rr * 2);
    for (let k = 0; k < 14; k++) {
      g.fillStyle = `rgba(${140 + rnd() * 50},${132 + rnd() * 46},${112 + rnd() * 40},0.9)`;
      g.beginPath();
      g.ellipse(cx + (rnd() - 0.5) * rr * 2, cy + (rnd() - 0.5) * rr * 1.2, 8 + rnd() * 14, 5 + rnd() * 9, rnd() * 3, 0, 7);
      g.fill();
    }
    g.restore();
  }

  // 裂纹
  g.globalAlpha = 0.16;
  g.strokeStyle = '#8f866c'; g.lineWidth = 1.4;
  for (let i = 0; i < 10; i++) {
    let x = Math.random() * w, y = Math.random() * h * 0.6;
    g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 18; k++) {
      x += (Math.random() - 0.5) * 10; y += Math.random() * 26;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  g.globalAlpha = 1;

  return tex(c, { repeat: [1, 1] });
}

/* ---------------- 石块墙（小屋） ---------------- */
export function stoneTexture(size = 1024, palette = 'warm') {
  const c = canvas(size, size), g = c.getContext('2d');
  g.fillStyle = palette === 'warm' ? '#7d7462' : '#6c6f66';
  g.fillRect(0, 0, size, size);
  // 噪声底
  const img = g.getImageData(0, 0, size, size), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  g.putImageData(img, 0, 0);

  const rnd = mulberry32(7);
  const rows = 12;
  const rowH = size / rows;
  for (let r = 0; r < rows; r++) {
    let x = -rowH * 0.6 * rnd();
    while (x < size) {
      const w = rowH * (0.75 + rnd() * 1.6);
      const h = rowH * (0.7 + rnd() * 0.22);
      const y = r * rowH + rowH * 0.10 + rnd() * rowH * 0.06;
      const base = 128 + rnd() * 78;
      const warm = palette === 'warm' ? 1 : 0.55;
      const rr = base + 16 * warm, gg = base + 3, bb = base - 18 * warm + 4;
      // 石块本体
      g.beginPath();
      const rad = 7 + rnd() * 5;
      g.moveTo(x + rad, y);
      g.lineTo(x + w - rad, y);
      g.quadraticCurveTo(x + w, y, x + w, y + rad);
      g.lineTo(x + w, y + h - rad);
      g.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
      g.lineTo(x + rad, y + h);
      g.quadraticCurveTo(x, y + h, x, y + h - rad);
      g.lineTo(x, y + rad);
      g.quadraticCurveTo(x, y, x + rad, y);
      g.closePath();
      const grd = g.createLinearGradient(x, y, x, y + h);
      grd.addColorStop(0, `rgb(${rr + 14},${gg + 14},${bb + 12})`);
      grd.addColorStop(0.55, `rgb(${rr},${gg},${bb})`);
      grd.addColorStop(1, `rgb(${rr - 34},${gg - 34},${bb - 30})`);
      g.fillStyle = grd; g.fill();
      // 斑驳
      g.save(); g.clip();
      for (let k = 0; k < 16; k++) {
        g.globalAlpha = 0.05 + rnd() * 0.10;
        g.fillStyle = rnd() > 0.5 ? '#ffffff' : '#3a3a30';
        const bx = x + rnd() * w, by = y + rnd() * h;
        g.beginPath(); g.arc(bx, by, 2 + rnd() * 9, 0, 7); g.fill();
      }
      g.restore(); g.globalAlpha = 1;
      x += w + 4 + rnd() * 5;
    }
  }
  // 苔痕
  for (let i = 0; i < 90; i++) {
    g.globalAlpha = 0.05 + Math.random() * 0.12;
    g.fillStyle = Math.random() > 0.5 ? '#6d8248' : '#87955e';
    const x = Math.random() * size, y = Math.random() * size;
    g.beginPath(); g.arc(x, y, 6 + Math.random() * 22, 0, 7); g.fill();
  }
  g.globalAlpha = 1;
  return tex(c);
}

/* ---------------- 红瓦屋顶 ---------------- */
export function roofTileTexture(size = 1024) {
  const c = canvas(size, size), g = c.getContext('2d');
  g.fillStyle = '#8e3f2a'; g.fillRect(0, 0, size, size);
  const rows = 10, cols = 10;
  const rh = size / rows, cw = size / cols;
  const rnd = mulberry32(31);
  for (let r = 0; r < rows; r++) {
    for (let k = 0; k < cols; k++) {
      const x = k * cw + (r % 2 ? cw * 0.5 : 0);
      const y = r * rh;
      const tone = 0.82 + rnd() * 0.4;
      const rr = clamp(158 * tone, 0, 255), gg = clamp(82 * tone, 0, 255), bb = clamp(64 * tone, 0, 255);
      // 半圆筒瓦
      const grd = g.createLinearGradient(x, 0, x + cw, 0);
      grd.addColorStop(0, `rgb(${rr * 0.55},${gg * 0.55},${bb * 0.55})`);
      grd.addColorStop(0.28, `rgb(${rr},${gg},${bb})`);
      grd.addColorStop(0.62, `rgb(${rr * 1.12},${gg * 1.1},${bb * 1.05})`);
      grd.addColorStop(1, `rgb(${rr * 0.5},${gg * 0.5},${bb * 0.5})`);
      g.fillStyle = grd;
      g.beginPath();
      g.moveTo(x, y + rh * 0.92);
      g.quadraticCurveTo(x + cw * 0.5, y + rh * 0.12, x + cw, y + rh * 0.92);
      g.lineTo(x + cw, y + rh);
      g.lineTo(x, y + rh);
      g.closePath(); g.fill();
      // 高光边
      g.strokeStyle = `rgba(255,220,190,0.18)`; g.lineWidth = 1;
      g.beginPath();
      g.moveTo(x + cw * 0.12, y + rh * 0.9);
      g.quadraticCurveTo(x + cw * 0.5, y + rh * 0.16, x + cw * 0.88, y + rh * 0.9);
      g.stroke();
    }
  }
  // 苔藓与风化
  for (let i = 0; i < 120; i++) {
    g.globalAlpha = 0.04 + Math.random() * 0.10;
    g.fillStyle = Math.random() > 0.45 ? '#6f8450' : '#3d3a2c';
    const x = Math.random() * size, y = Math.random() * size;
    g.beginPath(); g.arc(x, y, 4 + Math.random() * 26, 0, 7); g.fill();
  }
  g.globalAlpha = 1;
  return tex(c);
}

/* ---------------- 木材 ---------------- */
export function woodTexture(size = 512, dark = false) {
  const c = canvas(size, size), g = c.getContext('2d');
  const base = dark ? [138, 104, 70] : [186, 146, 98];
  g.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
  g.fillRect(0, 0, size, size);
  const img = g.getImageData(0, 0, size, size), d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grain = fbm(x / size * 26, y / size * 3.2, 4);
      const rings = Math.sin((y / size * 22 + grain * 7) * Math.PI * 2) * 0.5 + 0.5;
      const n = (grain - 0.5) * 34 + (rings - 0.5) * 16;
      const i = (y * size + x) * 4;
      d[i] = clamp(d[i] + n); d[i + 1] = clamp(d[i + 1] + n * 0.9); d[i + 2] = clamp(d[i + 2] + n * 0.7);
    }
  }
  g.putImageData(img, 0, 0);
  // 木板缝
  const planks = 6;
  for (let i = 1; i < planks; i++) {
    const y = (i / planks) * size;
    g.fillStyle = 'rgba(20,12,6,0.5)'; g.fillRect(0, y, size, 2);
    g.fillStyle = 'rgba(255,230,190,0.08)'; g.fillRect(0, y + 2, size, 1);
  }
  // 节疤
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    for (let r = 8; r > 0; r -= 1.6) {
      g.globalAlpha = 0.10; g.strokeStyle = '#2a1a0c'; g.lineWidth = 1.4;
      g.beginPath(); g.ellipse(x, y, r * 1.5, r, 0.3, 0, 7); g.stroke();
    }
  }
  g.globalAlpha = 1;
  return tex(c);
}

/* ---------------- 树皮 ---------------- */
export function barkTexture(size = 512) {
  const c = canvas(size, size), g = c.getContext('2d');
  const img = g.createImageData(size, size), d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x / size * 14, y / size * 3, 5);
      const crack = Math.abs(Math.sin(x / size * Math.PI * 9 + n * 8));
      const v = 88 + n * 46 - (1 - crack) * 40;
      const i = (y * size + x) * 4;
      d[i] = clamp(v * 1.02); d[i + 1] = clamp(v * 0.9); d[i + 2] = clamp(v * 0.72); d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return tex(c);
}

/* ---------------- 水面法线 ---------------- */
export function waterNormalTexture(size = 512) {
  const c = canvas(size, size), g = c.getContext('2d');
  const h = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size * Math.PI * 2, v = y / size * Math.PI * 2;
      let s = 0;
      s += Math.sin(u * 3 + v * 2 + 0.7) * 0.5;
      s += Math.sin(u * 5 - v * 4 + 2.1) * 0.28;
      s += Math.sin(u * 8 + v * 7 + 4.4) * 0.16;
      s += Math.sin(u * 13 - v * 11 + 1.2) * 0.09;
      s += Math.sin(u * 21 + v * 17 + 3.3) * 0.05;
      h[y * size + x] = s;
    }
  }
  const img = g.createImageData(size, size), d = img.data;
  const strength = 2.2;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xm = (x - 1 + size) % size, xp = (x + 1) % size;
      const ym = (y - 1 + size) % size, yp = (y + 1) % size;
      const dx = (h[y * size + xp] - h[y * size + xm]) * strength;
      const dy = (h[yp * size + x] - h[ym * size + x]) * strength;
      const nx = -dx, ny = -dy, nz = 1;
      const l = Math.hypot(nx, ny, nz);
      const i = (y * size + x) * 4;
      d[i] = (nx / l * 0.5 + 0.5) * 255;
      d[i + 1] = (ny / l * 0.5 + 0.5) * 255;
      d[i + 2] = (nz / l * 0.5 + 0.5) * 255;
      d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return tex(c, { srgb: false });
}

/* ---------------- 叶子遮罩（用于树冠边缘破碎） ---------------- */
export function leafClusterTexture(size = 256) {
  const c = canvas(size, size), g = c.getContext('2d');
  g.clearRect(0, 0, size, size);
  const rnd = mulberry32(4242);
  // 中心密、边缘疏的叶簇
  for (let i = 0; i < 150; i++) {
    const a = rnd() * Math.PI * 2;
    const r = Math.pow(rnd(), 0.62) * size * 0.46;
    const x = size / 2 + Math.cos(a) * r;
    const y = size / 2 + Math.sin(a) * r * 0.92;
    const w = 8 + rnd() * 15;
    const h = 5 + rnd() * 9;
    const v = 190 + rnd() * 65;
    g.fillStyle = `rgba(${v},${v},${v},1)`;
    g.beginPath();
    g.ellipse(x, y, w, h, rnd() * 6.28, 0, 7);
    g.fill();
  }
  return tex(c, { srgb: false });
}

export function leafMaskTexture(size = 512) {
  const c = canvas(size, size), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, size, size);
  const rnd = mulberry32(99);
  for (let i = 0; i < 900; i++) {
    const x = rnd() * size, y = rnd() * size;
    const r = 4 + rnd() * 16;
    const v = 150 + rnd() * 105;
    g.fillStyle = `rgba(${v},${v},${v},1)`;
    g.beginPath(); g.ellipse(x, y, r * (0.6 + rnd() * 0.8), r * 0.55, rnd() * 6.28, 0, 7); g.fill();
  }
  return tex(c, { srgb: false });
}

export function dirtTexture(size = 512) {
  const c = canvas(size, size), g = c.getContext('2d');
  const img = g.createImageData(size, size), d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x / size * 18, y / size * 18, 4);
      const p = fbm(x / size * 60 + 5, y / size * 60, 3);
      const v = 150 + n * 44 + (p - 0.5) * 26;
      const i = (y * size + x) * 4;
      d[i] = clamp(v * 1.02); d[i + 1] = clamp(v * 0.9); d[i + 2] = clamp(v * 0.74); d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return tex(c);
}
