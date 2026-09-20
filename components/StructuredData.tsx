import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { FAQItem } from "@/lib/faq";

export function ArticleStructuredData({ title, description, path }: { title: string; description: string; path: string }) {
  const data = { "@context": "https://schema.org", "@type": "Article", headline: title, description, url: `${SITE_URL}${path}`, author: { "@type": "Organization", name: "Firecraw Tools" }, publisher: { "@type": "Organization", name: "Firecraw Tools" }, dateModified: "2026-09-20" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function SiteIdentityStructuredData() {
  const data = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${SITE_URL}#organization`, name: SITE_NAME, url: SITE_URL }, { "@type": "WebSite", "@id": `${SITE_URL}#website`, name: SITE_NAME, url: SITE_URL, publisher: { "@id": `${SITE_URL}#organization` } }] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebApplicationStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  const data = { "@context": "https://schema.org", "@type": "WebApplication", name, description, url: `${SITE_URL}${path}`, applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  const data = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <section className="faq-section"><h2>Frequently asked questions</h2><div className="faq-list">{items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /></section>;
}
