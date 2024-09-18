import { createClient } from 'microcms-js-sdk';
import { GuestCMSResource } from '@/apis/resources/guest';
import { AppEnvConfig } from '@/configs';

export const client = createClient({
  serviceDomain: AppEnvConfig.MICRO_CMS_DOMAIN,
  apiKey: AppEnvConfig.MICRO_CMS_API_KEY,
});

export type CMSClient = typeof client;

export const GuestAPI = new GuestCMSResource(client);
