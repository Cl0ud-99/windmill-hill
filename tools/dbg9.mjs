import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,600','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:600});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => { window.__demo.setView([22,6,62],[10,1,50],45); window.__demo.water.river.visible=false; window.__demo.water.stream.visible=false; });
await new Promise(r=>setTimeout(r,500));
await page.screenshot({path:'shots/dbg-bank-a.png'});
await page.evaluate(() => {
  const m = window.__demo.terrain.material;
  m.fragmentShader = m.fragmentShader.replace('gl_FragColor = vec4( outc, 1.0 );', 'gl_FragColor = vec4( vec3( shore ), 1.0 );');
  m.needsUpdate = true;
});
await new Promise(r=>setTimeout(r,800));
await page.screenshot({path:'shots/dbg-bank-shore.png'});
await page.evaluate(() => {
  const m = window.__demo.terrain.material;
  m.fragmentShader = m.fragmentShader.replace('gl_FragColor = vec4( vec3( shore ), 1.0 );', 'gl_FragColor = vec4( col, 1.0 );');
  m.needsUpdate = true;
});
await new Promise(r=>setTimeout(r,800));
await page.screenshot({path:'shots/dbg-bank-col.png'});
await browser.close();
