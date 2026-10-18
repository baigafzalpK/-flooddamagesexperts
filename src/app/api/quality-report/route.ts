import { NextResponse } from "next/server";
import { allCities, publishedCityServices } from "@/content";
import { cityQuality, cityServiceQuality } from "@/lib/quality";

/**
 * GET /api/quality-report/ — dev only. Shows every location page and
 * whether the quality gate allows indexing.
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const cities = allCities.map((c) => {
    const q = cityQuality(c);
    return { slug: c.slug, ok: q.ok, reasons: q.reasons };
  });
  const cityServices = publishedCityServices.map((cs) => {
    const city = allCities.find((c) => c.slug === cs.citySlug);
    const parentOk = city ? cityQuality(city).ok : false;
    const q = cityServiceQuality(cs, parentOk);
    return {
      city: cs.citySlug,
      service: cs.serviceSlug,
      ok: q.ok,
      reasons: q.reasons,
    };
  });
  return NextResponse.json({ cities, cityServices });
}
