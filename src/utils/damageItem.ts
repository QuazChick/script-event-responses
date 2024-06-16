import { EquipmentSlot, GameMode, Player } from "@minecraft/server";

export interface DamageItemOptions {
  player: Player;
  amount: number;
  ignoreDamageChance?: boolean;
  ignoreGameMode?: boolean;
}

export function damageItem(options: DamageItemOptions) {
  const { player, amount, ignoreDamageChance, ignoreGameMode } = options;

  if (!ignoreGameMode && player.getGameMode() === GameMode.creative) return;

  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;

  const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
  if (!mainhand.hasItem()) return;

  const itemStack = mainhand.getItem();
  if (!itemStack) return;

  const durability = itemStack.getComponent("minecraft:durability");
  if (!durability) return;

  if (!ignoreDamageChance) {
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    const unbreakingLevel = enchantable?.getEnchantment("minecraft:unbreaking")?.level;

    const damageChance = durability.getDamageChance(unbreakingLevel) / 100;

    if (Math.random() > damageChance) return;
  }

  const shouldBreak = durability.damage + amount > durability.maxDurability;

  if (shouldBreak) {
    mainhand.setItem(undefined);
    player.dimension.playSound("random.break", player.location);
  } else {
    durability.damage += amount;
    mainhand.setItem(itemStack);
  }
}
