# Executive Summary

- Site: Firecraw Tools (firecraw.com)
- Audit run: 2026-09-20T06:14:28.220Z-201f586e
- Site score: **30/100**
- AI Citation score: **45/100**
- Crawled pages: **22**
- P0 / P1 / P2 / P3: **4 / 62 / 52 / 0**
- Release decision: **BLOCKED**
- Audit mode: **audit_only**; execution capability: **report_only**
- Coverage: **full-discovered-scope** (22 page(s), tool-hub, navigation-hub, tool, overview, pricing, tutorial, alternatives, comparison, about, trust-legal)
- Result semantics: Verified = directly observed; Inferred = derived from evidence; Hypothesis = conditional working assumption; Needs Verification = evidence is unavailable.

## Audit baseline

| Known facts | Working assumptions | Needs verification |
| --- | --- | --- |
| Audit mode: audit_only. Coverage: full-discovered-scope; 22 page(s) fetched. Available data declared: none. | Pages returned to the HTTP crawler represent the content available to non-JavaScript crawlers. Site Profile page overrides and indexation intentions are current. | GSC/GA4/search analytics were not available; traffic, ranking, and CTR conclusions are not verified. Lead, order, payment, and revenue attribution data were not available. No production publishing capability is assumed. |

## Permissions and data

- Analysis periods: 7 days, 14 days, 28 days
- Available data: none declared
- Code read/write: yes / no
- Analytics/conversion data: no / no
- Production publishing: no

## Coverage limitations

- Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed
- No sitemap URL inventory was available.

## Gate reasons

- Site score 30 is below 85.
- 22 page(s) score below article threshold 85.
- AI Citation score 45 is below 75.
- 4 P0 issue(s) block publication.

## Five most serious issues

1. **P0 Title promise is not answered by the body** — http://localhost:3001/tools/url-extractor (Inferred)
2. **P0 Tutorial has no executable steps** — http://localhost:3001/firecrawl-api (Inferred)
3. **P0 Tutorial has no executable steps** — http://localhost:3001/firecrawl-api-key (Inferred)
4. **P0 Title promise is not answered by the body** — http://localhost:3001/terms (Inferred)
5. **P1 No valid sitemap URLs discovered** — site-wide (Verified)

## Priority order

1. Resolve all P0 indexation, canonical, truthfulness, severe overlap, and intent conflicts.
2. Resolve P1 structure, evidence, answer quality, and ranking-impact issues.
3. Resolve Needs Verification items with source evidence or explicit human confirmation.
4. Address P2 experience and formatting improvements.
5. Schedule P3 enhancements only after higher-priority work is stable.

> Scores and thresholds are internal audit heuristics. They are not search-engine penalty lines and do not guarantee ranking or AI-search citation.
