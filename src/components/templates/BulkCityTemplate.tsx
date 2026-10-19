import Link from "next/link";
import type { City } from "@/content/types";
import {
  getService,
  publishedArticles,
  getCityByState,
  bulkLabel,
} from "@/content";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { SectionHeading, Chip } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";

/**
 * Lightweight template for the 1,200 programmatic city pages.
 * Only renders real dataset fields (county, ZIP count, in-state rank) —
 * no invented neighborhoods or ZIP lists.
 */
export function BulkCityTemplate({ city }: { city: City }) {
  const label = bulkLabel(city);
  const shortName = label.split(",")[0];
  const stateName = label.split(", ")[1] ?? "";
  const path = routes.city(city.stateSlug, city.slug);

  const popular = city.popularServices
    .map((slug) => getService(slug))
    .filter((s) => s && s.status === "PUBLISHED");
  const guides = publishedArticles.slice(0, 3);
  const nearby = city.nearby
    .map((slug) => getCityByState(city.stateSlug, slug))
    .filter((c) => c && c.status === "PUBLISHED");

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          type: "ItemPage",
          name: `Water Damage Restoration in ${label} | Flood Damages Experts`,
          description: `Water damage restoration in ${label}: local contractors serving ${city.zipCount} ZIP codes. Fast extraction, thorough drying, clear written plan.`,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
            { name: stateName, path: routes.state(city.stateSlug) },
            { name: shortName, path },
          ],
          aboutIds: [`${SITE_URL}${path}#place`],
          faqs: city.faqs.map((f) => ({ q: f.q, a: f.a })),
        })}
      />

      {/* Hero */}
      <section className="bg-pine">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Breadcrumbs
              items={[
                { name: "Home", href: routes.home() },
                { name: "Service areas", href: routes.locations() },
                { name: stateName, href: routes.state(city.stateSlug) },
                { name: shortName },
              ]}
            />
            <p className="eyebrow-light mt-2">
              {city.county ? `${city.county} County, ` : ""}
              {stateName}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Water damage restoration in {label}
            </h1>
            <p className="mt-4 text-lg text-white/85">
              {city.intro[0]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneE164}`} className="btn-primary">
                Call {site.phoneDisplay}
              </a>
              <Link href={routes.requestService()} className="btn-outline-light">
                Request help now
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">ZIP codes covered</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">{city.zipCount}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Coverage rank in {stateName}</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">#{city.stateRank}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">First step</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Call or request help</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <LeadFormBlock compact />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <section className="prose-bw">
            {city.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section aria-label="About the area" className="card mt-8 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">
              {shortName} at a glance
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-pine/85">
              {city.housingNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>

          <section aria-label="Local cleanup issues" className="mt-10">
            <SectionHeading eyebrow="Common situations" title={`What specialists see most around ${shortName}`} />
            <div className="mt-6 space-y-4">
              {city.localIssues.map((issue) => (
                <div key={issue.title} className="card p-5">
                  <h3 className="font-semibold text-pine">{issue.title}</h3>
                  <p className="mt-2 text-[15px] text-pine/75">{issue.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-label="Common cleanup calls" className="mt-10">
            <SectionHeading eyebrow="Services" title={`Cleanup services in ${shortName}`} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {popular.map((s) =>
                s ? (
                  <Link
                    key={s.slug}
                    href={routes.service(s.slug)}
                    className="card block p-5 hover:shadow-md"
                  >
                    <h3 className="font-serif text-lg font-semibold text-pine">{s.name}</h3>
                    <p className="mt-2 text-[15px] text-pine/70">{s.answer.slice(0, 120)}…</p>
                  </Link>
                ) : null
              )}
            </div>
          </section>

          <section aria-label="FAQ" className="mt-10">
            <SectionHeading eyebrow="FAQ" title={`${shortName} cleanup questions`} />
            <div className="mt-6">
              <FaqList faqs={city.faqs} idPrefix={`bulk-${city.slug}`} />
            </div>
          </section>

          {nearby.length > 0 && (
            <section aria-label="Nearby cities" className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-pine">
                Nearby coverage
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((c) =>
                  c ? (
                    <Chip key={c.slug} href={routes.city(c.stateSlug, c.slug)}>
                      {bulkLabel(c)}
                    </Chip>
                  ) : null
                )}
              </div>
              <p className="mt-4">
                <Link href={routes.state(city.stateSlug)} className="link font-semibold">
                  Back to all of {stateName}
                </Link>
              </p>
            </section>
          )}
        </article>

        <aside className="space-y-8">
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-pine">Specialists in {shortName}</h2>
            <p className="mt-2 text-[15px] text-pine/70">
              Get matched with an independent restoration contractor and a clear written plan.
            </p>
            <Link href={routes.requestService()} className="btn-primary mt-4 w-full">
              Request help now
            </Link>
          </div>
          {guides.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-pine">Helpful guides</h2>
              <div className="mt-4 space-y-4">
                {guides.map((g) => (
                  <Link key={g.slug} href={routes.guide(g.slug)} className="card block p-4 hover:shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-lagoon-deep">{g.category}</p>
                    <p className="mt-1 font-semibold text-pine">{g.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <CtaBand
        title={`Cleanup needed in ${shortName}?`}
        lede="Tell us what you're dealing with. An independent restoration contractor will follow up with a clear written plan."
      />
    </>
  );
}
