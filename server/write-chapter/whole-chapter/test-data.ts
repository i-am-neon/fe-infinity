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
    unitLoadData: [
      `LoadDerekJasper:
UNIT Derek Knight 0x00 Level(4,Ally,True) [0,9] 0x00 0x00 0x01 REDA3R8 [SteelLance,IronAxe,Vulnerary] NoAI
UNIT Jasper Cavalier 0x00 Level(5,Ally,True) [0,8] 0x00 0x00 0x01 REDA3R6 [SteelSword,Javelin,Vulnerary] NoAI
UNIT`,
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
    text: `
## Prologue_BeginningText
[FarRight][LoadDerek][Right][LoadJasper]
This is Prologue beginning text![A]
[MidLeft][CloseEyes][LoadVillagerOldMan]Huh...?[A]
[Right]Yep.[A][X]

## Prologue_ForrestBattleText
[FarLeft][LoadForrest]
You're doing pretty well[NL]
out there, Cadets...[A][NL]
Let's see how you[NL]
face against me![A][X]

## Prologue_ForrestDeathText
[FarLeft][LoadForrest]
Heh... Not bad.[NL]
Not bad at all.[A][X]

## Prologue_ChristinaBattleText
[BattleText]
[FarLeft][LoadChristina]
Great work so far, Cadets! Can you defeat me, I wonder?[X]

## Prologue_ChristinaDeathText
[FarLeft][LoadChristina]
Impressive. I look[NL]
forward to seeing[A][NL]
Sylvaine's assessment.[A][X]

## Prologue_FinishedText
[Right][LoadDerek][Left][LoadVillagerOldMan][FarLeft][LoadJasper]
Phew! That was a tough one...[A]
[Left]You're telling me...[A][X]

## Prologue_PromotionMenuText
Accept the promotion[X]

## Prologue_PassMenuText
Decline the promotion[X]

## Prologue_PromotionText
[FarLeft][LoadJasper][MidRight][LoadSylvaine][Left][LoadVillagerOldMan]
[TMM]...[......][TMM] It would be my honor.[A]
[MidRight]Wonderful! Welcome to the[NL]
Cesarian Army, Corporal.[A]
[Left]Thank you, Captain. What are my orders?[A]
[MidRight]Much of the brigade is diverted to the[NL]
west, fighting along the border with[A][NL]
Arcanae under the leadership of[NL]
Captain Jurgen. However, I have been[A][NL]
assigned to take some soldiers north[NL]
to Altia, in order to arrange a[A][NL]
treaty with their Anguis. I[NL]
leave the choice to you, Corporal.[A]
[Left][TMM]...[....][TMM] Jasper?[A]
[FarLeft]You got the promotion. I'll follow you[NL]
in whatever choice you make.[A][ClearFace][LoadDerek]
I don't have an opinion either way. We're[NL]
a team, aren't we? We'll stick together.[A]
[Left]Captain, I'd like to go to the border[NL]
and join the battle against Arcanae.[A]
[MidRight]Very well. I will have your post[NL]
assignments to you this evening. For now,[A][NL]
rest up. You'll be leaving tomorrow morning.[A]
[Left]Understood! Thank you, Captain![A]
[MidRight]Don't thank me yet...[A][X]

## Prologue_PassText
[FarLeft][LoadDerek][MidRight][LoadSylvaine][Left][LoadVillagerOldMan]
I'm sorry, but... I just don't feel[NL]
ready to take on this responsibility.[A]
[FarLeft]PLAYER_NAME, are you serious?[A]
[Left]Yes, Derek.[A]
[MidRight]Very well. It is your choice, after all.[NL]
Cadet Jasper, would you be willing to take[A][NL]
on leadership and the title of Corporal?[A][FarLeft][ClearFace][LoadJasper]
Are you sure about this, PLAYER_NAME?[A]
[Left]Yes! Just get on with it.[A][CloseSpeech][FarLeft][MoveLeft]
Right. Yes, Captain. I accept your offer.[A]
[MidRight]Very well. Congratulations, Corporal.[A]
[Left]What are our orders, Captain?[A]
[MidRight]The Emperor has been arranging for me to[NL]
go to Altia and meet with the Anguis[A][NL]
and High Priest to discuss terms of an[NL]
alliance. It seems like it would be a[A][NL]
fairly easy job for your squadron to[NL]
accompany me. Of course, if you'd[A][NL]
rather go to war against Arcanae, that[NL]
can also very easily be arranged...[A]
[Left]Yes, ma'am! Altia sounds wonderful.[NL]
It would be our honor.[A]
[FarLeft]Are you sure about this, Jasper?[A]
[Left]I'd rather we take steps to end the war this[NL]
way than just being three more corpses on[A][NL]
the border. I'm sure we'll still[NL]
see plenty of action, PLAYER_NAME.[A]
[FarLeft]If you say so, Jasper.[A]
[MidRight]Glad to hear of your decision, Corporal.[NL]
Welcome to the Leopard Brigade. Get[A][NL]
some rest, you three. We set out[NL]
early tomorrow morning.[A]
[Left]Yes, ma'am![A][X]

## Prologue_ChristinaComingText
[MidRight][LoadChristina]
Ready yourselves, cadets![NL]
Here I come.[A][X]

## Prologue_ForrestComingText
[MidRight][LoadForrest]
You're lucky, cadets. The[NL]
enemy won't let you know[A][NL]
when they choose to strike![A][X]
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
  characters: [],
};

