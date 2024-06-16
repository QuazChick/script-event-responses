import { BlockPermutation, BlockType, Vector3 } from "@minecraft/server";
import { getOffsetLocation } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockSetBlockResponseOptions {
  block: BlockType | BlockPermutation | string;
  offset?: Vector3;
  target?: "block" | "entity";
}

export default function blockSetBlockResponse(this: BlockEventResponses, options: BlockSetBlockResponseOptions) {
  const { block, offset, target } = options;

  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.location;

  const location = getOffsetLocation(origin, offset);
  location.x = Math.floor(location.x);
  location.y = Math.floor(location.y);
  location.z = Math.floor(location.z);

  if (block instanceof BlockPermutation) this.event.dimension.setBlockPermutation(location, block);
  else this.event.dimension.setBlockType(location, block);

  return this;
}
