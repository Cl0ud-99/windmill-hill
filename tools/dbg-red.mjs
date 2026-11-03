import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1000,height:700});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
await page.evaluate(() => window.__demo.setView([-3.5, 8.6, 8.5], [-8.5, 8.6, 1.5], 45));
await new Promise(r=>setTimeout(r,600));
const info = await page.evaluate(() => {
  const d = window.__demo;
  const rc = new d.THREE.Raycaster();
  rc.setFromCamera(new d.THREE.Vector2(0.04, 0.16), d.camera);
  const hits = rc.intersectObjects(d.scene.children, true).filter(h => h.object.isMesh);
  const h = hits[0];
  if (!h) return 'no hit';
  const m = h.object.material;
  m.uniforms.uColor.value.setHex(0xff0000);
  m.uniforms.uTint.value.setHex(0xff0000);
  return {
    dist: +h.distance.toFixed(2),
    shadowType: d.renderer.shadowMap.type,
    radius: d.scene.children.find(c => c.isDirectionalLight)?.shadow.radius,
  };
});
console.log(JSON.stringify(info));
await new Promise(r=>setTimeout(r,700));
await page.screenshot({path:'shots/dbg-red.png'});
await browser.close();
