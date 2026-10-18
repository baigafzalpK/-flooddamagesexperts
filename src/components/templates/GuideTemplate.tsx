import Link from "next/link";
import type { Article } from "@/content/types";
import { getService, getArticle, publishedArticles } from "@/content";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { createLinker } from "@/lib/linker";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

export function GuideTemplate({ article }: { article: Article }) {
  const linker = createLinker(routes.guide(article.slug));
  const services = article.services
    .map((slug) => getService(slug))
    .filter((s) => s && s.status === "PUBLISHED");
  const related = article.relatedArticles
    .map((slug) => getArticle(slug))
    .filter((a) => a && a.status === "PUBLISHED");
  const primaryService = services[0];

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.guide(article.slug),
          type: "ItemPage",
          name: article.seoTitle,
          description: article.metaDescription,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Guides", path: routes.resources() },
            { name: article.title, path: routes.guide(article.slug) },
          ],
          faqs: article.faqs,
          article,
        })}
      />

      <div className="bg-paper">
        <Breadcrumbs
          items={[
            { name: "Home", href: routes.home() },
            { name: "Guides", href: routes.resources() },
            { name: article.title },
          ]}
        />
      </div>

      <div className="container-x grid gap-12 py-10 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <p className="eyebrow">{article.category}</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-pine text-balance">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-pine/55">
            Updated {article.updated}
            {article.reviewedBy ? ` · Reviewed by ${article.reviewedBy}` : ""}
          </p>

          <div className="answer-box mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-coral-dark">Short answer</p>
            <p className="mt-2">{article.answer}</p>
          </div>

          {article.photo && (
            <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-paper-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.photo}
                alt={article.title}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="prose-bw mt-8">
            {article.sections.map((sec) => (
              <section key={sec.heading} aria-label={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: linker.linkify(p) }} />
                ))}
                {sec.list && (
                  <ul>
                    {sec.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {article.faqs && article.faqs.length > 0 && (
            <section aria-label="Guide FAQs" className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-pine">Common questions</h2>
              <div className="mt-4">
                <FaqList faqs={article.faqs} idPrefix={`guide-${article.slug}`} />
              </div>
            </section>
          )}

          {article.editorialNote && (
            <p className="mt-8 border-l-4 border-line pl-4 text-sm italic text-pine/60">
              {article.editorialNote}
            </p>
          )}
        </article>

        <aside className="space-y-8">
          <div className="card p-6 lg:sticky lg:top-28">
            <h2 className="font-serif text-xl font-semibold text-pine">
              {primaryService ? `Get ${primaryService.name.toLowerCase()} quoted` : "Get a free quote"}
            </h2>
            <p className="mt-2 text-[15px] text-pine/70">
              An independent licensed restoration contractor follows up with a clear written plan.
            </p>
            <Link
              href={routes.requestService({ service: primaryService?.slug })}
              className="btn-primary mt-4 w-full"
            >
              Start your quote
            </Link>
            <a href={`tel:${site.phoneE164}`} className="btn-secondary mt-3 w-full">
              Call {site.phoneDisplay}
            </a>
          </div>

          {services.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-pine">Related services</h2>
              <ul className="mt-3 space-y-2">
                {services.map((s) =>
                  s ? (
                    <li key={s.slug}>
                      <Link href={routes.service(s.slug)} className="link">
                        {s.name}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-pine">Related guides</h2>
              <div className="mt-3 space-y-3">
                {related.map((a) =>
                  a ? (
                    <Link key={a.slug} href={routes.guide(a.slug)} className="card block p-4 hover:shadow-md">
                      <p className="text-xs font-bold uppercase tracking-wider text-lagoon-deep">{a.category}</p>
                      <p className="mt-1 font-semibold text-pine">{a.title}</p>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
