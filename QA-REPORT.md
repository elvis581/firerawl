# QA report

Date: 2026-09-20

## Automated checks

- `npm run typecheck` — passed.
- `npm run lint` — passed with the Next.js 15 deprecation/plugin configuration warning.
- `npm run build` — passed; 30 routes generated.
- `python3 /Users/elvis/.codex/skills/seo-tool-site-builder/scripts/audit_tool_site.py .` — passed.
- Production route metadata audit — 21 routes checked; every route has a unique title, description, one H1, and a canonical URL.
- Internal-link audit — 22 internal paths checked with no broken route.

## Local route checks

- `/sitemap.xml` returns the homepage, tools hub, trust pages, all 15 V1 core routes, and no `/go/firecrawl` or API route.
- `/robots.txt` allows public pages and disallows `/go/` and `/api/`.
- `/go/firecrawl` returns HTTP 302 to the configured Firecrawl affiliate URL.
- `/go/firecrawl` sends `X-Robots-Tag: noindex, nofollow`.
- `/api/markdown` converts `https://example.com` and returns Markdown, source URL, characters, and words.
- `/api/markdown` rejects `http://127.0.0.1:3000` as a private network target.
- `/api/extract-links` returns total, internal, and external link lists for pasted HTML.
- `/api/discover` reads the live `https://docs.firecrawl.dev` sitemap and returns 50 URLs for the capped selection workflow.
- `/does-not-exist` returns HTTP 404.
- Firecrawl guides render Article, BreadcrumbList, and FAQPage JSON-LD; tool pages render WebApplication, BreadcrumbList, and FAQPage JSON-LD.
- Tool controls include example/clear, copy, Markdown download, TXT/CSV export, selected-page conversion, and ZIP generation where the page promises them.

## Intentional limits

- Single-page Markdown conversion is best effort for public HTML and does not render authenticated or JavaScript-only content.
- Website to Markdown discovers and selects up to 10 sitemap URLs; it does not claim to be an unlimited crawler.
- llms.txt generation creates an editable directory starter from sitemap URLs; it does not fetch and summarize every page.
- Browser automation was unavailable in this environment, so responsive interaction verification used server route and API checks rather than a live browser session.
- `npm audit --omit=dev` still reports two transitive Next/PostCSS advisories; the current build remains functional, but dependency updates should be reviewed before a public production release.
