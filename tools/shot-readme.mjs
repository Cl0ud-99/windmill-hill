import puppeteer from 'puppeteer-core';
import fs from 'fs';

/* 生成 README 成图：1600×900、隐藏 HUD。
   机位直接借用电影镜头表（SHOTS），比手摆坐标靠谱。 */
const OUT = 'shots/readme';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist',
    '--window-size=1600,900', '--hide-scrollbars', '--mute-audio', '--disable-dev-shm-usage'],
  protocolTimeout: 300000,
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
page.on('pageerror', (e) => console.log('[pageerror]', String(e).slice(0, 500)));
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForFunction('window.__ready === true', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1400));

await page.evaluate(() => {
  const d = window.__demo;
  d.ui.toggleHud();
  d.ui.titlecard?.classList.remove('show');
  if (d.ui.titlecard) d.ui.titlecard.style.setProperty('display', 'none', 'important');
  d.ui.showHint(false);
  window.__dofForce = false;
});

// [文件名, 镜头序号, 镜头内进度, 昼夜]
const LIST = [
  ['hero', 0, 0.55, 'day'],
  ['hero-dusk', 0, 0.55, 'dusk'],
  ['mill', 1, 0.55, 'day'],
  ['river', 3, 0.45, 'day'],
  ['gate', 5, 0.5, 'day'],
  ['garden', 6, 0.5, 'day'],
  ['ascend', 7, 0.6, 'dusk'],
];

for (const [name, idx, t, preset] of LIST) {
  await page.evaluate((i, tt, pr) => {
    const d = window.__demo;
    d.setTimeOfDay(pr, 0);
    d.shot(i, tt);
  }, idx, t, preset);
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log('saved', name);
}

// 第三人称人物
await page.evaluate(() => {
  const d = window.__demo;
  d.setTimeOfDay('day', 0);
  d.enterThird();
});
await new Promise((r) => setTimeout(r, 1600));
await page.evaluate(() => { window.__demo.ui.showHint(false); });
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: `${OUT}/character.png` });
console.log('saved character');

await browser.close();
