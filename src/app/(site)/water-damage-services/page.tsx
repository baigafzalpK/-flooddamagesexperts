import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { serviceCategories, servicesByCategory } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading, PhotoCard } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "Water Damage Restoration Services in Houston, TX | BayouDry",
  description:
    "Water damage restoration services across Greater Houston. Browse what restoration contractors do — extraction, drying, repairs — and what affects the scope of the work.",
  path: routes.services(),
  ogImageKey: "services",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.services(),
          type: "CollectionPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Services", path: routes.services() },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Services" }]} />
          <p className="eyebrow-light mt-2">Dallas–Fort Worth</p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Cleanup services, explained plainly
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            What each service includes, how specialists do the work, and what
            affects the price — so you know what you&apos;re buying before
            anyone picks up a brush.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat, i) => (
        <section key={cat.slug} id={cat.slug} className={i % 2 === 0 ? "bg-paper" : "bg-white"}>
          <div className="container-x py-14">
            <SectionHeading eyebrow={cat.name} title={cat.name} lede={cat.blurb} />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory(cat.slug).map((s) => (
                <PhotoCard
                  key={s.slug}
                  href={routes.service(s.slug)}
                  title={s.name}
                  blurb={s.answer.slice(0, 130) + "…"}
                  image={s.photo}
                  alt={s.name}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
