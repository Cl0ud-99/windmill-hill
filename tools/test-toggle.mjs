import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1280,720','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1280,height:720});
const errs = [];
page.on('pageerror', e => errs.push(String(e).slice(0,200)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.mouse.click(640, 360);
await new Promise(r=>setTimeout(r,600));
const read = () => page.evaluate(() => {
  const d = window.__demo;
  return { avatar: d.avatar.root.visible, roam: d.roam.enabled, third: d.third.enabled, fov: +d.camera.fov.toFixed(1), y: +d.camera.position.y.toFixed(2) };
});
const a = await read();
await page.keyboard.press('v'); await new Promise(r=>setTimeout(r,700));
const b = await read();
await page.keyboard.press('v'); await new Promise(r=>setTimeout(r,700));
const c = await read();
await page.keyboard.press('v'); await new Promise(r=>setTimeout(r,700));
await page.keyboard.down('w'); await new Promise(r=>setTimeout(r,800)); await page.keyboard.up('w');
await page.keyboard.press('c'); await new Promise(r=>setTimeout(r,600));
const d2 = await page.evaluate(() => ({ cine: window.__demo.cine.playing, avatar: window.__demo.avatar.root.visible }));
console.log(JSON.stringify({ a, b, c, cine: d2, errs }, null, 1));
await browser.close();
