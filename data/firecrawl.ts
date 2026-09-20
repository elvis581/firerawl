/** Centralized facts that can change as the provider changes. Keep volatile values here. */
export const firecrawlData = {
  affiliateUrl: "https://firecrawl.link/whitehead-tina",
  reviewedOn: "September 20, 2026",
  pricing: {
    model: "Credits and usage volume",
    exactPlans: "Check the current provider pricing page before budgeting.",
  },
  features: ["scrape", "crawl", "search", "structured extraction", "MCP", "Python SDK"],
  officialLinks: {
    pricing: "https://www.firecrawl.dev/pricing",
    docs: "https://docs.firecrawl.dev/",
  },
} as const;
