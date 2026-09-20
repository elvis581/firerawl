# Site SEO & GEO Audit

## Crawl inventory

| URL | HTTP | Canonical | Robots | Page type | Words | Sitemap |
| --- | ---: | --- | --- | --- | ---: | --- |
| http://localhost:3001/ | 500 | missing | none | tool-hub | 0 | no |

## Crawl errors

- Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed

## Technical SEO findings

### 1. [P0] HTTP 500 response

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - Observed HTTP status 500.
- Current behavior: Observed HTTP status 500.
- Impact: May block access, indexation, data integrity, or release readiness.
- Recommendation: Restore the page or update all internal links and sitemap entries to the intended destination.
- Change risk: **high**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: The intended URL returns HTTP 200 and obsolete URLs are no longer linked or submitted.
- Verification:
  - The intended URL returns HTTP 200 and obsolete URLs are no longer linked or submitted.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### 2. [P1] No valid sitemap URLs discovered

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

### 3. [P1] Canonical is missing

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No <link rel="canonical"> was found.
- Current behavior: No <link rel="canonical"> was found.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add a self-referencing absolute canonical for this indexable page.
- Change risk: **high**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: The rendered HTML contains one absolute canonical resolving to the preferred production URL.
- Verification:
  - The rendered HTML contains one absolute canonical resolving to the preferred production URL.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### 4. [P1] Title is missing

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - The HTML title element is empty or absent.
- Current behavior: The HTML title element is empty or absent.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add a concise title that states the page's unique search intent.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: One non-empty, unique title is present and matches the visible topic.
- Verification:
  - One non-empty, unique title is present and matches the visible topic.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 5. [P1] H1 is missing

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - No visible H1 was extracted.
- Current behavior: No visible H1 was extracted.
- Impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Recommendation: Add one descriptive H1 aligned with the title and main content.
- Change risk: **observe**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: The page has exactly one visible H1 describing its unique purpose.
- Verification:
  - The page has exactly one visible H1 describing its unique purpose.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### 6. [P2] No JSON-LD schema found

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

### 7. [P3] Open Graph metadata is incomplete

- URL: http://localhost:3001/
- Result type: **Verified**
- Evidence source:
  - Audited HTTP response and HTML: http://localhost:3001/
- Evidence:
  - og:title: missing
  - og:description: missing
- Current behavior: og:title: missing og:description: missing
- Impact: An enhancement opportunity that does not block publication.
- Recommendation: Add accurate Open Graph title, description, URL, and representative image.
- Change risk: **low**
- Prerequisites:
  - Preserve the current implementation and baseline before making changes.
- Acceptance criteria: Required Open Graph fields resolve and match visible page content.
- Verification:
  - Required Open Graph fields resolve and match visible page content.
- Rollback: Revert the scoped file change and repeat the affected-page check.


## GEO findings

_No issues detected by the implemented checks._
