import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import {
  ligmaCharacter,
  liraCharacter,
  seraphinaCharacter,
} from "@/testData/test-characters.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { z } from "zod";

const systemMessage = `You are choosing the starting character positions for a Fire Emblem chapter.

Given the character ideas, chapter data, and map data, generate the coordinates for each character on the map.

The "firstSeenAs" property should be handled as such:
- "ally" means the character is an ally unit. All ally units should start near each other, unless the story dictates otherwise.
- "allied NPC" means the character starts as a green unit. Where they are placed depends on the chapter idea.
- "enemy non-boss" means the character starts as an enemy unit, but they can be recruited. They should be placed with other generic enemy units.
- "boss" means the character is the chapter's boss. See below for more information.

## Guidelines for ally placement

Allies typically start in a corner or edge of the map. They don't have to be exactly in the corner or edge, use your best judgement.

Allies should be placed at least diagonal from one another or have one tile between them.

Allies must NOT be placed on these types of tiles:
- Wall
- Sea
- Lake
- Water
- Thicket
- Peak
- Door
- Village Wall
- Castle Wall

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

Boss should be placed on the opposite corner or edge of the map as the ally units
 
`;

export default async function generateUnitCoords({
  characters,
  chapterData,
  map,
}: {
  characters: { characterIdea: CharacterIdea; characterClass: string }[];
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
  map: MapData;
}): Promise<
  {
    characterIdea: CharacterIdea;
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
    )}\n\nChapterData: ${JSON.stringify(
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
        })
      ),
    }),
  });
  return characterNameAndCoords.map(({ characterName, xCoord, yCoord }) => {
    const character = characters.find(
      (c) => c.characterIdea.name === characterName
    );
    if (!character) {
      throw new Error(`Character not found: ${characterName}`);
    }
    return {
      characterIdea: character.characterIdea,
      characterClass: character.characterClass,
      xCoord,
      yCoord,
    };
  });
}

if (import.meta.main) {
  const characters: { characterIdea: CharacterIdea; characterClass: string }[] =
    [
      {
        characterIdea: { ...seraphinaCharacter },
        characterClass: seraphinaCharacter.csvData.defaultClass,
      },
      {
        characterIdea: { ...liraCharacter },
        characterClass: liraCharacter.csvData.defaultClass,
      },
      {
        characterIdea: { ...ligmaCharacter },
        characterClass: ligmaCharacter.csvData.defaultClass,
      },
    ];

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

  const res = await generateUnitCoords({
    characters,
    chapterData,
    map: mapData,
  });
  console.log(
    "res",
    JSON.stringify(
      res.map((c) => ({
        name: c.characterIdea.name,
        xCoord: c.xCoord,
        yCoord: c.yCoord,
      })),
      null,
      2
    )
  );
}

