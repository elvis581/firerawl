export type FAQItem = { question: string; answer: string };

export const pageFaqs: Record<string, FAQItem[]> = {
  home: [
    { question: "What are these free web data tools for?", answer: "These free web data tools handle focused public-page jobs such as URL to Markdown, small sitemap batches, llms.txt curation, and link discovery." },
    { question: "Can I use the tools with private or authenticated URLs?", answer: "No. The tools are intended for public HTTP and HTTPS inputs. Do not submit private URLs, credentials, or content you are not allowed to retrieve." },
    { question: "When should I use a managed Firecrawl workflow?", answer: "Consider a managed Firecrawl workflow when you need JavaScript rendering, retries, scheduled crawls, structured extraction, or many URLs beyond a small inspectable task." },
    { question: "Is Firecraw Tools affiliated with Firecrawl?", answer: "No. Firecraw Tools is an independent website. Sponsored links are labeled, and provider details should be checked against the current official pages." },
  ],
  firecrawl: [
    { question: "What does Firecrawl do?", answer: "Firecrawl provides managed web fetching, crawling, search, and extraction workflows for developer and AI applications." },
    { question: "Is Firecraw Tools the official Firecrawl site?", answer: "No. Firecraw Tools is an independent website and is not affiliated with or operated by Firecrawl." },
    { question: "When should I use scrape or crawl?", answer: "Use scrape when you know one public URL; use crawl when you need to discover and process multiple related pages. Test both against representative pages before building around either workflow." },
    { question: "What should I test before choosing a Firecrawl workflow?", answer: "Test content completeness, JavaScript behavior, response time, failure recovery, output shape, and the operational limits your application must handle." },
  ],
  pricing: [
    { question: "What does Firecrawl pricing include?", answer: "Firecrawl pricing is based on credits and usage volume; exact allowances and plan limits can change." },
    { question: "How many Firecrawl pricing credits do I need?", answer: "For Firecrawl pricing estimates, count URLs per run, runs per month, rendering needs, and retries using a representative test set." },
    { question: "Are exact Firecrawl pricing plan amounts stable?", answer: "Plan amounts, allowances, and eligibility can change. Use the current provider pricing page for exact numbers instead of relying on a static summary." },
    { question: "What changes Firecrawl credit usage?", answer: "The number of URLs, refresh frequency, rendering requirements, extraction work, and retries all affect the usage you should budget for." },
  ],
  alternatives: [
    { question: "What is the best Firecrawl alternative?", answer: "The best Firecrawl alternatives depend on whether you need open-source control, actors, search, browser automation, or a managed crawl API." },
    { question: "Is Crawl4AI a Firecrawl alternative?", answer: "Yes. Crawl4AI is one Firecrawl alternative for teams that want to operate and customize the crawler themselves." },
    { question: "How should I compare Firecrawl alternatives?", answer: "Run the same representative URLs through each option and compare completeness, rendering, output format, latency, failure handling, and who owns maintenance." },
    { question: "When is an open-source alternative a better fit?", answer: "An open-source alternative can fit when your team needs code-level control, local deployment, and the capacity to maintain browsers, queues, upgrades, and failures." },
  ],
  api: [
    { question: "What can the Firecrawl API do?", answer: "The API can support scrape, crawl, search, and structured extraction workflows, subject to current provider limits." },
    { question: "Where should I store a Firecrawl API key?", answer: "For a Firecrawl API integration, store the key in a server-side environment variable and never expose it in a browser bundle or public repository." },
    { question: "What is the difference between Firecrawl API scrape and crawl?", answer: "Scrape targets one known URL, while crawl discovers or processes a group of related pages. Choose based on the size and repeatability of the job." },
    { question: "How should I handle Firecrawl API failures?", answer: "Separate authentication, quota, timeout, network, and empty-content failures. Add bounded retries and validate the returned fields before storing them." },
  ],
  apiKey: [
    { question: "How do I get a Firecrawl API key?", answer: "Create or copy a Firecrawl API key through the current dashboard and keep the Firecrawl API key private." },
    { question: "Why does my Firecrawl API key return 401?", answer: "For a Firecrawl API key error, check that the key is present, current, and sent in the expected Bearer authorization header." },
    { question: "Can I put a Firecrawl API key in browser code?", answer: "No. Keep a Firecrawl API key on the server or in a protected worker so visitors cannot inspect or reuse it." },
    { question: "What does a 429 mean for a Firecrawl API key?", answer: "A 429 usually means the request should slow down or that a current quota or concurrency limit needs review. Check the provider response and retry policy." },
  ],
  mcp: [
    { question: "What is Firecrawl MCP?", answer: "It is an MCP server pattern that lets compatible AI clients call web retrieval tools through a tool interface." },
    { question: "How does Firecrawl MCP handle web content?", answer: "Firecrawl MCP exposes retrieval tools, but retrieved content remains untrusted input and should be validated before an agent acts on it." },
    { question: "What do I need before connecting Firecrawl MCP?", answer: "You need a compatible MCP client, the provider's current server configuration, and a protected API key or credential path appropriate for that client." },
    { question: "Which tasks should an agent delegate through Firecrawl MCP?", answer: "Delegate bounded retrieval tasks such as fetching a known page or searching for context, then validate the returned content before allowing an agent to make changes." },
  ],
  python: [
    { question: "Which Firecrawl Python package should I install?", answer: "Use the current Firecrawl Python package and provider documentation because package names and SDK methods can change." },
    { question: "Can Firecrawl Python crawl an entire website?", answer: "A Firecrawl Python integration can start a crawl, but production scheduling, retries, limits, and result handling still need an operational design." },
    { question: "How should I test a Firecrawl Python integration?", answer: "Start with one public URL, assert the returned fields, then test a small crawl with timeout, retry, empty-content, and authentication cases." },
    { question: "Where should a Firecrawl Python worker keep its API key?", answer: "Keep the key in the worker environment or a secrets manager, outside notebooks committed to source control and outside client-side code." },
  ],
  selfHosted: [
    { question: "What does Firecrawl self hosted involve?", answer: "Firecrawl self hosted work extends beyond Docker: plan for browsers, queues, storage, proxies, monitoring, upgrades, and rate controls." },
    { question: "Who should choose Firecrawl self hosted?", answer: "Firecrawl self hosted deployment is most suitable for teams that need infrastructure control and can own the ongoing maintenance burden." },
    { question: "What infrastructure does Firecrawl self hosted need?", answer: "Plan for browser workers, queues, storage, secrets, outbound network controls, monitoring, and a process for upgrades and failed jobs." },
    { question: "When is managed Firecrawl simpler than self hosting?", answer: "A managed Firecrawl workflow is simpler when your priority is a stable endpoint and your team does not want to operate browser capacity, queues, and crawler failures." },
  ],
  crawl4ai: [
    { question: "What changes in Firecrawl vs Crawl4AI?", answer: "Firecrawl vs Crawl4AI compares a managed Firecrawl API with an open-source crawler that requires more self-hosting effort." },
    { question: "Does Crawl4AI replace every Firecrawl workflow?", answer: "No. In a Firecrawl vs Crawl4AI test, compare the actual pages, rendering needs, extraction output, operations, and maintenance of your workload." },
    { question: "Which team fits Firecrawl vs Crawl4AI?", answer: "Firecrawl can fit teams seeking a managed endpoint; Crawl4AI can fit teams that want to inspect and operate the crawler themselves. Validate that assumption with a shared test set." },
    { question: "What should a Firecrawl vs Crawl4AI benchmark measure?", answer: "Measure content completeness, JavaScript behavior, latency, retries, resource use, output shape, and the engineering time needed to keep each option reliable." },
  ],
  apify: [
    { question: "What is the main difference in Firecrawl vs Apify?", answer: "Firecrawl vs Apify compares web data API workflows with an ecosystem centered on actors, datasets, tasks, and automation." },
    { question: "Should I benchmark Firecrawl vs Apify?", answer: "Yes. For Firecrawl vs Apify, test the same representative pages, schedules, output shape, failure recovery, and maintenance requirements." },
    { question: "When is Firecrawl a better starting point than Apify?", answer: "Firecrawl may be a better starting point when your application needs a focused scrape or crawl API rather than a marketplace of site-specific actors." },
    { question: "When is Apify a better fit in a Firecrawl vs Apify decision?", answer: "Apify may fit when a ready-made actor, dataset, or scheduled automation already matches the site-specific job you need to operate." },
  ],
  url: [
    { question: "What URLs can the converter process?", answer: "It accepts public HTTP and HTTPS pages and rejects private network targets, authenticated URLs, and responses over the tool size limit." },
    { question: "Why is my page incomplete?", answer: "Login walls, JavaScript-only content, anti-bot challenges, and unsupported markup can limit a single-page conversion." },
    { question: "Does URL to Markdown preserve the original page exactly?", answer: "No. URL to Markdown creates a readable best-effort document and may remove navigation, scripts, or layout details. Review important output against the source page." },
    { question: "When should I move from URL to Markdown to a crawler?", answer: "Move beyond URL to Markdown when you need repeated fetches, browser rendering, retries, structured extraction, or more than one public page at a time." },
  ],
  webpage: [
    { question: "Is this webpage converter free?", answer: "Yes. It is a no-account utility for one public webpage at a time." },
    { question: "Can it convert a full website?", answer: "No. Use the website selection tool for a small sitemap batch or evaluate a crawler for larger work." },
    { question: "How is webpage to Markdown different from copying a page?", answer: "Webpage to Markdown removes common page chrome and returns a portable text structure that is easier to copy into notes, prompts, or documentation." },
    { question: "What should I try when webpage to Markdown misses content?", answer: "Try a public article or documentation page first. Client-rendered sections, login walls, challenge pages, and very large responses may require a different retrieval workflow." },
  ],
  website: [
    { question: "How many pages can I select?", answer: "The starter workflow lets you select up to 10 sitemap URLs." },
    { question: "Does it crawl JavaScript-heavy sites?", answer: "No. It discovers sitemap URLs; it does not promise browser rendering or unlimited crawling." },
    { question: "What does website to Markdown need to find pages?", answer: "It works best when the domain exposes a readable public sitemap with URLs you are allowed to fetch and review." },
    { question: "When should I use a full crawler instead of website to Markdown?", answer: "Use a full crawler when you need deeper discovery, scheduled runs, retries, browser rendering, proxy controls, or a larger page set." },
  ],
  llms: [
    { question: "What does an llms.txt generator create?", answer: "An llms.txt generator creates a proposed plain-text directory that points AI systems to a curated set of useful site pages." },
    { question: "Is llms.txt the same as robots.txt?", answer: "No. Robots.txt controls crawler access, while llms.txt is intended as a curated content directory." },
    { question: "Which pages should an llms.txt generator include?", answer: "Choose a short set of authoritative documentation, product, pricing, or reference pages. Remove private, duplicate, thin, and outdated URLs before publishing." },
    { question: "Does an llms.txt generator publish the file automatically?", answer: "No. It creates a starter file for review. You decide whether and where to publish it after checking every selected URL." },
  ],
  extractor: [
    { question: "Does the URL extractor validate links?", answer: "No. It lists links found in the input and does not check whether every destination is live." },
    { question: "Can it crawl every extracted URL?", answer: "No. It is a discovery utility. A separate crawl workflow is needed to fetch and process the results." },
    { question: "How does the URL extractor treat relative links?", answer: "When a public page is fetched, the URL extractor resolves relative links against that page's source URL before grouping them by host." },
    { question: "What does the URL extractor CSV contain?", answer: "The CSV contains discovered URLs and an internal or external label. It is an inventory for review, not proof that every destination is live." },
  ],
};
