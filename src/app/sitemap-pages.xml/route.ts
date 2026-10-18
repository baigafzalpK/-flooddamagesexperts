import { sectionXml } from "../sitemap.xml/route";

export async function GET() {
  return new Response(sectionXml("pages"), {
    headers: { "content-type": "application/xml" },
  });
}
