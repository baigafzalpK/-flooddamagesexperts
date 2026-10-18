import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const meta = pageMeta({
  title: "Accessibility Statement",
  description: "Our commitment to an accessible website for everyone, following WCAG 2.2 AA guidelines.",
  path: routes.accessibility(),
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  robots: "noindex, follow",
};

export default function AccessibilityPage() {
  return (
    <div className="container-x max-w-3xl py-14">
      <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Accessibility" }]} />
      <h1 className="mt-2 font-serif text-4xl font-semibold text-pine">Accessibility Statement</h1>
      <div className="prose-bw mt-8">
        <p>
          {site.name} aims to make this website usable by everyone, following
          the Web Content Accessibility Guidelines (WCAG) 2.2 AA: keyboard
          navigation, visible focus, sufficient color contrast, labeled form
          fields with error announcements, and a logical heading order.
        </p>
        <p>
          If you have trouble using any part of this site, call us at{" "}
          <a className="link" href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>{" "}
          and we&apos;ll help another way.
        </p>
      </div>
    </div>
  );
}
