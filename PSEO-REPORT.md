# PSEO Audit Report

## A. Executive Summary

- Score: 82/100
- Result: PARTIAL - launch only after the P1 source-evidence work below
- Safe to expand: only after official-source links are rendered on commercial guides and the production host is rechecked
- P0: 0; P1: 1; P2: 2; P3: 1
- Scope: 21 local public routes, including 15 core intent routes, 5 supporting/trust routes, and the homepage
- Evidence boundary: local development server and local build only; production host, browser interaction, and mobile screenshots are unverified

The site has a coherent tool-led architecture, useful working utilities, distinct intent pages, shared page shells, centralized affiliate redirects, and a clean local indexability baseline. The main release gap is evidence presentation: `data/firecrawl.ts` stores official pricing and docs URLs, but the commercial pages do not render source links or a checked-source block. The guides therefore ask readers to verify current provider details without giving them a visible official evidence path.

This run applied the explicitly requested content optimization. The homepage, tools hub, alternatives page, and Firecrawl guide copy were adjusted for intent clarity, duplicate-brand control, and the deterministic 2%-3% keyword gate. No unsupported prices, ratings, eligibility claims, or official affiliation claims were added.

## B. Reference-method mapping

| Method | Current implementation | Result | Evidence | Gap |
| --- | --- | --- | --- | --- |
| Structured data to shared function/template | `ContentPage` and `ToolLayout` share shells; `corePages` drives sitemap and intent records | PASS | `components/ContentPage.tsx`, `components/ToolLayout.tsx`, `lib/data.ts` | Guide facts remain hand-authored instead of fully data-driven |
| Independent search-intent URLs | One canonical route per core keyword and tool job | PASS | 15 core paths in `lib/data.ts`; 21 local routes checked | No production parity proof |
| Direct above-fold answer | Page hero has intent-matched H1 and lede; tool action appears immediately on tool routes | PASS | Rendered HTML for all 21 routes | Source/checked-date context is missing on most commercial pages |
| Eligibility or equivalent utility | Working URL conversion, sitemap selection, llms.txt starter, and link extraction | PASS | `/tools/*`; API checks below | Tool limits are useful but not a full account/eligibility system |
| Hub-spoke distribution | Homepage -> tools/guides; tools hub -> five tools; guides use related guide cards | PASS | Internal-link audit found no broken internal paths | Comparison spokes have lower inlink counts than primary guides |
| Related-item links | `GuideLinks` and `firecrawlLinks` provide related guides | PASS | `components/GuideLinks.tsx`, `components/PageShell.tsx` | Anchor labels could be more scenario-specific |
| Source-backed conversion | Affiliate CTA is centralized through `/go/firecrawl`, labeled sponsored, and separate from site disclosure | PARTIAL | `components/AffiliateButton.tsx`, `components/FirecrawlCard.tsx` | Official source links are stored but not surfaced in page body |
| Sustainable status updates | Central `reviewedOn` and volatile facts object | PARTIAL | `data/firecrawl.ts` | Only pricing visibly displays the review date; no source freshness workflow is rendered |

## C. URL and entity coverage

This is a page system rather than a catalog of provider entities. The source inventory contains 15 core intent records in `lib/data.ts`, plus six supporting/trust routes. There are no drafts, ended offers, duplicate slugs, or provider entities presented as active deals.

| Metric | Count | Result |
| --- | ---: | --- |
| Core intent records | 15 | Matches sitemap core routes |
| Rendered public HTML routes | 21 | Matches local route set |
| Sitemap URLs | 21 | No `/go/` or API URLs included |
| Indexable content URLs | 21 | No `noindex` on public pages |
| Draft/coming-soon routes | 0 | No leakage found |
| Ended/unavailable entities | 0 | Not applicable to this tool/guide model |
| Duplicate slugs/entities | 0 | No duplicate route records found |
| Orphan public routes | 0 | Every checked route has at least two inlinks |

| URL | Intent/category | Indexable | Sitemap | Local status | Result |
| --- | --- | --- | --- | --- | --- |
| `/` | Web data tools hub | Yes | Yes | 200 | Pass |
| `/tools` | Tool directory | Yes | Yes | 200 | Pass |
| `/firecrawl` | Product overview | Yes | Yes | 200 | Pass |
| `/firecrawl-pricing` | Commercial investigation | Yes | Yes | 200 | Pass |
| `/firecrawl-alternatives` | Alternatives | Yes | Yes | 200 | Pass |
| `/firecrawl-api` | Developer implementation | Yes | Yes | 200 | Pass |
| `/firecrawl-api-key` | Setup/access | Yes | Yes | 200 | Pass |
| `/firecrawl-mcp` | Agent integration | Yes | Yes | 200 | Pass |
| `/firecrawl-python` | Python implementation | Yes | Yes | 200 | Pass |
| `/firecrawl-self-hosted` | Infrastructure evaluation | Yes | Yes | 200 | Pass |
| `/firecrawl-vs-crawl4ai` | Head-to-head comparison | Yes | Yes | 200 | Pass |
| `/firecrawl-vs-apify` | Head-to-head comparison | Yes | Yes | 200 | Pass |
| `/tools/url-to-markdown` | Single URL conversion | Yes | Yes | 200 | Pass |
| `/tools/webpage-to-markdown` | Single webpage conversion | Yes | Yes | 200 | Pass |
| `/tools/website-to-markdown` | Selected site pages | Yes | Yes | 200 | Pass |
| `/tools/llms-txt-generator` | AI discovery file | Yes | Yes | 200 | Pass |
| `/tools/url-extractor` | Link extraction | Yes | Yes | 200 | Pass |
| `/about` | Trust/about | Yes | Yes | 200 | Trust exception |
| `/affiliate-disclosure` | Trust/legal | Yes | Yes | 200 | Trust exception |
| `/privacy` | Trust/legal | Yes | Yes | 200 | Trust exception |
| `/terms` | Trust/legal | Yes | Yes | 200 | Trust exception |

## D. Score detail

| Dimension | Score | Maximum | Main findings |
| --- | ---: | ---: | --- |
| Data-driven architecture and template | 8 | 10 | Shared shells and centralized route records; guide facts are still distributed across page files |
| Search intent and URL ownership | 14 | 15 | Unique H1/title/canonical alignment and no route collisions |
| Above-fold answer and functional value | 13 | 15 | Tools are actionable and limits are stated; source evidence is not prominent |
| Content uniqueness and official accuracy | 14 | 20 | Similarity is below 60% on the top ten pairs; official citations are incomplete |
| Category hubs and internal links | 12 | 15 | Hub-spoke graph is connected and has no broken links; comparison distribution is lighter |
| Technical SEO and index control | 14 | 15 | Local status, canonical, sitemap, robots, metadata, and JSON-LD pass |
| Trust, conversion, mobile, and performance | 7 | 10 | Disclosure and sponsored rel are clear; mobile/browser evidence is unavailable |
| **Total** | **82** | **100** | **Conditional release** |

## E. P0 findings

None found in the local audit. No unsupported exact price, rating, active offer, official affiliation, or invalid redirect behavior was detected.

## F. P1 findings

| Severity | URL | File or production evidence | Concrete evidence | Impact | Recommended fix | Batchable | Affected pages |
| --- | --- | --- | --- | --- | --- | --- | ---: |
| P1 | Commercial Firecrawl guides | `data/firecrawl.ts:10-13`; rendered pages | Official pricing/docs URLs exist in the data object but are not rendered as source links. Several pages make current-feature or workflow claims without a visible official evidence path. | Readers and search engines cannot verify volatile product claims from the page; trust and citation readiness are weaker. | Add a shared `SourceLinks` block to commercial guides. Render official pricing/docs links, a real checked date, and claim-specific source labeling. Keep the affiliate CTA separate. | Yes | 10 |

## G. P2-P3 findings

| Severity | URL | File or production evidence | Concrete evidence | Impact | Recommended fix | Batchable | Affected pages |
| --- | --- | --- | --- | --- | --- | --- | ---: |
| P2 | All public routes | Local audit environment | CUA/browser automation was unavailable (`unsupported Codex auth method: apikey`), so responsive interaction, overflow, and first-viewport screenshots were not verified. | Mobile UX and client-side tool behavior remain unproven beyond server/API checks. | Run desktop and 390px browser checks before production release; verify tool submit, copy, download, and selection states. | Yes | 21 |
| P2 | `package.json` dependencies | `npm audit --omit=dev --json` | Two transitive production advisories remain: one moderate `next` chain and one high `postcss` advisory; the suggested fix is a major Next upgrade. | Dependency risk is separate from SEO correctness and should be reviewed before public release. | Plan a dependency upgrade in a controlled branch, rerun build and tool smoke tests, and review the major-version migration. | Yes | 2 dependency chains |
| P3 | `/firecrawl-vs-*`, `/firecrawl-python`, `/firecrawl-self-hosted` | Internal-link count audit | Comparison/self-hosting pages have the lowest inlink counts, though none are orphaned. | These pages may receive less internal authority than pricing/API pages. | Add scenario links from the tools hub or overview where the next-step fit is explicit. | Yes | 5 |

## H. Content repetition

The comparison used normalized visible text from rendered pages after excluding `script`, `style`, `header`, `nav`, and `footer` content. The top ten Jaccard word-set similarities were all below 0.40; this is well below the 0.60 manual-review threshold and does not indicate mass duplication.

| Page A | Page B | Similarity | Duplicate sections | Severity | Recommendation |
| --- | --- | ---: | --- | --- | --- |
| `firecrawl-api-key` | `firecrawl-api` | 0.381 | API key setup language and shared error/credential concepts | P2 | Add source-specific examples and a clear handoff between setup and API implementation |
| `tools-webpage-to-markdown` | `tools-url-to-markdown` | 0.357 | Single-page conversion workflow and limitation language | P2 | Keep the route split, but make the “webpage” versus “URL” use case distinction more explicit |
| `firecrawl-vs-crawl4ai` | `firecrawl-alternatives` | 0.342 | Managed/open-source comparison vocabulary | P2 | Link the head-to-head page from the relevant row and add decision criteria unique to Crawl4AI |
| `firecrawl-python` | `firecrawl-api` | 0.339 | SDK and scrape workflow terminology | P2 | Add Python-specific operational examples and source links |
| `index` | `tools` | 0.316 | Shared tool directory labels | P3 | Preserve separate homepage routing copy; current pages have different roles |

No pair exceeded 0.60, and no page was found to be a brand-name-only replacement of another page.

## I. Official-source verification

Live connectivity checks returned HTTP 200 for `https://www.firecrawl.dev/pricing` and `https://docs.firecrawl.dev/` on 2026-09-20. This verifies URL reachability only; it does not verify every claim on every guide.

| Entity/claim area | Current status | Official source | Site claim | Match | Problem | Checked date |
| --- | --- | --- | --- | --- | --- | --- |
| Firecrawl pricing model | Volatile | `https://www.firecrawl.dev/pricing` | Credits, free allowance may change, exact plan numbers should be checked live | Partial: directionally qualified | Source URL is not visible in the rendered pricing page | 2026-09-20 |
| Firecrawl API/docs workflow | Volatile | `https://docs.firecrawl.dev/` | Scrape/crawl/search/extraction/API-key patterns | Partial: broad workflow only | Source URL is stored but not rendered beside claims | 2026-09-20 |
| Crawl4AI, Apify, Tavily, Exa, ScrapingBee, Bright Data comparisons | Unverified locally | No official source record in data | Workflow-fit descriptions only, with no exact prices or ratings | Not verified | Add provider source links or label comparison facts as needing current verification | Not checked |

Affiliate destinations are kept separate from evidence sources. `/go/firecrawl` returned HTTP 302 to `https://firecrawl.link/whitehead-tina` and `X-Robots-Tag: noindex, nofollow`; rendered CTAs use `rel="sponsored nofollow noopener"`.

## J. Internal-link report

The local internal-link audit found no broken internal links, no redirect chains, no sitemap-only public routes, and no draft links. All 21 public routes had at least two incoming internal links.

Lowest inlink counts:

- `/firecrawl-vs-apify`: 2
- `/firecrawl-vs-crawl4ai`: 2
- `/tools/webpage-to-markdown`: 3
- `/firecrawl-python`: 4
- `/firecrawl-self-hosted`: 5

The homepage had 62 incoming references in the rendered shared navigation/footer graph, while the privacy and terms routes are heavily linked from the trust footer. The graph is connected; the remaining opportunity is contextual distribution from tool pages to the most relevant comparison or implementation guide.

## K. Technical SEO

- Status: all 21 public routes returned HTTP 200 locally; `/missing` returned HTTP 404.
- Redirects: `/go/firecrawl` is a deliberate 302 affiliate redirect with `noindex, nofollow`.
- Canonical: every rendered page has one unique canonical on `https://firecraw.com`.
- Robots: `/robots.txt` allows public pages and disallows `/go/`, `/api/`, and `/404`.
- Sitemap: 21 URLs; no API, redirect, or 404 route included.
- Metadata: every route has a title, description, one H1, and a canonical; titles are unique in the local set.
- JSON-LD: guide pages render `Article`, `BreadcrumbList`, and `FAQPage`; tool pages render `WebApplication`, `BreadcrumbList`, and `FAQPage`. Tool offers state price `0`, matching the visible free/no-account positioning.
- Host/HTTPS: canonical and sitemap use the configured production host, but production response evidence is unavailable in this run.
- URL normalization: no parameter pages or alternate trailing-slash routes were found in the local route inventory.
- Soft 404: unknown route returned a real 404.
- Build: `npm run build` generated 30 Next.js routes successfully.

Keyword-density evidence (checker excludes head metadata, scripts, styles, code blocks, and link destinations):

| Page group | Result |
| --- | --- |
| 15 commercial/tool pages | All PASS, 2.02%-2.75% |
| Homepage and `/tools` hub | PASS, 2.49% for `firecrawl` on the homepage and 2.38% for `free web data tools` on `/tools`; homepage remains the brand and tool hub |
| About, disclosure, privacy, terms | N/A trust/legal exception; measured but not padded |

## L. Remediation order

1. Add visible official source links, checked dates, and claim-level source labels to commercial guides.
2. Run browser-based desktop and 390px mobile checks, including tool interactions and overflow checks.
3. Review the Next/PostCSS dependency advisories and upgrade in a controlled validation branch.
4. Add contextual links into the lower-inlink comparison and implementation pages.
5. Recheck the production host for status, canonical, robots, sitemap, redirect, and source-link parity.

## M. Next implementation batches

- Batch 1: create a shared source-evidence component driven by `firecrawlData.officialLinks`, then add source links and checked dates to pricing/API/MCP/Python/self-hosted/comparison pages.
- Batch 2: run browser QA at desktop and 390px mobile viewports; exercise URL conversion, sitemap selection, llms.txt generation, link extraction, copy, download, and ZIP states.
- Batch 3: review and update Next/PostCSS dependencies without changing route behavior; rerun typecheck, lint, build, route, and API smoke checks.
- Batch 4: improve contextual internal links for the five lowest-inlink pages and repeat the link-graph audit.
- Batch 5: deploy, then repeat the same evidence checks against the production host and record the live results separately from local evidence.
