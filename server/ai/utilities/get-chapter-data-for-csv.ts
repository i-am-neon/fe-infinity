import { ChapterDataForCsv } from "@/types/ChapterDataForCsv.ts";

export default function getChapterDataForCsv({
  chapterName,
  mapName,
}: {
  chapterName: string;
  mapName: string;
}): ChapterDataForCsv {
  return {
    chapterName: chapterName,
    chapterNumberPointer: "0x0",
    objectType: "0x0",
    palette: "0x0",
    tileConfiguration: "0x0",
    mapId: `${mapName}Map`,
    tileAnimation1: "0x0",
    tileAnimation2: "0x0",
    triggerableMapChanges: "0x0",
    fogOfWarSightLevel: 0,
    gasTrapLevel: 4,
    battlePreparations: 0,
    chapterID: `${chapterName}Chapter`,
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
    destructibleWallsHP: 25,
    chapterNameID: `${chapterName}NameText`,
    chapterNameID2: `${chapterName}NameText`,
    eventDataReference: `${chapterName}Event`,
    worldmapChapterPrologueScene: "0x1",
    prepScreenNumberTimes2: 4,
    chapterTitleDisplayFadeOut: "0x1",
    statusObjectiveTextPointer: `${chapterName}StatusText`,
    goalWindowText: "DefeatAllText",
    goalWindowInformation: "EnemyCountGoal",
    turnsToCountDownToPlus1: 0,
    tileMarkerXCoordinate: 255,
    tileMarkerYCoordinate: 0,
  };
}

