import { EntityDamageCause, Entity, Player } from "@minecraft/server";
import { damageItem } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockDamageEntityResponseOptions {
  target: "entity";
  amount: number;
  cause: EntityDamageCause;
  damagingEntity?: Entity;
}

export interface BlockDamageEntityByProjectileResponseOptions {
  target: "entity";
  amount: number;
  damagingEntity?: Entity;
  damagingProjectile: Entity;
}
export interface BlockDamageItemResponseOptions {
  target: "item";
  amount: number;
  ignoreDamageChance?: boolean;
  ignoreGameMode?: boolean;
}

export default function blockDamageResponse(this: BlockEventResponses, options: BlockDamageEntityResponseOptions | BlockDamageEntityByProjectileResponseOptions | BlockDamageItemResponseOptions) {
  if (options.target === "item") {
    const { amount, ignoreDamageChance, ignoreGameMode } = options;

    const player = getEntity(this.event);
    if (!(player instanceof Player)) {
      throw new Error("Involved entity must be a player for the damage item event response.");
    }

    damageItem({
      player,
      amount,
      ignoreDamageChance,
      ignoreGameMode,
    });
  } else {
    const { amount, target, ...other } = options;

    const entity = getEntity(this.event);
    entity.applyDamage(amount, other);
  }

  return this;
}
