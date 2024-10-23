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
  defaultClass: "Thief",
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
  swordRank: "Srank",
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

export const liraPortraitMetadata: PortraitMetadata = {
  originalImageName: "Kanna F2E OC 15.png",
  gender: "female",
  age: "young adult",
  hairColor: "blonde",
  eyeColor: "green",
  headgear: "none",
};

export const liraCsvData: CharacterDataForCsv = {
  name: "Lira",
  nameTextPointer: "LiraNameText",
  descriptionTextPointer: "LiraDescText",
  characterNumber: "Lira",
  defaultClass: "ArcherF2",
  portrait: "LiraMug",
  affinity: "WindAff",
  baseLevel: 5,
  baseHP: 10,
  basePwr: 6,
  baseMagic: 1,
  baseSkl: 5,
  baseSpd: 5,
  baseDef: 3,
  baseRes: 4,
  baseLck: 8,
  baseCon: 4,
  bowRank: "Drank",
  hpGrowth: 80,
  pwrGrowth: 30,
  magicGrowth: 50,
  sklGrowth: 45,
  spdGrowth: 50,
  defGrowth: 25,
  resGrowth: 40,
  lckGrowth: 55,
};

export const liraCharacter: Character = {
  name: "Lira",
  formattedDescription: `A talented archer who[NL]
fights with both magic and[NL]
healing skills.[X]`,
  formattedDeathQuote: `I failed...[NL]
I wanted to do more...[X]`,
  csvData: liraCsvData,
  portraitMetadata: liraPortraitMetadata,
};
