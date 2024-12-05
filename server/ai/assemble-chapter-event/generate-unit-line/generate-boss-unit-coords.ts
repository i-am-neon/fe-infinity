import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { igorCharacter } from "@/testData/test-characters.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";

const systemMessage = `You are choosing the starting boss character position for a Fire Emblem chapter.

Given the areas the character should be, use the map data to determine the coordinates for each character on the map.

## Guidelines for boss placement

Bosses should be placed on these types of tiles. This is an ordered list of priority:
1. Throne
2. Castle Gate
3. Fort Gate

If none of these tiles are available, place the boss on a tile that makes sense for a boss unit. It could be a tile like:
- Ruins
- Fort
- Forest

Or none of those. Do what makes the most sense for the chapter data.

Boss must NOT be placed on these types of tiles:
- Wall
- Sea
- Lake
- Water
- Thicket
- Peak
- Door
- Village Wall
- Castle Wall

In your return value, include the terrain type of that tile and why you decided to put the character there.
`;

export default async function generatePlayerUnitCoords({
  characters,
  bossStartingAreaName,
  chapterData,
  map,
}: {
  characters: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[];
  bossStartingAreaName: string;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
  map: MapData;
}): Promise<
  {
    characterName: string;
    characterClass: string;
    xCoord: number;
    yCoord: number;
  }[]
> {
  const { characterNameAndCoords } = await generateStructuredData({
    systemMessage,
    prompt: `Characters: ${JSON.stringify(
      characters,
      null,
      2
    )}\n\nCharacter Starting Area: ${bossStartingAreaName}\n\nChapterData: ${JSON.stringify(
      chapterData,
      null,
      2
    )}\n\nMap: ${JSON.stringify(map, null, 2)}`,
    schema: z.object({
      characterNameAndCoords: z.array(
        z.object({
          characterName: z.string(),
          xCoord: z.number(),
          yCoord: z.number(),
          terrain: z.string(),
          reasoning: z.string(),
        })
      ),
    }),
    model: "gpt-4o",
  });
  console.log(
    "characterNameAndCoords",
    JSON.stringify(characterNameAndCoords, null, 2)
  );
  return characterNameAndCoords.map(({ characterName, xCoord, yCoord }) => {
    const character = characters.find((c) => c.characterName === characterName);
    if (!character) {
      throw new Error(`Character not found: ${characterName}`);
    }
    return {
      characterName: character.characterName,
      characterClass: character.characterClass,
      xCoord,
      yCoord,
    };
  });
}

if (import.meta.main) {
  const characters: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[] = [
    {
      characterName: "Igor",
      characterClass: igorCharacter.csvData.defaultClass,
      startingAllegiance: "enemy",
    },
  ];

  const bossStartingAreaName = "Fort Area";

  const chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss"> = {
    chapterTitle: "Test Chapter",
    preChapterScene:
      "Seraphina receives word that the dark sorcerer Ligma has been corrupting the Whispering Woods, threatening her village. Determined to protect her home, she sets out to confront him, seeking allies along the way. In her journey, she encounters Lira, a brash dragon rider eager to join her cause.",
    battleOverview:
      "Seraphina and Lira must navigate the corrupted forest, battling Ligma's minions and overcoming obstacles created by dark magic. The goal is to reach Ligma's lair and confront him before he can unleash further chaos.",
    postChapterScene:
      "After a fierce battle, Seraphina and Lira manage to defeat Ligma, but not without consequences. They discover hints of the Veil's involvement in Ligma's plans, suggesting a larger threat looms over Eldralis. With newfound resolve, they decide to investigate the Veil and their intentions.",
  };

  const mapData = allMapOptions[0];

  const res = await generatePlayerUnitCoords({
    characters,
    bossStartingAreaName,
    chapterData,
    map: mapData,
  });
  console.log(JSON.stringify(res, null, 2));
}

