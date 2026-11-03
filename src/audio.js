/* 程序化环境音：风、鸟、水 */
export class Ambience {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.nodes = {};
    this._birdTimer = 0;
    this._nextBird = 2.5;
  }

  start() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.0;
    master.connect(ctx.destination);
    this.nodes.master = master;

    // ---- 噪声缓冲 ----
    const len = ctx.sampleRate * 3;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }

    // ---- 风 ----
    const windSrc = ctx.createBufferSource();
    windSrc.buffer = buf; windSrc.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 520;
    windFilter.Q.value = 0.7;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.30;
    windSrc.connect(windFilter).connect(windGain).connect(master);
    windSrc.start();

    // 风的起伏
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.16;
    lfo.connect(lfoGain).connect(windGain.gain);
    lfo.start();
    const lfo2 = ctx.createOscillator();
    lfo2.frequency.value = 0.11;
    const lfo2Gain = ctx.createGain();
    lfo2Gain.gain.value = 220;
    lfo2.connect(lfo2Gain).connect(windFilter.frequency);
    lfo2.start();

    // ---- 水声 ----
    const waterSrc = ctx.createBufferSource();
    waterSrc.buffer = buf; waterSrc.loop = true;
    const wf = ctx.createBiquadFilter();
    wf.type = 'bandpass';
    wf.frequency.value = 1500;
    wf.Q.value = 0.8;
    const wg = ctx.createGain();
    wg.gain.value = 0.0;
    waterSrc.connect(wf).connect(wg).connect(master);
    waterSrc.start();
    this.nodes.water = wg;

    // ---- 鸟 ----
    this.nodes.birdBus = ctx.createGain();
    this.nodes.birdBus.gain.value = 0.12;
    this.nodes.birdBus.connect(master);

    master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 3.0);
    this.enabled = true;
  }

  setWaterLevel(v) {
    if (!this.ctx || !this.nodes.water) return;
    this.nodes.water.gain.setTargetAtTime(Math.min(0.5, v), this.ctx.currentTime, 0.4);
  }

  chirp() {
    const ctx = this.ctx;
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const notes = 2 + Math.floor(Math.random() * 4);
    const base = 1900 + Math.random() * 1700;
    for (let i = 0; i < notes; i++) {
      const t = t0 + i * (0.055 + Math.random() * 0.05);
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(base * (0.85 + Math.random() * 0.4), t);
      osc.frequency.exponentialRampToValueAtTime(base * (1.25 + Math.random() * 0.5), t + 0.035);
      osc.frequency.exponentialRampToValueAtTime(base * 0.9, t + 0.08);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.5, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.connect(g).connect(this.nodes.birdBus);
      osc.start(t);
      osc.stop(t + 0.13);
    }
  }

  update(dt, camPos, waterDist) {
    if (!this.ctx) return;
    this.setWaterLevel(1.0 - Math.min(1, waterDist / 26));
    this._birdTimer += dt;
    if (this._birdTimer > this._nextBird) {
      this._birdTimer = 0;
      this._nextBird = 2.2 + Math.random() * 6.5;
      this.chirp();
    }
  }

  toggle() {
    if (!this.ctx) { this.start(); return true; }
    this.enabled = !this.enabled;
    const t = this.ctx.currentTime;
    this.nodes.master.gain.cancelScheduledValues(t);
    this.nodes.master.gain.setTargetAtTime(this.enabled ? 0.55 : 0.0, t, 0.25);
    return this.enabled;
  }
}
