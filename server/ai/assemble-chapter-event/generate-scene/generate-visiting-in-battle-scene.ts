import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import cleanText from "@/lib/clean-text/clean-text.ts";
import { storyArcExample } from "@/testData/ai.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { z } from "zod";
import { backgroundOptions } from "./background-options.ts";

// For visiting houses, villages, etc in battle.
export default async function generateVisitingInBattleScene({
  sceneOverview,
  newPlayableCharacters,
  boss,
  buildingType,
  reward,
}: {
  sceneOverview: string;
  newPlayableCharacters?: CharacterIdea[];
  boss: CharacterIdea;
  buildingType: string;
  reward?: string;
}): Promise<{
  background: string;
  sceneTextContent: string;
}> {
  const systemMessage = `You are a Fire Emblem fangame scene creator for when a character is visiting a house, village, etc during the battle.
You will create an Event Assembler scene with data given in the prompt.

If there is a reward, it will be given to the player when they visit the location. This should be worked into the scene text content.

The scene will always be a villager talking to the player character.

If there is no reward, the villager will give a warning or advice about the chapter scene or boss.

If there is a reward, the villager will mention it in the scene text content and work in the context of the chapter scene or optionally the boss.

Because the game will not know which player character is visiting the location, the villager will never address the player character by name.

Here are the properties you need to return:

## background

Here's a list of backgroundSceneName options:

${JSON.stringify(backgroundOptions, null, 2)}

You must choose from that list, and not use any other background.


## sceneTextContent
This is using EventAssembler to construct a conversation scene. To bring in the characters, you can use the following format:
\`\`\`
[MidRight][LoadCurrent][MidLeft][Load<Villager Name>]
\`\`\`
In the above example, <characterName>'s portrait will be loaded in the far right position. Here are the options for portrait position:
[FarFarLeft]
[FarLeft]
[MidLeft]
[Left]
[Right]
[MidRight]
[FarRight]
[FarFarRight]

No two characters may be in the same position.

In order for a character who has been loaded in to talk, use their position in the conversation. For example:
\`\`\`
[Right]Did you forget so quickly?
\`\`\`

[CloseSpeech] will close the current character's speech bubble.

[Move<position>] will move the character to the specified position. For example:
[MoveLeft] will move the character to the left.

Here's an example of a text scene:
\`\`\`
[MidRight][LoadCurrent][MidLeft][LoadVillagerMan3]
I moved to Shizon to get away from the
mainland strife... Now it's found its
way here... Take this, and end this
fight. I want to get back to my peace.
\`\`\`

Here are the options for villagers:
\`\`\`
VillagerMan1
VillagerOldMan
VillagerMan2
VillagerMan3
VillagerMan4
VillagerMan5
VillagerBoy
VillagerOldWoman
VillagerWoman
VillagerGirl1
VillagerGirl2
VillagerGirl3
\`\`\`

These are the ONLY villagers you may use. For example, if you want to load in VillagerMan1, you would use:
\`\`\`
[LoadVillagerMan1]
\`\`\`

`;
  const prompt = `sceneOverview: ${JSON.stringify(
    sceneOverview,
    null,
    2
  )}\nnewPlayableCharacters: ${JSON.stringify(
    newPlayableCharacters,
    null,
    2
  )}\nboss: ${JSON.stringify(
    boss,
    null,
    2
  )}\nReward: ${reward}\nBuilding Type: ${buildingType}`;

  const { background, sceneTextContent: _sceneTextContent } =
    await generateStructuredData({
      systemMessage,
      prompt,
      schema: z.object({
        background: z.string(),
        sceneTextContent: z.string(),
      }),
      temperature: 1,
    });

  return {
    background,
    sceneTextContent: cleanText(_sceneTextContent),
  };
}

if (import.meta.main) {
  const house = await generateVisitingInBattleScene({
    sceneOverview: storyArcExample.chapterIdeas[0].preChapterScene,
    newPlayableCharacters:
      storyArcExample.chapterIdeas[0].newPlayableCharacters!,
    boss: storyArcExample.chapterIdeas[0].boss,
    buildingType: "House",
  });
  console.log(JSON.stringify(house, null, 2));

  const villageItem = await generateVisitingInBattleScene({
    sceneOverview: storyArcExample.chapterIdeas[0].preChapterScene,
    newPlayableCharacters:
      storyArcExample.chapterIdeas[0].newPlayableCharacters!,
    boss: storyArcExample.chapterIdeas[0].boss,
    buildingType: "Village",
    reward: "GiveItem(BraveSword,0xFFFF)",
  });
  console.log(JSON.stringify(villageItem, null, 2));

  const villageGold = await generateVisitingInBattleScene({
    sceneOverview: storyArcExample.chapterIdeas[0].preChapterScene,
    newPlayableCharacters:
      storyArcExample.chapterIdeas[0].newPlayableCharacters!,
    boss: storyArcExample.chapterIdeas[0].boss,
    buildingType: "Visitable Ruins",
    reward: "GiveGold(5000)",
  });
  console.log(JSON.stringify(villageGold, null, 2));
}

