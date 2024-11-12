export default function chapterTitleToChapterId(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[\s'’"“”.,!@#$%^&*()_+=|\\:{}[\];<>?/`~]/g, "_")
    .replace(/__+/g, "_") // Replace multiple underscores with a single one
    .replace(/^_+|_+$/g, ""); // Trim leading and trailing underscores
}
