import { Suspense } from "react";
import { LeadForm } from "./LeadForm";

/**
 * Server wrapper — Suspense boundary for useSearchParams() in LeadForm,
 * so static pages prerender cleanly.
 */
export function LeadFormBlock(props: React.ComponentProps<typeof LeadForm>) {
  return (
    <Suspense fallback={<div className="rounded-2xl bg-white p-8 ring-1 ring-line">Loading…</div>}>
      <LeadForm {...props} />
    </Suspense>
  );
}
