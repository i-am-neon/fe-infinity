import choosePortrait from "@/ai/portraits/choose-portrait.ts";
import { type PortraitMetadata } from "@/types/PortraitMetadata.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export async function assignMultiplePortraits({
  characterIdeas,
  portraitOptions,
}: {
  characterIdeas: CharacterIdea[];
  portraitOptions: PortraitMetadata[];
}): Promise<{ characterIdea: CharacterIdea; portrait: PortraitMetadata }[]> {
  if (characterIdeas.length > portraitOptions.length) {
    throw new Error("Not enough portraits to assign to each character");
  }

  const assignedPortraits: {
    characterIdea: CharacterIdea;
    portrait: PortraitMetadata;
  }[] = [];

  for (const characterIdea of characterIdeas) {
    const chosenPortrait = await _internals.choosePortrait({
      portraitOptions: shuffleArray(
        portraitOptions.filter((p) => p.gender === characterIdea.gender)
      ),
      characterIdea,
    });

    assignedPortraits.push({
      characterIdea: characterIdea,
      portrait: chosenPortrait,
    });

    // Remove the chosen portrait from the options
    portraitOptions = portraitOptions.filter(
      (portrait) => portrait !== chosenPortrait
    );
  }

  return assignedPortraits;
}

export const _internals = { choosePortrait };

function shuffleArray(array: PortraitMetadata[]): PortraitMetadata[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
