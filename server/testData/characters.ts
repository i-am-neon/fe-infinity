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
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

export const seraphinaCsvData: CharacterDataForCsv = {
  name: "Seraphina",
  nameTextPointer: "SeraphinaNameText",
  descriptionTextPointer: "SeraphinaDescText",
  characterNumber: "Seraphina",
  defaultClass: "Valkyrie",
  portrait: "SeraphinaMug",
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
  lightRank: "Crank",
  staffRank: "Arank",
  hpGrowth: 80,
  pwrGrowth: 30,
  magicGrowth: 50,
  sklGrowth: 45,
  spdGrowth: 50,
  defGrowth: 25,
  resGrowth: 40,
  lckGrowth: 55,
};

export const seraphinaCharacter: Character = {
  name: "Seraphina",
  formattedDescription: `A talented archer who[NL]
fights with both magic and[NL]
healing skills.[X]`,
  formattedDeathQuote: `I failed...[NL]
I wanted to do more...[A][A][X]`,
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
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
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
I wanted to do more...[A][X]`,
  csvData: liraCsvData,
  portraitMetadata: liraPortraitMetadata,
};

export const igorPortraitMetadata: PortraitMetadata = {
  originalImageName: "OC Samael Portrait.png",
  gender: "female",
  age: "young adult",
  hairColor: "blonde",
  eyeColor: "green",
  headgear: "none",
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

export const igorCsvData: CharacterDataForCsv = {
  name: "Igor",
  nameTextPointer: "IgorNameText",
  descriptionTextPointer: "IgorDescText",
  characterNumber: "Igor",
  defaultClass: "Thief",
  portrait: "IgorMug",
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
  swordRank: "Drank",
  hpGrowth: 80,
  pwrGrowth: 30,
  magicGrowth: 50,
  sklGrowth: 45,
  spdGrowth: 50,
  defGrowth: 25,
  resGrowth: 40,
  lckGrowth: 55,
};

export const igorCharacter: Character = {
  name: "Igor",
  formattedDescription: `A talented archer who[NL]
fights with both magic and[NL]
healing skills.[X]`,
  formattedDeathQuote: `I failed...[NL]
I wanted to do more...[A][A][X]`,
  csvData: igorCsvData,
  portraitMetadata: igorPortraitMetadata,
};

export const ligmaPortraitMetadata: PortraitMetadata = {
  originalImageName: "OC 1 from Goldblitzx.png",
  gender: "female",
  age: "young adult",
  hairColor: "blonde",
  eyeColor: "green",
  headgear: "none",
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

export const ligmaCsvData: CharacterDataForCsv = {
  name: "Ligma",
  nameTextPointer: "LigmaNameText",
  descriptionTextPointer: "LigmaDescText",
  characterNumber: "Ligma",
  defaultClass: "ArcherM2",
  portrait: "LigmaMug",
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

export const ligmaCharacter: Character = {
  name: "Ligma",
  formattedDescription: `A talented archer who[NL]
fights with both magic and[NL]
healing skills.[X]`,
  formattedDeathQuote: `I failed...[NL]
I wanted to do more...[A][X]`,
  csvData: ligmaCsvData,
  portraitMetadata: ligmaPortraitMetadata,
};

