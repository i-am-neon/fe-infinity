import { seraphinaCharacter } from "../../testData/characters.ts";
import type { Chapter } from "../../types/Chapter.ts";

export const TEST_CHAPTER: Chapter = {
  name: "Prologue",
  chapterDataForCsv: {
    chapterName: "Prologue",
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
  chapterEvent: {
    eventDataReference: "PrologueEvent",
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: undefined,
    miscBasedEvents: "DefeatAll(EndingScene)",
    trapData: undefined,
    units: undefined,
    beginningScene: `CAM1 [7,7]
MUSC Lloyd
SetBackground(0x10)
Text(Prologue_BeginningText)
FadeOutMusic
EndConvo
STAL 0x30
LOAD1 0x1 LoadSeraphina
ENUN
NoFade`,
    endingScene: `EnterStop
FADI 0x5
MUSC FE5_Victory
ENUN
SetBackground(0x27)
Text(Prologue_FinishedText)
EndConvo
STAL 0x20
MoveToChapter(MilitaryAccept2)`,
    unitLoadData: [
      `LoadSeraphina:
UNIT Seraphina Cleric 0x00 Level(5,Ally,True) [0,8] 0x00 0x00 0x01 REDA3R6 [Mend,Vulnerary] NoAI
UNIT`,
    ],
    text: `
## Prologue_BeginningText
[FarRight][LoadSeraphina]
This is Prologue beginning text![A]
[MidLeft][CloseEyes][LoadVillagerOldMan]Huh...?[A]
[Right]Yep.[A][X]

## Prologue_FinishedText
[FarLeft][LoadSeraphina]
This is Prologue finished text![A][X]
`,
  },
  chapterMap: {
    tmx: `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="17" height="17" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="01005B03" tilewidth="16" tileheight="16">
  <image source="Tilesets/01005B03.png" width="512" height="512"/>
  <tile id="162">
   <properties>
    <property name="Main" value=""/>
   </properties>
  </tile>
 </tileset>
 <layer name="Tile Layer 1" width="17" height="17">
  <properties>
   <property name="Anims" value="_01Anims"/>
   <property name="ChapterID" value="PrologueChapter"/>
   <property name="Main" value=""/>
   <property name="MapID" value="SkirmishMap"/>
   <property name="ObjectType" value="0x01"/>
   <property name="PaletteID" value="0x5B"/>
   <property name="TileConfig" value="0x03"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxtk7tKA0EUhmcnhSAYRRCLdKZIYaJoEcR2i4gENRFRbFO4oIgKipUgBhUheHkAm03wUgTMPoCFlY2gPoGdlYpi7z/MOeRk3OJjds6c/9x2Jkoo5Sul3rVSobLfvWSTFMAtqNL+HD7f0FxgPcB+Dt83nlLj+r/WkAMbYB1UwKbQR5Tvy7MxAtgj0A17U1vfMvmEIuYdbC3Ss93EeAQZqqdf23xxPTGv8NvGukP7eWiSYAisgiecl7XNx3XUQJHqMfpJrPfgFzzrzn4+QQm2RqI9P8MpOFHWLvUDwsfUMgNq1IdP8zM5dynGGciDBbBI+pKTK67fPOVME6kYX55bKHpl7SVYIh3XYe5JFoyIGEUnt+x1ENS11QXgClzH1DEt6pH6FMV8Q4xRR1OlOXD9XWCK5r0n9CbmD2IcIkafc0/M3XvRNo6ZexMMgwmwTPWHup2vrjvz81vZonu671lt2vnPYzhrQPugbS++c9YS+h5ttStizqHIV6A+ZYwK+XyQPuvkMO/zGMyCI2XfaqDad45jmPfINazpzrw+/b8MaflN8nvgvakhSTXkwB+lWHgP
  </data>
 </layer>
</map>
`,
    mapName: "SkirmishMap",
  },
  characters: [seraphinaCharacter],
};

