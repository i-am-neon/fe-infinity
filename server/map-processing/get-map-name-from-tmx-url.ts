export default function getMapNameFromTmxUrl(tmxUrl: string): string {
  // Decode the URL to handle encoded characters like %20
  const decodedUrl = decodeURIComponent(tmxUrl);

  // Extract the last part of the URL and remove the ".tmx" extension
  const mapName = decodedUrl.split("/").pop()?.replace(".tmx", "") ?? "";

  // Remove spaces and special characters entirely
  const sanitizedMapName = mapName.replace(/[^a-zA-Z0-9]/g, "");

  return sanitizedMapName;
}
