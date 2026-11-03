import puppeteer from 'puppeteer-core';
import fs from 'fs';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=600,400','--mute-audio'],
});
const page = await browser.newPage();
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 90000});
await page.waitForFunction('window.__ready === true', {timeout:120000});
const out = await page.evaluate(() => {
  const d = window.__demo;
  // 从任意 MAT.wood 网格上取贴图
  let woodTex = null, woodNrm = null;
  d.scene.traverse(o => {
    if (woodTex) return;
    if (o.isMesh && o.material && o.material.uniforms && o.material.uniforms.uTint) {
      const t = o.material.uniforms.uTint.value.getHexString();
      if (t === 'cabda6') {
        woodTex = o.material.uniforms.uMap.value;
        woodNrm = o.material.uniforms.uNormalMap.value;
      }
    }
  });
  return {
    found: !!woodTex,
    url: woodTex && woodTex.image && woodTex.image.toDataURL ? woodTex.image.toDataURL('image/png') : null,
    nurl: woodNrm && woodNrm.image && woodNrm.image.toDataURL ? woodNrm.image.toDataURL('image/png') : null,
    hasHeight: !!(woodTex && woodTex.userData && woodTex.userData.height),
  };
});
console.log(JSON.stringify({found: out.found, hasHeight: out.hasHeight}));
if (out.url) fs.writeFileSync('shots/tex-wood.png', Buffer.from(out.url.split(',')[1],'base64'));
if (out.nurl) fs.writeFileSync('shots/tex-woodn.png', Buffer.from(out.nurl.split(',')[1],'base64'));
await browser.close();
