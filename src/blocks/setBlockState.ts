import { BlockPermutation } from "@minecraft/server";

import { BlockEventResponses } from ".";

export interface BlockSetBlockStateResponseOptions {
  [state: string]: boolean | number | string;
}

export default function blockSetBlockStateResponse(this: BlockEventResponses, options: BlockSetBlockStateResponseOptions) {
  const states = this.event.block.permutation.getAllStates();

  Object.assign(states, options);

  const permutation = BlockPermutation.resolve(this.event.block.typeId, states);

  this.event.block.setPermutation(permutation);

  return this;
}
