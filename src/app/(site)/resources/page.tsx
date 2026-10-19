import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { publishedArticles } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading, PhotoCard } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "Water Damage Guides & Resources",
  description:
    "Plain-English guides to water damage: what to do when pipes burst, dealing with floods, mold prevention, insurance claims and more — from Flood Damages Experts.",
  path: routes.resources(),
  ogImageKey: "resources",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function ResourcesHubPage() {
  const cats = [...new Set(publishedArticles.map((a) => a.category))];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.resources(),
          type: "CollectionPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Guides", path: routes.resources() },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Guides" }]} />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Water damage guides, minus the jargon
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            What to do when it happens, how drying works, and what insurance
            asks for — written for Houston.
          </p>
        </div>
      </section>

      {cats.map((cat, i) => (
        <section key={cat} className={i % 2 === 0 ? "bg-paper" : "bg-white"}>
          <div className="container-x py-12">
            <SectionHeading eyebrow="Guides" title={cat} />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {publishedArticles
                .filter((a) => a.category === cat)
                .map((a) => (
                  <PhotoCard
                    key={a.slug}
                    href={routes.guide(a.slug)}
                    title={a.title}
                    blurb={a.answer.slice(0, 130) + "…"}
                    image={a.photo}
                    alt={a.title}
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
