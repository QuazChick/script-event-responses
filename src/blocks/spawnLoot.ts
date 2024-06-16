import { ItemStack, Vector3 } from "@minecraft/server";
import { getOffsetLocation } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockSpawnLootResponseOptions {
  table: string | ItemStack;
  offset?: Vector3;
  target?: "block" | "entity";
}

export default function blockSpawnLootResponse(this: BlockEventResponses, options: BlockSpawnLootResponseOptions) {
  const { table, offset, target } = options;

  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);

  if (typeof table === "string") {
    const { x, y, z } = location;
    this.event.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot "${table}"`);
  } else {
    this.event.dimension.spawnItem(table, location);
  }

  return this;
}
