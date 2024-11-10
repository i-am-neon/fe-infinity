import { StoryArc } from "@/types/ai/StoryArc.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export default function getAllCharacterIdeasWithChapterJoined({
  storyArc,
  mainCharacterIdea,
}: {
  storyArc: StoryArc;
  mainCharacterIdea: CharacterIdea;
}): {
  idea: CharacterIdea;
  chapterJoined: number;
}[] {
  const allCharacterIdeasWithChapterJoined: {
    idea: CharacterIdea;
    chapterJoined: number;
  }[] = [];
  storyArc.chapterIdeas.forEach((chapterIdea, chapterIndex) => {
    (chapterIdea.newPlayableCharacters || []).forEach((characterIdea) => {
      allCharacterIdeasWithChapterJoined.push({
        idea: characterIdea,
        chapterJoined: chapterIndex,
      });
    });
    allCharacterIdeasWithChapterJoined.push({
      idea: chapterIdea.boss,
      chapterJoined: chapterIndex,
    });
  });
  allCharacterIdeasWithChapterJoined.push({
    idea: mainCharacterIdea,
    chapterJoined: 0,
  });
  return allCharacterIdeasWithChapterJoined;
}

