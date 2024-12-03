export default function terrainNameToEventFnName(terrainName: string): string {
  if (
    terrainName === "Village Entrance" ||
    terrainName === "Visitable Ruins" ||
    terrainName === "Inn"
  ) {
    return "Village";
  } else {
    return terrainName;
  }
}
