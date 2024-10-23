import type { Character } from "../types/Character.ts";
import type { CharacterDataForCsv } from "../types/CharacterDataForCsv.ts";
import type { PortraitMetadata } from "../types/PortraitMetadata.ts";

export const seraphinaPortraitMetadata: PortraitMetadata = {
  originalImageName: "Ghostblade OC 1.png",
  gender: "female",
  age: "young adult",
  hairColor: "cyan",
  eyeColor: "red",
  headgear: "hood",
};

export const seraphinaCsvData: CharacterDataForCsv = {
  name: "Seraphina",
  nameTextPointer: "SeraphinaNameText",
  descriptionTextPointer: "SeraphinaDescText",
  characterNumber: "Seraphina",
  defaultClass: "Troubadour",
  portrait: "SeraphinaMug",
  affinity: "WaterAff",
  baseLevel: 5,
  baseHP: 9,
  basePwr: 0,
  baseMagic: 5,
  baseSkl: 5,
  baseSpd: 4,
  baseDef: 2,
  baseRes: 2,
  baseLck: 7,
  baseCon: 3,
  staffRank: "Drank",
  hpGrowth: 90,
  pwrGrowth: 35,
  magicGrowth: 10,
  sklGrowth: 40,
  spdGrowth: 40,
  defGrowth: 30,
  resGrowth: 20,
  lckGrowth: 50,
};

export const seraphinaCharacter: Character = {
  name: "Seraphina",
  formattedDescription: `Have you ever seen a main[NL]
character that starts as a healer?[NL]
You have now![X]`,
  formattedDeathQuote: `I'm sorry[NL]
I couldn't save you...[X]`,
  csvData: seraphinaCsvData,
  portraitMetadata: seraphinaPortraitMetadata,
};

