import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
const files = process.argv.slice(2);
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--hide-scrollbars'],
});
const page = await browser.newPage();
for (const f of files) {
  const b64 = fs.readFileSync(f).toString('base64');
  const out = path.join('docs/screenshots', path.basename(f).replace(/\.png$/, '.jpg'));
  const dataUrl = await page.evaluate(async (b64) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const g = c.getContext('2d');
    g.drawImage(img, 0, 0);
    return c.toDataURL('image/jpeg', 0.86);
  }, b64);
  fs.writeFileSync(out, Buffer.from(dataUrl.split(',')[1], 'base64'));
  console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
}
await browser.close();
