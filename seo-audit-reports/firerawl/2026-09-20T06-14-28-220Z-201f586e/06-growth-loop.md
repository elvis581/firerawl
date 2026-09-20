# Attribution, Experiments & Review Plan

## Operating mode

- Requested mode: **audit_only**
- Effective capability: **report_only**
- The deterministic CLI collected evidence and wrote reports only. It did not publish or modify production.

## Search-to-conversion attribution

Track this chain with distinct events and identifiers:

`search query → organic landing page → product/service visit → signup/download/inquiry → order → payment → revenue`

At lead, registration, or order creation, preserve a source snapshot containing:

- First source and latest source
- Organic landing page
- UTM parameters and supported click IDs
- External referrer
- Device and country/region, subject to consent and privacy rules
- Event timestamp and conversion event
- Lead/order identifier

Attribution priority: supported click ID → UTM → channel/affiliate code → external referrer → direct/unknown. Do not infer revenue attribution when conversion data is unavailable.

## Citation-to-conversion loop

`Prompt Pool → Page → Citation Block → crawl/index → observed citation → landing page → affiliate click → Prompt Pool update`

- Preserve inbound `utm_source=chatgpt.com` when present and report ChatGPT referral sessions and downstream affiliate clicks separately.
- In Bing Webmaster Tools AI Performance, collect **Grounding Query**, **Cited Page**, **Citation Count**, and **Citation Share** where the property exposes them.
- IndexNow status is **unknown** from the Site Profile only. A submission and successful fetch were not independently verified by this crawl.
- Actual AI citations, citation share, referral sessions, affiliate clicks, and revenue are **Needs Verification** until exports or platform evidence are supplied.

| Review period | Grounding queries | Cited pages | Citation count/share | ChatGPT referral sessions | Affiliate clicks |
| --- | --- | --- | --- | --- | --- |
| 7 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |
| 14 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |
| 28 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |

## Baseline requirements

| Period | Organic impressions | Organic clicks | CTR | Qualified conversions | Paid orders | Revenue |
| --- | --- | --- | --- | --- | --- | --- |
| 7 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |
| 14 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |
| 28 days | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification | Needs Verification |

Current status: search analytics unavailable; conversion and revenue data unavailable.

## Candidate low-risk work

- **tutorial-no-steps** (P0): Add prerequisite-aware, ordered steps with expected outputs and troubleshooting. Verification: Re-run the audit and confirm the hard-blocking condition is resolved with truthful visible evidence.
- **tutorial-no-steps** (P0): Add prerequisite-aware, ordered steps with expected outputs and troubleshooting. Verification: Re-run the audit and confirm the hard-blocking condition is resolved with truthful visible evidence.

## 7 / 14 / 28 day review

### Day 7 — correctness

- Re-crawl changed URLs and verify status, canonical, robots, sitemap, schema, desktop/mobile rendering, and core conversion events.
- Check error rate and confirm no indexation or conversion regression.

### Day 14 — early search signals

- Compare impressions, clicks, CTR, average position, ranking buckets, and organic landing-page sessions against the saved baseline.
- Review only the changed template or page batch; do not expand rollout on ambiguous evidence.

### Day 28 — decision

- Compare qualified leads, orders, paid conversions, revenue, page performance, and organic search changes.
- Continue only when the target metric improves without a guardrail regression; otherwise diagnose, pause, or roll back.

## Stop conditions

- Core URL/indexation signals regress.
- Conversion or payment events stop firing.
- Error rate or Core Web Vitals materially worsen.
- Organic clicks, qualified conversions, or revenue decline beyond the experiment's predeclared tolerance.
- Evidence remains too weak to distinguish the change from normal variation.

## SEO ledger update

Record the page/template, baseline date, changed files, issue IDs, hypothesis, risk, release batch, validation output, rollback reference, and Day 7/14/28 result. Metrics not supplied to this audit remain **Needs Verification**.
