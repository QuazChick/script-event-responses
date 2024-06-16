import { EquipmentSlot, ItemStack, Player } from "@minecraft/server";

import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemTransformItemResponseOptions {
  itemStack: ItemStack;
  target?: "holder" | "victim";
}

export default function itemTransformItemResponse(this: ItemEventResponses, options: ItemTransformItemResponseOptions) {
  const { itemStack, target } = options;

  const getPlayer = target === "victim" ? getVictim : getHolder;

  const player = getPlayer(this.event);
  if (!(player instanceof Player)) {
    throw new Error(`Item ${target} must be a player for the transform item event response.`);
  }

  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return this;

  equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);

  return this;
}
