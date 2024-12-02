import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export default function getBattleConversationPairs(
  existingPartyCharacters: CharacterIdea[],
  newPlayableCharacters: CharacterIdea[],
  boss: CharacterIdea
): { character1: CharacterIdea; character2: CharacterIdea }[] {
  const pairs: { character1: CharacterIdea; character2: CharacterIdea }[] = [];

  // Pair each existingPartyCharacter with the boss
  existingPartyCharacters.forEach((character) => {
    pairs.push({ character1: character, character2: boss });
  });

  // Pair each newPlayableCharacter with the boss
  newPlayableCharacters.forEach((character) => {
    pairs.push({ character1: character, character2: boss });
  });

  // Pair each existingPartyCharacter with each newPlayableCharacter who's firstSeenAs property is "enemy non-boss"
  existingPartyCharacters.forEach((existingCharacter) => {
    newPlayableCharacters.forEach((newCharacter) => {
      if (newCharacter.firstSeenAs === "enemy non-boss") {
        pairs.push({ character1: existingCharacter, character2: newCharacter });
      }
    });
  });

  return pairs;
}

