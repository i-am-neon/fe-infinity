import { z } from "zod";

export const CharacterStatsSchema = z.object({
  baseHP: z.number(),
  basePwr: z.number(),
  baseMagic: z.number(),
  baseSkl: z.number(),
  baseSpd: z.number(),
  baseDef: z.number(),
  baseRes: z.number(),
  baseLck: z.number(),
  baseCon: z.number(),
  hpGrowth: z.number(),
  pwrGrowth: z.number(),
  magicGrowth: z.number(),
  sklGrowth: z.number(),
  spdGrowth: z.number(),
  defGrowth: z.number(),
  resGrowth: z.number(),
  lckGrowth: z.number(),
});

export type CharacterStats = z.infer<typeof CharacterStatsSchema>;
