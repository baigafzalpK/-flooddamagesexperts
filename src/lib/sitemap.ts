/**
 * indexableUrls(): the list shared by sitemaps, llms.txt and the SEO audit.
 * Only quality-gated, published records are included.
 */
import { routes } from "./routes";
import {
  publishedServices,
  publishedCities,
  publishedArticles,
  publishedCityServices,
  getCityByState,
  isBulkCity,
  allStateInfos,
} from "@/content";
import { cityQuality, bulkCityQuality, cityServiceQuality } from "./quality";
import { contentDates } from "@/content/dates";

export interface IndexableUrl {
  loc: string;
  lastmod: string;
}

const cityOkCache = new Map<string, boolean>();
function cityOk(state: string, slug: string): boolean {
  const key = `${state}/${slug}`;
  const hit = cityOkCache.get(key);
  if (hit !== undefined) return hit;
  const city = getCityByState(state, slug);
  const ok = city
    ? isBulkCity(state, slug)
      ? bulkCityQuality(city).ok
      : cityQuality(city).ok
    : false;
  cityOkCache.set(key, ok);
  return ok;
}

export function indexableUrls(): IndexableUrl[] {
  const urls: IndexableUrl[] = [];

  urls.push({ loc: routes.home(), lastmod: contentDates.services });
  urls.push({ loc: routes.services(), lastmod: contentDates.services });
  urls.push({ loc: routes.locations(), lastmod: contentDates.locations });
  urls.push({ loc: routes.resources(), lastmod: contentDates.guides });
  urls.push({ loc: routes.videos(), lastmod: contentDates.guides });
  urls.push({ loc: routes.about(), lastmod: contentDates.services });
  urls.push({ loc: routes.contact(), lastmod: contentDates.services });
  urls.push({ loc: routes.faq(), lastmod: contentDates.guides });

  // State hub pages (TX deep + 38 programmatic)
  for (const s of allStateInfos)
    urls.push({ loc: routes.state(s.slug), lastmod: s.updated });

  for (const s of publishedServices)
    urls.push({
      loc: routes.service(s.slug),
      lastmod: s.updated,
    });

  for (const c of publishedCities) {
    if (!cityOk(c.stateSlug, c.slug)) continue;
    urls.push({ loc: routes.city(c.stateSlug, c.slug), lastmod: c.updated });
  }

  for (const cs of publishedCityServices) {
    const city = getCityByState("texas", cs.citySlug);
    const q = cityServiceQuality(cs, city ? cityOk("texas", cs.citySlug) : false);
    if (!q.ok) continue;
    urls.push({
      loc: routes.cityService("texas", cs.citySlug, cs.serviceSlug),
      lastmod: cs.updated,
    });
  }

  for (const a of publishedArticles)
    urls.push({ loc: routes.guide(a.slug), lastmod: a.updated });

  // De-dupe just in case
  const seen = new Set<string>();
  return urls.filter((u) => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });
}
