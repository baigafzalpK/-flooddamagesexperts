import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, BRAND_PROMISE, DISCLOSURE } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "About BayouDry Restoration",
  description:
    "How BayouDry Restoration works: we connect Greater Houston property owners with independent water-damage restoration contractors. Fast answers, clear written plans.",
  path: routes.about(),
  ogImageKey: "about",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.about(),
          type: "AboutPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "About", path: routes.about() },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "About" }]} />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            {site.tagline}
          </h1>
        </div>
      </section>

      <div className="container-x max-w-3xl py-14">
        <div className="prose-bw">
          <h2 className="!mt-0">What BayouDry is</h2>
          <p>
            BayouDry Restoration is a connection service for property owners in
            Greater Houston, Texas. When you request help, we match your
            situation with an independent water-damage restoration contractor
            who serves your area — and that contractor assesses the damage,
            explains the plan in writing, and does the work.
          </p>
          <p>
            We don&apos;t send our own crews, because we don&apos;t have any.
            The contractors in our network are independent businesses: they set
            their own prices and are responsible for their own certifications
            and insurance. Our job is to make the first step easy in a moment
            that is anything but — one request, a clear written plan, and a
            contractor who handles the drying and repairs.
          </p>
          <h2>What we promise</h2>
          <p>{BRAND_PROMISE}</p>
          <p>
            That means: the scope is written down before work begins, the drying
            process (extraction, moisture mapping, dehumidifiers, monitoring)
            is explained rather than assumed, and you hear back quickly —
            water damage doesn&apos;t wait, and neither should you.
          </p>
          <h2>How contractors join</h2>
          <p>
            Contractors who take BayouDry requests are independent restoration
            professionals serving Greater Houston. If you&apos;re a contractor
            interested in receiving requests,{" "}
            <Link href={routes.contact()} className="link">
              get in touch
            </Link>
            .
          </p>
        </div>

        <section aria-label="Disclosure" className="card mt-10 p-6">
          <SectionHeading eyebrow="The fine print" title="How this works, plainly" />
          <p className="mt-4 text-pine/80 leading-relaxed">{DISCLOSURE}</p>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
