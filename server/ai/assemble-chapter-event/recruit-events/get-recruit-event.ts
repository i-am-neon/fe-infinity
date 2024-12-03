import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { z } from "zod";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { seraphinaCharacter } from "@/testData/test-characters.ts";
import { liraCharacter } from "@/testData/test-characters.ts";
import cleanText from "@/lib/clean-text/clean-text.ts";

export default async function getRecruitEvent({
  playerCharacter,
  characterToRecruit,
  preChapterScene,
  battleOverview,
  recruitEventHex,
}: {
  playerCharacter: CharacterIdea;
  characterToRecruit: CharacterIdea;
  preChapterScene: string;
  battleOverview: string;
  recruitEventHex: string;
}): Promise<{
  characterBasedEvent: string;
  sceneContent: string;
  sceneTextContent: string;
}> {
  const systemMessage = `You are a Fire Emblem fangame recruitment scene creator. You will create an Event Assembler scene with data given in the prompt.
Here are the properties you need to return:

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
[MidLeft][LoadArc][MidRight][LoadArya]Your name is Arc, correct?
[MidLeft]What's it to you?
[MidRight]You're my target. Get ready.
[MidLeft]Wait! Me specifically?
[MidRight]That is what I was told to do.
[MidLeft]What kind of bandit are you?
Firstly, you're a girl.
Secondly, you have a target?
[MidRight]I am an assassin of Shizon. I will
kill whomever my employer orders me to.
[MidLeft]This seems to be below the typical
jobs you Shizonians take on.
[MidRight][TMM][.......]... [.......][TMM]I may lack confidence in my orders,
but my contract is my contract.
[MidLeft]If your contract stated something
different than this, is it still valid?
[MidRight]What?
[MidLeft]I'm just a simple militiaman.
I'm no scholar, and certainly not an
assassin, but I figure that if Gerwick's
ole pal over there misled you, you'd
have the right to leave him, no? Plus,
Gerwick, your employer is dead.
[MidRight]Gerwick is dead?
[MidLeft]By our own hands.
Wouldn't that terminate your contract?
[MidRight]Then I'm no longer
bound to these bandits.
[MidLeft]How about this? How about I
contract you for our side?
[MidRight][TMM][.......]... [.......][TMM]I'll take any opportunity to get[Smile]
back at these misleading thugs.[ClearFace]
[MidLeft]Wow,[.] can't believe that worked.
\`\`\`

`;
  const { sceneTextContent } = await generateStructuredData({
    systemMessage,
    prompt: `Player Character: ${JSON.stringify(
      playerCharacter
    )}\n\nCharacter to Recruit: ${characterToRecruit}\n\nPre-Chapter Scene: ${preChapterScene}\n\nBattle Overview: ${battleOverview}`,
    schema: z.object({ sceneTextContent: z.string() }),
    temperature: 1,
  });

  const sceneId = `Recruit_${playerCharacter.name}_${characterToRecruit.name}`;
  const textId = `Recruit_${playerCharacter.name}_${characterToRecruit.name}_Text`;

  return {
    characterBasedEvent: `CHAR 0x1 ${sceneId} [${playerCharacter.name},${characterToRecruit.name}] 0x0`,
    sceneContent: `${sceneId}:
MUSS Comrades
Text(${textId})
TurnAlly(${characterToRecruit.name})
ENUT ${recruitEventHex} // ENUT: Make this event ID "used"
MURE 0x5 // MURE: Returns to previous music with given fade speed
NoFade
ENDA
`,
    sceneTextContent: `## ${textId}\n[ConversationText]${cleanText(
      sceneTextContent
    )}\n[A][X]`,
  };
}

if (import.meta.main) {
  const res = await getRecruitEvent({
    playerCharacter: seraphinaCharacter,
    characterToRecruit: liraCharacter,
    preChapterScene: "The party is preparing to enter the forest.",
    battleOverview: "The party must defeat the bandits.",
    recruitEventHex: "0x0",
  });
  console.log(JSON.stringify(res, null, 2));
}

