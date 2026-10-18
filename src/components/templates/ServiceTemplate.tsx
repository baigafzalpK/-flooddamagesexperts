import Link from "next/link";
import type { Service } from "@/content/types";
import { getService, publishedServices, publishedArticles, allCities } from "@/content";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { createLinker } from "@/lib/linker";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { SectionHeading, PhotoCard, Chip, CheckItem } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { IconCheck } from "@/components/icons";

export function ServiceTemplate({ service }: { service: Service }) {
  const linker = createLinker(routes.service(service.slug));
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => !!s && s.status === "PUBLISHED");
  const guides = publishedArticles
    .filter((a) => a.services.includes(service.slug))
    .slice(0, 3);
  const towns = allCities.slice(0, 10);

  const nav = [
    { id: "overview", label: "Overview" },
    { id: "signs", label: "Signs you need it" },
    { id: "process", label: "Process" },
    { id: "cost", label: "Cost factors" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.service(service.slug),
          type: "ItemPage",
          name: service.seoTitle,
          description: service.metaDescription,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Services", path: routes.services() },
            { name: service.name, path: routes.service(service.slug) },
          ],
          aboutIds: [`${SITE_URL}${routes.service(service.slug)}#service`],
          faqs: service.faqs.map((f) => ({ q: f.q, a: f.a })),
          service,
        })}
      />

      {/* Hero */}
      <section className="bg-pine">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-5 lg:py-20">
          <div className="lg:col-span-3">
            <Breadcrumbs
              items={[
                { name: "Home", href: routes.home() },
                { name: "Services", href: routes.services() },
                { name: service.name },
              ]}
            />
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              {service.h1}
            </h1>
            <div className="answer-box mt-6 !border-coral !bg-white/10 !text-white">
              <p>{service.answer}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneE164}`} className="btn-primary">
                Call {site.phoneDisplay}
              </a>
              <Link href={routes.requestService({ service: service.slug })} className="btn-outline-light">
                Get a free quote
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/80">
              {["Clear written scope", "Extraction & structural drying", "Independent local contractors"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-coral" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <LeadFormBlock defaultService={service.slug} compact />
            </div>
          </div>
        </div>
      </section>

      {/* On-page nav */}
      <nav aria-label="On this page" className="sticky top-[68px] z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="container-x flex gap-1 overflow-x-auto py-2">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-pine/75 hover:bg-paper-deep hover:text-pine"
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-3">
        <article className="lg:col-span-2">
          {/* Intro */}
          <section id="overview" className="prose-bw scroll-mt-32">
            {service.intro.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: linker.linkify(p) }} />
            ))}
          </section>

          {/* At a glance */}
          <section aria-label={`${service.name} at a glance`} className="card mt-10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-pine">{service.name} at a glance</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Best for</dt>
                <dd className="mt-1 text-pine/85">{service.signs[0]?.title ?? "Homes with active or recent water intrusion"}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Includes</dt>
                <dd className="mt-1 text-pine/85">Inspection, extraction, drying, repairs</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Service area</dt>
                <dd className="mt-1 text-pine/85">Houston & 15 more Greater Houston cities</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-pine/50">Quote</dt>
                <dd className="mt-1 text-pine/85">Free, written, no obligation</dd>
              </div>
            </dl>
          </section>

          {/* Signs */}
          <section id="signs" className="mt-12 scroll-mt-32">
            <SectionHeading eyebrow="Signs" title={`Signs you need ${service.name.toLowerCase()}`} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.signs.map((s) => (
                <div key={s.title} className="card p-5">
                  <h3 className="font-semibold text-pine">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-pine/75">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="process" className="mt-12 scroll-mt-32">
            <SectionHeading eyebrow="Process" title="What the specialist does, step by step" />
            <ol className="mt-6 space-y-4">
              {service.process.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine font-serif font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-pine">{p.title}</h3>
                    <p className="mt-1 text-pine/75">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Cost */}
          <section id="cost" className="mt-12 scroll-mt-32">
            <SectionHeading eyebrow="Cost" title="What affects the price" lede="Every situation is different — here's what a specialist weighs when planning." />
            <ul className="mt-6 space-y-3">
              {service.costFactors.map((c) => (
                <CheckItem key={c}>{c}</CheckItem>
              ))}
            </ul>
            <p className="mt-4 text-sm text-pine/60">
              The only way to know your price is a written quote — they&apos;re free.
            </p>
          </section>

          {/* DIY */}
          {service.diy && (
            <section aria-label="DIY guidance" className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sage/10 p-6 ring-1 ring-sage/25">
                <h3 className="font-serif text-lg font-semibold text-pine">Safe to DIY</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-pine/80">
                  {service.diy.safe.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-alert-tint p-6 ring-1 ring-alert/20">
                <h3 className="font-serif text-lg font-semibold text-pine">When to call a specialist immediately</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-pine/80">
                  {service.diy.stop.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section id="faq" className="mt-12 scroll-mt-32">
            <SectionHeading eyebrow="FAQ" title={`${service.name} questions`} />
            <div className="mt-6">
              <FaqList faqs={service.faqs} idPrefix={`svc-${service.slug}`} />
            </div>
          </section>

          {/* Areas */}
          <section aria-label="Service areas" className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-pine">
              {service.name} across Greater Houston
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {towns.map((c) => (
                <Chip key={c.slug} href={`/locations/texas/${c.slug}/`}>
                  {c.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </Chip>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-pine">Get a free quote</h2>
            <p className="mt-2 text-[15px] text-pine/70">
              Two minutes. An independent restoration contractor follows up with a clear written plan.
            </p>
            <Link href={routes.requestService({ service: service.slug })} className="btn-primary mt-4 w-full">
              Start your quote
            </Link>
            <a href={`tel:${site.phoneE164}`} className="btn-secondary mt-3 w-full">
              Call {site.phoneDisplay}
            </a>
          </div>
          {guides.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-pine">Related guides</h2>
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

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-paper">
          <div className="container-x py-14">
            <SectionHeading eyebrow="Keep exploring" title="Related cleanup services" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.slice(0, 4).map((r) => (
                <PhotoCard
                  key={r.slug}
                  href={routes.service(r.slug)}
                  title={r.name}
                  blurb={r.answer.slice(0, 110) + "…"}
                  image={r.photo}
                  alt={r.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
        lede="Tell us what you're dealing with. An independent restoration contractor will follow up with a clear written plan."
      />
    </>
  );
}
