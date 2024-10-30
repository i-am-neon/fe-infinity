import type { RomCharacter } from "@/types/RomCharacter.ts";
import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";

export default async function getUnitsArray(
  romCharacters: RomCharacter[]
): Promise<string[]> {
  return await Promise.all(
    romCharacters.map(async (romCharacter) => {
      return await generateUnitLine(romCharacter);
    })
  );
}
