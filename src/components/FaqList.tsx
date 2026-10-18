"use client";

import { useState } from "react";
import { IconChevronDown } from "./icons";
import type { Faq } from "@/content/types";

/**
 * Visible FAQ list — FAQs render in HTML even when collapsed (AEO).
 */
export function FaqList({ faqs, idPrefix = "faq" }: { faqs: Faq[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${idPrefix}-btn-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-pine hover:text-lagoon-deep"
              >
                <span className="min-w-0">{f.q}</span>
                <IconChevronDown
                  className={`h-5 w-5 shrink-0 text-pine/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="px-5 pb-5 text-pine/80 leading-relaxed">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
