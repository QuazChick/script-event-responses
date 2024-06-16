import { Player } from "@minecraft/server";
import { decrementStack } from "../utils";

import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemDecrementStackResponseOptions {
  amount?: number;
  ignoreGameMode?: boolean;
  target?: "holder" | "victim";
}

export default function itemDecrementStackResponse(this: ItemEventResponses, options?: ItemDecrementStackResponseOptions) {
  const { amount, ignoreGameMode, target } = options ?? {};

  const getPlayer = target === "victim" ? getVictim : getHolder;

  const player = getPlayer(this.event);
  if (!(player instanceof Player)) {
    throw new Error(`Item ${target} must be a player for the decrement stack event response.`);
  }

  decrementStack({
    player,
    amount,
    ignoreGameMode,
  });

  return this;
}
