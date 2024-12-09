import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import reDoBattleOverviewWithMap from "@/ai/maps/re-do-battle-overview-with-map.ts";

export default async function reDoAllBattleOverviews(
  chapterIdToIdeaAndMap: Record<string, { idea: ChapterIdea; map: MapData }>
): Promise<Record<string, { idea: ChapterIdea; map: MapData }>> {
  const updatedChapterIdeas: Record<
    string,
    { idea: ChapterIdea; map: MapData }
  > = {};

  for (const [chapterId, { idea, map }] of Object.entries(
    chapterIdToIdeaAndMap
  )) {
    const newBattleOverview = await reDoBattleOverviewWithMap({
      chapterIdea: idea,
      mapData: map,
    });

    updatedChapterIdeas[chapterId] = {
      idea: {
        ...idea,
        battleOverview: newBattleOverview,
      },
      map,
    };
  }

  return updatedChapterIdeas;
}
