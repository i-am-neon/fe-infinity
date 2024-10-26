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
  // generate-character-stats (base and growths)

  return {
    name: characterIdea.name,
    nameTextPointer: `${characterIdea.name}NameText`,
    descriptionTextPointer: `${characterIdea.name}DescText`,
    characterNumber: characterIdea.name,
    defaultClass: characterClass,
    portrait: `${characterIdea.name}Mug`,
    isGeneric: false, // PLACEHOLDER for now
    affinity,
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
    swordRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "sword",
    }),
    lanceRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "lance",
    }),
    axeRank: getWeaponRank({ romClassName: characterClass, weaponType: "axe" }),
    bowRank: getWeaponRank({ romClassName: characterClass, weaponType: "bow" }),
    staffRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "staff",
    }),
    animaRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "anima",
    }),
    lightRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "light",
    }),
    darkRank: getWeaponRank({
      romClassName: characterClass,
      weaponType: "dark",
    }),
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

