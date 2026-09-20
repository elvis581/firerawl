# Firecraw Tools Page Audit

Audit date: 2026-09-20. Scope: 21 public local routes rendered from `http://localhost:3001/`. Word counts are visible words inside `<main>`; title and description lengths include the rendered site-name suffix where present.

Thickness thresholds used here are practical review heuristics: commercial and tool pages at 350+ visible words are `PASS`; 300–349 are `WATCH`; below 300 are `THIN`. About, disclosure, privacy, and terms pages are trust/legal exceptions and are not padded to commercial-page length.

## Per-page results

| Route | Primary role | Main words | Thickness | Title chars | Description chars | H1 alignment | Result |
| --- | --- | ---: | --- | ---: | ---: | --- | --- |
| `/` | Brand and tool hub | 497 | PASS | 30 | 141 | `Firecrawl tools for developers` | PASS |
| `/tools` | Tool directory | 410 | PASS | 36 | 145 | `Free web data tools` | PASS |
| `/firecrawl` | Product overview | 476 | PASS | 35 | 134 | `What is Firecrawl?` | PASS |
| `/firecrawl-pricing` | Commercial investigation | 513 | PASS | 46 | 148 | `Firecrawl pricing` | PASS |
| `/firecrawl-alternatives` | Alternatives | 483 | PASS | 46 | 132 | `Firecrawl alternatives` | PASS |
| `/firecrawl-api` | Developer implementation | 449 | PASS | 48 | 140 | `Firecrawl API` | PASS |
| `/firecrawl-api-key` | Setup and access | 437 | PASS | 40 | 153 | `Firecrawl API key` | PASS |
| `/firecrawl-mcp` | Agent integration | 457 | PASS | 44 | 131 | `Firecrawl MCP` | PASS |
| `/firecrawl-python` | Python implementation | 431 | PASS | 43 | 142 | `Firecrawl Python` | PASS |
| `/firecrawl-self-hosted` | Infrastructure evaluation | 436 | PASS | 44 | 142 | `Firecrawl self-hosted` | PASS |
| `/firecrawl-vs-crawl4ai` | Head-to-head comparison | 440 | PASS | 38 | 124 | `Firecrawl vs Crawl4AI` | PASS |
| `/firecrawl-vs-apify` | Head-to-head comparison | 449 | PASS | 35 | 141 | `Firecrawl vs Apify` | PASS |
| `/tools/url-to-markdown` | Single URL conversion | 439 | PASS | 42 | 148 | `URL to Markdown` | PASS |
| `/tools/webpage-to-markdown` | Single webpage conversion | 400 | PASS | 46 | 133 | `Webpage to Markdown` | PASS |
| `/tools/website-to-markdown` | Selected site pages | 398 | PASS | 36 | 125 | `Website to Markdown` | PASS |
| `/tools/llms-txt-generator` | AI discovery file | 375 | PASS | 35 | 128 | `llms.txt generator` | PASS |
| `/tools/url-extractor` | Link extraction | 445 | PASS | 30 | 134 | `URL extractor` | PASS |
| `/about` | Trust/about | 210 | TRUST EXCEPTION | 37 | 137 | `About Firecraw Tools` | PASS |
| `/affiliate-disclosure` | Legal disclosure | 157 | TRUST EXCEPTION | 37 | 145 | Disclosure topic | PASS |
| `/privacy` | Legal/privacy | 172 | TRUST EXCEPTION | 24 | 129 | Privacy topic | PASS |
| `/terms` | Legal/terms | 157 | TRUST EXCEPTION | 29 | 142 | Terms topic | PASS |

## What was fixed

- Set the homepage ownership to `firecrawl` and aligned its title/H1 around `Firecrawl tools for developers`; `/firecrawl` remains the explanatory product overview with a distinct `What is Firecrawl?` H1.
- Shortened long metadata titles, including alternatives, pricing, self-hosted, tools, and the Markdown tool pages.
- Expanded short descriptions to a usable 120–160 character range without inventing prices or product claims.
- Expanded `/tools` with a per-tool output section and practical scaling limits; its visible main content increased to 410 words.
- Aligned `/about` title and H1 around `About Firecraw Tools`.
- Added Organization and WebSite JSON-LD identity data through the shared page shell. Guide and tool pages retain their Article/WebApplication and FAQ schema.

## Remaining review items

1. The local audit runner cannot fetch `https://firecraw.com/sitemap.xml` from the localhost crawl, even though `http://localhost:3001/sitemap.xml` responds locally. Production sitemap, canonical, and robots parity remain `Needs Verification` until the public host is checked.
2. Several guide and tool pages make limits or workflow claims without a visible checked-date/source block. The official Firecrawl pricing/docs URLs exist in project data, but source presentation should be expanded in a separate evidence pass.
3. Browser automation is unavailable in this environment, so hover, mobile overflow, copy, and download behavior remain server/API verified rather than screenshot verified.
4. No analytics, Search Console, or conversion data was available. Ranking, CTR, affiliate revenue, and AI citation outcomes are not inferred from this local audit.

## Verification

- `npm run typecheck` passed.
- `npm run lint` passed with the existing Next.js deprecation notice.
- `npm run build` passed and generated 30 routes.
- The tool-site copy/affiliate audit passed.
- All 21 public routes returned HTTP `200` after the development server restart.
- Rendered keyword-density check passed for all 17 commercial/tool pages at `2.04%–2.93%`; trust/legal pages remain natural-language exceptions.
- No duplicate rendered titles were found.

## Independent B-perspective review

Audit rerun: 2026-09-20 14:29 CST with `site-audit http://localhost:3001 --max-pages 100 --mode audit_only`.

- 22 local pages were crawled; all local public routes returned HTTP 200.
- P0 findings: 0 after normalizing the `url extractor` keyword and adding explicit First/Second/Finally steps to the API and API-key guides.
- The audit still reports a blocked release because its site score is a heuristic 31/100 and it follows `/go/firecrawl` to the external Firecrawl pricing page. Canonical and schema findings on that external page are outside this site.
- Local sitemap and robots responses are verified at `/sitemap.xml` and `/robots.txt`; production-host parity remains Needs Verification because the local crawler cannot fetch `https://firecraw.com/sitemap.xml`.
- Guide pages now expose a visible checked date plus official Firecrawl documentation and pricing links. Tool pages expose an implementation check date and describe their local best-effort limits.
- Trust/legal pages remain intentionally short. They are not padded to meet commercial-page word counts or keyword density.

The remaining P1/P2 items are review opportunities rather than automatic release blockers: add more direct-answer blocks to selected tools, provide first-party links only when a page makes a provider claim, and verify production canonical/redirect behavior after deployment. No ranking, traffic, conversion, or AI citation outcome is inferred from this local run.
