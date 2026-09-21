import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Web data tools for developers`, template: `%s | ${SITE_NAME}` },
  description: "Free URL, webpage, and website data tools with practical Firecrawl guides for developers and AI agents.",
  icons: { icon: "/icon.svg" },
  openGraph: { images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Firecraw Tools web data utilities" }] },
  twitter: { card: "summary_large_image", images: ["/og-card.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
