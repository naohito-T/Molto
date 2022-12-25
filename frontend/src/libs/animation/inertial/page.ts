import { Screen } from './utils/screen';
import { InertialScroller } from './inertial-scroller';

class Page {
  public screen = new Screen();

  constructor() {
    const containerElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll') ?? ({} as HTMLElement);
    const contentElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll_content') ?? ({} as HTMLElement);

    new InertialScroller(containerElement, contentElement);

    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  onResize() {
    this.screen.resize();
  }
}

export { Page };
