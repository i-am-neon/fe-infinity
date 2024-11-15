export default function convertToRawUrl(githubUrl: string): string {
  // Replace "https://github.com" with "https://raw.githubusercontent.com"
  const rawUrl = githubUrl.replace(
    /^https:\/\/github.com\//,
    "https://raw.githubusercontent.com/"
  );

  // Remove "/blob/" and replace it with "/"
  return rawUrl.replace("/blob/", "/");
}
