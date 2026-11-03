import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1200,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1200,height:700});
page.on('pageerror', e => console.log('[err]', String(e).slice(0,400)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const info = await page.evaluate(() => {
  const d = window.__demo;
  const r = d.water.river;
  r.geometry.computeBoundingBox();
  const bb = r.geometry.boundingBox;
  return {
    riverVisible: r.visible,
    riverInScene: !!r.parent,
    bb: [bb.min.toArray(), bb.max.toArray()],
    mat: r.material.type,
    transparent: r.material.transparent,
    children: d.scene.children.map(c => c.type + ':' + (c.name||'')),
    camY: d.camera.position.y,
  };
});
console.log(JSON.stringify(info, null, 2));
await page.evaluate(() => {
  const d = window.__demo;
  d.scene.traverse(o => { if (o.isMesh && o !== d.water.river && o !== d.water.stream && o.name !== 'terrain' && !o.material?.uniforms?.uReflect) o.visible = false; });
  d.setView([10, 60, 90], [10, -1, 45], 40);
});
await new Promise(r=>setTimeout(r,900));
await page.screenshot({path:'shots/dbg-water-top.png'});
await browser.close();
