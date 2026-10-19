import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Tracking } from "@/components/Tracking";
import { siteGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { allCities, publishedServices } from "@/content";

const serif = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flood Damages Experts | Water & Flood Damage Restoration",
  description:
    "Flood Damages Experts connects property owners nationwide with independent licensed water-damage restoration contractors. Fast help for floods, leaks, and storm damage — request assistance now.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={siteGraph(allCities, publishedServices)} />
        <Tracking />
        {children}
      </body>
    </html>
  );
}
