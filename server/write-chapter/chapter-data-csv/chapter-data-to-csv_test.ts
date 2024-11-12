import { assertEquals } from "@std/assert";
import chapterDataToCsv from "@/write-chapter/chapter-data-csv/chapter-data-to-csv.ts";
import type { ChapterDataForCsv } from "@/types/ChapterDataForCsv.ts";

Deno.test(
  "createChapterDataTableCsv - should return correct CSV format",
  async () => {
    const testData: ChapterDataForCsv = {
      chapterName: "Prologue",
      chapterNumberPointer: "0x0",
      objectType: "0x0",
      palette: "0x0",
      tileConfiguration: "0x0",
      mapId: "TrainingFortressMap",
      tileAnimation1: "0x0",
      tileAnimation2: "0x0",
      triggerableMapChanges: "0x0",
      fogOfWarSightLevel: 0,
      gasTrapLevel: 4,
      battlePreparations: 0,
      chapterID: "PrologueChapter",
      supplyList: "",
      weatherCondition: "0",
      battleTileset: "0x0",
      playerPhaseMusic: "Ringabel",
      enemyPhaseMusic: "Boss_Theme",
      npcPhaseMusic: "Binding_Vow",
      playerPhaseMusic2: "Ringabel",
      enemyPhaseMusic2: "Boss_Theme",
      npcPhaseMusic2: "Binding_Vow",
      attackTheme: "Knock_Em_Around",
      defenseTheme: "We_Stand",
      destructibleWallsHP: 50,
      chapterNameID: "PrologueNameText",
      chapterNameID2: "PrologueNameText",
      eventDataReference: "PrologueEvent",
      worldmapChapterPrologueScene: "0x1",
      prepScreenNumberTimes2: 2,
      chapterTitleDisplayFadeOut: "0x1",
      statusObjectiveTextPointer: "PrologueStatusText",
      goalWindowText: "DefeatAllText",
      goalWindowInformation: "EnemyCountGoal",
      turnsToCountDownToPlus1: 0,
      tileMarkerXCoordinate: 255,
      tileMarkerYCoordinate: 0,
    };

    const csvResult = await chapterDataToCsv(testData);

    const expectedCsvValues =
      "Prologue,0x0,0x0,0x0,0x0,TrainingFortressMap,0x0,0x0,0x0,0,4,0,PrologueChapter,0,,0,0x0,,Ringabel,Boss_Theme,Binding_Vow,Ringabel,Boss_Theme,Binding_Vow,Knock_Em_Around,We_Stand,,50,,PrologueNameText,PrologueNameText,PrologueEvent,0x1,,2,,1,0x1,PrologueStatusText,DefeatAllText,EnemyCountGoal,0,0x0,255,0,,,,0x100,0x244,0xffffffff000bffffffff,0x42400000424000004240000042400000028002800280028003c003c003c003c005000500050005000640064006400640008080808070707070606060605050505,0xffff00,0x0,0xc";
    assertEquals(csvResult, expectedCsvValues);
  }
);

