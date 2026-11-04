import * as THREE from 'three';

/* ============================================================
   昼夜预设（time of day）
   ------------------------------------------------------------
   每套预设就是一张扁平的「颜色 / 数值」表。切换时逐项插值，一次驱动四处：

     shared.*        所有 toon 材质的着色参数（太阳色、天光、雾、阴影色、反弹色）
     sky.material    天空渐变、云的受光色、雾霭（用 uDusk 做暖色混合）
     sun             平行光强度 + 位置，以及阴影相机的取景范围
     post            辉光强度、曝光、暖调、饱和度、暗角

   阴影相机会跟着太阳高度角自动放宽：太阳越低影子越长，110m 的取景框
   装不下 100m 长的塔影，所以要按 1/sin(高度角) 放大。
   ============================================================ */

const VEC_KEYS = ['sunDir'];
const COL_KEYS = [
  'sunColor', 'skyFill', 'zenith', 'skyMid', 'horizon',
  'fog', 'shadowTint', 'bounce', 'bounceTint',
];
const NUM_KEYS = [
  'sunIntensity', 'fogDensity', 'cloudCover', 'dusk',
  'bloom', 'exposure', 'warmth', 'sat', 'vignette', 'rays',
];

export const PRESETS = {
  /* 正午偏午后的晴天：暖白太阳，冷蓝阴影 */
  day: {
    label: '白昼',
    labelEn: 'DAY',
    sunDir: [0.731, 0.626, 0.271],
    sunColor: [1.00, 0.94, 0.80],
    sunIntensity: 2.00,
    skyFill: [0.66, 0.80, 0.94],
    zenith: [0.038, 0.155, 0.470],
    skyMid: [0.115, 0.335, 0.660],
    horizon: [0.40, 0.58, 0.71],
    fog: [0.44, 0.60, 0.72],
    fogDensity: 0.00145,
    shadowTint: [0.54, 0.58, 0.70],
    bounce: [0.62, 0.62, 0.36],
    bounceTint: [1.00, 1.00, 1.00],
    cloudCover: 1.00,
    dusk: 0.0,
    bloom: 0.26,
    exposure: 0.88,
    warmth: 0.50,
    sat: 1.52,
    vignette: 0.30,
    rays: 1.00,
  },

  /* 日落前二十分钟：太阳压到 11° 左右，光变成橘红，
     天顶转靛蓝，云底压暗、云顶被从下面打亮，影子拉得很长 */
  dusk: {
    label: '黄昏',
    labelEn: 'DUSK',
    sunDir: [0.919, 0.199, 0.341],
    sunColor: [1.00, 0.60, 0.30],
    sunIntensity: 1.55,
    skyFill: [0.34, 0.36, 0.56],
    zenith: [0.045, 0.070, 0.235],
    skyMid: [0.185, 0.175, 0.400],
    horizon: [0.95, 0.52, 0.30],
    fog: [0.60, 0.44, 0.42],
    fogDensity: 0.00185,
    shadowTint: [0.36, 0.35, 0.58],
    bounce: [0.66, 0.48, 0.30],
    bounceTint: [1.10, 0.88, 0.72],
    cloudCover: 0.88,
    dusk: 1.0,
    bloom: 0.34,
    exposure: 0.84,
    warmth: 0.82,
    sat: 1.46,
    vignette: 0.38,
    rays: 1.25,
  },
};

export const PRESET_NAMES = Object.keys(PRESETS);

function snap(p) {
  const out = { vec: {}, col: {}, num: {} };
  for (const k of VEC_KEYS) out.vec[k] = new THREE.Vector3(...p[k]);
  for (const k of COL_KEYS) out.col[k] = new THREE.Color(...p[k]);
  for (const k of NUM_KEYS) out.num[k] = p[k];
  return out;
}

function copyInto(dst, src) {
  for (const k of VEC_KEYS) dst.vec[k].copy(src.vec[k]);
  for (const k of COL_KEYS) dst.col[k].copy(src.col[k]);
  for (const k of NUM_KEYS) dst.num[k] = src.num[k];
}

/* 阴影相机的基础半宽：太阳 37° 时正好 55m */
const SHADOW_BASE_R = 55;
const SHADOW_BASE_SIN = 0.60;
const SHADOW_MAX_R = 143;

export function createTod({ shared, sky, sun, post, shadowCentre, sunDistance = 170 }) {
  const cur = snap(PRESETS.day);
  const from = snap(PRESETS.day);
  const to = snap(PRESETS.day);
  let t = 1;
  let dur = 1;
  let name = 'day';

  const sc = sun.shadow.camera;
  const _v = new THREE.Vector3();

  function apply() {
    // ---- 材质共享参数 ----
    shared.uSunDir.value.copy(cur.vec.sunDir).normalize();
    shared.uSunColor.value.copy(cur.col.sunColor);
    shared.uSkyColor.value.copy(cur.col.skyFill);
    shared.uFogColor.value.copy(cur.col.fog);
    shared.uFogDensity.value = cur.num.fogDensity;
    shared.uShadowTint.value.copy(cur.col.shadowTint);
    shared.uBounceColor.value.copy(cur.col.bounce);
    shared.uBounceTint.value.copy(cur.col.bounceTint);
    shared.uDusk.value = cur.num.dusk;

    // ---- 天空 ----
    const su = sky.material.uniforms;
    su.uZenith.value.copy(cur.col.zenith);
    su.uSkyColor.value.copy(cur.col.skyMid);
    su.uHorizon.value.copy(cur.col.horizon);
    su.uCloudCover.value = cur.num.cloudCover;

    // ---- 平行光 + 阴影取景框 ----
    sun.color.copy(cur.col.sunColor);
    sun.intensity = cur.num.sunIntensity;
    sun.position.copy(shadowCentre).addScaledVector(shared.uSunDir.value, sunDistance);

    const elev = Math.max(shared.uSunDir.value.y, 0.10);
    const R = Math.min(SHADOW_MAX_R, SHADOW_BASE_R * Math.max(1, SHADOW_BASE_SIN / elev));
    if (Math.abs(sc.right - R) > 0.25) {
      sc.left = -R; sc.right = R; sc.top = R; sc.bottom = -R;
      sc.updateProjectionMatrix();
    }

    // ---- 后处理 ----
    post.bloom.strength = cur.num.bloom;
    const gu = post.grade.uniforms;
    gu.uExposure.value = cur.num.exposure;
    gu.uWarmth.value = cur.num.warmth;
    gu.uSat.value = cur.num.sat;
    gu.uVignette.value = cur.num.vignette;
  }

  apply();

  return {
    get name() { return name; },
    get label() { return PRESETS[name].label; },
    get labelEn() { return PRESETS[name].labelEn; },
    get raysMul() { return cur.num.rays; },
    get sunElevation() {
      _v.copy(cur.vec.sunDir).normalize();
      return Math.asin(THREE.MathUtils.clamp(_v.y, -1, 1)) * 180 / Math.PI;
    },
    get shadowRadius() { return sc.right; },

    /* 切到某套预设，seconds 秒内平滑过渡 */
    set(n, seconds = 2.4) {
      const p = PRESETS[n];
      if (!p) return false;
      name = n;
      if (seconds <= 0) {
        // 立即切换：直接落到目标值，不走过渡
        copyInto(cur, snap(p));
        copyInto(from, cur);
        copyInto(to, cur);
        t = 1;
        apply();
        return true;
      }
      copyInto(from, cur);
      copyInto(to, snap(p));
      t = 0;
      dur = Math.max(0.02, seconds);
      return true;
    },

    /* 白昼 ⇄ 黄昏 */
    toggle(seconds = 2.4) {
      return this.set(name === 'day' ? 'dusk' : 'day', seconds);
    },

    update(dt) {
      if (t >= 1) return;
      t = Math.min(1, t + dt / dur);
      const e = t * t * (3 - 2 * t);          // smoothstep 缓动
      for (const k of VEC_KEYS) cur.vec[k].lerpVectors(from.vec[k], to.vec[k], e);
      for (const k of COL_KEYS) cur.col[k].lerpColors(from.col[k], to.col[k], e);
      for (const k of NUM_KEYS) cur.num[k] = from.num[k] + (to.num[k] - from.num[k]) * e;
      apply();
    },
  };
}
