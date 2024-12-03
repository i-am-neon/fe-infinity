import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";

export default async function generateGenericStartingAreas({
  characterStartingAreas,
  map,
  chapterData,
}: {
  characterStartingAreas: {
    playerCharactersStartingAreaName: string;
    bossStartingAreaName: string;
    npcStartingAreaNames: {
      characterName: string;
      areaName: string;
    }[];
  };
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}) {
  const systemMessage = `You are creating a battle idea for a Fire Emblem fan game. Given the list of existing character starting areas, map, and chapter data, you must generate the starting areas for generic enemy units that fit the context provided.

The goal is to create an engaging and challenging battle scenario that aligns with the chapter's narrative.

## genericEnemyStartingAreaNames
Based on your knowledge of Fire Emblem 8, assign starting areas for generic enemy units that make sense within the context of the chapter. Consider the terrain, objectives, and overall difficulty of the battle.

The area names must be area names from within the map data provided.
`;

  const { battleIdea } = await generateStructuredData({
    systemMessage,
    prompt: `Character starting areas: ${JSON.stringify(
      characterStartingAreas
    )}\n\nMap: ${JSON.stringify(map)}\n\nChapter Data: ${JSON.stringify(
      chapterData
    )}`,
    schema: z.object({
      battleIdea: z.object({
        genericEnemyStartingAreaNames: z.array(
          z.object({
            unitTypes: z
              .array(z.string())
              .describe(
                "list of Fire Emblem 8 unit types that start in this area"
              ),
            areaName: z.string(),
          })
        ),
      }),
    }),
    temperature: 1,
  });

  return battleIdea;
}

if (import.meta.main) {
  const characterStartingAreas = {
    playerCharactersStartingAreaName: "Northern Desert",
    bossStartingAreaName: "Fort Area",
    npcStartingAreaNames: [
      {
        characterName: "Lira",
        areaName: "Desert Plains",
      },
      {
        characterName: "Igor",
        areaName: "Fort Area",
      },
    ],
  };

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

  const result = await generateGenericStartingAreas({
    characterStartingAreas,
    map: mapData,
    chapterData,
  });

  console.log(JSON.stringify(result, null, 2));
}

