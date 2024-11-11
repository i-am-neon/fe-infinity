import { z } from "zod";
import { CharacterIdeaSchema } from "@/types/ai/CharacterIdea.ts";

export const ChapterIdeaSchema = z.object({
  chapterTitle: z.string(),
  newPlayableCharacters: CharacterIdeaSchema.array().optional(),
  boss: CharacterIdeaSchema,
  preChapterScene: z.string(),
  battleOverview: z.string(),
  postChapterScene: z.string(),
});

export type ChapterIdea = z.infer<typeof ChapterIdeaSchema>;

export const StoryArcSchema = z.object({
  premise: z.string(),
  chapterIdeas: z.array(ChapterIdeaSchema),
});

export type StoryArc = z.infer<typeof StoryArcSchema>;
