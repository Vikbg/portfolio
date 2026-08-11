import { describe, expect, it } from "vitest";

import { siteMetadata } from "./metadata";

describe("portfolio metadata", () => {
  it("describes the deployed portfolio and its social preview", () => {
    expect(String(siteMetadata.metadataBase)).toBe("https://vikbg.github.io/portfolio/");
    expect(siteMetadata.alternates?.canonical).toBe("/");
    expect(
      siteMetadata.openGraph && "url" in siteMetadata.openGraph
        ? siteMetadata.openGraph.url
        : undefined
    ).toBe("/");
    expect(
      siteMetadata.openGraph && "images" in siteMetadata.openGraph
        ? siteMetadata.openGraph.images
        : undefined
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: "/logo.webp", alt: "Portrait of Viktor" }),
      ])
    );
  });
});
