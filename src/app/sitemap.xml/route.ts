import { indexableUrls } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/seo";

const SECTIONS = ["pages", "services", "locations", "guides"] as const;

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SECTIONS.map(
  (s) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${s}.xml</loc>
    <lastmod>2026-10-08</lastmod>
  </sitemap>`
).join("\n")}
</sitemapindex>`;
  return new Response(xml, {
    headers: { "content-type": "application/xml" },
  });
}

export function sectionFilter(
  section: (typeof SECTIONS)[number]
): (loc: string) => boolean {
  switch (section) {
    case "services":
      return (loc) => loc.startsWith("/water-damage-services/");
    case "locations":
      return (loc) => loc.startsWith("/locations/");
    case "guides":
      return (loc) => loc.startsWith("/resources/");
    case "pages":
    default:
      return (loc) =>
        !loc.startsWith("/water-damage-services/") &&
        !loc.startsWith("/locations/") &&
        !loc.startsWith("/resources/");
  }
}

export function sectionXml(section: (typeof SECTIONS)[number]): string {
  const urls = indexableUrls().filter((u) => sectionFilter(section)(u.loc));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;
}
