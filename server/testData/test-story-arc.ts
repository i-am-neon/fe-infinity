import { StoryArc } from "@/types/ai/StoryArc.ts";

export const TEST_STORY_ARC: StoryArc = {
  premise:
    "In the fractured realm of Eldralis, Elara, a determined young herbalist, embarks on a quest to confront a dark sorcerer who threatens her village and the balance of nature. As she navigates the rival kingdoms and their corrupting sigils, she must unite unlikely allies and confront the shadowy order known as the Veil, who seek to awaken a slumbering god. Along her journey, Elara will discover her own potential and the truth about her family's past, ultimately facing the darkness that looms over Eldralis.",
  chapterIdeas: [
    {
      chapterTitle: "The Call to Adventure",
      premise:
        "Elara sets out from her village to seek help from the Council of Sigils in Valoria, hoping to find a way to stop the dark sorcerer. Along the way, she encounters a group of scavengers from Nerathis who are also seeking the sigils for their own purposes. As tensions rise, Elara must navigate the complexities of trust and betrayal while facing the first of the Veil's agents.",
      newPlayableCharacters: [
        {
          name: "Kira",
          gender: "female",
          personality: "Cunning and resourceful, with a knack for survival.",
          age: "young adult",
          backstory:
            "Kira grew up in the harsh wasteland of Nerathis, learning to fend for herself from a young age. She became a scavenger, trading rare artifacts for food and supplies, but dreams of a better life beyond the wasteland. Her knowledge of the sigils and their hidden locations makes her a valuable ally, but her past makes her wary of trusting others.",
          firstSeenAs: "ally",
          physicalDescription:
            "A scrappy young woman with short, messy hair and a collection of mismatched clothing.",
          inGameDescription:
            "A resourceful scavenger with a sharp wit and a hidden heart of gold.",
          deathQuote: "I won't let this be the end... not yet.",
        },
      ],
      boss: {
        name: "Malik",
        gender: "male",
        personality: "Ruthless and ambitious, driven by a desire for power.",
        age: "mature adult",
        backstory:
          "Once a respected member of the Council of Sigils, Malik turned to the Veil after becoming disillusioned with their ideals. He seeks to harness the power of the sigils for himself, believing that only through chaos can true strength be achieved. His mastery of dark magic makes him a formidable foe.",
        firstSeenAs: "boss",
        physicalDescription:
          "A tall man with a commanding presence, clad in dark robes adorned with sigils.",
        inGameDescription:
          "A former council member turned dark sorcerer, seeking power at any cost.",
        deathQuote: "You... will regret this...",
      },
      preChapterScene:
        "Elara receives word of the dark sorcerer's growing power and decides to seek help from the Council of Sigils. As she travels through the Whispering Woods, she encounters Kira, a scavenger with knowledge of the sigils. Together, they make their way to Valoria, unaware of the dangers that lie ahead.",
      battleOverview:
        "The chapter takes place in the outskirts of Valoria, where Elara and Kira must fend off Malik's minions while trying to reach the Council. The objective is to defeat Malik and his forces to secure safe passage to the Emerald City.",
      postChapterScene:
        "After defeating Malik, Elara and Kira arrive at the Emerald City, where they are welcomed by the Council of Sigils. Elara shares her concerns about the dark sorcerer and the Veil, gaining the council's support for her quest. However, the council warns her that the path ahead will be fraught with danger and temptation.",
    },
    {
      chapterTitle: "The Trials of Trust",
      premise:
        "With the Council's support, Elara and Kira venture into the Dragon's Roost to seek the aid of the Dragon Riders of Drakthar. However, they must prove their worth by facing a series of trials set by the dragon riders, testing their strength and resolve. As they navigate the trials, they uncover a plot by the Veil to sabotage their efforts and awaken the slumbering god.",
      newPlayableCharacters: [
        {
          name: "Ronan",
          gender: "male",
          personality: "Brave and loyal, with a strong sense of honor.",
          age: "young adult",
          backstory:
            "Ronan is a dragon rider from Drakthar, known for his fierce loyalty to his comrades and his bond with his dragon, Ember. He has trained for years to protect his homeland from outside threats, but he is also haunted by the loss of friends in battle. His determination to protect those he cares about drives him to join Elara's quest.",
          firstSeenAs: "ally",
          physicalDescription:
            "A tall, muscular man with fiery red hair and a confident demeanor.",
          inGameDescription:
            "A dragon rider with a fierce spirit and a heart of gold.",
          deathQuote: "I won't let you down... not now.",
        },
      ],
      boss: {
        name: "Thorne",
        gender: "male",
        personality: "Cunning and manipulative, with a hidden agenda.",
        age: "mature adult",
        backstory:
          "Thorne is a high-ranking member of the Veil, posing as a dragon rider to infiltrate Drakthar. He seeks to awaken the slumbering god to gain ultimate power, using the trials as a distraction to further his plans. His mastery of deception makes him a dangerous adversary.",
        firstSeenAs: "boss",
        physicalDescription:
          "A charismatic man with sharp features and a sly smile, often dressed in dragon rider attire.",
        inGameDescription:
          "A dragon rider with a hidden agenda, seeking to awaken the slumbering god.",
        deathQuote:
          "You may have won this battle, but the war is far from over.",
      },
      preChapterScene:
        "Elara and Kira arrive at the Dragon's Roost, where they are greeted by Ronan and the other dragon riders. To gain their trust, they must complete a series of trials that test their strength and resolve. However, unbeknownst to them, Thorne is watching their every move, plotting to sabotage their efforts.",
      battleOverview:
        "The chapter takes place in the Dragon's Roost, where Elara, Kira, and Ronan must complete various trials while fending off Thorne's minions. The objective is to defeat Thorne and prove their worth to the dragon riders.",
      postChapterScene:
        "After defeating Thorne, Elara and her allies earn the trust of the dragon riders, who agree to aid them in their quest. Ronan joins their party, bringing his dragon Ember along for the journey. With newfound allies, they set their sights on the Veil's stronghold, determined to stop the awakening of the slumbering god.",
    },
    {
      chapterTitle: "The Final Confrontation",
      premise:
        "Elara and her allies infiltrate the Veil's stronghold, where they confront the leader of the Veil and the dark sorcerer who has been plaguing Eldralis. As they battle against overwhelming odds, Elara must confront her own fears and doubts, ultimately discovering her true potential. The fate of Eldralis hangs in the balance as they face the darkness that threatens to consume their world.",
      newPlayableCharacters: [],
      boss: {
        name: "Lucian",
        gender: "male",
        personality: "Charismatic and ruthless, with a vision for a new world.",
        age: "elderly",
        backstory:
          "Lucian is the enigmatic leader of the Veil, a master manipulator who seeks to awaken the slumbering god to reshape Eldralis in his image. He believes that only through chaos can true power be attained, and he will stop at nothing to achieve his goals. His cunning and charisma make him a formidable foe.",
        firstSeenAs: "boss",
        physicalDescription:
          "An elderly man with a commanding presence, dressed in dark robes adorned with sigils.",
        inGameDescription:
          "The charismatic leader of the Veil, seeking to awaken the slumbering god.",
        deathQuote: "You may have defeated me, but my vision will live on.",
      },
      preChapterScene:
        "Elara and her allies prepare to infiltrate the Veil's stronghold, knowing that the final confrontation with Lucian and the dark sorcerer awaits. As they gather their strength, Elara reflects on her journey and the friends she has made along the way. With determination in her heart, she leads her allies into the heart of darkness.",
      battleOverview:
        "The chapter takes place in the Veil's stronghold, where Elara and her allies must battle against Lucian and the dark sorcerer. The objective is to defeat both bosses and prevent the awakening of the slumbering god.",
      postChapterScene:
        "After a fierce battle, Elara and her allies emerge victorious, stopping the awakening of the slumbering god and saving Eldralis from darkness. With the threat of the Veil diminished, Elara returns to her village, forever changed by her journey. She vows to protect the balance of nature and ensure that the power of the sigils is used for good.",
    },
  ],
};

