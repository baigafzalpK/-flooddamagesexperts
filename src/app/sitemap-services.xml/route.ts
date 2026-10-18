import { sectionXml } from "../sitemap.xml/route";

export async function GET() {
  return new Response(sectionXml("services"), {
    headers: { "content-type": "application/xml" },
  });
}
