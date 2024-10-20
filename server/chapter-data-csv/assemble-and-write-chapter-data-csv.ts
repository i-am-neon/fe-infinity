import getPathWithinRomBuilderDir from "../fileIO/get-path-within-rom-builder-dir.ts";
import writeFile from "../fileIO/write-file.ts";
import type { ChapterData } from "../types/ChapterData.ts";
import assembleChapterDataCSV from "./assemble-chapter-data-csv.ts";

export default async function asssembleAndWriteChapterDataCsv({
  chapterDatas,
}: {
  chapterDatas: ChapterData[];
}): Promise<void> {
  const csvContent = await assembleChapterDataCSV({ chapterDatas });
  await writeFile(
    getPathWithinRomBuilderDir("CSV/Tables/ChapterData/ChapterDataTable.csv"),
    csvContent
  );
}

// For manual testing: `deno run chapter-data-csv/assemble-and-write-chapter-data-csv.ts`
if (import.meta.main) {
  const testData: ChapterData[] = [
    {
      chapterName: "Prologue",
      chapterNumberPointer: "0x0",
      objectType: "0x0",
      palette: "0x0",
      tileConfiguration: "0x0",
      map: "TrainingFortressMap",
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
      statusObjectiveText: "PrologueStatusText",
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
      map: "SkirmishMap",
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
      statusObjectiveText: "Military2AcceptStatusText",
      goalWindowText: "DefeatBossText",
      goalWindowInformation: "0x0",
      turnsToCountDownToPlus1: 0,
      tileMarkerXCoordinate: 255,
      tileMarkerYCoordinate: 0,
    },
  ];

  console.log(
    "Path to rom builder dir:",
    asssembleAndWriteChapterDataCsv({ chapterDatas: testData })
  );
}

