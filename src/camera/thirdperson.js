import * as THREE from 'three';
import { terrainHeight, WATER_Y } from '../world/layout.js';

const lerpAngle = (a, b, t) => {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
};

/* ============================================================
   第三人称人物视角
   ============================================================ */
export class ThirdPersonController {
  constructor(camera, dom, avatar) {
    this.camera = camera;
    this.dom = dom;
    this.avatar = avatar;

    this.yaw = 0;
    this.pitch = 0.18;
    this.dist = 4.3;
    this.targetDist = 4.3;
    this.enabled = false;

    this.walkSpeed = 3.6;
    this.runMul = 2.15;
    this.sensitivity = 0.0022;

    this.vel = new THREE.Vector3();
    this.obstacles = [];      // {x,z,r} 树木等圆柱障碍
    this.keys = new Set();
    this.heading = 0;
    this.smoothCam = new THREE.Vector3();
    this._camInit = false;

    this._fwd = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._move = new THREE.Vector3();
    this._target = new THREE.Vector3();
    this._desired = new THREE.Vector3();

    addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'Space') e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());

    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.dom || !this.enabled) return;
      this.yaw -= e.movementX * this.sensitivity;
      this.pitch += e.movementY * this.sensitivity;
      this.pitch = Math.max(-0.55, Math.min(1.05, this.pitch));
    });

    addEventListener('wheel', (e) => {
      if (!this.enabled) return;
      this.targetDist = THREE.MathUtils.clamp(this.targetDist + e.deltaY * 0.0035, 1.8, 11);
    }, { passive: true });
  }

  /* 把人物放到某个位置（贴地） */
  placeAt(x, z) {
    const y = Math.max(terrainHeight(x, z), WATER_Y - 0.12);
    this.avatar.root.position.set(x, y, z);
    this.heading = this.yaw + Math.PI;
    this.avatar.root.rotation.y = this.heading;
    this._camInit = false;
  }

  /* 从当前相机朝向初始化 */
  syncFromCamera(camera) {
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    this.yaw = Math.atan2(-dir.x, -dir.z);
    this.pitch = 0.18;
  }

  update(dt) {
    if (!this.enabled) return;
    const k = this.keys;

    this._fwd.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).normalize();
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).normalize();

    this._move.set(0, 0, 0);
    if (k.has('KeyW') || k.has('ArrowUp')) this._move.add(this._fwd);
    if (k.has('KeyS') || k.has('ArrowDown')) this._move.sub(this._fwd);
    if (k.has('KeyD') || k.has('ArrowRight')) this._move.add(this._right);
    if (k.has('KeyA') || k.has('ArrowLeft')) this._move.sub(this._right);

    const moving = this._move.lengthSq() > 0.0001;
    const running = k.has('ShiftLeft') || k.has('ShiftRight');
    const speed = this.walkSpeed * (running ? this.runMul : 1);

    if (moving) {
      this._move.normalize().multiplyScalar(speed);
      this.heading = lerpAngle(this.heading, Math.atan2(this._move.x, this._move.z), Math.min(1, dt * 11));
    }
    this.vel.lerp(this._move, 1 - Math.pow(0.0009, dt));

    const root = this.avatar.root;
    root.position.addScaledVector(this.vel, dt);

    // 边界
    root.position.x = THREE.MathUtils.clamp(root.position.x, -190, 190);
    root.position.z = THREE.MathUtils.clamp(root.position.z, -190, 190);

    // 简单建筑碰撞
    const pushOut = (cx, cz, r) => {
      const dx = root.position.x - cx, dz = root.position.z - cz;
      const d = Math.hypot(dx, dz);
      if (d < r && d > 0.0001) {
        root.position.x = cx + (dx / d) * r;
        root.position.z = cz + (dz / d) * r;
      }
    };
    pushOut(0, 0, 4.05);        // 风车塔
    pushOut(-8.3, 1.5, 5.6);    // 主屋
    pushOut(13.2, 3.4, 2.5);    // 小风车
    // 树木
    for (let i = 0; i < this.obstacles.length; i++) {
      const o = this.obstacles[i];
      const dx = root.position.x - o.x, dz = root.position.z - o.z;
      if (Math.abs(dx) > o.r || Math.abs(dz) > o.r) continue;
      const dd = Math.hypot(dx, dz);
      if (dd < o.r && dd > 0.0001) {
        root.position.x = o.x + (dx / dd) * o.r;
        root.position.z = o.z + (dz / dd) * o.r;
      }
    }

    // 贴地
    const gy = Math.max(terrainHeight(root.position.x, root.position.z), WATER_Y - 0.12);
    root.position.y += (gy - root.position.y) * Math.min(1, dt * 14);
    root.rotation.y = this.heading;

    // 动画
    const planarSpeed = Math.hypot(this.vel.x, this.vel.z);
    this.avatar.update(dt, planarSpeed, planarSpeed > 0.25);

    /* ---- 相机 ---- */
    this.dist += (this.targetDist - this.dist) * Math.min(1, dt * 8);

    this._target.copy(root.position);
    this._target.y += 1.18;

    const cp = Math.cos(this.pitch);
    const ox = Math.sin(this.yaw) * cp;
    const oz = Math.cos(this.yaw) * cp;
    const oy = Math.sin(this.pitch);

    // 地形 / 树木遮挡：沿视线采样，必要时拉近
    let d = this.dist;
    for (let i = 1; i <= 7; i++) {
      const t = i / 7;
      const px = this._target.x + ox * this.dist * t;
      const pz = this._target.z + oz * this.dist * t;
      const py = this._target.y + oy * this.dist * t;
      const g = Math.max(terrainHeight(px, pz), WATER_Y) + 0.45;
      let blocked = py < g;
      if (!blocked && py < 10) {
        for (let k = 0; k < this.obstacles.length; k++) {
          const o = this.obstacles[k];
          const rr = o.r + 1.15;
          if (Math.abs(px - o.x) < rr && Math.abs(pz - o.z) < rr) { blocked = true; break; }
        }
      }
      if (blocked) { d = Math.max(1.3, this.dist * (t - 0.14)); break; }
    }

    this._desired.set(
      this._target.x + ox * d,
      this._target.y + oy * d,
      this._target.z + oz * d
    );

    if (!this._camInit) {
      this.smoothCam.copy(this._desired);
      this._camInit = true;
    } else {
      const k2 = 1 - Math.pow(0.0000015, dt);
      this.smoothCam.lerp(this._desired, k2);
    }

    // 相机不要穿地
    const camGround = Math.max(terrainHeight(this.smoothCam.x, this.smoothCam.z), WATER_Y) + 0.35;
    if (this.smoothCam.y < camGround) this.smoothCam.y = camGround;

    this.camera.position.copy(this.smoothCam);
    this.camera.lookAt(this._target);
    this.camera.fov = 48;
    this.camera.updateProjectionMatrix();
  }
}
