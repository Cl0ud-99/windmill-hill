import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

/* 两张同机位截图做差分：亮起来的地方就是被景深改动过的像素 */
const [a, b, out] = process.argv.slice(2);
const TH = process.env.TH || 2;
const html = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#000}</style>
<canvas id="c"></canvas><script>
const A = new Image(), B = new Image();
let n = 0;
function go(){
  if (++n < 2) return;
  const w = A.width, h = A.height;
  const c = document.getElementById('c');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.drawImage(A, 0, 0);
  const da = ctx.getImageData(0, 0, w, h);
  ctx.drawImage(B, 0, 0);
  const db = ctx.getImageData(0, 0, w, h);
  const o = ctx.createImageData(w, h);
  for (let i = 0; i < da.data.length; i += 4) {
    const d = (Math.abs(da.data[i]-db.data[i]) + Math.abs(da.data[i+1]-db.data[i+1]) + Math.abs(da.data[i+2]-db.data[i+2])) / 3;
    const v = d > (+TH) ? 255 : 0;
    o.data[i] = v; o.data[i+1] = v; o.data[i+2] = v; o.data[i+3] = 255;
  }
  ctx.putImageData(o, 0, 0);
  window.__done = true;
}
A.onload = go; B.onload = go;
A.src = 'file:///${path.resolve(a).replace(/\\/g, '/')}';
B.src = 'file:///${path.resolve(b).replace(/\\/g, '/')}';
const TH = ${process.env.TH || 2};
</script>`;
fs.writeFileSync('shots/_diff.html', html);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
await page.goto('file:///' + path.resolve('shots/_diff.html').replace(/\\/g, '/'));
await page.waitForFunction('window.__done === true', { timeout: 20000 });
await page.screenshot({ path: out });
console.log('saved', out);
await browser.close();
