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
const out = await page.evaluate(() => {
  const d = window.__demo;
  const rc = new d.THREE.Raycaster();
  rc.setFromCamera(new d.THREE.Vector2(0.04, 0.16), d.camera);
  const hits = rc.intersectObjects(d.scene.children, true).filter(h => h.object.isMesh);
  return hits.slice(0, 8).map(h => {
    const m = h.object.material;
    return {
      dist: +h.distance.toFixed(2),
      geom: h.object.geometry.type,
      color: m.uniforms && m.uniforms.uColor ? '#' + m.uniforms.uColor.value.getHexString() : null,
      hasMap: !!(m.uniforms && m.uniforms.uMap && m.uniforms.uMap.value),
      emissive: m.uniforms && m.uniforms.uEmissive ? m.uniforms.uEmissive.value : null,
      side: m.side,
      name: h.object.name || h.object.parent?.name || '',
    };
  });
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
