"use client";

import type { AffiliatePlacement } from "@/lib/affiliate";

export function AffiliateButton({ placement, children, variant = "primary" }: { placement: AffiliatePlacement; children: React.ReactNode; variant?: "primary" | "secondary" | "text" }) {
  function track() {
    if (typeof window !== "undefined") {
      const event = { event: "affiliate_click", page: window.location.pathname, placement, cta_text: String(children) };
      window.dispatchEvent(new CustomEvent("affiliate_click", { detail: event }));
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) gtag("event", "affiliate_click", { page: event.page, placement: event.placement, cta_text: event.cta_text });
      const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
      if (dataLayer) dataLayer.push(event);
    }
  }
  const className = variant === "text" ? "affiliate-text" : `button ${variant}`;
  return <a className={className} href="/go/firecrawl" onClick={track} rel="sponsored nofollow noopener noreferrer">{children}</a>;
}
