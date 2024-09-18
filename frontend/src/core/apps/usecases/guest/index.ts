import { IGuestAPIs } from '@/core/apps/interfaces/guest';
import { GuestCMSUsecase } from './cms.usecase';
import { GuestNidUsecase } from './nid.usecase';

export const GuestAPIs: IGuestAPIs = {
  actor: 'guest',
  cms: new GuestCMSUsecase(),
  nid: new GuestNidUsecase(),
};
