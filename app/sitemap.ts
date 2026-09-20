import type { MetadataRoute } from "next";
import { corePages } from "@/lib/data"; import { SITE_URL } from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap{const paths=["/", "/tools", "/about", "/affiliate-disclosure", "/privacy", "/terms", ...corePages.map(x=>x.path)];return paths.map(path=>({url:`${SITE_URL}${path}`,lastModified:new Date("2026-09-20"),changeFrequency:path.startsWith('/tools')?'monthly':'weekly',priority:path==='/'?1:path.startsWith('/tools')?.9:path==='/firecrawl'?.9:.7}));}
