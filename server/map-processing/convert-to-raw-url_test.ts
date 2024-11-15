import { assertEquals } from "@std/assert/equals";
import convertToRawUrl from "@/map-processing/convert-to-raw-url.ts";

Deno.test("convertToRawUrl - should convert GitHub URL to raw URL", () => {
  const testCases = [
    {
      githubUrl:
        "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Example.tmx",
      expected:
        "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Maps/Example.tmx",
    },
    {
      githubUrl: "https://github.com/user/repo/blob/branch/path/to/file.txt",
      expected:
        "https://raw.githubusercontent.com/user/repo/branch/path/to/file.txt",
    },
    {
      githubUrl:
        "https://github.com/user/repo/blob/commitSHA/path/to/file.json",
      expected:
        "https://raw.githubusercontent.com/user/repo/commitSHA/path/to/file.json",
    },
  ];

  for (const { githubUrl, expected } of testCases) {
    assertEquals(convertToRawUrl(githubUrl), expected);
  }
});
