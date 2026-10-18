"use client";

import Link from "next/link";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function CtaBand({
  title = "Ready for a fresh coat?",
  lede = "Tell us what you're dealing with. An independent restoration contractor will follow up with a clear written plan.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-pine">
      <div className="container-x flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-white text-balance">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={routes.requestService()}
            className="btn-primary"
            onClick={() => track("cta_click", { location: "cta-band" })}
          >
            Request help now
          </Link>
          <a href={`tel:${site.phoneE164}`} className="btn-outline-light">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
