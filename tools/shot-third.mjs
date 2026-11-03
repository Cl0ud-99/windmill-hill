import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1920,1080','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1920,height:1080});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.mouse.click(960, 540);
await new Promise(r=>setTimeout(r,500));
await page.evaluate(() => {
  const d = window.__demo;
  d.ui.titlecard.style.display = 'none';
  d.camera.position.set(17, 6.4, 42);
  d.camera.lookAt(0, 10, 0);
  d.roam.setFromCamera();
});
await page.keyboard.press('v');
await new Promise(r=>setTimeout(r,900));
await page.keyboard.down('w');
await new Promise(r=>setTimeout(r,1800));
await page.keyboard.up('w');
await new Promise(r=>setTimeout(r,400));
await page.screenshot({path:'shots/final/character.png'});
await page.evaluate(() => { window.__demo.ui.showHint(false); });
await new Promise(r=>setTimeout(r,300));
await page.screenshot({path:'shots/final/character-clean.png'});
await browser.close();
