import type { RomCharacter } from "../types/RomCharacter.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import type { GenericCharacter } from "@/types/GenericCharacter.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";

export const seraphinaPortraitMetadata: PortraitMetadata = {
  originalImageName: "0.png",
  gender: "female",
  age: "young adult",
  hairColor: "blue",
  eyeColor: "red",
  vibe: "mystical, serene, wise",
  headgear: "hood",
  clothing: "hooded cloak",
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
  isGeneric: false,
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

export const seraphinaCharacter: RomCharacter = {
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
  originalImageName: "1.png",
  gender: "female",
  age: "young adult",
  hairColor: "blonde",
  eyeColor: "green",
  vibe: "calm, serene, gentle",
  clothing: "green scarf, dark top",
  accessories: "hair clip",
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
  isGeneric: false,
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

export const liraCharacter: RomCharacter = {
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
  originalImageName: "2.png",
  gender: "male",
  age: "mature adult",
  hairColor: "silver",
  eyeColor: "unknown",
  vibe: "serious, noble, determined",
  clothing: "military uniform",
  headgear: "crown",
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
  isGeneric: false,
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

export const igorCharacter: RomCharacter = {
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
  originalImageName: "3.png",
  gender: "male",
  age: "young adult",
  hairColor: "gray",
  eyeColor: "green",
  vibe: "confident, adventurous, friendly",
  accessories: "scarf",
  clothing: "green tunic with a red scarf",
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
  isGeneric: false,
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

export const ligmaCharacter: RomCharacter = {
  name: "Ligma",
  formattedDescription: `A talented archer who[NL]
fights with both magic and[NL]
healing skills.[X]`,
  formattedDeathQuote: `I failed...[NL]
I wanted to do more...[A][X]`,
  csvData: ligmaCsvData,
  portraitMetadata: ligmaPortraitMetadata,
};

const cesarianCsvData: CharacterDataForCsv = {
  name: "Cesarian",
  nameTextPointer: "CesarianNameText",
  descriptionTextPointer: "CesarianDescText",
  characterNumber: "Cesarian",
  defaultClass: "0x0",
  portrait: "0x0",
  isGeneric: true,
  affinity: "NoAff",
  baseLevel: 1,
  baseHP: 5,
  basePwr: 3,
  baseMagic: 1,
  baseSkl: 3,
  baseSpd: 2,
  baseDef: 3,
  baseRes: 2,
  baseLck: 5,
  baseCon: 1,
  hpGrowth: 75,
  pwrGrowth: 30,
  magicGrowth: 10,
  sklGrowth: 25,
  spdGrowth: 20,
  defGrowth: 25,
  resGrowth: 10,
  lckGrowth: 20,
};

export const cesarianGenericCharacter: GenericCharacter = {
  name: "Cesarian",
  csvData: cesarianCsvData,
  formattedDescription: `A generic enemy soldier.[X]`,
};

export const pinkDancerPortraitMetadata: PortraitMetadata = {
  originalImageName: "4.png",
  gender: "female",
  age: "young adult",
  hairColor: "blonde",
  eyeColor: "purple",
  vibe: "elegant, serene, confident",
  clothing: "purple dress with flowing sleeves",
  headgear: "headband",
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

export const tealHairGirlPortraitMetadata: PortraitMetadata = {
  originalImageName: "5.png",
  gender: "female",
  age: "young adult",
  hairColor: "teal",
  eyeColor: "purple",
  vibe: "mystical, serene, confident",
  clothing: "white dress with purple accents",
  accessories: "necklace",
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

export const fireElfPortraitMetadata: PortraitMetadata = {
  originalImageName: "6.png",
  gender: "male",
  age: "young adult",
  hairColor: "red",
  eyeColor: "unknown",
  vibe: "confident, adventurous, charismatic",
  clothing: "cloak with fur trim",
  accessories: "none",
  eyeMouthOffsets: {
    mouthX: 3,
    mouthY: 5,
    eyeX: 3,
    eyeY: 3,
  },
};

