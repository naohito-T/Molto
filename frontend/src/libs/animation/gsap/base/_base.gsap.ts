import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

/**
 * @NOTE distからimportしないとerrorになる。
 * @TODO これやる
 * https://devsakaso.com/gsap-non-loop-slider/
 */
export abstract class AppGSAP {
  public static appGsap: typeof gsap;

  /**
   * @desc 即時実行でPluginを登録してからgsapに入れる。
   */
  private static initialize = (() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    AppGSAP.appGsap = gsap;
  })();
}
