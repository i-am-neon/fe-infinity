import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import generateCharacterClass from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-class.ts";
import generateAffinity from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-affinity.ts";
import getWeaponRank from "@/ai/assemble-rom-character/assemble-character-csv-data/get-weapon-rank.ts";
import generateCharacterStats from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-stats.ts";
import { mainCharacterIdeaExample } from "@/testData/ai.ts";

export default async function assembleCharacterCsvData(
  characterIdea: CharacterIdea
): Promise<CharacterDataForCsv> {
  // Run async calls concurrently
  const [characterClass, affinity, stats] = await Promise.all([
    generateCharacterClass({ characterIdea }),
    generateAffinity({ characterIdea }),
    generateCharacterStats({
      characterIdea,
      characterClass: await generateCharacterClass({ characterIdea }),
    }),
  ]);

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

if (import.meta.main) {
  const result = await assembleCharacterCsvData(mainCharacterIdeaExample);
  console.log(JSON.stringify(result, null, 2));
}

