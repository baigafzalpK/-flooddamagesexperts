import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingPages, getService } from "@/content";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { FaqList } from "@/components/FaqList";
import { CheckItem } from "@/components/ui";
import { IconPhone } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((lp) => ({ slug: lp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lp = landingPages.find((l) => l.slug === slug);
  if (!lp) return {};
  const service = getService(lp.serviceSlug);
  return {
    title: lp.headline,
    description: lp.subhead,
    robots: "noindex, follow",
    alternates: {
      canonical: service ? routes.service(service.slug) : routes.home(),
    },
  };
}

function pickHeadline(lp: (typeof landingPages)[number], kw: string | null): string {
  if (kw && lp.kwWhitelist.includes(kw)) return kw;
  return lp.headline;
}

export default async function LandingPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ kw?: string }>;
}) {
  const { slug } = await params;
  const { kw } = await searchParams;
  const lp = landingPages.find((l) => l.slug === slug);
  if (!lp) notFound();
  const service = getService(lp.serviceSlug);

  const headline = pickHeadline(lp, kw ?? null);
  const trackingPhone =
    process.env.NEXT_PUBLIC_PPC_TRACKING_PHONE || site.phoneDisplay;

  return (
    <div className="container-x grid gap-10 py-10 lg:grid-cols-2 lg:py-16">
      <div>
        <p className="eyebrow">Dallas–Fort Worth, Texas</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-pine text-balance">
          {headline}
        </h1>
        <p className="mt-4 text-lg text-pine/75">{lp.subhead}</p>
        <ul className="mt-6 space-y-3">
          {lp.bullets.map((b) => (
            <CheckItem key={b}>{b}</CheckItem>
          ))}
        </ul>
        <a
          href={`tel:${site.phoneE164}`}
          className="btn-secondary mt-8 inline-flex"
        >
          <IconPhone className="h-5 w-5" /> Call {trackingPhone}
        </a>
        <div className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-pine">Questions, answered</h2>
          <div className="mt-4">
            <FaqList faqs={lp.faqs} idPrefix={`lp-${slug}`} />
          </div>
        </div>
      </div>
      <div>
        <div id="lead-form" className="lg:sticky lg:top-8">
                      <LeadFormBlock defaultService={service?.slug} compact />
        </div>
      </div>
    </div>
  );
}
