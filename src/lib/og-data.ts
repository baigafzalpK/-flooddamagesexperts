/**
 * Re-exports for og.ts without creating an import cycle
 * (og.ts is imported by the OG route; content/index imports a lot).
 */
export {
  getService,
  getCity,
  getCityByState,
  getArticle,
  cityLabel,
  isBulkCity,
  allStateInfos,
} from "@/content";
import { getCityByState, isBulkCity } from "@/content";
import { indexableUrls } from "./sitemap";

/** Derive OG keys from indexable URLs.
 *  Bulk programmatic cities share one generic card ("city-bulk") so the
 *  build doesn't render 1,200 near-identical images.
 */
export function indexableUrlsSafe(): string[] {
  const keys = new Set<string>([
    "home",
    "services",
    "locations",
    "resources",
    "about",
    "contact",
    "faq",
    "city-bulk",
  ]);
  for (const u of indexableUrls()) {
    const loc = u.loc;
    let m: RegExpMatchArray | null;
    if ((m = loc.match(/^\/water-damage-services\/([^/]+)\/$/)))
      keys.add(`service-${m[1]}`);
    else if ((m = loc.match(/^\/locations\/([a-z]{2})\/([^/]+)\/([^/]+)\/$/)))
      keys.add(`cityservice-${m[2]}-${m[3]}`);
    else if ((m = loc.match(/^\/locations\/([a-z]{2})\/([^/]+)\/$/))) {
      const [state, slug] = [m[1], m[2]];
      if (isBulkCity(state, slug)) keys.add("city-bulk");
      else keys.add(`city-${slug}`);
    } else if ((m = loc.match(/^\/resources\/([^/]+)\/$/)))
      keys.add(`guide-${m[1]}`);
    else if ((m = loc.match(/^\/locations\/([a-z]{2})\/$/)))
      keys.add(`state-${m[1]}`);
  }
  // Silence unused-import lint for getCityByState (kept for API parity)
  void getCityByState;
  return [...keys];
}
