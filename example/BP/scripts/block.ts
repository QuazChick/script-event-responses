import { BlockCustomComponent, EntityDamageCause, ItemStack, world } from "@minecraft/server";
import { BlockEventResponses } from "event-responses";

const ExampleBlockComponent: BlockCustomComponent = {
  onPlayerInteract(event) {
    const responses = new BlockEventResponses(event);

    responses
      .decrementStack()
      .damage({
        target: "entity",
        amount: 1,
        cause: EntityDamageCause.drowning,
      })
      .playSound({
        sound: "random.levelup",
        volume: 0.5,
      })
      .setBlock({
        block: "minecraft:diamond_block",
        offset: { x: 0, y: 1, z: 0 },
      })
      .spawnLoot({
        table: "entities/ghast.json",
      })
      .playSound({
        sound: "random.burp",
      });
  },
  onTick(event) {
    const responses = new BlockEventResponses(event);

    responses.playEffect({
      effect: "minecraft:campfire_smoke_particle",
    });
  },
  onStepOn(event) {
    new BlockEventResponses(event)
      .damage({
        target: "entity",
        amount: 2,
        cause: EntityDamageCause.fire,
      })
      .playEffect({
        effect: "minecraft:crop_growth_emitter",
        target: "entity",
      });
  },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
  blockComponentRegistry.registerCustomComponent("example:block_component", ExampleBlockComponent);
});
