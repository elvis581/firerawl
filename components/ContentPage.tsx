import { Breadcrumbs } from "./Breadcrumbs";
import { PageShell } from "./PageShell";
import { ArticleStructuredData, FAQSection } from "./StructuredData";
import { pageFaqs } from "@/lib/faq";
import { EvidenceNote } from "./EvidenceNote";
import { firecrawlData } from "@/data/firecrawl";

export function ContentPage({ children, breadcrumbs, kicker, title, description, path, faqKey, evidence }: { children: React.ReactNode; breadcrumbs: Array<{ name: string; href: string }>; kicker: string; title: string; description: string; path?: string; faqKey?: keyof typeof pageFaqs; evidence?: { reviewedOn: string; links: Array<{ label: string; href: string }> } }) {
  const canonicalPath = path || breadcrumbs[breadcrumbs.length - 1]?.href || "/";
  const defaultEvidence = canonicalPath.startsWith("/firecrawl") ? { reviewedOn: firecrawlData.reviewedOn, links: [{ label: "Firecrawl documentation", href: firecrawlData.officialLinks.docs }, { label: "Firecrawl pricing", href: firecrawlData.officialLinks.pricing }] } : undefined;
  const pageEvidence = evidence || defaultEvidence;
  return <PageShell><div className="container narrow"><Breadcrumbs items={breadcrumbs}/><ArticleStructuredData title={title} description={description} path={canonicalPath}/><div className="page-hero"><span className="eyebrow">{kicker}</span><h1>{title}</h1><p className="lede">{description}</p></div>{children}{pageEvidence && <EvidenceNote reviewedOn={pageEvidence.reviewedOn} links={pageEvidence.links}/>} {faqKey && <FAQSection items={pageFaqs[faqKey]}/>}</div></PageShell>;
}
