import generateInventory from "@/ai/assemble-chapter-event/generate-unit-line/generate-inventory.ts";
import { getWeaponTypesForClass } from "@/ai/assemble-chapter-event/generate-unit-line/getWeaponTypesForClass.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { randomInt } from "node:crypto";

export default async function generateUnitLine({
  characterIdea,
  characterClass,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
}): Promise<string> {
  const isBoss = characterIdea.firstSeenAs === "boss";
  const xCoord = randomInt(0, 5);
  const yCoord = randomInt(0, 5);
  const level = isBoss ? randomInt(3, 7) : randomInt(2, 5);
  const inventory = await generateInventory({
    characterIdea: characterIdea,
    characterClass: characterClass,
    availableWeaponTypes: getWeaponTypesForClass(characterClass),
    level,
  });

  return `UNIT ${characterIdea.name} ${characterClass} 0x00 Level(${level}, ${
    isBoss ? "Enemy" : "Ally"
  }, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [${inventory.join(
    ", "
  )}] ${isBoss ? "GuardTileAI" : "NoAI"}`;
}

