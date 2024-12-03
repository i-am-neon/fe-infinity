import { z } from "zod";

export const CharacterStartingAreaSchema = z.object({
  playerCharactersStartingAreaName: z.string(),
  bossStartingAreaName: z.string(),
  npcStartingAreaNames: z.array(
    z.object({
      characterName: z.string(),
      areaName: z.string(),
    })
  ),
});

export type CharacterStartingAreas = z.infer<
  typeof CharacterStartingAreaSchema
>;

