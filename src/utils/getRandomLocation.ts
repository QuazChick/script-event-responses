import { Vector3 } from "@minecraft/server";

function random(mid: number, range: number) {
  const min = mid - range / 2;
  const max = min + range;

  return Math.random() * (max - min) + min;
}

export function getRandomLocation(origin: Vector3, range?: Vector3): Vector3 {
  if (!range) return origin;

  return {
    x: random(origin.x, range.x),
    y: random(origin.y, range.y),
    z: random(origin.z, range.z),
  };
}
