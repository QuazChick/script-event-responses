import { Vector3 } from "@minecraft/server";
import { getOffsetLocation } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockPlaySoundResponseOptions {
  sound: string;
  pitch?: number;
  volume?: number;
  offset?: Vector3;
  target?: "block" | "entity";
}

export default function blockPlaySoundResponse(this: BlockEventResponses, options: BlockPlaySoundResponseOptions) {
  const { sound, offset, target, ...other } = options;

  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);

  this.event.dimension.playSound(sound, location, other);

  return this;
}
