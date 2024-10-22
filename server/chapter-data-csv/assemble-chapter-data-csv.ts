import type { ChapterDataForCsv } from "../types/ChapterDataForCsv.ts";
import { chapterDataCsvHeaders } from "./chapter-data-csv-headers.ts";
import chapterDataToCsv from "./chapter-data-to-csv.ts";

export default async function assembleChapterDataCSV({
  chapterDatas,
}: {
  chapterDatas: ChapterDataForCsv[];
}): Promise<string> {
  // Start with headers
  let csvContent = chapterDataCsvHeaders.join(",") + "\n";

  // Convert each chapterData object to CSV and append it
  const chapterDataCsvValues = await Promise.all(
    chapterDatas.map((chapterData) => chapterDataToCsv(chapterData))
  );

  csvContent += chapterDataCsvValues.join("\n");

  return csvContent;
}

