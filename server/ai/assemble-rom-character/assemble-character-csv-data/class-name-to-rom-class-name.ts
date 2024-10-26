type ClassRomMapping = {
  male: string;
  female: string;
};

const classRomLookup: Record<string, ClassRomMapping> = {
  Cavalier: { male: "Cavalier", female: "Cavalier_F" },
  Paladin: { male: "Paladin", female: "Paladin_F" },
  Knight: { male: "Knight", female: "Knight_F" },
  General: { male: "General", female: "General_F" },
  Thief: { male: "Thief", female: "Thief" },
  Mercenary: { male: "Mercenary", female: "Mercenary_F" },
  Hero: { male: "Hero", female: "Hero_F" },
  Myrmidon: { male: "Myrmidon", female: "Myrmidon_F" },
  Swordmaster: { male: "Swordmaster", female: "Swordmaster_F" },
  Assassin: { male: "Assassin", female: "Assassin_F" },
  Archer: { male: "Archer", female: "Archer_F" },
  Sniper: { male: "Sniper", female: "Sniper_F" },
  Ranger: { male: "Ranger", female: "Ranger_F" },
  WyvernRider: { male: "WyvernRider", female: "WyvernRider_F" },
  WyvernLord: { male: "WyvernLord", female: "WyvernLord_F" },
  WyvernKnight: { male: "WyvernKnight", female: "WyvernKnight_F" },
  Mage: { male: "Mage", female: "Mage_F" },
  Sage: { male: "Sage", female: "Sage_F" },
  MageKnight: { male: "MageKnight", female: "MageKnight_F" },
  Bishop: { male: "Bishop", female: "Bishop_F" },
  Shaman: { male: "Shaman", female: "Shaman_F" },
  Druid: { male: "Druid", female: "Druid_F" },
  Summoner: { male: "Summoner", female: "Summoner_F" },
  GreatKnight: { male: "GreatKnight", female: "GreatKnight_F" },
  Monk: { male: "Monk", female: "MonkF2" },
  Soldier: { male: "Soldier", female: "SoldierF2" },

  // Male only
  Bard: { male: "Bard", female: "" },
  Priest: { male: "Priest", female: "" },
  Journeyman: { male: "Journeyman", female: "" },
  Pirate: { male: "Pirate", female: "" },
  Fighter: { male: "Fighter", female: "" },
  Pupil: { male: "Pupil", female: "" },

  // Female only
  Dancer: { male: "", female: "Dancer" },
  Cleric: { male: "", female: "Cleric" },
  Troubadour: { male: "", female: "Troubadour" },
  PegasusKnight: { male: "", female: "PegasusKnight" },
  Recruit: { male: "", female: "Recruit" },
};

// Function to map a class name and gender to the correct ROM class name
export default function classNameToRomClassName({
  className,
  characterGender,
}: {
  className: string;
  characterGender: "male" | "female";
}): string {
  const classMapping = classRomLookup[className];

  if (!classMapping) {
    throw new Error(
      `Class name "${className}" not found in ROM class mapping.`
    );
  }

  const romClassName =
    characterGender === "male" ? classMapping.male : classMapping.female;

  if (!romClassName) {
    throw new Error(
      `No ROM class name for ${characterGender} in class "${className}".`
    );
  }

  return romClassName;
}

