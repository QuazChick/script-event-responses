import { EquipmentSlot, GameMode, Player } from "@minecraft/server";

export interface DecrementStackOptions {
  player: Player;
  amount?: number;
  ignoreGameMode?: boolean;
}

export function decrementStack(options: DecrementStackOptions) {
  const { player, amount = 1, ignoreGameMode } = options;

  if (!ignoreGameMode && player.getGameMode() === GameMode.creative) return;

  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;

  const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
  if (!mainhand.hasItem()) return;

  if (mainhand.amount - amount >= 1) {
    mainhand.amount -= amount;
  } else {
    mainhand.setItem(undefined);
  }
}
