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
const kids = await page.evaluate(() => window.__demo.scenery.children.map((c,i)=>[i, c.type, c.position.toArray().map(v=>+v.toFixed(1)), c.children.length]));
console.log(JSON.stringify(kids));
await page.evaluate(() => window.__demo.setView([20, 8, 46], [8, 4, 26], 45));
await new Promise(r=>setTimeout(r,600));
await page.screenshot({path:'shots/dbg-s0.png'});
for (const idx of [0,1,2,3,4,5,6,7]) {
  await page.evaluate((i) => {
    const d = window.__demo;
    d.scenery.children.forEach((c,k)=>{ c.visible = k !== i; });
  }, idx);
  await new Promise(r=>setTimeout(r,350));
  await page.screenshot({path:`shots/dbg-s${idx+1}.png`});
}
await browser.close();
