import puppeteer from 'puppeteer-core';
import fs from 'fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = process.argv[2] || 'shots';
const W = +(process.env.W || 1600);
const H = +(process.env.H || 900);

const VIEWS = JSON.parse(fs.existsSync('tools/views.json') ? fs.readFileSync('tools/views.json', 'utf8') : '[]');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [
    '--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist',
    '--enable-webgl', '--enable-unsafe-swiftshader',
    `--window-size=${W},${H}`, '--hide-scrollbars', '--mute-audio',
    '--disable-dev-shm-usage',
  ],
  protocolTimeout: 240000,
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
page.on('console', (m) => {
  const t = m.text();
  if (!t.includes('Download the React')) console.log('[page]', m.type(), t.slice(0, 400));
});
page.on('pageerror', (e) => console.log('[pageerror]', String(e).slice(0, 800)));

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 120000 });
try {
  await page.waitForFunction('window.__ready === true', { timeout: 180000 });
} catch (e) {
  console.log('!! not ready');
}
await new Promise((r) => setTimeout(r, 1200));

for (let i = 0; i < VIEWS.length; i++) {
  const v = VIEWS[i];
  if (v.view) {
    await page.evaluate((vv) => window.__demo.setView(vv.pos, vv.look, vv.fov || 34), v.view);
  }
  if (v.eval) await page.evaluate(v.eval);
  await new Promise((r) => setTimeout(r, v.wait || 700));
  const file = `${OUT}/${v.name || 'view' + i}.png`;
  await page.screenshot({ path: file });
  console.log('saved', file);
}

// 统计
const info = await page.evaluate(() => {
  const d = window.__demo;
  return {
    calls: d.renderer.info.render.calls,
    tris: d.renderer.info.render.triangles,
    programs: d.renderer.info.programs?.length,
  };
});
console.log('render info', info);

await browser.close();
