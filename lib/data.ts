export const corePages = [
  { path: "/firecrawl-pricing", keyword: "firecrawl pricing", secondary: ["firecrawl price", "is firecrawl free"], intent: "Commercial investigation" },
  { path: "/firecrawl-alternatives", keyword: "firecrawl alternatives", secondary: [], intent: "Product alternatives" },
  { path: "/firecrawl-api", keyword: "firecrawl api", secondary: ["firecrawl search api", "firecrawl web scraper"], intent: "Developer implementation" },
  { path: "/firecrawl", keyword: "firecrawl", secondary: ["what is firecrawl", "firecrawl web scraper"], intent: "Brand and product overview" },
  { path: "/firecrawl-mcp", keyword: "firecrawl mcp", secondary: ["firecrawl mcp claude", "firecrawl mcp server"], intent: "Agent integration" },
  { path: "/firecrawl-api-key", keyword: "firecrawl api key", secondary: ["firecrawl_api_key", "firecrawls api key"], intent: "Setup and access" },
  { path: "/firecrawl-vs-crawl4ai", keyword: "firecrawl vs crawl4ai", secondary: [], intent: "Head-to-head comparison" },
  { path: "/firecrawl-vs-apify", keyword: "firecrawl vs apify", secondary: [], intent: "Head-to-head comparison" },
  { path: "/firecrawl-self-hosted", keyword: "firecrawl self-hosted", secondary: ["firecrawl self host", "firecrawl docker"], intent: "Infrastructure evaluation" },
  { path: "/firecrawl-python", keyword: "firecrawl python", secondary: [], intent: "Python implementation" },
  { path: "/tools/url-to-markdown", keyword: "url to markdown", secondary: ["web to markdown"], intent: "Single URL conversion" },
  { path: "/tools/webpage-to-markdown", keyword: "webpage to markdown", secondary: ["web to markdown"], intent: "Single webpage conversion" },
  { path: "/tools/website-to-markdown", keyword: "website to markdown", secondary: ["website to md", "website to markdown converter"], intent: "Selected site pages" },
  { path: "/tools/llms-txt-generator", keyword: "llms.txt generator", secondary: ["llms txt generator"], intent: "AI discovery file" },
  { path: "/tools/url-extractor", keyword: "url extractor", secondary: ["link extractor", "extract urls"], intent: "Link extraction" },
] as const;

export const supportingPages = [
  { path: "/", keyword: "firecrawl", intent: "Brand and tool hub" },
  { path: "/tools", keyword: "free web data tools", intent: "Tool directory" },
  { path: "/about", keyword: null, intent: "Trust/about" },
  { path: "/affiliate-disclosure", keyword: null, intent: "Affiliate disclosure" },
  { path: "/privacy", keyword: null, intent: "Privacy" },
  { path: "/terms", keyword: null, intent: "Terms" },
] as const;

export const firecrawlLinks = [
  ["Overview", "/firecrawl"], ["Pricing", "/firecrawl-pricing"], ["API", "/firecrawl-api"],
  ["API key", "/firecrawl-api-key"], ["MCP", "/firecrawl-mcp"], ["Python", "/firecrawl-python"],
  ["Self-hosted", "/firecrawl-self-hosted"], ["Alternatives", "/firecrawl-alternatives"],
] as const;
