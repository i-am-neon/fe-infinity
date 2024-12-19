// weapon-options.ts
import type { WeaponType } from "@/types/WeaponType.ts";

export const ARMORY_MAINSTAYS = [
  "IronSword",
  "IronLance",
  "IronAxe",
  "IronBow",
];

export const VENDOR_MAINSTAYS = ["Fire", "Thunder", "Flux", "Heal"];

export const WEAPON_OPTIONS: Record<WeaponType, string[]> = {
  Sword: [
    "IronSword",
    "SlimSword",
    "SteelSword",
    "SilverSword",
    "KillingEdge",
    "BraveSword",
    "Shamshir",
    "WindSword",
    "LightBrand",
    "Runesword",
    "DevilSword",
    "ToxinSword",
    "Lanceslayer",
  ],
  Lance: [
    "IronLance",
    "SlimLance",
    "SteelLance",
    "SilverLance",
    "Javelin",
    "Spear",
    "BraveLance",
    "KillerLance",
    "HeavySpear",
    "Horseslayer",
    "DevilLance",
    "ToxinLance",
    "Axeslayer",
  ],
  Axe: [
    "IronAxe",
    "SteelAxe",
    "SilverAxe",
    "HandAxe",
    "KillerAxe",
    "BraveAxe",
    "DevilAxe",
    "Halberd",
    "Hammer",
    "Tomahawk",
    "ShortAxe",
    "DevilAxe",
    "ToxinAxe",
  ],
  Bow: [
    "IronBow",
    "SteelBow",
    "SilverBow",
    "KillerBow",
    "BraveBow",
    "ShortBow",
    "Longbow",
    "IronShortbow",
    "IronLongbow",
    "DevilBow",
    "SteelLongbow",
    "SilverLongbow",
    "SteelShortbow",
    "SilverShortbow",
    "ToxinBow",
    "Artemis",
  ],
  Anima: [
    "Fire",
    "Thunder",
    "Elfire",
    "Bolting",
    "Fimbulvetr",
    "Excalibur",
    "Aqua",
    "Arcthunder",
    "Bolagnone",
    "Arcwind",
    // "Ragnarok",
    "Elwind",
    "Thoron",
    "Tornado",
    "Wind",
    "Elaqua",
    "Arcaqua",
    "Meteor",
    "Hail",
    "Arcfire",
  ],
  Light: [
    "Lightning",
    "Shine",
    "Divine",
    "Purge",
    "Aura",
    "Ivaldi",
    "Flare",
    "Thani",
    "Exordium",
    "Starlight",
  ],
  Dark: [
    "Flux",
    "Nosferatu",
    "Luna",
    "Eclipse",
    "Fenrir",
    "Gleipnir",
    // Crashes for some reason
    // "Dulam",
    // "Slime",
    // "Swarm",
    // "Worm",
  ],
  Staff: [
    "Heal",
    "Mend",
    "Recover",
    "Physic",
    "Fortify",
    "Torch",
    "Unlock",
    "Restore",
    "Silence",
    "Sleep",
    "Berserk",
    "Warp",
    "Rescue",
    "Hammerne",
    "Latona",
  ],
};

export const ITEMS = [
  "Vulnerary",
  "Elixir",
  "PureWater",
  "Antitoxin",
  "Torch",
  "ChestKey",
  "DoorKey",
  "Lockpick",
  "Dragonshield",
  "EnergyRing",
  "SecretBook",
  "Speedwing",
  "GoddessIcon",
  "AngelicRobe",
  "Talisman",
  "Boots",
  "BodyRing",
  "HeroCrest",
  "KnightCrest",
  "OrionsBolt",
  "ElysianWhip",
  "GuidingRing",
  "OceanSeal",
  "MasterSeal",
  "MetissTome",
  "WhiteGem",
  "RedGem",
  "BlueGem",
  "ArmsScroll",
  "SpiritDust",
  "DoorKey_5",
  "Tempest",
  "SkillScroll",
];

export const ALL_ITEMS = [...ITEMS, ...Object.values(WEAPON_OPTIONS).flat()];

