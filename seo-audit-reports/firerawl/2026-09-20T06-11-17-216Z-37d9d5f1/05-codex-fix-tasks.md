# Codex Fix Tasks

## P0：立即修复

### Task 1: HTTP 500 response

- File or URL: http://localhost:3001/
- Problem: Observed HTTP status 500.
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: Observed HTTP status 500.
- Expected impact: May block access, indexation, data integrity, or release readiness.
- Target state: Restore the page or update all internal links and sitemap entries to the intended destination.
- Change risk: high
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: The intended URL returns HTTP 200 and obsolete URLs are no longer linked or submitted.
- Evidence status: Verified
- Verification: The intended URL returns HTTP 200 and obsolete URLs are no longer linked or submitted.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.


## P1：上线前修复

### Task 1: No valid sitemap URLs discovered

- File or URL: site-wide configuration
- Problem: sitemap status: 0 Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed
- Evidence source: Site-level crawl and configuration signals
- Current behavior: sitemap status: 0 Sitemap fetch failed https://firecraw.com/sitemap.xml: fetch failed
- Expected impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Target state: Publish a valid XML sitemap and reference it from robots.txt.
- Change risk: high
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: The sitemap returns HTTP 200 and lists canonical, indexable URLs only.
- Evidence status: Verified
- Verification: The sitemap returns HTTP 200 and lists canonical, indexable URLs only.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### Task 2: Canonical is missing

- File or URL: http://localhost:3001/
- Problem: No <link rel="canonical"> was found.
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: No <link rel="canonical"> was found.
- Expected impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Target state: Add a self-referencing absolute canonical for this indexable page.
- Change risk: high
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: The rendered HTML contains one absolute canonical resolving to the preferred production URL.
- Evidence status: Verified
- Verification: The rendered HTML contains one absolute canonical resolving to the preferred production URL.
- Rollback: Restore the previous URL/indexation/configuration state from version control and re-run the crawl before proceeding.

### Task 3: Title is missing

- File or URL: http://localhost:3001/
- Problem: The HTML title element is empty or absent.
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: The HTML title element is empty or absent.
- Expected impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Target state: Add a concise title that states the page's unique search intent.
- Change risk: observe
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: One non-empty, unique title is present and matches the visible topic.
- Evidence status: Verified
- Verification: One non-empty, unique title is present and matches the visible topic.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.

### Task 4: H1 is missing

- File or URL: http://localhost:3001/
- Problem: No visible H1 was extracted.
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: No visible H1 was extracted.
- Expected impact: Can materially affect important rankings, templates, user journeys, or content decisions.
- Target state: Add one descriptive H1 aligned with the title and main content.
- Change risk: observe
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: The page has exactly one visible H1 describing its unique purpose.
- Evidence status: Verified
- Verification: The page has exactly one visible H1 describing its unique purpose.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.


## P2：上线后优化

### Task 1: No JSON-LD schema found

- File or URL: http://localhost:3001/
- Problem: No application/ld+json block was extracted.
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: No application/ld+json block was extracted.
- Expected impact: Creates a page-level optimization or experience gap with moderate impact.
- Target state: Add only schema that accurately describes visible content and page identity.
- Change risk: observe
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: Valid JSON-LD is present and its claims are visible on the page.
- Evidence status: Verified
- Verification: Valid JSON-LD is present and its claims are visible on the page.
- Rollback: Restore the previous page or template version if validation or post-change metrics regress.


## P3：增强项

### Task 1: Open Graph metadata is incomplete

- File or URL: http://localhost:3001/
- Problem: og:title: missing og:description: missing
- Evidence source: Audited HTTP response and HTML: http://localhost:3001/
- Current behavior: og:title: missing og:description: missing
- Expected impact: An enhancement opportunity that does not block publication.
- Target state: Add accurate Open Graph title, description, URL, and representative image.
- Change risk: low
- Prerequisites: Preserve the current implementation and baseline before making changes.
- Suggested approach: Implement the smallest scoped change that satisfies the target without inventing evidence or changing unrelated pages.
- Acceptance criteria: Required Open Graph fields resolve and match visible page content.
- Evidence status: Verified
- Verification: Required Open Graph fields resolve and match visible page content.
- Rollback: Revert the scoped file change and repeat the affected-page check.


## Needs Verification / Human Review：必须人工提供资料或确认

_No tasks in this group._
