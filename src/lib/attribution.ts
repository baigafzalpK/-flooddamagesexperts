/**
 * UTM/gclid first-party capture — 30-day store, channel derivation.
 * Client-side: read once per session, attach to lead payload.
 */
const STORE_KEY = "bw_attribution";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landingPage?: string;
  channel?: string;
  capturedAt: number;
}

function deriveChannel(a: Attribution): string {
  if (a.gclid || a.gbraid || a.wbraid) return "paid_search";
  const s = (a.utm_source ?? "").toLowerCase();
  if (s.includes("google")) return a.utm_medium === "cpc" ? "paid_search" : "organic_search";
  if (s.includes("facebook") || s.includes("instagram")) return "paid_social";
  if (s) return "referral";
  return "direct";
}

export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return { capturedAt: Date.now() };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const prev = JSON.parse(raw) as Attribution;
      if (Date.now() - prev.capturedAt < TTL_MS) return prev;
    }
  } catch {
    /* ignore */
  }
  const q = new URLSearchParams(window.location.search);
  const pick = (k: string) => q.get(k)?.slice(0, 100) || undefined;
  const a: Attribution = {
    utm_source: pick("utm_source"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    gclid: pick("gclid"),
    gbraid: pick("gbraid"),
    wbraid: pick("wbraid"),
    landingPage: window.location.pathname.slice(0, 200),
    capturedAt: Date.now(),
  };
  a.channel = deriveChannel(a);
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(a));
  } catch {
    /* ignore */
  }
  return a;
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return { captured_at: 0 } as unknown as Attribution;
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw) as Attribution;
  } catch {
    /* ignore */
  }
  return captureAttribution();
}
