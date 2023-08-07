import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEEKLY DEEP DIVE TRACKER AND RESOURCES FOR DRG",
  description:
    "Weekly Deep Dive tracker and information resources for Deep Rock Galactic",
  authors: [
    {
      name: "Yogie Arifin",
      url: "https://www.linkedin.com/in/yogie-arifin/",
    },
    {
      name: "Yogzgm",
      url: "https://steamcommunity.com/id/yogzgm",
    },
  ],
  keywords: [
    "Deep Rock Galactic",
    "DRG",
    "Deep Dive",
    "Elite Deep Dive",
    "Deep Rock Galactic Deep Dive",
    "Deep Rock Galactic Elite Deep Dive",
    "Deep Rock Galactic Deep Dive Elite",
    "DRG Guide",
    "Deep Rock Galactic Guide",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
