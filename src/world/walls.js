import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import { MAT } from './matlib.js';
import { terrainHeight, terrainNormal, GATE, resample } from './layout.js';
import { rockGeo, box, cyl } from '../core/geom.js';
import { mulberry32, clamp } from '../core/noise.js';

/* 干砌石墙 */
export function buildWall(sampleSplat) {
  const group = new THREE.Group();
  group.name = 'wall';

  const left = [
    [-96, 33.0], [-76, 31.4], [-56, 29.6], [-38, 27.6], [-24, 26.4], [-11, 25.6],
    [2, 25.0], [9.2, 25.2], [10.6, 26.1],
  ];
  const right = [
    [14.6, 26.3], [16.4, 25.4], [25, 24.6], [38, 24.2], [52, 24.8], [66, 26.4],
    [82, 29.0], [100, 32.0],
  ];

  const stoneMat = makeToon({
    color: 0x8b8371, rim: 0.20, rimColor: 0xf0e8d4, spec: 0.12, specPower: 14,
    fresnel: 0.16, noise: 0.22, noiseScale: 2.2, saturation: 0.98,
  });
  const coreMat = makeToon({
    map: MAT.stone.map, color: 0xffffff, tint: 0x6a6355, mapMix: 1,
    rim: 0.06, spec: 0.02, fresnel: 0.04, noise: 0.3, noiseScale: 2.5,
  });
  const blockMat = makeToon({
    map: MAT.stone.map, normalMap: MAT.stone.uniforms.uNormalMap.value, normalScale: 1.0,
    color: 0xffffff, tint: 0x8f8570, mapMix: 1,
    rim: 0.20, rimColor: 0xe0d4bc, spec: 0.10, specPower: 14,
    fresnel: 0.14, noise: 0.18, noiseScale: 2.4, saturation: 0.98,
    grime: [4.6, 7.6], roughVar: 0.7,
  });
  const mossMat = makeToon({
    color: 0x6d8a3e, rim: 0.4, rimColor: 0xd8eaa0, spec: 0.05,
    fresnel: 0.03, noise: 0.3, noiseScale: 3, saturation: 1.05,
  });

  const rockGeos = [rockGeo(1, 1), rockGeo(2, 1), rockGeo(3, 1), rockGeo(4, 1)];
  const instances = [[], [], [], []];
  const mossInstances = [];

  const buildSegment = (pts) => {
    const path = resample(pts, 0.24);
    // 核心
    const coreVerts = [];
    const coreIdx = [];
    const W = 0.30;
    let dist = 0;
    for (let i = 0; i < path.length; i++) {
      const [x, z] = path[i];
      const prev = path[Math.max(0, i - 1)], next = path[Math.min(path.length - 1, i + 1)];
      let tx = next[0] - prev[0], tz = next[1] - prev[1];
      const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
      const nx = -tz, nz = tx;
      const y = terrainHeight(x, z);
      const h = 0.82 + Math.sin(i * 0.7) * 0.06;
      if (i > 0) dist += Math.hypot(x - path[i - 1][0], z - path[i - 1][1]);
      const base = coreVerts.length / 3;
      coreVerts.push(
        x - nx * W, y - 0.10, z - nz * W,
        x + nx * W, y - 0.10, z + nz * W,
        x + nx * W * 0.92, y + h, z + nz * W * 0.92,
        x - nx * W * 0.92, y + h, z - nz * W * 0.92,
      );
      if (i > 0) {
        const p = base - 4;
        coreIdx.push(p, base, p + 1, base, base + 1, p + 1);         // 前
        coreIdx.push(p + 1, base + 1, p + 2, base + 1, base + 2, p + 2); // 右
        coreIdx.push(p + 3, base + 3, p, base, base + 3, p);         // 左
        coreIdx.push(p + 2, base + 2, p + 3, base + 2, base + 3, p + 3); // 顶
      }
    }
    const coreGeo = new THREE.BufferGeometry();
    coreGeo.setAttribute('position', new THREE.Float32BufferAttribute(coreVerts, 3));
    coreGeo.setIndex(coreIdx);
    coreGeo.computeVertexNormals();
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.castShadow = core.receiveShadow = true;
    group.add(core);

    // 石块
    const rnd = mulberry32(77 + Math.round(pts[0][0]));
    for (let i = 1; i < path.length - 1; i++) {
      const [x, z] = path[i];
      const prev = path[i - 1], next = path[i + 1];
      let tx = next[0] - prev[0], tz = next[1] - prev[1];
      const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
      const nx = -tz, nz = tx;
      const y = terrainHeight(x, z);

      const courses = 5;
      for (let c = 0; c < courses; c++) {
        const t = c / (courses - 1);
        for (const side of [-1, 1]) {
          if (rnd() > 0.95) continue;
          const off = (0.215 + rnd() * 0.05) * side;
          const px = x + nx * off + (rnd() - 0.5) * 0.05;
          const pz = z + nz * off + (rnd() - 0.5) * 0.05;
          const py = y + 0.08 + t * 0.66 + (rnd() - 0.5) * 0.04;
          const s = 0.115 + rnd() * 0.065;
          instances[Math.floor(rnd() * 4)].push({
            p: [px, py, pz],
            s: [s * (1.1 + rnd() * 0.6), s * (0.72 + rnd() * 0.4), s * (0.9 + rnd() * 0.5)],
            r: [rnd() * 6.28, rnd() * 6.28, rnd() * 6.28],
          });
          // 苔藓
          if (rnd() > 0.86) {
            mossInstances.push({
              p: [px + nx * 0.02 * side, py + 0.06, pz + nz * 0.02 * side],
              s: [s * 1.0, s * 0.5, s * 0.9], r: [0, rnd() * 6.28, 0],
            });
          }
        }
      }
      // 压顶石
      if (i % 3 === 0) {
        instances[Math.floor(rnd() * 4)].push({
          p: [x + (rnd() - 0.5) * 0.1, y + 0.9, z + (rnd() - 0.5) * 0.1],
          s: [0.26 + rnd() * 0.12, 0.13 + rnd() * 0.06, 0.22 + rnd() * 0.10],
          r: [(rnd() - 0.5) * 0.3, rnd() * 6.28, (rnd() - 0.5) * 0.3],
        });
      }
    }
  };

  buildSegment(left);
  buildSegment(right);

  const dummy = new THREE.Object3D();
  instances.forEach((list, k) => {
    if (!list.length) return;
    const mesh = new THREE.InstancedMesh(rockGeos[k], stoneMat, list.length);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    list.forEach((it, i) => {
      dummy.position.set(...it.p);
      dummy.rotation.set(...it.r);
      dummy.scale.set(...it.s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
  });
  if (mossInstances.length) {
    const mesh = new THREE.InstancedMesh(rockGeos[0], mossMat, mossInstances.length);
    mesh.castShadow = false; mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mossInstances.forEach((it, i) => {
      dummy.position.set(...it.p); dummy.rotation.set(...it.r); dummy.scale.set(...it.s);
      dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
  }

  // ---- 门柱 ----
  const gateY = terrainHeight(GATE.x, GATE.z);
  for (const s of [-1, 1]) {
    const px = GATE.x + s * 2.1;
    const pz = GATE.z + s * 0.15;
    const gy = terrainHeight(px, pz);
    const pillar = new THREE.Group();
    let y = 0;
    for (let i = 0; i < 5; i++) {
      const w = 0.66 - i * 0.025;
      const g = box(w, 0.33, w * 0.92, 0.9);
      const m = new THREE.Mesh(g, blockMat);
      m.position.set((Math.random() - 0.5) * 0.03, y + 0.165, (Math.random() - 0.5) * 0.03);
      m.rotation.y = (Math.random() - 0.5) * 0.12;
      m.castShadow = m.receiveShadow = true;
      pillar.add(m);
      y += 0.315;
    }
    const cap = new THREE.Mesh(box(0.78, 0.16, 0.72, 1.6), MAT.stone);
    cap.position.y = y + 0.06; cap.castShadow = cap.receiveShadow = true;
    pillar.add(cap);
    // 柱顶小球
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 10), MAT.stone);
    ball.position.y = y + 0.32; ball.castShadow = true;
    pillar.add(ball);
    pillar.position.set(px, gy, pz);
    group.add(pillar);
  }

  // ---- 木栅门（半开） ----
  const gate = new THREE.Group();
  const gw = 1.65, gh = 1.25;
  const frame = new THREE.Group();
  for (const yy of [0.12, gh - 0.06]) {
    const m = new THREE.Mesh(box(gw, 0.1, 0.07), MAT.woodDark);
    m.position.set(gw / 2, yy, 0); m.castShadow = true; frame.add(m);
  }
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(box(0.08, gh, 0.06), MAT.woodDark);
    m.position.set(0.14 + i * (gw - 0.28) / 4, gh / 2, 0);
    m.castShadow = true; frame.add(m);
  }
  // 斜撑
  const brace = new THREE.Mesh(box(0.08, Math.hypot(gw, gh) * 0.92, 0.05), MAT.woodDark);
  brace.position.set(gw / 2, gh / 2, 0.02);
  brace.rotation.z = Math.atan2(gw, gh);
  brace.castShadow = true; frame.add(brace);
  frame.position.set(0, 0, 0);
  gate.add(frame);
  gate.position.set(GATE.x - 2.0, gateY + 0.05, GATE.z);
  gate.rotation.y = -0.55;
  group.add(gate);

  return group;
}
