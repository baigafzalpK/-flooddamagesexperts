"use client";

import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { IconPhone } from "./icons";

export function PhoneLink({
  className = "",
  label,
  event = "call_click",
}: {
  className?: string;
  label?: string;
  event?: "call_click";
}) {
  return (
    <a
      href={`tel:${site.phoneE164}`}
      className={className}
      onClick={() => track(event, { destination: "tel" })}
    >
      <IconPhone className="h-5 w-5" />
      <span>{label ?? site.phoneDisplay}</span>
    </a>
  );
}

export function formatPhoneNote(): string | null {
  // The placeholder number is fictional; surfaced in dev only.
  if (!process.env.NEXT_PUBLIC_BUSINESS_PHONE) return null;
  return null;
}
