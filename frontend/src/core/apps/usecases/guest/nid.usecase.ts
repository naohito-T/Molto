import { IGuestNidService } from '@/core/apps/interfaces/guest/nid.interface';
import { NidService } from '@/core/infrastructures/services/nid';

export class GuestNidUsecase extends NidService implements IGuestNidService {}
