"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { SectionHeading } from "./ui";

type Situation = "standing" | "leak" | "damp" | "sewage" | "mold";

const SITUATIONS: { value: Situation; label: string; detail: string }[] = [
  { value: "standing", label: "Standing water", detail: "Water pooled on floors" },
  { value: "leak", label: "Active leak", detail: "Water still flowing or dripping" },
  { value: "damp", label: "Damp spot or stain", detail: "No standing water, but wet" },
  { value: "sewage", label: "Sewage backup", detail: "Toilets, drains, or floor drains" },
  { value: "mold", label: "Mold growth", detail: "Visible or musty smell" },
];

const SERVICE_FOR: Record<Situation, string> = {
  standing: "emergency-water-extraction",
  leak: "burst-pipe-water-damage",
  damp: "moisture-detection-inspection",
  sewage: "sewage-backup-cleanup",
  mold: "mold-remediation",
};

const SERVICE_LABEL: Record<Situation, string> = {
  standing: "Emergency water extraction",
  leak: "Burst pipe water damage",
  damp: "Moisture detection & inspection",
  sewage: "Sewage backup cleanup",
  mold: "Mold remediation",
};

type Urgency = "now" | "today" | "soon";

const URGENCY_STYLE: Record<Urgency, { label: string; cls: string; bar: string }> = {
  now: {
    label: "Act right now",
    cls: "bg-red-100 text-red-800 ring-red-200",
    bar: "bg-red-500",
  },
  today: {
    label: "Handle it today",
    cls: "bg-orange-100 text-orange-800 ring-orange-200",
    bar: "bg-orange-500",
  },
  soon: {
    label: "Schedule it soon",
    cls: "bg-sky-100 text-sky-800 ring-sky-200",
    bar: "bg-sky-500",
  },
};

function planFor(situation: Situation, incoming: string, electrical: string, duration: string): string[] {
  const steps: string[] = [];
  if (electrical === "yes") {
    steps.push(
      "Safety first: don't step into the water. Cut power to the wet areas at the breaker from a dry spot — if you can't do that safely, stay out and call an electrician."
    );
  }
  if (situation === "sewage") {
    steps.push(
      "Keep people and pets away from the affected area. Sewage is contaminated water — don't try to clean it yourself with household supplies."
    );
  } else if (incoming === "yes" || situation === "leak") {
    steps.push(
      "Stop the source: shut off your main water valve (usually near the street meter or where the line enters the house)."
    );
  }
  if (situation === "standing" || situation === "leak") {
    steps.push(
      "Move rugs, electronics, and valuables out of the water. Don't use a household vacuum on standing water."
    );
  }
  if (duration === "long") {
    steps.push(
      "Because it's been wet for days, hidden moisture and mold are likely — ask the contractor to map moisture with meters, not just look at surfaces."
    );
  }
  steps.push(
    "Take photos and short videos of everything before anything is moved — your insurer will want them."
  );
  return steps.slice(0, 4);
}

function urgencyFor(situation: Situation, incoming: string, electrical: string, duration: string): Urgency {
  if (situation === "sewage" || electrical === "yes") return "now";
  if (situation === "standing" || incoming === "yes") return "now";
  if (situation === "leak" || duration === "long") return "today";
  return "soon";
}

const STEPS = ["situation", "incoming", "electrical", "duration"] as const;

export function Triage() {
  const [step, setStep] = useState(0);
  const [situation, setSituation] = useState<Situation | null>(null);
  const [incoming, setIncoming] = useState<string | null>(null);
  const [electrical, setElectrical] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const done = step >= STEPS.length;
  const urgency: Urgency | null = done
    ? urgencyFor(situation!, incoming!, electrical!, duration!)
    : null;
  const uStyle = urgency ? URGENCY_STYLE[urgency] : null;

  function reset() {
    setStep(0);
    setSituation(null);
    setIncoming(null);
    setElectrical(null);
    setDuration(null);
  }

  function optionCls(selected: boolean) {
    return `w-full rounded-2xl p-4 text-left ring-1 transition-all sm:p-5 ${
      selected
        ? "bg-pine text-white ring-pine shadow-lg"
        : "bg-white text-pine ring-line hover:ring-lagoon hover:bg-lagoon-tint"
    }`;
  }

  return (
    <section className="relative overflow-hidden bg-pine-deep" aria-label="Water damage triage">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/photos/water-stain-spot.jpg)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-pine-deep/60 via-pine-deep/80 to-pine-deep" />
      <div className="container-x relative py-16 sm:py-20">
        <SectionHeading
          eyebrow="60-second triage"
          title="How urgent is your water damage?"
          lede="Answer four quick questions and get a plain-English action plan — what to do in the next hour, and which specialist to call."
          dark
        />

        <div className="mx-auto mt-8 max-w-3xl">
          {!done ? (
            <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between text-sm font-semibold text-pine/60">
                <span>Question {step + 1} of 4</span>
                <span>{Math.round(((step + 1) / 4) * 100)}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-coral transition-all duration-300"
                  style={{ width: `${((step + 1) / 4) * 100}%` }}
                />
              </div>

              <div className="mt-6">
                {step === 0 && (
                  <>
                    <h3 className="font-serif text-2xl font-semibold text-pine">What&apos;s happening?</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {SITUATIONS.map((s) => (
                        <button
                          key={s.value}
                          onClick={() => {
                            setSituation(s.value);
                            setStep(1);
                          }}
                          className={optionCls(situation === s.value)}
                        >
                          <span className="block font-semibold">{s.label}</span>
                          <span className={`mt-1 block text-sm ${situation === s.value ? "text-white/75" : "text-pine/60"}`}>
                            {s.detail}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h3 className="font-serif text-2xl font-semibold text-pine">Is water still coming in?</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Yes", "No", "Not sure"].map((v) => (
                        <button
                          key={v}
                          onClick={() => {
                            setIncoming(v.toLowerCase().replace(" ", ""));
                            setStep(2);
                          }}
                          className={`${optionCls(incoming === v.toLowerCase().replace(" ", ""))} text-center font-semibold`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="font-serif text-2xl font-semibold text-pine">
                      Is water near anything electrical?
                    </h3>
                    <p className="mt-1 text-pine/60">Outlets, the breaker panel, or plugged-in appliances.</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { v: "yes", label: "Yes — water near electrical" },
                        { v: "no", label: "No electrical risk" },
                      ].map((o) => (
                        <button
                          key={o.v}
                          onClick={() => {
                            setElectrical(o.v);
                            setStep(3);
                          }}
                          className={`${optionCls(electrical === o.v)} text-center font-semibold`}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 className="font-serif text-2xl font-semibold text-pine">How long has it been wet?</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { v: "short", label: "Less than 24 hours" },
                        { v: "medium", label: "1–3 days" },
                        { v: "long", label: "More than 3 days" },
                        { v: "unknown", label: "Not sure" },
                      ].map((o) => (
                        <button
                          key={o.v}
                          onClick={() => {
                            setDuration(o.v);
                            setStep(4);
                          }}
                          className={`${optionCls(duration === o.v)} text-center font-semibold`}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-sm font-semibold text-pine/60 hover:text-pine hover:underline"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-8" role="status">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide ring-1 ${uStyle!.cls}`}>
                  {uStyle!.label}
                </span>
                <span className="text-sm text-pine/60">Your action plan</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                <div className={`h-full rounded-full ${uStyle!.bar}`} style={{ width: "100%" }} />
              </div>
              <ol className="mt-6 space-y-4">
                {planFor(situation!, incoming!, electrical!, duration!).map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-pine/85">{s}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl bg-lagoon-tint p-4">
                <p className="text-sm text-pine/70">
                  This sounds like a job for{" "}
                  <Link
                    href={`/water-damage-services/${SERVICE_FOR[situation!]}/`}
                    className="font-semibold text-lagoon-deep hover:underline"
                  >
                    {SERVICE_LABEL[situation!]}
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${site.phoneE164}`} className="btn-primary">
                  Call {site.phoneDisplay}
                </a>
                <Link
                  href={routes.requestService({ service: SERVICE_FOR[situation!] })}
                  className="btn-secondary"
                >
                  Request help now
                </Link>
                <button
                  onClick={reset}
                  className="text-sm font-semibold text-pine/60 hover:text-pine hover:underline"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
