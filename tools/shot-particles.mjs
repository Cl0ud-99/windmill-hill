import puppeteer from 'puppeteer-core';
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

const preset = process.argv[2] || 'day';
await page.evaluate((p) => window.__demo.setTimeOfDay(p, 0), preset);
console.log('preset', preset);

// 站姿机位：眼高 1.7m，自动贴合地形
const views = [
  ['mist', [-4, 0.9, 40], [26, 0.2, 48], 46],
  ['mist2', [16, 1.1, 44], [-18, 0.4, 53], 52],
  ['pollen', [12, 1.7, 20], [1, 4.0, 2], 48],
  ['butterfly', [19, 1.5, 16], [13.5, 2.2, 12.5], 40],
  ['backlit', [1, 1.6, 19], [22, 5.0, 31], 52],
];
for (const [name, pos, look, fov] of views) {
  await page.evaluate((p, l, f) => {
    const d = window.__demo;
    const th = d.terrainHeight;
    d.setView([p[0], th(p[0], p[2]) + p[1], p[2]], [l[0], th(l[0], l[2]) + l[1], l[2]], f);
  }, pos, look, fov);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `shots/particles/${preset}-${name}.png` });
  console.log('saved', name);
}
await browser.close();
