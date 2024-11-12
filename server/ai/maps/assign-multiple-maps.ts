import chooseMap from "@/ai/maps/choose-map.ts";
import { ChapterMap } from "@/types/ChapterMap.ts";
import { MapMetadata } from "@/types/MapMetadata.ts";

export async function assignMultipleMaps({
  chapterNameToBattleOverview,
  allMapOptions,
}: {
  chapterNameToBattleOverview: Record<string, string>;
  allMapOptions: MapMetadata[];
}): Promise<Record<string, ChapterMap>> {
  if (
    Object.entries(chapterNameToBattleOverview).length > allMapOptions.length
  ) {
    throw new Error("Not enough portraits to assign to each character");
  }

  const assignedMaps: Record<string, ChapterMap> = {};

  for (const [chapterName, battleOverview] of Object.entries(
    chapterNameToBattleOverview
  )) {
    const chosenMapMetadata = await _internals.chooseMap({
      mapOptions: allMapOptions,
      battleOverview: battleOverview,
    });

    const chapterMap: ChapterMap = {
      name: chosenMapMetadata.name,
      tmx: chosenMapMetadata.rawTmx.replace(/<CHAPTERID>/g, chapterName),
    };
    assignedMaps[chapterName] = chapterMap;

    // Remove the chosen portrait from the options
    allMapOptions = allMapOptions.filter((map) => map !== chosenMapMetadata);
  }

  return assignedMaps;
}

export const _internals = { chooseMap };

