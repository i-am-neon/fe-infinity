export type Affinity =
  | "NoAff"
  | "FireAff"
  | "ThunderAff"
  | "WindAff"
  | "WaterAff"
  | "DarkAff"
  | "LightAff"
  | "AnimaAff";

type WeaponRank =
  | "0"
  | "Erank"
  | "Drank"
  | "Crank"
  | "Brank"
  | "Arank"
  | "Srank";

export interface CharacterDataForCsv {
  name: string;
  nameTextPointer: string;
  descriptionTextPointer: string;
  characterNumber: string;
  defaultClass: string;
  portrait: string;
  isGeneric: boolean;
  affinity: Affinity;
  baseLevel: number;
  baseHP: number;
  basePwr: number;
  baseMagic: number;
  baseSkl: number;
  baseSpd: number;
  baseDef: number;
  baseRes: number;
  baseLck: number;
  baseCon: number;
  swordRank?: WeaponRank;
  lanceRank?: WeaponRank;
  axeRank?: WeaponRank;
  bowRank?: WeaponRank;
  staffRank?: WeaponRank;
  animaRank?: WeaponRank;
  lightRank?: WeaponRank;
  darkRank?: WeaponRank;
  hpGrowth: number;
  pwrGrowth: number;
  magicGrowth: number;
  sklGrowth: number;
  spdGrowth: number;
  defGrowth: number;
  resGrowth: number;
  lckGrowth: number;
  levelUpSkillList?: string; // if any, would be written in the CSV as `DerekSkillList|IsPointer`. See in romBuilder/ASM/SkillSystem/EngineHacks/SkillSystem/character_skill_lists.event
  personalSkill?: string;
  characterAbility1?: string;
  characterAbility2?: string;
  characterAbility3?: string;
  characterAbility4?: string;
  supportDataPointer?: string;
}

