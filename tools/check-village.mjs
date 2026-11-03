import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=800,500','--mute-audio'],
});
const page = await browser.newPage();
page.on('pageerror', e => console.log('[err]', String(e).slice(0,300)));
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 90000});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const out = await page.evaluate(() => {
  const d = window.__demo;
  const v = d.village;
  if (!v) return { none: true };
  return {
    children: v.children.length,
    items: v.children.map(c => ({
      pos: c.position.toArray().map(n => +n.toFixed(1)),
      meshes: c.children.length,
      vis: c.visible,
    })),
  };
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
