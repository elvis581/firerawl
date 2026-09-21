"use client";

import { useRef, useState } from "react";

function isPublicHttpUrl(value: string) {
  try {
    const url = new URL(value.trim());
    const hostname = url.hostname.toLowerCase().replace(/\.$/, "");
    const blockedHost = hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local") || hostname === "metadata" || hostname === "metadata.google.internal" || hostname === "instance-data.ec2.internal";
    return (url.protocol === "http:" || url.protocol === "https:") && !url.username && !url.password && !blockedHost;
  } catch {
    return false;
  }
}

export function HomeUrlForm() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submitLockRef = useRef(false);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = url.trim();
    if (!isPublicHttpUrl(value)) {
      setError("Enter a complete public http(s) URL, such as https://example.com/article.");
      return;
    }
    if (submitting || submitLockRef.current) return;
    setError("");
    submitLockRef.current = true;
    setSubmitting(true);
    window.setTimeout(() => window.location.assign(`/tools/url-to-markdown?url=${encodeURIComponent(value)}&autostart=1`), 50);
  }

  return <form className="hero-form" action="/tools/url-to-markdown" method="get" onSubmit={submit} noValidate aria-busy={submitting}>
    <label className="hero-form-label" htmlFor="home-url">Start with a public URL</label>
    <div className="hero-form-row">
      <input className={`url-input${error ? " input-error" : ""}`} id="home-url" name="url" value={url} onChange={(event) => { setUrl(event.target.value); setError(""); }} type="url" placeholder="https://example.com/article" aria-invalid={Boolean(error)} aria-describedby={error ? "home-url-error" : "home-url-help"} />
      <button className="button primary" type="submit" disabled={submitting} aria-busy={submitting}>{submitting ? "Converting..." : "Convert URL"}</button>
    </div>
    <input type="hidden" name="autostart" value="1" />
    {error ? <div id="home-url-error" className="tool-error visible-error" role="alert" aria-live="assertive">{error}</div> : null}
    <p id="home-url-help" className="tool-help">Public http(s) pages only. No account required.</p>
  </form>;
}
