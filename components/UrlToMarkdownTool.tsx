"use client";

import { useState } from "react";
import { AffiliateButton } from "./AffiliateButton";

type ConversionResult = { markdown: string; sourceUrl: string; characters: number; words: number };

export function UrlToMarkdownTool({ title = "URL to Markdown", placeholder = "https://example.com/article" }: { title?: string; placeholder?: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [copied, setCopied] = useState(false);

  async function run(event: React.FormEvent) {
    event.preventDefault(); setLoading(true); setError(""); setResult(null); setCopied(false);
    try {
      const response = await fetch("/api/markdown", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Unable to convert this URL."); setResult(data);
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to convert this URL."); } finally { setLoading(false); }
  }
  function clear() { setUrl(""); setError(""); setResult(null); setCopied(false); }
  function download() { if (!result) return; const blob = new Blob([result.markdown], { type: "text/markdown" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "page.md"; link.click(); URL.revokeObjectURL(link.href); }
  async function copy() { if (!result) return; await navigator.clipboard.writeText(result.markdown); setCopied(true); }

  return <div className="tool-panel">
    <form onSubmit={run}>
      <label className="field-label" htmlFor="url">{title} input</label>
      <div className="url-row"><input id="url" className="url-input" value={url} onChange={(event) => setUrl(event.target.value)} placeholder={placeholder} type="url" required /><button className="button primary" disabled={loading}>{loading ? "Converting…" : "Convert"}</button></div>
      <div className="tool-actions"><button className="text-button" type="button" onClick={() => setUrl("https://example.com")}>Use example URL</button><button className="text-button" type="button" onClick={clear}>Clear</button></div>
      <p className="tool-help">Public http(s) pages only · up to 2 MB · no account required</p>
    </form>
    {error && <div className="tool-error" role="alert">{error}</div>}
    {result && <div className="result-panel"><div className="result-head"><div><h2>Markdown result</h2><div className="stats"><span><strong>{result.characters.toLocaleString()}</strong> characters</span><span><strong>{result.words.toLocaleString()}</strong> words</span><span title={result.sourceUrl}>Source page</span></div></div><div className="result-actions"><button className="button secondary" onClick={copy}>{copied ? "Copied" : "Copy"}</button><button className="button secondary" onClick={download}>Download .md</button></div></div><pre className="markdown-output">{result.markdown}</pre><div className="affiliate-card"><div><span className="eyebrow">Next step</span><h3>Need more than one page?</h3><p>For JavaScript-rendered pages, batch URLs, crawling, or structured extraction, evaluate a managed workflow.</p></div><AffiliateButton placement="tool-result">Crawl with Firecrawl</AffiliateButton></div></div>}
  </div>;
}
