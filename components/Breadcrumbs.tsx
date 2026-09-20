import Link from "next/link";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  const json = breadcrumbJsonLd(items.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href}` })));
  return <>
    <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.href}>{index > 0 && <span className="crumb-sep">/</span>}<Link href={item.href}>{item.name}</Link></span>)}</nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  </>;
}
