type ClassOption = {
  name: string;
  description: string;
};

// Classes that can be accessed by both male and female characters
export const classOptionsAllGenders: ClassOption[] = [
  {
    name: "Mage",
    description:
      "A magic user who specializes in anima magic, using spells to attack enemies.",
  },
  {
    name: "Shaman",
    description:
      "A practitioner of dark magic who uses powerful and mysterious dark spells.",
  },
  {
    name: "Archer",
    description:
      "A ranged fighter who specializes in bows, effective against flying units.",
  },
  {
    name: "Myrmidon",
    description:
      "A swift swordfighter with high speed and skill, specializing in critical hits.",
  },
  {
    name: "Mercenary",
    description: "A balanced swordfighter with good all-around stats.",
  },
  {
    name: "Cavalier",
    description:
      "Mounted unit with high mobility, skilled in both swords and lances.",
  },
  {
    name: "WyvernRider",
    description:
      "A dragon-mounted unit with high mobility and strength, specializing in lances.",
  },
  {
    name: "Knight",
    description:
      "A heavily armored soldier with high defense, specializing in lances.",
  },
  {
    name: "Thief",
    description:
      "A nimble unit who can open locks and steal items from enemies.",
  },
  {
    name: "Soldier",
    description:
      "A disciplined lance-wielding infantry unit, with balanced strength and defense.",
  },
];

// Classes exclusive to male characters
export const classOptionsMaleOnly: ClassOption[] = [
  {
    name: "Bard",
    description:
      "A support unit who can play music to let an ally move again in battle.",
  },
  {
    name: "Priest",
    description:
      "A healer who uses staves to heal allies, with limited combat capabilities.",
  },
  {
    name: "Journeyman",
    description:
      "An untrained fighter with limited combat abilities, uses axes.",
  },
  {
    name: "Pirate",
    description: "An axe-wielding fighter who can move over water terrain.",
  },
  {
    name: "Fighter",
    description:
      "An axe-wielding warrior with high strength, effective in close combat.",
  },
  {
    name: "Pupil",
    description:
      "A trainee magic user with low stats but potential for growth in magic.",
  },
];

// Classes exclusive to female characters
export const classOptionsFemaleOnly: ClassOption[] = [
  {
    name: "Dancer",
    description:
      "A support unit who can dance to let an ally move again in battle.",
  },
  {
    name: "Cleric",
    description:
      "A healer who uses staves to heal allies, with limited combat capabilities.",
  },
  {
    name: "Troubadour",
    description:
      "A mounted healer who uses staves to support allies with high mobility.",
  },
  {
    name: "PegasusKnight",
    description:
      "A swift, flying unit riding a pegasus, specializing in lances.",
  },
  {
    name: "Recruit",
    description:
      "A trainee soldier with potential for growth, starting with limited combat abilities.",
  },
];

