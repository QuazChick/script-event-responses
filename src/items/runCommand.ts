import { ItemEventResponses } from ".";
import { getHolder, getVictim } from "./targets";

export interface ItemRunCommandResponseOptions {
  command: string | string[];
  target?: "holder" | "victim";
}

export default function itemRunCommandResponse(this: ItemEventResponses, options: ItemRunCommandResponseOptions) {
  let { command: commands, target } = options;
  if (typeof commands === "string") commands = [commands];

  const getEntity = target === "victim" ? getVictim : getHolder;

  const entity = getEntity(this.event);
  for (const command of commands) entity.runCommand(command);

  return this;
}
