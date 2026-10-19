/**
 * Connected JSON-LD graph with stable @ids.
 * Call-brand model: Organization is a plain `Organization` (NOT Painter),
 * services use `broker`, never `provider`. No fake ratings, reviews, prices,
 * offices, awards or licenses. The temp 555 phone is EXCLUDED from schema.
 */
import { SITE_URL } from "./seo";
import { site } from "@/content/site";
import { routes } from "./routes";
import type { City, Service, Article } from "@/content/types";
import { cityLabel } from "@/content/locations";

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

function isPlaceholderPhone(): boolean {
  return !process.env.NEXT_PUBLIC_BUSINESS_PHONE;
}

export function siteGraph(cities: City[], services: Service[]) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      alternateName: site.shortName,
      url: SITE_URL,
      description:
        "Flood Damages Experts connects property owners with independent licensed water-damage restoration contractors for emergency water extraction, flood cleanup, structural drying, and mold remediation.",
      areaServed: cities.map((c) => ({
        "@type": "Place",
        name: cityLabel(c),
      })),
      knowsAbout: [
        "Emergency water extraction",
        "Flood damage cleanup",
        "Structural drying and dehumidification",
        "Sewage backup cleanup",
        "Mold remediation",
      ],
      ...(isPlaceholderPhone()
        ? {}
        : { telephone: site.phoneE164, contactPoint: { "@type": "ContactPoint", telephone: site.phoneE164, contactType: "sales" } }),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: site.name,
      publisher: { "@id": orgId },
    },
    // City places (county → state chain kept shallow; defined once, referenced by @id)
    ...cities.map((c) => ({
      "@type": "Place",
      "@id": `${SITE_URL}${routes.city("texas", c.slug)}#place`,
      name: cityLabel(c),
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${c.county} County`,
        containedInPlace: { "@type": "State", name: "Texas" },
      },
    })),
    // Service catalog entries — broker model
    ...services.map((s) => ({
      "@type": "Service",
      "@id": `${SITE_URL}${routes.service(s.slug)}#service`,
      name: s.name,
      url: `${SITE_URL}${routes.service(s.slug)}`,
      broker: { "@id": orgId },
      areaServed: { "@id": `${SITE_URL}${routes.state("texas")}#place` },
    })),
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}

export function pageGraph(opts: {
  path: string;
  type: "WebPage" | "CollectionPage" | "ItemPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  aboutIds?: string[];
  faqs?: { q: string; a: string }[];
  service?: Service;
  article?: Article;
}): Record<string, unknown> {
  const pageId = `${SITE_URL}${opts.path}#webpage`;
  const nodes: Record<string, unknown>[] = [
    {
      "@type": opts.type,
      "@id": pageId,
      url: `${SITE_URL}${opts.path}`,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": websiteId },
      about: [
        { "@id": orgId },
        ...(opts.aboutIds ?? []).map((id) => ({ "@id": id })),
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: opts.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      },
      ...(opts.faqs?.length
        ? {
            mainEntity: opts.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }
        : {}),
    },
  ];

  if (opts.service) {
    const s = opts.service;
    nodes.push({
      "@type": "Service",
      "@id": `${SITE_URL}${routes.service(s.slug)}#service`,
      name: s.name,
      url: `${SITE_URL}${routes.service(s.slug)}`,
      broker: { "@id": orgId },
    });
  }
  if (opts.article) {
    const a = opts.article;
    nodes.push({
      "@type": "Article",
      "@id": `${SITE_URL}${routes.guide(a.slug)}#article`,
      headline: a.title,
      datePublished: a.published,
      dateModified: a.updated,
      author: { "@id": orgId },
    });
  }
  // FAQPage typing: only add when FAQs are visibly rendered (caller ensures this)
  if (opts.faqs?.length) {
    (nodes[0] as Record<string, unknown>)["@type"] = ["WebPage", "FAQPage"];
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Escape < in JSON-LD (security: prevents script breakout). */
export function jsonLdScript(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
