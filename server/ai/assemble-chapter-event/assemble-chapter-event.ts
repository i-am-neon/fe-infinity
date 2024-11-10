import getUnitsArray from "@/ai/assemble-chapter-event/generate-unit-line/get-units-array.ts";
import { storyArcExample } from "@/testData/ai.ts";
import { exampleRomCharacters } from "@/testData/rom-characters.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { StoryArc } from "@/types/ai/StoryArc.ts";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import generateScene from "./generate-scene/generate-scene.ts";

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
  existingPartyCharacters: CharacterIdeaWithChapterJoinedAndClassAndPortrait[];
  newPlayableCharacters: CharacterIdeaWithChapterJoinedAndClassAndPortrait[];
  boss: CharacterIdeaWithChapterJoinedAndClassAndPortrait;
}): Promise<ChapterEvent> {
  const thisChapterIdea = storyArc.chapterIdeas[chapterNumberToAssemble];

  const {
    sceneContent: preBattleSceneContent,
    textSceneName: preBattleTextSceneName,
    textSceneContent: preBattleTextSceneContent,
  } = await generateScene({
    sceneOverview: thisChapterIdea.preChapterScene,
    existingPartyCharacters: existingPartyCharacters.map(
      (c) => c.characterIdea
    ),
    newPlayableCharacters: newPlayableCharacters.map((c) => c.characterIdea),
    boss: boss.characterIdea,
    preOrPostBattle: "pre-battle",
  });

  const {
    sceneContent: postBattleSceneContent,
    textSceneName: postBattleTextSceneName,
    textSceneContent: postBattleTextSceneContent,
  } = await generateScene({
    sceneOverview: thisChapterIdea.postChapterScene,
    existingPartyCharacters: existingPartyCharacters.map(
      (c) => c.characterIdea
    ),
    newPlayableCharacters: newPlayableCharacters.map((c) => c.characterIdea),
    boss: boss.characterIdea,
    preOrPostBattle: "post-battle",
  });

  const unitsArray = await getUnitsArray([
    ...existingPartyCharacters,
    ...newPlayableCharacters,
    boss,
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
      {
        characterIdea: { ...exampleRomCharacters[0] },
        characterClass: exampleRomCharacters[0].csvData.defaultClass,
        chapterJoined: 0,
        portrait: exampleRomCharacters[0].portraitMetadata,
      },
      {
        characterIdea: { ...exampleRomCharacters[1] },
        characterClass: exampleRomCharacters[1].csvData.defaultClass,
        chapterJoined: 0,
        portrait: exampleRomCharacters[1].portraitMetadata,
      },
      {
        characterIdea: { ...exampleRomCharacters[2] },
        characterClass: exampleRomCharacters[2].csvData.defaultClass,
        chapterJoined: 0,
        portrait: exampleRomCharacters[2].portraitMetadata,
      },
    ],
    boss: {
      characterIdea: { ...exampleRomCharacters[3] },
      characterClass: exampleRomCharacters[3].csvData.defaultClass,
      chapterJoined: 0,
      portrait: exampleRomCharacters[3].portraitMetadata,
    },
  });
  console.log(JSON.stringify(res, null, 2));
}

