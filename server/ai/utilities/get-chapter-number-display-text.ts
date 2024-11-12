export default function getChapterNumberDisplayText(
  chapterNumber: number
): string {
  if (chapterNumber === 0) {
    return "Prologue";
  }
  return `Ch ${chapterNumber}`;
}

