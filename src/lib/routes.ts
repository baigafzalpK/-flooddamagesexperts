/**
 * Every URL builder — single source of truth for routes.
 * Adapted from the playbook: `water-damage-services` replaces `plumbing-services`.
 */

export const routes = {
  home: () => "/",
  services: () => "/water-damage-services/",
  service: (slug: string) => `/water-damage-services/${slug}/`,
  locations: () => "/locations/",
  state: (stateSlug: string) => `/locations/${stateSlug}/`,
  city: (stateSlug: string, citySlug: string) =>
    `/locations/${stateSlug}/${citySlug}/`,
  cityService: (stateSlug: string, citySlug: string, serviceSlug: string) =>
    `/locations/${stateSlug}/${citySlug}/${serviceSlug}/`,
  resources: () => "/resources/",
  guide: (slug: string) => `/resources/${slug}/`,
  videos: () => "/videos/",
  about: () => "/about/",
  contact: () => "/contact/",
  faq: () => "/faq/",
  requestService: (params?: { service?: string; zip?: string }) => {
    const q = new URLSearchParams();
    if (params?.service) q.set("service", params.service);
    if (params?.zip) q.set("zip", params.zip);
    const s = q.toString();
    return `/request-service/${s ? `?${s}` : ""}`;
  },
  privacy: () => "/privacy/",
  terms: () => "/terms/",
  accessibility: () => "/accessibility/",
  thankYou: () => "/thank-you/",
  landing: (slug: string) => `/lp/${slug}/`,
} as const;

/** Strip trailing "index" conventions; ensure a single trailing slash. */
export function canonical(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}
