import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { seraphinaCharacter } from "@/testData/test-characters.ts";
import { ligmaCharacter } from "@/testData/test-characters.ts";
import { liraCharacter } from "@/testData/test-characters.ts";
import getRandomHex from "@/lib/get-random-hex.ts";
import getRecruitEvent from "@/ai/assemble-chapter-event/recruit-events/get-recruit-event.ts";

export default async function getAllRecruitEvents({
  existingPartyCharacters,
  newPlayableCharacters,
  preChapterScene,
  battleOverview,
}: {
  existingPartyCharacters: CharacterIdea[];
  newPlayableCharacters: CharacterIdea[];
  preChapterScene: string;
  battleOverview: string;
}): Promise<{
  characterBasedEvents: string;
  localDefinitions: string[];
  sceneTexts: string[];
}> {
  const recruitPairs = newPlayableCharacters.map((newCharacter) => {
    return existingPartyCharacters.map((existingCharacter) => {
      return {
        playerCharacter: existingCharacter,
        characterToRecruit: newCharacter,
      };
    });
  });

  const recruitEventsPromises = recruitPairs.map((pair) => {
    return pair.map((characters) => {
      return getRecruitEvent({
        playerCharacter: characters.playerCharacter,
        characterToRecruit: characters.characterToRecruit,
        preChapterScene,
        battleOverview,
        recruitEventHex: getRandomHex(),
      });
    });
  });

  const recruitEvents = await Promise.all(recruitEventsPromises.flat());

  return {
    characterBasedEvents: recruitEvents
      .map((e) => e.characterBasedEvent)
      .join("\n"),
    localDefinitions: recruitEvents.map((e) => e.sceneContent),
    sceneTexts: recruitEvents.map((e) => e.sceneTextContent),
  };
}

if (import.meta.main) {
  const res = await getAllRecruitEvents({
    existingPartyCharacters: [seraphinaCharacter, ligmaCharacter],
    newPlayableCharacters: [liraCharacter],
    preChapterScene: "The party is in a forest.",
    battleOverview: "The party must defeat the bandits.",
  });

  console.log(JSON.stringify(res, null, 2));
}

