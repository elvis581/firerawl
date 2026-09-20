import { ContentPage } from "@/components/ContentPage";
import { FirecrawlCard } from "@/components/FirecrawlCard";
import { GuideLinks } from "@/components/GuideLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "What Is Firecrawl?",
  "Learn what Firecrawl does, how scrape, crawl, extraction, API, and MCP fit together, and when a managed web data workflow makes sense.",
  "/firecrawl",
);

export default function Firecrawl() {
  return <ContentPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "Firecrawl", href: "/firecrawl" }]} faqKey="firecrawl" kicker="Independent product guide" title="What is Firecrawl?" description="Firecrawl is a web data service for fetching, crawling, and extracting website content for developer and AI workflows. This independent guide maps the pieces so you can choose the right path.">
    <div className="prose">
      <h2>What does Firecrawl do?</h2>
      <p>The service turns public web pages into structured or Markdown-friendly data through managed endpoints. A single scrape is useful for one page; a crawl follows links across a site; extraction adds a schema when a predictable shape matters.</p>
      <h2>Where does Firecrawl fit?</h2>
      <div className="card-grid"><div className="card"><h3>Scrape</h3><p>Fetch one URL and return readable content, HTML, or metadata.</p></div><div className="card"><h3>Crawl</h3><p>Discover and process multiple pages when one URL is not enough.</p></div><div className="card"><h3>Agent access</h3><p>Use API or MCP patterns to let an AI workflow request web context.</p></div></div>
      <h2>Choose by workload</h2>
      <div className="table-wrap"><table className="compare-table"><thead><tr><th>Need</th><th>Start with</th><th>Why</th></tr></thead><tbody><tr><td>One known public page</td><td>Scrape</td><td>Lowest-complexity path for readable content or metadata.</td></tr><tr><td>Many related pages</td><td>Crawl</td><td>Discovery and repeat retrieval matter more than a one-off fetch.</td></tr><tr><td>Structured records</td><td>Extraction</td><td>A schema makes downstream validation easier.</td></tr><tr><td>Agent-controlled retrieval</td><td>API or MCP</td><td>Use a tool interface when an application or agent needs web context on demand.</td></tr></tbody></table></div>
      <p>Before committing, test representative pages with the output format your application actually stores. Check JavaScript-heavy pages, failure behavior, latency, usage limits, and how much operational work your team wants to own.</p>
      <h2>What this overview cannot decide for you</h2>
      <p>A feature list cannot predict the result on every site. Your pages may have different scripts, access rules, languages, or data shapes than a provider demo. Use a small, representative sample and record completeness, response time, retries, and cleanup needs. Keep the sample and acceptance criteria so a later plan change can be compared against the same baseline.</p>
      <h2>Choose your starting point</h2>
      <ul><li>Need a quick developer integration? Start with the <a href="/firecrawl-api">API guide</a>.</li><li>Need an agent to call web tools? Read the <a href="/firecrawl-mcp">MCP guide</a>.</li><li>Need to estimate usage? See the <a href="/firecrawl-pricing">pricing guide</a> and the credit questions.</li><li>Prefer local infrastructure? Review <a href="/firecrawl-self-hosted">self-hosting tradeoffs</a>.</li></ul>
    </div>
    <FirecrawlCard placement="inline">If a one-page conversion is becoming a batch or JavaScript-heavy workflow, a managed crawler may be the next thing to test. This provider may earn a commission from this link.</FirecrawlCard>
    <h2>Related developer guides</h2>
    <GuideLinks current="/firecrawl" />
  </ContentPage>;
}
