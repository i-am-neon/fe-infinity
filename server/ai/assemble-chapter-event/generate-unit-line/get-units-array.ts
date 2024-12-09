import generateCharacterStartingAreas from "@/ai/assemble-chapter-event/generate-unit-line/generate-character-starting-areas.ts";
import generateGenericStartingAreas from "@/ai/assemble-chapter-event/generate-unit-line/generate-generic-starting-areas.ts";
import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generatePlayerUnitCoords from "@/ai/assemble-chapter-event/generate-unit-line/generate-player-unit-coords.ts";
import generateNpcUnitCoords from "@/ai/assemble-chapter-event/generate-unit-line/generate-npc-unit-coords.ts";
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
    chapterTitle: "Test Chapter",
    preChapterScene:
      "Seraphina receives word that the dark sorcerer Ligma has been corrupting the Whispering Woods, threatening her village. Determined to protect her home, she sets out to confront him, seeking allies along the way. In her journey, she encounters Lira, a brash dragon rider eager to join her cause.",
    battleOverview:
      "Seraphina and Lira must navigate the corrupted forest, battling Ligma's minions and overcoming obstacles created by dark magic. The goal is to reach Ligma's lair and confront him before he can unleash further chaos.",
    postChapterScene:
      "After a fierce battle, Seraphina and Lira manage to defeat Ligma, but not without consequences. They discover hints of the Veil's involvement in Ligma's plans, suggesting a larger threat looms over Eldralis. With newfound resolve, they decide to investigate the Veil and their intentions.",
  };

  const mapData = allMapOptions[0];

  const res = await getUnitsArray({
    characters,
    chapterData,
    map: mapData,
  });
  console.log(JSON.stringify(res, null, 2));
}

