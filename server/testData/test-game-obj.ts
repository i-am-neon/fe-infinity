import { Game } from "@/types/Game.ts";

export const TEST_GAME: Game = {
  chapters: [
    {
      chapterId: "the_corrupted_fields",
      displayName: "Prologue: The Corrupted Fields",
      number: 0,
      chapterDataForCsv: {
        chapterName: "the_corrupted_fields",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "Knights12_Map",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "Knights12_Changes",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "the_corrupted_fields",
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
        chapterNameID: "the_corrupted_fields_NameText",
        chapterNameID2: "the_corrupted_fields_NameText",
        eventDataReference: "the_corrupted_fields_EventDataReference",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "the_corrupted_fields_StatusText",
        goalWindowText: "DefeatAllText",
        goalWindowInformation: "EnemyCountGoal",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
      chapterEvent: {
        eventDataReference: "the_corrupted_fields_EventDataReference",
        miscBasedEvents: "DefeatAll(EndingScene)",
        units:
          "UNIT Liora Archer_F 0x00 Level(19, Ally, True) [0, 3] 0x00 0x00 0x0 0x00 [IronBow, Vulnerary, AngelicRobe] NoAI\nUNIT Valenor Mage 0x00 Level(17, Ally, True) [5, 2] 0x00 0x00 0x0 0x00 [Arcfire, Vulnerary, PureWater, Tempest] NoAI\nUNIT Garrick Shaman Garrick Level(1, Enemy, True) [3, 6] 0x00 0x00 0x0 0x00 [Flux, Vulnerary, Eclipse] GuardTileAI",
        beginningScene:
          "LOAD1 0x1 Units\nMUSC Legends_of_Avenir\nText(Outside_Village_Day,the_corrupted_fields_PreBattleScene)\nFadeOutMusic",
        endingScene:
          "Text(Outside_Village_Day,the_corrupted_fields_PostBattleScene)\nMoveToChapter(clash_of_clans)",
        localDefinitions: [""],
        text: "## the_corrupted_fields_PreBattleScene\n[ConversationText]\n[FarLeft][LoadValenor][FarRight][LoadLiora]\nValenor! Look at what has become of our village!\n[FarLeft]I know, Liora. The fields are tainted, and the villagers are in despair.\n[FarRight]This darkness... it spreads like a plague. We must do something!\n[FarLeft]We will confront this threat together. I refuse to let Garrick's tyranny destroy our home.\n[FarRight]But how? He commands dark creatures now. We need a plan.\n[FarLeft]We gather the villagers, rally their spirits. They need hope now more than ever.\n[FarRight]And we will fight back! For Valoria!\n[FarLeft]Yes, for Valoria! Together, we will restore the land and protect our people from this corruption.[X]\n\n## the_corrupted_fields_PostBattleScene\n[ConversationText]\n[MidLeft][LoadValenor][MidRight][LoadLiora]\nLiora! We did it! Garrick has been defeated!\n[MidLeft]I can't believe it, Valenor. The village is finally free from his grasp.\n[MidRight]Look! The Verdant Sigil is starting to restore the land. It's beautiful!\n[MidLeft]The villagers will be so grateful. We should gather them and let them know they are safe now.\n[MidRight]Yes, and we must tell them about our next steps. Drakthar is still under threat from the corruption.\n[MidLeft]Right. We need their support if we are to confront the darkness there.\n[MidRight]Together, we can make a difference. Let's go! [CloseSpeech][MoveLeft][FarLeft][LoadVillagerMan1]\n[FarLeft]Thank you, Valenor and Liora! You have saved us!\n[MidLeft]It was our duty. We couldn't stand by while Garrick terrorized your home.\n[FarLeft]We pledge our support to you! We will help you in any way we can!\n[MidRight]Your bravery will not be forgotten. With your help, we can restore balance to Eldralis.\n[MidLeft]Let's unite our strength and face the challenges ahead. Together, we will overcome the darkness![X]",
      },
      chapterMap: {
        name: "Knights12",
        tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01000203.png" width="512" height="512"/>\n </tileset>\n <layer name="Main" width="15" height="17">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="the_corrupted_fields"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Knights12_Changes"/>\n   <property name="MapID" value="Knights12_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x02"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxdk01LlFEUx++dh/BlkYISpG4lFRyl2pS2UsFxVuFHmBF1dCN+hGmMSEL7CukYgq8Lv4JBoBmUfQMXiePGkmjh73D+wzy4+HGfe8495/zPufeZDiE8gWnYhrNMCJuss7As32vYTULYg32o6twa6w4MwyKMQS/+POtbKMl+gu0UvsEb9p9Uq6LvCdlPYSGVz2pc4avBNXzF1hHd15a4/4zvSWz56PsHpi/jWqyPdfgOLfhfQVH2caufuP2K7xWDuGPW5uh1DoLnr3LuVnrKOmv2A+UxLf+VP83H4OtI9P76ONcPA3AhXef4jmKjRhfffxVn+z9QsB7x52Aqaei4SdXqhvPg60t4BDfSNgfzUEp8Lqv4/sVGjceq/0v1fsILbBvq8xA62T+MPs8jxdr5Uem1PD+0Nx1F1bZZXSiHzWsQ/7OUbsvRoxjbP4/+huyN1d/RJNRgRndQS+V5Cn2QjT4Ti2mHXPD3OaT5WR/vo99X+d5dVKX1nd78Z9iCrOxF9fBFd5++i4rek9XZQdsH2M14zg39D/UZWnz6Lupa63HN9h6hNXGNY+rXNOfQPqE3mVd/TaY104g3nVa7IN0FafgNl5rhkv5p+//uAB6ufEQ=\n  </data>\n </layer>\n <layer name="Left Village Destroyed" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgF9AIdzAwMnUDcxUy63hVAPSuBeBUZek8A9ZwE4lNk6B0FwxcAANNMBg0=\n  </data>\n </layer>\n <layer name="Left Village Visited" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFIwEoDrQDRsGgAwBIkAAi\n  </data>\n </layer>\n <layer name="Right Village Destroyed" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DkgQ5mBoZOIO5iJl3vCqCelUC8igy9J4B6TgLxKTL0UhsAAHg1Bg0=\n  </data>\n </layer>\n <layer name="Right Village Visited" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0BMoDrQDoAAAFYQAIg==\n  </data>\n </layer>\n</map>\n',
      },
      genericCharacters: [],
    },
    {
      chapterId: "clash_of_clans",
      displayName: "Ch 1: Clash of Clans",
      number: 1,
      chapterDataForCsv: {
        chapterName: "clash_of_clans",
        chapterNumberPointer: "0x0",
        objectType: "0x0",
        palette: "0x0",
        tileConfiguration: "0x0",
        mapId: "Knights10_Map",
        tileAnimation1: "0x0",
        tileAnimation2: "0x0",
        triggerableMapChanges: "Knights10_Changes",
        fogOfWarSightLevel: 0,
        gasTrapLevel: 4,
        battlePreparations: 0,
        chapterID: "clash_of_clans",
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
        chapterNameID: "clash_of_clans_NameText",
        chapterNameID2: "clash_of_clans_NameText",
        eventDataReference: "clash_of_clans_EventDataReference",
        worldmapChapterPrologueScene: "0x1",
        prepScreenNumberTimes2: 4,
        chapterTitleDisplayFadeOut: "0x1",
        statusObjectiveTextPointer: "clash_of_clans_StatusText",
        goalWindowText: "DefeatAllText",
        goalWindowInformation: "EnemyCountGoal",
        turnsToCountDownToPlus1: 0,
        tileMarkerXCoordinate: 255,
        tileMarkerYCoordinate: 0,
      },
      chapterEvent: {
        eventDataReference: "clash_of_clans_EventDataReference",
        miscBasedEvents: "DefeatAll(EndingScene)",
        units:
          "UNIT Liora Archer_F 0x00 Level(16, Ally, True) [0, 2] 0x00 0x00 0x0 0x00 [IronBow, Vulnerary, AngelicRobe] NoAI\nUNIT Valenor Mage 0x00 Level(15, Ally, True) [1, 1] 0x00 0x00 0x0 0x00 [Elfire, Vulnerary, PureWater, Tempest] NoAI\nUNIT Korrin Fighter 0x00 Level(19, Ally, True) [5, 0] 0x00 0x00 0x0 0x00 [SteelAxe, Vulnerary, Torch] NoAI\nUNIT Thalia Shaman_F Thalia Level(1, Enemy, True) [5, 1] 0x00 0x00 0x0 0x00 [Flux, Vulnerary, Torch] GuardTileAI",
        beginningScene:
          "LOAD1 0x1 Units\nMUSC Legends_of_Avenir\nText(Outside_Village_Day,clash_of_clans_PreBattleScene)\nFadeOutMusic",
        endingScene:
          "Text(Outside_Village_Evening,clash_of_clans_PostBattleScene)",
        localDefinitions: [""],
        text: "## clash_of_clans_PreBattleScene\n[ConversationText]\n[MidLeft][LoadValenor][MidRight][LoadKorrin][FarRight][LoadLiora]\nValenor! We have arrived in Drakthar.\n[MidLeft]Indeed, but the air is thick with tension. The clans are at each other's throats.\n[MidRight]We must find a way to unite them. If we don't, Thalia will only grow stronger.\n[FarRight]I agree. We can't let her manipulate the clans any longer. They need to see that they are stronger together.\n[MidLeft]Korrin, you know your people best. How can we reach them?\n[MidRight]I can gather the clan leaders. If we present a united front, they may listen.\n[FarRight]Then it's settled. We will confront Thalia and put an end to her reign of fear.\n[MidLeft]Let's move quickly. Time is not on our side.[X]\n\n## clash_of_clans_PostBattleScene\n[ConversationText]\n[MidLeft][LoadValenor][MidRight][LoadKorrin][FarRight][LoadLiora]\nValenor! We did it! Thalia is defeated!\n[MidLeft]Yes, but the battle has only just begun. We must unite the clans of Drakthar.\n[MidRight]I agree. If we don't act quickly, the Cult of the Slumbering God will take advantage of our disarray.\n[FarRight]We can't let that happen! Together, we can restore honor to our people!\n[MidLeft]Korrin, your strength will be vital in this quest. Will you join us?\n[MidRight]I will! For my clan and for the future of Drakthar!\n[FarRight]Then let's prepare to leave. We have much to do and little time to waste.[X]",
      },
      chapterMap: {
        name: "Knights10",
        tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>\n </tileset>\n <layer name="Main" width="20" height="18">\n  <properties>\n   <property name="Main" value=""/>\n   <property name="Anims" value="_3CAnims"/>\n   <property name="ChapterID" value="clash_of_clans"/>\n   <property name="MapChangesID" value="Knights10_Changes"/>\n   <property name="MapID" value="Knights10_Map"/>\n   <property name="ObjectType" value="0x3C"/>\n   <property name="PaletteID" value="0xCE"/>\n   <property name="TileConfig" value="0x3E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=\n  </data>\n </layer>\n <layer name="Broken_Wall" width="20" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="3"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYEAAYWYGhk9MDKNgFIyCUTAKBgEAAM3eAQs=\n  </data>\n </layer>\n <layer name="Left Chest" width="20" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYKA+cKKBmaNgFIyCUTDSAABjRwBD\n  </data>\n </layer>\n <layer name="Right Chest" width="20" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0AM4DbQDRsGQAwCXCABD\n  </data>\n </layer>\n <layer name="Door" width="20" height="18" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="18"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjHSwjpGBQZCZeuZZAs0yo6J5IxUAANEhATk=\n  </data>\n </layer>\n</map>\n',
      },
      genericCharacters: [],
    },
  ],
  characters: [
    {
      name: "Liora",
      gender: "female",
      personality:
        "Courageous and fiercely loyal, Liora is a skilled archer with a strong sense of justice. She often acts as the voice of reason among her peers, advocating for the protection of their homeland.",
      age: "young adult",
      backstory:
        "Liora grew up in Valoria, where she trained as a ranger under the guidance of her father, a respected member of the Order of the Verdant Sigil. After witnessing the devastation caused by the corruption of the sigils, she vowed to fight against the darkness that threatens her home. Her determination to protect her people drives her to join Valenor on his quest, believing that together they can restore balance to the land.",
      firstSeenAs: "ally",
      description:
        "Liora is a young woman with long, flowing auburn hair and sharp blue eyes that seem to pierce through the shadows. She wears a green tunic and leather armor, allowing her to move swiftly through the forest. Her trusty bow is always at her side, ready to defend her friends and homeland.",
      portraitMetadata: {
        originalImageName: "4.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "female",
        age: "young adult",
        hairColor: "brown",
        eyeColor: "green",
        vibe: "gentle, cheerful, hopeful",
        clothing: "green dress",
        accessories: "hair flower",
      },
      csvData: {
        name: "Liora",
        nameTextPointer: "Liora_NameText",
        descriptionTextPointer: "Liora_DescText",
        characterNumber: "Liora",
        defaultClass: "Archer_F",
        portrait: "LioraMug",
        isGeneric: false,
        affinity: "WindAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "0",
        bowRank: "Drank",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "0",
        baseLevel: 1,
        baseHP: 20,
        basePwr: 6,
        baseMagic: 0,
        baseSkl: 7,
        baseSpd: 8,
        baseDef: 4,
        baseRes: 2,
        baseLck: 5,
        baseCon: 5,
        hpGrowth: 60,
        pwrGrowth: 50,
        magicGrowth: 0,
        sklGrowth: 70,
        spdGrowth: 65,
        defGrowth: 30,
        resGrowth: 20,
        lckGrowth: 50,
      },
      formattedDescription: "TODO: Desc text[X]",
      formattedDeathQuote: "TODO: death quote[X]",
      chapterJoined: 0,
    },
    {
      name: "Garrick",
      gender: "male",
      personality:
        "Ruthless and power-hungry, Garrick is a former knight of Valoria who has succumbed to the corruption of the Verdant Sigil. He believes that by harnessing the sigil's power, he can become a ruler worthy of fear and respect.",
      age: "mature adult",
      backstory:
        "Once a noble knight, Garrick was tasked with protecting Valoria from external threats. However, the allure of the sigil's power led him to betray his comrades, seeking to control the corruption for his own gain. Now, he commands a band of corrupted creatures, spreading fear and chaos throughout the land.",
      firstSeenAs: "boss",
      description:
        "Garrick is a tall, imposing figure clad in dark armor that seems to absorb light. His once noble features are twisted by corruption, with glowing green veins visible beneath his skin. He wields a massive sword, infused with the dark energy of the sigil.",
      portraitMetadata: {
        originalImageName: "22.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "male",
        age: "young adult",
        hairColor: "red",
        eyeColor: "green",
        vibe: "mysterious, confident, noble",
        clothing: "purple and red armor",
        accessories: "none",
      },
      csvData: {
        name: "Garrick",
        nameTextPointer: "Garrick_NameText",
        descriptionTextPointer: "Garrick_DescText",
        characterNumber: "Garrick",
        defaultClass: "Shaman",
        portrait: "GarrickMug",
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
        baseHP: 22,
        basePwr: 5,
        baseMagic: 10,
        baseSkl: 6,
        baseSpd: 5,
        baseDef: 4,
        baseRes: 8,
        baseLck: 3,
        baseCon: 7,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 70,
        sklGrowth: 50,
        spdGrowth: 40,
        defGrowth: 20,
        resGrowth: 60,
        lckGrowth: 25,
        characterAbility2: "IsBoss",
      },
      formattedDescription: "TODO: Desc text[X]",
      formattedDeathQuote: "TODO: death quote[X]",
      chapterJoined: 0,
    },
    {
      name: "Korrin",
      gender: "male",
      personality:
        "Headstrong and fiercely loyal to his clan, Korrin is a warrior who values honor above all else. He is quick to anger but possesses a strong sense of justice.",
      age: "young adult",
      backstory:
        "Korrin hails from the Draconic Clans of Drakthar, where he was raised to be a warrior. His clan has been torn apart by infighting due to the corruption of the Draconic Sigil, leading him to seek a way to unite the clans against their common enemy. Korrin believes that Valenor's quest may be the key to restoring honor and strength to his people.",
      firstSeenAs: "ally",
      description:
        "Korrin is a muscular young man with short, spiky black hair and fierce brown eyes. He wears rugged armor adorned with the symbols of his clan, and carries a large axe that reflects his warrior spirit.",
      portraitMetadata: {
        originalImageName: "33.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
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
        name: "Korrin",
        nameTextPointer: "Korrin_NameText",
        descriptionTextPointer: "Korrin_DescText",
        characterNumber: "Korrin",
        defaultClass: "Fighter",
        portrait: "KorrinMug",
        isGeneric: false,
        affinity: "FireAff",
        swordRank: "0",
        lanceRank: "0",
        axeRank: "Drank",
        bowRank: "0",
        staffRank: "0",
        animaRank: "0",
        lightRank: "0",
        darkRank: "0",
        baseLevel: 1,
        baseHP: 22,
        basePwr: 8,
        baseMagic: 0,
        baseSkl: 6,
        baseSpd: 7,
        baseDef: 7,
        baseRes: 2,
        baseLck: 5,
        baseCon: 10,
        hpGrowth: 70,
        pwrGrowth: 60,
        magicGrowth: 0,
        sklGrowth: 50,
        spdGrowth: 50,
        defGrowth: 55,
        resGrowth: 20,
        lckGrowth: 40,
      },
      formattedDescription: "TODO: Desc text[X]",
      formattedDeathQuote: "TODO: death quote[X]",
      chapterJoined: 1,
    },
    {
      name: "Thalia",
      gender: "female",
      personality:
        "Cunning and manipulative, Thalia is a powerful warlord who has embraced the corruption of the Draconic Sigil. She seeks to dominate the clans and eliminate any who oppose her rule.",
      age: "mature adult",
      backstory:
        "Once a respected leader among the clans, Thalia succumbed to the corruption of the sigil, believing that power is the only way to ensure her clan's survival. She has rallied a faction of warriors to her side, using fear and intimidation to maintain control. Thalia's ambition knows no bounds, and she will stop at nothing to achieve her goals.",
      firstSeenAs: "boss",
      description:
        "Thalia is a tall, imposing woman with long, dark hair and piercing gray eyes that seem to see through to one's soul. She wears ornate armor that reflects her status as a warlord, and wields a spear that crackles with dark energy.",
      portraitMetadata: {
        originalImageName: "47.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
          mouthX: 3,
          mouthY: 5,
        },
        gender: "female",
        age: "young adult",
        hairColor: "black",
        eyeColor: "brown",
        vibe: "determined, confident, focused",
        clothing: "red military uniform",
      },
      csvData: {
        name: "Thalia",
        nameTextPointer: "Thalia_NameText",
        descriptionTextPointer: "Thalia_DescText",
        characterNumber: "Thalia",
        defaultClass: "Shaman_F",
        portrait: "ThaliaMug",
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
        baseMagic: 10,
        baseSkl: 6,
        baseSpd: 5,
        baseDef: 4,
        baseRes: 8,
        baseLck: 7,
        baseCon: 5,
        hpGrowth: 60,
        pwrGrowth: 30,
        magicGrowth: 50,
        sklGrowth: 40,
        spdGrowth: 35,
        defGrowth: 25,
        resGrowth: 60,
        lckGrowth: 45,
        characterAbility2: "IsBoss",
      },
      formattedDescription: "TODO: Desc text[X]",
      formattedDeathQuote: "TODO: death quote[X]",
      chapterJoined: 1,
    },
    {
      name: "Valenor",
      gender: "male",
      personality:
        "Determined, empathetic, and wise beyond his years, Valenor's presence is both calming and inspiring. He possesses a strong moral compass and has a soft spot for those who are suffering due to the corruption in Eldralis.",
      age: "young adult",
      backstory:
        "Valenor hails from the lush fields of Valoria, where he grew up in a small village that thrived on the harmony between man and nature. As a child, he showed an affinity for the Verdant Sigil, a legacy from his ancestors who were once guardians of its power. However, as the corruption spread, he lost his family to the dark forces that twisted the sigil's essence. This traumatic event ignited a fire within him—a determination to protect his homeland and restore balance to nature. While strong-willed and brave, Valenor often struggles with feelings of inadequacy, fearing that he may not be powerful enough to make a difference. His journey will lead him to forge alliances with the divided clans of Drakthar and diplomats from Nerathis, all striving to stand against the shadowy Cult of the Slumbering God. Ultimately, he seeks to uncover the truth behind the ancient sigils and their connection to Eldralis's fractured state, hoping to unite the kingdoms and confront the darkness threatening to engulf their world. Valenor's heart lies in restoring harmony, not just for himself but for all who suffer from the corruption of the sigils as he yearns for a world where nature and humanity coexist peacefully again.",
      firstSeenAs: "ally",
      description:
        "Valenor is a young man with tousled dark hair and piercing green eyes that reflect his connection to nature. He wears practical yet elegant clothing adorned with symbols of the Verdant Sigil, a reminder of his responsibilities. His demeanor radiates determination, and he often carries a staff made from a gnarled branch, imbued with the essence of the ancient woods.",
      portraitMetadata: {
        originalImageName: "10.png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
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
        name: "Valenor",
        nameTextPointer: "Valenor_NameText",
        descriptionTextPointer: "Valenor_DescText",
        characterNumber: "Valenor",
        defaultClass: "Mage",
        portrait: "ValenorMug",
        isGeneric: false,
        affinity: "AnimaAff",
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
        baseMagic: 6,
        baseSkl: 5,
        baseSpd: 6,
        baseDef: 3,
        baseRes: 7,
        baseLck: 4,
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
      formattedDescription: "TODO: Desc text[X]",
      formattedDeathQuote: "TODO: death quote[X]",
      chapterJoined: 0,
    },
  ],
};
