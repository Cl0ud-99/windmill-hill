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
await new Promise(r=>setTimeout(r,600));
const out = await page.evaluate(() => {
  const d = window.__demo;
  const rc = new d.THREE.Raycaster();
  // 门中心大约在屏幕 (0.52, 0.45)
  const res = [];
  for (const [nx, ny] of [[0.52, 0.52], [0.52, 0.42], [0.30, 0.55]]) {
    rc.setFromCamera(new d.THREE.Vector2(nx * 2 - 1, -(ny * 2 - 1)), d.camera);
    const hits = rc.intersectObjects(d.scene.children, true).filter(h => h.object.isMesh);
    const h = hits[0];
    if (h) {
      const m = h.object.material;
      res.push({
        at: [nx, ny],
        dist: +h.distance.toFixed(2),
        color: m.uniforms && m.uniforms.uColor ? '#' + m.uniforms.uColor.value.getHexString() : null,
        tint: m.uniforms && m.uniforms.uTint ? '#' + m.uniforms.uTint.value.getHexString() : null,
        hasMap: !!(m.uniforms && m.uniforms.uMap && m.uniforms.uMap.value),
        mapMix: m.uniforms && m.uniforms.uMapMix ? m.uniforms.uMapMix.value : null,
        ao: m.uniforms && m.uniforms.uAO ? m.uniforms.uAO.value : null,
        geom: h.object.geometry.type,
      });
    } else res.push({ at: [nx, ny], none: true });
  }
  return res;
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
