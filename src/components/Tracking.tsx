"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * GTM loader — after interactive, only when NEXT_PUBLIC_GTM_ID is set.
 */
export function Tracking() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    captureAttribution();
    if (!gtmId) return;
    const t = setTimeout(() => {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(s);
      ((window as unknown as Record<string, unknown[]>).dataLayer ??= []).push({
        "gtm.start": Date.now(),
        event: "gtm.js",
      });
    }, 2500);
    return () => clearTimeout(t);
  }, [gtmId]);

  return null;
}
