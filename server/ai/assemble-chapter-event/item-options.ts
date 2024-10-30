// weapon-options.ts
import type { WeaponType } from "@/types/WeaponType.ts";

export const WEAPON_OPTIONS: Record<WeaponType, string[]> = {
  Sword: [
    "Iron Sword",
    "Slim Sword",
    "Steel Sword",
    "Silver Sword",
    "Killing Edge",
    "Brave Sword",
    "Shamshir",
    "Wind Sword",
    "Light Brand",
    "Runesword",
    "Dasher - A swift sword that allows a unit to strike multiple times.",
    "DevilSword - A cursed sword that deals high damage but may backfire on the user.",
    "ToxinSword - A sword that can inflict poison on the enemy.",
    "Lanceslayer - A sword specifically designed to be effective against lance users.",
  ],
  Lance: [
    "Iron Lance",
    "Slim Lance",
    "Steel Lance",
    "Silver Lance",
    "Javelin",
    "Spear",
    "Brave Lance",
    "Killer Lance",
    "Heavy Spear",
    "Horseslayer",
    "DevilLance - A cursed lance that can cause high damage or harm the wielder.",
    "ToxinLance - A lance that poisons opponents on hit.",
    "Axeslayer - A lance that grants a bonus when used against axe-wielding foes.",
  ],
  Axe: [
    "Iron Axe",
    "Steel Axe",
    "Silver Axe",
    "Hand Axe",
    "Killer Axe",
    "Brave Axe",
    "Devil Axe",
    "Halberd",
    "Hammer",
    "Tomahawk",
    "ShortAxe - A throwable axe with a shorter range than typical hand axes.",
    "DevilAxe - A cursed axe that can backfire, dealing damage to the wielder.",
    "ToxinAxe - An axe that can inflict poison on foes.",
  ],
  Bow: [
    "Iron Bow",
    "Steel Bow",
    "Silver Bow",
    "Killer Bow",
    "Brave Bow",
    "Short Bow",
    "Longbow",
    "IronShortbow - A lightweight bow with reduced range, allowing faster strikes.",
    "IronLongbow - A basic long-range bow, useful for attacking from a distance.",
    "DevilBow - A cursed bow with powerful attacks but risks harming the archer.",
    "SteelLongbow - A long-range bow with a stronger build than the IronLongbow.",
    "SilverLongbow - A long-range bow crafted from silver, offering high power.",
    "SteelShortbow - A durable short-range bow.",
    "SilverShortbow - A powerful short-range bow made from silver for enhanced damage.",
    "ToxinBow - A bow that has a chance to poison enemies.",
    "Artemis - A legendary bow with enhanced accuracy and damage.",
  ],
  Anima: [
    "Fire",
    "Thunder",
    "Elfire",
    "Bolting",
    "Fimbulvetr",
    "Excalibur",
    "Aqua - Basic water magic spell.",
    "Arcthunder - An advanced thunder magic spell with greater power.",
    "Bolagnone - High-level fire magic with immense destructive power.",
    "Arcwind - Advanced wind magic with improved accuracy and damage.",
    "Ragnarok - Powerful fire magic known for its overwhelming power.",
    "Elwind - Intermediate wind magic with decent power and accuracy.",
    "Thoron - High-level thunder spell, very potent against enemy defenses.",
    "Tornado - A powerful wind spell that summons a fierce whirlwind.",
    "Wind - Basic wind spell with light damage but high accuracy.",
    "Elaqua - Intermediate water magic, dealing moderate damage.",
    "Arcaqua - Advanced water magic with enhanced power and accuracy.",
    "Meteor - Long-range fire magic, useful for attacking from a distance.",
    "Hail - A water-based spell that has a chance to freeze the target.",
    "Arcfire - Advanced fire magic, dealing considerable damage.",
  ],
  Light: [
    "Lightning",
    "Shine",
    "Divine",
    "Purge",
    "Aura",
    "Ivaldi",
    "Flare - Light magic that ignores enemy resistance.",
    "Thani - A light-based spell effective against armored and mounted units.",
    "Exordium - Powerful holy magic, highly effective against dark-aligned enemies.",
    "Starlight - Legendary light magic with strong anti-dark properties.",
  ],
  Dark: [
    "Flux",
    "Nosferatu",
    "Luna",
    "Eclipse",
    "Fenrir",
    "Gleipnir",
    "Dulam - Dark magic that drains a small amount of enemy HP.",
    "Slime - Dark magic that reduces the enemy’s speed and resilience.",
    "Swarm - Summons a swarm of dark energy to deal moderate damage.",
    "Worm - A powerful dark magic spell with a high chance to hit.",
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
  "Vulnerary - Restores 10 HP.",
  "Elixir - Fully restores HP.",
  "Pure Water - Temporarily boosts resistance.",
  "Antitoxin - Cures poison status.",
  "Torch - Increases visibility in Fog of War.",
  "Chest Key - Opens a chest.",
  "Door Key - Opens a door.",
  "Lockpick - Allows Thieves to open doors and chests.",
  "Dragonshield - Increases Defense permanently.",
  "Energy Ring - Increases Magic/Strength permanently.",
  "Secret Book - Increases Skill permanently.",
  "Speedwing - Increases Speed permanently.",
  "Goddess Icon - Increases Luck permanently.",
  "Angelic Robe - Increases maximum HP permanently.",
  "Talisman - Increases Resistance permanently.",
  "Boots - Increases movement range permanently.",
  "Body Ring - Increases Constitution permanently.",
  "Hero Crest - Promotes certain classes.",
  "Knight Crest - Promotes Cavalier and Knight classes.",
  "Orion's Bolt - Promotes Archer class.",
  "Elysian Whip - Promotes Pegasus Knight and Wyvern Rider classes.",
  "Guiding Ring - Promotes Mage, Monk, and Cleric classes.",
  "Ocean Seal - Promotes Pirate class.",
  "Master Seal - Promotes any class.",
  "Metis's Tome - Increases growth rates slightly.",
  "White Gem - Can be sold for a high price.",
  "Red Gem - Can be sold for a medium price.",
  "Blue Gem - Can be sold for a small price.",
  "ArmsScroll - Grants a boost to weapon proficiency for a chosen weapon type.",
  "SpiritDust - Increases a unit’s magic stat permanently.",
  "DoorKey_5 - A multi-use key that can open up to five doors.",
  "Tempest - Wind magic with a chance to strike multiple times.",
  "SkillScroll - A scroll that grants a specific skill to a unit.",
];

