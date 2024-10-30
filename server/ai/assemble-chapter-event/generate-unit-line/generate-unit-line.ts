import type { RomCharacter } from "@/types/RomCharacter.ts";
import { randomInt } from "node:crypto";
import generateInventory from "@/ai/assemble-chapter-event/generate-unit-line/generate-inventory.ts";
import { getWeaponTypesForClass } from "@/ai/assemble-chapter-event/generate-unit-line/getWeaponTypesForClass.ts";

export default async function generateUnitLine(
  romCharacter: RomCharacter
): Promise<string> {
  const isBoss = romCharacter.firstSeenAs === "boss";
  const xCoord = randomInt(0, 5);
  const yCoord = randomInt(0, 5);
  const level = isBoss ? randomInt(3, 7) : randomInt(2, 5);
  const inventory = await generateInventory({
    characterIdea: romCharacter,
    characterClass: romCharacter.csvData.defaultClass,
    availableWeaponTypes: getWeaponTypesForClass(
      romCharacter.csvData.defaultClass
    ),
    level,
  });

  return `UNIT ${romCharacter.name} ${
    romCharacter.csvData.defaultClass
  } 0x00 Level(${level}, ${
    isBoss ? "Enemy" : "Ally"
  }, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [${inventory.join(
    ", "
  )}] ${isBoss ? "GuardTileAI" : "NoAI"}`;
}

