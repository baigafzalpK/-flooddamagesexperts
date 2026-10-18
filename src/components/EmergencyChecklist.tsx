"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { SectionHeading } from "./ui";

const STEPS = [
  {
    title: "Stop the water at the source",
    body: "Burst pipe or appliance leak? Turn off your main water valve — usually near the street meter or where the line enters the house. Flooding from outside? Skip to step 3.",
  },
  {
    title: "Kill power to wet areas",
    body: "Flip the breaker for any room with standing water. Water and electricity don't mix — don't step into a flooded room until the power to it is off.",
  },
  {
    title: "Move what you can, fast",
    body: "Get rugs, electronics, and valuables off the floor and out of the water. Every minute counts for hardwood, furniture legs, and anything that wicks moisture.",
  },
  {
    title: "Don't use a household vacuum",
    body: "A regular vacuum on standing water is dangerous and will destroy the machine. Mop or towel up what you safely can; extraction equipment handles the rest.",
  },
  {
    title: "Start airflow if it's safe",
    body: "Open windows and run fans in unaffected areas to move air. Don't run central HVAC through a soaked zone — it can spread moisture and mold spores through the ducts.",
  },
  {
    title: "Document everything, then call",
    body: "Photograph every wet area for your insurer before anything is moved. Then call — a local restoration contractor extracts the water, dries the structure, and documents the loss for your claim.",
  },
];

/**
 * Interactive emergency checklist — the homepage attention-grabber.
 * Genuinely useful in a crisis moment; ends with the call CTA.
 */
export function EmergencyChecklist() {
  const [done, setDone] = useState<boolean[]>(STEPS.map(() => false));
  const count = done.filter(Boolean).length;
  const allDone = count === STEPS.length;

  return (
    <section className="bg-pine-deep" aria-label="What to do right now">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow-light">In the middle of it right now?</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-white text-balance sm:text-4xl">
              The first 30 minutes matter. Here&apos;s exactly what to do.
            </h2>
            <p className="mt-4 text-white/80">
              Tap each step as you do it. No account, no form — just the right
              order of actions, from people who do this every day.
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm font-semibold text-white/70">
                <span>{count} of {STEPS.length} done</span>
                <span>{Math.round((count / STEPS.length) * 100)}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-coral transition-all duration-500"
                  style={{ width: `${(count / STEPS.length) * 100}%` }}
                />
              </div>
            </div>
            {allDone ? (
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl">
                <p className="font-serif text-xl font-semibold text-pine">
                  You did everything right. Now let a specialist take it from here.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`tel:${site.phoneE164}`} className="btn-primary">
                    Call {site.phoneDisplay}
                  </a>
                  <Link href={routes.requestService()} className="btn-outline">
                    Request help online
                  </Link>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-sm text-white/60">
                If someone is in danger right now, call 911 first — then come back to this list.
              </p>
            )}
          </div>
          <ol className="space-y-3 lg:col-span-3">
            {STEPS.map((s, i) => {
              const checked = done[i];
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() =>
                      setDone((d) => d.map((v, j) => (j === i ? !v : v)))
                    }
                    aria-pressed={checked}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                      checked
                        ? "border-coral/60 bg-white/10"
                        : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-bold transition-colors ${
                        checked
                          ? "border-coral bg-coral text-white"
                          : "border-white/40 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span>
                      <span className={`font-serif text-lg font-semibold ${checked ? "text-white/60 line-through" : "text-white"}`}>
                        {i + 1}. {s.title}
                      </span>
                      <span className={`mt-1 block text-[15px] ${checked ? "text-white/45" : "text-white/75"}`}>
                        {s.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
