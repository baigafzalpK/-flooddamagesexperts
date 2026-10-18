"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { leadSchema, MIN_FILL_MS, type LeadInput } from "@/lib/lead/schema";
import { getAttribution, captureAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { publishedServices, allCities } from "@/content";
import { site, DISCLOSURE } from "@/content/site";
import { IconCheck } from "../icons";

type Step = 1 | 2 | 3;

const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "month", label: "Within the next month" },
  { value: "planning", label: "Just planning ahead" },
] as const;

export function LeadForm({
  defaultService,
  defaultZip,
  compact = false,
}: {
  defaultService?: string;
  defaultZip?: string;
  compact?: boolean;
}) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    service: defaultService ?? searchParams.get("service") ?? "",
    timeline: "",
    zip: defaultZip ?? searchParams.get("zip") ?? "",
    name: "",
    phone: "",
    email: "",
    contactMethod: "call",
    notes: "",
    consent: false,
    website: "", // honeypot
  });

  useEffect(() => {
    captureAttribution();
  }, []);

  const zipCovered = useMemo(() => {
    if (!/^\d{5}$/.test(form.zip)) return null;
    return allCities.some((c) => c.zips.includes(form.zip));
  }, [form.zip]);

  const set = (k: keyof typeof form, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  function validateStep(s: Step): boolean {
    const errs: Record<string, string> = {};
    if (s === 1) {
      if (!form.service) errs.service = "Choose a project type";
      if (!form.timeline) errs.timeline = "Choose a timeline";
    }
    if (s === 2) {
      if (!/^\d{5}$/.test(form.zip)) errs.zip = "Enter a 5-digit ZIP code";
    }
    if (s === 3) {
      if (form.name.trim().length < 2) errs.name = "Enter your name";
      if (!/^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(form.phone))
        errs.phone = "Enter a valid US phone number";
      if (!form.consent) errs.consent = "Please agree so a specialist can contact you";
    }
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
      track("form_error", { step: s, field: first });
      return false;
    }
    return true;
  }

  const next = () => {
    if (!validateStep(step)) return;
    if (step === 1) {
      track("form_start", { service: form.service });
      track("service_selected", { service: form.service });
      // Hot leads skip straight to contact details
      setStep(form.timeline === "asap" ? 3 : 2);
      track("form_step", { step: form.timeline === "asap" ? 3 : 2 });
    } else if (step === 2) {
      setStep(3);
      track("form_step", { step: 3 });
      if (zipCovered) track("location_selected", { zip: form.zip });
    }
  };

  const back = () => setStep((s) => (s === 3 && form.timeline === "asap" ? 1 : ((s - 1) as Step)));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(3)) return;
    setSubmitting(true);
    setServerError(null);

    const attr = getAttribution();
    const payload = {
      ...form,
      startedAt: startedAt.current,
      utm_source: attr.utm_source ?? "",
      utm_medium: attr.utm_medium ?? "",
      utm_campaign: attr.utm_campaign ?? "",
      gclid: attr.gclid ?? "",
      landingPage: attr.landingPage ?? "",
    };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] ?? "form");
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please call us instead.");
      }
      track("form_submit", { service: form.service, zip: form.zip });
      setDone(true);
      window.location.href = `/thank-you/?timeline=${form.timeline}`;
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) return null;

  const fieldErr = (k: string) =>
    errors[k] ? (
      <p role="alert" className="mt-1 text-sm font-medium text-alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8"
      aria-label="Request water damage restoration help"
    >
      {/* Step counter */}
      <div className="mb-6 flex items-center gap-2" aria-hidden>
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex flex-1 items-center gap-2">
            <span
              className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                step >= n ? "bg-coral text-pine-deep" : "bg-paper-deep text-pine/40"
              }`}
            >
              {step > n ? <IconCheck className="h-4 w-4" /> : n}
            </span>
            {n < 3 && <span className={`h-0.5 flex-1 ${step > n ? "bg-coral" : "bg-line"}`} />}
          </div>
        ))}
      </div>
      <p className="mb-6 text-sm font-semibold text-pine/60" aria-live="polite">
        Step {step} of 3 — {step === 1 ? "Your project" : step === 2 ? "Where & when" : "Contact details"}
      </p>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="lf-service" className="field-label">
              What situation do you need help with?
            </label>
            <select
              id="lf-service"
              name="service"
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              className="field"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "lf-service-err" : undefined}
            >
              <option value="">Choose a project type…</option>
              {publishedServices.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            {fieldErr("service")}
          </div>
          <fieldset>
            <legend className="field-label">When do you want it done?</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {TIMELINES.map((t) => (
                <label
                  key={t.value}
                  className={`cursor-pointer rounded-md border px-4 py-3 text-center text-[15px] font-medium transition-colors ${
                    form.timeline === t.value
                      ? "border-coral bg-coral-tint text-pine-deep"
                      : "border-line bg-white text-pine/75 hover:border-pine/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={t.value}
                    checked={form.timeline === t.value}
                    onChange={(e) => set("timeline", e.target.value)}
                    className="sr-only"
                  />
                  {t.label}
                </label>
              ))}
            </div>
            {fieldErr("timeline")}
          </fieldset>
          <button type="button" onClick={next} className="btn-primary w-full">
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="lf-zip" className="field-label">
              Project ZIP code
            </label>
            <input
              id="lf-zip"
              name="zip"
              inputMode="numeric"
              maxLength={5}
              value={form.zip}
              onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))}
              className="field"
              placeholder="32801"
              aria-invalid={!!errors.zip}
            />
            {fieldErr("zip")}
            {zipCovered === true && (
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-sage">
                <IconCheck className="h-4 w-4" /> Good news — specialists cover this ZIP.
              </p>
            )}
            {zipCovered === false && (
              <p className="mt-2 text-sm text-pine/60">
                Outside our core towns — you can still request, and we&apos;ll let you know.
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={back} className="btn-secondary flex-1">
              Back
            </button>
            <button type="button" onClick={next} className="btn-primary flex-1">
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="lf-name" className="field-label">
                Full name
              </label>
              <input
                id="lf-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="field"
                aria-invalid={!!errors.name}
              />
              {fieldErr("name")}
            </div>
            <div>
              <label htmlFor="lf-phone" className="field-label">
                Phone
              </label>
              <input
                id="lf-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className="field"
                placeholder="(407) 555-0100"
                aria-invalid={!!errors.phone}
              />
              {fieldErr("phone")}
            </div>
          </div>
          <div>
            <label htmlFor="lf-email" className="field-label">
              Email <span className="font-normal text-pine/50">(optional)</span>
            </label>
            <input
              id="lf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="field"
              aria-invalid={!!errors.email}
            />
            {fieldErr("email")}
          </div>
          <div>
            <label htmlFor="lf-notes" className="field-label">
              Project details <span className="font-normal text-pine/50">(optional)</span>
            </label>
            <textarea
              id="lf-notes"
              name="notes"
              rows={3}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              className="field"
              placeholder="Rooms, colors, HOA requirements…"
            />
          </div>
          <div>
            <label className="flex cursor-pointer items-start gap-3 rounded-md bg-paper p-4 ring-1 ring-line">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 h-5 w-5 accent-[#c67f1f]"
                aria-invalid={!!errors.consent}
              />
              <span className="text-sm leading-relaxed text-pine/80">
                I agree to be contacted about my project and understand my
                details may be shared with up to three independent specialists.
              </span>
            </label>
            {fieldErr("consent")}
          </div>

          {/* Honeypot — invisible to humans */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-px w-px opacity-0"
            aria-hidden
          />

          {serverError && (
            <p role="alert" className="rounded-md bg-alert-tint p-3 text-sm font-medium text-alert">
              {serverError}
            </p>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={back} className="btn-secondary flex-1" disabled={submitting}>
              Back
            </button>
            <button type="submit" className="btn-primary flex-1" disabled={submitting}>
              {submitting ? "Sending…" : "Get my free quote"}
            </button>
          </div>
          <p className="text-center text-sm text-pine/60">
            Prefer to talk?{" "}
            <a href={`tel:${site.phoneE164}`} className="link font-semibold">
              Call {site.phoneDisplay}
            </a>
          </p>
        </div>
      )}

      {!compact && (
        <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-pine/50">
          {DISCLOSURE}
        </p>
      )}
    </form>
  );
}
