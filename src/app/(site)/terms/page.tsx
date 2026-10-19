import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, DISCLOSURE } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const meta = pageMeta({
  title: "Terms of Service",
  description: "The terms for using Flood Damages Experts's website and help-request service.",
  path: routes.terms(),
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  robots: "noindex, follow",
};

export default function TermsPage() {
  return (
    <div className="container-x max-w-3xl py-14">
      <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Terms" }]} />
      <h1 className="mt-2 font-serif text-4xl font-semibold text-pine">Terms of Service</h1>
      <p className="mt-2 text-sm text-pine/55">Last updated: October 8, 2026</p>
      <div className="prose-bw mt-8">
        <h2 className="!mt-0">What this site does</h2>
        <p>{DISCLOSURE}</p>
        <h2>Quotes and work</h2>
        <p>
          Any plan, price or timeline comes from the independent contractor, not
          from {site.shortName}. We don&apos;t guarantee a contractor&apos;s
          availability, pricing, workmanship, licensing or insurance — those
          are between you and the contractor. Always get the scope in writing
          before work begins.
        </p>
        <h2>Your requests</h2>
        <p>
          By submitting a quote request you confirm the details are accurate
          and you agree to be contacted about your project by phone, text or
          email. Consent is not a condition of any purchase.
        </p>
        <h2>Content</h2>
        <p>
          Guides and cost information on this site are educational and describe
          factors, not your price. Only a written plan from a specialist reflects
          your project.
        </p>
        <h2>Changes</h2>
        <p>
          We may update these terms; continued use of the site after changes
          means you accept them.
        </p>
      </div>
    </div>
  );
}
