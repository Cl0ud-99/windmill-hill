import * as THREE from 'three';
import { terrainHeight, WATER_Y } from '../world/layout.js';

/* ============================================================
   自由漫游相机（指针锁定 + 平滑加减速）
   ============================================================ */
export class RoamController {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;
    this.yaw = 0;
    this.pitch = 0;
    this.vel = new THREE.Vector3();
    this.keys = new Set();
    this.enabled = false;
    this.speed = 7.5;
    this.sensitivity = 0.0022;
    this._dir = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._euler = new THREE.Euler(0, 0, 0, 'YXZ');
    this.onLockChange = null;
    this.descend = null;

    addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'Space') e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.dom || !this.enabled) return;
      this.yaw -= e.movementX * this.sensitivity;
      this.pitch -= e.movementY * this.sensitivity;
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
    });
    document.addEventListener('pointerlockchange', () => {
      if (this.onLockChange) this.onLockChange(document.pointerLockElement === this.dom);
    });
  }

  lock() {
    if (document.pointerLockElement !== this.dom) {
      const p = this.dom.requestPointerLock?.();
      if (p && p.catch) p.catch(() => { });
    }
  }

  unlock() {
    if (document.pointerLockElement === this.dom) document.exitPointerLock();
  }

  setFromCamera() {
    this._euler.setFromQuaternion(this.camera.quaternion, 'YXZ');
    this.yaw = this._euler.y;
    this.pitch = this._euler.x;
  }

  /* 从高处平滑落到地面 */
  descendTo(y) { this.descend = y; }

  update(dt) {
    if (!this.enabled) return;

    if (this.descend !== null) {
      const k = Math.min(1, dt * 2.2);
      this.camera.position.y += (this.descend - this.camera.position.y) * k;
      this.vel.y = 0;
      if (Math.abs(this.camera.position.y - this.descend) < 0.06) this.descend = null;
    }

    // 相机在 Three.js 中看向 -Z，所以前向量取负
    const cp = Math.cos(this.pitch);
    this._dir.set(
      -Math.sin(this.yaw) * cp,
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * cp
    ).normalize();
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).normalize();

    const fwd = new THREE.Vector3(this._dir.x, 0, this._dir.z).normalize();
    const move = new THREE.Vector3();
    const k = this.keys;
    if (k.has('KeyW') || k.has('ArrowUp')) move.add(fwd);
    if (k.has('KeyS') || k.has('ArrowDown')) move.sub(fwd);
    if (k.has('KeyD') || k.has('ArrowRight')) move.add(this._right);
    if (k.has('KeyA') || k.has('ArrowLeft')) move.sub(this._right);
    if (k.has('Space')) move.y += 1;
    if (k.has('ControlLeft') || k.has('KeyQ')) move.y -= 1;

    const boost = (k.has('ShiftLeft') || k.has('ShiftRight')) ? 3.2 : 1.0;
    if (move.lengthSq() > 0) move.normalize().multiplyScalar(this.speed * boost);
    // 平滑
    this.vel.lerp(move, 1 - Math.pow(0.0015, dt));
    this.camera.position.addScaledVector(this.vel, dt);

    // 地面碰撞
    const gx = this.camera.position.x, gz = this.camera.position.z;
    const ground = Math.max(terrainHeight(gx, gz), WATER_Y) + 0.55;
    if (this.camera.position.y < ground) {
      this.camera.position.y += (ground - this.camera.position.y) * Math.min(1, dt * 12);
      this.vel.y = Math.max(0, this.vel.y);
    }
    // 边界
    this.camera.position.x = THREE.MathUtils.clamp(this.camera.position.x, -190, 190);
    this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, -190, 190);

    this._euler.set(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(this._euler);
  }
}

/* ============================================================
   电影镜头
   ============================================================ */
const easeInOut = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeIn = (t) => t * t * t;

export const SHOTS = [
  {
    name: 'THE HILL', jp: '丘の上',
    from: [96, 46, 132], to: [62, 20, 102],
    lookFrom: [-6, 10, 4], lookTo: [0, 12, 0],
    fov: 32, dur: 8.5, ease: easeInOut, drift: 0.35,
  },
  {
    name: 'THE MILL', jp: '風車',
    from: [25, 5.6, 23], to: [17.5, 7.6, 18.5],
    lookFrom: [0, 9, 0], lookTo: [0, 13, 0],
    fov: 40, dur: 7.0, ease: easeOut, drift: 0.25,
  },
  {
    name: 'THE WHEEL', jp: '水車',
    from: [10.5, 8.4, 9.0], to: [8.2, 7.6, 6.4],
    lookFrom: [4.2, 9.0, 2.4], lookTo: [4.2, 9.4, 2.4],
    fov: 36, dur: 5.5, ease: easeInOut, drift: 0.12,
  },
  {
    name: 'THE RIVER', jp: '川',
    from: [44, 2.4, 64], to: [14, 1.9, 59],
    lookFrom: [18, 2.4, 52], lookTo: [2, 6.0, 44],
    fov: 44, dur: 8.0, ease: easeInOut, drift: 0.30,
  },
  {
    name: 'THE CART', jp: '古い荷車',
    from: [25.5, 2.3, 64.0], to: [22.6, 1.9, 61.6],
    lookFrom: [20.6, 1.0, 58.6], lookTo: [20.4, 1.0, 58.4],
    fov: 38, dur: 5.5, ease: easeOut, drift: 0.15,
  },
  {
    name: 'THE GATE', jp: '門',
    from: [21, 5.0, 37], to: [15.5, 5.4, 31.5],
    lookFrom: [12.6, 6.0, 27.2], lookTo: [12.4, 7.4, 26.6],
    fov: 42, dur: 6.0, ease: easeInOut, drift: 0.2,
  },
  {
    name: 'THE GARDEN', jp: '庭',
    from: [28.0, 7.6, 25], to: [21.5, 7.0, 19.0],
    lookFrom: [14, 5.2, 11], lookTo: [12, 5.8, 9.5],
    fov: 42, dur: 6.5, ease: easeInOut, drift: 0.22,
  },
  {
    name: 'ASCEND', jp: '遥か',
    from: [6, 7.5, 40], to: [26, 21, 84],
    lookFrom: [0, 12, 4], lookTo: [0, 9, 0],
    fov: 40, dur: 10.0, ease: easeInOut, drift: 0.4,
  },
];

export class Cinematic {
  constructor(camera) {
    this.camera = camera;
    this.playing = false;
    this.shot = 0;
    this.t = 0;
    this.onShotChange = null;
    this.onEnd = null;
    this.loop = false;
    this.range = [0, SHOTS.length - 1];
    this._p = new THREE.Vector3();
    this._l = new THREE.Vector3();
    this._lookAt = new THREE.Vector3();
  }

  play(from = 0, to = SHOTS.length - 1) {
    this.range = [from, to];
    this.shot = from;
    this.t = 0;
    this.playing = true;
    if (this.onShotChange) this.onShotChange(this.shot);
  }

  stop() { this.playing = false; }

  jump(i, t = 0) {
    this.shot = THREE.MathUtils.clamp(i, 0, SHOTS.length - 1);
    this.t = t;
    this.playing = true;
    this.apply();
  }

  apply() {
    const s = SHOTS[this.shot];
    const e = s.ease(this.t / s.dur);
    const drift = Math.sin(this.t * 0.9) * s.drift * 0.01;
    this._p.set(
      THREE.MathUtils.lerp(s.from[0], s.to[0], e) + drift * 6,
      THREE.MathUtils.lerp(s.from[1], s.to[1], e) + Math.sin(this.t * 1.3) * s.drift * 0.02,
      THREE.MathUtils.lerp(s.from[2], s.to[2], e)
    );
    this._l.set(
      THREE.MathUtils.lerp(s.lookFrom[0], s.lookTo[0], e),
      THREE.MathUtils.lerp(s.lookFrom[1], s.lookTo[1], e),
      THREE.MathUtils.lerp(s.lookFrom[2], s.lookTo[2], e)
    );
    this.camera.position.copy(this._p);
    this.camera.lookAt(this._l);
    this.camera.fov = s.fov;
    this.camera.updateProjectionMatrix();
  }

  update(dt) {
    if (!this.playing) return;
    this.t += dt;
    const s = SHOTS[this.shot];
    if (this.t >= s.dur) {
      if (this.shot < this.range[1]) {
        this.shot++;
        this.t = 0;
        if (this.onShotChange) this.onShotChange(this.shot);
      } else if (this.loop) {
        this.shot = this.range[0];
        this.t = 0;
        if (this.onShotChange) this.onShotChange(this.shot);
      } else {
        this.playing = false;
        if (this.onEnd) this.onEnd();
        return;
      }
    }
    this.apply();
  }
}
