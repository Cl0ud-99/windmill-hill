import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1280,720','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1280,height:720});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,200)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
// 直接进入漫游并固定朝向：从 (26,6,74) 看向风车
await page.mouse.click(640, 360);
await new Promise(r=>setTimeout(r,600));
await page.evaluate(() => {
  const d = window.__demo;
  d.camera.position.set(26, 6, 74);
  d.camera.lookAt(0, 11, 0);
  d.roam.setFromCamera();
  d.roam.vel.set(0,0,0);
});
const dist = () => page.evaluate(() => {
  const p = window.__demo.camera.position;
  return { p: [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)], d: +Math.hypot(p.x-0, p.z-0).toFixed(2) };
});
const start = await dist();
await page.keyboard.down('w'); await new Promise(r=>setTimeout(r,700)); await page.keyboard.up('w');
await new Promise(r=>setTimeout(r,250));
const afterW = await dist();
await page.keyboard.down('s'); await new Promise(r=>setTimeout(r,700)); await page.keyboard.up('s');
await new Promise(r=>setTimeout(r,250));
const afterS = await dist();
// D：相对相机右方向
await page.evaluate(() => { const d=window.__demo; d.camera.position.set(26,6,74); d.camera.lookAt(0,11,0); d.roam.setFromCamera(); d.roam.vel.set(0,0,0); });
await page.keyboard.down('d'); await new Promise(r=>setTimeout(r,700)); await page.keyboard.up('d');
await new Promise(r=>setTimeout(r,250));
const afterD = await dist();
console.log(JSON.stringify({ start, afterW, afterS, afterD }, null, 1));
await browser.close();
