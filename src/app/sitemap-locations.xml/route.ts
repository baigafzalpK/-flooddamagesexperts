import { sectionXml } from "../sitemap.xml/route";

export async function GET() {
  return new Response(sectionXml("locations"), {
    headers: { "content-type": "application/xml" },
  });
}
