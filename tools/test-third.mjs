import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1600,900','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1600,height:900});
const errs = [];
page.on('pageerror', e => errs.push(String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.mouse.click(800, 450);
await new Promise(r=>setTimeout(r,500));
await page.evaluate(() => { const d=window.__demo; d.camera.position.set(30,3.6,44); d.camera.lookAt(0,9,0); d.roam.setFromCamera(); });
await page.keyboard.press('v');
await new Promise(r=>setTimeout(r,900));
// 走一段，再跑一段
await page.keyboard.down('w');
await new Promise(r=>setTimeout(r,2200));
await page.keyboard.down('Shift');
await new Promise(r=>setTimeout(r,1400));
await page.keyboard.up('Shift');
await page.keyboard.up('w');
await new Promise(r=>setTimeout(r,600));
await page.evaluate(() => { window.__demo.ui.titlecard.style.display='none'; });
await page.screenshot({path:'shots/third-1.png'});
// 换个角度，绕到侧面看
await page.evaluate(() => {
  const d = window.__demo;
  d.third.enabled = false;
  const p = d.avatar.root.position;
  d.camera.position.set(p.x + 3.2, p.y + 1.6, p.z + 2.2);
  d.camera.lookAt(p.x, p.y + 0.9, p.z);
  d.camera.fov = 42; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,600));
await page.screenshot({path:'shots/third-2.png'});
const st = await page.evaluate(() => {
  const d = window.__demo;
  return { pos: d.avatar.root.position.toArray().map(v=>+v.toFixed(2)), visible: d.avatar.root.visible, mode: d.roam.enabled };
});
console.log(JSON.stringify({ st, errs }));
await browser.close();
