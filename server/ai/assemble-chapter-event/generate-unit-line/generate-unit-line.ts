import { CharacterIdeaWithChapterJoinedAndClassAndPortrait } from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import generateInventory from "@/ai/assemble-chapter-event/generate-unit-line/generate-inventory.ts";
import { getWeaponTypesForClass } from "@/ai/assemble-chapter-event/generate-unit-line/getWeaponTypesForClass.ts";
import { randomInt } from "node:crypto";

export default async function generateUnitLine(
  romCharacter: CharacterIdeaWithChapterJoinedAndClassAndPortrait
): Promise<string> {
  const isBoss = romCharacter.characterIdea.firstSeenAs === "boss";
  const xCoord = randomInt(0, 5);
  const yCoord = randomInt(0, 5);
  const level = isBoss ? randomInt(3, 7) : randomInt(2, 5);
  const inventory = await generateInventory({
    characterIdea: romCharacter.characterIdea,
    characterClass: romCharacter.characterClass,
    availableWeaponTypes: getWeaponTypesForClass(romCharacter.characterClass),
    level,
  });

  return `UNIT ${romCharacter.characterIdea.name} ${
    romCharacter.characterClass
  } 0x00 Level(${level}, ${
    isBoss ? "Enemy" : "Ally"
  }, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [${inventory.join(
    ", "
  )}] ${isBoss ? "GuardTileAI" : "NoAI"}`;
}

