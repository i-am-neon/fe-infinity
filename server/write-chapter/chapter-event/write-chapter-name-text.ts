import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import getNameText from "@/lib/get-name-text.ts";

export default function writeChapterNameText({
  chapterId,
  chapterTitle,
}: {
  chapterId: string;
  chapterTitle: string;
}): void {
  const chapterNameText = `
## ${getNameText(chapterId)}
${chapterTitle}[X]`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Chapters/build/Names.s",
    content: chapterNameText,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  writeChapterNameText({ chapterId: "Some_Name", chapterTitle: "Some Name" });
}

