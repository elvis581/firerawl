import Link from "next/link";
import { AffiliateButton } from "./AffiliateButton";
import styles from "./FirecrawlCard.module.css";

export function FirecrawlCard({ title = "Need the next step?", children, placement = "inline" as const }: { title?: string; children: React.ReactNode; placement?: "pricing" | "tool-result" | "comparison" | "sidebar" | "inline" }) {
  return <aside className={`affiliate-card ${styles.card}`}><div className={styles.content}><span className="eyebrow">Independent recommendation</span><h3>{title}</h3><p>{children}</p></div><div className={styles.actions}><AffiliateButton placement={placement} sourceComponent={`article_${placement}`}>Try Firecrawl</AffiliateButton><Link className="text-link" href="/affiliate-disclosure">How recommendations work →</Link><small className={styles.disclosure}>Sponsored link · Firecraw Tools may earn a commission.</small></div></aside>;
}
