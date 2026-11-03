import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,600','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:600});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,400)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([14, 6, 32], [8, 3.6, 22], 45));
await new Promise(r=>setTimeout(r,700));
await page.screenshot({path:'shots/dbg-stripes-a.png'});
await page.evaluate(() => { window.__demo.scenery.visible = false; });
await new Promise(r=>setTimeout(r,500));
await page.screenshot({path:'shots/dbg-stripes-b.png'});
await browser.close();
