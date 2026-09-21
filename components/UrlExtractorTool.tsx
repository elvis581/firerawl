"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { AffiliateButton } from "./AffiliateButton";

type LinkResult = { links: string[]; internal: string[]; external: string[] };

export function UrlExtractorTool() {
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");
  const [tab, setTab] = useState<"url" | "html">("url");
  const [error, setError] = useState("");
  const [result, setResult] = useState<LinkResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function run(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setCopied(false);
    setResult(null);
    trackEvent("tool_start", { source_component: "url_extractor_form", tool_name: "url_extractor", result_state: "pending" });
    try {
      const response = await fetch("/api/extract-links", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(tab === "url" ? { url } : { html }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setResult(data);
      trackEvent("tool_success", { source_component: "url_extractor_form", tool_name: "url_extractor", result_state: "success" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to extract links.";
      setError(message);
      trackEvent("tool_error", { source_component: "url_extractor_form", tool_name: "url_extractor", result_state: "error", error_message: message });
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.links.join("\n"));
    setCopied(true);
    trackEvent("copy_result", { source_component: "url_extractor_result", tool_name: "url_extractor", result_state: "success" });
  }

  function save(content: string, name: string, type: string, format: string) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type }));
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
    trackEvent("download_result", { source_component: "url_extractor_result", tool_name: "url_extractor", result_state: "success", download_format: format });
  }

  function downloadTxt() { if (result) save(result.links.join("\n"), "urls.txt", "text/plain", "text"); }
  function downloadCsv() { if (result) { const rows = ["url,type", ...result.links.map((item) => `${JSON.stringify(item)},${result.internal.includes(item) ? "internal" : "external"}`)]; save(rows.join("\n"), "urls.csv", "text/csv", "csv"); } }
  function changeTab(nextTab: "url" | "html") { setTab(nextTab); setResult(null); setError(""); }

  return <div className="tool-panel"><div className="result-actions" style={{ marginBottom: 16 }}><button type="button" className={`button ${tab === "url" ? "primary" : "secondary"}`} onClick={() => changeTab("url")}>Fetch a URL</button><button type="button" className={`button ${tab === "html" ? "primary" : "secondary"}`} onClick={() => changeTab("html")}>Paste HTML</button></div><form onSubmit={run} noValidate>{tab === "url" ? <><label className="field-label" htmlFor="extract-url">Page URL</label><input className="url-input" id="extract-url" value={url} onChange={(event) => { setUrl(event.target.value); setResult(null); setError(""); }} placeholder="https://example.com" type="url" required /></> : <><label className="field-label" htmlFor="extract-html">HTML</label><textarea className="url-input" id="extract-html" value={html} onChange={(event) => { setHtml(event.target.value); setResult(null); setError(""); }} placeholder="<a href=...>" rows={7} required /></>}<button className="button primary" type="submit" style={{ marginTop: 12 }} disabled={loading}>{loading ? "Extracting…" : "Extract URLs"}</button></form>{error && <div className="tool-error" role="alert">{error}</div>}{result && <div className="result-panel"><div className="result-head"><div><h2>Extracted links</h2><div className="stats"><span><strong>{result.links.length}</strong> total</span><span><strong>{result.internal.length}</strong> internal</span><span><strong>{result.external.length}</strong> external</span></div></div><div className="result-actions"><button type="button" className="button secondary" onClick={copy}>{copied ? "Copied" : "Copy"}</button><button type="button" className="button secondary" onClick={downloadTxt}>Export TXT</button><button type="button" className="button secondary" onClick={downloadCsv}>Export CSV</button></div></div><pre className="markdown-output">{result.links.join("\n")}</pre><div className="affiliate-card"><div><span className="eyebrow">Next step</span><h3>Need to crawl and extract content too?</h3><p>Link lists are useful for discovery. A crawl adds page retrieval and content output.</p></div><AffiliateButton placement="tool-result" sourceComponent="tool_result_cta" toolName="url_extractor" resultState="success">Crawl and extract with Firecrawl</AffiliateButton></div></div>}</div>;
}
