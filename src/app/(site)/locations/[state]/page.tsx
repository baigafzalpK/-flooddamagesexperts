import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { allStateInfos, citiesByState, cityLabel, bulkLabel, isBulkCity } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { IconMapPin } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return allStateInfos.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const info = allStateInfos.find((s) => s.slug === slug);
  if (!info) return {};
  const meta = pageMeta({
    title: `Water Damage Restoration in ${info.name} | Flood Damages Experts`,
    description: `Water damage restoration across ${info.name}: how housing, climate and flood risk shape the work, plus the cities contractors cover.`,
    path: routes.state(slug),
    ogImageKey: `state-${slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const info = allStateInfos.find((s) => s.slug === slug);
  if (!info) notFound();
  const cities = citiesByState(slug);

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.state(slug),
          type: "CollectionPage",
          name: `Water Damage Restoration in ${info.name} | Flood Damages Experts`,
          description: info.intro[0] ?? "",
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
            { name: info.name, path: routes.state(slug) },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home() },
              { name: "Service areas", href: routes.locations() },
              { name: info.name },
            ]}
          />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Water damage restoration in {info.name}
          </h1>
          <div className="mt-4 max-w-3xl space-y-4 text-lg text-white/85">
            {info.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-14">
          <SectionHeading eyebrow={info.name} title="What shapes the work here" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Housing stock", body: info.details.housing },
              { title: "Climate", body: info.details.climate },
              { title: "Permits", body: info.details.permits },
            ].map((d) => (
              <div key={d.title} className="card p-6">
                <h2 className="font-serif text-xl font-semibold text-pine">{d.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-pine/80">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-14">
          <SectionHeading eyebrow="Towns" title={`${info.name} towns we cover`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={routes.city(slug, c.slug)}
                className="card group flex items-start gap-3 p-5 hover:shadow-md"
              >
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-lagoon-deep" />
                <span>
                  <span className="font-serif text-lg font-semibold text-pine group-hover:text-lagoon-deep">
                    {(isBulkCity(slug, c.slug) ? bulkLabel(c) : cityLabel(c)).split(",")[0]}
                  </span>
                  <span className="mt-1 block text-sm text-pine/65">
                    {c.areas.length > 0 ? c.areas.slice(0, 3).join(" · ") : `${c.zipCount ?? 0} ZIP codes covered`}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
