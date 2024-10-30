import type { WeaponType } from "@/types/WeaponType.ts";

// Corrected mapping of class names to their available weapon types
const CLASS_WEAPON_TYPES: Record<string, WeaponType[]> = {
  // Sword users
  Myrmidon: ["Sword"],
  Myrmidon_F: ["Sword"],
  Swordmaster: ["Sword"],
  Swordmaster_F: ["Sword"],
  Hero: ["Sword", "Axe"],
  Hero_F: ["Sword", "Axe"],
  Assassin: ["Sword"],
  Assassin_F: ["Sword"],
  Mercenary: ["Sword"],
  Mercenary_F: ["Sword"],
  Paladin: ["Sword", "Lance"],
  Paladin_F: ["Sword", "Lance"],
  GreatKnight: ["Sword", "Lance", "Axe"],
  GreatKnight_F: ["Sword", "Lance", "Axe"],

  // Lance users
  Cavalier: ["Sword", "Lance"],
  Cavalier_F: ["Sword", "Lance"],
  Knight: ["Lance"],
  Knight_F: ["Lance"],
  General: ["Sword", "Lance", "Axe"],
  General_F: ["Sword", "Lance", "Axe"],
  WyvernRider: ["Lance"],
  WyvernRider_F: ["Lance"],
  WyvernLord: ["Lance", "Sword"],
  WyvernLord_F: ["Lance", "Sword"],
  WyvernKnight: ["Lance"],
  WyvernKnight_F: ["Lance"],
  Soldier: ["Lance"],
  SoldierF2: ["Lance"],

  // Axe users
  Fighter: ["Axe"],
  Warrior: ["Axe", "Bow"],
  Pirate: ["Axe"],
  Berserker: ["Axe"],

  // Bow users
  Archer: ["Bow"],
  Archer_F: ["Bow"],
  Sniper: ["Bow"],
  Sniper_F: ["Bow"],
  Ranger: ["Sword", "Bow"],
  Ranger_F: ["Sword", "Bow"],

  // Staff users (often paired with magic)
  Cleric: ["Staff"],
  Troubadour: ["Staff"],
  Priest: ["Staff"],
  Bishop: ["Light", "Staff"],
  Bishop_F: ["Light", "Staff"],
  Valkyrie: ["Light", "Staff"],
  Sage: ["Anima", "Staff"],
  Sage_F: ["Anima", "Staff"],

  // Anima magic users
  Mage: ["Anima"],
  Mage_F: ["Anima"],
  MageKnight: ["Anima", "Sword"],
  MageKnight_F: ["Anima", "Sword"],

  // Light magic users
  Monk: ["Light"],
  MonkF2: ["Light"],

  // Dark magic users (including staves for certain classes)
  Shaman: ["Dark"],
  Shaman_F: ["Dark"],
  Druid: ["Dark", "Anima", "Staff"],
  Druid_F: ["Dark", "Anima", "Staff"],
  Summoner: ["Dark", "Staff"],
  Summoner_F: ["Dark", "Staff"],
};

// Function to retrieve available weapon types for a given class
export function getWeaponTypesForClass(romClassName: string): WeaponType[] {
  return CLASS_WEAPON_TYPES[romClassName] || [];
}

