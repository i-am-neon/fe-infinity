import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";

const readUrlsFromFile = async (filePath: string): Promise<string[]> => {
  const data = await Deno.readTextFile(filePath);
  const urls = data
    .split("\n")
    .map((url) => url.trim())
    .filter(Boolean);
  return urls;
};

export default readUrlsFromFile;

if (import.meta.main) {
  const urls = await readUrlsFromFile(
    getPathWithinAssetsPortraitsDir("urls.txt")
  );
  console.log(urls);
}
