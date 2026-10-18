#!/usr/bin/env node
/**
 * Crawler-based technical SEO audit. Exit 1 on errors.
 * Usage: BASE=http://localhost:3102 npm run audit:seo
 */
const BASE = (process.env.BASE || "http://localhost:3000").replace(/\/$/, "");
const errors = [];
const warnings = [];

const err = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

async function fetchText(url, opts = {}) {
  const res = await fetch(url, { redirect: "manual", ...opts });
  const text = res.status === 200 ? await res.text() : "";
  return { res, text };
}

function extractMeta(html, name) {
  const m = html.match(
    new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*>`, "i")
  );
  if (!m) return null;
  const c = m[0].match(/content=["']([^"']*)["']/i);
  return c ? c[1] : "";
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : "";
}

function extractH1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").trim()
  );
}

function extractHeadings(html) {
  return [...html.matchAll(/<(h[1-6])[^>]*>/gi)].map((m) => m[1]);
}

function extractLinks(html) {
  const links = [];
  for (const m of html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi)) {
    links.push(m[1]);
  }
  return links;
}

function extractAlts(html) {
  const missing = [];
  for (const m of html.matchAll(/<img[^>]*>/gi)) {
    if (!/alt=["'][^"']+["']/i.test(m[0])) missing.push(m[0].slice(0, 80));
  }
  return missing;
}

function extractJsonLd(html) {
  const blocks = [];
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi
  )) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      err(`Invalid JSON-LD block`);
    }
  }
  return blocks;
}

function collectIds(node, ids = new Set()) {
  if (Array.isArray(node)) node.forEach((n) => collectIds(n, ids));
  else if (node && typeof node === "object") {
    if (typeof node["@id"] === "string") ids.add(node["@id"]);
    Object.values(node).forEach((v) => collectIds(v, ids));
  }
  return ids;
}

function collectRefs(node, refs = []) {
  if (Array.isArray(node)) node.forEach((n) => collectRefs(n, refs));
  else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (k === "@id") continue;
      if (v && typeof v === "object") {
        if (typeof v["@id"] === "string" && Object.keys(v).length === 1)
          refs.push(v["@id"]);
        collectRefs(v, refs);
      }
    }
  }
  return refs;
}

const BANNED = [
  "lorem ipsum",
  "555-01",
  "{{PLACEHOLDER}}",
  "look no further",
  "your trusted partner",
  "world-class",
  "one-stop shop",
  "hassle-free",
  "state-of-the-art",
  "peace of mind",
  "in today's fast-paced world",
];

async function main() {
  console.log(`Auditing ${BASE} ...`);

  // 1. robots.txt
  {
    const { res, text } = await fetchText(`${BASE}/robots.txt`);
    if (res.status !== 200) err("robots.txt not 200");
    else if (!text.includes("sitemap")) warn("robots.txt has no sitemap line");
  }

  // 2. sitemap index + sections
  const sitemapUrls = new Map(); // loc -> lastmod
  {
    const { res, text } = await fetchText(`${BASE}/sitemap.xml`);
    if (res.status !== 200) err("sitemap.xml not 200");
    const sections = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (sections.length === 0) err("sitemap index has no sections");
    for (const s of sections) {
      const path = new URL(s).pathname;
      const r = await fetchText(`${BASE}${path}`);
      if (r.res.status !== 200) {
        err(`sitemap section ${path} not 200`);
        continue;
      }
      for (const m of r.text.matchAll(
        /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g
      )) {
        const loc = m[1];
        if (sitemapUrls.has(loc)) err(`duplicate sitemap URL: ${loc}`);
        sitemapUrls.set(loc, m[2]);
        if (!/^\d{4}-\d{2}-\d{2}/.test(m[2])) err(`bad lastmod for ${loc}: ${m[2]}`);
      }
    }
  }
  console.log(`  sitemap URLs: ${sitemapUrls.size}`);

  // 3. crawl every sitemap URL
  const seen = new Map(); // path -> {status, finalUrl}
  const titles = new Map();
  const descriptions = new Map();
  const h1s = new Map();
  const graph = new Map(); // path -> Set<internal paths>
  const queue = [...sitemapUrls.keys()].map((u) => new URL(u).pathname);
  const crawled = new Set();

  const normalize = (href, from) => {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
      return null;
    try {
      const u = new URL(href, `${BASE}${from}`);
      if (u.origin !== BASE) return null;
      return u.pathname;
    } catch {
      return null;
    }
  };

  while (queue.length) {
    const path = queue.shift();
    if (crawled.has(path)) continue;
    crawled.add(path);
    const { res, text } = await fetchText(`${BASE}${path}`, {});
    // follow one redirect manually
    let finalRes = res,
      finalText = text,
      finalPath = path;
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) {
        err(`${path}: redirect with no location`);
        continue;
      }
      const dest = normalize(loc, path);
      if (dest && dest !== path) {
        const r2 = await fetchText(`${BASE}${dest}`);
        finalRes = r2.res;
        finalText = r2.text;
        finalPath = dest;
        if (r2.res.status >= 300 && r2.res.status < 400)
          err(`${path}: redirect chain > 1 hop`);
      }
    }
    seen.set(path, { status: finalRes.status, finalPath });
    if (finalRes.status !== 200) {
      err(`${path}: status ${finalRes.status}`);
      continue;
    }
    const bodyText = finalText
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<[^>]+>/g, " ");
    if (/page not found|this wall is blank/i.test(bodyText) && path !== "/404/")
      warn(`${path}: possible soft 404`);

    // trailing slash canonical
    if (!finalPath.endsWith("/") && !finalPath.includes(".")) {
      const r = await fetch(`${BASE}${finalPath}`, { redirect: "manual" });
      // informational only
    }

    const title = extractTitle(finalText);
    const desc = extractMeta(finalText, "description") ?? extractMeta(finalText, "og:description");
    const h1list = extractH1s(finalText);
    const robotsMeta =
      extractMeta(finalText, "robots") || "";
    const canonical =
      (finalText.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || "";

    if (!title) err(`${path}: missing <title>`);
    if (title.length > 70) warn(`${path}: title ${title.length} chars`);
    if (titles.has(title)) err(`${path}: duplicate title "${title.slice(0, 50)}" (also ${titles.get(title)})`);
    else titles.set(title, path);
    if (!desc) err(`${path}: missing meta description`);
    else {
      if (desc.length < 70 || desc.length > 160)
        warn(`${path}: description ${desc.length} chars`);
      if (descriptions.has(desc)) err(`${path}: duplicate description (also ${descriptions.get(desc)})`);
      else descriptions.set(desc, path);
    }
    if (h1list.length === 0) err(`${path}: no h1`);
    if (h1list.length > 1) err(`${path}: ${h1list.length} h1s`);
    const h1key = h1list[0] || "";
    if (h1key && h1s.has(h1key)) warn(`${path}: duplicate h1 (also ${h1s.get(h1key)})`);
    else if (h1key) h1s.set(h1key, path);

    // heading order
    const headings = extractHeadings(finalText);
    const levels = headings.map((h) => +h[1]);
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] > levels[i - 1] + 1) {
        warn(`${path}: heading skip ${headings[i - 1]} → ${headings[i]}`);
        break;
      }
    }

    // noindex/canonical conflicts
    const inSitemap = [...sitemapUrls.keys()].some((u) => new URL(u).pathname === path);
    if (inSitemap && /noindex/.test(robotsMeta))
      err(`${path}: in sitemap but noindex`);

    // alt text
    const missingAlts = extractAlts(finalText);
    if (missingAlts.length) err(`${path}: ${missingAlts.length} img(s) missing alt`);

    // banned phrases / placeholders
    const lower = finalText.toLowerCase();
    for (const phrase of BANNED) {
      if (lower.includes(phrase)) {
        // 555-01xx is the temp phone — allowed in body, not in schema
        if (phrase === "555-01") continue;
        err(`${path}: banned phrase "${phrase}"`);
      }
    }
    if (/our painters|our crews|our trucks/.test(lower))
      err(`${path}: claims own crews ("our painters/crews/trucks")`);

    // JSON-LD @id integrity
    for (const block of extractJsonLd(finalText)) {
      const ids = collectIds(block);
      const refs = collectRefs(block);
      for (const r of refs) {
        if (!ids.has(r)) err(`${path}: dangling JSON-LD @id ${r}`);
      }
      const str = JSON.stringify(block);
      if (/"telephone"/.test(str) && /555-01/.test(str))
        err(`${path}: placeholder phone in schema`);
      if (/"review"/i.test(str) || /"aggregateRating"/.test(str))
        warn(`${path}: review/rating markup present — verify it's real`);
    }

    // internal link graph (for depth + orphans)
    const out = new Set();
    for (const href of extractLinks(finalText)) {
      const p = normalize(href, finalPath);
      if (p) {
        out.add(p);
        if (!crawled.has(p) && !queue.includes(p)) queue.push(p);
      }
    }
    graph.set(finalPath, out);
  }

  // 4. click depth from home (BFS)
  {
    const depth = new Map([["/", 0]]);
    const q = ["/"];
    while (q.length) {
      const cur = q.shift();
      for (const nxt of graph.get(cur) ?? []) {
        if (!depth.has(nxt)) {
          depth.set(nxt, depth.get(cur) + 1);
          q.push(nxt);
        }
      }
    }
    let maxDepth = 0;
    for (const u of sitemapUrls.keys()) {
      const p = new URL(u).pathname;
      const d = depth.get(p);
      if (d === undefined) err(`orphan sitemap URL (unreachable from home): ${p}`);
      else {
        maxDepth = Math.max(maxDepth, d);
        if (d > 3) warn(`deep page (depth ${d}): ${p}`);
      }
    }
    console.log(`  max click depth: ${maxDepth}`);
  }

  // 5. llms.txt
  {
    const { res, text } = await fetchText(`${BASE}/llms.txt`);
    if (res.status !== 200) err("llms.txt not 200");
    else {
      const linked = [...text.matchAll(/^-\s+(https?:\/\/[^\s]+)/gm)].map((m) => m[1]);
      let broken = 0;
      for (const u of linked.slice(0, 50)) {
        // check against the audited host, not the production canonical
        const checkUrl = u.replace(/^https?:\/\/[^/]+/, BASE);
        const r = await fetch(checkUrl, { redirect: "manual" }).catch(() => null);
        if (!r || r.status >= 400) broken++;
      }
      if (broken) err(`llms.txt: ${broken} broken links (sampled 50)`);
    }
  }

  // 6. lead endpoint: cross-origin must be rejected
  {
    const r = await fetch(`${BASE}/api/lead`, {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://evil.example" },
      body: JSON.stringify({}),
    });
    if (r.status !== 403) err(`POST /api/lead cross-origin not rejected (got ${r.status})`);
  }

  // 7. trailing-slash redirect check
  {
    const r = await fetch(`${BASE}/about`, { redirect: "manual" });
    if (r.status !== 308 && r.status !== 301)
      warn(`/about (no slash) did not redirect (got ${r.status})`);
  }

  console.log(`\nCrawled ${crawled.size} pages.`);
  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    warnings.slice(0, 30).forEach((w) => console.log(`  ! ${w}`));
  }
  if (errors.length) {
    console.log(`\nERRORS (${errors.length}):`);
    errors.slice(0, 60).forEach((e) => console.log(`  ✗ ${e}`));
    process.exit(1);
  }
  console.log("\n✓ 0 errors");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
