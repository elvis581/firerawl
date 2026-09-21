import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://firecraw.com";
export const SITE_NAME = "Firecraw Tools";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: SITE_NAME, type: "website", images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Firecraw Tools web data utilities" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-card.svg"] },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
  };
}
