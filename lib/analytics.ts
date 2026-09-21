export type AnalyticsDetails = {
  source_component?: string;
  tool_name?: string;
  result_state?: string;
  [key: string]: string | undefined;
};

export function trackEvent(event: string, details: AnalyticsDetails = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, source_page: window.location.pathname, ...details };
  window.dispatchEvent(new CustomEvent(event, { detail: payload }));
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag("event", event, payload);
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (dataLayer) dataLayer.push(payload);
}
