# Executive Summary

- Site: Firecraw Tools (firecraw.com)
- Audit run: 2026-09-20T06:11:17.216Z-37d9d5f1
- Site score: **0/100**
- AI Citation score: **0/100**
- Crawled pages: **1**
- P0 / P1 / P2 / P3: **1 / 4 / 1 / 1**
- Release decision: **BLOCKED**
- Audit mode: **audit_only**; execution capability: **report_only**
- Coverage: **full-discovered-scope** (1 page(s), tool-hub)
- Result semantics: Verified = directly observed; Inferred = derived from evidence; Hypothesis = conditional working assumption; Needs Verification = evidence is unavailable.

## Audit baseline

| Known facts | Working assumptions | Needs verification |
| --- | --- | --- |
| Audit mode: audit_only. Coverage: full-discovered-scope; 1 page(s) fetched. Available data declared: none. | Pages returned to the HTTP crawler represent the content available to non-JavaScript crawlers. Site Profile page overrides and indexation intentions are current. | GSC/GA4/search analytics were not available; traffic, ranking, and CTR conclusions are not verified. Lead, order, payment, and revenue attribution data were not available. No production publishing capability is assumed. |

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

- Site score 0 is below 85.
- AI Citation score 0 is below 75.
- 1 P0 issue(s) block publication.

## Five most serious issues

1. **P0 HTTP 500 response** — http://localhost:3001/ (Verified)
2. **P1 No valid sitemap URLs discovered** — site-wide (Verified)
3. **P1 Canonical is missing** — http://localhost:3001/ (Verified)
4. **P1 Title is missing** — http://localhost:3001/ (Verified)
5. **P1 H1 is missing** — http://localhost:3001/ (Verified)

## Priority order

1. Resolve all P0 indexation, canonical, truthfulness, severe overlap, and intent conflicts.
2. Resolve P1 structure, evidence, answer quality, and ranking-impact issues.
3. Resolve Needs Verification items with source evidence or explicit human confirmation.
4. Address P2 experience and formatting improvements.
5. Schedule P3 enhancements only after higher-priority work is stable.

> Scores and thresholds are internal audit heuristics. They are not search-engine penalty lines and do not guarantee ranking or AI-search citation.
