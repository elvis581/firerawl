import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Firecraw Tools", "Learn what Firecraw Tools publishes, who the utilities are for, how the tools are limited, and how sponsored recommendations are handled.", "/about");

export default function About() {
  return <ContentPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} kicker="About this site" title="About Firecraw Tools" description="Firecraw Tools helps developers and AI builders handle small web data jobs and understand when a larger crawling workflow is appropriate."><div className="prose"><h2>What we publish</h2><p>We build focused utilities for public URL conversion, sitemap discovery, link extraction, and AI-readable site files. We also publish independent explainers about Firecrawl APIs, MCP, Python, pricing, self-hosting, and alternatives.</p><h2>What we do not claim</h2><p>This is an independent website and is not affiliated with or operated by Firecrawl. We do not provide the Firecrawl service, promise its availability, or reproduce its official documentation. Product facts can change, so use the linked provider pages for final decisions.</p><h2>How recommendations work</h2><p>Some pages include sponsored links. A recommendation appears when the next step naturally involves multiple pages, JavaScript rendering, an API, or structured extraction. The recommendation does not change the price you pay.</p></div></ContentPage>;
}
