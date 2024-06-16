import { Vector3 } from "@minecraft/server";

export function getOffsetLocation(location: Vector3, offset?: Vector3): Vector3 {
  if (!offset) return location;

  return {
    x: location.x + offset.x,
    y: location.y + offset.y,
    z: location.z + offset.z,
  };
}
