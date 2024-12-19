import { Game } from "@/types/Game.ts";

export const TEST_GAME: Game = {
  chapters: [
    {
      chapterId: "whispers_of_the_past",
      displayName: "Prologue: Whispers of the Past",
      number: 0,
      chapterDataForCsv: {
        chapterName: "whispers_of_the_past",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "LotsofRooms_Map",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "LotsofRooms_Changes",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "whispers_of_the_past",
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
        chapterNameID: "whispers_of_the_past_NameText",
        chapterNameID2: "whispers_of_the_past_NameText",
        eventDataReference: "whispers_of_the_past_EventDataReference",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "whispers_of_the_past_StatusText",
        goalWindowText: "DefeatAllText",
        goalWindowInformation: "EnemyCountGoal",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
      chapterEvent: {
        eventDataReference: "whispers_of_the_past_EventDataReference",
        characterBasedEvents:
          "CHAR 0x1 Recruit_Orin_Rhea [Orin,Rhea] 0x0\nCHAR 0x1 Recruit_Zyphira_Rhea [Zyphira,Rhea] 0x0",
        locationBasedEvents:
          "ChestMoney(3500,19,6)\nChest(HandAxe,20,6)\nChest(MetissTome,14,14)\nChestMoney(2000,8,15)\nChest(HandAxe,9,15)\nChestMoney(1500,13,15)",
        miscBasedEvents: "DefeatAll(EndingScene)",
        units:
          "UNIT Kael Shaman Kael Level(4, Enemy, True) [17, 2] 0x00 0x00 0x0 0x00 [Flux, Vulnerary, Nosferatu] GuardTileAI\nUNIT Orin Mercenary 0x00 Level(4, Ally, True) [5, 20] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Zyphira Mage_F 0x00 Level(4, Ally, True) [1, 19] 0x00 0x00 0x0 0x00 [Fire, Vulnerary, Elfire] NoAI\nUNIT Rhea Mercenary_F 0x00 Level(2, NPC, True) [1, 4] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Soldier Soldier 0x00 Level(3, Ally, True) [7, 1] 0x00 0x00 0x0 0x00 [IronLance, Vulnerary] NoAI\nUNIT Soldier Mage 0x00 Level(3, Ally, True) [17, 2] 0x00 0x00 0x0 0x00 [Fire, Vulnerary] NoAI\nUNIT Soldier Soldier 0x00 Level(4, Ally, True) [23, 3] 0x00 0x00 0x0 0x00 [IronLance, Vulnerary] NoAI",
        beginningScene:
          "LOAD1 0x1 Units\nGiveGoldSilent(3000)\nMUSC Legends_of_Avenir\nText(Castle_Room,whispers_of_the_past_PreBattleScene)\nFadeOutMusic",
        endingScene:
          "Text(Outside_Village_Day,whispers_of_the_past_PostBattleDiscussion)\nMoveToChapter(allies_in_shadow)",
        localDefinitions: [
          'Recruit_Orin_Rhea:\nMUSS Comrades\nText(Recruit_Orin_Rhea_Text)\nTurnAlly(Rhea)\nENUT 0xEF // ENUT: Make this event ID "used"\nMURE 0x5 // MURE: Returns to previous music with given fade speed\nNoFade\nENDA\n',
          'Recruit_Zyphira_Rhea:\nMUSS Comrades\nText(Recruit_Zyphira_Rhea_Text)\nTurnAlly(Rhea)\nENUT 0xD0 // ENUT: Make this event ID "used"\nMURE 0x5 // MURE: Returns to previous music with given fade speed\nNoFade\nENDA\n',
        ],
        text: "## whispers_of_the_past_PreBattleScene\n[ConversationText]\n[MidLeft][LoadZyphira][FarRight][LoadOrin]\nZyphira, we need to be cautious. The whispers from the Ruins of Aeloria speak of betrayal.\n[MidLeft]I know, Orin. But we can't let fear hold us back. The Shadowbound are growing stronger, and we must act before it's too late.[CloseSpeech][MoveLeft][FarFarLeft][LoadRhea]\n[FarFarLeft]And what makes you think we can trust anyone in these dark times?\n[MidLeft]Rhea! We need your strength. Together, we can face whatever lies ahead.\n[FarFarLeft]Trust is a luxury we can't afford. I've seen what the sigils can do to people. They corrupt.\n[MidLeft]But we can fight against that corruption! We can unite the tribes against the Shadowbound. You know this is our only chance.\n[FarRight]Zyphira's right. If we don't stand together, we'll fall apart. We need to believe in each other, even if it feels risky.\n[FarFarLeft]You both speak of hope, but hope can be a double-edged sword. What if it leads us to our doom?\n[MidLeft]Then we face it together. I won't let the darkness take anyone else from us. Not again.\n[FarRight]We can't let fear dictate our actions. We must confront Kael and the Shadowbound before they unleash their full power.\n[FarFarLeft]Fine. But if we do this, we do it my way. No reckless moves.\n[MidLeft]Agreed. Let's gather our strength and prepare for what lies ahead. The Ruins of Aeloria await us.[X]\n\n\n\n## whispers_of_the_past_PostBattleDiscussion\n[ConversationText]\n[MidRight][LoadZyphira][MidLeft][LoadRhea][FarLeft][LoadOrin]\nZyphira: With the Shadowbound temporarily thwarted, we need to regroup and discuss our next steps.\n[MidLeft]Rhea: I have some insights about other factions that might be willing to ally against them.\n[FarLeft]Orin: Really? That could change everything for us!\n[MidRight]Zyphira: Yes, we must act quickly. Our next destination should be Silvaara Woods. It holds ancient knowledge and the secrets of the sigils.\n[MidLeft]Rhea: Silvaara Woods? I've heard tales of its power, but it's also dangerous.\n[FarLeft]Orin: Danger is nothing compared to the chance of saving our home! We can't let fear hold us back.\n[MidRight]Zyphira: Exactly, Orin. Together, we can face whatever lies ahead. Let's prepare for the journey.[X]\n\n## Recruit_Orin_Rhea_Text\n[ConversationText][MidLeft][LoadZyphira][FarRight][LoadOrin]Zyphira, we need to gather information about the Shadowbound.\n[MidLeft]I agree, Orin. I've heard whispers of dark forces at work in the Ruins of Aeloria.\n[FarRight]I overheard some bandits talking. They mentioned betrayal among the Shadowbound ranks.\n[MidLeft]This chaos feels even more dangerous than we thought.\n[FarRight]Yes, but we have to stay determined. We need to recruit Rhea to strengthen our cause.\n[MidLeft]Do you think she will join us?\n[FarRight]With the right words, she may see reason. After all, we share a past.\n[MidLeft][TMM][.......]... [.......][TMM]It's been so long since we last saw her. We must tread carefully.\n[FarRight]Agreed. We must navigate through the ruins and confront Kael's forces to reach her.\n[MidLeft]Right. We will be cautious of traps and ambushes. The Shadowbound won't make it easy for us.\n[FarRight]Let's keep our heads up and work together. Rhea is counting on us! [TMM][.......]... [.......][TMM]\n[MidLeft]For Eldralis, we will face whatever darkness lies ahead!\n[FarRight][CloseSpeech]\n[A][X]\n\n## Recruit_Zyphira_Rhea_Text\n[ConversationText][FarLeft][LoadZyphira][MidLeft][LoadOrin][FarRight][LoadRhea]Zyphira, we need to be careful. The Shadowbound's power is growing here.\n[FarLeft]I know, Orin. The Ruins of Aeloria hold secrets and dangers in equal measure.\n[MidLeft]I can sense it, too. There are whispers in the wind, echoes of betrayal.\n[FarRight]Then we have to act before they're set loose.\n[FarLeft]Right. We need to recruit Rhea if we want to stand a chance against Kael.\n[MidLeft]Speaking of which, we should hurry. Every moment we delay, they grow stronger.\n[FarRight]I hope she's still willing to join us... it's been a long time.\n[FarLeft][MoveRight]Let's press forward, together.\n[MidLeft]Look! There's the Pillar Room up ahead. Rhea should be inside.\n[FarRight][MoveLeft]Then let's not waste any more time.\n[FarLeft]Remember, we need to handle this delicately. We don't want her to perceive us as threats.\n[MidLeft]True, we must remind her of what we stand to lose. We're on the same side.\n[FarRight]And if we can show her the reality of the Shadowbound's influence, she has to see it.\n[FarLeft]Allies unite to fight against darkness![CloseSpeech]\n[A][X]",
      },
      chapterMap: {
        name: "LotsofRooms",
        tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="21" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="21">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="whispers_of_the_past"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="LotsofRooms_Changes"/>\n   <property name="MapID" value="LotsofRooms_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJytVTsOglAQJFB4DyvCUfAe3kQjVnSewMZQWKkXUAtI9CZcwSWwyTjZ9/FTTIR94xt3582zyJJkKTgK+gl7QSGYBWBxzun7+1qQCx6w/4Aa6rUHsZycelBUjjpCv9sYXK35NFx1xCkdOZ3gSWtaQ42GPhfGrDf0Xk7clcFdG32oLuqHZl3BPszNDQ3frBrHs85KufNkRE8alzSsgfPGZ+Vsjd+5zf7Th3IOgqvgNuE+1VRDveXslFl8H62h0VIflrcxZxc51plQz1x74dndpfbdgb1yDmMyWBn9cc+uc+HKYEzOuYa9qp+c04J4uj7MpgxoDDn45E70ea654qw9svh7M+Q5947e8/9OY3gf8sM1B1zDM9SB17/e7TyjmLsdM6o59WnE5JNnZWnsDR++xQvTjTUe\n  </data>\n </layer>\n <layer name="Layer1" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="14"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="17"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqGD3BnZmA4z0xbOyYAzX9PYzsGIwAA/B4Cog==\n  </data>\n </layer>\n <layer name="Layer3" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="13"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMFSAOzMDw3lm2toxAWj+exrbMQqGJgAA++8Cog==\n  </data>\n </layer>\n <layer name="Layer2" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="12"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="16"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqoC9KYGRjOA3EqM+3sAJn/AYgn0NCOUYAKAGX4A/w=\n  </data>\n </layer>\n <layer name="Layer4" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="11"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAoYGJgG2gGjYNADAAx8AAM=\n  </data>\n </layer>\n <layer name="Layer5" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="10"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBIB00A7YBQMOQAADJwAAw==\n  </data>\n </layer>\n <layer name="Layer6" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="9"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMNIA00A7YBQMSQAADKQAAw==\n  </data>\n </layer>\n <layer name="Layer7" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="8"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBQA00A7YBSMeAAADTwAAw==\n  </data>\n </layer>\n <layer name="Layer8" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBCAi5mBYQMQczLTzo4JQLPfM0PoUTAKKAUA++AC5Q==\n  </data>\n </layer>\n <layer name="Layer9" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQAvAxczAsAGIOZlpZ8cEoNnvmSH0KBgFtAYAWG8C5Q==\n  </data>\n </layer>\n <layer name="Layer10" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjALagaXMDAwczLS1YwIzBI+CUTAKaAsAnoIB2g==\n  </data>\n </layer>\n <layer name="Layer11" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="20"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DwA6aBdsAoGAWjYBSMAgYAE0wAAw==\n  </data>\n </layer>\n <layer name="Layer12" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BwA6aBdsAoGAWjYBSMAjAAABNUAAM=\n  </data>\n </layer>\n <layer name="Layer13" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwwWkMTMwbGCmrR0TgOZ/oLEdo2AUjIJRMAoGJwAAR/gCow==\n  </data>\n </layer>\n <layer name="Layer14" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFQxFwMTMwbABiTmba2TEBaPZ7Zgg9CkbBKBgFo2AUAADqpQLl\n  </data>\n </layer>\n <layer name="Layer15" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBg44M7MwHCembZ2TACa/57GdoyCUTAKRsEoGAUjAQAAtPkCog==\n  </data>\n </layer>\n</map>\n',
      },
      genericCharacters: [
        {
          name: "Soldier",
          age: "mature adult",
          backstory: "A generic enemy unit.",
          firstSeenAs: "enemy non-boss",
          gender: "male",
          inGameDescription: "A generic enemy unit.",
          personality: "None.",
          physicalDescription: "",
          chapterJoined: 0,
          formattedDescription: "An enemy unit[X]",
          csvData: {
            name: "Soldier",
            nameTextPointer: "Soldier_NameText",
            descriptionTextPointer: "Soldier_DescText",
            characterNumber: "Soldier",
            defaultClass: "0x0",
            portrait: "0x0",
            isGeneric: true,
            affinity: "NoAff",
            baseLevel: 1,
            baseHP: 5,
            basePwr: 3,
            baseMagic: 1,
            baseSkl: 3,
            baseSpd: 2,
            baseDef: 3,
            baseRes: 2,
            baseLck: 5,
            baseCon: 1,
            hpGrowth: 75,
            pwrGrowth: 30,
            magicGrowth: 10,
            sklGrowth: 20,
            spdGrowth: 25,
            defGrowth: 10,
            resGrowth: 20,
            lckGrowth: 0,
          },
        },
      ],
      battleQuotes: [
        {
          character1: "Orin",
          character2: "Kael",
          chapterId: "whispers_of_the_past",
          conversationTextPointer: "battle_quote_Orin_Kael",
          conversation: [
            {
              characterName: "Orin",
              dialogue:
                "Kael! This ends today! I won't let you continue your dark plans!",
            },
            {
              characterName: "Kael",
              dialogue:
                "Such fire in your heart, Orin. But do you truly understand the power you stand against? The shadows are far stronger than you realize.",
            },
            {
              characterName: "Orin",
              dialogue:
                "I believe in my friends and the hope we carry! You won't cast this world into darkness while I'm here!",
            },
          ],
        },
        {
          character1: "Rhea",
          character2: "Kael",
          chapterId: "whispers_of_the_past",
          conversationTextPointer: "battle_quote_Rhea_Kael",
          conversation: [
            {
              characterName: "Rhea",
              dialogue:
                "Kael, I won't let your ambition corrupt this land any further! I stand against you!",
            },
            {
              characterName: "Kael",
              dialogue:
                "Is that so, Rhea? You think you can stop me? Power is the only truth, and I will have it all!",
            },
            {
              characterName: "Rhea",
              dialogue:
                "Your vision is twisted. I'll fight for those who would suffer under your rule! Prepare yourself!",
            },
          ],
        },
        {
          character1: "Zyphira",
          character2: "Kael",
          chapterId: "whispers_of_the_past",
          conversationTextPointer: "battle_quote_Zyphira_Kael",
          conversation: [
            {
              characterName: "Zyphira",
              dialogue:
                "Kael! Your twisted ambitions end here. The sigils will never be yours!",
            },
            {
              characterName: "Kael",
              dialogue:
                "Ah, Zyphira, still chasing dreams of harmony while the world crumbles around you. It's almost cute.",
            },
            {
              characterName: "Zyphira",
              dialogue:
                "Cute or not, I'll fight for what's right. I won't let you unleash Xerath upon Eldralis!",
            },
            {
              characterName: "Kael",
              dialogue:
                "You really think you can stop me? You may have spirit, but power ultimately prevails.",
            },
          ],
        },
      ],
    },
    {
      chapterId: "allies_in_shadow",
      displayName: "Ch 1: Allies in Shadow",
      number: 1,
      chapterDataForCsv: {
        chapterName: "allies_in_shadow",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "RipBlaine_Map",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "RipBlaine_Changes",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "allies_in_shadow",
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
        chapterNameID: "allies_in_shadow_NameText",
        chapterNameID2: "allies_in_shadow_NameText",
        eventDataReference: "allies_in_shadow_EventDataReference",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "allies_in_shadow_StatusText",
        goalWindowText: "DefeatAllText",
        goalWindowInformation: "EnemyCountGoal",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
      chapterEvent: {
        eventDataReference: "allies_in_shadow_EventDataReference",
        characterBasedEvents:
          "CHAR 0x1 Recruit_Orin_Merrik [Orin,Merrik] 0x0\nCHAR 0x1 Recruit_Rhea_Merrik [Rhea,Merrik] 0x0\nCHAR 0x1 Recruit_Zyphira_Merrik [Zyphira,Merrik] 0x0",
        locationBasedEvents: "Armory(ArmoryList,1,10)\nVendor(VendorList,0,11)",
        miscBasedEvents: "DefeatAll(EndingScene)",
        units:
          "UNIT Thorn Shaman Thorn Level(3, Enemy, True) [7, 5] 0x00 0x00 0x0 0x00 [Flux, Vulnerary, Nosferatu] GuardTileAI\nUNIT Orin Mercenary 0x00 Level(4, Ally, True) [4, 3] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Rhea Mercenary_F 0x00 Level(3, Ally, True) [2, 1] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Zyphira Mage_F 0x00 Level(3, Ally, True) [0, 0] 0x00 0x00 0x0 0x00 [Fire, Vulnerary, Elfire] NoAI\nUNIT Soldier Myrmidon 0x00 Level(4, Ally, True) [6, 3] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Soldier Archer 0x00 Level(4, Ally, True) [11, 1] 0x00 0x00 0x0 0x00 [IronBow, Vulnerary] NoAI\nUNIT Soldier Fighter 0x00 Level(3, Ally, True) [2, 10] 0x00 0x00 0x0 0x00 [IronAxe, Vulnerary] NoAI\nUNIT Soldier Mage 0x00 Level(4, Ally, True) [10, 11] 0x00 0x00 0x0 0x00 [Fire, Vulnerary] NoAI\nUNIT Soldier Thief 0x00 Level(3, Ally, True) [3, 3] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary, DoorKey] NoAI\nUNIT Soldier Fighter 0x00 Level(3, Ally, True) [2, 8] 0x00 0x00 0x0 0x00 [IronAxe, Vulnerary] NoAI\nUNIT Soldier Cavalier 0x00 Level(4, Ally, True) [14, 0] 0x00 0x00 0x0 0x00 [IronSword, IronLance, Vulnerary] NoAI\nUNIT Soldier Archer 0x00 Level(3, Ally, True) [18, 0] 0x00 0x00 0x0 0x00 [IronBow, Vulnerary] NoAI\nUNIT Soldier Fighter 0x00 Level(3, Ally, True) [1, 15] 0x00 0x00 0x0 0x00 [IronAxe, Vulnerary] NoAI\nUNIT Soldier Mage 0x00 Level(4, Ally, True) [10, 15] 0x00 0x00 0x0 0x00 [Fire, Vulnerary] NoAI",
        beginningScene:
          "LOAD1 0x1 Units\nGiveGoldSilent(3000)\nMUSC Legends_of_Avenir\nText(Forest,allies_in_shadow_PreBattleEncounter)\nFadeOutMusic",
        endingScene:
          "Text(Outside_Village_Day,allies_in_shadow_PostBattleScene)\nMoveToChapter(shadows_unbound)",
        localDefinitions: [
          "ArmoryList:\nSHLI IronSword IronLance IronAxe IronBow WindSword IronAxe Dasher DevilAxe IronSword\nALIGN 4",
          "VendorList:\nSHLI Fire Thunder Flux Heal Arcfire Ivaldi Rescue Fortify Arcwind\nALIGN 4",
          'Recruit_Orin_Merrik:\nMUSS Comrades\nText(Recruit_Orin_Merrik_Text)\nTurnAlly(Merrik)\nENUT 0x89 // ENUT: Make this event ID "used"\nMURE 0x5 // MURE: Returns to previous music with given fade speed\nNoFade\nENDA\n',
          'Recruit_Rhea_Merrik:\nMUSS Comrades\nText(Recruit_Rhea_Merrik_Text)\nTurnAlly(Merrik)\nENUT 0xBD // ENUT: Make this event ID "used"\nMURE 0x5 // MURE: Returns to previous music with given fade speed\nNoFade\nENDA\n',
          'Recruit_Zyphira_Merrik:\nMUSS Comrades\nText(Recruit_Zyphira_Merrik_Text)\nTurnAlly(Merrik)\nENUT 0x4B // ENUT: Make this event ID "used"\nMURE 0x5 // MURE: Returns to previous music with given fade speed\nNoFade\nENDA\n',
        ],
        text: "## allies_in_shadow_PreBattleEncounter\n[ConversationText]\n[MidLeft][LoadZyphira][MidRight][LoadOrin][FarRight][LoadRhea]\nZyphira! Are you sure we should be venturing this deep into the Silvaara Woods?\n[MidLeft]We have to, Orin. The tribes need to know about the sigils and the threat they pose.\n[MidRight]But what if we run into the Shadowbound? They won't take kindly to our presence here.\n[FarRight]We can handle ourselves. We have to try to forge alliances, or we risk losing everything.\n[MidLeft]Exactly. We can't let fear dictate our actions. We must be brave!\n[MidRight]Brave or reckless? There's a fine line, Zyphira.\n[MidLeft]I know the risks, Rhea. But if we don't act now, we may lose our chance to unite the tribes against the darkness.\n[FarRight]Look! Someone's coming through the trees!\n[MidLeft][LoadMerrik][FarLeft][LoadThorn]\n[MidLeft]Who are you? State your business!\n[FarLeft]I am Merrik, guardian of these woods. I won't let you disturb the peace here.\n[MidRight]We mean no harm! We seek to unite against the Shadowbound!\n[FarLeft]The Shadowbound? You tread dangerous ground. They have eyes everywhere.\n[MidLeft]We know the risks, but we must try. Will you help us?\n[FarLeft]Help? You don't understand the power they wield. I... I have my own ties to them.\n[MidRight]Then you know what we face. You can choose to stand with us or against us.\n[FarLeft]I... I need to think. This is not a decision I can make lightly.\n[MidLeft]Take your time, but remember, the fate of our tribes hangs in the balance.\n[FarLeft]I will consider your words, but know this: the shadows are always watching.[X]\n\n\n\n## allies_in_shadow_PostBattleScene\n[ConversationText]\n[MidLeft][LoadZyphira][MidRight][LoadMerrik][FarLeft][LoadOrin][FarRight][LoadRhea]\nZyphira! We did it! Thorn is defeated!\n[MidLeft]Yes, but this victory is just the beginning. Merrik, what did you learn from the Shadowbound?\n[MidRight]They have plans... sinister ones. They're moving towards the Abyssal Marshes. It's where their corruption runs deepest.\n[FarLeft]The Abyssal Marshes? That place is a nightmare! We can't let them gain any more power!\n[FarRight]We need to unite our tribes, Zyphira. If we stand together, we can confront this darkness.\n[MidLeft]You're right, Rhea. But we must be cautious. The Shadowbound will not take this defeat lightly.\n[MidRight]I'll do whatever it takes to protect my tribe. I won't let the darkness consume us.\n[FarLeft]Then it's settled! We'll gather our allies and prepare for the journey ahead.\n[FarRight]Together, we can face whatever lies in the shadows. Let's move forward, united against the darkness![CloseSpeech][X]\n\n## Recruit_Orin_Merrik_Text\n[ConversationText][FarLeft][LoadZyphira][FarRight][LoadMerrik]So this is where we find you, Merrik. What are you doing in these woods?\n[FarLeft]Zyphira, you shouldn't have come here. It's dangerous!\n[FarRight]Dangerous? You mean you are dangerous. You work with the Shadowbound, don't you?\n[FarLeft]I was sent to seek you out, to see if you would join our cause!\n[FarRight]Join you? Why would I betray the Shadowbound? They've given me power and protection!\n[FarLeft]And look where that has led you! A path of darkness. I know there's more to you, more than just a pawn in their game.\n[FarRight]You don't understand what it's like, Zyphira. Power isn't easily discarded.\n[FarLeft]But at what cost, Merrik? Do you really want to be on the side that brings ruin to Eldralis?\n[FarRight]Eldralis isn't my concern anymore. I have my own goals.\n[FarLeft]Then why did you hesitate? I see the conflict in your eyes. Join us, and we can fight for the light!\n[FarRight]If I join you, what makes you think Thorn will let me leave unscathed?\n[FarLeft]You can't stay here in the shadows forever. Fight alongside us, and we'll protect you! Together, we can-\n[FarRight][TMM][.......]... [.......][TMM]-create a better future? Is that what you truly believe? [TMM]\n[FarLeft]I do. This is our chance to forge a new path.\n[FarRight]And if I refuse? What will happen then?\n[FarLeft]Then you'll be left to face Thorn and his wrath alone. You think your power will save you?\n[FarRight]You make a compelling case, Zyphira. But trust is earned, not given.\n[FarLeft]Then let me earn it. Help us in this battle. Show me you can stand against Thorn's forces.\n[FarRight][TMM][.......]... [.......][TMM]Very well, I will fight with you. Let's see if your courage holds up in the heat of battle.[ClearFace]\n[A][X]\n\n## Recruit_Rhea_Merrik_Text\n[ConversationText][MidLeft][LoadRhea][MidRight][LoadMerrik]We have to make a stand, Rhea!\n[MidLeft]You trust these tribes, Zyphira?\n[MidRight]They are the only ones who can help us fight Thorn.\n[MidLeft]You've seen how the sigils have corrupted so many... how can we be certain they won't betray us?\n[MidRight]Because I believe in their strength and our cause! \n[MidLeft]Your optimism clouds your judgment. But...\n[MidRight]Come no closer, Rhea! I'm not here to fight you.\n[MidLeft]Then why are you here?\n[MidRight]I have my own reasons for wanting to stop Thorn. And they're personal.\n[MidLeft]What do the sigils represent to you?\n[MidRight]Loss. Betrayal. But there's still a chance for redemption.\n[MidLeft]And what makes our alliance different from all the others that have fallen?\n[MidRight]Because together, we can forge something new. Something stronger. Join us.\n[MidLeft]You really think battle with corrupted allies is the way?\n[MidRight][TMM][.......]... [.......][TMM]I may not trust them fully, but I cannot ignore the cries for help[Smile]. I'll join your fight against Thorn.[ClearFace]\n[MidLeft]Then we fight together! Let's find victory in these woods.\n[A][X]\n\n## Recruit_Zyphira_Merrik_Text\n[ConversationText][MidLeft][LoadZyphira][MidRight][LoadMerrik]We need your help, Merrik. The Shadowbound are threatening all of us, not just the tribes.\n[MidRight]And why would I trust you? You know nothing of my ties.\n[MidLeft]Your ties do not define you. You have the power to choose.\n[MidRight][TMM][.......]... [.......][TMM]Power, yes. But it comes with a cost, Zyphira.\n[MidLeft]We all face costs. What matters is what we fight for.\n[MidRight]And what do you propose? You expect me to betray my own?\n[MidLeft]What you call loyalty has already led to suffering. Join us and help end this cycle of violence.\n[MidRight]You want me to side with you, a stranger, against my own people?\n[MidLeft]I am no stranger. We are united by a common enemy. The longer you hesitate, the stronger they become.\n[MidRight]A tempting offer... But how can I trust that you won't turn on me?\n[MidLeft]Because I see the light in you, Merrik. We want to create a future where everyone can thrive without fear.\n[MidRight]And if I say yes? What will you do then?\n[MidLeft]Fight alongside us, and together, we can bring peace to these lands.\n[MidRight][TMM][.......]... [.......][TMM]Perhaps... Perhaps there is a way forward after all.\n[MidLeft]Then what will it be? Stand with us?\n[MidRight]I'll join you, Zyphira. Let's put an end to Thorn and his minions.\n[A][X]",
      },
      chapterMap: {
        name: "RipBlaine",
        tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="21" height="18" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01003803" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01003803.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="21" height="18">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="allies_in_shadow"/>\n   <property name="Main" value=""/>\n   <property name="MapID" value="RipBlaine_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x38"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxdlM9L1UEQwHf3XSItIwgiIigPBkm/oOwHdRHR9PXjFSV1r/QQZGEeJA+9nnhIA/0PzJ7PQ0V0N4qQLImsHp3zYIFppu8P6DPMfNnv6/BhZndnZmdnZ7fZOVeXca4Z+RK5FpwbQ372zr2DWsbjyDz8gYuMH0AR+wmnfsJ8iOM8DKbWJO4rOIjNHDHakL+RX7yuP2WtjD6HXoNsgfcurkmsu5aj6EVbGyZODfNLyBxcgj1Bc/xOjFlsPsAN9EY4I+fxMTfJqZjaZxh53hhxcb/VoPoBfEdhr8WTtX2my/ov7I4g+8xXYk9BA5TgeVIr2IDPkFf//V59c5l4rp9wARZY287cffjmtca3oMti9eBzB7ZCncSx+cR3DUrof23cgJzyWs8d2NXDSRf3lruV+xpLcvEx3iaYZbwMh9FXvY7b7T7Xg8ZdR9+Jz3HLWcaDFlfyzFpMua/NQfssILus1yaD9p3sN2q5JHc2AE2mf8X2TYg9l/Sh5JX0Wa3l3BpiL1eC3n1yR1KHfquB5FrxmresP0rlKjE7LK9G2B10j26LV0j10zGYtlyTe/uB3Vn0czZe8dW9m4WSvbND6C2Z+IZOwGsoW1yp7Tg2i9a7Pfh8Sr2Nx6yNWNwlexMTViexl9oNWLyy9Zf0WZ/VU2ylnzb6+A5EvoA2F22kZr3Io9ZLV4xO2CY2xLsKp+ByUJt620fyyNt+N6ERhuztXTP/itVqPsRayJ33Qj90wjJzW7zONYXYd8mfJLFvp/6jXKquC0FzXHTxT5O85B/qsN59ErSf5W3fs/ct8ZN/rsD6Q5hBb7UzZFP7CR+d/kcr1rcFO8+u/+50xlX/c3LWZ8hJaHfV/9J1+ztk/DboeWX+dOpep+19/wPjnbZp\n  </data>\n </layer>\n</map>\n',
      },
      genericCharacters: [
        {
          name: "Soldier",
          age: "mature adult",
          backstory: "A generic enemy unit.",
          firstSeenAs: "enemy non-boss",
          gender: "male",
          inGameDescription: "A generic enemy unit.",
          personality: "None.",
          physicalDescription: "",
          chapterJoined: 1,
          formattedDescription: "An enemy unit[X]",
          csvData: {
            name: "Soldier",
            nameTextPointer: "Soldier_NameText",
            descriptionTextPointer: "Soldier_DescText",
            characterNumber: "Soldier",
            defaultClass: "0x0",
            portrait: "0x0",
            isGeneric: true,
            affinity: "NoAff",
            baseLevel: 1,
            baseHP: 5,
            basePwr: 3,
            baseMagic: 1,
            baseSkl: 3,
            baseSpd: 2,
            baseDef: 3,
            baseRes: 2,
            baseLck: 5,
            baseCon: 1,
            hpGrowth: 75,
            pwrGrowth: 30,
            magicGrowth: 10,
            sklGrowth: 20,
            spdGrowth: 25,
            defGrowth: 10,
            resGrowth: 20,
            lckGrowth: 0,
          },
        },
      ],
      battleQuotes: [
        {
          character1: "Orin",
          character2: "Thorn",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Orin_Thorn",
          conversation: [
            {
              characterName: "Orin",
              dialogue:
                "Thorn! You stand for the Shadowbound, but do you even know what true strength means?",
            },
            {
              characterName: "Thorn",
              dialogue:
                "Strength? You speak of such things as if they were a child's fable. Darkness brings power, and I will show you its true might.",
            },
            {
              characterName: "Orin",
              dialogue:
                "No! We believe in unity and hope. Your darkness only spreads despair. I won't let you win!",
            },
          ],
        },
        {
          character1: "Rhea",
          character2: "Thorn",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Rhea_Thorn",
          conversation: [
            {
              characterName: "Rhea",
              dialogue:
                "Thorn! I've heard the whispers of your dark deeds. Why do you serve the Shadowbound?",
            },
            {
              characterName: "Thorn",
              dialogue:
                "Wisdom lies in strength, Rhea. You cling to hope while I embrace the shadows. This world is ruled by power.",
            },
            {
              characterName: "Rhea",
              dialogue:
                "Power gained through tyranny will only sow destruction. I fight for unity, not fear!",
            },
          ],
        },
        {
          character1: "Zyphira",
          character2: "Thorn",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Zyphira_Thorn",
          conversation: [
            {
              characterName: "Zyphira",
              dialogue:
                "Thorn! Here to spread shadows over the light once more? You're wasting your time!",
            },
            {
              characterName: "Thorn",
              dialogue:
                "You mistake my presence for mere combat, Zyphira. It's the light that will be extinguished today.",
            },
            {
              characterName: "Zyphira",
              dialogue:
                "Not while I stand! You may believe in darkness, but I fight for a future where hope reigns!",
            },
          ],
        },
        {
          character1: "Merrik",
          character2: "Thorn",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Merrik_Thorn",
          conversation: [
            {
              characterName: "Merrik",
              dialogue:
                "Thorn! I won't let the Shadowbound corrupt my tribe any longer!",
            },
            {
              characterName: "Thorn",
              dialogue:
                "You believe you're strong enough to defy us? The darkness offers power beyond your comprehension.",
            },
            {
              characterName: "Merrik",
              dialogue:
                "Power that only threatens to consume! I fight for my people, not for your twisted ideals!",
            },
            {
              characterName: "Thorn",
              dialogue:
                "Foolish sentiments. Strength lies in accepting the shadows, not fighting against them. Prepare to be extinguished.",
            },
          ],
        },
        {
          character1: "Orin",
          character2: "Merrik",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Orin_Merrik",
          conversation: [
            {
              characterName: "Orin",
              dialogue:
                "Merrik! You don't have to fight me! We can find another way!",
            },
            {
              characterName: "Merrik",
              dialogue:
                "Another way? You think mercy will save your people? This world doesn't allow for weakness.",
            },
            {
              characterName: "Orin",
              dialogue:
                "It's not weakness! It's hope! Together, we can break this cycle of pain!",
            },
            {
              characterName: "Merrik",
              dialogue:
                "Hope? I've seen how futile that can be. But... maybe, just maybe, you might be onto something.",
            },
          ],
        },
        {
          character1: "Rhea",
          character2: "Merrik",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Rhea_Merrik",
          conversation: [
            {
              characterName: "Rhea",
              dialogue:
                "Step back, shadow-walker! Are you really willing to fight your own people just for power?",
            },
            {
              characterName: "Merrik",
              dialogue:
                "Power is the only way to protect them, Rhea. I'm not just doing this for myself!",
            },
            {
              characterName: "Rhea",
              dialogue:
                "Duty or not, you're flirting with darkness. You should remember what it cost your tribe!",
            },
          ],
        },
        {
          character1: "Zyphira",
          character2: "Merrik",
          chapterId: "allies_in_shadow",
          conversationTextPointer: "battle_quote_Zyphira_Merrik",
          conversation: [
            {
              characterName: "Zyphira",
              dialogue:
                "Merrik! You stand with the Shadowbound after all this time? I thought you were better than that!",
            },
            {
              characterName: "Merrik",
              dialogue:
                "You don't understand, Zyphira. This power... it could save my people, but it comes at a cost.",
            },
            {
              characterName: "Zyphira",
              dialogue:
                "And what cost are you willing to pay? Your soul? There has to be another way!",
            },
          ],
        },
      ],
    },
    {
      chapterId: "shadows_unbound",
      displayName: "Ch 2: Shadows Unbound",
      number: 2,
      chapterDataForCsv: {
        chapterName: "shadows_unbound",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "Deidar_Map",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "Deidar_Changes",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "shadows_unbound",
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
        chapterNameID: "shadows_unbound_NameText",
        chapterNameID2: "shadows_unbound_NameText",
        eventDataReference: "shadows_unbound_EventDataReference",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "shadows_unbound_StatusText",
        goalWindowText: "DefeatAllText",
        goalWindowInformation: "EnemyCountGoal",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
      chapterEvent: {
        eventDataReference: "shadows_unbound_EventDataReference",
        characterBasedEvents: "",
        locationBasedEvents:
          "Village(0x62,Village_e4e9256c,6,2)\nVendor(VendorList,14,2)\nVillage(0x04,Village_2fd9d748,16,12)\nVillage(0xDB,Village_e096d2da,9,14)",
        miscBasedEvents: "DefeatAll(EndingScene)",
        units:
          "UNIT Xerath Shaman Xerath Level(3, Enemy, True) [21, 13] 0x00 0x00 0x0 0x00 [Flux, Nosferatu, Vulnerary] GuardTileAI\nUNIT Orin Mercenary 0x00 Level(4, Ally, True) [1, 2] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Rhea Mercenary_F 0x00 Level(4, Ally, True) [4, 0] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Merrik Shaman 0x00 Level(4, Ally, True) [2, 0] 0x00 0x00 0x0 0x00 [Flux, Vulnerary, Torch] NoAI\nUNIT Zyphira Mage_F 0x00 Level(3, Ally, True) [0, 0] 0x00 0x00 0x0 0x00 [Fire, Vulnerary, Elfire] NoAI\nUNIT Soldier Knight 0x00 Level(3, Ally, True) [20, 0] 0x00 0x00 0x0 0x00 [IronLance, Vulnerary] NoAI\nUNIT Soldier Soldier 0x00 Level(3, Ally, True) [22, 1] 0x00 0x00 0x0 0x00 [IronLance, Vulnerary] NoAI\nUNIT Soldier Myrmidon 0x00 Level(4, Ally, True) [21, 3] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Soldier Mage 0x00 Level(3, Ally, True) [6, 2] 0x00 0x00 0x0 0x00 [Fire, Vulnerary] NoAI\nUNIT Soldier Fighter 0x00 Level(4, Ally, True) [9, 14] 0x00 0x00 0x0 0x00 [IronAxe, Vulnerary] NoAI\nUNIT Soldier Mercenary 0x00 Level(4, Ally, True) [9, 7] 0x00 0x00 0x0 0x00 [IronSword, Vulnerary] NoAI\nUNIT Soldier Cavalier 0x00 Level(3, Ally, True) [10, 8] 0x00 0x00 0x0 0x00 [IronSword, IronLance, Vulnerary] NoAI",
        beginningScene:
          "LOAD1 0x1 Units\nGiveGoldSilent(3000)\nMUSC Legends_of_Avenir\nText(Outside_Village_Day,shadows_unbound_PreBattleScene)\nFadeOutMusic",
        endingScene:
          "Text(Outside_Village_Day,shadows_unbound_PostBattleScene)",
        localDefinitions: [
          "Village_e4e9256c:\nMUSI\nText(Outside_Village_Day,Village_e4e9256c_Text)\nGiveItem(Thani,0xFFFF)\nMUNO\nNoFade\nENDA",
          "VendorList:\nSHLI Fire Thunder Flux Heal SkillScroll Boots Recover SecretBook Thoron\nALIGN 4",
          "Village_2fd9d748:\nMUSI\nText(Village,Village_2fd9d748_Text)\nGiveItem(Rescue,0xFFFF)\nMUNO\nNoFade\nENDA",
          "Village_e096d2da:\nMUSI\nText(Village,Village_e096d2da_Text)\nGiveGold(3500)\nMUNO\nNoFade\nENDA",
        ],
        text: "## shadows_unbound_PreBattleScene\n[ConversationText]\n[MidRight][LoadZyphira][MidLeft][LoadOrin][FarLeft][LoadRhea][FarRight][LoadMerrik]\nZyphira! Are we ready for this?\n[MidRight]We have to be, Orin. The Abyssal Marshes are just ahead, and the Black Sanctum awaits us.\n[MidLeft]I can feel the shadows creeping closer. We must stay vigilant.\n[FarLeft]I've seen what the Shadowbound can do. We can't let them take any more lives.\n[FarRight]Then let's make sure we're prepared. We fight for our people, for Eldralis!\n[MidRight]Exactly. Together, we can face whatever lies ahead. Remember, we're not alone in this fight.\n[MidLeft]Right. We have each other, and we have hope.\n[FarLeft]Hope is all we need. Let's move out, everyone!\n[FarRight]For Eldralis! [CloseSpeech][X]\n\n\n\n## shadows_unbound_PostBattleScene\n[ConversationText]\n[MidRight][LoadZyphira][MidLeft][LoadOrin][FarLeft][LoadRhea][FarRight][LoadMerrik]\nZyphira! We did it! The Shadowbound are defeated!\n[MidRight]I can hardly believe it, Orin. But this is just the beginning.\n[MidLeft]What do you mean?\n[MidRight]With the sigils' dark potential gone, we have a chance to rebuild. We must unite the tribes and heal Eldralis.\n[FarLeft]It's going to take time, but I believe we can do it. Together.\n[FarRight]Together, yes. But we must remain vigilant. Darkness has a way of creeping back in.\n[MidRight]Merrik, you're right. We need to ensure that the bonds we've formed are strong enough to withstand any future threats.\n[MidLeft]And we will! We've faced so much already. We can't let fear dictate our actions.\n[FarLeft]Zyphira, your strength has inspired us all. We'll follow you wherever you lead.\n[MidRight]Thank you, Orin. But this isn't just about me. It's about all of us, and the future we want to create.\n[FarRight]A future free from the shadows of the past. We'll make it happen, I promise.\n[MidRight]Then let's get to work. Eldralis deserves our best efforts.\n[FarLeft]For Eldralis! [A][X]\n\n## Village_e4e9256c_Text\n[ConversationText]\n[MidRight][LoadCurrent][MidLeft][LoadVillagerOldWoman]\nAs you journey through our village, be wary of the dark forces lurking nearby. The Shadowbound are up to no good, and their corrupted guardians will rise from the shadows to challenge you. \n\n[CloseSpeech]\n\n[MidLeft]I have something to help you survive this perilous encounter. Take this Thani, which will aid you in your battle against the chaos unleashed by Xerath's awakening.\n[A][X]\n\n## Village_2fd9d748_Text\n[ConversationText]\n[MidRight][LoadCurrent][MidLeft][LoadVillagerOldMan]\nAh, travelers! With the Shadowbound poised to unleash their dark rituals, we need every bit of help we can get. Here, take this Rescue staff; it may prove invaluable for your allies in the battles ahead. The threat looms ever closer, but with your determination, we can stave off their chaos!\n[A][X]\n\n## Village_e096d2da_Text\n[ConversationText]\n[MidRight][LoadCurrent][MidLeft][LoadVillagerOldMan]\nWelcome, travelers! The Shadowbound are plotting something terrible, and I fear for all our lives. Take this gold; it may help you gather supplies to face the dark forces ahead. We need you to stop Xerath before he can rise and unleash chaos upon our village!\n[A][X]",
      },
      chapterMap: {
        name: "Deidar",
        tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="24" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E000F10" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E000F10.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="24" height="17">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="shadows_unbound"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Deidar_Changes"/>\n   <property name="MapID" value="Deidar_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x0F"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyFlMtOVEEQQPsREwUXw1o3bofFLPGxG4gL+QDDUtFIdGH0D64oQ8BEf2GG+EC/YvABMxr1F4gvZiCGvcZ4iq5ONy2ji5Oue7u6qqu6qqw1ZsYZ884Y8wYa9mh+oXPKB/kpehU0kS1Ms9fRf2JLVvmWPVlX1e41zl+HdbgJt3yyfxp5CiaQ22IP5uGzPWyv0vULNPXeLbV/n/MPoAcrsAr7ujeHfFntdzm3AYtwRn0cxILsXLAt/70bnY88D7vwG90LPuToLd8rutdGbxt6yH3915W8wBrcdom76u8bOnsmxSp3GxQ+fmhOJP6PcBGdoUnvID5ej7j3J/aX9P0O8qpxbyKf03dY1nq4gnwV5uFh9ubiQ8581/zuIA9gCLuw54KPaa2HRybV0VT27hXyPViErUw/xvFSzx1n/wSMwTic9CmWvg3I950ilzn7GneV5Vbq9UlW95L7Z/Bc32CM/WMZLXQWYNke/j/uwt1rNuWpaZMv8TGhvSIxSaz1wva/7At9/beV9ULMUz3T6Rdnhzbwv/w0bIol5qfu/rZXxl2ZFHvsY7F1g3UBJn2qiYbeZQCTI+5YIv30XnMo9Rl7oCV1CrNZTexkb3tJ7c4Wd6yh98GE2m0jd2DNh1qaU/s/j8iP1MYwq9FI7Ik452o6Z+Sdu8gb8MqHmpIePu/TLI2Ivivsdop+28zsy/pYcyJ1LXd7YcKc+GpCn50t/Cxl9bKd1U+vmP3x/nF+xxk0k835cublPmL+RfcP3iGn7Q==\n  </data>\n </layer>\n <layer name="Bottom House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQCugONAOGEAAACbcACI=\n  </data>\n </layer>\n <layer name="Right House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIKhCRQH2gGjAC8AADwAACI=\n  </data>\n </layer>\n <layer name="Top House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBieQHGgHTAKRsEoGAUjHAAAvOgAIg==\n  </data>\n </layer>\n</map>\n',
      },
      genericCharacters: [
        {
          name: "Soldier",
          age: "mature adult",
          backstory: "A generic enemy unit.",
          firstSeenAs: "enemy non-boss",
          gender: "female",
          inGameDescription: "A generic enemy unit.",
          personality: "None.",
          physicalDescription: "",
          chapterJoined: 2,
          formattedDescription: "An enemy unit[X]",
          csvData: {
            name: "Soldier",
            nameTextPointer: "Soldier_NameText",
            descriptionTextPointer: "Soldier_DescText",
            characterNumber: "Soldier",
            defaultClass: "0x0",
            portrait: "0x0",
            isGeneric: true,
            affinity: "NoAff",
            baseLevel: 1,
            baseHP: 5,
            basePwr: 3,
            baseMagic: 1,
            baseSkl: 3,
            baseSpd: 2,
            baseDef: 3,
            baseRes: 2,
            baseLck: 5,
            baseCon: 1,
            hpGrowth: 75,
            pwrGrowth: 30,
            magicGrowth: 10,
            sklGrowth: 20,
            spdGrowth: 25,
            defGrowth: 10,
            resGrowth: 20,
            lckGrowth: 0,
          },
        },
      ],
      battleQuotes: [
        {
          character1: "Orin",
          character2: "Xerath",
          chapterId: "shadows_unbound",
          conversationTextPointer: "battle_quote_Orin_Xerath",
          conversation: [
            {
              characterName: "Orin",
              dialogue:
                "Xerath! Your reign of darkness ends here! We will not let you swallow Eldralis!",
            },
            {
              characterName: "Xerath",
              dialogue:
                "Brave, foolish boy. You think you can challenge a god? Your light is but a flicker against my shadow.",
            },
            {
              characterName: "Orin",
              dialogue:
                "I may be just one warrior, but I carry the hopes of my people! Together, we can drive you back!",
            },
          ],
        },
        {
          character1: "Rhea",
          character2: "Xerath",
          chapterId: "shadows_unbound",
          conversationTextPointer: "battle_quote_Rhea_Xerath",
          conversation: [
            {
              characterName: "Rhea",
              dialogue:
                "Xerath! I won't let your darkness overtake this land any longer. Prepare yourself!",
            },
            {
              characterName: "Xerath",
              dialogue:
                "Foolish mortal, you think you can challenge the shadows? Your strength is but a flickering candle in the void.",
            },
            {
              characterName: "Rhea",
              dialogue:
                "A flickering candle can still ignite a fire! I may be wary, but my resolve is stronger than your ancient malice!",
            },
          ],
        },
        {
          character1: "Merrik",
          character2: "Xerath",
          chapterId: "shadows_unbound",
          conversationTextPointer: "battle_quote_Merrik_Xerath",
          conversation: [
            {
              characterName: "Merrik",
              dialogue:
                "Xerath! Your darkness has twisted this land beyond recognition. I won't let you continue to corrupt what remains of my people!",
            },
            {
              characterName: "Xerath",
              dialogue:
                "Foolish boy, you stand against the tide of inevitability. Embrace the shadows, for they hold true power.",
            },
            {
              characterName: "Merrik",
              dialogue:
                "Power that enslaves? No! I fight for my tribe, to protect them from your grasp, even if it means facing you here today!",
            },
          ],
        },
        {
          character1: "Zyphira",
          character2: "Xerath",
          chapterId: "shadows_unbound",
          conversationTextPointer: "battle_quote_Zyphira_Xerath",
          conversation: [
            {
              characterName: "Zyphira",
              dialogue:
                "Xerath! Your reign of terror ends here! The sigils will not be your weapon!",
            },
            {
              characterName: "Xerath",
              dialogue:
                "Ah, the little lightbearer thinks she can extinguish the eternal darkness. How amusing.",
            },
            {
              characterName: "Zyphira",
              dialogue:
                "I won't let you corrupt my world, Xerath! I will fight for those who can't!",
            },
            {
              characterName: "Xerath",
              dialogue:
                "Brave words, child. But courage alone cannot stand against the abyss.",
            },
          ],
        },
      ],
    },
  ],
  characters: [
    {
      name: "Orin",
      gender: "male",
      personality: "Courageous but often naive, wears his heart on his sleeve.",
      age: "young adult",
      backstory:
        "Orin grew up alongside Zyphira in the Valenor Plains, sharing her dreams of peace and harmony. But with the emergence of conflict, he feels torn between duty to his tribe and following her on this dangerous path. His protective nature often leads him into trouble, yet his heart remains steadfast in the belief that they can save Eldralis together.",
      firstSeenAs: "ally",
      physicalDescription:
        "Orin has short, tousled brown hair and warm hazel eyes. He wears simple armor with tribal markings and carries a short sword at his side.",
      inGameDescription:
        "A brave warrior supporting Zyphira in her quest to thwart darkness.",
      deathQuote: "I… can't let it end like this… for everyone who trusted us.",
      portraitMetadata: {
        originalImageName: "10.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 3,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "male",
        age: "young adult",
        hairColor: "brown",
        eyeColor: "blue",
        vibe: "determined, noble, thoughtful",
        clothing: "blue and gold armor",
        accessories: "brooch",
      },
      csvData: {
        name: "Orin",
        nameTextPointer: "Orin_NameText",
        descriptionTextPointer: "Orin_DescText",
        characterNumber: "Orin",
        defaultClass: "Mercenary",
        portrait: "OrinMug",
        isGeneric: false,
        affinity: "LightAff",
        swordRank: "Drank",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "0",
        baseLevel: 1,
        baseHP: 20,
        basePwr: 7,
        baseMagic: 0,
        baseSkl: 6,
        baseSpd: 7,
        baseDef: 5,
        baseRes: 2,
        baseLck: 5,
        baseCon: 8,
        hpGrowth: 60,
        pwrGrowth: 50,
        magicGrowth: 0,
        sklGrowth: 45,
        spdGrowth: 50,
        defGrowth: 40,
        resGrowth: 20,
        lckGrowth: 30,
      },
      formattedDescription:
        "A brave warrior supporting[NL]Zyphira in her quest to thwart[NL]darkness.[X]",
      formattedDeathQuote:
        "\n## OrinDeathText\n[ConversationText]\n[FarRight][LoadOrin]\nI… can't let it end like this…[NL]for everyone who trusted us.[A][X]",
      chapterJoined: 0,
    },
    {
      name: "Rhea",
      gender: "female",
      personality:
        "Skeptical and tough, she has a deep loyalty to those she trusts.",
      age: "young adult",
      backstory:
        "Rhea is a fierce warrior from a rival tribe known for their skills in battle. She's wary of strangers and has lost many to the sigils' corruption, leading her to distrust anyone associated with them. However, witnessing Zyphira's determination sparks a flicker of hope that perhaps alliances can be forged anew.",
      firstSeenAs: "allied NPC",
      physicalDescription:
        "Rhea possesses long dark hair tied back in a braid, and piercing blue eyes. Her armor is intricately designed, reflecting her warrior status with sharp edges and symbols of her tribe.",
      inGameDescription:
        "A warrior with a guarded heart, ready to protect her newfound allies.",
      deathQuote: "I never thought I'd fight for this... but it's worth it.",
      portraitMetadata: {
        originalImageName: "33.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 3,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "female",
        age: "young adult",
        hairColor: "black",
        eyeColor: "red",
        vibe: "determined, fierce, confident",
        clothing: "armor with a red sash",
        accessories: "headband",
      },
      csvData: {
        name: "Rhea",
        nameTextPointer: "Rhea_NameText",
        descriptionTextPointer: "Rhea_DescText",
        characterNumber: "Rhea",
        defaultClass: "Mercenary_F",
        portrait: "RheaMug",
        isGeneric: false,
        affinity: "DarkAff",
        swordRank: "Drank",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "0",
        baseLevel: 1,
        baseHP: 20,
        basePwr: 7,
        baseMagic: 0,
        baseSkl: 6,
        baseSpd: 7,
        baseDef: 5,
        baseRes: 2,
        baseLck: 4,
        baseCon: 6,
        hpGrowth: 60,
        pwrGrowth: 50,
        magicGrowth: 0,
        sklGrowth: 45,
        spdGrowth: 50,
        defGrowth: 40,
        resGrowth: 20,
        lckGrowth: 30,
      },
      formattedDescription:
        "A warrior with a guarded[NL]heart, ready to protect her[NL]newfound allies.[X]",
      formattedDeathQuote:
        "\n## RheaDeathText\n[ConversationText]\n[FarRight][LoadRhea]\nI never thought I'd fight for[NL]this...[....] but it's worth[NL]it.[A][X]",
      chapterJoined: 0,
    },
    {
      name: "Kael",
      gender: "male",
      personality:
        "Charismatic yet ruthless, he believes in power over harmony.",
      age: "mature adult",
      backstory:
        "Kael is a high-ranking member of the Shadowbound, driven by ambition and the desire to awaken the slumbering god Xerath. Once a guardian of peace, he twisted his beliefs of power to control the sigils for the Shadowbound's dark plans. He views Zyphira as a threat to his vision, determined to eliminate her and claim the sigils' power for himself.",
      firstSeenAs: "boss",
      physicalDescription:
        "Kael has short black hair styled sharply and dark blue eyes that pierce through his opponents. He wears an elaborate cloak adorned with sigils of darkness, merging elegance with menace.",
      inGameDescription:
        "A cunning commander of the Shadowbound, willing to do anything for power.",
      deathQuote: "You may have won today, but the shadows will rise again.",
      portraitMetadata: {
        originalImageName: "38.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 3,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "male",
        age: "young adult",
        hairColor: "black",
        eyeColor: "brown",
        vibe: "mysterious, calm, focused",
        clothing: "hooded cloak",
        accessories: "necklace",
      },
      csvData: {
        name: "Kael",
        nameTextPointer: "Kael_NameText",
        descriptionTextPointer: "Kael_DescText",
        characterNumber: "Kael",
        defaultClass: "Shaman",
        portrait: "KaelMug",
        isGeneric: false,
        affinity: "DarkAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "Drank",
        baseLevel: 1,
        baseHP: 20,
        basePwr: 5,
        baseMagic: 8,
        baseSkl: 6,
        baseSpd: 5,
        baseDef: 3,
        baseRes: 7,
        baseLck: 4,
        baseCon: 5,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 50,
        sklGrowth: 40,
        spdGrowth: 40,
        defGrowth: 20,
        resGrowth: 60,
        lckGrowth: 30,
        characterAbility2: "IsBoss",
      },
      formattedDescription:
        "A cunning commander of the[NL]Shadowbound, willing to do[NL]anything for power.[X]",
      formattedDeathQuote:
        "\n## KaelDeathText\n[ConversationText]\n[FarRight][LoadKael]\nYou may have won today, but[NL]the shadows will rise again.[A][X]",
      chapterJoined: 0,
    },
    {
      name: "Merrik",
      gender: "male",
      personality:
        "Conflicted and passionate, he struggles between duty and the urge to change.",
      age: "young adult",
      backstory:
        "Once a loyal guardian of Silvaara, Merrik watched as his people fell to corruption from the sigils. Disillusioned, he seeks power to protect his tribe, but the Shadowbound's whisperings tug at his heart, promising strength through darkness. His meeting with Zyphira will force him to question his path and the true meaning of power.",
      firstSeenAs: "enemy non-boss",
      physicalDescription:
        "Merrik has shoulder-length dark hair and a rugged appearance, with stern green eyes. He wears a mix of leather armor and natural foliage, making him blend into the forest around him.",
      inGameDescription:
        "A struggling guardian torn between light and darkness, seeking redemption.",
      deathQuote:
        "You… may have lost me, but my tribe will find a way to rise...",
      portraitMetadata: {
        originalImageName: "48.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 3,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "male",
        age: "young adult",
        hairColor: "black",
        eyeColor: "brown",
        vibe: "mysterious, calm, focused",
        clothing: "hooded cloak",
      },
      csvData: {
        name: "Merrik",
        nameTextPointer: "Merrik_NameText",
        descriptionTextPointer: "Merrik_DescText",
        characterNumber: "Merrik",
        defaultClass: "Shaman",
        portrait: "MerrikMug",
        isGeneric: false,
        affinity: "DarkAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "Drank",
        baseLevel: 1,
        baseHP: 18,
        basePwr: 5,
        baseMagic: 7,
        baseSkl: 6,
        baseSpd: 5,
        baseDef: 3,
        baseRes: 6,
        baseLck: 4,
        baseCon: 5,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 50,
        sklGrowth: 40,
        spdGrowth: 40,
        defGrowth: 20,
        resGrowth: 50,
        lckGrowth: 30,
      },
      formattedDescription:
        "A struggling guardian torn[NL]between light and darkness,[NL]seeking redemption.[X]",
      formattedDeathQuote:
        "\n## MerrikDeathText\n[ConversationText]\n[FarRight][LoadMerrik]\nYou… may have lost me, but my[NL]tribe will find a way to[NL]rise...[....][A][X]",
      chapterJoined: 1,
    },
    {
      name: "Thorn",
      gender: "male",
      personality:
        "Cold and calculating, he is fiercely loyal to the Shadowbound.",
      age: "mature adult",
      backstory:
        "Thorn is a ruthless enforcer of the Shadowbound’s will, known for his cunning strategies and brutal efficiency. Having sworn an oath to serve the Shadowbound, he believes that only through darkness can true strength be attained. He will stop at nothing to ensure Zyphira's failure in uniting the tribes.",
      firstSeenAs: "boss",
      physicalDescription:
        "Thorn has short cropped silver hair and sharp, angular features that give him an intimidating presence. He dresses in dark, form-fitting armor, with a cloak that flows like shadows around him.",
      inGameDescription:
        "A deadly enforcer of the Shadowbound, relentless in his hunt.",
      deathQuote: "You have only proven that we are stronger... in the dark.",
      portraitMetadata: {
        originalImageName: "66.png",
        eyeMouthOffsets: {
          eyeX: 4,
          eyeY: 3,
          mouthX: 4,
          mouthY: 5,
        },
        gender: "male",
        age: "young adult",
        hairColor: "silver",
        eyeColor: "red",
        vibe: "mysterious, elegant, powerful",
        clothing: "dark cloak with intricate designs",
        accessories: "ornate headpiece",
      },
      csvData: {
        name: "Thorn",
        nameTextPointer: "Thorn_NameText",
        descriptionTextPointer: "Thorn_DescText",
        characterNumber: "Thorn",
        defaultClass: "Shaman",
        portrait: "ThornMug",
        isGeneric: false,
        affinity: "DarkAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "Drank",
        baseLevel: 1,
        baseHP: 20,
        basePwr: 5,
        baseMagic: 8,
        baseSkl: 6,
        baseSpd: 7,
        baseDef: 4,
        baseRes: 6,
        baseLck: 5,
        baseCon: 6,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 50,
        sklGrowth: 40,
        spdGrowth: 50,
        defGrowth: 20,
        resGrowth: 40,
        lckGrowth: 30,
        characterAbility2: "IsBoss",
      },
      formattedDescription:
        "A deadly enforcer of the[NL]Shadowbound, relentless in his[NL]hunt.[X]",
      formattedDeathQuote:
        "\n## ThornDeathText\n[ConversationText]\n[FarRight][LoadThorn]\nYou have only proven that we[NL]are stronger...[....] in the[NL]dark.[A][X]",
      chapterJoined: 1,
    },
    {
      name: "Xerath",
      gender: "male",
      personality:
        "Ancient and powerful, he embodies destruction and temptation.",
      age: "elderly",
      backstory:
        "Xerath is the slumbering god, feared and revered by all in Eldralis. His reawakening threatens to blot out the light, giving the Shadowbound their ultimate weapon. Zyphira’s confrontation with him will determine not only her fate but the very future of her world.",
      firstSeenAs: "boss",
      physicalDescription:
        "Xerath is a towering figure clad in dark, flowing garments that seem to absorb light itself. His eyes glow with an eerie brilliance, and his presence is both majestic and terrifying.",
      inGameDescription:
        "The ancient deity of darkness and chaos, risen to reclaim his dominion.",
      deathQuote:
        "You may have hindered me... but darkness will always find a way.",
      portraitMetadata: {
        originalImageName: "31.png",
        eyeMouthOffsets: {
          eyeX: 2,
          eyeY: 2,
          mouthX: 2,
          mouthY: 4,
        },
        gender: "male",
        age: "young adult",
        hairColor: "silver",
        eyeColor: "red",
        vibe: "mysterious, elegant, intense",
        clothing: "dark hooded cloak",
        accessories: "headband",
      },
      csvData: {
        name: "Xerath",
        nameTextPointer: "Xerath_NameText",
        descriptionTextPointer: "Xerath_DescText",
        characterNumber: "Xerath",
        defaultClass: "Shaman",
        portrait: "XerathMug",
        isGeneric: false,
        affinity: "DarkAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "Drank",
        baseLevel: 1,
        baseHP: 30,
        basePwr: 5,
        baseMagic: 12,
        baseSkl: 6,
        baseSpd: 4,
        baseDef: 3,
        baseRes: 8,
        baseLck: 5,
        baseCon: 6,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 70,
        sklGrowth: 50,
        spdGrowth: 40,
        defGrowth: 20,
        resGrowth: 60,
        lckGrowth: 40,
        characterAbility2: "IsBoss",
      },
      formattedDescription:
        "The ancient deity of darkness[NL]and chaos, risen to reclaim[NL]his dominion.[X]",
      formattedDeathQuote:
        "\n## XerathDeathText\n[ConversationText]\n[FarRight][LoadXerath]\nYou may have hindered[NL]me...[....] but darkness will[NL]always find a way.[A][X]",
      chapterJoined: 2,
    },
    {
      name: "Zyphira",
      gender: "female",
      personality:
        "Determined and resourceful, with a touch of playful sarcasm.",
      age: "young adult",
      backstory:
        "Zyphira hails from the Valenor Plains, a place once filled with harmony, now marred by conflict over the ancient sigils. Growing up amidst the ruins of Aeloria, she was raised by a tribe that believed in the preservation of the old ways. Her innate affinity for the sigils allowed her to harness their power in ways others could not, but it also drew the attention of the Shadowbound. They sought to corrupt her gifts for their dark purposes, leaving her forever wary and seeking to protect her friends and homeland. Motivated by guilt for the loss of her childhood friend to the sigils' dark influence, Zyphira sets out on a quest to unite the fractured factions against the Shadowbound. Her journey is marked by moments of doubt, yet she remains vigilant, driven by hope.",
      firstSeenAs: "ally",
      physicalDescription:
        "Zyphira has long, flowing obsidian hair and bright green eyes that seem to shimmer with an inner light. She wears a combination of leather armor and traditional garments adorned with symbols of the sigils.",
      inGameDescription:
        "A gifted wielder of sigils, determined to unite Eldralis against the encroaching darkness.",
      deathQuote:
        "This can't be how it ends... I must protect the light... for them.",
      portraitMetadata: {
        originalImageName: "3.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 3,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "female",
        age: "young adult",
        hairColor: "black",
        eyeColor: "brown",
        vibe: "mysterious, elegant, confident",
        clothing: "elegant dress",
        accessories: "headband",
      },
      csvData: {
        name: "Zyphira",
        nameTextPointer: "Zyphira_NameText",
        descriptionTextPointer: "Zyphira_DescText",
        characterNumber: "Zyphira",
        defaultClass: "Mage_F",
        portrait: "ZyphiraMug",
        isGeneric: false,
        affinity: "LightAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "0",
        staffRank: "0",
        animaRank: "Drank",
        lightRank: "0",
        darkRank: "0",
        baseLevel: 1,
        baseHP: 18,
        basePwr: 2,
        baseMagic: 7,
        baseSkl: 5,
        baseSpd: 6,
        baseDef: 3,
        baseRes: 8,
        baseLck: 6,
        baseCon: 5,
        hpGrowth: 60,
        pwrGrowth: 20,
        magicGrowth: 70,
        sklGrowth: 50,
        spdGrowth: 50,
        defGrowth: 30,
        resGrowth: 60,
        lckGrowth: 40,
        characterAbility2: "IsLord",
      },
      formattedDescription:
        "A gifted wielder of sigils,[NL]determined to unite Eldralis[NL]against the encroaching[NL]darkness.[X]",
      formattedDeathQuote:
        "\n## ZyphiraDeathText\n[ConversationText]\n[FarRight][LoadZyphira]\nThis can't be how it[NL]ends...[....] I must protect[NL]the light...[....] for them.[A][X]",
      chapterJoined: 0,
    },
  ],
};

