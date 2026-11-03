import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:700});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 90000});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([-3.5, 8.6, 8.5], [-8.5, 8.6, 1.5], 45));
await new Promise(r=>setTimeout(r,800));
// 按材质颜色给每个 toon 材质染不同色
await page.evaluate(() => {
  const d = window.__demo;
  const seen = new Set();
  const palette = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];
  let i = 0;
  d.scene.traverse(o => {
    if (o.isMesh && o.material && o.material.uniforms && o.material.uniforms.uColor) {
      if (seen.has(o.material)) return;
      seen.add(o.material);
      const c = palette[i % palette.length];
      o.material.uniforms.uColor.value.setHex(c);
      o.material.uniforms.uTint.value.setHex(c);
      i++;
    }
  });
  return i;
});
await new Promise(r=>setTimeout(r,900));
await page.screenshot({path:'shots/dbg-mat-colors.png'});
console.log('ok');
await browser.close();
