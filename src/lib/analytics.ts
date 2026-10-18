/**
 * dataLayer events. GTM loads after interactive, only when configured.
 */
export type AnalyticsEvent =
  | "call_click"
  | "form_start"
  | "form_step"
  | "service_selected"
  | "location_selected"
  | "form_error"
  | "form_submit"
  | "schedule_request"
  | "quote_request"
  | "cta_click";

export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const dl = ((window as unknown as Record<string, unknown>).dataLayer ??= []) as unknown[];
  dl.push({ event, ...data });
}
