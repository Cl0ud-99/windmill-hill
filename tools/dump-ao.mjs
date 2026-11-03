import puppeteer from 'puppeteer-core';
import fs from 'fs';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=700,500','--mute-audio'],
});
const page = await browser.newPage();
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
const out = await page.evaluate(() => {
  const d = window.__demo;
  const tex = d.terrain.material.uniforms.uAO.value;
  const img = tex.image;
  let url = null;
  if (img && img.toDataURL) url = img.toDataURL('image/png');
  const sp = d.terrain.material.uniforms.uSplat.value;
  return {
    aoType: tex.constructor.name,
    aoSize: img ? [img.width, img.height] : null,
    url,
    splatUrl: sp.image && sp.image.toDataURL ? sp.image.toDataURL('image/png') : null,
  };
});
if (out.url) fs.writeFileSync('shots/ao-map.png', Buffer.from(out.url.split(',')[1],'base64'));
if (out.splatUrl) fs.writeFileSync('shots/splat2.png', Buffer.from(out.splatUrl.split(',')[1],'base64'));
console.log(out.aoType, out.aoSize);
await browser.close();
