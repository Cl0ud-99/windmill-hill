import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=900,900','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:900,height:900});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.mouse.click(450, 450);
await new Promise(r=>setTimeout(r,400));
await page.evaluate(() => {
  const d = window.__demo;
  d.ui.titlecard.style.display = 'none';
  d.roam.enabled = false;
  d.avatar.root.visible = true;
  d.avatar.root.position.set(22, 3.2, 24);
  d.avatar.root.rotation.y = Math.PI;
  d.avatar.update(0.016, 0, false);
  d.camera.position.set(22, 4.4, 26.4);
  d.camera.lookAt(22, 4.2, 24);
  d.camera.fov = 30; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,700));
await page.screenshot({path:'shots/neck-back.png'});
// 走路姿势（侧后方）
await page.evaluate(() => {
  const d = window.__demo;
  d.avatar.root.rotation.y = Math.PI * 0.75;
  for (let i = 0; i < 40; i++) d.avatar.update(0.016, 3.6, true);
  d.camera.position.set(23.4, 4.5, 25.8);
  d.camera.lookAt(22, 4.2, 24);
});
await new Promise(r=>setTimeout(r,600));
await page.screenshot({path:'shots/neck-walk.png'});
await browser.close();
