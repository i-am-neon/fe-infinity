import { ChapterDataForCsv } from "@/types/ChapterDataForCsv.ts";
import getEventDataReferenceFromChapterId from "@/lib/get-event-data-reference-from-chapter-name.ts";
import getNameText from "@/lib/get-name-text.ts";
import getMapIdFromMapName from "@/lib/get-map-id-from-map-name.ts";
import getStatusTextFromChapterName from "@/lib/get-status-text-from-chapter-name.ts";
import getMapChangesFromMapName from "@/lib/get-map-changes-from-map-name.ts";

export default function getChapterDataForCsv({
  chapterId,
  mapName,
}: {
  chapterId: string;
  mapName: string;
}): ChapterDataForCsv {
  return {
    chapterName: chapterId,
    chapterNumberPointer: "0x0",
    objectType: "0x0",
    palette: "0x0",
    tileConfiguration: "0x0",
    mapId: getMapIdFromMapName(mapName),
    tileAnimation1: "0x0",
    tileAnimation2: "0x0",
    triggerableMapChanges: getMapChangesFromMapName(mapName),
    fogOfWarSightLevel: 0,
    gasTrapLevel: 4,
    battlePreparations: 0,
    chapterID: chapterId,
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
    chapterNameID: getNameText(chapterId),
    chapterNameID2: getNameText(chapterId),
    eventDataReference: getEventDataReferenceFromChapterId(chapterId),
    worldmapChapterPrologueScene: "0x1",
    prepScreenNumberTimes2: 4,
    chapterTitleDisplayFadeOut: "0x1",
    statusObjectiveTextPointer: getStatusTextFromChapterName(chapterId),
    goalWindowText: "DefeatAllText",
    goalWindowInformation: "EnemyCountGoal",
    turnsToCountDownToPlus1: 0,
    tileMarkerXCoordinate: 255,
    tileMarkerYCoordinate: 0,
  };
}

