import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { AffiliateButton } from "@/components/AffiliateButton";
import { HomeUrlForm } from "@/components/HomeUrlForm";
import { FAQSection } from "@/components/StructuredData";
import { pageFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Firecrawl Tools for Developers", "Free web data tools for Firecrawl workflows: convert a public URL to Markdown, inspect links, select sitemap pages, and plan a larger crawl.", "/");

const tools = [
  ["URL to Markdown", "Turn one public webpage into clean Markdown.", "/tools/url-to-markdown"],
  ["Website to Markdown", "Select a handful of sitemap URLs and export them.", "/tools/website-to-markdown"],
  ["llms.txt generator", "Create a starter discovery file from your sitemap.", "/tools/llms-txt-generator"],
  ["URL extractor", "See internal and external links in HTML or a URL.", "/tools/url-extractor"],
] as const;

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <div className="container home-hero-grid">
        <div>
          <span className="eyebrow">Firecrawl tools for developers</span>
          <h1>Free web data tools for Firecrawl workflows.</h1>
          <p>Convert a public URL to Markdown, inspect links, or select a small set of sitemap pages before you commit to a larger crawl. The tools are independent, focused, and free to try.</p>
          <HomeUrlForm />
          <div className="hero-links">
            <Link className="button secondary" href="/tools">Explore all tools</Link>
            <AffiliateButton placement="inline" variant="primary" sourceComponent="homepage_hero">Need larger crawls? Try Firecrawl</AffiliateButton>
          </div>
          <p className="tool-help">Sponsored links are labeled. Firecraw Tools is an independent website.</p>
        </div>
        <div className="hero-terminal" aria-label="Example Markdown conversion">
          <div className="terminal-top"><span className="terminal-dot"/><span className="terminal-dot"/><span className="terminal-dot"/></div>
          <div><span style={{ color: "#ff9f87" }}>url</span> = https://example.com/docs</div>
          <div style={{ color: "#93b5ff", marginTop: 12 }}>-&gt; fetching readable content</div>
          <div style={{ color: "#7be0a6", marginTop: 12 }}>OK Markdown ready</div>
          <div style={{ color: "#93a4b9", marginTop: 18 }}># Documentation</div>
          <div style={{ color: "#93a4b9" }}>A clean, portable result.</div>
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <span className="eyebrow">Start with a small job</span>
        <h2>Choose the result you need first.</h2>
        <p className="section-intro">Each utility keeps its input, output, and limits visible. That makes it easier to check a result before adding browser rendering, queues, or a recurring crawl.</p>
        <div className="card-grid">{tools.map(([title, desc, href]) => <Link className="card" href={href} key={href}><h3>{title}</h3><p>{desc}</p><span className="text-link">Open tool -&gt;</span></Link>)}</div>
      </div>
    </section>

    <section className="home-section">
      <div className="container prose">
        <span className="eyebrow">Choose by workflow</span>
        <h2>Move from one page to the right next step.</h2>
        <div className="card-grid">
          <div className="card"><h3>One public page</h3><p>Use URL to Markdown or Webpage to Markdown when you know the page you need. Copy the result into notes, a prompt, or a documentation draft.</p></div>
          <div className="card"><h3>A small site batch</h3><p>Use Website to Markdown when a sitemap already lists the pages. Select only the URLs you need and review the batch before downloading it.</p></div>
          <div className="card"><h3>AI discovery context</h3><p>Use the llms.txt generator to curate important URLs. It creates a starting directory; it does not replace fetching the underlying content.</p></div>
        </div>
        <h2>Know when a larger workflow is justified.</h2>
        <p>Consider a managed workflow when you need JavaScript rendering, retries, proxy controls, scheduled crawls, structured extraction, or hundreds of URLs. The <Link href="/firecrawl-api">Firecrawl API guide</Link> explains the managed path, while the <Link href="/firecrawl-self-hosted">self-hosted guide</Link> covers the infrastructure you would own.</p>
        <p>All utilities are designed for public inputs and best-effort output. Do not submit private URLs or secrets, and check the returned content before using it in an automated pipeline.</p>
      </div>
    </section>

    <section className="home-section" style={{ background: "#eef3f9" }}>
      <div className="container">
        <span className="eyebrow">Developer guides</span>
        <h2>Understand the Firecrawl workflow.</h2>
        <p className="section-intro">Independent explainers cover API access, MCP, Python, pricing, self-hosting, and alternatives so you can match the setup to your workload.</p>
        <div className="card-grid">
          <Link className="card" href="/firecrawl-api"><h3>Firecrawl API</h3><p>See the smallest scrape and crawl examples.</p><span className="text-link">Read the API guide -&gt;</span></Link>
          <Link className="card" href="/firecrawl-mcp"><h3>Firecrawl MCP</h3><p>Connect an agent to web access with a clear setup path.</p><span className="text-link">Read the MCP guide -&gt;</span></Link>
          <Link className="card" href="/firecrawl-alternatives"><h3>Alternatives by use case</h3><p>Compare managed APIs, open source, search, and actors.</p><span className="text-link">See alternatives -&gt;</span></Link>
        </div>
        <div className="stat-strip"><div><strong>One task</strong><span>Every utility has a defined input and output.</span></div><div><strong>Clear limits</strong><span>Errors and size limits are shown in the interface.</span></div><div><strong>Independent</strong><span>This is not the official Firecrawl site.</span></div></div>
      </div>
    </section>

    <div className="container narrow"><FAQSection items={pageFaqs.home}/></div>
  </PageShell>;
}
