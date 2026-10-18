import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Thanks — we'll be in touch",
  robots: "noindex, follow",
};

function ThankYouBody({ timeline }: { timeline: string | null }) {
  const asap = timeline === "asap";
  return (
    <div className="container-x max-w-2xl py-20 text-center">
      <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage">
        <IconCheck className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-serif text-4xl font-semibold text-pine text-balance">
        Thanks — your request is in.
      </h1>
      <p className="mt-4 text-lg text-pine/75">
        {asap
          ? "Since you need help soon, an independent restoration contractor will reach out shortly — usually the same day."
          : "An independent restoration contractor will follow up with a clear written plan."}
      </p>
      <div className="card mx-auto mt-8 max-w-md p-6 text-left">
        <h2 className="font-serif text-lg font-semibold text-pine">While you wait</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-pine/75">
          <li>Keep people and pets away from the affected area until the specialist arrives.</li>
          <li>Think about sheen: flat hides flaws, satin wipes clean, semi-gloss suits trim.</li>
          <li>Clear small items from walls so the walkthrough goes faster.</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={routes.home()} className="btn-secondary">
          Back to home
        </Link>
        <a href={`tel:${site.phoneE164}`} className="btn-primary">
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ timeline?: string }>;
}) {
  const { timeline } = await searchParams;
  return (
    <Suspense fallback={null}>
      <ThankYouBody timeline={timeline ?? null} />
    </Suspense>
  );
}
