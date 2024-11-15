import getPathWithinAssetsDir from "@/fileIO/get-path-within-assets-dir.ts";
import convertToRawUrl from "@/map-processing/convert-to-raw-url.ts";

export default async function writeMapImage({
  mapName,
  imageUrl,
}: {
  mapName: string;
  imageUrl: string;
}): Promise<void> {
  const response = await fetch(convertToRawUrl(imageUrl));

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const fileExtension = response.headers.get("content-type")?.split("/")[1];

  const buffer = await response.arrayBuffer();

  await Deno.writeFile(
    getPathWithinAssetsDir("maps/" + mapName + "." + fileExtension),
    new Uint8Array(buffer)
  );
}

if (import.meta.main) {
  await writeMapImage({
    mapName: "test-map",
    imageUrl:
      "https://github.com/Klokinator/FE-Repo/blob/e2e6f652d9887b8f0760c300ce390d7a321b8618/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2010%20(3C%2000%20CE%203E).png",
  });
}

