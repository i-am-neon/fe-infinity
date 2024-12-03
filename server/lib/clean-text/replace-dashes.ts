export default function replaceDashes(text: string): string {
  return text.replace(/—|–/g, "-");
}

