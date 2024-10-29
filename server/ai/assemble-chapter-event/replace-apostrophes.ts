export default function replaceApostrophes(text: string): string {
  return text.replace(/’/g, "'");
}
