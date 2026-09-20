# Firecraw Tools

Firecraw Tools is an independent SEO and utility site for web crawling, extraction, Markdown, AI-agent context, and developer workflows. It is not affiliated with or operated by Firecrawl.

The site uses Next.js App Router, TypeScript, Tailwind/PostCSS configuration, and a small shared CSS layer for the visual system.

## Run locally

```bash
npm install
npm run dev
```

The default site URL is `https://firecraw.com`; set `NEXT_PUBLIC_SITE_URL` for another deployment host.

## V1 routes

The `/tools` route is a supporting directory for the five tool pages below.

| Route | Primary intent | Status |
| --- | --- | --- |
| `/firecrawl-pricing` | Firecrawl pricing | Live guide |
| `/firecrawl-alternatives` | Firecrawl alternatives | Live guide |
| `/firecrawl-api` | Firecrawl API | Live guide |
| `/firecrawl` | Firecrawl overview | Live hub |
| `/firecrawl-mcp` | Firecrawl MCP | Live guide |
| `/firecrawl-api-key` | Firecrawl API key | Live guide |
| `/firecrawl-vs-crawl4ai` | Firecrawl vs Crawl4AI | Live comparison |
| `/firecrawl-vs-apify` | Firecrawl vs Apify | Live comparison |
| `/firecrawl-self-hosted` | Firecrawl self-hosted | Live guide |
| `/firecrawl-python` | Firecrawl Python | Live guide |
| `/tools/url-to-markdown` | Single URL to Markdown | Working tool |
| `/tools/webpage-to-markdown` | Single webpage to Markdown | Working tool |
| `/tools/website-to-markdown` | Sitemap selection | Working limited tool |
| `/tools/llms-txt-generator` | Starter llms.txt | Working limited tool |
| `/tools/url-extractor` | Internal/external links | Working tool |

## Technical notes

- Affiliate links are centralized behind `/go/firecrawl` and use `rel="sponsored nofollow noopener"`.
- URL-fetching APIs validate protocol, DNS resolution, private ranges, redirects, timeouts, and response size.
- Sitemap, robots, canonical, Open Graph, Twitter metadata, and breadcrumbs are generated from the App Router.
- The URL-to-Markdown route fetches public HTML server-side and is intentionally limited to 2 MB and one page.
- The website tool discovers a sitemap, converts up to 10 selected pages, and downloads combined Markdown or a ZIP.
