import * as THREE from 'three';
import { shared, setTime } from './core/materials.js';
import { fbm, smoothstep } from './core/noise.js';
import { buildSky } from './world/sky.js';
import { buildTerrain, buildSplatMap, buildFarHills, buildHeightTexture } from './world/terrain.js';
import {
  riverCenterZ, riverHalfWidth, terrainHeight, WATER_Y, PASTURE, inPasture, pastureClearance,
  HALF, inRiverChannel, nearestOnPolyline, PATH_MAIN, PATH_GARDEN,
} from './world/layout.js';
import { initMatlib } from './world/matlib.js';
import { buildWindmill, buildMillHouse, buildSmallWindmill } from './world/buildings.js';
import { buildPost } from './post/post.js';
import {
  buildGrass, buildTrees, buildWildflowers, buildHydrangeas, makeSplatSampler, buildReeds, buildSeedGrass,
} from './world/vegetation.js';
import { buildWall } from './world/walls.js';
import { buildAOMap, AO_REGION } from './world/ao.js';
import { buildPollen, buildButterflies } from './world/particles.js';
import {
  makeGull, makeCrow, makeSwallow, makeHawk,
  makeCrane, makeMallard, makeSparrow, fly,
} from './world/birds.js';
import { placeScenery, buildRiverStones } from './world/props.js';
import { placeVillage } from './world/village.js';
import { buildWater } from './world/water.js';
import { RoamController, Cinematic, SHOTS } from './camera/controllers.js';
import { ThirdPersonController } from './camera/thirdperson.js';
import { buildAvatar } from './character/avatar.js';
import {
  buildCartoonCat, buildCartoonDog, buildCartoonChicken, buildCartoonDuck,
  buildCartoonCow, buildCartoonSheep,
} from './character/animals.js';
import { buildPasture, buildHayBales } from './world/pasture.js';
import { UI } from './ui.js';
import { Ambience } from './audio.js';

const canvas = document.getElementById('scene');
const ui = new UI();
const audio = new Ambience();

const renderer = new THREE.WebGLRenderer({
  canvas, antialias: true, powerPreference: 'high-performance', stencil: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const veg = new THREE.Group();
scene.add(veg);
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.15, 8000);
camera.position.set(26, 6, 74);
camera.lookAt(0, 11, 0);

const roam = new RoamController(camera, canvas);
const cine = new Cinematic(camera);
let mode = 'intro';
let post = null;
let mill, house, smallMill, water, sky, terrain, grass, trees, wall, scenery, village;
let avatar = null;
let third = null;
let pollen = null, butterflies = null;
let flock = [];
let pets = [];

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
  sun.shadow.radius = 4.5;   // Vogel 盘半径（texel），让投影有柔和半影
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
  smallMill = buildSmallWindmill();
  smallMill.root.position.set(13.2, terrainHeight(13.2, 3.4), 3.4);
  smallMill.root.rotation.y = 0.42;
  scene.add(smallMill.root);
  ui.progress(0.46, '正在砌石墙…');
  await frame();

  /* 石墙与道具 */
  const sampleSplat = makeSplatSampler(splat, splat.size);
  wall = buildWall(sampleSplat);
  scene.add(wall);
  scenery = placeScenery(scene);
  village = placeVillage(scene);
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
    { x: 37, z: 28, type: 0, scale: 1.2, rot: 4.6 },
    { x: 44, z: 40, type: 1, scale: 1.1, rot: 2.9 },
    { x: 56, z: 46, type: 0, scale: 1.3, rot: 0.4 },
    { x: -54, z: 54, type: 1, scale: 1.2, rot: 5.4 },
    { x: 58, z: 74, type: 0, scale: 1.3, rot: 3.9 },
    { x: 62, z: 24, type: 0, scale: 1.2, rot: 1.1 },
    { x: -46, z: 16, type: 1, scale: 1.1, rot: 2.4 },
  ];
  {
    let s = 12345;
    const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };

    /* 全场统一密度撒点。
       以前是「围着风车摆一圈林带」，结果中心密、外圈稀，
       中间还留出几块突兀的空地。改成：在整块场地上均匀撒候选点，
       用两层噪声决定「这里是不是林子」，于是林带和空地都自然长出来，
       而且从中心到边缘的期望密度完全一致。 */
    const forest = (x, z) => {
      const big = fbm(x * 0.0040 + 11.3, z * 0.0040 - 5.1, 4);   // 大尺度林带
      const mid = fbm(x * 0.0165 - 3.7, z * 0.0165 + 7.2, 3);    // 树丛边缘
      return big * 0.70 + mid * 0.30;
    };

    // 固定撒点次数（而不是「种够多少棵」），
    // 这样外圈减半不会反过来把内圈填得更密
    const ATTEMPTS = 15000;
    for (let i = 0; i < ATTEMPTS; i++) {
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * (HALF - 26);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r + 12;

      if (Math.abs(x) > HALF - 24 || Math.abs(z) > HALF - 24) continue;
      // 软阈值：噪声低的地方变稀，但不会出现整片秃地
      const p = 0.42 + 0.58 * smoothstep(0.40, 0.58, forest(x, z));
      if (rnd() > p) continue;
      // 外圈随机砍到原来的 1/4：逐棵独立掷骰子，所以会砍出斑驳的疏密，
      // 而不是整体均匀变稀。170→240m 渐变过渡，避免出现一圈明显的密度边界
      const outer = smoothstep(170, 240, r);
      if (rnd() < outer * 0.75) continue;
      if (inRiverChannel(x, z, 1.5)) continue;
      if (inPasture(x, z, 2.5)) continue;
      // 村子周围留出场地（半径别开太大，否则风车会孤零零站在空地上）
      if (Math.hypot(x, z) < 30) continue;
      if (Math.hypot(x + 8.3, z - 1.5) < 11) continue;
      if (Math.hypot(x - 13.2, z - 3.4) < 8) continue;
      if (Math.hypot(x - 15.6, z - 11.6) < 11) continue;
      if (Math.hypot(x + 15, z - 8.5) < 6) continue;
      // 土路两侧留出走廊，别把路封死
      if (nearestOnPolyline(x, z, PATH_MAIN).dist < 5.0) continue;
      if (nearestOnPolyline(x, z, PATH_GARDEN).dist < 2.8) continue;
      // 漫游落地点周围留一块空地，否则玩家一睁眼就在树冠里
      if (Math.hypot(x - 26, z - 84) < 20) continue;
      if (Math.hypot(x - 12, z - 30) < 10) continue;

      // 三档细节：近处全建模、中景低模、200m 外只剩一个剪影
      const lod = r < 85 ? 0 : (r < 200 ? 1 : 2);
      treeList.push({
        x, z,
        type: rnd() > 0.4 ? 0 : 1,
        scale: (lod ? 0.9 : 0.8) + rnd() * 0.7,
        rot: rnd() * 6.28,
        stretch: 0.88 + rnd() * 0.3,
        lod,
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
      { x: 13.2, z: 3.4, r: 3.0 },
      { x: 29.5, z: 37.5, r: 6.0 }, { x: -20.0, z: 33.0, r: 4.5 },
      { x: -15.0, z: 8.5, r: 3.0 }, { x: 8.2, z: 13.8, r: 1.6 },
      { x: 34.0, z: 33.5, r: 1.8 }, { x: 32.2, z: 35.4, r: 1.5 },
      { x: 11.7, z: 13.4, r: 0.6 }, { x: 19.9, z: 8.3, r: 0.6 },
    ],
  });
  terrain.material.uniforms.uAO.value = ao.texture;
  terrain.material.uniforms.uAORegion.value.set(AO_REGION.cx, AO_REGION.cz, AO_REGION.size, 0);

  /* 植被（统一挂在 veg 组下，预览模型时可以整体隐藏） */
  ui.progress(0.74, '正在长草…');
  await frame();
  // 牧场里被啃短：草矮一半，穗草和野花基本没有
  const grazed = (x, z) => (inPasture(x, z) ? 0.50 : 1);
  const inYard = (x, z) => inPasture(x, z, 0.4);
  grass = buildGrass(sampleSplat, {
    count: 62000, height: 0.38, blades: 6, seed: 7, ao: ao.sample, grazeScale: grazed,
  });
  veg.add(grass);
  // 中景：保持核心区的密度，别因为扩场把身边踩稀了
  veg.add(buildGrass(sampleSplat, {
    count: 28000, radius: 150, height: 0.44, blades: 5, seed: 19, cx: 8, cz: 26,
    ao: ao.sample, grazeScale: grazed,
  }));
  // 外圈：一路铺到 300m
  veg.add(buildGrass(sampleSplat, {
    count: 38000, radius: 300, height: 0.46, blades: 4, seed: 47, cx: 0, cz: 20,
    ao: ao.sample, grazeScale: grazed,
  }));
  // 最外圈：铺满整个场地，稀一点，远看只是给地面加一层绒
  veg.add(buildGrass(sampleSplat, {
    count: 18000, radius: 420, height: 0.52, blades: 3, seed: 63, cx: 0, cz: 10,
    ao: ao.sample, grazeScale: grazed,
  }));
  veg.add(buildGrass(sampleSplat, {
    count: 7000, radius: 18, cx: 40, cz: 62, height: 0.85, blades: 6, seed: 33, tall: true, ao: ao.sample,
  }));
  veg.add(buildWildflowers(sampleSplat, 7500, 21, ao.sample, { skip: inYard }));
  veg.add(buildSeedGrass(sampleSplat, 5000, 91, ao.sample, { skip: inYard }));
  ui.progress(0.86, '正在开花…');
  await frame();

  veg.add(buildHydrangeas([
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
  veg.add(buildReeds(5200, 55, ao.sample));
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
  // 造型确认：?birds=1 时把四种鸟并排挂在空中
  const birdsPreview = new URLSearchParams(location.search).get('birds') === '1';
  if (birdsPreview) {
    const mk = [makeGull, makeCrow, makeSwallow, makeHawk, makeCrane, makeMallard, makeSparrow];
    const nm = ['海鸥', '乌鸦', '燕子', '鹰', '灰鹤', '绿头鸭', '麻雀'];
    mk.forEach((f, i) => {
      const b = f();
      b.scale.setScalar(1.0);
      b.position.set(-15.0 + i * 5.0, 40, -14);   // 背对太阳，天更蓝，剪影看得清
      b.rotation.y = 0;                           // 面向镜头
      b.userData.rig.wr.rotation.z = 0.34;
      b.userData.rig.wl.rotation.z = -0.34;
      b.userData.name = nm[i];
      scene.add(b);
      flock.push(b);
    });
  }

  // 天空里的鸟：七种，各有活动范围、巡航速度和转弯半径
  if (!birdsPreview) {
    const plan = [
      { mk: makeGull, n: 6, y: 27, cx: 0, cz: 33, range: 45, speed: 9.0, turn: 0.55, span: 1.5, bias: 0.62 },
      { mk: makeCrow, n: 4, y: 23, cx: 20, cz: 15, range: 38, speed: 8.2, turn: 0.95, span: 1.04, bias: 0.42 },
      { mk: makeSwallow, n: 8, y: 17, cx: 9, cz: 34, range: 34, speed: 12.0, turn: 1.90, span: 0.96, bias: 0.30 },
      { mk: makeHawk, n: 3, y: 39, cx: 2, cz: 27, range: 70, speed: 7.0, turn: 0.32, span: 1.8, bias: 0.90 },
      // 鹤：共用一个圆心和半径，只错开起始角度，排成一条线慢慢绕
      { mk: makeCrane, n: 5, y: 54, cx: 2, cz: 28, range: 120, speed: 12.0, turn: 0.26, span: 2.4, bias: 1.0, orbit: true },
      { mk: makeMallard, n: 5, y: 21, cx: 14, cz: 31, range: 44, speed: 14.0, turn: 0.60, span: 0.86, bias: 0.20 },
      { mk: makeSparrow, n: 14, y: 9, cx: 4, cz: 25, range: 16, speed: 7.0, turn: 2.60, span: 0.28, bias: 0.30 },
    ];
    for (const p of plan) {
      for (let i = 0; i < p.n; i++) {
        const b = p.mk();
        const sc = (p.span / b.userData.span) * (0.92 + Math.random() * 0.16);
        b.scale.setScalar(sc);
        fly(b, {
          x: p.cx + (p.orbit ? 0 : (Math.random() - 0.5) * p.range * 0.8),
          y: p.y + (p.orbit ? 0 : (Math.random() - 0.5) * 8),
          z: p.cz + (p.orbit ? 0 : (Math.random() - 0.5) * p.range * 0.8),
          range: p.range,
          speed: p.speed * (0.92 + Math.random() * 0.16),
          turn: p.turn,
          circleR: p.speed / p.turn,
          circleBias: p.bias,
          yMin: Math.max(4.5, p.y - 10),   // 别让麻雀一头扎进地里
          yMax: p.y + 12,
          orbit: p.orbit ? i * 0.105 : undefined,
          cx: p.cx, cz: p.cz,
          dir: 1,
        });
        scene.add(b);
        flock.push(b);
      }
    }
  }

  const heightTex = buildHeightTexture(512);
  water = buildWater(heightTex);
  scene.add(water.river);

  // 人物
  avatar = buildAvatar();
  avatar.root.visible = false;
  scene.add(avatar.root);
  third = new ThirdPersonController(camera, canvas, avatar);
  // 树干碰撞体
  third.obstacles = treeList.map((t) => ({
    x: t.x, z: t.z, r: 0.55 * (t.scale ?? 1),
  }));

  // 动物预览（仅 ?pets=1 时出现，确认造型后才放进正式场景）
  if (new URLSearchParams(location.search).get('pets') === '1') {
    veg.visible = false;   // 预览时清掉植被，方便看造型
    const px = 0.0, pz = 5.2;   // 风车台基上，地面是平的
    const specs = [
      ['cat', buildCartoonCat, -1.30, 0.12],
      ['dog', buildCartoonDog, -0.44, -0.08],
      ['chicken', buildCartoonChicken, 0.44, 0.16],
      ['duck', buildCartoonDuck, 1.30, -0.14],
    ];
    for (const [name, build, dx, ry] of specs) {
      const a = build({ wander: false });
      const x = px + dx;
      a.position.set(x, terrainHeight(x, pz), pz);
      a.rotation.y = ry;
      a.userData.home = { x, z: pz };
      a.userData.ground = terrainHeight;
      a.userData.name = name;
      a.userData.height = a.userData.height || 0.5;
      scene.add(a);
      pets.push(a);
    }
  }

  // 牧场与牲畜（默认开启；?farm=0 可关掉）
  if (new URLSearchParams(location.search).get('farm') !== '0') {
    scene.add(buildPasture(PASTURE, { gapAt: [11.4, 33.2], gapW: 1.4 }));
    scene.add(buildHayBales(-8.6, 32.9, 0.35));

    const spawn = (build, name, x, z, ry, r) => {
      const a = build({ radius: r });
      a.userData.name = name;
      a.position.set(x, terrainHeight(x, z), z);
      a.rotation.y = ry;
      a.userData.home = { x, z };
      a.userData.ground = terrainHeight;
      a.userData.radius = r;
      // 不许越过围栏
      a.userData.canStand = (px, pz) => pastureClearance(px, pz) > 0.85;
      scene.add(a);
      pets.push(a);
      return a;
    };
    // 两头牛
    spawn(buildCartoonCow, 'cow-a', -3.0, 33.6, 0.75, 3.4);
    spawn(buildCartoonCow, 'cow-b', 5.0, 36.4, -1.05, 3.0);
    // 四只羊，聚在西南角
    spawn(buildCartoonSheep, 'sheep-a', -8.4, 33.4, 1.9, 1.9);
    spawn(buildCartoonSheep, 'sheep-b', -6.6, 34.2, 2.4, 1.7);
    spawn(buildCartoonSheep, 'sheep-c', -4.8, 33.3, 1.4, 1.8);
    spawn(buildCartoonSheep, 'sheep-d', -7.6, 35.4, 2.1, 1.6);
  }

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

  if (smallMill) smallMill.sails.rotation.z -= dt * 0.22;
  if (sky) sky.mesh.position.copy(camera.position);
  if (pollen) pollen.material.uniforms.uCam.value.copy(camera.position);
  if (butterflies) butterflies.userData.update(dt);
  for (const b of flock) if (b.userData.update) b.userData.update(dt);
  for (const p of pets) if (p.userData.update) p.userData.update(dt, t);

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
    const wantDof = window.__dofForce ?? (mode === 'cine' || mode === 'intro');
    post.dof.enabled = wantDof;
    if (wantDof) {
      post.dof.setFocus(camera.position.distanceTo(cine._l));
      post.dof.setAperture(5.2);
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
  get mill() { return mill; }, get house() { return house; }, get smallMill() { return smallMill; },
  get grass() { return grass; }, get trees() { return trees; },
  get wall() { return wall; }, get scenery() { return scenery; }, get village() { return village; },
  get avatar() { return avatar; }, get third() { return third; },
  get pollen() { return pollen; }, get butterflies() { return butterflies; }, get flock() { return flock; },
  get pets() { return pets; },
  terrainHeight,
  enterThird, enterRoam,
  /* 自动把镜头框到某只动物身上（预览造型用） */
  framePet(i, dist = 1.15, side = 0.5, fov = 30) {
    const a = pets[i];
    if (!a) return null;
    const h = a.userData.height || 0.5;
    this.setView(
      [a.position.x + side, a.position.y + h * 0.66, a.position.z + dist],
      [a.position.x, a.position.y + h * 0.48, a.position.z],
      fov,
    );
    return { name: a.userData.name, x: a.position.x, y: a.position.y, z: a.position.z, h };
  },
  /* 摆好一排，返回地面高度，方便写死机位 */
  petsLineup() {
    return pets.map((a) => ({
      name: a.userData.name, x: +a.position.x.toFixed(2),
      y: +a.position.y.toFixed(2), z: +a.position.z.toFixed(2),
    }));
  },
  /* 单只预览：其余藏起来，避免挡镜头 */
  onlyPet(i) {
    pets.forEach((p, k) => { p.visible = k === i; });
    return !!pets[i];
  },
  allPets() { pets.forEach((p) => { p.visible = true; }); },
  /* 把镜头框到某只鸟身上（造型确认用） */
  frameBird(i, dist = 3.2, side = 1.2, below = 1.0, fov = 34) {
    const b = flock[i];
    if (!b) return null;
    const p = b.position;
    this.setView(
      [p.x + side, p.y - below, p.z + dist],
      [p.x, p.y, p.z],
      fov,
    );
    return { name: b.userData.name, x: p.x, y: p.y, z: p.z, span: b.userData.span };
  },
  birdsLineup() {
    return flock.map((b) => ({ name: b.userData.name, span: b.userData.span }));
  },
  /* 定住朝向，拍造型用 */
  posePet(i, yaw) {
    const a = pets[i];
    if (!a) return null;
    const st = a.userData.st;
    st.mode = 'idle';
    st.timer = 1e9;
    st.gait = 0;
    st.yaw = yaw;
    a.rotation.y = yaw;
    return yaw;
  },
  /* 强制走一段，用来验证步态 */
  petWalk(i, dx = 0.9, dz = 0.6) {
    const a = pets[i];
    if (!a) return null;
    const st = a.userData.st;
    st.tx = a.position.x + dx;
    st.tz = a.position.z + dz;
    st.mode = 'walk';
    st.timer = 9;
    return { tx: st.tx, tz: st.tz };
  },
  setView(p, l, fov = 34) {
    mode = 'debug';
    ui.titlecard?.classList.remove('show');
    if (ui.titlecard) ui.titlecard.style.setProperty('display', 'none', 'important');
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
    if (ui.titlecard) ui.titlecard.style.setProperty('display', 'none', 'important');
    ui.hideLoader();
    roam.enabled = false;
    cine.jump(i, t);
  },
};

init().then(() => tick());
