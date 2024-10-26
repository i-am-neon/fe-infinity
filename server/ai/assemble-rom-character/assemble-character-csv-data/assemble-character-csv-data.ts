import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import generateCharacterClass from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-class.ts";
import generateAffinity from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-affinity.ts";
import getWeaponRank from "@/ai/assemble-rom-character/assemble-character-csv-data/get-weapon-rank.ts";
import generateCharacterStats from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-stats.ts";

export default async function assembleCharacterCsvData(
  characterIdea: CharacterIdea
): Promise<CharacterDataForCsv> {
  const characterClass = await generateCharacterClass({ characterIdea });
  const affinity = await generateAffinity({ characterIdea });

  // Helper function to get ranks for each weapon type
  const weaponTypes = [
    "sword",
    "lance",
    "axe",
    "bow",
    "staff",
    "anima",
    "light",
    "dark",
  ] as const;
  const weaponRanks = Object.fromEntries(
    weaponTypes.map((weaponType) => [
      `${weaponType}Rank`,
      getWeaponRank({ romClassName: characterClass, weaponType }),
    ])
  );

  const stats = await generateCharacterStats({ characterIdea, characterClass });

  return {
    name: characterIdea.name,
    nameTextPointer: `${characterIdea.name}NameText`,
    descriptionTextPointer: `${characterIdea.name}DescText`,
    characterNumber: characterIdea.name,
    defaultClass: characterClass,
    portrait: `${characterIdea.name}Mug`,
    isGeneric: false, // PLACEHOLDER for now
    affinity,
    ...weaponRanks,
    baseLevel: 1,
    ...stats,
  };
}

