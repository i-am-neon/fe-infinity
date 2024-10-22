import getPathWithinRomBuilderDir from "./get-path-within-rom-builder-dir.ts";

export default function appendToFileInRomBuilderSync({
  pathWithinRomBuilder,
  content,
  isOnNewLine,
  createIfFileDoesNotExist,
}: {
  pathWithinRomBuilder: string;
  content: string;
  isOnNewLine: boolean;
  createIfFileDoesNotExist: boolean;
}): void {
  // Add a new line before the content if isOnNewLine is true
  const contentToWrite = isOnNewLine ? `\n${content}` : content;

  // Open the file only if it already exists (synchronously)
  const file = Deno.openSync(getPathWithinRomBuilderDir(pathWithinRomBuilder), {
    read: true,
    write: true,
    append: true, // ensures content is added at the end of the file
    create: createIfFileDoesNotExist,
  });

  const encoder = new TextEncoder();
  file.writeSync(encoder.encode(contentToWrite));
  file.close(); // Manually close the file since we don't have 'using' in sync mode
}

if (import.meta.main) {
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "hello.txt",
    content: "Hello World!!",
    createIfFileDoesNotExist: true,
    isOnNewLine: true,
  });
}

