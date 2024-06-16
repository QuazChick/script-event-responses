import { EffectType } from "@minecraft/server";

import { ItemEventResponses } from ".";
import { getVictim, getHolder } from "./targets";

export interface ItemAddMobEffectResponseOptions {
  effect: EffectType | string;
  duration: number;
  amplifier?: number;
  showParticles?: boolean;
  target?: "holder" | "victim";
}

export default function itemAddMobEffectResponse(this: ItemEventResponses, options: ItemAddMobEffectResponseOptions) {
  const { effect, duration, amplifier = 1, showParticles = true, target } = options;

  const getEntity = target === "victim" ? getVictim : getHolder;

  const entity = getEntity(this.event);
  entity.addEffect(effect, duration, {
    amplifier,
    showParticles,
  });

  return this;
}
