import type { Metadata } from "next";

const title = "Viktor - Full Stack Developer";
const description =
  "Portfolio showcasing full stack development projects in Node.js, Rust, C++, and web technologies.";
const socialImage = {
  url: "/logo.webp",
  width: 1440,
  height: 1440,
  alt: "Portrait of Viktor",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://vikbg.github.io/portfolio/"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  keywords: ["developer", "portfolio", "full stack", "Node.js", "React", "TypeScript"],
  authors: [{ name: "Viktor" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: "Viktor Portfolio",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Portfolio showcasing full stack development projects.",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};
