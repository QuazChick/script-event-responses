import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockDieResponseOptions {
  target?: "block" | "entity";
}

export default function blockDieResponse(this: BlockEventResponses, options?: BlockDieResponseOptions) {
  if (options?.target === "entity") {
    const entity = getEntity(this.event);
    entity.kill();
  } else {
    this.event.block.setType("minecraft:air");
  }

  return this;
}
