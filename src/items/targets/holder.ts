import { RespondableItemEvent } from "..";

export function getHolder(event: RespondableItemEvent) {
  if ("source" in event && event.source?.isValid()) return event.source;
  else if ("attackingEntity" in event && event.attackingEntity?.isValid()) return event.attackingEntity;

  throw new Error("Cannot find holder target for event response.");
}
