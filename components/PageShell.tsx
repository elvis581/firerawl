import Link from "next/link";
import { firecrawlLinks } from "@/lib/data";
import { AffiliateButton } from "./AffiliateButton";
import { SiteIdentityStructuredData } from "./StructuredData";

const toolLinks = [
  ["URL to Markdown", "/tools/url-to-markdown"],
  ["Webpage to Markdown", "/tools/webpage-to-markdown"],
  ["Website to Markdown", "/tools/website-to-markdown"],
  ["URL extractor", "/tools/url-extractor"],
  ["llms.txt generator", "/tools/llms-txt-generator"],
] as const;

const guideLinks = [
  ["Overview", "/firecrawl"],
  ["Pricing", "/firecrawl-pricing"],
  ["API", "/firecrawl-api"],
  ["API key", "/firecrawl-api-key"],
  ["MCP", "/firecrawl-mcp"],
  ["Python", "/firecrawl-python"],
  ["Self-hosted", "/firecrawl-self-hosted"],
] as const;

const comparisonLinks = [
  ["Alternatives", "/firecrawl-alternatives"],
  ["Firecrawl vs Crawl4AI", "/firecrawl-vs-crawl4ai"],
  ["Firecrawl vs Apify", "/firecrawl-vs-apify"],
] as const;

function NavMenu({ label, href, links }: { label: string; href: string; links: readonly (readonly [string, string])[] }) {
  return <div className="nav-menu"><Link className="nav-menu-trigger" href={href} aria-haspopup="true">{label}<span aria-hidden="true">⌄</span></Link><div className="nav-menu-panel" role="menu">{links.map(([itemLabel, itemHref]) => <Link href={itemHref} role="menuitem" key={itemHref}>{itemLabel}</Link>)}</div></div>;
}

export function Header() {
  return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/"><span className="brand-mark">✦</span><span>Firecraw Tools</span></Link><nav className="main-nav" aria-label="Primary"><NavMenu label="Tools" href="/tools" links={toolLinks}/><NavMenu label="Guides" href="/firecrawl" links={guideLinks}/><NavMenu label="Comparisons" href="/firecrawl-alternatives" links={comparisonLinks}/><Link href="/about">About</Link></nav><AffiliateButton placement="inline" sourceComponent="header_nav">Try Firecrawl</AffiliateButton></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand" href="/"><span className="brand-mark">✦</span><span>Firecraw Tools</span></Link><p className="footer-note">Web data tools and practical developer guides for crawling, extraction, and Markdown workflows.</p></div><div><h3>Tools</h3><Link href="/tools/url-to-markdown">URL to Markdown</Link><Link href="/tools/website-to-markdown">Website to Markdown</Link><Link href="/tools/llms-txt-generator">llms.txt generator</Link><Link href="/tools/url-extractor">URL extractor</Link></div><div><h3>Guides</h3>{firecrawlLinks.slice(0, 5).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><h3>Trust</h3><Link href="/affiliate-disclosure">Affiliate disclosure</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/about">About</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Firecraw Tools</span><span>This is an independent website and is not affiliated with or operated by Firecrawl.</span></div></footer>;
}

export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteIdentityStructuredData/><Header/><main>{children}</main><Footer/></>; }
