import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=900,550','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:900,height:550});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([26, 6, 74], [0, 11, 0], 34));
await new Promise(r=>setTimeout(r,600));
await page.screenshot({path:'shots/dbg-grade-a.png'});
await page.evaluate(() => { window.__demo.post.grade.uniforms.uSat.value = 2.6; });
await new Promise(r=>setTimeout(r,400));
await page.screenshot({path:'shots/dbg-grade-b.png'});
const passes = await page.evaluate(() => window.__demo.post.composer.passes.map(p=>[p.constructor.name, p.enabled]));
console.log(JSON.stringify(passes));
await browser.close();
