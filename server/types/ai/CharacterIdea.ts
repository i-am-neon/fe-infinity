import { z } from "zod";

export const CharacterIdeaSchema = z.object({
  name: z.string().min(1, "Must be first name only"),
  gender: z.union([z.literal("male"), z.literal("female")]),
  personality: z
    .string()
    .min(1, "Must be a 1-sentence personality description"),
  age: z.union([
    z.literal("child"),
    z.literal("young adult"),
    z.literal("mature adult"),
    z.literal("elderly"),
  ]),
  backstory: z.string().min(20, "Must be 4-5 sentences"),
  firstSeenAs: z.union([
    z.literal("ally"),
    z.literal("allied NPC"),
    z.literal("enemy non-boss"),
    z.literal("boss"),
  ]),
  description: z.string().max(20, "Description must be no more than 20 words"),
});

export type CharacterIdea = z.infer<typeof CharacterIdeaSchema>;

