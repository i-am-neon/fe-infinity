import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";
import readUrlsFromFile from "@/ai/portraits/portrait-metadata-creation/read-urls-from-file.ts";
import downloadPortraitFromUrl from "@/ai/portraits/portrait-metadata-creation/download-portrait-from-url.ts";
import generatePortraitMetadata from "@/ai/portraits/portrait-metadata-creation/generate-portrait-metadata.ts";

export default async function assembleAllPortraitsAndMetadata(): Promise<void> {
  const urls = await readUrlsFromFile(
    getPathWithinAssetsPortraitsDir("urls.txt")
  );

  const processUrls = async (urls: string[]): Promise<void> => {
    await Promise.all(
      urls.map(async (url, index) => {
        await downloadPortraitFromUrl({ url, name: index.toString() });

        // Generate metadata and write it to a JSON file
        const metadata = await generatePortraitMetadata({ url });
        const metadataPath = getPathWithinAssetsPortraitsDir(
          `metadata/${index}.json`
        );
        await Deno.writeTextFile(
          metadataPath,
          JSON.stringify(metadata, null, 2)
        );
      })
    );
  };

  // Call processUrls with the URLs list
  await processUrls(urls);
}

if (import.meta.main) {
  await assembleAllPortraitsAndMetadata();
}

