import generateScene from "./generate-scene/generate-scene.ts";
import replaceApostrophes from "./generate-scene/replace-apostrophes.ts";
import { storyArcExample } from "@/testData/ai.ts";
import { exampleRomCharacters } from "@/testData/rom-characters.ts";
import type { StoryArc } from "@/types/ai/StoryArc.ts";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import type { RomCharacter } from "@/types/RomCharacter.ts";
import { randomInt } from "node:crypto";

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
    existingPartyCharacters,
    newPlayableCharacters: thisChapterIdea.newPlayableCharacters || [],
    boss: thisChapterIdea.boss,
    preOrPostBattle: "pre-battle",
  });

  const {
    sceneContent: postBattleSceneContent,
    textSceneName: postBattleTextSceneName,
    textSceneContent: postBattleTextSceneContent,
  } = await generateScene({
    sceneOverview: thisChapterIdea.postChapterScene,
    existingPartyCharacters,
    newPlayableCharacters: thisChapterIdea.newPlayableCharacters || [],
    boss: thisChapterIdea.boss,
    preOrPostBattle: "post-battle",
  });

  const unitsArray = [];
  for (const romCharacter of [
    ...existingPartyCharacters,
    ...newPlayableCharacters,
    boss,
  ]) {
    const isBoss = romCharacter.name === thisChapterIdea.boss.name;
    const xCoord = randomInt(0, 5);
    const yCoord = randomInt(0, 5);
    unitsArray.push(
      `UNIT ${romCharacter.name} ${
        romCharacter.csvData.defaultClass
      } 0x00 Level(1, ${
        isBoss ? "Enemy" : "Ally"
      }, True) [${xCoord}, ${yCoord}] 0x00 0x00 0x0 0x00 [Rapier, Elixir, WhiteGem] ${
        isBoss ? "GuardTileAI" : "NoAI"
      }`
    );
  }

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

