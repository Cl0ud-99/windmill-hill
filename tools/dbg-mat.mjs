import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:700});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([-3.5, 8.6, 8.5], [-8.5, 8.6, 1.5], 45));
await new Promise(r=>setTimeout(r,700));
const info = await page.evaluate(() => {
  const d = window.__demo;
  // 找到主屋 group 里的门板材质
  const out = [];
  d.scene.traverse(o => {
    if (o.isMesh && o.material && o.material.uniforms && o.material.uniforms.uNormalMap) {
      out.push({ hasN: !!o.material.uniforms.uNormalMap.value, def: !!o.material.defines.USE_NORMALMAP });
    }
  });
  return out.slice(0, 3);
});
console.log(JSON.stringify(info));
await page.screenshot({path:'shots/dbg-mat-a.png'});
// 关掉所有法线贴图
await page.evaluate(() => {
  const d = window.__demo;
  d.scene.traverse(o => {
    if (o.isMesh && o.material && o.material.defines && o.material.defines.USE_NORMALMAP) {
      delete o.material.defines.USE_NORMALMAP;
      o.material.needsUpdate = true;
    }
  });
});
await new Promise(r=>setTimeout(r,900));
await page.screenshot({path:'shots/dbg-mat-b.png'});
await browser.close();
