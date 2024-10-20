export default async function writeFile(
  filename: string,
  content: string
): Promise<void> {
  await Deno.writeTextFile(filename, content);
}

// this gets run if the script is run directly: `deno run server/write-file.ts`
if (import.meta.main) {
  await writeFile("hello.txt", "Hello World!!");
}

