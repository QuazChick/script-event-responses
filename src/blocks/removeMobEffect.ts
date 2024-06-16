import { EffectType } from "@minecraft/server";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockRemoveMobEffectResponseOptions {
  effect: EffectType | string;
}

export default function blockRemoveMobEffectResponse(this: BlockEventResponses, options: BlockRemoveMobEffectResponseOptions) {
  const entity = getEntity(this.event);
  entity.removeEffect(options.effect);

  return this;
}
