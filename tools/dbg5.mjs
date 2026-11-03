import puppeteer from 'puppeteer-core';
import fs from 'fs';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=800,500','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:800,height:500});
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const dataUrl = await page.evaluate(() => {
  const s = window.__demo.splat;
  // 采样若干点
  const pts = [[6,15],[10,20],[12.6,27],[20,30],[15,11],[30,40]];
  const size = s.size, d = s.data;
  const samples = pts.map(([x,z]) => {
    const u = (x+210)/420, v = (z+210)/420;
    const ix = Math.min(size-1, Math.floor(u*size)), iy = Math.min(size-1, Math.floor(v*size));
    const i = (iy*size+ix)*4;
    return [x,z, d[i], d[i+1], d[i+2]];
  });
  return { url: s.canvas.toDataURL('image/png'), samples };
});
fs.writeFileSync('shots/splat.png', Buffer.from(dataUrl.url.split(',')[1], 'base64'));
console.log(JSON.stringify(dataUrl.samples));
await browser.close();
