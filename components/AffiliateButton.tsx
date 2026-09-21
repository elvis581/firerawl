"use client";

import type { AffiliatePlacement } from "@/lib/affiliate";
import { trackEvent } from "@/lib/analytics";

export function AffiliateButton({ placement, children, variant = "primary", sourceComponent, toolName, resultState = "not_applicable" }: { placement: AffiliatePlacement; children: React.ReactNode; variant?: "primary" | "secondary" | "text"; sourceComponent?: string; toolName?: string; resultState?: string }) {
  function track() {
    trackEvent("affiliate_click", { source_component: sourceComponent || `${placement}_cta`, tool_name: toolName, result_state: resultState, placement, cta_text: String(children) });
  }
  const className = variant === "text" ? "affiliate-text" : `button ${variant}`;
  return <a className={className} href="/go/firecrawl" onClick={track} rel="sponsored nofollow noopener noreferrer">{children}</a>;
}
