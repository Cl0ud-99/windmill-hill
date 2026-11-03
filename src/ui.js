export class UI {
  constructor() {
    this.loader = document.getElementById('loader');
    this.bar = document.getElementById('bar');
    this.pct = document.getElementById('pct');
    this.tip = document.getElementById('tip');
    this.titlecard = document.getElementById('titlecard');
    this.hud = document.getElementById('hud');
    this.modeText = document.getElementById('modeText');
    this.modeEl = document.getElementById('mode');
    this.shotEl = document.getElementById('shot');
    this.shotIdx = document.getElementById('shotIdx');
    this.shotName = document.getElementById('shotName');
    this.fadeEl = document.getElementById('fade');
    this.hintClick = document.getElementById('hintClick');
    this._shotTimer = null;
    this.hidden = false;
  }

  progress(p, tip) {
    if (this.bar) this.bar.style.width = `${Math.round(p * 100)}%`;
    if (this.pct) this.pct.textContent = Math.round(p * 100);
    if (tip && this.tip) this.tip.textContent = tip;
  }

  hideLoader() {
    this.loader?.classList.add('hide');
    setTimeout(() => this.loader?.remove(), 1500);
  }

  showTitle(ms = 4200) {
    this.titlecard?.classList.add('show');
    setTimeout(() => this.titlecard?.classList.remove('show'), ms);
  }

  setMode(mode) {
    if (!this.hud) return;
    this.hud.classList.toggle('cine', mode === 'cine');
    this.hud.classList.toggle('roaming', mode === 'roam');
    const label = mode === 'cine' ? 'CINEMATIC' : mode === 'third' ? 'CHARACTER' : 'FREE ROAM';
    if (this.modeText) this.modeText.textContent = label;
    this.modeEl?.classList.toggle('cine', mode === 'cine');
    this.hud.classList.toggle('third', mode === 'third');
  }

  setShot(i, name, jp) {
    if (!this.shotEl) return;
    this.shotIdx.textContent = `SHOT ${String(i + 1).padStart(2, '0')}`;
    this.shotName.textContent = `${name}`;
    this.shotEl.classList.add('show');
    clearTimeout(this._shotTimer);
    this._shotTimer = setTimeout(() => this.shotEl.classList.remove('show'), 3200);
  }

  fade(to, ms = 320) {
    if (!this.fadeEl) return;
    this.fadeEl.style.transition = `opacity ${ms}ms ease`;
    this.fadeEl.style.opacity = String(to);
  }

  toggleHud() {
    this.hidden = !this.hidden;
    this.hud?.classList.toggle('off', this.hidden);
  }

  showHint(show, html) {
    if (!this.hintClick) return;
    if (html) this.hintClick.innerHTML = html;
    this.hintClick.classList.toggle('show', show);
  }
}
