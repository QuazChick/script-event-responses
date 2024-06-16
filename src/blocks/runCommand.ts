import { BlockEventResponses } from ".";
import { getEntity } from "./targets";

export interface BlockRunCommandResponseOptions {
  target?: "dimension" | "entity";
  command: string | string[];
}

export default function blockRunCommandResponse(this: BlockEventResponses, options: BlockRunCommandResponseOptions) {
  let { command: commands, target } = options;
  if (typeof commands === "string") commands = [commands];

  const entity = target === "entity" ? getEntity(this.event) : this.event.dimension;
  for (const command of commands) entity.runCommand(command);

  return this;
}
