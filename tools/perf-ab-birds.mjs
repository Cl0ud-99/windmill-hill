import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1600,900','--hide-scrollbars','--mute-audio','--disable-dev-shm-usage'],
  protocolTimeout: 240000,
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction('window.__ready === true', { timeout: 180000 });
await page.evaluate(() => window.__demo.setView([26, 6, 74], [0, 11, 0], 34));
await new Promise((r) => setTimeout(r, 2000));

const sample = async (label) => {
  const ms = await page.evaluate(() => new Promise((res) => {
    const t = []; let last = performance.now(); let n = 0;
    const loop = () => {
      const now = performance.now(); t.push(now - last); last = now;
      if (++n < 180) requestAnimationFrame(loop); else res(t);
    };
    requestAnimationFrame(loop);
  }));
  ms.sort((a, b) => a - b);
  console.log(label, 'median', ms[Math.floor(ms.length / 2)].toFixed(2), 'p90', ms[Math.floor(ms.length * 0.9)].toFixed(2));
};

await sample('with trees ');
await page.evaluate(() => { window.__demo.trees.visible = false; });
await new Promise((r) => setTimeout(r, 800));
await sample('no trees   ');
await browser.close();
