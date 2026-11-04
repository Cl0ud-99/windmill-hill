import puppeteer from 'puppeteer-core';

/* 预览某一套昼夜预设：
   node tools/shot-tod.mjs dusk            → 存到 shots/tod/
   node tools/shot-tod.mjs day out/        → 存到 out/
   PRESET=dusk node tools/shot-tod.mjs     → 也可以走环境变量
*/
const PRESET = process.argv[2] || process.env.PRESET || 'dusk';
const OUT = process.argv[3] || `shots/tod`;

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--disable-dev-shm-usage'],
  protocolTimeout: 240000,
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
page.on('pageerror', (e) => console.log('[pageerror]', String(e).slice(0, 700)));
page.on('console', (m) => { if (m.type() === 'error') console.log('[err]', m.text().slice(0, 400)); });
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForFunction('window.__ready === true', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1200));

const info = await page.evaluate((p) => window.__demo.setTimeOfDay(p, 0), PRESET);
console.log(`${PRESET} →`, JSON.stringify(info));

const views = [
  ['hero', [22.0, 9.0, 30.0], [0.0, 12.0, 0.0], 40],
  ['backlit', [-26.0, 8.0, -18.0], [2.0, 10.0, 2.0], 44],
  ['sky', [14.0, 6.0, 24.0], [0.0, 14.0, 0.0], 55],
  ['close', [9.0, 8.5, 13.0], [0.0, 8.0, 0.0], 45],
];
for (const [name, pos, look, fov] of views) {
  await page.evaluate((p, l, f) => window.__demo.setView(p, l, f), pos, look, fov);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/${PRESET}-${name}.png` });
  console.log('saved', `${OUT}/${PRESET}-${name}.png`);
}
await browser.close();
