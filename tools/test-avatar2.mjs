import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1200,800','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1200,height:800});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.mouse.click(600, 400);
await new Promise(r=>setTimeout(r,400));
await page.evaluate(() => {
  const d = window.__demo;
  d.avatar.root.visible = true;
  d.avatar.root.position.set(22, 3.2, 24);
  d.avatar.root.rotation.y = 0;
  d.avatar.update(0.016, 0, false);
  d.third.enabled = false;
  d.roam.enabled = false;
  d.ui.titlecard.style.display = 'none';
  d.ui.hideLoader();
  // 正面
  d.camera.position.set(22, 4.55, 26.4);
  d.camera.lookAt(22, 4.15, 24);
  d.camera.fov = 35; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,700));
await page.screenshot({path:'shots/avatar-front.png'});
await page.evaluate(() => {
  const d = window.__demo;
  d.camera.position.set(23.8, 4.4, 25.6);
  d.camera.lookAt(22, 4.15, 24);
  d.camera.fov = 35; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,500));
await page.screenshot({path:'shots/avatar-three-quarter.png'});
await browser.close();
