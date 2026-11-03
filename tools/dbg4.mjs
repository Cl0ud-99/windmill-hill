import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,600','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:600});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,400)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
// 近景看河
await page.evaluate(() => {
  const d = window.__demo;
  d.setView([26, 3.2, 78], [0, 12, 0], 36);
});
for (const [mode, name] of [[1,'depth'],[2,'refl'],[3,'foam'],[4,'normal'],[5,'fres'],[0,'final']]) {
  await page.evaluate((m) => {
    window.__demo.water.river.material.uniforms.uDebug.value = m;
    window.__demo.water.stream.material.uniforms.uDebug.value = m;
  }, mode);
  await new Promise(r=>setTimeout(r,500));
  await page.screenshot({path:`shots/w-${name}.png`});
}
await browser.close();
