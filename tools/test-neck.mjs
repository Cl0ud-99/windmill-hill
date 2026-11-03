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
  d.avatar.root.rotation.y = 0.7;
  d.avatar.update(0.016, 0, false);
  d.camera.position.set(22.9, 4.55, 25.6);
  d.camera.lookAt(22, 4.35, 24);
  d.camera.fov = 32; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,700));
await page.screenshot({path:'shots/neck-check.png'});
await page.evaluate(() => {
  const d = window.__demo;
  d.camera.position.set(22, 4.4, 26.2);
  d.camera.lookAt(22, 4.3, 24);
});
await new Promise(r=>setTimeout(r,500));
await page.screenshot({path:'shots/neck-front.png'});
await browser.close();
