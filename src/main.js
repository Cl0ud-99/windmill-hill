import * as THREE from 'three';
import { shared, setTime } from './core/materials.js';
import { buildSky } from './world/sky.js';
import { buildTerrain, buildSplatMap, buildFarHills, buildHeightTexture } from './world/terrain.js';
import { riverCenterZ, riverHalfWidth, terrainHeight, WATER_Y } from './world/layout.js';
import { initMatlib } from './world/matlib.js';
import { buildWindmill, buildMillHouse } from './world/buildings.js';
import { buildPost } from './post/post.js';
import {
  buildGrass, buildTrees, buildWildflowers, buildHydrangeas, makeSplatSampler, buildReeds,
} from './world/vegetation.js';
import { buildWall } from './world/walls.js';
import { buildAOMap, AO_REGION } from './world/ao.js';
import { buildPollen, buildButterflies, buildBirds } from './world/particles.js';
import { placeScenery, buildRiverStones } from './world/props.js';
import { buildWater } from './world/water.js';
import { RoamController, Cinematic, SHOTS } from './camera/controllers.js';
import { ThirdPersonController } from './camera/thirdperson.js';
import { buildAvatar } from './character/avatar.js';
import { UI } from './ui.js';
import { Ambience } from './audio.js';

const canvas = document.getElementById('scene');
const ui = new UI();
const audio = new Ambience();

const renderer = new THREE.WebGLRenderer({
  canvas, antialias: true, powerPreference: 'high-performance', stencil: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.15, 8000);
camera.position.set(26, 6, 74);
camera.lookAt(0, 11, 0);

const roam = new RoamController(camera, canvas);
const cine = new Cinematic(camera);
let mode = 'intro';
let post = null;
let mill, house, water, sky, terrain, grass, trees, wall, scenery;
let avatar = null;
let third = null;
let pollen = null, butterflies = null, birds = null;

const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

/* ============================================================
   初始化
   ============================================================ */
async function init() {
  ui.progress(0.04, '正在铺开草甸…');
  await frame();

  /* 光照 */
  const sun = new THREE.DirectionalLight(0xffffff, 2.0);
  // 阴影相机收紧到核心活动区：190m → 110m，texel 4.6cm → 2.7cm
  const SHADOW_C = new THREE.Vector3(6, 4, 26);
  const SHADOW_R = 55;
  sun.position.copy(SHADOW_C).addScaledVector(shared.uSunDir.value, 170);
  sun.target.position.copy(SHADOW_C);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const sc = sun.shadow.camera;
  sc.left = -SHADOW_R; sc.right = SHADOW_R;
  sc.top = SHADOW_R; sc.bottom = -SHADOW_R;
  sc.near = 30; sc.far = 380;
  sc.updateProjectionMatrix();
  sun.shadow.bias = -0.00022;
  sun.shadow.normalBias = 0.035;
  scene.add(sun, sun.target);

  /* 天空 */
  sky = buildSky();
  scene.add(sky.mesh);
  ui.progress(0.12, '正在堆积云层…');
  await frame();

  /* 地形 */
  const splat = buildSplatMap(2048);
  terrain = buildTerrain(splat.texture);
  scene.add(terrain.mesh);
  scene.add(buildFarHills());
  ui.progress(0.34, '正在筑起风车…');
  await frame();

  /* 建筑 */
  initMatlib();
  mill = buildWindmill();
  scene.add(mill.root);
  house = buildMillHouse();
  scene.add(house.root);
  ui.progress(0.46, '正在砌石墙…');
  await frame();

  /* 石墙与道具 */
  const sampleSplat = makeSplatSampler(splat, splat.size);
  wall = buildWall(sampleSplat);
  scene.add(wall);
  scenery = placeScenery(scene);
  ui.progress(0.58, '正在种下树林…');
  await frame();

  ui.progress(0.66, '正在种树…');
  await frame();

  const treeList = [
    { x: -19, z: -9, type: 0, scale: 1.35, rot: 0.6 },
    { x: -14, z: -16, type: 0, scale: 1.12, rot: 2.1 },
    { x: -27, z: -2, type: 1, scale: 1.15, rot: 1.0 },
    { x: 9, z: -13, type: 1, scale: 1.2, rot: 3.4 },
    { x: 17, z: -7, type: 0, scale: 1.15, rot: 0.2 },
    { x: 25, z: 1, type: 1, scale: 1.0, rot: 2.6 },
    { x: -25, z: 8, type: 0, scale: 1.2, rot: 4.1 },
    { x: -15, z: 18, type: 2, scale: 1.15, rot: 1.7 },
    { x: 30, z: 19, type: 0, scale: 1.3, rot: 5.0 },
    { x: 38, z: 31, type: 0, scale: 1.1, rot: 2.2 },
    { x: -30, z: 27, type: 1, scale: 1.05, rot: 0.9 },
    { x: -40, z: 36, type: 0, scale: 1.25, rot: 3.0 },
    { x: -22, z: 40, type: 0, scale: 1.15, rot: 1.4 },
    { x: 27, z: 40, type: 0, scale: 1.2, rot: 4.6 },
    { x: 44, z: 40, type: 1, scale: 1.1, rot: 2.9 },
    { x: 56, z: 46, type: 0, scale: 1.3, rot: 0.4 },
    { x: -54, z: 54, type: 1, scale: 1.2, rot: 5.4 },
    { x: 58, z: 74, type: 0, scale: 1.3, rot: 3.9 },
    { x: 62, z: 24, type: 0, scale: 1.2, rot: 1.1 },
    { x: -46, z: 16, type: 1, scale: 1.1, rot: 2.4 },
  ];
  {
    // 成簇分布：林带 + 空地，避免均匀撒点
    let s = 12345;
    const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
    const clusters = [
      [-72, -34, 30, 26], [46, -62, 34, 22], [96, 34, 26, 20], [-104, 62, 34, 24],
      [74, 96, 30, 22], [-44, 104, 28, 18], [128, -18, 30, 20], [-128, -76, 34, 22],
      [-16, -76, 26, 16], [24, 120, 30, 18], [-96, 118, 30, 18], [140, 76, 34, 22],
    ];
    for (const [cx, cz, rad, n] of clusters) {
      for (let i = 0; i < n; i++) {
        const a = rnd() * Math.PI * 2;
        const r = Math.pow(rnd(), 0.65) * rad;
        const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
        if (Math.abs(x) > 195 || Math.abs(z) > 195) continue;
        treeList.push({
          x, z, type: rnd() > 0.4 ? 0 : 1,
          scale: 0.8 + rnd() * 0.7, rot: rnd() * 6.28,
          stretch: 0.88 + rnd() * 0.3,
        });
      }
    }
    // 零散孤树
    for (let i = 0; i < 46; i++) {
      const a = rnd() * Math.PI * 2;
      const r = 58 + rnd() * 118;
      treeList.push({
        x: 6 + Math.cos(a) * r, z: 26 + Math.sin(a) * r,
        type: rnd() > 0.5 ? 0 : 1, scale: 0.7 + rnd() * 0.6,
        rot: rnd() * 6.28, stretch: 0.9 + rnd() * 0.3,
      });
    }
  }
  trees = buildTrees(sampleSplat, treeList);
  scene.add(trees);

  /* 烘焙 AO：把建筑、石墙、树根、道具的接触阴影烘进贴图 */
  const ao = buildAOMap({
    trees: treeList,
    props: [
      { x: 13.3, z: 9.6, r: 1.1 }, { x: 18.9, z: 13.4, r: 1.1 },
      { x: 11.1, z: 10.6, r: 0.7 }, { x: 14.6, z: 12.9, r: 0.6 },
      { x: 21.0, z: 59.0, r: 1.8 }, { x: 17.6, z: 60.4, r: 1.0 },
      { x: 2.9, z: 5.3, r: 0.7 }, { x: 3.7, z: 4.7, r: 0.7 },
      { x: 7.42, z: 21.2, r: 1.7 }, { x: -13.2, z: 6.5, r: 1.3 },
      { x: 12.6, z: 27.2, r: 1.0 }, { x: 10.5, z: 27.0, r: 0.8 }, { x: 14.7, z: 27.0, r: 0.8 },
      { x: 11.7, z: 13.4, r: 0.6 }, { x: 19.9, z: 8.3, r: 0.6 },
    ],
  });
  terrain.material.uniforms.uAO.value = ao.texture;
  terrain.material.uniforms.uAORegion.value.set(AO_REGION.cx, AO_REGION.cz, AO_REGION.size, 0);

  /* 植被 */
  ui.progress(0.74, '正在长草…');
  await frame();
  grass = buildGrass(sampleSplat, { count: 62000, height: 0.38, blades: 6, seed: 7, ao: ao.sample });
  scene.add(grass);
  scene.add(buildGrass(sampleSplat, {
    count: 26000, radius: 150, height: 0.44, blades: 5, seed: 19, cx: 8, cz: 26, ao: ao.sample,
  }));
  scene.add(buildGrass(sampleSplat, {
    count: 7000, radius: 18, cx: 40, cz: 62, height: 0.85, blades: 6, seed: 33, tall: true, ao: ao.sample,
  }));
  scene.add(buildWildflowers(sampleSplat, 11000, 21, ao.sample));
  ui.progress(0.86, '正在开花…');
  await frame();

  scene.add(buildHydrangeas([
    { x: 12.0, z: 13.4, scale: 1.1, hue: 0.63 },
    { x: 13.4, z: 14.6, scale: 0.9, hue: 0.68 },
    { x: 18.8, z: 13.2, scale: 1.05, hue: 0.60 },
    { x: 20.2, z: 11.8, scale: 0.85, hue: 0.66 },
    { x: 17.2, z: 8.2, scale: 1.0, hue: 0.64 },
    { x: 15.6, z: 7.4, scale: 0.8, hue: 0.70 },
    { x: 21.6, z: 9.6, scale: 0.95, hue: 0.58 },
    { x: 11.4, z: 8.6, scale: 0.85, hue: 0.62 },
    { x: -2.2, z: 6.2, scale: 0.9, hue: 0.65 },
    { x: 5.6, z: 8.8, scale: 0.8, hue: 0.61 },
  ]));
  scene.add(buildRiverStones(1200));
  scene.add(buildReeds(5200, 55, ao.sample));
  ui.progress(0.92, '正在引水入河…');
  await frame();

  // 氛围粒子
  pollen = buildPollen(1500);
  scene.add(pollen);
  butterflies = buildButterflies([
    { x: 13, z: 13 }, { x: 18, z: 12 }, { x: 16, z: 9 },
    { x: 11.5, z: 9.5 }, { x: 20, z: 10.5 }, { x: 9, z: 12 },
  ], 8);
  scene.add(butterflies);
  birds = buildBirds(6);
  scene.add(birds);

  const heightTex = buildHeightTexture(512);
  water = buildWater(heightTex);
  scene.add(water.river, water.stream);

  // 人物
  avatar = buildAvatar();
  avatar.root.visible = false;
  scene.add(avatar.root);
  third = new ThirdPersonController(camera, canvas, avatar);
  // 树干碰撞体
  third.obstacles = treeList.map((t) => ({
    x: t.x, z: t.z, r: 0.55 * (t.scale ?? 1),
  }));

  post = buildPost(renderer, scene, camera);
  ui.progress(1.0, '完成');
  await frame();

  ui.hideLoader();
  setTimeout(() => ui.showTitle(4600), 400);
  enterIntro();
}

/* ============================================================
   模式切换
   ============================================================ */
function enterIntro() {
  mode = 'intro';
  ui.setMode('cine');
  ui.showHint(true, '点击画面跳过 · <b>C</b> 播放完整电影镜头');
  cine.onShotChange = (i) => ui.setShot(i, SHOTS[i].name, SHOTS[i].jp);
  cine.onEnd = () => enterRoam();
  cine.play(0, SHOTS.length - 1);
}

function enterRoam() {
  cine.stop();
  if (avatar) avatar.root.visible = false;
  if (third) third.enabled = false;
  mode = 'roam';
  ui.setMode('roam');
  ui.showHint(true, '点击画面进入漫游 · <b>V</b> 人物视角 · <b>C</b> 电影镜头');
  roam.setFromCamera();
  camera.fov = 52;
  camera.updateProjectionMatrix();
  const gy = Math.max(terrainHeight(camera.position.x, camera.position.z), WATER_Y) + 1.65;
  if (camera.position.y > gy + 1.2) roam.descendTo(gy);
  roam.enabled = true;
}

function enterThird() {
  if (!third || !avatar) return;
  cine.stop();
  roam.enabled = false;
  // 从当前相机位置把人放到地面
  const p = camera.position.clone();
  avatar.root.visible = true;
  third.syncFromCamera(camera);
  third.placeAt(p.x, p.z);
  third.enabled = true;
  mode = 'third';
  ui.setMode('third');
  ui.showHint(true, '点击画面锁定鼠标 · <b>V</b> 回到第一人称 · <b>C</b> 电影镜头');
  document.getElementById('hintClick').classList.add('show');
}

function toggleView() {
  if (mode === 'third') enterRoam();
  else if (mode === 'roam') enterThird();
}

function enterCine() {
  roam.enabled = false;
  if (third) third.enabled = false;
  if (avatar) avatar.root.visible = false;
  roam.unlock();
  mode = 'cine';
  ui.setMode('cine');
  ui.showHint(false);
  cine.onShotChange = (i) => ui.setShot(i, SHOTS[i].name, SHOTS[i].jp);
  cine.onEnd = () => enterRoam();
  cine.play(0, SHOTS.length - 1);
}

/* ============================================================
   输入
   ============================================================ */
canvas.addEventListener('pointerdown', () => {
  audio.start();
  if (mode === 'intro') { enterRoam(); return; }
  if (mode === 'roam') roam.lock();
  if (mode === 'third') roam.lock();
});
roam.onLockChange = (locked) => {
  ui.showHint(!locked && mode === 'roam');
};
addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'c') {
    audio.start();
    if (mode === 'cine' || mode === 'intro') enterRoam(); else enterCine();
  }
  if (k === 'v') { audio.start(); toggleView(); }
  if (k === 'h') ui.toggleHud();
  if (k === 'm') audio.start();
});

/* ============================================================
   循环
   ============================================================ */
const clock = new THREE.Clock();
const _sunWorld = new THREE.Vector3();
const _camDir = new THREE.Vector3();
let frames = 0;

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  setTime(t);

  if (mode === 'cine' || mode === 'intro') cine.update(dt);
  else if (mode === 'roam') roam.update(dt);
  else if (mode === 'third') third.update(dt);

  if (mill) mill.wheel.rotation.z -= dt * 0.42;
  if (sky) sky.mesh.position.copy(camera.position);
  if (pollen) pollen.material.uniforms.uCam.value.copy(camera.position);
  if (butterflies) butterflies.userData.update(dt);
  if (birds) birds.userData.update(dt);

  if (post && water) {
    _sunWorld.copy(camera.position).addScaledVector(shared.uSunDir.value, 900);
    _sunWorld.project(camera);
    camera.getWorldDirection(_camDir);
    const facing = _camDir.dot(shared.uSunDir.value);
    post.rays.sun.set(
      THREE.MathUtils.clamp(_sunWorld.x * 0.5 + 0.5, 0.05, 0.95),
      THREE.MathUtils.clamp(_sunWorld.y * 0.5 + 0.5, 0.05, 0.95)
    );
    post.rays.material.uniforms.uIntensity.value = THREE.MathUtils.clamp(facing * 1.6, 0, 1) * 0.85;
    post.grade.uniforms.uRayStrength.value = THREE.MathUtils.clamp(facing * 1.6, 0, 1) * 0.42;
    // 电影模式下开启景深，焦点跟着镜头注视点
    const wantDof = (mode === 'cine' || mode === 'intro');
    post.bokeh.enabled = wantDof;
    if (wantDof) {
      const f = camera.position.distanceTo(cine._l);
      post.bokeh.uniforms.focus.value = f;
      post.bokeh.uniforms.aperture.value = 0.0026;
      post.bokeh.uniforms.maxblur.value = 0.0052;
    }
    post.grade.uniforms.uTime.value = t;
    post.grade.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);

    water.reflection.update(renderer, scene, camera, water.meshes);
    post.composer.render();

    const d = Math.abs(camera.position.z - riverCenterZ(camera.position.x)) - riverHalfWidth(camera.position.x);
    audio.update(dt, camera.position, Math.max(0, d));
  }

  frames++;
  if (frames === 3) window.__ready = true;
}

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  post?.composer.setSize(window.innerWidth, window.innerHeight);
});

/* ============================================================
   调试 API
   ============================================================ */
window.__demo = {
  THREE, scene, camera, renderer, cine, ui, roam, SHOTS,
  get terrain() { return terrain; }, get sky() { return sky; },
  get water() { return water; }, get post() { return post; },
  get mill() { return mill; }, get house() { return house; },
  get grass() { return grass; }, get trees() { return trees; },
  get wall() { return wall; }, get scenery() { return scenery; },
  get avatar() { return avatar; }, get third() { return third; },
  get pollen() { return pollen; }, get butterflies() { return butterflies; }, get birds() { return birds; },
  enterThird, enterRoam,
  setView(p, l, fov = 34) {
    mode = 'debug';
    ui.titlecard?.classList.remove('show');
    if (ui.titlecard) ui.titlecard.style.display = 'none';
    ui.hideLoader();
    roam.enabled = false;
    cine.stop();
    camera.position.set(p[0], p[1], p[2]);
    camera.lookAt(l[0], l[1], l[2]);
    camera.fov = fov;
    camera.updateProjectionMatrix();
    ui.setMode('roam');
    ui.showHint(false);
  },
  shot(i, t = 0) {
    mode = 'debug';
    ui.titlecard?.classList.remove('show');
    if (ui.titlecard) ui.titlecard.style.display = 'none';
    ui.hideLoader();
    roam.enabled = false;
    cine.jump(i, t);
  },
};

init().then(() => tick());
