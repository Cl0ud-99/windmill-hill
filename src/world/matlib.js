import * as THREE from 'three';
import { makeToon } from '../core/materials.js';
import * as TX from '../core/textures.js';

export const TEX = {};
export const MAT = {};
let ready = false;

export function initMatlib() {
  if (ready) return;
  ready = true;
  TEX.stucco = TX.stuccoTexture(1024);
  TEX.stuccoTower = TX.stuccoTowerTexture(2048, 1024);
  TEX.stone = TX.stoneTexture(1024, 'warm');
  TEX.stoneCool = TX.stoneTexture(1024, 'cool');
  TEX.roof = TX.roofTileTexture(1024);
  TEX.wood = TX.woodTexture(512, false);
  TEX.woodDark = TX.woodTexture(512, true);
  TEX.bark = TX.barkTexture(512);
  TEX.dirt = TX.dirtTexture(512);
  TEX.leafCluster = TX.leafClusterTexture(256);

  // 由各张贴图的亮度推导法线贴图，给表面加起伏
  const nrm = (canvas, strength, repeat) => {
    const t = new THREE.CanvasTexture(TX.heightToNormal(canvas, strength));
    t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
    t.colorSpace = THREE.NoColorSpace;
    t.anisotropy = 8;
    if (repeat) t.repeat.set(repeat[0], repeat[1]);
    return t;
  };
  TEX.nStone = nrm(TEX.stone.userData.height || TEX.stone.image, 2.2);
  TEX.nStucco = nrm(TEX.stuccoTower.image, 1.6);
  TEX.nRoof = nrm(TEX.roof.userData.height || TEX.roof.image, 2.4);
  TEX.nWood = nrm(TEX.wood.userData.height || TEX.wood.image, 2.0);
  TEX.nBark = nrm(TEX.bark.image, 2.4);

  MAT.stucco = makeToon({
    map: TEX.stucco, color: 0xffffff, tint: 0xfff4e0, mapMix: 1,
    rim: 0.22, rimColor: 0xfff3d8, spec: 0.03, specPower: 8,
    fresnel: 0.10, noise: 0.07, noiseScale: 0.55, saturation: 1.02,
  });
  MAT.stuccoTower = makeToon({
    map: TEX.stuccoTower, normalMap: TEX.nStucco, normalScale: 0.75, color: 0xffffff, tint: 0xfff6e6, mapMix: 1,
    rim: 0.22, rimColor: 0xfff3d8, spec: 0.03, specPower: 8,
    fresnel: 0.10, noise: 0.05, noiseScale: 0.55, saturation: 1.02,
    grime: [7.3, 11.0], roughVar: 0.45,
  });
  MAT.stone = makeToon({
    map: TEX.stone, normalMap: TEX.nStone, normalScale: 1.0, color: 0xffffff, tint: 0xcdbfa1, mapMix: 1,
    rim: 0.26, rimColor: 0xfff0d0, spec: 0.10, specPower: 14,
    fresnel: 0.13, noise: 0.10, noiseScale: 0.7,
    grime: [6.9, 9.6], roughVar: 0.7,
  });
  MAT.stoneCool = makeToon({
    map: TEX.stoneCool, color: 0xffffff, tint: 0xc6c6bd, mapMix: 1,
    rim: 0.30, rimColor: 0xeef4ff, spec: 0.16, specPower: 18,
    fresnel: 0.20, noise: 0.10, noiseScale: 0.7,
  });
  MAT.roof = makeToon({
    map: TEX.roof, normalMap: TEX.nRoof, normalScale: 1.1, color: 0xffffff, tint: 0xdfc9b4, mapMix: 1,
    rim: 0.18, rimColor: 0xffd9b0, spec: 0.16, specPower: 22,
    fresnel: 0.14, noise: 0.08, noiseScale: 0.6, saturation: 1.05,
    roughVar: 0.9,
  });
  MAT.wood = makeToon({
    map: TEX.wood, normalMap: TEX.nWood, normalScale: 0.8, color: 0xffffff, tint: 0xcabda6, mapMix: 1,
    rim: 0.20, rimColor: 0xffe2b8, spec: 0.06, specPower: 10,
    fresnel: 0.07, noise: 0.10, noiseScale: 0.8, roughVar: 0.8,
  });
  MAT.woodDark = makeToon({
    color: 0x6a4a2c, rim: 0.30, rimColor: 0xffd9a8, spec: 0.05, specPower: 10,
    fresnel: 0.06, noise: 0.14, noiseScale: 1.1, saturation: 1.04,
  });
  MAT.woodPlain = makeToon({
    color: 0x8f7048, rim: 0.22, rimColor: 0xf0dcc0, spec: 0.05,
    fresnel: 0.05, noise: 0.12, noiseScale: 0.9,
  });
  MAT.woodPale = makeToon({
    color: 0xb08a5c, rim: 0.26, rimColor: 0xffeecd, spec: 0.05,
    fresnel: 0.05, noise: 0.14, noiseScale: 0.9,
  });
  MAT.darkInset = makeToon({
    color: 0x241c14, rim: 0.0, spec: 0.0, fresnel: 0.02, noise: 0.05, ao: 1,
  });
  MAT.metal = makeToon({
    color: 0x3b3f3a, rim: 0.35, rimColor: 0xdfe8ee, spec: 0.55, specPower: 40,
    fresnel: 0.25, noise: 0.06,
  });
  MAT.dirt = makeToon({
    color: 0x5c4630, rim: 0.18, rimColor: 0xc9a878, spec: 0.04,
    fresnel: 0.04, noise: 0.22, noiseScale: 2.4, saturation: 1.02,
  });
  MAT.cabbage = makeToon({
    color: 0x6f9a45, rim: 0.42, rimColor: 0xd8f0a8, spec: 0.06, specPower: 12,
    fresnel: 0.04, noise: 0.16, noiseScale: 3.0, wrap: 0.45, saturation: 1.06,
  });
  MAT.slate = makeToon({
    map: TEX.roof, normalMap: TEX.nRoof, normalScale: 1.0,
    color: 0xffffff, tint: 0x8b98a6, mapMix: 1,
    rim: 0.26, rimColor: 0xd8e4f0, spec: 0.22, specPower: 24,
    fresnel: 0.18, noise: 0.10, noiseScale: 1.2, roughVar: 0.9, saturation: 0.9,
  });
  MAT.sailCloth = makeToon({
    color: 0xe9dfc6, rim: 0.34, rimColor: 0xfff4dc, spec: 0.02,
    fresnel: 0.05, noise: 0.10, noiseScale: 1.6, side: THREE.DoubleSide,
    wrap: 0.4,
  });
  MAT.zinc = makeToon({
    color: 0x6b7178, rim: 0.28, rimColor: 0xd8e2ec, spec: 0.32, specPower: 26,
    fresnel: 0.30, noise: 0.10, noiseScale: 2.0, roughVar: 0.8,
  });
  MAT.terracotta = makeToon({
    color: 0xb5613c, rim: 0.28, rimColor: 0xffd3ae, spec: 0.12, specPower: 16,
    fresnel: 0.10, noise: 0.14, noiseScale: 1.2,
  });
  MAT.straw = makeToon({
    color: 0xc7a860, rim: 0.3, rimColor: 0xfff0c0, spec: 0.04,
    fresnel: 0.04, noise: 0.3, noiseScale: 2.0, side: THREE.DoubleSide,
  });
  MAT.whiteCloth = makeToon({
    color: 0xf2ead6, rim: 0.3, rimColor: 0xffffff, spec: 0.02,
    fresnel: 0.06, noise: 0.06, side: THREE.DoubleSide,
  });
  MAT.bark = makeToon({
    map: TEX.bark, normalMap: TEX.nBark, normalScale: 1.0, color: 0x9a8a76, tint: 0xc0b09a, mapMix: 0.85,
    rim: 0.30, rimColor: 0xffe0b0, spec: 0.05, specPower: 8,
    fresnel: 0.05, noise: 0.18, noiseScale: 1.6, saturation: 1.05,
  });
  MAT.leaf = makeToon({
    color: 0x5c7a3a, rim: 0.30, rimColor: 0xdcecc0, spec: 0.05, specPower: 9,
    fresnel: 0.03, noise: 0.20, noiseScale: 0.7, wrap: 0.62, trans: 0.55,
    saturation: 1.06, vcolor: true,
  });
  MAT.leafCard = makeToon({
    map: TEX.leafCluster, color: 0xffffff, alphaMap: true, alphaTest: 0.45,
    tint: 0x53762c, rim: 0.34, rimColor: 0xdcecc0, spec: 0.04,
    fresnel: 0.02, noise: 0.18, noiseScale: 0.9, wrap: 0.6, trans: 0.5,
    side: THREE.DoubleSide, vcolor: true, saturation: 1.04,
  });
  MAT.leafDark = makeToon({
    color: 0x44682a, rim: 0.28, rimColor: 0xcfe4b0, spec: 0.04, specPower: 9,
    fresnel: 0.03, noise: 0.22, noiseScale: 0.7, wrap: 0.6, trans: 0.45,
  });
  MAT.flowerBlue = makeToon({
    color: 0xffffff, rim: 0.45, rimColor: 0xe8f0ff, spec: 0.06, specPower: 12,
    fresnel: 0.05, noise: 0.08, noiseScale: 2.2, wrap: 0.4, saturation: 1.02,
    vcolor: true,
  });
  MAT.flowerWhite = makeToon({
    color: 0xf2f0e2, rim: 0.5, rimColor: 0xffffff, spec: 0.05,
    fresnel: 0.05, noise: 0.06, noiseScale: 2.2, wrap: 0.5,
  });
  MAT.grassCard = makeToon({
    color: 0x6f9a3a, rim: 0.5, rimColor: 0xd8f0a0, spec: 0.04,
    fresnel: 0.03, noise: 0.2, noiseScale: 1.2, wrap: 0.55, trans: 0.35,
    side: THREE.DoubleSide,
  });
  MAT.lampGlass = makeToon({
    color: 0xffd9a0, rim: 0.2, rimColor: 0xfff0c0, spec: 0.3,
    fresnel: 0.2, noise: 0.05, emissive: 0.55,
  });
  MAT.potPlant = makeToon({
    color: 0xffffff, rim: 0.5, rimColor: 0xe8f5b0, spec: 0.05,
    fresnel: 0.03, noise: 0.12, noiseScale: 2.4, wrap: 0.55, trans: 0.35,
    vcolor: true,
  });
}
