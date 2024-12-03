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

export default async function assembleChapterEvent({
  chapterIdea,
  existingPartyCharacters,
  newPlayableCharacters,
  boss,
  map,
  nextChapterId,
}: {
  chapterIdea: ChapterIdea;
  existingPartyCharacters: RomCharacter[];
  newPlayableCharacters: RomCharacter[];
  boss: RomCharacter;
  map: MapData;
  nextChapterId?: string;
}): Promise<ChapterEvent> {
  const existingPartyCharacterIdeas: CharacterIdea[] =
    existingPartyCharacters.map((c) => ({ ...c }));
  const newPlayableCharacterIdeas: CharacterIdea[] = newPlayableCharacters.map(
    (c) => ({ ...c })
  );
  const bossIdea: CharacterIdea = { ...boss };
  const chapterId = chapterTitleToChapterId(chapterIdea.chapterTitle);

  // Run async functions in parallel
  const [preBattleScene, postBattleScene, unitsArray, locationBasedEvents] =
    await Promise.all([
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

  return {
    eventDataReference: getEventDataReferenceFromChapterId(chapterId),
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: undefined,
    miscBasedEvents: "DefeatAll(EndingScene)",
    trapData: undefined,
    units: unitsArray.join("\n"),
    beginningScene,
    endingScene,
    localDefinitions: [""],
    text: `## ${preBattleTextSceneId}\n[ConversationText]\n${preBattleTextSceneContent}[X]\n\n## ${postBattleTextSceneId}\n[ConversationText]\n${postBattleTextSceneContent}[X]`,
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
  });
  console.log(JSON.stringify(res, null, 2));
}

