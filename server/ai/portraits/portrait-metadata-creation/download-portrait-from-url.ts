import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";

export default async function downloadPortraitFromUrl({
  url,
  name,
}: {
  url: string;
  name: string;
}): Promise<void> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const fileExtension = response.headers.get("content-type")?.split("/")[1];

  const buffer = await response.arrayBuffer();
  await Deno.writeFile(
    getPathWithinAssetsPortraitsDir("images/" + name + "." + fileExtension),
    new Uint8Array(buffer)
  );
}

if (import.meta.main) {
  await downloadPortraitFromUrl({
    url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Kanna/%7BKanna%7D%20%5BF2E%5D%20OC%2015.png",
    name: "test-image",
  });
  console.log("Image downloaded successfully!");
}

