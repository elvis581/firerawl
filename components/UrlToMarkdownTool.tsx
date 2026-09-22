"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { AffiliateButton } from "./AffiliateButton";

type ConversionResult = { markdown: string; sourceUrl: string; characters: number; words: number };

export function UrlToMarkdownTool({ title = "URL to Markdown", placeholder = "https://example.com/article" }: { title?: string; placeholder?: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [copied, setCopied] = useState(false);
  const autoStartedRef = useRef<string | null>(null);
  const requestInFlightRef = useRef(false);

  const validateUrl = useCallback((value: string) => {
    try {
      const parsed = new URL(value.trim());
      const hostname = parsed.hostname.toLowerCase().replace(/\.$/, "");
      const blockedHost = hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local") || hostname === "metadata" || hostname === "metadata.google.internal" || hostname === "instance-data.ec2.internal";
      if (!["http:", "https:"].includes(parsed.protocol) || parsed.username || parsed.password || blockedHost) throw new Error();
      return true;
    } catch {
      setFieldError("Enter a complete public http(s) URL, such as https://example.com/article.");
      return false;
    }
  }, []);

  const convert = useCallback(async (value: string, sourceComponent = "tool_form") => {
    if (requestInFlightRef.current) return;
    const trimmedUrl = value.trim();
    setResult(null);
    setCopied(false);
    setError("");
    if (!trimmedUrl || !validateUrl(trimmedUrl)) {
      trackEvent("tool_error", { source_component: sourceComponent, tool_name: "url_to_markdown", result_state: "invalid_input", error_type: "invalid_url" });
      return;
    }
    setFieldError("");
    requestInFlightRef.current = true;
    setLoading(true);
    trackEvent("tool_start", { source_component: sourceComponent, tool_name: "url_to_markdown", result_state: "pending" });
    try {
      const response = await fetch("/api/markdown", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: trimmedUrl }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to convert this URL.");
      const nextParams = new URLSearchParams(window.location.search);
      nextParams.set("url", trimmedUrl);
      nextParams.delete("autostart");
      const nextQuery = nextParams.toString();
      const nextAddress = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextAddress) {
        window.history.replaceState(null, "", nextAddress);
      }
      setResult(data);
      trackEvent("tool_success", { source_component: sourceComponent, tool_name: "url_to_markdown", result_state: "success" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to convert this URL.";
      setError(message);
      trackEvent("tool_error", { source_component: sourceComponent, tool_name: "url_to_markdown", result_state: "error", error_message: message });
    } finally {
      requestInFlightRef.current = false;
      setLoading(false);
    }
  }, [validateUrl]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("url");
    if (!preset) return;
    setUrl(preset);
    if (params.get("autostart") !== "1" || autoStartedRef.current === preset) return;
    autoStartedRef.current = preset;
    params.delete("autostart");
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
    void convert(preset, "homepage_autostart");
  }, [convert]);

  function updateUrl(nextUrl: string) {
    setUrl(nextUrl);
    setFieldError("");
    setError("");
    setCopied(false);
    if (result) setResult(null);
  }

  function run(event: React.FormEvent) {
    event.preventDefault();
    void convert(url, "tool_form");
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
    trackEvent("download_result", { source_component: "url_to_markdown_result", tool_name: "url_to_markdown", result_state: "success", download_format: "markdown" });
  }

  async function copy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.markdown);
    setCopied(true);
    trackEvent("copy_result", { source_component: "url_to_markdown_result", tool_name: "url_to_markdown", result_state: "success" });
  }

  return <div className="tool-panel">
    <form onSubmit={run} noValidate aria-busy={loading}>
      <label className="field-label" htmlFor="url-markdown-input">{title} input</label>
      <div className="url-row"><input id="url-markdown-input" className={`url-input${fieldError ? " input-error" : ""}`} value={url} onChange={(event) => updateUrl(event.target.value)} placeholder={placeholder} type="url" aria-invalid={Boolean(fieldError)} aria-describedby={fieldError ? "url-input-error" : "url-input-help"} /><button className="button primary" type="submit" disabled={loading} aria-busy={loading}>{loading ? "Converting..." : "Convert"}</button></div>
      {fieldError ? <div id="url-input-error" className="tool-error visible-error" role="alert" aria-live="assertive">{fieldError}</div> : null}
      <div className="tool-actions"><button className="text-button" type="button" onClick={() => updateUrl("https://example.com")}>Use example URL</button><button className="text-button" type="button" onClick={clear}>Clear</button></div>
      <p id="url-input-help" className="tool-help">Public http(s) pages only · up to 2 MB · no account required</p>
    </form>
    {error && <div className="tool-error tool-error-with-action" role="alert" aria-live="polite"><span>{error}</span><button className="text-button" type="button" onClick={() => void convert(url, "tool_retry")} disabled={loading}>Try again</button></div>}
    {result && <div className="result-panel"><div className="result-head"><div><h2>Markdown result</h2><p className="result-source">Result for <a href={result.sourceUrl} target="_blank" rel="noopener noreferrer">{result.sourceUrl}</a></p><div className="stats"><span><strong>{result.characters.toLocaleString()}</strong> characters</span><span><strong>{result.words.toLocaleString()}</strong> words</span></div></div><div className="result-actions"><button className="button secondary" type="button" onClick={copy}> {copied ? "Copied" : "Copy"}</button><button className="button secondary" type="button" onClick={download}>Download .md</button></div></div><pre className="markdown-output">{result.markdown}</pre><div className="affiliate-card"><div><span className="eyebrow">Next step</span><h3>Need more than one page?</h3><p>For JavaScript-rendered pages, batch URLs, crawling, or structured extraction, evaluate a managed workflow.</p></div><AffiliateButton placement="tool-result" sourceComponent="tool_result_cta" toolName="url_to_markdown" resultState="success">Crawl with Firecrawl</AffiliateButton></div></div>}
  </div>;
}
