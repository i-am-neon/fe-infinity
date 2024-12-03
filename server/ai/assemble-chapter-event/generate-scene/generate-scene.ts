import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import cleanText from "@/lib/clean-text/clean-text.ts";
import { mainCharacterIdeaExample, storyArcExample } from "@/testData/ai.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { z } from "zod";
import { backgroundOptions } from "./background-options.ts";

export default async function generateScene({
  sceneOverview,
  existingPartyCharacters,
  newPlayableCharacters,
  boss,
  preOrPostBattle,
}: {
  sceneOverview: string;
  existingPartyCharacters: CharacterIdea[];
  newPlayableCharacters: CharacterIdea[];
  boss: CharacterIdea;
  preOrPostBattle: "pre-battle" | "post-battle";
}): Promise<{
  sceneContent: string;
  textSceneName: string;
  textSceneContent: string;
}> {
  const systemMessage = `You are a Fire Emblem fangame scene creator. You will create an Event Assembler scene with data given in the prompt.
Here are the properties you need to return:

## sceneContent

Should be the entire scene, referencing the created text scene. For example:
\`\`\`
Text(<backgroundSceneName>,<textSceneName>)
\`\`\`

Here's a list of backgroundSceneName options:

${JSON.stringify(backgroundOptions, null, 2)}

## textSceneName
The name of the text scene you created. Should be one or two words, no spaces, in PascalCase.

## textSceneContent
This is using EventAssembler to construct a conversation scene. To bring in the characters, you can use the following format:
\`\`\`
[FarRight][Load<characterName>]
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
[MidRight][LoadJasper][MidLeft][LoadDerek]
Jasper! We have our assignment.
[MidRight]Huh?
[MidLeft]We're going to be attached to Captain Jurgen and the Lion Brigade at
the front lines with Arcanae.[CloseSpeech][MoveLeft][FarLeft][LoadIggy]
The front lines with Arcanae... Cannon fodder.[A]
[MidRight]Iggy![A]
[FarLeft]It's true![A]
[Left]Guys, calm down! If they intend for us to be cannon fodder, we'll just have to prove
them wrong! No Cesarian Captain intends to just get us killed.
\`\`\`

Notice the first text line, "Jasper! We have our assignment." was spoken by Derek since that was the most recent position to be mentioned.

That's a short example of an opening scene. Yours may be longer.

`;
  const prompt = `Pre or Post battle: ${preOrPostBattle}\nsceneOverview: ${JSON.stringify(
    sceneOverview,
    null,
    2
  )}\nexistingPartyCharacters: ${JSON.stringify(
    existingPartyCharacters,
    null,
    2
  )}\nnewPlayableCharacters: ${JSON.stringify(
    newPlayableCharacters,
    null,
    2
  )}\nboss: ${JSON.stringify(boss, null, 2)}`;

  const { sceneContent, textSceneName, textSceneContent } =
    await generateStructuredData({
      systemMessage,
      prompt,
      schema: z.object({
        sceneContent: z.string(),
        textSceneName: z.string(),
        textSceneContent: z.string(),
      }),
    });

  return {
    sceneContent,
    textSceneName,
    textSceneContent: cleanText(textSceneContent),
  };
}

if (import.meta.main) {
  const res = await generateScene({
    sceneOverview: storyArcExample.chapterIdeas[0].preChapterScene,
    existingPartyCharacters: [mainCharacterIdeaExample], // example main character
    newPlayableCharacters:
      storyArcExample.chapterIdeas[0].newPlayableCharacters!,
    boss: storyArcExample.chapterIdeas[0].boss,
    preOrPostBattle: "pre-battle",
  });
  console.log(JSON.stringify(res, null, 2));
}

