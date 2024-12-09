import generateCharacterStartingAreas from "./generate-character-starting-areas.ts";
import generateGenericStartingAreas from "./generate-generic-starting-areas.ts";
import generateUnitLine from "./generate-unit-line.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generatePlayerUnitCoords from "./generate-player-unit-coords.ts";
import generateNpcUnitCoords from "./generate-npc-unit-coords.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import {
  igorCharacter,
  ligmaCharacter,
  liraCharacter,
  seraphinaCharacter,
} from "@/testData/test-characters.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";

export default async function getUnitsArray({
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
}): Promise<string[]> {
  const characterStartingAreas = await generateCharacterStartingAreas({
    characters,
    map,
    chapterData,
  });

  const genericStartingAreas = await generateGenericStartingAreas({
    characterStartingAreas,
    map,
    chapterData,
  });

  const playerCoords = await generatePlayerUnitCoords({
    characters: characters
      .filter((c) => c.startingAllegiance === "ally")
      .map((c) => ({
        characterName: c.characterIdea.name,
        characterClass: c.characterClass,
        startingAllegiance: c.startingAllegiance,
      })),
    mapArea: map.areas.find(
      (a) => a.name === characterStartingAreas.playerCharactersStartingAreaName
    )!,
  });
  const npcMapAreas: MapArea[] =
    characterStartingAreas.npcStartingAreaNames.map(
      (characterArea) =>
        map.areas.find((a) => a.name === characterArea.areaName)!
    );
  const npcCoords = await generateNpcUnitCoords({
    characters: characters
      .filter(
        (c) =>
          c.startingAllegiance === "npc" ||
          (c.startingAllegiance === "enemy" &&
            c.characterIdea.firstSeenAs === "enemy non-boss")
      )
      .map((c) => ({
        characterName: c.characterIdea.name,
        characterClass: c.characterClass,
        startingAllegiance: c.startingAllegiance,
      })),
    npcStartingAreaNames: characterStartingAreas.npcStartingAreaNames,
    mapAreas: npcMapAreas,
  });

  console.log(
    "characterStartingAreas",
    JSON.stringify(characterStartingAreas, null, 2)
  );
  console.log("playerCoords", JSON.stringify(playerCoords, null, 2));
  console.log("npcCoords", JSON.stringify(npcCoords, null, 2));

  // const charactersWithCoords = await generateUnitCoords({
  //   characters: characters.map((c) => ({
  //     characterName: c.characterIdea.name,
  //     characterClass: c.characterClass,
  //     startingAllegiance: c.startingAllegiance,
  //   })),
  //   map,
  //   chapterData,
  //   characterStartingAreas,
  // });

  // NEXT: implement generateGenericUnitCoords, then call generateUnitLine on each.

  // return await Promise.all(
  //   charactersWithCoords.map(async (c) => {
  //     return await generateUnitLine({
  //       characterIdea: characters.find(
  //         (char) => char.characterIdea.name === c.characterName
  //       )?.characterIdea!,
  //       characterClass: c.characterClass,
  //       xCoord: c.xCoord,
  //       yCoord: c.yCoord,
  //     });
  //   })
  // );
  return [];
}

if (import.meta.main) {
  const characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
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
      characterClass: igorCharacter.csvData.defaultClass,
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

  const res = await getUnitsArray({
    characters,
    chapterData,
    map: mapData,
  });
  console.log(JSON.stringify(res, null, 2));
}

