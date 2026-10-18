/**
 * Per-page Open Graph card definitions.
 * Keys: home, services, locations, resources, about, contact, faq,
 *   service-{slug}, city-{slug}, cityservice-{city}-{service}, guide-{slug}
 */
import {
  getService,
  getCity,
  getArticle,
  cityLabel,
  allStateInfos,
  indexableUrlsSafe,
} from "./og-data";

export interface OgCard {
  eyebrow: string;
  title: string;
  area: string;
}

export function ogCardFor(key: string): OgCard {
  const fallback: OgCard = {
    eyebrow: "BayouDry Restoration",
    title: "Houston Water Damage Restoration",
    area: "Greater Houston, TX",
  };
  if (key === "home") return fallback;
  if (key === "services")
    return { eyebrow: "BayouDry Restoration", title: "Restoration Services", area: "Greater Houston, TX" };
  if (key === "locations")
    return { eyebrow: "BayouDry Restoration", title: "Service Areas", area: "16 Greater Houston cities" };
  if (key === "resources")
    return { eyebrow: "BayouDry Restoration", title: "Restoration Guides", area: "Plain-English how-tos" };
  if (key === "about")
    return { eyebrow: "BayouDry Restoration", title: "How BayouDry Works", area: "Greater Houston, TX" };
  if (key === "contact")
    return { eyebrow: "BayouDry Restoration", title: "Request Fast Help", area: "Greater Houston, TX" };
  if (key === "faq")
    return { eyebrow: "BayouDry Restoration", title: "Common Questions", area: "BayouDry Restoration" };

  if (key.startsWith("service-")) {
    const s = getService(key.slice(8));
    if (s) return { eyebrow: "Restoration Service", title: s.name, area: "Greater Houston, TX" };
  }
  if (key.startsWith("cityservice-")) {
    const rest = key.slice(12).split("-");
    // cityservice-{city}-{service}: service slug is last segment group; find by trying splits
    for (let i = 1; i < rest.length; i++) {
      const citySlug = rest.slice(0, i).join("-");
      const serviceSlug = rest.slice(i).join("-");
      const c = getCity(citySlug);
      const s = getService(serviceSlug);
      if (c && s)
        return { eyebrow: cityLabel(c), title: s.name, area: "Fast emergency response" };
    }
  }
  if (key === "city-bulk")
    return { eyebrow: "Water Damage Restoration", title: "BayouDry Restoration", area: "600+ Texas cities" };
  if (key.startsWith("state-")) {
    const s = allStateInfos.find((i) => i.slug === key.slice(6));
    if (s) return { eyebrow: "Water Damage Restoration", title: `Water Damage Restoration in ${s.name}`, area: "BayouDry Restoration" };
  }
  if (key.startsWith("city-")) {
    const c = getCity(key.slice(5));
    if (c) return { eyebrow: "Water Damage Restoration", title: cityLabel(c), area: `${c.areas.length} neighborhoods covered` };
  }
  if (key.startsWith("guide-")) {
    const a = getArticle(key.slice(6));
    if (a) return { eyebrow: a.category, title: a.title, area: "BayouDry Restoration guides" };
  }
  return fallback;
}

/** All OG keys for static generation. */
export function allOgKeys(): string[] {
  return indexableUrlsSafe();
}
