/**
 * @license
 * MIT License
 *
 * Copyright (c) 2024 QuazChick
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {
  BlockComponentEntityFallOnEvent,
  BlockComponentOnPlaceEvent,
  BlockComponentPlayerDestroyEvent,
  BlockComponentPlayerInteractEvent,
  BlockComponentPlayerPlaceBeforeEvent,
  BlockComponentRandomTickEvent,
  BlockComponentStepOffEvent,
  BlockComponentStepOnEvent,
  BlockComponentTickEvent,
  EffectType,
  EntityDamageCause,
  Entity,
  MolangVariableMap,
  Vector3,
  BlockPermutation,
  BlockType,
  ItemStack,
  Dimension,
  Vector2,
  ItemComponentBeforeDurabilityDamageEvent,
  ItemComponentCompleteUseEvent,
  ItemComponentConsumeEvent,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
} from "@minecraft/server";
interface BlockAddMobEffectResponseOptions {
  effect: EffectType | string;
  duration: number;
  amplifier?: number;
  showParticles?: boolean;
}
interface BlockDamageEntityResponseOptions {
  target: "entity";
  amount: number;
  cause: EntityDamageCause;
  damagingEntity?: Entity;
}
interface BlockDamageEntityByProjectileResponseOptions {
  target: "entity";
  amount: number;
  damagingEntity?: Entity;
  damagingProjectile: Entity;
}
interface BlockDamageItemResponseOptions {
  target: "item";
  amount: number;
  ignoreDamageChance?: boolean;
  ignoreGameMode?: boolean;
}
interface BlockDecrementStackResponseOptions {
  amount?: number;
  ignoreGameMode?: boolean;
}
interface BlockDieResponseOptions {
  target?: "block" | "entity";
}
interface BlockPlayEffectResponseOptions {
  effect: string;
  molangVariables?: MolangVariableMap;
  offset?: Vector3;
  target?: "block" | "entity";
}
interface BlockPlaySoundResponseOptions {
  sound: string;
  pitch?: number;
  volume?: number;
  offset?: Vector3;
  target?: "block" | "entity";
}
interface BlockRemoveMobEffectResponseOptions {
  effect: EffectType | string;
}
interface BlockRunCommandResponseOptions {
  target?: "dimension" | "entity";
  command: string | string[];
}
interface BlockSetBlockResponseOptions {
  block: BlockType | BlockPermutation | string;
  offset?: Vector3;
  target?: "block" | "entity";
}
interface BlockSetBlockStateResponseOptions {
  [state: string]: boolean | number | string;
}
interface BlockSpawnLootResponseOptions {
  table: string | ItemStack;
  offset?: Vector3;
  target?: "block" | "entity";
}
interface BlockTeleportResponseOptions {
  checkForBlocks?: boolean;
  dimension?: Dimension;
  facingLocation?: Vector3;
  keepVelocity?: boolean;
  location: Vector3;
  range?: Vector3;
  rotation?: Vector2;
}
interface BlockTransformItemResponseOptions {
  itemStack: ItemStack;
}
type RespondableBlockEvent =
  | BlockComponentEntityFallOnEvent
  | BlockComponentOnPlaceEvent
  | BlockComponentPlayerDestroyEvent
  | BlockComponentPlayerInteractEvent
  | BlockComponentPlayerPlaceBeforeEvent
  | BlockComponentRandomTickEvent
  | BlockComponentStepOffEvent
  | BlockComponentStepOnEvent
  | BlockComponentTickEvent;
declare class BlockEventResponses {
  event: RespondableBlockEvent;
  constructor(event: RespondableBlockEvent);
  /**
   * Adds or updates an effect, like poison, to the involved entity.
   */
  addMobEffect: (options: BlockAddMobEffectResponseOptions) => BlockEventResponses;
  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage: (options: BlockDamageEntityResponseOptions | BlockDamageEntityByProjectileResponseOptions | BlockDamageItemResponseOptions) => BlockEventResponses;
  /**
   * Decreases the stack amount of the item in the involved player's main hand.
   */
  decrementStack: (options?: BlockDecrementStackResponseOptions | undefined) => BlockEventResponses;
  /**
   * Sets the block to air or kills the involved entity.
   */
  die: (options?: BlockDieResponseOptions | undefined) => BlockEventResponses;
  /**
   * Creates a particle emitter at the block.
   */
  playEffect: (options: BlockPlayEffectResponseOptions) => BlockEventResponses;
  /**
   * Plays a sound for all players at the block.
   */
  playSound: (options: BlockPlaySoundResponseOptions) => BlockEventResponses;
  /**
   * Removes an effect, like poison, from the involved entity.
   */
  removeMobEffect: (options: BlockRemoveMobEffectResponseOptions) => BlockEventResponses;
  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand: (options: BlockRunCommandResponseOptions) => BlockEventResponses;
  /**
   * Sets the block type or permutation at a specified offset to the block.
   */
  setBlock: (options: BlockSetBlockResponseOptions) => BlockEventResponses;
  /**
   * Updates the block's permutation to match inputted state values.
   */
  setBlockState: (options: BlockSetBlockStateResponseOptions) => BlockEventResponses;
  /**
   * Spawns loot table items at the block.
   */
  spawnLoot: (options: BlockSpawnLootResponseOptions) => BlockEventResponses;
  /**
   * Teleports the involved entity randomly around a specified destination.
   */
  teleport: (options: BlockTeleportResponseOptions) => BlockEventResponses;
  /**
   * Replaces the item in the involved player's main hand.
   */
  transformItem: (options: BlockTransformItemResponseOptions) => BlockEventResponses;
}
interface ItemAddMobEffectResponseOptions {
  effect: EffectType | string;
  duration: number;
  amplifier?: number;
  showParticles?: boolean;
  target?: "holder" | "victim";
}
interface ItemDamageEntityResponseOptions {
  target: "holder" | "victim";
  amount: number;
  cause: EntityDamageCause;
  damagingEntity?: Entity;
}
interface ItemDamageEntityByProjectileResponseOptions {
  target: "holder" | "victim";
  amount: number;
  damagingEntity?: Entity;
  damagingProjectile: Entity;
}
interface ItemDamageItemResponseOptions {
  target: "item";
  amount: number;
  ignoreGameMode?: boolean;
  ignoreDamageChance?: boolean;
}
interface ItemDecrementStackResponseOptions {
  amount?: number;
  ignoreGameMode?: boolean;
  target?: "holder" | "victim";
}
interface ItemRemoveMobEffectResponseOptions {
  effect: EffectType | string;
  target?: "holder" | "victim";
}
interface ItemRunCommandResponseOptions {
  command: string | string[];
  target?: "holder" | "victim";
}
interface ItemTeleportResponseOptions {
  checkForBlocks?: boolean;
  dimension?: Dimension;
  facingLocation?: Vector3;
  keepVelocity?: boolean;
  location: Vector3;
  range?: Vector3;
  rotation?: Vector2;
  target?: "holder" | "victim";
}
interface ItemTransformItemResponseOptions {
  itemStack: ItemStack;
  target?: "holder" | "victim";
}
type RespondableItemEvent =
  | ItemComponentBeforeDurabilityDamageEvent
  | ItemComponentCompleteUseEvent
  | ItemComponentConsumeEvent
  | ItemComponentHitEntityEvent
  | ItemComponentMineBlockEvent
  | ItemComponentUseEvent
  | ItemComponentUseOnEvent;
declare class ItemEventResponses {
  event: RespondableItemEvent;
  constructor(event: RespondableItemEvent);
  /**
   * Adds or updates an effect, like poison, to an involved entity.
   */
  addMobEffect: (options: ItemAddMobEffectResponseOptions) => ItemEventResponses;
  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage: (options: ItemDamageEntityResponseOptions | ItemDamageEntityByProjectileResponseOptions | ItemDamageItemResponseOptions) => ItemEventResponses;
  /**
   * Decreases the stack amount of the item.
   */
  decrementStack: (options?: ItemDecrementStackResponseOptions | undefined) => ItemEventResponses;
  /**
   * Removes an effect, like poison, from an involved entity.
   */
  removeMobEffect: (options: ItemRemoveMobEffectResponseOptions) => ItemEventResponses;
  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand: (options: ItemRunCommandResponseOptions) => ItemEventResponses;
  /**
   * Teleports an involved entity randomly around a specified destination.
   */
  teleport: (options: ItemTeleportResponseOptions) => ItemEventResponses;
  /**
   * Replaces the item.
   */
  transformItem: (options: ItemTransformItemResponseOptions) => ItemEventResponses;
}
export {
  RespondableBlockEvent,
  BlockEventResponses,
  BlockAddMobEffectResponseOptions,
  BlockDamageItemResponseOptions,
  BlockDamageEntityResponseOptions,
  BlockDamageEntityByProjectileResponseOptions,
  BlockDecrementStackResponseOptions,
  BlockDieResponseOptions,
  BlockPlayEffectResponseOptions,
  BlockPlaySoundResponseOptions,
  BlockRemoveMobEffectResponseOptions,
  BlockRunCommandResponseOptions,
  BlockSetBlockResponseOptions,
  BlockSetBlockStateResponseOptions,
  BlockSpawnLootResponseOptions,
  BlockTeleportResponseOptions,
  BlockTransformItemResponseOptions,
  RespondableItemEvent,
  ItemEventResponses,
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
