import { StoryArc } from "@/types/ai/StoryArc.ts";

export const TEST_STORY_ARC: StoryArc = {
  premise:
    "In the fractured realm of Eldralis, Elara, a determined young herbalist, embarks on a quest to confront a dark sorcerer who threatens her village and seeks to awaken a slumbering god. Along her journey, she must navigate the rivalries between kingdoms, the allure of ancient sigils, and the shadowy order known as the Veil. With the fate of Eldralis hanging in the balance, Elara must unite unlikely allies and confront her own inner demons to restore peace to her world.",
  chapterIdeas: [
    {
      chapterTitle: "The Call to Adventure",
      newPlayableCharacters: [
        {
          name: "Kiran",
          gender: "male",
          personality: "Brash and adventurous, with a heart of gold.",
          age: "young adult",
          backstory:
            "Kiran hails from the Dragon Riders of Drakthar, where he trained to bond with dragons. He left his home to seek adventure and prove himself as a warrior. His impulsive nature often leads him into trouble, but his loyalty to friends is unwavering.",
          firstSeenAs: "ally",
          physicalDescription:
            "A tall young man with tousled dark hair and a confident grin, wearing leather armor.",
          inGameDescription: "A brash warrior with a heart of gold.",
          deathQuote: "I won't let this be the end... for my friends.",
        },
      ],
      boss: {
        name: "Sorren",
        gender: "male",
        personality: "Cunning and manipulative, with a thirst for power.",
        age: "mature adult",
        backstory:
          "Once a respected scholar in Aeloria, Sorren became obsessed with the sigils and their power. He turned to dark magic, seeking to awaken the slumbering god to gain ultimate strength. Now, he leads the Veil's efforts to plunge Eldralis into chaos.",
        firstSeenAs: "boss",
        physicalDescription:
          "A tall man with long, flowing robes and piercing eyes, exuding an aura of dark magic.",
        inGameDescription: "A cunning sorcerer seeking ultimate power.",
        deathQuote: "You... will regret this... the darkness will rise.",
      },
      preChapterScene:
        "Elara receives word that the dark sorcerer Sorren has been spotted near her village, corrupting the land. Determined to protect her home, she sets out to confront him, hoping to gather allies along the way. Kiran, a brash warrior from Drakthar, joins her on this perilous journey.",
      battleOverview:
        "Elara and Kiran must navigate through the corrupted Whispering Woods, battling Sorren's minions and facing the sorcerer himself. The objective is to defeat Sorren and cleanse the land of his dark magic.",
      postChapterScene:
        "After a fierce battle, Elara and Kiran manage to defeat Sorren, but not without consequences. The corruption lingers, and they realize that the threat of the Veil is far from over. With newfound determination, they set their sights on uncovering the truth behind the sigils and the slumbering god.",
    },
    {
      chapterTitle: "The Gathering Storm",
      newPlayableCharacters: [
        {
          name: "Lyra",
          gender: "female",
          personality:
            "Wise and calm, with a deep understanding of the sigils.",
          age: "mature adult",
          backstory:
            "Lyra is a scholar from Aeloria who has dedicated her life to studying the sigils and their effects. She witnessed the devastation caused by their misuse and seeks to prevent further chaos. Her knowledge of ancient magic makes her a valuable ally.",
          firstSeenAs: "ally",
          physicalDescription:
            "An older woman with silver hair and a serene expression, dressed in flowing robes.",
          inGameDescription: "A wise scholar with deep knowledge of sigils.",
          deathQuote: "Knowledge is power... but it must be used wisely.",
        },
      ],
      boss: {
        name: "Varek",
        gender: "male",
        personality: "Ruthless and ambitious, driven by a desire for power.",
        age: "mature adult",
        backstory:
          "Varek is a former member of the Council of Sigils who turned rogue, seeking to harness the power of the sigils for himself. He leads a faction of mercenaries and is determined to awaken the slumbering god to gain ultimate strength.",
        firstSeenAs: "boss",
        physicalDescription:
          "A muscular man with a scarred face and a commanding presence, clad in armor adorned with sigils.",
        inGameDescription:
          "A ruthless mercenary leader seeking ultimate power.",
        deathQuote:
          "You think this is the end? The darkness will always find a way.",
      },
      preChapterScene:
        "Elara and Kiran arrive in the Emerald City, seeking allies to combat the growing threat of the Veil. They meet Lyra, who shares her knowledge of the sigils and warns them of Varek's ambitions. Together, they plan to confront Varek and his mercenaries before it's too late.",
      battleOverview:
        "The heroes must infiltrate Varek's stronghold in the Emerald City, battling mercenaries and overcoming traps. The objective is to defeat Varek and prevent him from awakening the slumbering god.",
      postChapterScene:
        "After a hard-fought battle, Elara, Kiran, and Lyra manage to defeat Varek, but the threat of the Veil looms larger than ever. They learn of a hidden sigil that could either save or doom Eldralis. With urgency, they set out to find this sigil before it falls into the wrong hands.",
    },
    {
      chapterTitle: "The Final Confrontation",
      newPlayableCharacters: [
        {
          name: "Rhea",
          gender: "female",
          personality: "Fierce and determined, with a strong sense of justice.",
          age: "young adult",
          backstory:
            "Rhea is a member of the Dragon Riders of Drakthar, fiercely protective of her homeland. She has witnessed the devastation caused by the Veil and is determined to put an end to their plans. Her bond with her dragon makes her a formidable ally.",
          firstSeenAs: "ally",
          physicalDescription:
            "A young woman with fiery red hair and a determined gaze, wearing dragon rider armor.",
          inGameDescription:
            "A fierce dragon rider ready to fight for justice.",
          deathQuote: "For my homeland... I will not fall!",
        },
      ],
      boss: {
        name: "Malik",
        gender: "male",
        personality: "Charismatic and manipulative, a master of deception.",
        age: "mature adult",
        backstory:
          "Malik is the leader of the Veil, a shadowy order seeking to awaken the slumbering god. He uses his charm and cunning to manipulate others into doing his bidding, believing that chaos is the path to true power.",
        firstSeenAs: "boss",
        physicalDescription:
          "A charismatic man with a charming smile and an air of confidence, dressed in dark robes.",
        inGameDescription:
          "The charismatic leader of the Veil, shrouded in mystery.",
        deathQuote:
          "You may have won this battle, but the darkness will always return.",
      },
      preChapterScene:
        "With the hidden sigil in their possession, Elara, Kiran, Lyra, and Rhea prepare for the final confrontation against Malik and the Veil. They gather their allies and strategize for the impending battle, knowing that the fate of Eldralis hangs in the balance. As they approach the Veil's stronghold, the weight of their mission settles heavily upon them.",
      battleOverview:
        "In a climactic battle against Malik and the Veil, the heroes must use their combined strength and knowledge to defeat the dark forces. The objective is to stop Malik from awakening the slumbering god and save Eldralis from eternal darkness.",
      postChapterScene:
        "After a fierce battle, Elara and her allies manage to defeat Malik, preventing the awakening of the slumbering god. However, the scars of conflict remain, and the kingdoms of Eldralis must now work together to heal and rebuild. Elara, having discovered her true potential, vows to protect her homeland and ensure that the power of the sigils is used for good.",
    },
  ],
};
