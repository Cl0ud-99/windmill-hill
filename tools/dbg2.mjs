import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1200,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1200,height:700});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,400)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([16,2.2,52],[6,1.2,45],42));
await new Promise(r=>setTimeout(r,600));
// 输出深度
await page.evaluate(() => {
  const m = window.__demo.water.river.material;
  m.fragmentShader = m.fragmentShader.replace('gl_FragColor = vec4( col, alpha );', 'gl_FragColor = vec4( vec3( depth ), 1.0 );');
  m.needsUpdate = true;
});
await new Promise(r=>setTimeout(r,900));
await page.screenshot({path:'shots/dbg-depth.png'});
// 输出反射
await page.evaluate(() => {
  const m = window.__demo.water.river.material;
  m.fragmentShader = m.fragmentShader.replace('gl_FragColor = vec4( vec3( depth ), 1.0 );', 'gl_FragColor = vec4( refl, 1.0 );');
  m.needsUpdate = true;
});
await new Promise(r=>setTimeout(r,900));
await page.screenshot({path:'shots/dbg-refl.png'});
await browser.close();
