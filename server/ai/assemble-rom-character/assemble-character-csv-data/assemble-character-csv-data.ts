import generateAffinity from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-affinity.ts";
import generateCharacterStats from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-stats.ts";
import getWeaponRank from "@/ai/assemble-rom-character/assemble-character-csv-data/get-weapon-rank.ts";
import { mainCharacterIdeaExample } from "@/testData/ai.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import getNameText from "@/lib/get-name-text.ts";
import getDescText from "@/lib/get-desc-text.ts";

export default async function assembleCharacterCsvData({
  characterIdea,
  characterClass,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
}): Promise<CharacterDataForCsv> {
  // Run async calls concurrently
  const [affinity, stats] = await Promise.all([
    generateAffinity({ characterIdea }),
    generateCharacterStats({
      characterIdea,
      characterClass,
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
    nameTextPointer: getNameText(characterIdea.name),
    descriptionTextPointer: getDescText(characterIdea.name),
    characterNumber: characterIdea.name,
    defaultClass: characterClass,
    portrait: `${characterIdea.name}Mug`, // the python file somewhere is looking for this exact pattern
    isGeneric: false, // PLACEHOLDER for now
    affinity,
    ...weaponRanks,
    baseLevel: 1,
    ...stats,
    characterAbility2:
      characterIdea.firstSeenAs === "boss" ? "IsBoss" : undefined,
  };
}

if (import.meta.main) {
  const result = await assembleCharacterCsvData({
    characterIdea: mainCharacterIdeaExample,
    characterClass: "Mage_F",
  });
  console.log(JSON.stringify(result, null, 2));
}

