import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import generateCharacterClass from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-class.ts";
import generateAffinity from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-affinity.ts";
import getWeaponRank from "@/ai/assemble-rom-character/assemble-character-csv-data/get-weapon-rank.ts";

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
    baseHP: 20,
    basePwr: 5,
    baseMagic: 5,
    baseSkl: 5,
    baseSpd: 5,
    baseDef: 5,
    baseRes: 5,
    baseLck: 5,
    baseCon: 5,
    hpGrowth: 50,
    pwrGrowth: 50,
    magicGrowth: 50,
    sklGrowth: 50,
    spdGrowth: 50,
    defGrowth: 50,
    resGrowth: 50,
    lckGrowth: 50,
  };
}

