import { MolangVariableMap, Vector3 } from "@minecraft/server";
import { getOffsetLocation } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockPlayEffectResponseOptions {
  effect: string;
  molangVariables?: MolangVariableMap;
  offset?: Vector3;
  target?: "block" | "entity";
}

export default function blockPlayEffectResponse(this: BlockEventResponses, options: BlockPlayEffectResponseOptions) {
  const { effect, molangVariables, offset, target } = options;

  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);

  this.event.dimension.spawnParticle(effect, location, molangVariables);

  return this;
}
