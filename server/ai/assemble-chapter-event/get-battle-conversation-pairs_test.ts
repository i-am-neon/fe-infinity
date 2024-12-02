import { assertEquals } from "@std/assert/equals";
import getBattleConversationPairs from "./get-battle-conversation-pairs.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

Deno.test("should pair each existingPartyCharacter with the boss", () => {
  const boss: CharacterIdea = {
    name: "Boss",
    gender: "male",
    personality: "Bossy",
    age: "mature adult",
    backstory: "Boss backstory",
    firstSeenAs: "boss",
    physicalDescription: "Tall and strong",
    inGameDescription: "A powerful boss",
    deathQuote: "You have defeated me",
  };

  const existingPartyCharacters: CharacterIdea[] = [
    {
      name: "Character 1",
      gender: "female",
      personality: "Brave",
      age: "young adult",
      backstory: "Character 1 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Short and agile",
      inGameDescription: "A brave ally",
      deathQuote: "I will be remembered",
    },
    {
      name: "Character 2",
      gender: "male",
      personality: "Wise",
      age: "elderly",
      backstory: "Character 2 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Old and wise",
      inGameDescription: "A wise ally",
      deathQuote: "My wisdom will live on",
    },
  ];

  const newPlayableCharacters: CharacterIdea[] = [
    {
      name: "Character 3",
      gender: "female",
      personality: "Cunning",
      age: "young adult",
      backstory: "Character 3 backstory",
      firstSeenAs: "enemy non-boss",
      physicalDescription: "Sly and quick",
      inGameDescription: "A cunning enemy",
      deathQuote: "I was too cunning",
    },
    {
      name: "Character 4",
      gender: "male",
      personality: "Loyal",
      age: "mature adult",
      backstory: "Character 4 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Strong and loyal",
      inGameDescription: "A loyal ally",
      deathQuote: "I served well",
    },
  ];

  const pairs = getBattleConversationPairs(
    existingPartyCharacters,
    newPlayableCharacters,
    boss
  );
  assertEquals(pairs, [
    { character1: existingPartyCharacters[0], character2: boss },
    { character1: existingPartyCharacters[1], character2: boss },
    { character1: newPlayableCharacters[0], character2: boss },
    { character1: newPlayableCharacters[1], character2: boss },
    {
      character1: existingPartyCharacters[0],
      character2: newPlayableCharacters[0],
    },
    {
      character1: existingPartyCharacters[1],
      character2: newPlayableCharacters[0],
    },
  ]);
});

Deno.test("should pair each newPlayableCharacter with the boss", () => {
  const boss: CharacterIdea = {
    name: "Boss",
    gender: "male",
    personality: "Bossy",
    age: "mature adult",
    backstory: "Boss backstory",
    firstSeenAs: "boss",
    physicalDescription: "Tall and strong",
    inGameDescription: "A powerful boss",
    deathQuote: "You have defeated me",
  };

  const existingPartyCharacters: CharacterIdea[] = [
    {
      name: "Character 1",
      gender: "female",
      personality: "Brave",
      age: "young adult",
      backstory: "Character 1 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Short and agile",
      inGameDescription: "A brave ally",
      deathQuote: "I will be remembered",
    },
    {
      name: "Character 2",
      gender: "male",
      personality: "Wise",
      age: "elderly",
      backstory: "Character 2 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Old and wise",
      inGameDescription: "A wise ally",
      deathQuote: "My wisdom will live on",
    },
  ];

  const newPlayableCharacters: CharacterIdea[] = [
    {
      name: "Character 3",
      gender: "female",
      personality: "Cunning",
      age: "young adult",
      backstory: "Character 3 backstory",
      firstSeenAs: "enemy non-boss",
      physicalDescription: "Sly and quick",
      inGameDescription: "A cunning enemy",
      deathQuote: "I was too cunning",
    },
    {
      name: "Character 4",
      gender: "male",
      personality: "Loyal",
      age: "mature adult",
      backstory: "Character 4 backstory",
      firstSeenAs: "ally",
      physicalDescription: "Strong and loyal",
      inGameDescription: "A loyal ally",
      deathQuote: "I served well",
    },
  ];

  const pairs = getBattleConversationPairs(
    existingPartyCharacters,
    newPlayableCharacters,
    boss
  );
  assertEquals(pairs, [
    { character1: existingPartyCharacters[0], character2: boss },
    { character1: existingPartyCharacters[1], character2: boss },
    { character1: newPlayableCharacters[0], character2: boss },
    { character1: newPlayableCharacters[1], character2: boss },
    {
      character1: existingPartyCharacters[0],
      character2: newPlayableCharacters[0],
    },
    {
      character1: existingPartyCharacters[1],
      character2: newPlayableCharacters[0],
    },
  ]);
});

Deno.test(
  "should pair each existingPartyCharacter with each newPlayableCharacter who's firstSeenAs is 'enemy non-boss'",
  () => {
    const boss: CharacterIdea = {
      name: "Boss",
      gender: "male",
      personality: "Bossy",
      age: "mature adult",
      backstory: "Boss backstory",
      firstSeenAs: "boss",
      physicalDescription: "Tall and strong",
      inGameDescription: "A powerful boss",
      deathQuote: "You have defeated me",
    };

    const existingPartyCharacters: CharacterIdea[] = [
      {
        name: "Character 1",
        gender: "female",
        personality: "Brave",
        age: "young adult",
        backstory: "Character 1 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Short and agile",
        inGameDescription: "A brave ally",
        deathQuote: "I will be remembered",
      },
      {
        name: "Character 2",
        gender: "male",
        personality: "Wise",
        age: "elderly",
        backstory: "Character 2 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Old and wise",
        inGameDescription: "A wise ally",
        deathQuote: "My wisdom will live on",
      },
    ];

    const newPlayableCharacters: CharacterIdea[] = [
      {
        name: "Character 3",
        gender: "female",
        personality: "Cunning",
        age: "young adult",
        backstory: "Character 3 backstory",
        firstSeenAs: "enemy non-boss",
        physicalDescription: "Sly and quick",
        inGameDescription: "A cunning enemy",
        deathQuote: "I was too cunning",
      },
      {
        name: "Character 4",
        gender: "male",
        personality: "Loyal",
        age: "mature adult",
        backstory: "Character 4 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Strong and loyal",
        inGameDescription: "A loyal ally",
        deathQuote: "I served well",
      },
    ];

    const pairs = getBattleConversationPairs(
      existingPartyCharacters,
      newPlayableCharacters,
      boss
    );
    assertEquals(pairs, [
      { character1: existingPartyCharacters[0], character2: boss },
      { character1: existingPartyCharacters[1], character2: boss },
      { character1: newPlayableCharacters[0], character2: boss },
      { character1: newPlayableCharacters[1], character2: boss },
      {
        character1: existingPartyCharacters[0],
        character2: newPlayableCharacters[0],
      },
      {
        character1: existingPartyCharacters[1],
        character2: newPlayableCharacters[0],
      },
    ]);
  }
);

Deno.test(
  "should not pair existingPartyCharacters with newPlayableCharacters who are not 'enemy non-boss'",
  () => {
    const boss: CharacterIdea = {
      name: "Boss",
      gender: "male",
      personality: "Bossy",
      age: "mature adult",
      backstory: "Boss backstory",
      firstSeenAs: "boss",
      physicalDescription: "Tall and strong",
      inGameDescription: "A powerful boss",
      deathQuote: "You have defeated me",
    };

    const existingPartyCharacters: CharacterIdea[] = [
      {
        name: "Character 1",
        gender: "female",
        personality: "Brave",
        age: "young adult",
        backstory: "Character 1 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Short and agile",
        inGameDescription: "A brave ally",
        deathQuote: "I will be remembered",
      },
      {
        name: "Character 2",
        gender: "male",
        personality: "Wise",
        age: "elderly",
        backstory: "Character 2 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Old and wise",
        inGameDescription: "A wise ally",
        deathQuote: "My wisdom will live on",
      },
    ];

    const newPlayableCharacters: CharacterIdea[] = [
      {
        name: "Character 3",
        gender: "female",
        personality: "Cunning",
        age: "young adult",
        backstory: "Character 3 backstory",
        firstSeenAs: "enemy non-boss",
        physicalDescription: "Sly and quick",
        inGameDescription: "A cunning enemy",
        deathQuote: "I was too cunning",
      },
      {
        name: "Character 4",
        gender: "male",
        personality: "Loyal",
        age: "mature adult",
        backstory: "Character 4 backstory",
        firstSeenAs: "ally",
        physicalDescription: "Strong and loyal",
        inGameDescription: "A loyal ally",
        deathQuote: "I served well",
      },
    ];

    const pairs = getBattleConversationPairs(
      existingPartyCharacters,
      newPlayableCharacters,
      boss
    );
    assertEquals(pairs, [
      { character1: existingPartyCharacters[0], character2: boss },
      { character1: existingPartyCharacters[1], character2: boss },
      { character1: newPlayableCharacters[0], character2: boss },
      { character1: newPlayableCharacters[1], character2: boss },
      {
        character1: existingPartyCharacters[0],
        character2: newPlayableCharacters[0],
      },
      {
        character1: existingPartyCharacters[1],
        character2: newPlayableCharacters[0],
      },
    ]);
  }
);

