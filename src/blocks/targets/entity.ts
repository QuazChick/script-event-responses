import { RespondableBlockEvent } from "..";

export function getEntity(event: RespondableBlockEvent) {
  if ("entity" in event && event.entity?.isValid()) return event.entity;
  else if ("player" in event && event.player?.isValid()) return event.player;

  throw new Error("Cannot find entity target for event response.");
}
