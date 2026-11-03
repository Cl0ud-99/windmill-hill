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
  const col = [];
  for (let z = 30; z <= 70; z += 2) {
    const v = (z+210)/420;
    const ix = Math.floor(((20+210)/420)*size), iy = Math.floor(v*size);
    const i = (iy*size+ix)*4;
    col.push([z, data[i], data[i+1], data[i+2]]);
  }
  return { size, col };
});
console.log(JSON.stringify(out.col));
await browser.close();
