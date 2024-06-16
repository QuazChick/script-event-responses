import { Player } from "@minecraft/server";
import { decrementStack } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockDecrementStackResponseOptions {
  amount?: number;
  ignoreGameMode?: boolean;
}

export default function blockDecrementStackResponse(this: BlockEventResponses, options?: BlockDecrementStackResponseOptions) {
  const { amount = 1, ignoreGameMode } = options ?? {};

  const player = getEntity(this.event);
  if (!(player instanceof Player)) {
    throw new Error("Involved entity must be a player for the decrement stack event response.");
  }

  decrementStack({
    player,
    amount,
    ignoreGameMode,
  });

  return this;
}
