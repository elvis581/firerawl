import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { fetchPublicText } from "@/lib/safe-fetch";

function inline($: cheerio.CheerioAPI, node: any): string { return $(node).text().replace(/\s+/g, " ").trim(); }
function toMarkdown(html: string, source: string) {
  const $ = cheerio.load(html);
  $("script,style,noscript,template,nav,footer,header,aside").remove();
  const root = $("main, article").first().length ? $("main, article").first() : $("body");
  const lines: string[] = [];
  root.find("h1,h2,h3,h4,p,li,pre,blockquote,table").each((_, el) => {
    const tag = (el as any).tagName?.toLowerCase(); const text = inline($, el); if (!text) return;
    if (/^h[1-4]$/.test(tag)) lines.push(`${"#".repeat(Number(tag.slice(1)))} ${text}`, "");
    else if (tag === "li") lines.push(`- ${text}`);
    else if (tag === "pre") lines.push(["```", $(el).text().trim(), "```"].join("\n"), "");
    else if (tag === "blockquote") lines.push(`> ${text}`, "");
    else if (tag === "table") lines.push(text, "");
    else lines.push(text, "");
  });
  const title = $("title").first().text().trim();
  const header = title ? `# ${title}\n\nSource: ${source}\n\n` : `Source: ${source}\n\n`;
  return (header + lines.join("\n")).replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); const raw = typeof body?.url === "string" ? body.url.trim() : "";
    if (!raw) return NextResponse.json({ error: "Enter a URL to continue." }, { status: 400 });
    const result = await fetchPublicText(raw, { userAgent: "FirecrawTools/1.0 (public URL to Markdown tool)" });
    const markdown = toMarkdown(result.text, result.url.toString());
    return NextResponse.json({ markdown, sourceUrl: result.url.toString(), characters: markdown.length, words: markdown.trim().split(/\s+/).filter(Boolean).length });
  } catch (error) { const message = error instanceof Error ? error.message : "We could not fetch that page."; return NextResponse.json({ error: message }, { status: 400 }); }
}
