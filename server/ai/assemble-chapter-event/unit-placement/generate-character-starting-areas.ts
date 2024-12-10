import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import {
  CharacterStartingAreas,
  CharacterStartingAreaSchema,
} from "@/types/ai/CharacterStartingArea.ts";
import { z } from "zod";

export default async function generateCharacterStartingAreas({
  characters,
  map,
  chapterData,
}: {
  characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "enemy" | "npc";
  }[];
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}): Promise<CharacterStartingAreas> {
  const systemMessage = `You are creating a battle idea for a Fire Emblem fan game. Given the list of characters, map, and chapter data, you must generate a battle idea that fits the context provided.

The goal is to create an engaging and challenging battle scenario that aligns with the chapter's narrative.

## playerCharactersStartingAreaName
Each character that has its "startingAllegiance" property as "ally" should be places in the same area. Feel free to name an area or sub-area from the map data.

## bossStartingAreaName
The boss character is the one that has its "firstSeenAs" property as "boss" and should be placed in a separate area that makes sense with the narrative.
For example if the story has the boss defending the castle, they should be placed at the castle gate, or in the throne room.
In most cases, the boss should be on the opposite corner/edge of the map as the player characters.

Bosses should be placed on these types of tiles. This is an ordered list of priority:
1. Throne
2. Castle Gate
3. Fort Gate

If none of these tiles are available, place the boss on a tile that makes sense for a boss unit. It could be a tile like:
- Ruins
- Fort
- Forest

Make sure the boss is placed far away from the player characters. The boss should be placed on the opposite corner or edge of the map as the ally units.

## npcStartingAreaNames
Each character that has its "startingAllegiance" property as "npc" or "enemy" when its "firstSeenAs" property is "enemy non-boss" should be placed in a separate area that makes sense with the narrative. You can have multiple NPCs in different areas.
Note that there may not be any NPCs in some chapters. In this case, return an empty array.

The area names must be area names from within the map data provided.
`;

  const { characterStartingAreas } = await generateStructuredData({
    systemMessage,
    prompt: `Characters: ${JSON.stringify(characters)}\n\nMap: ${JSON.stringify(
      map
    )}\n\nChapter Data: ${JSON.stringify(chapterData)}`,
    schema: z.object({
      characterStartingAreas: CharacterStartingAreaSchema,
    }),
  });

  return characterStartingAreas;
}

if (import.meta.main) {
  const characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "enemy" | "npc";
  }[] = [
    {
      characterIdea: {
        name: "Zynra",
        gender: "female",
        personality:
          "Curious and empathetic, driven by a deep sense of justice.",
        age: "young adult",
        backstory:
          "Zynra grew up in the outskirts of the Elderwood Thicket, where ancient sigils whispered through the trees. She witnessed a close friend fall into corruption due to forbidden magic, which fueled her resolve to understand and protect against such dangers. Over the years, she studied these sigils, striving to grasp their nature and prevent their misuse. Guided by compassion and courage, she now ventures forth to unite the fractured kingdoms and avert the awakening of Noxareth.",
        firstSeenAs: "ally",
        physicalDescription:
          "A slender woman with flowing silver hair and vibrant green eyes, dressed in forest garb adorned with subtle sigils.",
        inGameDescription:
          "A seeker of truth and unity, battling to protect the realm from dark influences.",
        deathQuote:
          "This can't be how it ends... for Eldralis. The truth must live on.",
      },
      characterClass: "Mage",
      startingAllegiance: "ally",
    },
    {
      characterIdea: {
        name: "Elysia",
        gender: "female",
        personality:
          "Wise and nurturing, Elysia is deeply connected to the forest and its spirits.",
        age: "mature adult",
        backstory:
          "Elysia has spent decades as a guardian of the Elderwood Thicket, learning the ancient ways of the druids. She witnessed the corruption of many sigil wielders and has dedicated her life to protecting the grove from those who would exploit its power. Her wisdom and connection to nature make her a valuable ally to Zynra, as she seeks to guide the young hero on her quest.",
        firstSeenAs: "ally",
        physicalDescription:
          "A tall woman with long, braided brown hair and deep-set amber eyes, often wearing robes made of leaves and vines.",
        inGameDescription:
          "A guardian of the Elderwood, she protects the ancient sigils and their secrets.",
        deathQuote:
          "The forest... must remain safe. Do not let my sacrifice be in vain.",
      },
      characterClass: "Shaman",
      startingAllegiance: "ally",
    },
    {
      characterIdea: {
        name: "Kieran",
        gender: "male",
        personality:
          "Ambitious and ruthless, Kieran is willing to do anything to achieve his goals, including sacrificing others.",
        age: "young adult",
        backstory:
          "Once a promising scholar at the Sigil Academy, Kieran became disillusioned with the limitations of knowledge and sought power through the Chosen of Nihilus. He believes that awakening Noxareth will grant him the strength to reshape Eldralis according to his vision. His mastery of corrupted sigils makes him a formidable foe, as he wields their power without regard for the consequences.",
        firstSeenAs: "boss",
        physicalDescription:
          "A tall man with short black hair and piercing blue eyes, clad in dark armor adorned with sigils that pulse with a sinister glow.",
        inGameDescription:
          "A former scholar turned dark enforcer, he seeks to awaken the slumbering god.",
        deathQuote: "You... will never understand the power I sought...!",
      },
      characterClass: "Shaman",
      startingAllegiance: "enemy",
    },
  ];

  const chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss"> = {
    chapterTitle: "The Awakening Shadows",
    premise:
      "Zynra arrives at the Elderwood Thicket, where she discovers that the Chosen of Nihilus are attempting to harness the power of the ancient sigils to awaken Noxareth. She must rally the druids of Ryndor to protect the sacred grove and confront the leader of the Chosen, who seeks to corrupt the sigils for their own gain. The battle will test Zynra's resolve and her understanding of the sigils' true nature.",
    preChapterScene:
      "Zynra arrives at the Elderwood Thicket, feeling the weight of the ancient sigils' presence. The druids are on high alert, sensing a disturbance as the Chosen of Nihilus encroach upon their sacred ground. Determined to protect the grove and uncover the truth, Zynra prepares to confront the dark forces threatening to awaken Noxareth.",
    battleOverview:
      "The battle unfolds in the mixed terrain of the Elderwood Thicket, where Zynra and Elysia must defend against the Chosen of Nihilus soldiers attempting to breach the sacred grove. The Northern Plains and Castle Wall area provides a strategic defensive position, allowing Zynra to utilize the castle walls for cover while engaging the enemy. The Central Cliffs and Forest area offers high ground and natural cover, which can be advantageous for ambushing the advancing foes. \n\nAs the battle progresses, Zynra and Elysia will need to navigate through the Western Village, where they can find refuge and resources to bolster their defenses. The Eastern Fort and Sea area serves as a stronghold for the Chosen, and Zynra must be cautious as she approaches this fortified position. \n\nUltimately, Zynra will confront Kieran in the heart of the battlefield, where the sigils' power is most concentrated. The terrain will play a crucial role in this final confrontation, as Zynra must harness the ancient sigils' true nature to thwart Kieran's ambitions and protect the grove from corruption.",
    postChapterScene:
      "With Kieran defeated, Zynra and Elysia stand amidst the remnants of the battle, the grove still intact but the threat of the Chosen of Nihilus looming larger than ever. Elysia shares her knowledge of the sigils, revealing their true nature and the importance of protecting them from corruption. Zynra vows to continue her quest, determined to unite the kingdoms and prevent the awakening of Noxareth.",
  };

  const mapData = allMapOptions[0];

  const result = await generateCharacterStartingAreas({
    characters,
    map: mapData,
    chapterData,
  });

  console.log(JSON.stringify(result, null, 2));
}

