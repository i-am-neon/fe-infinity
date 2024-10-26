import type { ChapterEvent } from "../../types/ChapterEvent.ts";

export default function assembleChapterEvent(
  chapterEvent: ChapterEvent
): string {
  return `EventPointerTable(${chapterEvent.eventDataReference},ThisChapter)

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
TurnBasedEvents:${
    chapterEvent.turnBasedEvents ? "\n" + chapterEvent.turnBasedEvents : ""
  }
END_MAIN

//Label CharacterBasedEvents
ALIGN 32
CharacterBasedEvents:${
    chapterEvent.characterBasedEvents
      ? "\n" + chapterEvent.characterBasedEvents
      : ""
  }
END_MAIN

//Label LocationBasedEvents
LocationBasedEvents:${
    chapterEvent.locationBasedEvents
      ? "\n" + chapterEvent.locationBasedEvents
      : ""
  }
END_MAIN

//Label MiscBasedEvents
MiscBasedEvents:
CauseGameOverIfLordDies${
    chapterEvent.miscBasedEvents ? "\n" + chapterEvent.miscBasedEvents : ""
  }
END_MAIN

//Label TrapData
TrapData:${chapterEvent.trapData ? "\n" + chapterEvent.trapData : ""}
ENDTRAP
ALIGN 4

//Label Units
Units:${chapterEvent.units ? "\n" + chapterEvent.units : ""}
EndUnit

//Label BeginingScene
BeginningScene:${
    chapterEvent.beginningScene ? "\n" + chapterEvent.beginningScene : ""
  }
ENDA

//Label EndingScene
EndingScene:${chapterEvent.endingScene ? "\n" + chapterEvent.endingScene : ""}
ENDA

//Label Local Definitions

${chapterEvent.localDefinitions?.join("\n\n")}`;
}

