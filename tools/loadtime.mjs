import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1600,900','--hide-scrollbars','--mute-audio','--disable-dev-shm-usage'],
  protocolTimeout: 300000,
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });
const t0 = Date.now();
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 180000 });
const tNav = Date.now();
await page.waitForFunction('window.__ready === true', { timeout: 180000 });
const tReady = Date.now();
console.log('domcontentloaded', tNav - t0, 'ms   ready', tReady - t0, 'ms');
await browser.close();
