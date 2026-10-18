/**
 * Programmatic-SEO quality gate. Failing records are noindexed / excluded
 * from sitemaps / not generated. Fix failures by writing MORE real local
 * content — never by lowering thresholds.
 */
import type { City, CityService } from "@/content/types";

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export interface QualityResult {
  ok: boolean;
  reasons: string[];
}

export function cityQuality(city: City): QualityResult {
  const reasons: string[] = [];
  const localCopy = [
    ...city.intro,
    ...city.housingNotes,
    ...city.localIssues.map((i) => `${i.title} ${i.body}`),
  ].join(" ");

  if (wordCount(localCopy) < 180)
    reasons.push(`local copy ${wordCount(localCopy)} words < 180`);
  if (city.localIssues.length < 2) reasons.push("fewer than 2 local issues");
  if (city.zips.length === 0) reasons.push("no ZIP codes");
  if (city.popularServices.length < 3)
    reasons.push("fewer than 3 popular services");
  if (city.nearby.length === 0) reasons.push("no nearby towns");
  if (city.status !== "PUBLISHED") reasons.push(`status ${city.status}`);

  return { ok: reasons.length === 0, reasons };
}

/**
 * Quality gate for programmatic bulk cities. Same bar as cityQuality on copy
 * depth, but checks ZIP *count* (the dataset gives counts, not ZIP lists)
 * instead of requiring actual ZIP codes.
 */
export function bulkCityQuality(city: City): QualityResult {
  const reasons: string[] = [];
  const localCopy = [
    ...city.intro,
    ...city.housingNotes,
    ...city.localIssues.map((i) => `${i.title} ${i.body}`),
  ].join(" ");

  if (wordCount(localCopy) < 180)
    reasons.push(`local copy ${wordCount(localCopy)} words < 180`);
  if (city.localIssues.length < 2) reasons.push("fewer than 2 local issues");
  if (!city.zipCount || city.zipCount < 1) reasons.push("no ZIP coverage");
  if (city.popularServices.length < 3)
    reasons.push("fewer than 3 popular services");
  if (city.nearby.length === 0) reasons.push("no nearby towns");
  if (city.status !== "PUBLISHED") reasons.push(`status ${city.status}`);

  return { ok: reasons.length === 0, reasons };
}

export function cityServiceQuality(  cs: CityService,
  parentCityOk: boolean
): QualityResult {
  const reasons: string[] = [];
  const words = wordCount(cs.localAngle.join(" "));
  if (words < 90) reasons.push(`local angle ${words} words < 90`);
  if (!parentCityOk) reasons.push("parent city failed quality gate");
  if (cs.status !== "PUBLISHED") reasons.push(`status ${cs.status}`);
  return { ok: reasons.length === 0, reasons };
}
