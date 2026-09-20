import { Breadcrumbs } from "./Breadcrumbs";
import { PageShell } from "./PageShell";
import { FAQSection, WebApplicationStructuredData } from "./StructuredData";
import { pageFaqs } from "@/lib/faq";
import { EvidenceNote } from "./EvidenceNote";
import { firecrawlData } from "@/data/firecrawl";

export function ToolLayout({ children, breadcrumbs, kicker, title, description, path, faqKey, evidence }: { children: React.ReactNode; breadcrumbs: Array<{ name: string; href: string }>; kicker: string; title: string; description: string; path?: string; faqKey?: keyof typeof pageFaqs; evidence?: { reviewedOn: string; links: Array<{ label: string; href: string }> } }) {
  const canonicalPath = path || breadcrumbs[breadcrumbs.length - 1]?.href || "/";
  const pageEvidence = evidence || { reviewedOn: firecrawlData.reviewedOn, links: [] };
  return <PageShell><div className="container tool-container"><Breadcrumbs items={breadcrumbs}/><WebApplicationStructuredData name={title} description={description} path={canonicalPath}/><div className="tool-hero"><span className="eyebrow">{kicker}</span><h1>{title}</h1><p className="lede">{description}</p></div>{children}<EvidenceNote reviewedOn={pageEvidence.reviewedOn} links={pageEvidence.links} kind="tool" />{faqKey && <FAQSection items={pageFaqs[faqKey]}/>}</div></PageShell>;
}
