# Site SEO & GEO Audit

## Crawl inventory

| URL | HTTP | Canonical | Robots | Page type | Words | Sitemap |
| --- | ---: | --- | --- | --- | ---: | --- |
| http://localhost:3001/ | 200 | https://firecraw.com/ | none | general | 530 | no |
| http://localhost:3001/tools | 200 | https://firecraw.com/tools | none | general | 339 | no |
| http://localhost:3001/tools/url-to-markdown | 200 | https://firecraw.com/tools/url-to-markdown | none | tool | 446 | no |
| http://localhost:3001/tools/webpage-to-markdown | 200 | https://firecraw.com/tools/webpage-to-markdown | none | tool | 408 | no |
| http://localhost:3001/tools/website-to-markdown | 200 | https://firecraw.com/tools/website-to-markdown | none | general | 405 | no |
| http://localhost:3001/tools/url-extractor | 200 | https://firecraw.com/tools/url-extractor | none | general | 453 | no |
| http://localhost:3001/tools/llms-txt-generator | 200 | https://firecraw.com/tools/llms-txt-generator | none | tool | 382 | no |
| http://localhost:3001/firecrawl | 200 | https://firecraw.com/firecrawl | none | pricing | 460 | no |
| http://localhost:3001/firecrawl-pricing | 200 | https://firecraw.com/firecrawl-pricing | none | pricing | 491 | no |
| http://localhost:3001/firecrawl-api | 200 | https://firecraw.com/firecrawl-api | none | general | 419 | no |
| http://localhost:3001/firecrawl-api-key | 200 | https://firecraw.com/firecrawl-api-key | none | general | 405 | no |
| http://localhost:3001/firecrawl-mcp | 200 | https://firecraw.com/firecrawl-mcp | none | general | 423 | no |
| http://localhost:3001/firecrawl-python | 200 | https://firecraw.com/firecrawl-python | none | general | 392 | no |
| http://localhost:3001/firecrawl-self-hosted | 200 | https://firecraw.com/firecrawl-self-hosted | none | general | 402 | no |
| http://localhost:3001/firecrawl-alternatives | 200 | https://firecraw.com/firecrawl-alternatives | none | comparison | 461 | no |
| http://localhost:3001/firecrawl-vs-crawl4ai | 200 | https://firecraw.com/firecrawl-vs-crawl4ai | none | comparison | 403 | no |
| http://localhost:3001/firecrawl-vs-apify | 200 | https://firecraw.com/firecrawl-vs-apify | none | comparison | 415 | no |
| http://localhost:3001/about | 200 | https://firecraw.com/about | none | general | 223 | no |
| https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm | 200 | https://www.firecrawl.dev/pricing | follow, index | pricing | 1979 | no |
| http://localhost:3001/affiliate-disclosure | 200 | https://firecraw.com/affiliate-disclosure | none | general | 159 | no |
| http://localhost:3001/privacy | 200 | https://firecraw.com/privacy | none | general | 177 | no |
| http://localhost:3001/terms | 200 | https://firecraw.com/terms | none | general | 162 | no |

## Crawl errors

- Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed

## Technical SEO findings

### 1. [P1] No valid sitemap URLs discovered

- URL: site-wide
- Result type: **Verified**
- Evidence source:
  - Site-level crawl and configuration signals
- Evidence:
  - sitemap status: 0
  - Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed
- Current behavior: sitemap status: 0 Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Publish a valid XML sitemap and reference it from robots.txt.
- Change risk: **high**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: The sitemap returns HTTP 200 and lists canonical, indexable URLs only.
- Verification:
  - The sitemap returns HTTP 200 and lists canonical, indexable URLs only.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### 2. [P1] Title and H1 appear to target different topics

- URL: http://localhost:3001/
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - title: Free Web Data Tools for Developers | Firecraw Tools
  - H1: Make the web easier to use in Markdown.
- Current behavior: title: Free Web Data Tools for Developers | Firecraw Tools H1: Make the web easier to use in Markdown.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Align the title, H1, and opening answer around one search intent.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Title and H1 clearly describe the same user need while remaining naturally distinct.
- Verification:
  - Title and H1 clearly describe the same user need while remaining naturally distinct.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 3. [P1] Title and H1 appear to target different topics

- URL: http://localhost:3001/firecrawl-self-hosted
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-self-hosted
- Evidence:
  - title: Firecrawl Self Host: infrastructure and maintenance tradeoffs | Firecraw Tools
  - H1: Firecrawl self-hosted: what you take on
- Current behavior: title: Firecrawl Self Host: infrastructure and maintenance tradeoffs | Firecraw Tools H1: Firecrawl self-hosted: what you take on
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Align the title, H1, and opening answer around one search intent.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Title and H1 clearly describe the same user need while remaining naturally distinct.
- Verification:
  - Title and H1 clearly describe the same user need while remaining naturally distinct.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 4. [P1] Title and H1 appear to target different topics

- URL: http://localhost:3001/firecrawl-alternatives
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-alternatives
- Evidence:
  - title: Firecrawl Alternatives: compare managed APIs, open source, and search tools | Firecraw Tools
  - H1: Firecrawl alternatives by job
- Current behavior: title: Firecrawl Alternatives: compare managed APIs, open source, and search tools | Firecraw Tools H1: Firecrawl alternatives by job
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Align the title, H1, and opening answer around one search intent.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Title and H1 clearly describe the same user need while remaining naturally distinct.
- Verification:
  - Title and H1 clearly describe the same user need while remaining naturally distinct.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 5. [P1] Title and H1 appear to target different topics

- URL: http://localhost:3001/about
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/about
- Evidence:
  - title: About Firecraw Tools | Firecraw Tools
  - H1: Practical web data utilities with independent guidance.
- Current behavior: title: About Firecraw Tools | Firecraw Tools H1: Practical web data utilities with independent guidance.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Align the title, H1, and opening answer around one search intent.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Title and H1 clearly describe the same user need while remaining naturally distinct.
- Verification:
  - Title and H1 clearly describe the same user need while remaining naturally distinct.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 6. [P1] Canonical does not match the fetched final URL

- URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Evidence:
  - final URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
  - canonical: https://www.firecrawl.dev/pricing
- Current behavior: final URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm canonical: https://www.firecrawl.dev/pricing
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Confirm whether consolidation is intentional; otherwise use the preferred self-canonical.
- Change risk: **high**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Canonical, internal links, redirects, and sitemap all agree on one preferred URL.
- Verification:
  - Canonical, internal links, redirects, and sitemap all agree on one preferred URL.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### 7. [P1] Indexable page contains no internal links

- URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Evidence:
  - Zero same-origin links were extracted from the page.
- Current behavior: Zero same-origin links were extracted from the page.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add useful contextual links to the parent cluster and relevant next steps.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: The page includes crawlable, descriptive internal links that help users continue.
- Verification:
  - The page includes crawlable, descriptive internal links that help users continue.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 8. [P2] No JSON-LD schema found

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No application/ld+json block was extracted.
- Current behavior: No application/ld+json block was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Add only schema that accurately describes visible content and page identity.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Valid JSON-LD is present and its claims are visible on the page.
- Verification:
  - Valid JSON-LD is present and its claims are visible on the page.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 9. [P2] No JSON-LD schema found

- URL: http://localhost:3001/tools
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools
- Evidence:
  - No application/ld+json block was extracted.
- Current behavior: No application/ld+json block was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Add only schema that accurately describes visible content and page identity.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Valid JSON-LD is present and its claims are visible on the page.
- Verification:
  - Valid JSON-LD is present and its claims are visible on the page.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 10. [P2] No JSON-LD schema found

- URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Evidence:
  - No application/ld+json block was extracted.
- Current behavior: No application/ld+json block was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Add only schema that accurately describes visible content and page identity.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Valid JSON-LD is present and its claims are visible on the page.
- Verification:
  - Valid JSON-LD is present and its claims are visible on the page.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.


## GEO findings

### 1. [P1] Opening does not provide a directly extractable answer

- URL: http://localhost:3001/
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - The first three sentences contain no clear answer, recommendation, or definition signal.
- Current behavior: The first three sentences contain no clear answer, recommendation, or definition signal.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: State the core answer and its main condition near the beginning.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A reader can quote the opening as a complete answer without surrounding marketing copy.
- Verification:
  - A reader can quote the opening as a complete answer without surrounding marketing copy.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 2. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 3. [P1] Opening does not provide a directly extractable answer

- URL: http://localhost:3001/tools
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools
- Evidence:
  - The first three sentences contain no clear answer, recommendation, or definition signal.
- Current behavior: The first three sentences contain no clear answer, recommendation, or definition signal.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: State the core answer and its main condition near the beginning.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A reader can quote the opening as a complete answer without surrounding marketing copy.
- Verification:
  - A reader can quote the opening as a complete answer without surrounding marketing copy.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 4. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 5. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools/url-to-markdown
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-to-markdown
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 6. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools/webpage-to-markdown
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/webpage-to-markdown
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 7. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools/website-to-markdown
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/website-to-markdown
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 8. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools/url-extractor
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-extractor
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 9. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/tools/llms-txt-generator
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/llms-txt-generator
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 10. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/tools/llms-txt-generator
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/llms-txt-generator
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 11. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 12. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 13. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-pricing
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-pricing
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 14. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl-pricing
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-pricing
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 15. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-api
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 16. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-api-key
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api-key
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 17. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl-api-key
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api-key
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 18. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-mcp
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-mcp
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 19. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl-mcp
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-mcp
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 20. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-python
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-python
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 21. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-self-hosted
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-self-hosted
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 22. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl-self-hosted
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-self-hosted
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 23. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-alternatives
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-alternatives
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 24. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-vs-crawl4ai
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-crawl4ai
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 25. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/firecrawl-vs-apify
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-apify
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 26. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/firecrawl-vs-apify
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-apify
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 27. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/about
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/about
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 28. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/about
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/about
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 29. [P1] No explicit conclusion or suitability statement

- URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 30. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/affiliate-disclosure
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/affiliate-disclosure
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 31. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/affiliate-disclosure
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/affiliate-disclosure
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 32. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/privacy
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/privacy
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 33. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/privacy
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/privacy
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 34. [P1] No explicit conclusion or suitability statement

- URL: http://localhost:3001/terms
- Result type: **Inferred**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/terms
- Evidence:
  - No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Current behavior: No recommendation, verdict, suitable-for, or unsuitable-for phrase was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add an evidence-linked conclusion stating who should and should not choose the subject.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: A dedicated visible conclusion contains a specific decision and conditions.
- Verification:
  - A dedicated visible conclusion contains a specific decision and conditions.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 35. [P1] Important claims lack visible evidence signals

- URL: http://localhost:3001/terms
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/terms
- Evidence:
  - No source, test, measurement, result, or screenshot reference was detected.
- Current behavior: No source, test, measurement, result, or screenshot reference was detected.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Attach current sources or first-hand task evidence to important claims.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: Each material conclusion cites a source or names the observed test and result.
- Verification:
  - Each material conclusion cites a source or names the observed test and result.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 36. [P2] Author identity is missing

- URL: http://localhost:3001/
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 37. [P2] Test or update date is missing

- URL: http://localhost:3001/
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 38. [P2] Author identity is missing

- URL: http://localhost:3001/tools
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 39. [P2] Test or update date is missing

- URL: http://localhost:3001/tools
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 40. [P2] Author identity is missing

- URL: http://localhost:3001/tools/url-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-to-markdown
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 41. [P2] Test or update date is missing

- URL: http://localhost:3001/tools/url-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-to-markdown
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 42. [P2] Author identity is missing

- URL: http://localhost:3001/tools/webpage-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/webpage-to-markdown
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 43. [P2] Test or update date is missing

- URL: http://localhost:3001/tools/webpage-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/webpage-to-markdown
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 44. [P2] Author identity is missing

- URL: http://localhost:3001/tools/website-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/website-to-markdown
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 45. [P2] Test or update date is missing

- URL: http://localhost:3001/tools/website-to-markdown
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/website-to-markdown
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 46. [P2] Author identity is missing

- URL: http://localhost:3001/tools/url-extractor
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-extractor
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 47. [P2] Test or update date is missing

- URL: http://localhost:3001/tools/url-extractor
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/url-extractor
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 48. [P2] Author identity is missing

- URL: http://localhost:3001/tools/llms-txt-generator
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/llms-txt-generator
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 49. [P2] Test or update date is missing

- URL: http://localhost:3001/tools/llms-txt-generator
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/tools/llms-txt-generator
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 50. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 51. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 52. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-pricing
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-pricing
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 53. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-pricing
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-pricing
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 54. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-api
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 55. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-api
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 56. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-api-key
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api-key
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 57. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-api-key
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-api-key
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 58. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-mcp
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-mcp
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 59. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-mcp
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-mcp
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 60. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-python
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-python
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 61. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-python
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-python
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 62. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-self-hosted
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-self-hosted
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 63. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-self-hosted
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-self-hosted
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 64. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-alternatives
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-alternatives
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 65. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-alternatives
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-alternatives
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 66. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-vs-crawl4ai
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-crawl4ai
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 67. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-vs-crawl4ai
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-crawl4ai
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 68. [P2] Author identity is missing

- URL: http://localhost:3001/firecrawl-vs-apify
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-apify
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 69. [P2] Test or update date is missing

- URL: http://localhost:3001/firecrawl-vs-apify
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/firecrawl-vs-apify
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 70. [P2] Author identity is missing

- URL: http://localhost:3001/about
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/about
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 71. [P2] Test or update date is missing

- URL: http://localhost:3001/about
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/about
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 72. [P2] Test or update date is missing

- URL: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: https://www.firecrawl.dev/pricing?via=whitehead-tina&dub_id=oMgvnnzZPdnhEWZm
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 73. [P2] Author identity is missing

- URL: http://localhost:3001/affiliate-disclosure
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/affiliate-disclosure
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 74. [P2] Test or update date is missing

- URL: http://localhost:3001/affiliate-disclosure
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/affiliate-disclosure
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 75. [P2] Author identity is missing

- URL: http://localhost:3001/privacy
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/privacy
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 76. [P2] Test or update date is missing

- URL: http://localhost:3001/privacy
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/privacy
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 77. [P2] Author identity is missing

- URL: http://localhost:3001/terms
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/terms
- Evidence:
  - No author metadata or visible author element was extracted.
- Current behavior: No author metadata or visible author element was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Expose a truthful author identity and relevant responsibility.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible page and metadata identify the same real author.
- Verification:
  - The visible page and metadata identify the same real author.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 78. [P2] Test or update date is missing

- URL: http://localhost:3001/terms
- Result type: **Needs Verification**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/terms
- Evidence:
  - No article modified time or visible datetime was extracted.
- Current behavior: No article modified time or visible datetime was extracted.
- Impact: Creates a page-level optimization or experience gap with moderate impact.
- Recommendation: Show the tested/updated date and version where facts can change.
- Change risk: **observe**
- Prerequisites:
  - Confirm the underlying fact or source before changing the site.
- Acceptance criteria: The visible date and machine-readable date agree.
- Verification:
  - The visible date and machine-readable date agree.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.
