import generateInventory from "./generate-inventory.ts";
import { getWeaponTypesForClass } from "./getWeaponTypesForClass.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { randomInt } from "node:crypto";

export default async function generateUnitLine({
  characterIdea,
  startingAllegiance,
  characterClass,
  xCoord,
  yCoord,
}: {
  characterIdea: CharacterIdea;
  startingAllegiance: "ally" | "enemy" | "npc";
  characterClass: string;
  xCoord: number;
  yCoord: number;
}): Promise<string> {
  let allegiance = "";
  let aiType = "";
  switch (startingAllegiance) {
    case "ally":
      allegiance = "Ally";
      aiType = "NoAI";
      break;
    case "npc":
      allegiance = "NPC";
      aiType = "AttackInRangeAI";
      break;
    case "enemy":
      allegiance = "Enemy";
      aiType = "ChaseOnceApproachedAI";
      break;
    default:
      break;
  }

  const isBoss = characterIdea.firstSeenAs === "boss";
  const level = isBoss
    ? randomInt(3, 5)
    : startingAllegiance === "ally"
    ? randomInt(3, 5)
    : randomInt(1, 3);
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
  )}] ${isBoss ? "GuardTileAI" : aiType}`;
}

