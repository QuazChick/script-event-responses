import { Vector3, Dimension, Vector2 } from "@minecraft/server";
import { getRandomLocation } from "../utils";

import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemTeleportResponseOptions {
  checkForBlocks?: boolean;
  dimension?: Dimension;
  facingLocation?: Vector3;
  keepVelocity?: boolean;
  location: Vector3;
  range?: Vector3;
  rotation?: Vector2;
  target?: "holder" | "victim";
}

export default function itemTeleportResponse(this: ItemEventResponses, options: ItemTeleportResponseOptions) {
  const { target, location, range, ...other } = options;

  const getEntity = target === "victim" ? getVictim : getHolder;
  const entity = getEntity(this.event);

  const randomLocation = getRandomLocation(location, range);

  entity.teleport(randomLocation, other);

  return this;
}
