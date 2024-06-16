import { EntityDamageCause, Entity, Player } from "@minecraft/server";
import { damageItem } from "../utils";

import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemDamageEntityResponseOptions {
  target: "holder" | "victim";
  amount: number;
  cause: EntityDamageCause;
  damagingEntity?: Entity;
}

export interface ItemDamageEntityByProjectileResponseOptions {
  target: "holder" | "victim";
  amount: number;
  damagingEntity?: Entity;
  damagingProjectile: Entity;
}

export interface ItemDamageItemResponseOptions {
  target: "item";
  amount: number;
  ignoreGameMode?: boolean;
  ignoreDamageChance?: boolean;
}

export default function itemDamageResponse(this: ItemEventResponses, options: ItemDamageEntityResponseOptions | ItemDamageEntityByProjectileResponseOptions | ItemDamageItemResponseOptions) {
  if (options.target === "item") {
    const { amount, ignoreDamageChance, ignoreGameMode } = options;

    const player = getHolder(this.event);
    if (!(player instanceof Player)) {
      throw new Error("Item holder must be a player for the damage event response.");
    }

    damageItem({
      player,
      amount,
      ignoreDamageChance,
      ignoreGameMode,
    });
  } else {
    const { amount, target, ...other } = options;

    const getEntity = target === "victim" ? getVictim : getHolder;

    const entity = getEntity(this.event);
    entity.applyDamage(amount, other);
  }

  return this;
}
