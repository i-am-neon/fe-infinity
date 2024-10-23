import appendToFileInRomBuilderSync from "../fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeChapterName(chapterName: string): void {
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Chapters/Chapters.s",
    content: `#include "${chapterName}.s"`,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  writeChapterName("TestChapter");
}

