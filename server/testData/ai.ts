import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { WorldSummary } from "@/types/ai/WorldSummary.ts";

export const characterIdeaExample: CharacterIdea = {
  name: "Elara Windrider",
  gender: "female",
  personality:
    "Determined and compassionate, with a strong sense of justice and a hint of stubbornness.",
  age: "young adult",
  backstory:
    "Elara Windrider grew up in the small village of Eldergrove, nestled between the Whispering Woods and the Silver Mountains. As the daughter of a renowned herbalist, she learned the ways of nature and healing from a young age. However, her peaceful life was shattered when a dark sorcerer began to plague the land, corrupting the forests and threatening her home. Driven by a desire to protect her village and restore balance, Elara set out on a quest to confront the sorcerer. Her strengths lie in her deep connection to nature and her ability to heal, but she struggles with self-doubt and the fear of failure. Along her journey, she seeks to uncover the truth about her family's past and the ancient magic that flows through her veins, ultimately discovering her own potential as a powerful force for good.",
  firstSeenAs: "ally",
  description:
    "Elara is a young woman with long, flowing auburn hair and bright green eyes that reflect her connection to nature. She wears a simple yet elegant tunic adorned with leaves and flowers, symbolizing her bond with the earth. Her demeanor is warm and inviting, but her resolve is unyielding when it comes to protecting those she loves.",
};

export const worldSummaryExample: WorldSummary = {
  worldName: "Eldralis",
  description:
    "In the fractured realm of Eldralis, rival kingdoms wield ancient sigils that grant immense power but corrupt the soul. These sigils, remnants of a bygone era, are coveted by many, leading to conflict and strife among the kingdoms. As the balance of power shifts, a shadowy order known as the Veil seeks to awaken a slumbering god, threatening to plunge Eldralis into eternal darkness. In this tumultuous landscape, unlikely heroes must unite, navigating their own inner demons and the allure of the sigils, to confront the encroaching darkness and save their world from annihilation.",
  geography: {
    regions: [
      {
        name: "Valoria",
        description:
          "A lush and fertile kingdom known for its vibrant landscapes and rich agriculture. Valoria is home to the Council of Sigils, a governing body that oversees the use of sigils among its people. The kingdom is marked by rolling hills, expansive fields, and dense forests, making it a prime location for both farming and skirmishes between rival factions.",
        relativeLocationInWorld:
          "Located in the central part of Eldralis, Valoria serves as a crossroads for trade and diplomacy among the kingdoms.",
        notableLocations: [
          {
            name: "The Sigil Grove",
            description:
              "A sacred forest where the Council of Sigils convenes and where the most powerful sigils are said to be hidden.",
          },
          {
            name: "The Emerald City",
            description:
              "The capital of Valoria, known for its towering spires and vibrant marketplaces.",
          },
        ],
      },
      {
        name: "Drakthar",
        description:
          "A rugged and mountainous region inhabited by fierce warriors and dragon riders. The people of Drakthar are known for their strength and resilience, often engaging in raids against neighboring kingdoms to claim their sigils. The harsh terrain and unpredictable weather make it a challenging place to live, but the inhabitants thrive in their warrior culture.",
        relativeLocationInWorld:
          "To the north of Valoria, Drakthar is bordered by treacherous mountains and deep valleys.",
        notableLocations: [
          {
            name: "The Dragon's Roost",
            description:
              "A high peak where the dragon riders train and bond with their mounts.",
          },
          {
            name: "The Forge of Ancients",
            description:
              "An ancient smithy where legendary weapons are crafted using the power of sigils.",
          },
        ],
      },
      {
        name: "Nerathis",
        description:
          "A desolate wasteland that was once a thriving kingdom, now ravaged by the misuse of sigils. The land is barren, and its people are often seen as outcasts. However, hidden within the wasteland are remnants of powerful sigils that draw adventurers and treasure seekers alike. The inhabitants have learned to survive in this harsh environment, often resorting to scavenging and trade with neighboring regions.",
        relativeLocationInWorld:
          "To the east of Valoria, Nerathis is a stark contrast to the lush landscapes of its neighbors.",
        notableLocations: [
          {
            name: "The Ruins of Eldar",
            description:
              "Ancient ruins that hold secrets of the past and the true nature of the sigils.",
          },
          {
            name: "The Scavenger's Market",
            description:
              "A bustling hub where traders barter for rare items and sigils.",
          },
        ],
      },
      {
        name: "Aeloria",
        description:
          "A mystical kingdom shrouded in fog and mystery, known for its scholars and mages who study the sigils. Aeloria is home to ancient libraries and academies where the secrets of the sigils are explored. The kingdom is often seen as a neutral ground for diplomacy, but its scholars are not above using their knowledge for their own gain.",
        relativeLocationInWorld:
          "To the west of Valoria, Aeloria is bordered by a vast sea and is often enveloped in mist.",
        notableLocations: [
          {
            name: "The Library of Whispers",
            description:
              "A grand library that houses ancient texts and knowledge about the sigils.",
          },
          {
            name: "The Academy of Sigils",
            description:
              "An institution where scholars study the sigils and their effects on the soul.",
          },
        ],
      },
    ],
  },
  history:
    "Eldralis was once a unified realm, blessed by the gods and filled with prosperity. However, the discovery of ancient sigils, powerful artifacts that could grant immense strength, led to a great schism among the kingdoms. As each kingdom sought to harness the power of the sigils, they became embroiled in conflict, leading to the rise of rival factions and the eventual fall of the unified realm. Legends speak of a slumbering god, once worshipped by the people, who was sealed away to prevent the misuse of the sigils. The Veil, a shadowy order, seeks to awaken this god, believing that only through chaos can true power be attained. As the kingdoms fracture further, the heroes of Eldralis must confront their own desires for power and the consequences of their actions.",
  factions: [
    {
      name: "The Council of Sigils",
      description:
        "The ruling body of Valoria, tasked with overseeing the use of sigils and maintaining order among the kingdoms.",
    },
    {
      name: "The Veil",
      description:
        "A secretive order that seeks to awaken the slumbering god and harness the power of the sigils for their own ends.",
    },
    {
      name: "The Dragon Riders of Drakthar",
      description:
        "A fierce group of warriors who ride dragons and protect their homeland from outside threats.",
    },
    {
      name: "The Scholars of Aeloria",
      description:
        "A faction of mages and scholars dedicated to studying the sigils and their effects on the world.",
    },
    {
      name: "The Scavengers of Nerathis",
      description:
        "Survivors of the wasteland who trade in rare sigils and artifacts, often seen as outcasts by the other kingdoms.",
    },
  ],
};

