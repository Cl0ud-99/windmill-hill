import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1600,900','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1600,height:900});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await page.evaluate(() => window.__demo.setView([26,6,74],[0,11,0],34));
await new Promise(r=>setTimeout(r,1500));
const stats = await page.evaluate(async () => {
  const times = [];
  let last = performance.now();
  await new Promise(res => {
    let n = 0;
    function loop() {
      const now = performance.now();
      times.push(now - last); last = now;
      if (++n < 120) requestAnimationFrame(loop); else res();
    }
    requestAnimationFrame(loop);
  });
  times.sort((a,b)=>a-b);
  const r = window.__demo.renderer;
  return {
    median: times[Math.floor(times.length/2)].toFixed(2),
    p90: times[Math.floor(times.length*0.9)].toFixed(2),
    drawCalls: r.info.render.calls,
    triangles: r.info.render.triangles,
    programs: r.info.programs.length,
    geometries: r.info.memory.geometries,
    textures: r.info.memory.textures,
  };
});
console.log(JSON.stringify(stats, null, 2));
await browser.close();
