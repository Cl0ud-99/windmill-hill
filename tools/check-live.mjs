import puppeteer from 'puppeteer-core';
const url = process.argv[2] || 'https://cl0ud-99.github.io/windmill-hill/';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1400,800','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1400,height:800});
const errs = [];
page.on('pageerror', e => errs.push(String(e).slice(0,200)));
page.on('console', m => { if (m.type()==='error') errs.push('console:'+m.text().slice(0,160)); });
page.on('response', r => { if (r.status() >= 400) errs.push('HTTP ' + r.status() + ' ' + r.url()); });
const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
console.log('http', resp.status());
let ready = false;
try { await page.waitForFunction('window.__ready === true', { timeout: 90000 }); ready = true; } catch {}
await new Promise(r=>setTimeout(r,2500));
await page.screenshot({path:'shots/live.png'});
const info = await page.evaluate(() => ({
  ready: window.__ready === true,
  title: document.title,
  canvases: document.querySelectorAll('canvas').length,
}));
console.log(JSON.stringify({ ready, info, errs }, null, 1));
await browser.close();
