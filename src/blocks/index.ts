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
} from "@minecraft/server";

import addMobEffect, { BlockAddMobEffectResponseOptions } from "./addMobEffect";
import damage, { BlockDamageEntityResponseOptions, BlockDamageEntityByProjectileResponseOptions, BlockDamageItemResponseOptions } from "./damage";
import decrementStack, { BlockDecrementStackResponseOptions } from "./decrementStack";
import die, { BlockDieResponseOptions } from "./die";
import playEffect, { BlockPlayEffectResponseOptions } from "./playEffect";
import playSound, { BlockPlaySoundResponseOptions } from "./playSound";
import removeMobEffect, { BlockRemoveMobEffectResponseOptions } from "./removeMobEffect";
import runCommand, { BlockRunCommandResponseOptions } from "./runCommand";
import setBlock, { BlockSetBlockResponseOptions } from "./setBlock";
import setBlockState, { BlockSetBlockStateResponseOptions } from "./setBlockState";
import spawnLoot, { BlockSpawnLootResponseOptions } from "./spawnLoot";
import teleport, { BlockTeleportResponseOptions } from "./teleport";
import transformItem, { BlockTransformItemResponseOptions } from "./transformItem";

export type RespondableBlockEvent =
  | BlockComponentEntityFallOnEvent
  | BlockComponentOnPlaceEvent
  | BlockComponentPlayerDestroyEvent
  | BlockComponentPlayerInteractEvent
  | BlockComponentPlayerPlaceBeforeEvent
  | BlockComponentRandomTickEvent
  | BlockComponentStepOffEvent
  | BlockComponentStepOnEvent
  | BlockComponentTickEvent;

export class BlockEventResponses {
  event: RespondableBlockEvent;

  constructor(event: RespondableBlockEvent) {
    this.event = event;
  }

  /**
   * Adds or updates an effect, like poison, to the involved entity.
   */
  addMobEffect = addMobEffect.bind(this);

  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage = damage.bind(this);

  /**
   * Decreases the stack amount of the item in the involved player's main hand.
   */
  decrementStack = decrementStack.bind(this);

  /**
   * Sets the block to air or kills the involved entity.
   */
  die = die.bind(this);

  /**
   * Creates a particle emitter at the block.
   */
  playEffect = playEffect.bind(this);

  /**
   * Plays a sound for all players at the block.
   */
  playSound = playSound.bind(this);

  /**
   * Removes an effect, like poison, from the involved entity.
   */
  removeMobEffect = removeMobEffect.bind(this);

  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand = runCommand.bind(this);

  /**
   * Sets the block type or permutation at a specified offset to the block.
   */
  setBlock = setBlock.bind(this);

  /**
   * Updates the block's permutation to match inputted state values.
   */
  setBlockState = setBlockState.bind(this);

  /**
   * Spawns loot table items at the block.
   */
  spawnLoot = spawnLoot.bind(this);

  /**
   * Teleports the involved entity randomly around a specified destination.
   */
  teleport = teleport.bind(this);

  /**
   * Replaces the item in the involved player's main hand.
   */
  transformItem = transformItem.bind(this);
}

export {
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
};
