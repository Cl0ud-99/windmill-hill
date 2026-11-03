import puppeteer from 'puppeteer-core';
const idx = Number(process.argv[2] || 2);
const t = Number(process.argv[3] || 1.5);
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1400,800','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1400,height:800});
await page.goto('https://cl0ud-99.github.io/windmill-hill/', { waitUntil: 'networkidle2', timeout: 90000 });
await page.waitForFunction('window.__ready === true', { timeout: 90000 });
await page.evaluate((i, tt) => { window.__demo.shot(i, tt); }, idx, t);
await new Promise(r=>setTimeout(r,1500));
await page.screenshot({path:`shots/live-shot${idx}.png`});
console.log('ok');
await browser.close();
