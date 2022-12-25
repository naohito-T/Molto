import { BaseConfig } from './_base';

/**
 * @desc Env config
 */
export class AppEnvConfig extends BaseConfig {
  public static readonly MICRO_CMS_DOMAIN = process.env.MICRO_CMS_DOMAIN ?? '';

  public static readonly MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? '';

  public static readonly PUBLIC_URL = process.env.PUBLIC_URL ?? 'http://localhost:3000';
}
