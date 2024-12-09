import generateInventory from "./generate-inventory.ts";
import { getWeaponTypesForClass } from "./getWeaponTypesForClass.ts";
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
  let allegiance = "";
  switch (characterIdea.firstSeenAs) {
    case "ally":
      allegiance = "Ally";
      break;
    case "allied NPC":
      allegiance = "NPC";
      break;
    case "enemy non-boss":
      allegiance = "Enemy";
      break;
    case "boss":
      allegiance = "Enemy";
      break;
    default:
      break;
  }

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
  } ${characterClass} ${commanderName} Level(${level}, ${allegiance}, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [${inventory.join(
    ", "
  )}] ${isBoss ? "GuardTileAI" : "NoAI"}`;
}

