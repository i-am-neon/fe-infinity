import { assignMultiplePortraits } from "@/ai/portraits/assign-multiple-portraits.ts";
import { allPortraitOptions } from "@/ai/portraits/portrait-metadata-creation/all-portrait-options.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { PortraitMetadata } from "@/types/PortraitMetadata.ts";

export default async function assignAllCharacterPortraits({
  allCharacterIdeasWithChapterJoined,
}: {
  allCharacterIdeasWithChapterJoined: {
    idea: CharacterIdea;
    chapterJoined: number;
  }[];
}): Promise<
  {
    characterIdea: CharacterIdea;
    portrait: PortraitMetadata;
    chapterJoined: number;
  }[]
> {
  // TODO: could speed up assigning portraits by separating streams by gender and age and running those in parallel, only feeding in filtered options from the appropriate gender and age
  const allCharacterIdeasAndPortraits = await assignMultiplePortraits({
    portraitOptions: allPortraitOptions,
    characterIdeas: allCharacterIdeasWithChapterJoined.map((c) => c.idea),
  });

  return allCharacterIdeasAndPortraits.map(
    (characterIdeaAndPortrait, index) => ({
      characterIdea: allCharacterIdeasWithChapterJoined[index].idea,
      portrait: characterIdeaAndPortrait.portrait,
      chapterJoined: allCharacterIdeasWithChapterJoined[index].chapterJoined,
    })
  );
}

