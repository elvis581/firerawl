"use client";

import { useEffect, useState } from "react";
import { AffiliateButton } from "./AffiliateButton";

type ConversionResult = { markdown: string; sourceUrl: string; characters: number; words: number };

export function UrlToMarkdownTool({ title = "URL to Markdown", placeholder = "https://example.com/article" }: { title?: string; placeholder?: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("url");
    if (preset) setUrl(preset);
  }, []);

  function updateUrl(nextUrl: string) {
    setUrl(nextUrl);
    setFieldError("");
    setError("");
    setCopied(false);
    if (result) setResult(null);
  }

  function validateUrl(value: string) {
    try {
      const parsed = new URL(value.trim());
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
      return true;
    } catch {
      setFieldError("Enter a complete public http(s) URL, such as https://example.com/article.");
      return false;
    }
  }

  async function run(event: React.FormEvent) {
    event.preventDefault();
    setResult(null);
    setCopied(false);
    setError("");
    const trimmedUrl = url.trim();
    if (!trimmedUrl || !validateUrl(trimmedUrl)) return;
    setFieldError("");
    setLoading(true);
    try {
      const response = await fetch("/api/markdown", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: trimmedUrl }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to convert this URL.");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to convert this URL.");
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setUrl("");
    setError("");
    setFieldError("");
    setResult(null);
    setCopied(false);
  }

  function download() {
    if (!result) return;
    const blob = new Blob([result.markdown], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "page.md";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  async function copy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.markdown);
    setCopied(true);
  }

  return <div className="tool-panel">
    <form onSubmit={run} noValidate>
      <label className="field-label" htmlFor="url-markdown-input">{title} input</label>
      <div className="url-row"><input id="url-markdown-input" className="url-input" value={url} onChange={(event) => updateUrl(event.target.value)} placeholder={placeholder} type="url" aria-invalid={Boolean(fieldError)} aria-describedby={fieldError ? "url-input-error" : "url-input-help"} /><button className="button primary" type="submit" disabled={loading}>{loading ? "Converting..." : "Convert"}</button></div>
      {fieldError ? <div id="url-input-error" className="tool-error" role="alert">{fieldError}</div> : null}
      <div className="tool-actions"><button className="text-button" type="button" onClick={() => updateUrl("https://example.com")}>Use example URL</button><button className="text-button" type="button" onClick={clear}>Clear</button></div>
      <p id="url-input-help" className="tool-help">Public http(s) pages only · up to 2 MB · no account required</p>
    </form>
    {error && <div className="tool-error" role="alert" aria-live="polite">{error}</div>}
    {result && <div className="result-panel"><div className="result-head"><div><h2>Markdown result</h2><p className="result-source">Result for <a href={result.sourceUrl} target="_blank" rel="noopener noreferrer">{result.sourceUrl}</a></p><div className="stats"><span><strong>{result.characters.toLocaleString()}</strong> characters</span><span><strong>{result.words.toLocaleString()}</strong> words</span></div></div><div className="result-actions"><button className="button secondary" type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button><button className="button secondary" type="button" onClick={download}>Download .md</button></div></div><pre className="markdown-output">{result.markdown}</pre><div className="affiliate-card"><div><span className="eyebrow">Next step</span><h3>Need more than one page?</h3><p>For JavaScript-rendered pages, batch URLs, crawling, or structured extraction, evaluate a managed workflow.</p></div><AffiliateButton placement="tool-result">Crawl with Firecrawl</AffiliateButton></div></div>}
  </div>;
}
