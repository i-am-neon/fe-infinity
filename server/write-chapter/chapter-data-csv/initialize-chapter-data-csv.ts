import writeFileToRomBuilder from "@/fileIO/write-file-to-rom-builder.ts";
import { chapterDataCsvHeaders } from "@/write-chapter/chapter-data-csv/chapter-data-csv-headers.ts";

export default async function initializeChapterDataCsv(): Promise<void> {
  const csvHeadersString = chapterDataCsvHeaders.join(",");

  await writeFileToRomBuilder(
    "CSV/Tables/ChapterData/ChapterDataTable.csv",
    csvHeadersString
  );
}

if (import.meta.main) {
  await initializeChapterDataCsv();
}

