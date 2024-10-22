import type { ChapterDataForCsv } from "../../types/ChapterDataForCsv.ts";

export default async function chapterDataToCsv(
  data: ChapterDataForCsv
): Promise<string> {
  const values = [
    data.chapterName,
    data.chapterNumberPointer,
    data.objectType,
    data.palette,
    data.tileConfiguration,
    data.map,
    data.tileAnimation1,
    data.tileAnimation2,
    data.triggerableMapChanges,
    data.fogOfWarSightLevel.toString(),
    data.gasTrapLevel.toString(),
    data.battlePreparations.toString(),
    data.chapterID,
    data.supplyList || "0",
    "",
    data.weatherCondition,
    data.battleTileset,
    "",
    data.playerPhaseMusic,
    data.enemyPhaseMusic,
    data.npcPhaseMusic,
    data.playerPhaseMusic2,
    data.enemyPhaseMusic2,
    data.npcPhaseMusic2,
    data.attackTheme,
    data.defenseTheme,
    "",
    data.destructibleWallsHP?.toString() || "",
    "",
    data.chapterNameID,
    data.chapterNameID2,
    data.eventDataReference,
    data.worldmapChapterPrologueScene,
    "",
    data.prepScreenNumberTimes2?.toString() || "",
    "",
    "1", // "No. of enemies left for Grasping at Victory" is always 1
    data.chapterTitleDisplayFadeOut,
    data.statusObjectiveText,
    data.goalWindowText,
    data.goalWindowInformation,
    data.turnsToCountDownToPlus1?.toString() || "",
    "0x0", // protectCharacterMarker is always 0x0 for the main Lord
    data.tileMarkerXCoordinate.toString(),
    data.tileMarkerYCoordinate.toString(),
    // empty values
    "",
    "",
    "",
    // "ChapterDataUnknown" is hard coded
    "0x100",
    "0x244",
    "0xffffffff000bffffffff",
    "0x42400000424000004240000042400000028002800280028003c003c003c003c005000500050005000640064006400640008080808070707070606060605050505",
    "0xffff00",
    "0x0",
    "0xc",
  ];

  // Convert arrays into CSV format
  // const csv = `${headers.join(",")}\n${values.join(",")}`;

  // return csv;
  return values.join(",");
}

