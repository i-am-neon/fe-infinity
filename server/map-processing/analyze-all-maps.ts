import getMapUrls from "@/map-processing/get-map-urls.ts";

export default async function analyzeAllMaps(): Promise<void> {
  const mapUrls = await getMapUrls();
}
