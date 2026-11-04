import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

/* 把多张截图拼成一张对比图：node tools/sheet.mjs out.png 标题 img1 img2 ... */
const [out, title, ...imgs] = process.argv.slice(2);
const cols = +(process.env.COLS || 2);
const cellW = +(process.env.CW || 760);

const cells = imgs.map((f) => {
  const b = path.basename(f).replace(/\.png$/, '');
  return `<figure><img src="file:///${path.resolve(f).replace(/\\/g, '/')}"><figcaption>${b}</figcaption></figure>`;
}).join('');

const html = `<!doctype html><meta charset="utf-8"><style>
  body{margin:0;background:#111418;font-family:"Segoe UI",system-ui,sans-serif;color:#dfe4ea}
  h1{font-size:22px;font-weight:600;margin:20px 24px 12px;letter-spacing:.5px}
  .grid{display:grid;grid-template-columns:repeat(${cols},${cellW}px);gap:12px;padding:0 24px 24px}
  figure{margin:0;background:#1b1f25;border-radius:8px;overflow:hidden}
  img{width:100%;display:block}
  figcaption{font-size:13px;padding:7px 10px;color:#8e99a6}
</style><h1>${title}</h1><div class="grid">${cells}</div>`;

fs.writeFileSync('shots/_sheet.html', html);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: cols * cellW + 48 + 12 * (cols - 1), height: 900, deviceScaleFactor: 1 });
await page.goto('file:///' + path.resolve('shots/_sheet.html').replace(/\\/g, '/'));
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: out, fullPage: true });
console.log('saved', out);
await browser.close();
