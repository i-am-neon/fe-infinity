import type { ChapterDataForCsv } from "../../types/ChapterDataForCsv.ts";
import chapterDataToCsv from "./chapter-data-to-csv.ts";

export default async function assembleChapterDataCSV({
  chapterDatas,
}: {
  chapterDatas: ChapterDataForCsv[];
}): Promise<string> {
  // Convert each chapterData object to CSV and append it
  const chapterDataCsvValues = await Promise.all(
    chapterDatas.map((chapterData) => chapterDataToCsv(chapterData))
  );

  return chapterDataCsvValues.join("\n");
}

