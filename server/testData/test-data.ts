import type { RomChapter } from "../types/RomChapter.ts";
import {
  cesarianGenericCharacter,
  igorCharacter,
  ligmaCharacter,
  liraCharacter,
  seraphinaCharacter,
} from "@/testData/test-characters.ts";

export const TEST_CHAPTER: RomChapter = {
  chapterId: "Prologue",
  number: 0,
  chapterDataForCsv: {
    chapterName: "Prologue",
    chapterNumberPointer: "0x0",
    objectType: "0x0",
    palette: "0x0",
    tileConfiguration: "0x0",
    mapId: "Knights10_Map",
    tileAnimation1: "0x0",
    tileAnimation2: "0x0",
    triggerableMapChanges: "0x0",
    fogOfWarSightLevel: 0,
    gasTrapLevel: 4,
    battlePreparations: 0,
    chapterID: "Prologue",
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
    chapterNameID: "Prologue_NameText",
    chapterNameID2: "Prologue_NameText",
    eventDataReference: "Prologue_EventDataReference",
    worldmapChapterPrologueScene: "0x1",
    prepScreenNumberTimes2: 2,
    chapterTitleDisplayFadeOut: "0x1",
    statusObjectiveTextPointer: "Prologue_StatusText",
    goalWindowText: "DefeatAllText",
    goalWindowInformation: "EnemyCountGoal",
    turnsToCountDownToPlus1: 0,
    tileMarkerXCoordinate: 255,
    tileMarkerYCoordinate: 0,
  },
  chapterEvent: {
    eventDataReference: "Prologue_EventDataReference",
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: `Armory(ArmoryList,0,6)`,
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
LOAD1 0x1 LoadLira
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
`,
    localDefinitions: [
      `LoadSeraphina:
UNIT Seraphina Valkyrie 0x00 Level(5,Ally,True) [0,8] 0x00 0x00 0x01 REDA3R6 [Shine,Mend,Elixir] NoAI
UNIT`,
      `LoadLira:
UNIT Lira ArcherF2 0x00 Level(5,Ally,True) [0, 9] 0x00 0x00 0x01 REDA3R7 [IronBow,Vulnerary] NoAI
UNIT Igor ArcherM2 0x00 Level(5,Ally,True) [0, 8] 0x00 0x00 0x01 REDA4R7 [IronBow,Vulnerary] NoAI
UNIT Ligma ArcherM2 0x00 Level(15,Enemy,True) [12, 7] 0x00 0x00 0x01 0x0 [IronBow,Vulnerary] AttackInRangeAI
UNIT Cesarian Knight Ligma Level(5,Enemy,True) [14,11] 0x00 0x00 0x01 REDA7R8 [IronLance] AttackInRangeAI
UNIT`,
      `ArmoryList:
SHLI SteelSword IronBlade SteelLance ShortSpear SteelAxe ShortAxe SteelBow SteelLongbow SteelShortbow 0x0
ALIGN 4`,
    ],
    text: `
## Prologue_BeginningText
[FarRight][LoadSeraphina]
This is Prologue beginning text![A]
[MidLeft][CloseEyes][LoadLigma]Huh...?[A]
[Right]Yep.[A][X]

## Prologue_FinishedText
[FarLeft][LoadSeraphina]
This is Prologue finished text![A][X]
`,
  },
  chapterMap: {
    tmx: `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">
  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="20" height="18">
  <properties>
   <property name="Main" value=""/>
   <property name="Anims" value="_3CAnims"/>
   <property name="ChapterID" value="Prologue"/>
   <property name="MapChangesID" value="Knights10_Changes"/>
   <property name="MapID" value="Knights10_Map"/>
   <property name="ObjectType" value="0x3C"/>
   <property name="PaletteID" value="0xCE"/>
   <property name="TileConfig" value="0x3E"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=
  </data>
 </layer>
 <layer name="Broken_Wall" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="0"/>
   <property name="Width" value="2"/>
   <property name="X" value="3"/>
   <property name="Y" value="0"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYEAAYWYGhk9MDKNgFIyCUTAKBgEAAM3eAQs=
  </data>
 </layer>
 <layer name="Left Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="1"/>
   <property name="Y" value="1"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYKA+cKKBmaNgFIyCUTDSAABjRwBD
  </data>
 </layer>
 <layer name="Right Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="2"/>
   <property name="Width" value="1"/>
   <property name="X" value="19"/>
   <property name="Y" value="10"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0AM4DbQDRsGQAwCXCABD
  </data>
 </layer>
 <layer name="Door" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="2"/>
   <property name="ID" value="3"/>
   <property name="Width" value="2"/>
   <property name="X" value="18"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AUjHSwjpGBQZCZeuZZAs0yo6J5IxUAANEhATk=
  </data>
 </layer>
</map>
`,
    name: "Knights10",
  },
  characters: [
    seraphinaCharacter,
    liraCharacter,
    igorCharacter,
    ligmaCharacter,
  ],
  genericCharacters: [cesarianGenericCharacter],
};

