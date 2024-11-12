import writeFileToRomBuilder from "@/fileIO/write-file-to-rom-builder.ts";

export default async function initializeTextChaptersDotS(): Promise<void> {
  const chaptersDotSInit = `#include "Names.s"

#include "Objectives.s"

#include "DeathQuotes.s"
`;

  await writeFileToRomBuilder(
    "Text/Chapters/build/Chapters.s",
    chaptersDotSInit
  );
}

if (import.meta.main) {
  await initializeTextChaptersDotS();
}

