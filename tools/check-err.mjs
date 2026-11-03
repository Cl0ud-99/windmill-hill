import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1000,700','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
const errs = [];
page.on('pageerror', e => errs.push(String(e).slice(0,400)));
page.on('console', m => { if (m.type()==='error') errs.push('c:'+m.text().slice(0,300)); });
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 60000}).catch(e=>errs.push('nav:'+e.message));
let ready = false;
try { await page.waitForFunction('window.__ready === true', {timeout: 60000}); ready = true; } catch {}
console.log(JSON.stringify({ready, errs}, null, 1));
await browser.close();
