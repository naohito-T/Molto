import { IGuestAPIs } from '@/core/apps/interfaces/guest';
import { GuestAPIs } from '@/core/apps/usecases/guest';

export type Actor = 'guest' | 'user' | 'test';

export interface Resources {
  guest: IGuestAPIs;
  // user: IUserAPIs
}

/**
 * actorをもらい適切なapiをインスタンス化し渡す
 */
export const resourceAdapter = (actor: Actor): IGuestAPIs => {
  switch (actor) {
    case 'guest':
      return GuestAPIs;
    case 'user':
      return GuestAPIs;
    case 'test':
      return GuestAPIs;
    default:
      return GuestAPIs;
  }
};
