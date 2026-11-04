import * as THREE from 'three';
import { shared } from '../core/materials.js';
import { mulberry32 } from '../core/noise.js';
import { terrainHeight } from './layout.js';

/* ============================================================
   花粉 / 尘埃浮游
   顶点着色器里围绕相机做环绕包裹，永远在视野附近又不会跟着走
   ============================================================ */
const POLLEN_VERT = /* glsl */`
precision highp float;
uniform float uTime;
uniform vec3 uCam;
uniform float uBoxXZ;
uniform float uBoxY;
uniform float uSize;
uniform vec3 uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  vec3 p = position;
  // 缓慢漂移
  float t = uTime;
  p.x += sin( t * 0.21 + aSeed * 6.28 ) * 0.9 + t * 0.22;
  p.z += cos( t * 0.17 + aSeed * 4.71 ) * 0.9 + t * 0.10;
  p.y += sin( t * 0.33 + aSeed * 3.14 ) * 0.55;

  // 以相机为中心环绕包裹
  vec3 rel = p - uCam;
  rel.x = mod( rel.x + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  rel.z = mod( rel.z + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  rel.y = mod( rel.y + uBoxY * 0.5, uBoxY ) - uBoxY * 0.5;
  vec3 wp = uCam + rel;

  vec4 mv = viewMatrix * vec4( wp, 1.0 );
  float dist = -mv.z;

  // 太近 / 太远都淡出
  vAlpha = smoothstep( 0.6, 2.2, dist ) * ( 1.0 - smoothstep( 26.0, 46.0, dist ) );
  // 逆光更亮
  vec3 vd = normalize( wp - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 2.0 );

  gl_PointSize = uSize * aScale * ( 300.0 / max( dist, 0.5 ) );
  gl_Position = projectionMatrix * mv;
}
`;

const POLLEN_FRAG = /* glsl */`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.06, d );
  vec3 col = mix( uColor, uSunColor * 1.4, vBack * 0.75 );
  gl_FragColor = vec4( col, a * vAlpha * ( 0.28 + vBack * 0.75 ) );
}
`;

export function buildPollen(count = 1500, seed = 5) {
  const rnd = mulberry32(seed);
  const pos = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  const scales = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rnd() - 0.5) * 90;
    pos[i * 3 + 1] = (rnd() - 0.5) * 26;
    pos[i * 3 + 2] = (rnd() - 0.5) * 90;
    seeds[i] = rnd();
    scales[i] = 0.6 + rnd() * 1.1;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: POLLEN_VERT,
    fragmentShader: POLLEN_FRAG,
    uniforms: {
      uTime: shared.uTime,
      uCam: { value: new THREE.Vector3() },
      uBoxXZ: { value: 90 },
      uBoxY: { value: 26 },
      uSize: { value: 0.055 },
      uSunDir: shared.uSunDir,
      uColor: { value: new THREE.Color(0xfff2d0) },
      uSunColor: shared.uSunColor,
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 20;
  pts.name = 'pollen';
  return pts;
}

/* ============================================================
   蝴蝶
   ============================================================ */
export function buildButterflies(spots, count = 7) {
  const group = new THREE.Group();
  group.name = 'butterflies';
  const rnd = mulberry32(31);

  const wingMat = new THREE.MeshBasicMaterial({
    color: 0xffe9a8, side: THREE.DoubleSide, transparent: true, opacity: 0.95,
  });
  const wingMat2 = new THREE.MeshBasicMaterial({
    color: 0xe8a24e, side: THREE.DoubleSide, transparent: true, opacity: 0.95,
  });

  for (let i = 0; i < count; i++) {
    const spot = spots[Math.floor(rnd() * spots.length)];
    const b = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.008, 0.05, 3, 6),
      new THREE.MeshBasicMaterial({ color: 0x3a2c1c })
    );
    body.rotation.x = Math.PI / 2;
    b.add(body);

    const mk = (side, mat) => {
      const g = new THREE.PlaneGeometry(0.07, 0.055);
      const m = new THREE.Mesh(g, mat);
      m.position.set(side * 0.038, 0.008, 0);
      m.rotation.y = side * 0.35;
      b.add(m);
      return m;
    };
    const wl = mk(1, wingMat);
    const wr = mk(-1, wingMat2);
    const wl2 = mk(1, wingMat2);
    const wr2 = mk(-1, wingMat);
    wl2.scale.set(0.7, 0.7, 1); wr2.scale.set(0.7, 0.7, 1);
    wl2.position.set(0.036, -0.012, -0.012);
    wr2.position.set(-0.036, -0.012, -0.012);

    b.userData = {
      cx: spot.x + (rnd() - 0.5) * 2.2,
      cz: spot.z + (rnd() - 0.5) * 2.2,
      baseY: terrainHeight(spot.x, spot.z) + 0.55 + rnd() * 0.7,
      phase: rnd() * 6.28,
      speed: 0.5 + rnd() * 0.55,
      radius: 0.9 + rnd() * 1.4,
      wings: [wl, wr, wl2, wr2],
    };
    group.add(b);
  }

  let t = 0;
  group.userData.update = (dt) => {
    t += dt;
    for (const b of group.children) {
      const u = b.userData;
      const a = t * u.speed + u.phase;
      b.position.set(
        u.cx + Math.cos(a) * u.radius,
        u.baseY + Math.sin(a * 2.3) * 0.22,
        u.cz + Math.sin(a * 0.83) * u.radius
      );
      b.rotation.y = -a + Math.PI / 2;
      const flap = Math.sin(t * 18 + u.phase) * 0.9;
      u.wings[0].rotation.z = flap;
      u.wings[1].rotation.z = -flap;
      u.wings[2].rotation.z = flap * 0.8;
      u.wings[3].rotation.z = -flap * 0.8;
    }
  };
  return group;
}

/* ============================================================
   盘旋的鸟
   ============================================================ */
/* ============================================================
   烟囱炊烟
   ============================================================ */
const SMOKE_VERT = /* glsl */`
precision highp float;
uniform float uTime;
uniform float uRise;
uniform float uSpread;
attribute float aSeed;
varying float vAlpha;

void main() {
  float t = fract( uTime * 0.13 + aSeed );
  vec3 p = position;
  p.y += t * uRise;
  p.x += sin( t * 4.2 + aSeed * 6.28 ) * uSpread * t + t * t * uSpread * 0.9;
  p.z += cos( t * 3.1 + aSeed * 4.71 ) * uSpread * 0.8 * t;

  vec4 mv = modelViewMatrix * vec4( p, 1.0 );
  float dist = -mv.z;
  vAlpha = smoothstep( 0.0, 0.10, t ) * ( 1.0 - smoothstep( 0.45, 1.0, t ) ) * 0.42;
  gl_PointSize = ( 0.22 + t * 1.05 ) * 320.0 / max( dist, 1.0 );
  gl_Position = projectionMatrix * mv;
}
`;

const SMOKE_FRAG = /* glsl */`
precision highp float;
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.05, d );
  gl_FragColor = vec4( uColor, a * vAlpha );
}
`;

export function buildSmoke(count = 22, rise = 3.4, spread = 0.5) {
  const rnd = mulberry32(404);
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rnd() - 0.5) * 0.16;
    pos[i * 3 + 1] = 0;
    pos[i * 3 + 2] = (rnd() - 0.5) * 0.16;
    seed[i] = rnd();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: SMOKE_VERT,
    fragmentShader: SMOKE_FRAG,
    uniforms: {
      uTime: shared.uTime,
      uRise: { value: rise },
      uSpread: { value: spread },
      uColor: { value: new THREE.Color(0xd8d6cf) },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 18;
  return pts;
}
