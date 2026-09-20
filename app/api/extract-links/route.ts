import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { fetchPublicText } from "@/lib/safe-fetch";

export async function POST(req: Request) {
  try {
    const body = await req.json(); let html = String(body.html || ""); let source = "";
    if (body.url) { const result = await fetchPublicText(String(body.url), { timeoutMs: 10_000 }); html = result.text; source = result.url.toString(); }
    if (!html) throw new Error("Paste HTML or enter a URL.");
    const $ = cheerio.load(html);
    const links = $("a[href]").map((_, el) => $(el).attr("href") || "").get().filter(Boolean).map((href) => { try { return source ? new URL(href, source).toString() : href; } catch { return href; } });
    const unique = [...new Set(links)]; const base = source ? new URL(source) : null;
    const internal = base ? unique.filter((url) => { try { return new URL(url).hostname === base.hostname; } catch { return false; } }) : unique.filter((url) => !/^https?:\/\//i.test(url));
    return NextResponse.json({ links: unique, internal, external: unique.filter((url) => !internal.includes(url)) });
  } catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Unable to extract links." }, { status: 400 }); }
}
