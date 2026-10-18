import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, BRAND_PROMISE } from "@/content/site";
import {
  serviceCategories,
  servicesByCategory,
  allCities,
  publishedArticles,
  generalFaqs,
} from "@/content";
import { SectionHeading, PhotoCard, Chip, CheckItem } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import { ProblemFinder } from "@/components/ProblemFinder";
import { Triage } from "@/components/Triage";
import { BeforeAfterSection } from "@/components/BeforeAfter";
import { EmergencyChecklist } from "@/components/EmergencyChecklist";
import { VideoSection } from "@/components/VideoSection";
import { Reviews } from "@/components/Reviews";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { IconCheck, IconArrowRight } from "@/components/icons";

const meta = pageMeta({
  title: "Water Damage Restoration in Houston, TX",
  description:
    "Water damage restoration in Houston, TX: emergency water extraction, flood cleanup, and structural drying. BayouDry connects you with an independent local restoration contractor — call now.",
  path: routes.home(),
  ogImageKey: "home",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage }],
  },
};

const LOCAL_KNOWLEDGE = [
  {
    title: "Bayou flooding is a fact of life",
    body: "Houston's bayous rise fast in a summer storm, and floodwater brings silt and contaminants into the home. Specialists here are used to it — extraction, tear-out where needed, and drying that holds up to Gulf humidity.",
  },
  {
    title: "Clay soil and slab foundations",
    body: "Expansive Gulf Coast clay shifts under most Houston slab foundations. Specialists check for water trapped under flooring and behind baseboards — not just what you can see on the surface.",
  },
  {
    title: "Mold starts within a day or two",
    body: "In Houston humidity, mold can begin growing in 24–48 hours after a leak. Fast extraction and real structural drying are what keep a small leak from becoming a much bigger job.",
  },
  {
    title: "The 2021 freeze was a lesson",
    body: "Burst pipes from hard freezes hit thousands of Houston homes at once. Ask your contractor about preventing the next freeze loss, not just fixing this one.",
  },
];

const PROCESS = [
  { title: "Call or request help", body: "Tell us where the water is coming from and what it hit. We'll match you with an independent restoration contractor serving your part of Houston." },
  { title: "Get a clear plan in writing", body: "The contractor who takes your job assesses the damage, explains the drying plan, and puts it in writing before work begins." },
  { title: "Extraction and structural drying", body: "Standing water comes out, moisture is mapped with meters, and drying equipment runs until the structure is truly dry — not just surface-dry." },
];

export default function HomePage() {
  const faqs = generalFaqs.slice(0, 6);
  const guides = publishedArticles.slice(0, 3);

  return (
    <div data-home>
      <JsonLd
        data={pageGraph({
          path: routes.home(),
          type: "WebPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [{ name: "Home", path: routes.home() }],
          faqs: faqs.map((f) => ({ q: f.q, a: f.a })),
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-pine">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/photos/cat-emergency-response.jpg)" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-pine via-pine/92 to-pine/55" />
        <div className="container-x relative grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow-light">Houston, Texas</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Water damage in your Houston home? Here&apos;s what to do right now
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Shut off the water at the main valve. Cut power to the wet rooms.
              Then call — BayouDry connects you with an independent water-damage
              restoration contractor in Houston who can extract the water and
              start structural drying before mold takes hold.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.requestService()} className="btn-primary">
                Request help now
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn-outline-light">
                Call {site.phoneDisplay}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Service area</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Houston metro</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Approach</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Extract &amp; dry</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Specialists</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Independent pros</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center">
            <div className="card w-full p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-pine">Check your ZIP</h2>
              <p className="mt-2 text-pine/70">
                See if a contractor covers your area, then request help.
              </p>
              <div className="mt-4">
                <ZipChecker />
              </div>
              <ul className="mt-6 space-y-3">
                {[BRAND_PROMISE, "Independent local restoration contractors.", "Clear written plan before any work begins."].map((t) => (
                  <CheckItem key={t}>{t}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="bg-coral-tint">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-lg font-medium text-pine-deep">
            <strong className="font-bold">Our promise:</strong> {BRAND_PROMISE}
          </p>
          <Link href={routes.about()} className="inline-flex shrink-0 items-center gap-1 font-semibold text-lagoon-deep hover:underline">
            How BayouDry works <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Triage />

      <ProblemFinder />

      {/* Service categories */}
      <section className="bg-paper">
        <div className="container-x py-16">
          <SectionHeading
            eyebrow="Services"
            title="What restoration specialists do"
            lede="Burst pipes, bayou flooding, roof leaks, appliance failures — these are the water damage situations independent restoration specialists handle every day across Greater Houston."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat) => {
              const first = servicesByCategory(cat.slug)[0];
              return (
                <PhotoCard
                  key={cat.slug}
                  href={`${routes.services()}#${cat.slug}`}
                  title={cat.name}
                  blurb={cat.blurb}
                  image={first?.photo}
                  alt={cat.name}
                />
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href={routes.services()} className="btn-secondary">
              Browse all restoration services
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency checklist — the attention grabber */}
      <EmergencyChecklist />

      {/* Process */}
      <section className="bg-white">
        <div className="container-x py-16">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to a dry home again"
            align="center"
          />
          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine font-serif text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-pine">{p.title}</h3>
                <p className="mt-2 text-pine/75">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BeforeAfterSection />

      {/* Full-bleed image band */}
      <section aria-label="A dry home again" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center sm:bg-fixed"
          style={{ backgroundImage: "url(/photos/section-restored-living.jpg)" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-pine-deep/70" />
        <div className="container-x relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow-light">The goal</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-balance text-white sm:text-5xl">
              This is what dry looks like.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Standing water out, structure dried to target readings, and the
              room put back together. Tell us what happened — we&apos;ll match
              you with an independent restoration specialist for the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.requestService()} className="btn-primary">
                Request help
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn-ghost-light">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Service area */}
      <section className="bg-paper-deep">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="16 cities across Greater Houston"
              lede="Independent restoration contractors cover Houston and the surrounding communities. Pick your city for local notes on what contractors see most there."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {allCities.slice(0, 12).map((c) => (
                <Chip key={c.slug} href={`/locations/texas/${c.slug}/`}>
                  {c.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </Chip>
              ))}
            </div>
            <Link href={routes.locations()} className="link mt-4 inline-block font-semibold">
              View all service areas
            </Link>
          </div>
          <div className="card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-pine">Not sure you&apos;re covered?</h3>
            <p className="mt-2 text-pine/70">Enter your ZIP — it takes five seconds.</p>
            <div className="mt-4">
              <ZipChecker />
            </div>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="bg-pine">
        <div className="container-x py-16">
          <SectionHeading
            dark
            eyebrow="Local knowledge"
            title="Water damage in Houston has its own realities"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCAL_KNOWLEDGE.map((k) => (
              <div key={k.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-white">{k.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-white">
        <div className="container-x py-16">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Guides" title="Understand before you decide" />
            <Link href={routes.resources()} className="link hidden shrink-0 font-semibold sm:block">
              All guides
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <PhotoCard
                key={g.slug}
                href={`/resources/${g.slug}/`}
                title={g.title}
                blurb={g.answer.slice(0, 140) + "…"}
                image={g.photo}
                alt={g.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="container-x max-w-4xl py-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <div className="mt-8">
            <FaqList faqs={faqs} idPrefix="home-faq" />
          </div>
          <div className="mt-6 text-center">
            <Link href={routes.faq()} className="link font-semibold">
              See all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
