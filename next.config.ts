import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/portfolio" : undefined,
  assetPrefix: isGithubPages ? "/portfolio/" : undefined,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
