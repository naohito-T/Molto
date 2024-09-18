import { createClient } from 'microcms-js-sdk';
import { AppEnvConfig } from '@/configs';

export abstract class CMSService {
  protected readonly cmsClient = createClient({
    serviceDomain: AppEnvConfig.MICRO_CMS_DOMAIN,
    apiKey: AppEnvConfig.MICRO_CMS_API_KEY,
  });
}
