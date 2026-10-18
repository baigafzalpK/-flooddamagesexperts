import { indexableUrls } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/seo";
import { site, DISCLOSURE } from "@/content/site";

/**
 * /llms.txt — generated from the indexable URL list.
 */
export async function GET() {
  const urls = indexableUrls();
  const lines = [
    `# ${site.name}`,
    "",
    site.tagline,
    "",
    "## Disclosure",
    "",
    DISCLOSURE,
    "",
    "## Pages",
    "",
    ...urls.map((u) => `- ${SITE_URL}${u.loc}`),
  ];
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
