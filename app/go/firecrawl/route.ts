import { NextResponse } from "next/server";
import { FIRECRAWL_AFFILIATE_URL } from "@/lib/affiliate";
export function GET(){
  const response = NextResponse.redirect(FIRECRAWL_AFFILIATE_URL, 302);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
