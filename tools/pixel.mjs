import puppeteer from 'puppeteer-core';
import fs from 'fs';
const file = process.argv[2];
const pts = JSON.parse(process.argv[3] || '[[520,300],[300,200]]');
const b64 = fs.readFileSync(file).toString('base64');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new', args: ['--hide-scrollbars'],
});
const page = await browser.newPage();
const out = await page.evaluate(async (b64, pts) => {
  const img = new Image();
  img.src = 'data:image/png;base64,' + b64;
  await img.decode();
  const c = document.createElement('canvas');
  c.width = img.width; c.height = img.height;
  const g = c.getContext('2d');
  g.drawImage(img, 0, 0);
  return pts.map(([x, y]) => {
    const d = g.getImageData(x, y, 1, 1).data;
    return { at: [x, y], rgb: [d[0], d[1], d[2]] };
  });
}, b64, pts);
console.log(JSON.stringify(out));
await browser.close();
