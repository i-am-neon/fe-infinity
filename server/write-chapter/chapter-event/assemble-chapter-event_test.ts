import { assertEquals } from "@std/assert";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import assembleChapterEvent from "@/write-chapter/chapter-event/assemble-chapter-event.ts";

Deno.test("assemble chapter event", () => {
  const prologueEventData: ChapterEvent = {
    eventDataReference: "PrologueEvent",
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: undefined,
    miscBasedEvents: "DefeatAll(EndingScene)",
    trapData: undefined,
    units: undefined,
    beginningScene: `CAM1 [7,7]
LOAD1 0x1 LoadSylvaine
ENUN
MUSC Lloyd
SetBackground(0x10)
Text(Prologue_BeginningText)
FadeOutMusic
EndConvo
STAL 0x30
LOAD1 0x1 LoadDerekJasper
ENUN
STAL 0x30
MUSC Stage_One
FADI 0x5
LOAD1 0x1 LoadChristinaForrest
ENUN
NoFade`,
    endingScene: `EnterStop
FADI 0x5
MUSC FE5_Victory
CLEA 0x0
CLEE 0x0
CLEN 0x0
ASMC RefreshAll|1
CAM1 [7,7]
LOAD2 0x1 EndingFriends
LOAD1 0x1 EndingMeanies
ENUN
SetBackground(0x27)
Text(Prologue_FinishedText)
EndConvo
STAL 0x20
MoveToChapter(MilitaryAccept2)`,
    localDefinitions: [
      `LoadSylvaine:
UNIT Sylvaine MaligKnight Sylvaine Level(9,NPC,True) [5,7] 0x00 0x00 0x00 0x00 [SilverAxe] GuardAI
UNIT`,
      `LoadDerekJasper:
UNIT Derek Knight 0x00 Level(4,Ally,True) [0,9] 0x00 0x00 0x01 REDA3R8 [SteelLance,IronAxe,Vulnerary] NoAI
UNIT Jasper Cavalier 0x00 Level(5,Ally,True) [0,8] 0x00 0x00 0x01 REDA3R6 [SteelSword,Javelin,Vulnerary] NoAI
UNIT`,
      `LoadSylvaine2:
UNIT Sylvaine MaligKnight Sylvaine Level(9,NPC,True) [2,0] 0x00 0x00 0x00 0x00 [SilverAxe] GuardAI
EndUnit`,
      `LoadChristinaForrest:
UNIT BossChristina Cavalier_F BossChristina Level(1,Enemy,True) [6,6] 0x00 0x00 0x00 0x00 [IronLance] GuardAI
UNIT BossForrest Cavalier BossForrest Level(1,Enemy,True) [6,8] 0x00 0x00 0x00 0x00 [SteelSword] GuardAI
UNIT`,
      `EndingFriends:
UNIT Derek 0x00 0x00 Level(4,Ally,True) [5,6] 0x00 0x00 0x00 0x00 [SteelLance] NoAI
UNIT Jasper 0x00 0x00 Level(5,Ally,True) [5,8] 0x00 0x00 0x00 0x00 [SteelSword,Javelin] NoAI
UNIT`,
      `EndingMeanies:
UNIT Sylvaine ArmoredWyvernLord 0x00 Level(1,NPC,True) [8,8] 0x00 0x00 0x00 0x00 [0] NoAI
UNIT Christina Cavalier_F 0x00 Level(1,NPC,True) [7,5] 0x00 0x00 0x00 0x00 [0] NoAI
UNIT Forrest Cavalier 0x00 Level(1,NPC,True) [8,6] 0x00 0x00 0x00 0x00 [0] NoAI
EndUnit`,
    ],
  };

  const expectedPrologueEvent = `EventPointerTable(PrologueEvent,ThisChapter)

//Label ThisChapter
ThisChapter:
POIN TurnBasedEvents
POIN CharacterBasedEvents
POIN LocationBasedEvents
POIN MiscBasedEvents
POIN EndMainPointer EndMainPointer EndMainPointer
POIN EndMainPointer
POIN TrapData TrapData
POIN Units Units
POIN $0 $0 $0 $0 $0 $0
POIN BeginningScene EndingScene
//LabelEnd

//Label TurnBasedEvents
TurnBasedEvents:
END_MAIN

//Label CharacterBasedEvents
ALIGN 32
CharacterBasedEvents:
END_MAIN

//Label LocationBasedEvents
LocationBasedEvents:
END_MAIN

//Label MiscBasedEvents
MiscBasedEvents:
CauseGameOverIfLordDies
DefeatAll(EndingScene)
END_MAIN

//Label TrapData
TrapData:
ENDTRAP
ALIGN 4

//Label Units
Units:
EndUnit

//Label BeginingScene
BeginningScene:
CAM1 [7,7]
LOAD1 0x1 LoadSylvaine
ENUN
MUSC Lloyd
SetBackground(0x10)
Text(Prologue_BeginningText)
FadeOutMusic
EndConvo
STAL 0x30
LOAD1 0x1 LoadDerekJasper
ENUN
STAL 0x30
MUSC Stage_One
FADI 0x5
LOAD1 0x1 LoadChristinaForrest
ENUN
NoFade
ENDA

//Label EndingScene
EndingScene:
EnterStop
FADI 0x5
MUSC FE5_Victory
CLEA 0x0
CLEE 0x0
CLEN 0x0
ASMC RefreshAll|1
CAM1 [7,7]
LOAD2 0x1 EndingFriends
LOAD1 0x1 EndingMeanies
ENUN
SetBackground(0x27)
Text(Prologue_FinishedText)
EndConvo
STAL 0x20
MoveToChapter(MilitaryAccept2)
ENDA

//Label Local Definitions

LoadSylvaine:
UNIT Sylvaine MaligKnight Sylvaine Level(9,NPC,True) [5,7] 0x00 0x00 0x00 0x00 [SilverAxe] GuardAI
UNIT

LoadDerekJasper:
UNIT Derek Knight 0x00 Level(4,Ally,True) [0,9] 0x00 0x00 0x01 REDA3R8 [SteelLance,IronAxe,Vulnerary] NoAI
UNIT Jasper Cavalier 0x00 Level(5,Ally,True) [0,8] 0x00 0x00 0x01 REDA3R6 [SteelSword,Javelin,Vulnerary] NoAI
UNIT

LoadSylvaine2:
UNIT Sylvaine MaligKnight Sylvaine Level(9,NPC,True) [2,0] 0x00 0x00 0x00 0x00 [SilverAxe] GuardAI
EndUnit

LoadChristinaForrest:
UNIT BossChristina Cavalier_F BossChristina Level(1,Enemy,True) [6,6] 0x00 0x00 0x00 0x00 [IronLance] GuardAI
UNIT BossForrest Cavalier BossForrest Level(1,Enemy,True) [6,8] 0x00 0x00 0x00 0x00 [SteelSword] GuardAI
UNIT

EndingFriends:
UNIT Derek 0x00 0x00 Level(4,Ally,True) [5,6] 0x00 0x00 0x00 0x00 [SteelLance] NoAI
UNIT Jasper 0x00 0x00 Level(5,Ally,True) [5,8] 0x00 0x00 0x00 0x00 [SteelSword,Javelin] NoAI
UNIT

EndingMeanies:
UNIT Sylvaine ArmoredWyvernLord 0x00 Level(1,NPC,True) [8,8] 0x00 0x00 0x00 0x00 [0] NoAI
UNIT Christina Cavalier_F 0x00 Level(1,NPC,True) [7,5] 0x00 0x00 0x00 0x00 [0] NoAI
UNIT Forrest Cavalier 0x00 Level(1,NPC,True) [8,6] 0x00 0x00 0x00 0x00 [0] NoAI
EndUnit`;

  const actualPrologueEvent = assembleChapterEvent(prologueEventData);

  assertEquals(actualPrologueEvent, expectedPrologueEvent);
});

