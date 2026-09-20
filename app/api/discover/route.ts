import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { fetchPublicText } from "@/lib/safe-fetch";

export async function POST(req: Request) {
  try {
    const { domain } = await req.json();
    const normalized = String(domain || "").startsWith("http") ? String(domain) : `https://${domain}`;
    const candidates = [new URL("/sitemap.xml", normalized).toString(), new URL("/sitemap_index.xml", normalized).toString()];
    let text = "";
    for (const candidate of candidates) { try { text = (await fetchPublicText(candidate, { timeoutMs: 10_000, maxBytes: 1_000_000 })).text; break; } catch { /* try the second conventional path */ } }
    if (!text) throw new Error("No readable sitemap.xml or sitemap_index.xml was found.");
    const $ = cheerio.load(text, { xmlMode: true });
    const urls = $("url loc").map((_, el) => $(el).text().trim()).get().filter(Boolean).slice(0, 50);
    const nested = $("sitemap loc").map((_, el) => $(el).text().trim()).get().filter(Boolean);
    if (!urls.length && nested.length) {
      for (const raw of nested.slice(0, 3)) {
        try { const child = cheerio.load((await fetchPublicText(raw, { timeoutMs: 10_000, maxBytes: 1_000_000 })).text, { xmlMode: true }); urls.push(...child("url loc").map((_, el) => child(el).text().trim()).get()); } catch { /* skip an invalid child sitemap */ }
      }
    }
    return NextResponse.json({ urls: [...new Set(urls)].slice(0, 50) });
  } catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Unable to discover sitemap." }, { status: 400 }); }
}
