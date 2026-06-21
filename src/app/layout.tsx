import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viktor - Full Stack Developer",
  description:
    "Portfolio showcasing full stack development projects in Node.js, Rust, C++, and web technologies.",
  keywords: ["developer", "portfolio", "full stack", "Node.js", "React", "TypeScript"],
  authors: [{ name: "Viktor" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Vikbg",
    title: "Viktor - Full Stack Developer",
    description:
      "Portfolio showcasing full stack development projects in Node.js, Rust, C++, and web technologies.",
    siteName: "Viktor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viktor - Full Stack Developer",
    description: "Portfolio showcasing full stack development projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
