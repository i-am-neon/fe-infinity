import getPathWithinRomBuilderDir from "./get-path-within-rom-builder-dir.ts";

export default async function writeFileToRomBuilder(
  pathWithinRomBuilder: string,
  content: string
): Promise<void> {
  await Deno.writeTextFile(
    getPathWithinRomBuilderDir(pathWithinRomBuilder),
    content
  );
}

// this gets run if the script is run directly: `deno run server/write-file.ts`
if (import.meta.main) {
  await writeFileToRomBuilder("hello.txt", "Hello World!!");
}

