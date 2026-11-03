import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { box, cyl } from '../core/geom.js';

/* 圆润的躯干 */
function torsoGeo(rTop, rBot, h, flatten = 0.78, seg = 12) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg, 1);
  g.scale(1, 1, flatten);
  g.translate(0, h / 2, 0);
  return g;
}

export function buildAvatar() {
  const root = new THREE.Group();
  root.name = 'avatar';

  const M = {
    skin: makeToon({
      color: 0xf2c9a2, rim: 0.42, rimColor: 0xffe6c8, spec: 0.06, specPower: 12,
      fresnel: 0.06, noise: 0.05, saturation: 1.02,
    }),
    shirt: makeToon({
      color: 0xe3d7ba, rim: 0.40, rimColor: 0xfff4dc, spec: 0.03, specPower: 8,
      fresnel: 0.05, noise: 0.08, noiseScale: 1.6,
    }),
    vest: makeToon({
      color: 0x7c5a3c, rim: 0.34, rimColor: 0xffdcb0, spec: 0.05, specPower: 10,
      fresnel: 0.05, noise: 0.12, noiseScale: 1.4,
    }),
    pants: makeToon({
      color: 0x4d5c74, rim: 0.30, rimColor: 0xcfe0ff, spec: 0.04, specPower: 10,
      fresnel: 0.05, noise: 0.10, noiseScale: 1.4,
    }),
    boots: makeToon({
      color: 0x5b4130, rim: 0.26, rimColor: 0xffd8a8, spec: 0.08, specPower: 14,
      fresnel: 0.06, noise: 0.10, noiseScale: 2.0,
    }),
    hat: makeToon({
      color: 0xd8b878, rim: 0.42, rimColor: 0xfff0c8, spec: 0.05, specPower: 8,
      fresnel: 0.05, noise: 0.14, noiseScale: 2.4,
    }),
    hair: makeToon({
      color: 0x3a2a1e, rim: 0.30, rimColor: 0xbfa98c, spec: 0.10, specPower: 18,
      fresnel: 0.05, noise: 0.10, noiseScale: 2.0,
    }),
    scarf: makeToon({
      color: 0xb0462e, rim: 0.40, rimColor: 0xffc8a8, spec: 0.05, specPower: 10,
      fresnel: 0.05, noise: 0.10, noiseScale: 2.0,
    }),
    bag: makeToon({
      color: 0x8a6a44, rim: 0.30, rimColor: 0xffdcb0, spec: 0.06, specPower: 12,
      fresnel: 0.05, noise: 0.12, noiseScale: 1.8,
    }),
  };

  const add = (parent, geo, mat, x = 0, y = 0, z = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  };

  const HIP = 0.70;
  const SHOULDER = 0.425;  // 相对髋部
  const HEAD = 0.60;

  /* ---- 腿 ---- */
  const makeLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.085, HIP, 0);
    // 大腿 + 小腿合成一段（低多边形风格）
    const leg = cyl(0.072, 0.055, 0.60, 10, 1);
    leg.translate(0, -0.60, 0);
    add(g, leg, M.pants, 0, 0, 0);
    // 靴子
    const boot = box(0.125, 0.10, 0.235, 1);
    add(g, boot, M.boots, 0, -0.645, 0.045);
    const toe = new THREE.SphereGeometry(0.062, 8, 6);
    toe.scale(1, 0.8, 1.1);
    add(g, toe, M.boots, 0, -0.66, 0.145);
    root.add(g);
    return g;
  };
  const legL = makeLeg(1);
  const legR = makeLeg(-1);

  /* ---- 上半身 ---- */
  const upper = new THREE.Group();
  upper.position.y = HIP;
  root.add(upper);

  // 躯干
  add(upper, torsoGeo(0.175, 0.155, 0.46, 0.8), M.shirt, 0, 0, 0);
  // 马甲（只覆盖下半个躯干）
  const vest = torsoGeo(0.181, 0.166, 0.24, 0.83);
  add(upper, vest, M.vest, 0, 0.02, 0);
  // 领口
  const collar = new THREE.TorusGeometry(0.072, 0.024, 6, 14);
  collar.rotateX(Math.PI / 2);
  add(upper, collar, M.shirt, 0, 0.475, 0.012);
  // 腰带
  const belt = new THREE.TorusGeometry(0.163, 0.022, 6, 16);
  belt.rotateX(Math.PI / 2); belt.scale(1, 1, 0.82);
  add(upper, belt, M.boots, 0, 0.03, 0);

  // 手臂
  const makeArm = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.163, SHOULDER, 0);
    const shoulder = new THREE.SphereGeometry(0.056, 10, 8);
    add(g, shoulder, M.shirt, 0, 0.005, 0);
    const arm = cyl(0.055, 0.045, 0.44, 8, 1);
    arm.translate(0, -0.44, 0);
    add(g, arm, M.shirt, 0, 0, 0);
    const hand = new THREE.SphereGeometry(0.058, 9, 7);
    add(g, hand, M.skin, 0, -0.468, 0.005);
    g.rotation.z = side * 0.10;
    upper.add(g);
    return g;
  };
  const armL = makeArm(1);
  const armR = makeArm(-1);

  // 围巾
  const scarf = new THREE.TorusGeometry(0.088, 0.036, 6, 14);
  scarf.rotateX(Math.PI / 2);
  add(upper, scarf, M.scarf, 0, 0.505, 0);
  const scarfTail = box(0.06, 0.20, 0.03, 1);
  add(upper, scarfTail, M.scarf, 0.07, 0.41, -0.085);

  /* ---- 头 ---- */
  // 脖子
  // 脖子：从躯干内部一直长到头部，避免出现断层
  const neck = cyl(0.058, 0.070, 0.24, 10, 1);
  add(upper, neck, M.skin, 0, 0.40, 0);

  const headG = new THREE.Group();
  headG.position.y = HEAD;
  upper.add(headG);

  const head = new THREE.SphereGeometry(0.145, 16, 12);
  head.scale(1, 1.02, 0.96);
  add(headG, head, M.skin, 0, 0.115, 0);

  // 头发
  const hair = new THREE.SphereGeometry(0.152, 16, 12);
  hair.scale(1.02, 0.92, 1.0);
  add(headG, hair, M.hair, 0, 0.145, -0.012);
  // 刘海
  const fringe = new THREE.SphereGeometry(0.150, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.45);
  add(headG, fringe, M.hair, 0, 0.135, 0.012);

  // 眼睛（两点深色）
  const eyeGeo = new THREE.SphereGeometry(0.017, 6, 5);
  add(headG, eyeGeo, M.hair, 0.055, 0.115, 0.132);
  add(headG, eyeGeo, M.hair, -0.055, 0.115, 0.132);
  // 鼻子
  const nose = new THREE.SphereGeometry(0.019, 7, 6);
  nose.scale(0.9, 0.85, 1.1);
  add(headG, nose, M.skin, 0, 0.098, 0.142);
  // 嘴（一小段弧）
  const mouth = new THREE.TorusGeometry(0.028, 0.0065, 5, 10, Math.PI * 0.85);
  mouth.rotateZ(Math.PI * 1.075);
  add(headG, mouth, M.hair, 0, 0.062, 0.138);

  // 腮红
  const blush = new THREE.SphereGeometry(0.026, 6, 5);
  blush.scale(1, 0.55, 0.4);
  const blushMat = makeToon({ color: 0xe89a86, rim: 0.2, spec: 0, fresnel: 0.02, noise: 0.04 });
  add(headG, blush, blushMat, 0.088, 0.072, 0.118);
  add(headG, blush, blushMat, -0.088, 0.072, 0.118);

  // 草帽
  const hat = new THREE.Group();
  const brim = new THREE.CylinderGeometry(0.30, 0.315, 0.018, 20, 1);
  add(hat, brim, M.hat, 0, 0, 0);
  const crown = new THREE.CylinderGeometry(0.125, 0.152, 0.135, 16, 1);
  add(hat, crown, M.hat, 0, 0.075, 0);
  const band = new THREE.CylinderGeometry(0.154, 0.156, 0.035, 16, 1, true);
  add(hat, band, M.scarf, 0, 0.022, 0);
  hat.position.set(0, 0.235, 0.005);
  hat.rotation.x = -0.06;
  headG.add(hat);

  /* ---- 背包 ---- */
  const bag = new THREE.SphereGeometry(0.17, 14, 10);
  bag.scale(0.86, 0.84, 0.50);
  add(upper, bag, M.bag, 0, 0.25, -0.155);
  const flap = new THREE.SphereGeometry(0.168, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.52);
  flap.scale(0.88, 0.66, 0.52);
  add(upper, flap, M.vest, 0, 0.275, -0.15);
  // 铺盖卷（居中放在包顶）
  const roll = new THREE.CylinderGeometry(0.048, 0.048, 0.30, 12, 1);
  roll.rotateZ(Math.PI / 2);
  add(upper, roll, M.hat, 0, 0.385, -0.16);
  // 卷绳
  for (const x of [-0.09, 0.09]) {
    const band = new THREE.TorusGeometry(0.05, 0.008, 4, 12);
    band.rotateY(Math.PI / 2);
    add(upper, band, M.vest, x, 0.385, -0.16);
  }
  // 背带
  for (const s of [-1, 1]) {
    const strap = box(0.035, 0.30, 0.02, 1);
    const m = add(upper, strap, M.vest, s * 0.10, 0.34, 0.10);
    m.rotation.x = 0.1;
  }

  /* ---- 状态 ---- */
  const state = {
    phase: 0,
    blend: 0,
    lean: 0,
    time: 0,
  };

  function update(dt, speed, moving) {
    state.time += dt;
    const targetBlend = moving ? 1 : 0;
    state.blend += (targetBlend - state.blend) * Math.min(1, dt * 8);

    // 步频随速度
    const freq = 1.55;
    state.phase += speed * freq * dt;
    const p = state.phase;
    const b = state.blend;

    const swing = Math.sin(p) * 0.62 * b;
    const armSwing = Math.sin(p) * 0.48 * b;

    legL.rotation.x = swing;
    legR.rotation.x = -swing;
    armL.rotation.x = -armSwing;
    armR.rotation.x = armSwing;
    armL.rotation.z = 0.10 + Math.sin(state.time * 0.9) * 0.015;
    armR.rotation.z = -0.10 - Math.sin(state.time * 0.9) * 0.015;

    // 身体起伏 / 前倾
    const bob = Math.abs(Math.sin(p)) * 0.035 * b;
    upper.position.y = HIP + bob;
    state.lean += ((moving ? 0.10 : 0) - state.lean) * Math.min(1, dt * 6);
    upper.rotation.x = state.lean;
    upper.rotation.z = Math.sin(p) * 0.035 * b;

    // 头部反向轻微摆动，避免僵硬
    headG.rotation.z = -Math.sin(p) * 0.05 * b;
    headG.rotation.x = Math.sin(state.time * 0.7) * 0.02 - state.lean * 0.5;

    // 待机呼吸
    if (!moving) {
      upper.position.y = HIP + Math.sin(state.time * 1.6) * 0.006;
    }
  }

  return { root, update, state };
}
