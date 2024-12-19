import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { StoryArcSchema, type StoryArc } from "@/types/ai/StoryArc.ts";
import type { WorldSummary } from "@/types/ai/WorldSummary.ts";
import {
  mainCharacterIdeaExample,
  worldSummaryExample,
} from "@/testData/ai.ts";

export default async function generateStoryArc({
  worldSummary,
  mainCharacterIdea,
  numberOfChapters,
}: {
  worldSummary: WorldSummary;
  mainCharacterIdea: CharacterIdea;
  numberOfChapters: number;
}): Promise<StoryArc> {
  const systemMessage = `You are a Story Arc Builder for a Fire Emblem Fangame!
Your task is to create the general idea of the story for the game based on the provided world summary and main character.

- You may use some or all of the information in the world summary to create the story, but you do not need to use all of it.
- Follow classic narrative structures like the Hero's Journey or Three-Act Structure, or create a new structure fitting for this world.

- The world will be used in a Fire Emblem 8 engine. It should not be similar to any existing Fire Emblem game, but it should be feasible within the constraints of the engine. This means:
  - No futuristic settings
  - No new forms of magic or weapons
  - All characters must be human
  - The only available mounts are horses, pegasi, and wyverns

- The number of chapters will be ${numberOfChapters}. Each chapter should have a unique setting and objective, and should advance the plot in some way.

- If there are new playable characters introduced in a chapter, they should be added to newPlayableCharacters. Not every chapter needs them.
- Each chapter must have a boss. Make sure to label the "firstSeenAs" property within their "CharacterIdea" as "boss".
- The names created for characters and bosses should only be their first name.

- The preChapterScene and postChapterScene should be 3 sentence descriptions of the events leading up to and following the chapter. Be sure to include relevant existing characters, new characters, and the boss for the map.

- The first chapter must have two characters that start as allies (one of which is the main character) and one character that is a "allied NPC" that is recruitable on the battle field. This means that there should be 2 newPlayableCharacters in the first chapter (one who's firstSeenAs is "ally" the others is "allied NPC" the main character is always given).
- The second chapter must have a character that starts as an enemy (firstSeenAs is "enemy non-boss") and is recruitable on the battle field.
`;

  const prompt = `WorldSummary: ${JSON.stringify(
    worldSummary,
    null,
    2
  )},\n\nMainCharacterIdea: ${JSON.stringify(
    mainCharacterIdea,
    null,
    2
  )}\n\nNumber of Chapters: ${numberOfChapters}`;

  const storyArc = await generateStructuredData<StoryArc>({
    schema: StoryArcSchema,
    systemMessage,
    prompt,
    temperature: 1,
  });

  return storyArc;
}

if (import.meta.main) {
  const res = await generateStoryArc({
    worldSummary: worldSummaryExample,
    mainCharacterIdea: mainCharacterIdeaExample,
    numberOfChapters: 3,
  });
  console.log(JSON.stringify(res, null, 2));
}

