import { EffectType } from "@minecraft/server";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockAddMobEffectResponseOptions {
  effect: EffectType | string;
  duration: number;
  amplifier?: number;
  showParticles?: boolean;
}

export default function blockAddMobEffectResponse(this: BlockEventResponses, options: BlockAddMobEffectResponseOptions): typeof this {
  const { effect, duration, amplifier = 1, showParticles = true } = options;

  const entity = getEntity(this.event);

  entity.addEffect(effect, duration, {
    amplifier,
    showParticles,
  });

  return this;
}
