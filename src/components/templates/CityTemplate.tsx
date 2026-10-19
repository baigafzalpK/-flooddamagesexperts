import Link from "next/link";
import type { City } from "@/content/types";
import {
  getService,
  publishedCityServices,
  publishedArticles,
  allCities,
  cityLabel,
  getCity,
} from "@/content";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { createLinker } from "@/lib/linker";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { SectionHeading, Chip } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";

export function CityTemplate({ city }: { city: City }) {
  const label = cityLabel(city);
  const shortName = label.split(",")[0];
  const linker = createLinker(routes.city("texas", city.slug));

  const cityServicePages = publishedCityServices.filter(
    (cs) => cs.citySlug === city.slug
  );
  const popular = city.popularServices
    .map((slug) => getService(slug))
    .filter((s) => s && s.status === "PUBLISHED");
  const guides = publishedArticles.slice(0, 3);
  const nearby = city.nearby
    .map((slug) => getCity(slug))
    .filter((c) => c && c.status === "PUBLISHED");

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.city("texas", city.slug),
          type: "ItemPage",
          name: `Water Damage Restoration in ${label} | Flood Damages Experts`,
          description: `Water damage restoration in ${label}: local notes on housing and what contractors see most, plus clear written plans from independent licensed contractors.`,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
            { name: "Texas", path: routes.state("texas") },
            { name: shortName, path: routes.city("texas", city.slug) },
          ],
          aboutIds: [`${SITE_URL}${routes.city("texas", city.slug)}#place`],
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
                { name: "Texas", href: routes.state("texas") },
                { name: shortName },
              ]}
            />
            <p className="eyebrow-light mt-2">{city.county} County, Texas</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Water damage restoration in {label}
            </h1>
            <p className="mt-4 text-lg text-white/85">
              {city.areas.slice(0, 4).join(" · ")} and surrounding neighborhoods —
              matched with independent restoration contractors and a clear written plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneE164}`} className="btn-primary">
                Call {site.phoneDisplay}
              </a>
              <Link href={routes.requestService({ zip: city.zips[0] })} className="btn-outline-light">
                Get a free quote
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Neighborhoods</dt>
                <dd className="mt-1 font-serif text-lg font-semibold">{city.areas.length} covered</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">ZIP codes</dt>
                <dd className="mt-1 font-serif text-lg font-semibold">{city.zips.slice(0, 3).join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Quote</dt>
                <dd className="mt-1 font-serif text-lg font-semibold">Free &amp; written</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <LeadFormBlock defaultZip={city.zips[0]} compact />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-3">
        <article className="lg:col-span-2">
          {/* Housing + local issues */}
          <section className="prose-bw">
            {city.intro.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: linker.linkify(p) }} />
            ))}
          </section>

          <section aria-label="Housing notes" className="card mt-8 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">
              {shortName} housing, in brief
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-pine/85">
              {city.housingNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>

          <section aria-label="Local cleanup issues" className="mt-10">
            <SectionHeading eyebrow="Local issues" title={`What specialists see most in ${shortName}`} />
            <div className="mt-6 space-y-4">
              {city.localIssues.map((issue) => (
                <div key={issue.title} className="card p-5">
                  <h3 className="font-semibold text-pine">{issue.title}</h3>
                  <p className="mt-2 text-[15px] text-pine/75">{issue.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common calls */}
          <section aria-label="Common cleanup calls" className="mt-10">
            <SectionHeading eyebrow="Common calls" title={`Common cleanup calls in ${shortName}`} />
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
            {cityServicePages.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-pine">Local deep-dives:</h3>
                <ul className="mt-2 space-y-1">
                  {cityServicePages.map((cs) => {
                    const s = getService(cs.serviceSlug);
                    return s ? (
                      <li key={cs.serviceSlug}>
                        <Link
                          href={routes.cityService("texas", city.slug, cs.serviceSlug)}
                          className="link"
                        >
                          {s.name} in {shortName}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}
            <p className="mt-6 text-pine/75">
              Also available:{" "}
              <Link href={routes.services()} className="link">
                all cleanup services
              </Link>
              .
            </p>
          </section>

          {/* At a glance */}
          <section aria-label={`${shortName} at a glance`} className="card mt-10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">{shortName} at a glance</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">County</dt>
                <dd className="mt-1 text-pine/85">{city.county} County</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Neighborhoods</dt>
                <dd className="mt-1 text-pine/85">{city.areas.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">ZIP codes</dt>
                <dd className="mt-1 text-pine/85">{city.zips.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Permits</dt>
                <dd className="mt-1 text-pine/85">Cleanup needs no city building permit; property-manager coordination often required</dd>
              </div>
            </dl>
          </section>

          {/* FAQ */}
          <section aria-label="FAQ" className="mt-10">
            <SectionHeading eyebrow="FAQ" title={`${shortName} cleanup questions`} />
            <div className="mt-6">
              <FaqList faqs={city.faqs} idPrefix={`city-${city.slug}`} />
            </div>
          </section>

          {/* Nearby */}
          {nearby.length > 0 && (
            <section aria-label="Nearby towns" className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-pine">Nearby towns</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((c) =>
                  c ? (
                    <Chip key={c.slug} href={routes.city("texas", c.slug)}>
                      {cityLabel(c)}
                    </Chip>
                  ) : null
                )}
              </div>
              <p className="mt-4">
                <Link href={routes.state("texas")} className="link font-semibold">
                  Back to all of Texas
                </Link>
              </p>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-pine">Specialists in {shortName}</h2>
            <p className="mt-2 text-[15px] text-pine/70">
              Get matched with an independent restoration contractor and a clear written plan.
            </p>
            <Link href={routes.requestService({ zip: city.zips[0] })} className="btn-primary mt-4 w-full">
              Get a free quote
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
