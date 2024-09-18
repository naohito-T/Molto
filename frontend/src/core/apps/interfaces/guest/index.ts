import { IGuestCMSService } from './cms.interface';
import { IGuestNidService } from './nid.interface';

export interface IGuestAPIs {
  actor: 'guest';
  cms: IGuestCMSService;
  nid: IGuestNidService;
}
