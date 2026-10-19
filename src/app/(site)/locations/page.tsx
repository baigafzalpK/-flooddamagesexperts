import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { regions, allCities, cityLabel, allStateInfos, publishedCities } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { IconMapPin } from "@/components/icons";

const meta = pageMeta({
  title: "Water & Flood Damage Restoration Service Areas | Flood Damages Experts",
  description:
    "Flood Damages Experts connects property owners with independent water-damage restoration contractors across 1,200+ cities in 43 states. Check your ZIP.",
  path: routes.locations(),
  ogImageKey: "locations",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function LocationsHubPage() {
  const stateCounts = new Map<string, number>();
  for (const c of publishedCities) {
    stateCounts.set(c.stateSlug, (stateCounts.get(c.stateSlug) ?? 0) + 1);
  }

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.locations(),
          type: "CollectionPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Service areas" }]} />
            <p className="eyebrow-light mt-2">1,200+ cities · Nationwide Coverage</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Where restoration contractors respond
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Flood Damages Experts is a nationwide service-area brand: independent water-damage
              restoration contractors cover these cities. No delay, fast dispatch — just vetted
              specialists where you need them.
            </p>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">Check your ZIP</h2>
            <div className="mt-4">
              <ZipChecker />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-14">
          <SectionHeading
            eyebrow="How service areas work"
            title="One brand, local contractors"
            lede="You request help in your city. We match you with an independent restoration contractor who serves there. What changes city to city: bayou flood zones, slab versus pier-and-beam construction, and the water damage contractors see most."
          />
          {regions.map((region) => (
            <div key={region.name} className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-pine">{region.name}</h2>
              <p className="mt-1 text-pine/70">{region.blurb}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {region.citySlugs
                  .map((slug) => allCities.find((c) => c.slug === slug))
                  .filter((c) => c && c.status === "PUBLISHED")
                  .map((c) =>
                    c ? (
                      <Link
                        key={c.slug}
                        href={routes.city("texas", c.slug)}
                        className="card group flex items-start gap-3 p-5 hover:shadow-md"
                      >
                        <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-lagoon-deep" />
                        <span>
                          <span className="font-serif text-lg font-semibold text-pine group-hover:text-lagoon-deep">
                            {cityLabel(c).split(",")[0]}
                          </span>
                          <span className="mt-1 block text-sm text-pine/65">
                            {c.areas.slice(0, 3).join(" · ")}
                          </span>
                        </span>
                      </Link>
                    ) : null
                  )}
              </div>
            </div>
          ))}

          <div className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-pine">Browse by state</h2>
            <p className="mt-1 text-pine/70">
              Coverage data for every city listed below. Pick a state to see its cities.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {allStateInfos.map((s) => (
                <Link
                  key={s.slug}
                  href={routes.state(s.slug)}
                  className="card group flex items-center justify-between p-4 hover:shadow-md"
                >
                  <span className="font-semibold text-pine group-hover:text-lagoon-deep">
                    {s.name}
                  </span>
                  <span className="text-sm text-pine/55">
                    {stateCounts.get(s.slug) ?? 0} cities
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="card mt-12 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">What contractors document for insurance</h2>
            <p className="mt-3 text-pine/80 leading-relaxed">
              Water damage work often runs through your homeowners insurance.
              Contractors who serve the Houston area know how to document
              moisture readings, drying logs, and photo evidence your insurer
              asks for — ask that all of it goes into the written plan before
              work begins.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
