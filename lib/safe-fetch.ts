import dns from "node:dns/promises";
import net from "node:net";

const DEFAULT_MAX_BYTES = 2_000_000;
const MAX_REDIRECTS = 4;

function blockedIPv4(ip: string) {
  const [a, b, c] = ip.split(".").map(Number);
  return a === 0 || a === 10 || a === 100 && b >= 64 && b <= 127 || a === 127 || a === 169 && b === 254 || a === 172 && b >= 16 && b <= 31 || a === 192 && b === 0 || a === 192 && b === 168 || a === 198 && b === 51 && c === 100 || a === 203 && b === 0 && c === 113 || a >= 224;
}

function blockedIPv6(ip: string) {
  const value = ip.toLowerCase();
  if (value.startsWith("::ffff:")) return blockedIPv4(value.slice(7));
  return value === "::" || value === "::1" || value.startsWith("fe80:") || value.startsWith("fc") || value.startsWith("fd");
}

export function isBlockedAddress(ip: string) {
  if (net.isIPv4(ip)) return blockedIPv4(ip);
  if (net.isIPv6(ip)) return blockedIPv6(ip);
  return true;
}

export async function validatePublicUrl(raw: string) {
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("Only public http and https URLs are supported.");
  const addresses = await dns.lookup(url.hostname, { all: true });
  if (!addresses.length || addresses.some(({ address }) => isBlockedAddress(address))) throw new Error("That host resolves to a private or blocked network.");
  return url;
}

async function readLimited(response: Response, maxBytes: number) {
  const reader = response.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) throw new Error(`The response is larger than the ${Math.round(maxBytes / 1_000_000)} MB tool limit.`);
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}

export async function fetchPublicText(raw: string, options: { timeoutMs?: number; maxBytes?: number; userAgent?: string } = {}) {
  let url = await validatePublicUrl(raw);
  let response: Response | undefined;
  for (let attempt = 0; attempt <= MAX_REDIRECTS; attempt += 1) {
    response = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(options.timeoutMs ?? 12_000), headers: { "user-agent": options.userAgent ?? "FirecrawTools/1.0" } });
    if (![301, 302, 303, 307, 308].includes(response.status)) break;
    const location = response.headers.get("location");
    if (!location || attempt === MAX_REDIRECTS) throw new Error("Too many redirects or an invalid redirect target.");
    url = await validatePublicUrl(new URL(location, url).toString());
  }
  if (!response || !response.ok) throw new Error(`The page returned HTTP ${response?.status ?? "an unknown error"}.`);
  return { url, response, text: await readLimited(response, options.maxBytes ?? DEFAULT_MAX_BYTES) };
}
