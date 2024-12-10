import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterStartingAreas } from "@/types/ai/CharacterStartingArea.ts";
import { z } from "zod";

export default async function generateGenericStartingAreas({
  characterStartingAreas,
  map,
  chapterData,
}: {
  characterStartingAreas: CharacterStartingAreas;
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}) {
  const systemMessage = `You are creating a battle idea for a Fire Emblem fan game. Given the list of existing character starting areas, map, and chapter data, you must generate the starting areas for generic enemy units that fit the context provided.

The goal is to create an engaging and challenging battle scenario that aligns with the chapter's narrative.

## genericEnemyStartingAreaNames
Based on your knowledge of Fire Emblem 8, assign starting areas for generic enemy units that make sense within the context of the chapter. Consider the terrain, objectives, and overall difficulty of the battle.

The area names must be area names from within the map data provided. You must never make up names for areas that do not exist in the map data.
`;

  const { genericEnemyStartingAreaNames } = await generateStructuredData({
    systemMessage,
    prompt: `Character starting areas: ${JSON.stringify(
      characterStartingAreas
    )}\n\nMap: ${JSON.stringify(map)}\n\nChapter Data: ${JSON.stringify(
      chapterData
    )}Map Area Options: ${JSON.stringify(map.areas.map((area) => area.name))}`,
    schema: z.object({
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
  });

  return genericEnemyStartingAreaNames;
}

if (import.meta.main) {
  const characterStartingAreas = {
    playerCharactersStartingAreaName: "Northern Desert",
    bossStartingAreaName: "Fort Area",
    npcStartingAreaNames: [
      {
        characterName: "Elysia",
        areaName: "Desert Plains",
      },
    ],
  };

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

  const result = await generateGenericStartingAreas({
    characterStartingAreas,
    map: mapData,
    chapterData,
  });

  console.log(JSON.stringify(result, null, 2));
}

