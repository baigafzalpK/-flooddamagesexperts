import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CheckItem } from "@/components/ui";

const meta = pageMeta({
  title: "Request Water Damage Restoration Help | Flood Damages Experts",
  description: "Request water damage restoration help in Greater Houston. Two minutes — an independent restoration contractor follows up.",
  path: "/request-service/",
  noindex: true,
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  robots: "noindex, follow",
};

export default function RequestServicePage() {
  return (
    <div className="bg-paper">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Request a quote" }]} />
          <h1 className="mt-2 font-serif text-4xl font-semibold text-pine text-balance">
            Request water damage help
          </h1>
          <p className="mt-4 text-lg text-pine/75">
            Two minutes now saves days of calling around. Here&apos;s what
            happens next:
          </p>
          <ul className="mt-6 space-y-4">
            <CheckItem>An independent restoration contractor — not a call center — reviews your request.</CheckItem>
            <CheckItem>You get a clear written scope: extraction, drying plan, repairs, timeline.</CheckItem>
            <CheckItem>No obligation. Your details go to at most three specialists.</CheckItem>
          </ul>
          <p className="mt-8 text-pine/70">
            Rather talk it through?{" "}
            <a href={`tel:${site.phoneE164}`} className="link font-semibold">
              Call {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="lg:col-span-3">
                      <LeadFormBlock />
        </div>
      </div>
    </div>
  );
}
