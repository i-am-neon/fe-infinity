export interface ChapterData {
  chapterName: string;
  chapterNumberPointer: string;
  objectType: string;
  palette: string;
  tileConfiguration: string;
  map: string;
  tileAnimation1: string;
  tileAnimation2: string;
  triggerableMapChanges: string;
  fogOfWarSightLevel: number; // 0 = No fog
  gasTrapLevel: number;
  battlePreparations: number;
  chapterID: string;
  supplyList?: string;
  weatherCondition: string;
  battleTileset: string;
  playerPhaseMusic: string;
  enemyPhaseMusic: string;
  npcPhaseMusic: string;
  playerPhaseMusic2: string;
  enemyPhaseMusic2: string;
  npcPhaseMusic2: string;
  attackTheme: string;
  defenseTheme: string;
  destructibleWallsHP?: number;
  chapterNameID: string;
  chapterNameID2: string;
  eventDataReference: string;
  worldmapChapterPrologueScene: string;
  prepScreenNumberTimes2?: number;
  chapterTitleDisplayFadeOut: string;
  statusObjectiveText: string;
  goalWindowText: string;
  goalWindowInformation: string;
  turnsToCountDownToPlus1?: number;
  tileMarkerXCoordinate: number;
  tileMarkerYCoordinate: number;
}

