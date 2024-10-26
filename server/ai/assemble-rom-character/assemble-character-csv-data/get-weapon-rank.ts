import type { WeaponRank } from "@/types/CharacterDataForCsv.ts";

const swordUsers = [
  "Myrmidon",
  "Myrmidon_F",
  "Swordmaster",
  "Swordmaster_F",
  "Hero",
  "Hero_F",
  "Assassin",
  "Assassin_F",
  "Mercenary",
  "Mercenary_F",
  "Paladin",
  "Paladin_F",
  "GreatKnight",
  "GreatKnight_F",
  "Ranger",
  "Ranger_F",
];

const lanceUsers = [
  "Cavalier",
  "Cavalier_F",
  "Paladin",
  "Paladin_F",
  "Knight",
  "Knight_F",
  "General",
  "General_F",
  "WyvernRider",
  "WyvernRider_F",
  "WyvernLord",
  "WyvernLord_F",
  "WyvernKnight",
  "WyvernKnight_F",
  "Soldier",
  "SoldierF2",
];

const axeUsers = [
  "Fighter",
  "Warrior",
  "Hero",
  "Hero_F",
  "General",
  "General_F",
  "Pirate",
  "Berserker",
  "GreatKnight",
  "GreatKnight_F",
  "WyvernLord",
  "WyvernLord_F",
];

const bowUsers = [
  "Archer",
  "Archer_F",
  "Sniper",
  "Sniper_F",
  "Warrior",
  "Ranger",
  "Ranger_F",
];

const staffUsers = [
  "Cleric",
  "Troubadour",
  "Priest",
  "Bishop",
  "Bishop_F",
  "Valkyrie",
  "Sage",
  "Sage_F",
  "Valkyrie",
];

const animaUsers = [
  "Mage",
  "Mage_F",
  "Sage",
  "Sage_F",
  "MageKnight",
  "MageKnight_F",
];

const lightUsers = ["Monk", "MonkF2", "Bishop", "Bishop_F", "Sage", "Sage_F"];

const darkUsers = [
  "Shaman",
  "Shaman_F",
  "Druid",
  "Druid_F",
  "Summoner",
  "Summoner_F",
];

export default function getWeaponRank({
  romClassName,
  weaponType,
}: {
  romClassName: string;
  weaponType:
    | "sword"
    | "lance"
    | "axe"
    | "bow"
    | "staff"
    | "anima"
    | "light"
    | "dark";
}): WeaponRank {
  // Check and return weapon rank based on romClassName and weapon type
  if (weaponType === "sword" && swordUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "lance" && lanceUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "axe" && axeUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "bow" && bowUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "staff" && staffUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "anima" && animaUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "light" && lightUsers.includes(romClassName)) {
    return "Drank";
  } else if (weaponType === "dark" && darkUsers.includes(romClassName)) {
    return "Drank";
  }

  // Return 0 if the class does not use the specified weapon type
  return "0";
}

