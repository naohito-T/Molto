import { resourceAdapter, Actor } from '@/core/adapters';
import { IGuestAPIs } from '@/core/apps/interfaces/guest';

// ServerSideからDomainに入るためのClassでありコントローラー
export class ServerContainer {
  public readonly api: IGuestAPIs;

  constructor(actor: Actor) {
    this.api = resourceAdapter(actor);
  }
}
