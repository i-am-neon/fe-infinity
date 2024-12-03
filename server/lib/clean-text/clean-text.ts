import replaceApostrophes from "@/lib/clean-text/replace-apostrophes.ts";
import replaceDashes from "@/lib/clean-text/replace-dashes.ts";

export default function cleanText(text: string): string {
  return replaceApostrophes(replaceDashes(text));
}

