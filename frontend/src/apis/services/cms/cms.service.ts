import type { CMSClient } from '@/apis/containers';

export abstract class CMSService {
  protected readonly mCMSClient: CMSClient;

  constructor(client: CMSClient) {
    this.mCMSClient = client;
  }
}
