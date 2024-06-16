import {
  ItemComponentBeforeDurabilityDamageEvent,
  ItemComponentCompleteUseEvent,
  ItemComponentConsumeEvent,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
} from "@minecraft/server";

import addMobEffect, { ItemAddMobEffectResponseOptions } from "./addMobEffect";
import damage, { ItemDamageEntityResponseOptions, ItemDamageEntityByProjectileResponseOptions, ItemDamageItemResponseOptions } from "./damage";
import decrementStack, { ItemDecrementStackResponseOptions } from "./decrementStack";
import removeMobEffect, { ItemRemoveMobEffectResponseOptions } from "./removeMobEffect";
import runCommand, { ItemRunCommandResponseOptions } from "./runCommand";
import teleport, { ItemTeleportResponseOptions } from "./teleport";
import transformItem, { ItemTransformItemResponseOptions } from "./transformItem";

export type RespondableItemEvent =
  | ItemComponentBeforeDurabilityDamageEvent
  | ItemComponentCompleteUseEvent
  | ItemComponentConsumeEvent
  | ItemComponentHitEntityEvent
  | ItemComponentMineBlockEvent
  | ItemComponentUseEvent
  | ItemComponentUseOnEvent;

export class ItemEventResponses {
  event: RespondableItemEvent;

  constructor(event: RespondableItemEvent) {
    this.event = event;
  }

  /**
   * Adds or updates an effect, like poison, to an involved entity.
   */
  addMobEffect = addMobEffect.bind(this);

  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage = damage.bind(this);

  /**
   * Decreases the stack amount of the item.
   */
  decrementStack = decrementStack.bind(this);

  /**
   * Removes an effect, like poison, from an involved entity.
   */
  removeMobEffect = removeMobEffect.bind(this);

  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand = runCommand.bind(this);

  /**
   * Teleports an involved entity randomly around a specified destination.
   */
  teleport = teleport.bind(this);

  /**
   * Replaces the item.
   */
  transformItem = transformItem.bind(this);
}

export {
  ItemAddMobEffectResponseOptions,
  ItemDamageItemResponseOptions,
  ItemDamageEntityResponseOptions,
  ItemDamageEntityByProjectileResponseOptions,
  ItemDecrementStackResponseOptions,
  ItemRemoveMobEffectResponseOptions,
  ItemRunCommandResponseOptions,
  ItemTeleportResponseOptions,
  ItemTransformItemResponseOptions,
};
