import writeFileToRomBuilder from "../fileIO/write-file-to-rom-builder.ts";

export default async function initializeChaptersDotS(): Promise<void> {
  const chaptersDotSInit = `#include "Names.s"

#include "Objectives.s"

#include "DeathQuotes.s"
`;

  await writeFileToRomBuilder("Text/Chapters/Chapters.s", chaptersDotSInit);
}

if (import.meta.main) {
  await initializeChaptersDotS();
}

