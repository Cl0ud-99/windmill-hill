import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1280,720','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1280,height:720});
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0,200)));
page.on('console', m => { if (m.type()==='error' && !m.text().includes('404')) errors.push('console:'+m.text().slice(0,200)); });
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
await new Promise(r=>setTimeout(r,2500));
const s1 = await page.evaluate(() => ({ mode: window.__demo.cine.playing, shot: window.__demo.cine.shot, cam: window.__demo.camera.position.toArray().map(v=>+v.toFixed(1)) }));
// 点击进入漫游
await page.mouse.click(640, 360);
await new Promise(r=>setTimeout(r,800));
const s2 = await page.evaluate(() => ({ playing: window.__demo.cine.playing, roam: window.__demo.roam.enabled, cam: window.__demo.camera.position.toArray().map(v=>+v.toFixed(1)) }));
// 按 C 播放电影
await page.keyboard.press('c');
await new Promise(r=>setTimeout(r,900));
const s3 = await page.evaluate(() => ({ playing: window.__demo.cine.playing, shot: window.__demo.cine.shot }));
// 按 H 隐藏 HUD
await page.keyboard.press('h');
await new Promise(r=>setTimeout(r,300));
const s4 = await page.evaluate(() => document.getElementById('hud').className);
// 模拟 W 前进
await page.keyboard.press('c');
await new Promise(r=>setTimeout(r,300));
await page.keyboard.down('w');
await new Promise(r=>setTimeout(r,700));
await page.keyboard.up('w');
const s5 = await page.evaluate(() => window.__demo.camera.position.toArray().map(v=>+v.toFixed(2)));
console.log(JSON.stringify({ s1, s2, s3, s4, s5, errors }, null, 1));
await page.screenshot({path:'shots/smoke.png'});
await browser.close();
