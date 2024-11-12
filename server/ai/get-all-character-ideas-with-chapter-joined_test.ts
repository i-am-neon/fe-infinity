import { assertEquals } from "@std/assert/equals";
import type { StoryArc } from "@/types/ai/StoryArc.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import getAllCharacterIdeasWithChapterJoinedAndIsLord from "@/ai/get-all-character-ideas-with-chapter-joined.ts";

// Mock data for testing
const mockMainCharacter: CharacterIdea = {
  name: "Eirika",
  gender: "female",
  personality: "Brave and compassionate",
  age: "young adult",
  backstory: "Eirika hails from the royal family...",
  firstSeenAs: "ally",
  description: "Eirika has long blue hair and a determined gaze.",
};

const mockPlayableCharacter1: CharacterIdea = {
  name: "Franz",
  gender: "male",
  personality: "Loyal and eager",
  age: "young adult",
  backstory: "A young knight serving the royal family...",
  firstSeenAs: "ally",
  description: "Franz is a young man with short blonde hair.",
};

const mockPlayableCharacter2: CharacterIdea = {
  name: "Vanessa",
  gender: "female",
  personality: "Confident and protective",
  age: "young adult",
  backstory: "A skilled pegasus knight from the kingdom...",
  firstSeenAs: "ally",
  description: "Vanessa has red hair and wears light armor.",
};

const mockBossCharacter1: CharacterIdea = {
  name: "Valter",
  gender: "male",
  personality: "Cruel and ruthless",
  age: "mature adult",
  backstory: "A fearsome general known for his cruelty...",
  firstSeenAs: "boss",
  description: "Valter wears dark armor and has a menacing expression.",
};

const mockBossCharacter2: CharacterIdea = {
  name: "Valter2",
  gender: "male",
  personality: "Cruel and ruthless",
  age: "mature adult",
  backstory: "A fearsome general known for his cruelty...",
  firstSeenAs: "boss",
  description: "Valter wears dark armor and has a menacing expression.",
};

const mockStoryArc: StoryArc = {
  premise: "A war-torn kingdom faces a new threat.",
  chapterIdeas: [
    {
      chapterTitle: "Prologue",
      newPlayableCharacters: [mockPlayableCharacter1],
      boss: mockBossCharacter1,
      preChapterScene: "Introduction scene...",
      battleOverview: "A brief skirmish at the border.",
      postChapterScene: "The dust settles...",
    },
    {
      chapterTitle: "Chapter 1",
      newPlayableCharacters: [mockPlayableCharacter2],
      boss: mockBossCharacter2,
      preChapterScene: "A new threat emerges...",
      battleOverview: "The fight intensifies.",
      postChapterScene: "A temporary victory...",
    },
  ],
};

Deno.test(
  "Returns all character ideas with correct chapterJoined values",
  () => {
    const result = getAllCharacterIdeasWithChapterJoinedAndIsLord({
      storyArc: mockStoryArc,
      mainCharacterIdea: mockMainCharacter,
    });

    const expected = [
      { idea: mockPlayableCharacter1, chapterJoined: 0 },
      { idea: mockBossCharacter1, chapterJoined: 0 },
      { idea: mockPlayableCharacter2, chapterJoined: 1 },
      { idea: mockBossCharacter2, chapterJoined: 1 },
      { idea: mockMainCharacter, chapterJoined: 0 },
    ];

    assertEquals(result, expected);
  }
);

Deno.test("Includes main character as joined in chapter 0", () => {
  const result = getAllCharacterIdeasWithChapterJoinedAndIsLord({
    storyArc: mockStoryArc,
    mainCharacterIdea: mockMainCharacter,
  });

  const mainCharacterEntry = result.find(
    (entry) => entry.idea.name === mockMainCharacter.name
  );

  assertEquals(mainCharacterEntry?.chapterJoined, 0);
});

Deno.test("Handles empty chapter ideas array", () => {
  const emptyStoryArc: StoryArc = {
    premise: "An empty arc",
    chapterIdeas: [],
  };

  const result = getAllCharacterIdeasWithChapterJoinedAndIsLord({
    storyArc: emptyStoryArc,
    mainCharacterIdea: mockMainCharacter,
  });

  const expected = [{ idea: mockMainCharacter, chapterJoined: 0 }];

  assertEquals(result, expected);
});

Deno.test("Handles chapter with no new playable characters", () => {
  const storyArcWithNoPlayableCharacters: StoryArc = {
    premise: "An arc with only a boss",
    chapterIdeas: [
      {
        chapterTitle: "Boss Only Chapter",
        newPlayableCharacters: [],
        boss: mockBossCharacter1,
        preChapterScene: "A sinister presence looms...",
        battleOverview: "A lone fight against the boss.",
        postChapterScene: "The hero emerges victorious...",
      },
    ],
  };

  const result = getAllCharacterIdeasWithChapterJoinedAndIsLord({
    storyArc: storyArcWithNoPlayableCharacters,
    mainCharacterIdea: mockMainCharacter,
  });

  const expected = [
    { idea: mockBossCharacter1, chapterJoined: 0 },
    { idea: mockMainCharacter, chapterJoined: 0 },
  ];

  assertEquals(result, expected);
});

