import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist','--window-size=1400,800','--hide-scrollbars','--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({width:1400,height:800});
const errs = [];
page.on('pageerror', e => errs.push(String(e).slice(0,300)));
page.on('console', m => { if (m.type()==='error' && !m.text().includes('404')) errs.push(m.text().slice(0,200)); });
await page.goto('http://localhost:5173/', {waitUntil:'networkidle2'});
await page.waitForFunction('window.__ready === true', {timeout:180000});
// 进入漫游再切人物
await page.mouse.click(700, 400);
await new Promise(r=>setTimeout(r,500));
await page.evaluate(() => { const d=window.__demo; d.camera.position.set(20,4,30); d.camera.lookAt(0,8,0); d.roam.setFromCamera(); });
await page.keyboard.press('v');
await new Promise(r=>setTimeout(r,1200));
await page.screenshot({path:'shots/avatar-1.png'});
const a = await page.evaluate(() => {
  const d = window.__demo;
  return {
    mode: d.avatar.root.visible,
    avatar: d.avatar.root.position.toArray().map(v=>+v.toFixed(2)),
    cam: d.camera.position.toArray().map(v=>+v.toFixed(2)),
  };
});
// 走两秒
await page.keyboard.down('w');
await new Promise(r=>setTimeout(r,2000));
await page.keyboard.up('w');
await new Promise(r=>setTimeout(r,300));
await page.screenshot({path:'shots/avatar-2.png'});
const b = await page.evaluate(() => {
  const d = window.__demo;
  return { avatar: d.avatar.root.position.toArray().map(v=>+v.toFixed(2)), cam: d.camera.position.toArray().map(v=>+v.toFixed(2)) };
});
// 正面特写：把相机放到人物前方
await page.evaluate(() => {
  const d = window.__demo;
  const p = d.avatar.root.position;
  d.third.enabled = false;
  d.camera.position.set(p.x + 1.6, p.y + 1.35, p.z + 2.4);
  d.camera.lookAt(p.x, p.y + 0.95, p.z);
  d.camera.fov = 40; d.camera.updateProjectionMatrix();
});
await new Promise(r=>setTimeout(r,600));
await page.screenshot({path:'shots/avatar-3.png'});
console.log(JSON.stringify({ a, b, errs }, null, 1));
await browser.close();
