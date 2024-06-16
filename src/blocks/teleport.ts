import { Vector3, Dimension, Vector2 } from "@minecraft/server";
import { getRandomLocation } from "../utils";

import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockTeleportResponseOptions {
  checkForBlocks?: boolean;
  dimension?: Dimension;
  facingLocation?: Vector3;
  keepVelocity?: boolean;
  location: Vector3;
  range?: Vector3;
  rotation?: Vector2;
}

export default function blockTeleportResponse(this: BlockEventResponses, options: BlockTeleportResponseOptions) {
  const { location, range, ...other } = options;

  const entity = getEntity(this.event);

  const randomLocation = getRandomLocation(location, range);

  entity.teleport(randomLocation, other);

  return this;
}
