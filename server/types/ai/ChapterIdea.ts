import { z } from "zod";
import { CharacterIdeaSchema } from "@/types/ai/CharacterIdea.ts";

export const ChapterIdeaSchema = z.object({
  chapterTitle: z
    .string()
    .describe(
      "The title of the chapter. All spaces must be converted to underscores."
    ),
  newPlayableCharacters: CharacterIdeaSchema.array().optional(),
  boss: CharacterIdeaSchema,
  preChapterScene: z.string(),
  battleOverview: z.string(),
  postChapterScene: z.string(),
});

export type ChapterIdea = z.infer<typeof ChapterIdeaSchema>;

