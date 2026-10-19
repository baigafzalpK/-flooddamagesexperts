/**
 * pageMeta(): unique title, description, canonical, robots, OG/Twitter.
 * Title appends " | BayouDry Restoration" unless it would exceed ~62 chars.
 */
import { site } from "@/content/site";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://flooddamagesexperts.com";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogImage: string;
}

const BRAND_SUFFIX = ` | ${site.shortName}`;

function withBrand(title: string): string {
  if (title.length + BRAND_SUFFIX.length <= 62) return title + BRAND_SUFFIX;
  return title;
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  canonicalOverride?: string;
  ogImageKey?: string;
}): PageMeta {
  const canonical = opts.canonicalOverride ?? `${SITE_URL}${opts.path}`;
  return {
    title: withBrand(opts.title),
    description:
      opts.description.length > 160
        ? opts.description.slice(0, 157) + "…"
        : opts.description,
    canonical,
    robots: opts.noindex ? "noindex, follow" : "index, follow",
    ogImage: `${SITE_URL}/og/${opts.ogImageKey ?? "home"}`,
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export { SITE_URL };
