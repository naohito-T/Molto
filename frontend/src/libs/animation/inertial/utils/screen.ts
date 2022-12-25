type Size = {
  x: number;
  y: number;
};

/**
 * Screen
 * ウィンドウサイズ
 */
export class Screen {
  public size: Size;

  public dpr: number = 0;

  constructor() {
    this.size = { x: 0, y: 0 };
    this.resize();
  }

  get center() {
    return { x: this.size.x / 2, y: this.size.y / 2 };
  }

  get aspect() {
    return this.size.x / this.size.y;
  }

  get min() {
    return Math.min(this.size.x, this.size.y);
  }

  get max() {
    return Math.max(this.size.x, this.size.y);
  }

  public resize() {
    this.size.x = window.innerWidth;
    this.size.y = window.innerHeight;
    this.dpr = window.devicePixelRatio;
  }
}

// const screen = new Screen();
