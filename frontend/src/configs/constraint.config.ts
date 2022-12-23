import { BaseConfig } from './_base';
/**
 * @desc App Constraint
 * @NOTE envではなく、定数管理
 */

/**
 * @desc 当アプリのconst管理
 */
export class AppConstraintConfig extends BaseConfig {
  /**
   * @desc Page default title
   */
  public static readonly PUBLIC_URL =
    this.RUN_ENV === 'development' ? 'http://localhost:3000/' : 'https://moderato.vercel.app/';
}

/**
 * @desc AppMetaConfig Meta管理
 * @NOTE 基本的には各pageで設定するが、設定しなかった場合のdefault値
 */
export class ConstraintMetaConfig extends BaseConfig {
  /**
   * @desc Page default title
   */
  public static readonly PAGE_TITLE = 'Naohito-T | Portfolio';

  /**
   * @desc Page default description
   */
  public static readonly PAGE_DESCRIPTION =
    '千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。';

  /**
   * @desc Page default url
   */
  public static readonly PAGE_URL =
    this.RUN_ENV === 'development' ? 'http://localhost:3000/' : 'https://moderato.vercel.app/';

  /**
   * @desc Page default og image
   */
  public static readonly PAGE_OG_IMAGE = '/images/about_me.jpg';

  /**
   * @desc Page footer copyright
   */
  public static readonly COPYRIGHT = '©Naohito-T Blog.';
}

export class AppGSAPMatchMediaConfig extends BaseConfig {
  /**
   * @desc 769px以上
   */
  public static readonly MEDIA_PC = '(min-width: 769px)';

  /**
   * @desc 768px以下
   */
  public static readonly MEDIA_SP = '(max-width: 768px)';

  /**
   * @desc 768px以下
   */
  public static readonly MEDIA_SMALL_SP = '(max-width: 375px)';
}
