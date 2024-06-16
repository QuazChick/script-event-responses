import { RespondableItemEvent } from "..";

export function getVictim(event: RespondableItemEvent) {
  if ("hitEntity" in event && event.hitEntity?.isValid()) return event.hitEntity;

  throw new Error("Cannot find victim target for event response.");
}
