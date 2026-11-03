import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1600,900','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1600,height:900});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 90000});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.evaluate(() => window.__demo.setView([26,6,74],[0,11,0],34));
await new Promise(r=>setTimeout(r,1500));

const measure = async (label, setup) => {
  if (setup) { await page.evaluate(setup); await new Promise(r=>setTimeout(r,900)); }
  const ms = await page.evaluate(async () => {
    const t = []; let last = performance.now();
    await new Promise(res => { let n=0; function loop(){ const now=performance.now(); t.push(now-last); last=now; if(++n<70) requestAnimationFrame(loop); else res(); } requestAnimationFrame(loop); });
    t.sort((a,b)=>a-b);
    return +t[Math.floor(t.length/2)].toFixed(1);
  });
  console.log(label, ms);
  return ms;
};

await measure('baseline');
await measure('no normalmap', () => {
  window.__demo.scene.traverse(o => {
    if (o.isMesh && o.material && o.material.defines && 'USE_NORMALMAP' in o.material.defines) {
      delete o.material.defines.USE_NORMALMAP;
      o.material.needsUpdate = true;
    }
  });
});
await measure('no shadow', () => { window.__demo.renderer.shadowMap.enabled = false; });
await measure('no post', () => { window.__demo.post.bloom.enabled = false; window.__demo.post.rays.enabled = false; });
await browser.close();
