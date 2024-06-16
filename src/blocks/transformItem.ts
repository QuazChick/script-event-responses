import { EquipmentSlot, ItemStack, Player } from "@minecraft/server";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockTransformItemResponseOptions {
  itemStack: ItemStack;
}

export default function blockTransformItemResponse(this: BlockEventResponses, options: BlockTransformItemResponseOptions) {
  const player = getEntity(this.event);
  if (!(player instanceof Player)) {
    throw new Error("Involved entity must be a player for the transform item event response.");
  }

  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return this;

  equippable.setEquipment(EquipmentSlot.Mainhand, options.itemStack);

  return this;
}
