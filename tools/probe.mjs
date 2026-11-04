import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--disable-dev-shm-usage'],
  protocolTimeout: 240000,
});
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 450 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 120000 });
await page.waitForFunction('window.__ready === true', { timeout: 180000 });
const grid = await page.evaluate(() => {
  const th = window.__demo.terrainHeight;
  const out = [];
  for (let z = 24; z <= 46; z += 2) {
    const row = [];
    for (let x = -18; x <= 34; x += 4) row.push(+th(x, z).toFixed(2));
    out.push([z, row]);
  }
  return out;
});
console.log('      x=' + Array.from({length: 14}, (_, i) => String(-18 + i * 4).padStart(6)).join(''));
for (const [z, row] of grid) console.log('z=' + String(z).padStart(3) + ' ' + row.map((v) => String(v).padStart(6)).join(''));
await browser.close();
