import getUnitsArray from "@/ai/assemble-chapter-event/generate-unit-line/get-units-array.ts";
import chapterTitleToChapterId from "@/ai/utilities/chapter-title-to-chapter-id.ts";
import getEventDataReferenceFromChapterId from "@/lib/get-event-data-reference-from-chapter-name.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { storyArcExample } from "@/testData/ai.ts";
import { exampleRomCharacters } from "@/testData/rom-characters.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import { RomCharacter } from "@/types/RomCharacter.ts";
import generateScene from "./generate-scene/generate-scene.ts";
import getAllLocationBasedEvents from "@/ai/assemble-chapter-event/location-based-events/get-all-location-based-events.ts";
import getAllRecruitEvents from "@/ai/assemble-chapter-event/recruit-events/get-all-recruit-events.ts";

export default async function assembleChapterEvent({
  chapterIdea,
  existingPartyCharacters,
  newPlayableCharacters,
  boss,
  map,
  nextChapterId,
  isPrologue,
}: {
  chapterIdea: ChapterIdea;
  existingPartyCharacters: RomCharacter[];
  newPlayableCharacters: RomCharacter[];
  boss: RomCharacter;
  map: MapData;
  nextChapterId?: string;
  isPrologue: boolean;
}): Promise<ChapterEvent> {
  const existingPartyCharacterIdeas: CharacterIdea[] =
    existingPartyCharacters.map((c) => ({ ...c }));
  const newPlayableCharacterIdeas: CharacterIdea[] = newPlayableCharacters.map(
    (c) => ({ ...c })
  );
  const bossIdea: CharacterIdea = { ...boss };
  const chapterId = chapterTitleToChapterId(chapterIdea.chapterTitle);

  // Run async functions in parallel
  const [
    preBattleScene,
    postBattleScene,
    unitsArray,
    {
      locationBasedEvents,
      localDefinitions: locationBasedLocalDefs,
      text: locationBasedEventsText,
    },
    {
      characterBasedEvents,
      localDefinitions: recruitLocalDefs,
      sceneTexts: recruitSceneTexts,
    },
  ] = await Promise.all([
    generateScene({
      sceneOverview: chapterIdea.preChapterScene,
      existingPartyCharacters: existingPartyCharacterIdeas,
      newPlayableCharacters: newPlayableCharacterIdeas,
      boss: bossIdea,
      preOrPostBattle: "pre-battle",
    }),
    generateScene({
      sceneOverview: chapterIdea.postChapterScene,
      existingPartyCharacters: existingPartyCharacterIdeas,
      newPlayableCharacters: newPlayableCharacterIdeas,
      boss: bossIdea,
      preOrPostBattle: "post-battle",
    }),
    getUnitsArray({
      characters: [
        ...existingPartyCharacters.map((c) => ({
          characterIdea: { ...c },
          characterClass: c.csvData.defaultClass,
        })),
        ...newPlayableCharacters.map((c) => ({
          characterIdea: { ...c },
          characterClass: c.csvData.defaultClass,
        })),
        {
          characterIdea: bossIdea,
          characterClass: boss.csvData.defaultClass,
        },
      ],
      map,
      chapterData: { ...chapterIdea },
    }),
    getAllLocationBasedEvents({
      chapterIdea,
      interactableTiles: map.interactableTiles,
    }),
    getAllRecruitEvents({
      // In prologue all characters are new playable characters
      existingPartyCharacters: isPrologue
        ? newPlayableCharacterIdeas.filter((c) => c.firstSeenAs === "ally")
        : existingPartyCharacterIdeas,
      newPlayableCharacters: isPrologue
        ? newPlayableCharacterIdeas.filter((c) => c.firstSeenAs !== "ally")
        : newPlayableCharacterIdeas,
      preChapterScene: chapterIdea.preChapterScene,
      battleOverview: chapterIdea.battleOverview,
    }),
  ]);

  // Extract pre-battle scene data
  const {
    sceneContent: rawPreBattleSceneContent,
    textSceneName: preBattleTextSceneName,
    textSceneContent: preBattleTextSceneContent,
  } = preBattleScene;

  const preBattleTextSceneId = `${chapterId}_${preBattleTextSceneName}`;
  const preBattleSceneContent = rawPreBattleSceneContent.replaceAll(
    preBattleTextSceneName,
    preBattleTextSceneId
  );

  // Construct beginning scene
  const beginningScene =
    "LOAD1 0x1 Units\nMUSC Legends_of_Avenir\n" +
    preBattleSceneContent +
    "\nFadeOutMusic";

  // Extract post-battle scene data
  const {
    sceneContent: rawPostBattleSceneContent,
    textSceneName: postBattleTextSceneName,
    textSceneContent: postBattleTextSceneContent,
  } = postBattleScene;

  const postBattleTextSceneId = `${chapterId}_${postBattleTextSceneName}`;
  const postBattleSceneContent = rawPostBattleSceneContent.replaceAll(
    postBattleTextSceneName,
    postBattleTextSceneId
  );

  // Construct ending scene
  const endingScene =
    postBattleSceneContent +
    (nextChapterId ? `\nMoveToChapter(${nextChapterId})` : "");

  const preBattleTextScene = `## ${preBattleTextSceneId}\n[ConversationText]\n${preBattleTextSceneContent}[X]\n\n`;
  const postBattleTextScene = `## ${postBattleTextSceneId}\n[ConversationText]\n${postBattleTextSceneContent}[X]`;

  return {
    eventDataReference: getEventDataReferenceFromChapterId(chapterId),
    turnBasedEvents: undefined,
    characterBasedEvents,
    locationBasedEvents,
    miscBasedEvents: "DefeatAll(EndingScene)",
    trapData: undefined,
    units: unitsArray.join("\n"),
    beginningScene,
    endingScene,
    localDefinitions: [...locationBasedLocalDefs, ...recruitLocalDefs],
    text: [
      preBattleTextScene,
      postBattleTextScene,
      ...locationBasedEventsText,
      ...recruitSceneTexts,
    ].join("\n\n"),
  };
}

if (import.meta.main) {
  const res = await assembleChapterEvent({
    chapterIdea: storyArcExample.chapterIdeas[0],
    existingPartyCharacters: [],
    newPlayableCharacters: [
      exampleRomCharacters[0],
      exampleRomCharacters[1],
      exampleRomCharacters[2],
    ],
    boss: exampleRomCharacters[3],
    map: allMapOptions[0],
    nextChapterId: "Chapter1",
    isPrologue: false,
  });
  console.log(JSON.stringify(res, null, 2));
}

