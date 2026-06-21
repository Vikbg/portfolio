export function getImagePath(path: string): string {
  const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
  const basePath = isGithubPages ? "/portfolio" : "";
  return `${basePath}${path}`;
}
