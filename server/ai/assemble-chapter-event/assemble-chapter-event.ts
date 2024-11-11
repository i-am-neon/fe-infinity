import getUnitsArray from "@/ai/assemble-chapter-event/generate-unit-line/get-units-array.ts";
import { storyArcExample } from "@/testData/ai.ts";
import { exampleRomCharacters } from "@/testData/rom-characters.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { StoryArc } from "@/types/ai/StoryArc.ts";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import generateScene from "./generate-scene/generate-scene.ts";
import { RomCharacter } from "@/types/RomCharacter.ts";

export type CharacterIdeaWithChapterJoinedAndClassAndPortrait = {
  characterIdea: CharacterIdea;
  characterClass: string;
  portrait: PortraitMetadata;
  chapterJoined: number;
};

export default async function assembleChapterEvent({
  storyArc,
  chapterNumberToAssemble,
  existingPartyCharacters,
  newPlayableCharacters,
  boss,
}: {
  storyArc: StoryArc;
  chapterNumberToAssemble: number;
  existingPartyCharacters: RomCharacter[];
  newPlayableCharacters: RomCharacter[];
  boss: RomCharacter;
}): Promise<ChapterEvent> {
  const thisChapterIdea = storyArc.chapterIdeas[chapterNumberToAssemble];

  const {
    sceneContent: preBattleSceneContent,
    textSceneName: preBattleTextSceneName,
    textSceneContent: preBattleTextSceneContent,
  } = await generateScene({
    sceneOverview: thisChapterIdea.preChapterScene,
    // Extract the characterIdea
    existingPartyCharacters: existingPartyCharacters.map((c) => ({ ...c })),
    newPlayableCharacters: newPlayableCharacters.map((c) => ({ ...c })),
    boss: { ...boss },
    preOrPostBattle: "pre-battle",
  });

  const {
    sceneContent: postBattleSceneContent,
    textSceneName: postBattleTextSceneName,
    textSceneContent: postBattleTextSceneContent,
  } = await generateScene({
    sceneOverview: thisChapterIdea.postChapterScene,
    existingPartyCharacters: existingPartyCharacters.map((c) => ({ ...c })),
    newPlayableCharacters: newPlayableCharacters.map((c) => ({ ...c })),
    boss: { ...boss },
    preOrPostBattle: "post-battle",
  });

  const unitsArray = await getUnitsArray([
    ...existingPartyCharacters.map((c) => ({
      characterIdea: { ...c },
      characterClass: c.csvData.defaultClass,
    })),
    ...newPlayableCharacters.map((c) => ({
      characterIdea: { ...c },
      characterClass: c.csvData.defaultClass,
    })),
    { characterIdea: { ...boss }, characterClass: boss.csvData.defaultClass },
  ]);

  return {
    eventDataReference:
      chapterNumberToAssemble === 0
        ? "PrologueEvent"
        : `Chapter${chapterNumberToAssemble}Event`,
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: undefined,
    miscBasedEvents: undefined,
    trapData: undefined,
    units: unitsArray.join("\n"),
    // For now hard-code music
    beginningScene:
      "LOAD1 0x1 Units\nMUSC Legends_of_Avenir\n" + preBattleSceneContent,
    endingScene: postBattleSceneContent,
    localDefinitions: [""],
    text: `## ${preBattleTextSceneName}\n[ConversationText]\n${preBattleTextSceneContent}[X]\n\n## ${postBattleTextSceneName}\n[ConversationText]\n${postBattleTextSceneContent}[X]`,
  };
}

if (import.meta.main) {
  const res = await assembleChapterEvent({
    storyArc: storyArcExample,
    chapterNumberToAssemble: 0,
    existingPartyCharacters: [],
    newPlayableCharacters: [
      exampleRomCharacters[0],
      exampleRomCharacters[1],
      exampleRomCharacters[2],
    ],
    boss: exampleRomCharacters[3],
  });
  console.log(JSON.stringify(res, null, 2));
}

