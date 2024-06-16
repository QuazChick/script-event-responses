import { EffectType } from "@minecraft/server";

import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemRemoveMobEffectResponseOptions {
  effect: EffectType | string;
  target?: "holder" | "victim";
}

export default function itemRemoveMobEffectResponse(this: ItemEventResponses, options: ItemRemoveMobEffectResponseOptions) {
  const { effect, target } = options;

  const getEntity = target === "victim" ? getVictim : getHolder;

  const entity = getEntity(this.event);
  entity.removeEffect(effect);

  return this;
}
