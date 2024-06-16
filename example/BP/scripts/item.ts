import { ItemCustomComponent, world } from "@minecraft/server";
import { ItemEventResponses } from "event-responses";

const ExampleItemComponent: ItemCustomComponent = {
  onHitEntity(event) {
    new ItemEventResponses(event)
      .addMobEffect({
        target: "victim",
        effect: "poison",
        duration: 100,
      })
      .damage({
        target: "item",
        amount: 1,
      })
      .runCommand({
        target: "holder",
        command: "say Ha!",
      })
      .runCommand({
        target: "victim",
        command: ["say Ouch!", "playsound random.hurt @a ~~~"],
      });
  },
  onUseOn(event) {
    new ItemEventResponses(event).decrementStack().addMobEffect({ effect: "jump_boost", duration: 20 });
  },
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
  itemComponentRegistry.registerCustomComponent("example:item_component", ExampleItemComponent);
});
