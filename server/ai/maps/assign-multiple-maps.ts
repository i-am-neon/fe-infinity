import chooseMap from "@/ai/maps/choose-map.ts";
import { ChapterMap } from "@/types/ChapterMap.ts";

export async function assignMultipleMaps({
  chapterNameToBattleOverview,
  allMapOptions,
}: {
  chapterNameToBattleOverview: Record<string, string>;
  allMapOptions: ChapterMap[];
}): Promise<Record<string, ChapterMap>> {
  if (
    Object.entries(chapterNameToBattleOverview).length > allMapOptions.length
  ) {
    throw new Error("Not enough maps to assign to each character");
  }

  const assignedMaps: Record<string, ChapterMap> = {};

  for (const [chapterName, battleOverview] of Object.entries(
    chapterNameToBattleOverview
  )) {
    const chosenMap = await _internals.chooseMap({
      mapOptions: allMapOptions,
      battleOverview: battleOverview,
    });

    chosenMap.tmx = chosenMap.tmx.replace(/<CHAPTERID>/g, chapterName);
    assignedMaps[chapterName] = chosenMap;

    // Remove the chosen map from the options
    allMapOptions = allMapOptions.filter((map) => map !== chosenMap);
  }

  return assignedMaps;
}

export const _internals = { chooseMap };

