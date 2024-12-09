import {
  CharacterIdea,
  CharacterIdeaSchema,
} from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { z } from "zod";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import {
  seraphinaCharacter,
  liraCharacter,
  ligmaCharacter,
  igorCharacter,
} from "@/testData/test-characters.ts";
import {
  CharacterStartingAreas,
  CharacterStartingAreaSchema,
} from "@/types/ai/CharacterStartingArea.ts";

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
      characterIdea: { ...seraphinaCharacter },
      characterClass: seraphinaCharacter.csvData.defaultClass,
      startingAllegiance: "ally",
    },
    {
      characterIdea: { ...liraCharacter },
      characterClass: liraCharacter.csvData.defaultClass,
      startingAllegiance: "npc",
    },
    {
      characterIdea: { ...ligmaCharacter },
      characterClass: ligmaCharacter.csvData.defaultClass,
      startingAllegiance: "ally",
    },
    {
      characterIdea: { ...igorCharacter },
      characterClass: ligmaCharacter.csvData.defaultClass,
      startingAllegiance: "enemy",
    },
  ];

  const chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss"> = {
    chapterTitle: "Test Chapter",
    preChapterScene:
      "Seraphina receives word that the dark sorcerer Ligma has been corrupting the sands of the Scorching Dunes, threatening her desert town of Sunhaven. Determined to protect her home, she sets out to confront him, seeking allies along the way. In her journey, she encounters Lira, a brash dragon rider who patrols the desert skies and is eager to join her cause.",
    battleOverview:
      "Seraphina and Lira must traverse the perilous Scorching Dunes, navigating through shifting sands and ancient ruins corrupted by Ligma's dark magic. Along the way, they battle his desert minions and overcome traps designed to thwart their progress. The goal is to reach Ligma's stronghold within a long-abandoned oasis and confront him before he can unleash further chaos on Sunhaven.",
    postChapterScene:
      "After a grueling battle, Seraphina and Lira manage to defeat Ligma, but at a cost. They uncover cryptic messages hinting at the Veil's influence in Ligma's plans, revealing that the corruption may be part of a larger scheme. With renewed determination, they decide to delve deeper into the mysteries of the Veil and its sinister intentions for Eldralis.",
  };

  const mapData = allMapOptions[0];

  const result = await generateCharacterStartingAreas({
    characters,
    map: mapData,
    chapterData,
  });

  console.log(JSON.stringify(result, null, 2));
}

