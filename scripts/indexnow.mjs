#!/usr/bin/env node
/**
 * Submit sitemap URLs to IndexNow (Bing + Yandex) after deploy.
 *
 *   INDEXNOW_KEY=... npm run indexnow            # all sitemap URLs
 *   INDEXNOW_KEY=... npm run indexnow -- /path/ /x/   # only changed URLs
 *
 * BASE defaults to NEXT_PUBLIC_SITE_URL, then https://brushwellpainting.com.
 * Key verification: the key must be published at <BASE>/<KEY>.txt
 * (generate the key in Bing Webmaster Tools and add the file to public/).
 */
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const KEY = process.env.INDEXNOW_KEY;
if (!KEY) {
  console.error(
    "Missing INDEXNOW_KEY. Generate one in Bing Webmaster Tools, add it to",
    "public/<key>.txt, and run with INDEXNOW_KEY=<key>."
  );
  process.exit(1);
}

const BASE = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://flooddamagesexperts.com"
).replace(/\/$/, "");
const HOST = new URL(BASE).host;

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1].trim());
}

async function collectSitemapUrls() {
  const index = await fetchText(`${BASE}/sitemap.xml`);
  const childSitemaps = extractLocs(index).filter((u) =>
    u.toLowerCase().includes("sitemap")
  );
  if (childSitemaps.length === 0) return extractLocs(index);
  const all = new Set();
  for (const sm of childSitemaps) {
    for (const loc of extractLocs(await fetchText(sm))) all.add(loc);
  }
  return [...all];
}

const pathArgs = process.argv.slice(2).filter((a) => a.startsWith("/"));
const urlList =
  pathArgs.length > 0
    ? pathArgs.map((p) => `${BASE}${p}`)
    : await collectSitemapUrls();

if (urlList.length === 0) {
  console.error("No URLs to submit.");
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: urlList.slice(0, 10000),
};

const res = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`Submitted ${payload.urlList.length} URLs -> ${res.status}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
