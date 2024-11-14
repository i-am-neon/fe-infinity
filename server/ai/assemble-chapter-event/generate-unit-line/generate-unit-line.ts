import generateInventory from "@/ai/assemble-chapter-event/generate-unit-line/generate-inventory.ts";
import { getWeaponTypesForClass } from "@/ai/assemble-chapter-event/generate-unit-line/getWeaponTypesForClass.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { randomInt } from "node:crypto";

export default async function generateUnitLine({
  characterIdea,
  characterClass,
  xCoord,
  yCoord,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
  xCoord: number;
  yCoord: number;
}): Promise<string> {
  const isBoss = characterIdea.firstSeenAs === "boss";
  const level = isBoss ? randomInt(1, 2) : randomInt(15, 20);
  const inventory = await generateInventory({
    characterIdea: characterIdea,
    characterClass: characterClass,
    availableWeaponTypes: getWeaponTypesForClass(characterClass),
    level,
  });

  const commanderName = isBoss ? characterIdea.name : "0x00";

  return `UNIT ${
    characterIdea.name
  } ${characterClass} ${commanderName} Level(${level}, ${
    isBoss ? "Enemy" : "Ally"
  }, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [${inventory.join(
    ", "
  )}] ${isBoss ? "GuardTileAI" : "NoAI"}`;
}

