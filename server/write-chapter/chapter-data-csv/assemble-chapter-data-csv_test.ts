import { assertEquals } from "@std/assert";
import assembleChapterDataCSV from "@/write-chapter/chapter-data-csv/assemble-chapter-data-csv.ts";
import type { ChapterDataForCsv } from "@/types/ChapterDataForCsv.ts";

Deno.test(
  "assembleChapterDataCSV - should return correct CSV format",
  async () => {
    const testData: ChapterDataForCsv[] = [
      {
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
      },
      {
        chapterName: "MilitaryAccept2",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "SkirmishMap",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "0x0",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "MilitaryAccept2",
        supplyList: "NormalSupplyList|IsPointer",
        weatherCondition: "0",
        battleTileset: "0x0",
        playerPhaseMusic: "Fodlan_Winds",
        enemyPhaseMusic: "Encounter_with_Renegades",
        npcPhaseMusic: "Binding_Vow",
        playerPhaseMusic2: "Fodlan_Winds",
        enemyPhaseMusic2: "Encounter_with_Renegades",
        npcPhaseMusic2: "Binding_Vow",
        attackTheme: "Knock_Em_Around",
        defenseTheme: "We_Stand",
        destructibleWallsHP: 50,
        chapterNameID: "Military2AcceptNameText",
        chapterNameID2: "Military2AcceptNameText",
        eventDataReference: "Military2AcceptEvents",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "Military2AcceptStatusText",
        goalWindowText: "DefeatBossText",
        goalWindowInformation: "0x0",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
    ];

    const expectedCsvValues1 =
      "Prologue,0x0,0x0,0x0,0x0,TrainingFortressMap,0x0,0x0,0x0,0,4,0,PrologueChapter,0,,0,0x0,,Ringabel,Boss_Theme,Binding_Vow,Ringabel,Boss_Theme,Binding_Vow,Knock_Em_Around,We_Stand,,50,,PrologueNameText,PrologueNameText,PrologueEvent,0x1,,2,,1,0x1,PrologueStatusText,DefeatAllText,EnemyCountGoal,0,0x0,255,0,,,,0x100,0x244,0xffffffff000bffffffff,0x42400000424000004240000042400000028002800280028003c003c003c003c005000500050005000640064006400640008080808070707070606060605050505,0xffff00,0x0,0xc";
    const expectedCsvValues2 =
      "MilitaryAccept2,0x0,0x0,0x0,0x0,SkirmishMap,0x0,0x0,0x0,0,4,0,MilitaryAccept2,NormalSupplyList|IsPointer,,0,0x0,,Fodlan_Winds,Encounter_with_Renegades,Binding_Vow,Fodlan_Winds,Encounter_with_Renegades,Binding_Vow,Knock_Em_Around,We_Stand,,50,,Military2AcceptNameText,Military2AcceptNameText,Military2AcceptEvents,0x1,,4,,1,0x1,Military2AcceptStatusText,DefeatBossText,0x0,0,0x0,255,0,,,,0x100,0x244,0xffffffff000bffffffff,0x42400000424000004240000042400000028002800280028003c003c003c003c005000500050005000640064006400640008080808070707070606060605050505,0xffff00,0x0,0xc";

    const expectedCsv = `${expectedCsvValues1}\n${expectedCsvValues2}`;

    const csvResult = await assembleChapterDataCSV({ chapterDatas: testData });

    assertEquals(csvResult, expectedCsv);
  }
);

