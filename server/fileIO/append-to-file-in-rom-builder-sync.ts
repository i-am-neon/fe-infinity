import getPathWithinRomBuilderDir from "@/fileIO/get-path-within-rom-builder-dir.ts";

export default function appendToFileInRomBuilderSync({
  pathWithinRomBuilder,
  content,
  isOnNewLine,
}: {
  pathWithinRomBuilder: string;
  content: string;
  isOnNewLine: boolean;
}): void {
  // Add a new line before the content if isOnNewLine is true
  const contentToWrite = isOnNewLine ? `\n${content}` : content;

  // Open the file only if it already exists (synchronously)
  const file = Deno.openSync(getPathWithinRomBuilderDir(pathWithinRomBuilder), {
    read: true,
    write: true,
    append: true, // ensures content is added at the end of the file
    create: false, // throw if file does not exist,
  });

  const encoder = new TextEncoder();
  file.writeSync(encoder.encode(contentToWrite));
  file.close(); // Manually close the file since we don't have 'using' in sync mode
}

if (import.meta.main) {
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "hello.txt",
    content: "Hello World 1",
    isOnNewLine: true,
  });
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "hello.txt",
    content: "Hello World 2",
    isOnNewLine: true,
  });
}

