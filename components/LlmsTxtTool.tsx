"use client";

import { useState } from "react";
import { AffiliateButton } from "./AffiliateButton";

export function LlmsTxtTool() {
  const [domain, setDomain] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function find(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setCopied(false);
    try {
      const response = await fetch("/api/discover", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ domain }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setUrls(data.urls);
      setSelected(data.urls.slice(0, 10));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to read this sitemap.");
    } finally {
      setLoading(false);
    }
  }

  function toggle(url: string) { setSelected((current) => current.includes(url) ? current.filter((item) => item !== url) : [...current, url]); }
  function output() { const base = domain.replace(/^https?:\/\//, "").replace(/\/$/, ""); return `# ${base}\n\n> Selected pages for AI and developer discovery.\n\n${selected.map((url) => `- [${url}](${url})`).join("\n")}\n`; }
  async function copy() { await navigator.clipboard.writeText(output()); setCopied(true); }
  function download() { const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([output()], { type: "text/plain" })); link.download = "llms.txt"; link.click(); URL.revokeObjectURL(link.href); }

  return <div className="tool-panel"><form onSubmit={find}><label className="field-label" htmlFor="llms-domain">Domain</label><div className="url-row"><input id="llms-domain" className="url-input" value={domain} onChange={(event) => setDomain(event.target.value)} placeholder="example.com" required/><button className="button primary" type="submit" disabled={loading}>{loading ? "Reading..." : "Find sitemap"}</button></div><p className="tool-help">Looks for /sitemap.xml and /sitemap_index.xml, then lets you choose important URLs.</p></form>{error && <div className="tool-error" role="alert">{error}</div>}{urls.length > 0 && <div className="result-panel"><div className="result-head"><div><h2>Choose URLs</h2><p className="tool-help">{selected.length} selected</p></div><div className="result-actions"><button className="button secondary" type="button" onClick={() => setSelected(urls.slice(0, 20))}>Select first 20</button><button className="button secondary" type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button><button className="button secondary" type="button" onClick={download}>Download</button></div></div><div className="url-list">{urls.map((url) => <label key={url} className="url-item"><input type="checkbox" checked={selected.includes(url)} onChange={() => toggle(url)}/><span>{url}</span></label>)}</div><pre className="markdown-output" style={{ marginTop: 18 }}>{output()}</pre><div className="affiliate-card"><div><span className="eyebrow">Next step</span><h3>Need the source content refreshed?</h3><p>An llms.txt file is only a directory. A crawler can fetch and refresh the underlying pages for an agent workflow.</p></div><AffiliateButton placement="tool-result">Refresh pages with Firecrawl</AffiliateButton></div></div>}</div>;
}
