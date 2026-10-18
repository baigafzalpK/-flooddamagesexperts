import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { generalFaqs } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "How BayouDry Restoration works, what to expect from a contractor, quotes, insurance and drying timelines — answers to common water damage questions in Houston.",
  path: routes.faq(),
  ogImageKey: "faq",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.faq(),
          type: "WebPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "FAQ", path: routes.faq() },
          ],
          faqs: generalFaqs.map((f) => ({ q: f.q, a: f.a })),
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "FAQ" }]} />
          <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            How BayouDry works, what to expect from a contractor, and the
            practical stuff — quotes, drying time, insurance claims.
          </p>
        </div>
      </section>

      <div className="container-x max-w-4xl py-14">
        <h2 className="sr-only">All questions</h2>
        <FaqList faqs={generalFaqs} idPrefix="faq-page" />
        <p className="mt-8 text-center text-pine/70">
          Still curious?{" "}
          <Link href={routes.contact()} className="link font-semibold">
            Contact us
          </Link>
          .
        </p>
      </div>

      <CtaBand />
    </>
  );
}
