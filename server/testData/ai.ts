import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { WorldSummary } from "@/types/ai/WorldSummary.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import {
  seraphinaPortraitMetadata,
  liraPortraitMetadata,
  igorPortraitMetadata,
  ligmaPortraitMetadata,
  pinkDancerPortraitMetadata,
  tealHairGirlPortraitMetadata,
  fireElfPortraitMetadata,
} from "@/testData/test-characters.ts";
import type { StoryArc } from "@/types/ai/StoryArc.ts";

export const worldIdeaExample =
  "In the fractured realm of Eldralis, rival kingdoms wield ancient sigils that grant immense power but corrupt the soul, forcing unlikely heroes to unite against a shadowy order seeking to awaken a slumbering god and plunge the world into eternal darkness.";

export const characterIdeaExample: CharacterIdea = {
  name: "Elara",
  gender: "female",
  personality:
    "Determined and compassionate, with a strong sense of justice and a hint of stubbornness.",
  age: "young adult",
  backstory:
    "Elara grew up in the small village of Eldergrove, nestled between the Whispering Woods and the Silver Mountains. As the daughter of a renowned herbalist, she learned the ways of nature and healing from a young age. However, her peaceful life was shattered when a dark sorcerer began to plague the land, corrupting the forests and threatening her home. Driven by a desire to protect her village and restore balance, Elara set out on a quest to confront the sorcerer. Her strengths lie in her deep connection to nature and her ability to heal, but she struggles with self-doubt and the fear of failure. Along her journey, she seeks to uncover the truth about her family's past and the ancient magic that flows through her veins, ultimately discovering her own potential as a powerful force for good.",
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

export const allPortraitOptions: PortraitMetadata[] = [
  seraphinaPortraitMetadata,
  liraPortraitMetadata,
  igorPortraitMetadata,
  ligmaPortraitMetadata,
  pinkDancerPortraitMetadata,
  tealHairGirlPortraitMetadata,
  fireElfPortraitMetadata,
];

export const storyArcExample: StoryArc = {
  premise:
    "In the fractured realm of Eldralis, Elara, a determined young herbalist, embarks on a quest to confront a dark sorcerer who threatens her village and the balance of nature. As she navigates the rivalries between kingdoms and the allure of ancient sigils, she must unite unlikely allies to thwart the shadowy order known as the Veil, which seeks to awaken a slumbering god. Along her journey, Elara will uncover the truth about her family's past and her own potential as a powerful force for good.",
  chapterIdeas: [
    {
      chapterTitle: "The Call to Adventure",
      newPlayableCharacters: [
        {
          name: "Kiran",
          gender: "male",
          personality:
            "Brash and adventurous, with a love for freedom and a knack for trouble.",
          age: "young adult",
          backstory:
            "Kiran hails from the rugged mountains of Drakthar, where he trained as a dragon rider. He left his home in search of adventure and to prove himself as a warrior. His carefree attitude often leads him into trouble, but his loyalty to friends is unwavering.",
          firstSeenAs: "ally",
          description:
            "Kiran is a tall young man with tousled black hair and a mischievous grin. He wears a leather vest and trousers suited for riding, with a dragon insignia emblazoned on his back.",
        },
      ],
      boss: {
        name: "Sorren",
        gender: "male",
        personality:
          "Cunning and manipulative, with a deep-seated desire for power.",
        age: "mature adult",
        backstory:
          "Once a respected member of the Council of Sigils, Sorren turned to dark magic in his quest for power. He seeks to harness the sigils to awaken the slumbering god, believing it will grant him ultimate control over Eldralis.",
        firstSeenAs: "boss",
        description:
          "Sorren is a tall man with sharp features and piercing blue eyes. He wears dark robes adorned with sigils, and his presence exudes an aura of danger.",
      },
      preChapterScene:
        "Elara receives word that the dark sorcerer Sorren has been corrupting the forests near her village, threatening the balance of nature. Determined to protect her home, she sets out to confront him, seeking allies along the way. In her journey, she encounters Kiran, a brash dragon rider eager for adventure.",
      battleOverview:
        "Elara and Kiran must navigate through the corrupted forest, battling Sorren's minions and overcoming obstacles to reach his lair. The environment is treacherous, with corrupted wildlife and traps set by Sorren. They must work together to defeat Sorren and cleanse the forest of his dark magic.",
      postChapterScene:
        "After a fierce battle, Elara and Kiran manage to defeat Sorren, but not without realizing the depth of the corruption that has spread across Eldralis. They learn of the Veil's plans to awaken the slumbering god, which could spell disaster for all kingdoms. With newfound resolve, they decide to journey to the Emerald City to seek the Council of Sigils' aid.",
    },
    {
      chapterTitle: "The Council's Dilemma",
      newPlayableCharacters: [
        {
          name: "Lyra",
          gender: "female",
          personality:
            "Wise and diplomatic, with a strong sense of duty and a hidden past.",
          age: "mature adult",
          backstory:
            "Lyra is a member of the Council of Sigils, tasked with maintaining order in Valoria. She has seen the rise and fall of many leaders and carries the weight of her decisions heavily. Her past is shrouded in mystery, and she harbors secrets about the sigils that could change everything.",
          firstSeenAs: "allied NPC",
          description:
            "Lyra is a dignified woman with silver hair and deep-set eyes that seem to hold centuries of wisdom. She wears elegant robes adorned with sigils, symbolizing her status within the Council.",
        },
      ],
      boss: {
        name: "Varek",
        gender: "male",
        personality:
          "Ambitious and ruthless, willing to do anything to gain power.",
        age: "mature adult",
        backstory:
          "Varek is a former member of the Council who was ousted for his extreme views on the use of sigils. He now leads a faction that seeks to control the sigils for their own gain, believing that only through power can peace be achieved.",
        firstSeenAs: "boss",
        description:
          "Varek is a muscular man with a commanding presence, dressed in ornate armor that reflects his status. His eyes burn with ambition, and he carries a large sigil-imbued weapon.",
      },
      preChapterScene:
        "Elara and Kiran arrive at the Emerald City, seeking the Council's guidance on the Veil's plans. They are met with skepticism, as the Council is divided on how to handle the growing threat.",
      battleOverview:
        "The chapter takes place in the Council's chamber, where Varek and his faction attempt to seize control of the sigils. Elara, Kiran, and Lyra must defend the Council from Varek's forces while navigating political intrigue and betrayal. The battle tests their resolve and unity as they fight to protect the sigils from falling into the wrong hands. When spoken to on the battlefield, Lyra, sensing the urgency, decides to help them uncover the truth behind the sigils.",
      postChapterScene:
        "After a hard-fought battle, Elara and her allies manage to thwart Varek's coup, but the Council remains divided on how to proceed. Lyra reveals her knowledge of the Veil's true intentions and the existence of a powerful sigil that could either save or doom Eldralis. With this knowledge, they prepare to journey to the Ruins of Eldar to uncover the secrets of the past.",
    },
    {
      chapterTitle: "The Awakening",
      newPlayableCharacters: [],
      boss: {
        name: "Morrigan",
        gender: "female",
        personality:
          "Mysterious and powerful, with a deep connection to the ancient sigils.",
        age: "elderly",
        backstory:
          "Morrigan is a guardian of the Ruins of Eldar, tasked with protecting the secrets of the sigils. She has witnessed the rise and fall of kingdoms and knows the true nature of the slumbering god. Her motives are unclear, and she tests those who seek her knowledge.",
        firstSeenAs: "boss",
        description:
          "Morrigan is an ancient woman with long, flowing white hair and eyes that seem to hold the wisdom of ages. She wears robes that shimmer with sigils, and her presence commands respect.",
      },
      preChapterScene:
        "Elara, Kiran, and Lyra arrive at the Ruins of Eldar, where they hope to uncover the truth about the sigils and the slumbering god. As they explore the ancient site, they are confronted by visions of the past, revealing the consequences of the sigils' misuse. Morrigan appears, challenging their intentions and testing their resolve.",
      battleOverview:
        "The final battle takes place within the heart of the Ruins, where Morrigan tests Elara and her allies with illusions and powerful sigil magic. They must confront their own fears and desires while battling Morrigan's formidable powers. The outcome will determine the fate of Eldralis and whether the slumbering god will awaken or remain sealed.",
      postChapterScene:
        "After a climactic battle, Elara and her allies manage to convince Morrigan of their noble intentions. She reveals the truth about the sigils and the slumbering god, offering them a choice: to harness the sigils' power for good or to seal them away forever. With newfound wisdom, Elara embraces her destiny as a protector of Eldralis, ready to face the challenges ahead.",
    },
  ],
};

