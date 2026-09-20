type EvidenceLink = { label: string; href: string };

export function EvidenceNote({ reviewedOn, links, kind = "provider" }: { reviewedOn: string; links: EvidenceLink[]; kind?: "provider" | "tool" }) {
  const text = kind === "tool" ? "Implementation checked on this date. Test the output with your own public input before relying on it." : "Checked on this date. Provider details can change; use the linked official pages for current terms.";
  return <aside className="evidence-note" aria-label="Sources and freshness"><strong>{kind === "tool" ? "Implementation check" : "Sources and freshness"}</strong><span>{text.replace("this date", reviewedOn)}</span>{links.length > 0 && <span className="evidence-links">{links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}</a>)}</span>}</aside>;
}
