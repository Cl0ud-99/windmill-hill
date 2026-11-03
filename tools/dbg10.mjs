import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=600,400','--mute-audio'],
});
const page = await browser.newPage();
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const out = await page.evaluate(() => {
  const d = window.__demo;
  const s = d.terrain.material.uniforms.uSplat.value;
  const img = s.image;
  const size = img.width, data = img.data;
  const sample = (x,z) => {
    const u = (x+210)/420, v = (z+210)/420;
    const ix = Math.min(size-1, Math.floor(u*size)), iy = Math.min(size-1, Math.floor(v*size));
    const i = (iy*size+ix)*4;
    return [data[i], data[i+1], data[i+2]];
  };
  return {
    size,
    flipY: s.flipY,
    riverAt_20_52: sample(20,52),
    riverAt_0_51: sample(0,51),
    grassAt_20_30: sample(20,30),
    riverAt_20_minus52: sample(20,-52),
  };
});
console.log(JSON.stringify(out));
await browser.close();
