import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1200,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1200,height:700});
page.on('console', m => console.log('[page]', m.text().slice(0,300)));
page.on('pageerror', e => console.log('[err]', String(e).slice(0,400)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const info = await page.evaluate(() => {
  const d = window.__demo;
  const sun = d.sun;
  return {
    shadowEnabled: d.renderer.shadowMap.enabled,
    sunCast: sun.castShadow,
    mapSize: [sun.shadow.mapSize.x, sun.shadow.mapSize.y],
    camLRTB: [sun.shadow.camera.left, sun.shadow.camera.right, sun.shadow.camera.top, sun.shadow.camera.bottom],
    proj: sun.shadow.camera.projectionMatrix.elements.slice(0,4),
    mapExists: !!sun.shadow.map,
    hasDepthTex: !!(sun.shadow.map && sun.shadow.map.depthTexture),
    shadowMat: sun.shadow.matrix.elements.slice(0,4),
    lightsInScene: d.scene.children.filter(c=>c.isLight).map(l=>l.type),
    terrainReceive: d.terrain.mesh.receiveShadow,
  };
});
console.log(JSON.stringify(info,null,2));
// 输出阴影遮罩
await page.evaluate(() => {
  const m = window.__demo.terrain.material;
  m.fragmentShader = m.fragmentShader.replace('gl_FragColor = vec4( outc, 1.0 );', 'gl_FragColor = vec4( vec3( getShadowMask() ), 1.0 );');
  m.needsUpdate = true;
});
await new Promise(r=>setTimeout(r,1500));
await page.screenshot({path:'shots/dbg-shadow.png'});
await browser.close();
