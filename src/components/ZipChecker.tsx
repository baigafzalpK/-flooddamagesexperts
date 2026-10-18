"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { allCities } from "@/content";
import { track } from "@/lib/analytics";
import { IconCheck, IconSearch } from "./icons";

export function ZipChecker({ dark = false }: { dark?: boolean }) {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<null | { covered: boolean; city?: string }>(null);

  const check = () => {
    if (!/^\d{5}$/.test(zip)) {
      setResult(null);
      return;
    }
    const city = allCities.find((c) => c.zips.includes(zip));
    setResult({ covered: !!city, city: city?.slug });
    track("location_selected", { zip });
  };

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative min-w-0 flex-1">
          <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-pine/40" />
          <input
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              setResult(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), check())}
            inputMode="numeric"
            placeholder="Enter your ZIP"
            aria-label="ZIP code"
            className={`w-full rounded-md py-3 pl-10 pr-4 text-base ring-1 focus:outline-none focus:ring-2 ${
              dark
                ? "bg-white text-pine ring-white/20 focus:ring-coral"
                : "bg-white text-pine ring-line focus:ring-lagoon"
            }`}
          />
        </div>
        <button type="button" onClick={check} className="btn-primary shrink-0 !px-5">
          Check
        </button>
      </div>
      {result && (
        <p className={`mt-3 flex items-center gap-2 text-[15px] font-medium ${dark ? "text-white" : "text-pine"}`} role="status">
          {result.covered ? (
            <>
              <IconCheck className="h-5 w-5 text-sage" />
              <span>
                Covered —{" "}
                <Link
                  href={routes.requestService({ zip })}
                  className="link font-semibold"
                >
                  get a quote for {zip}
                </Link>
              </span>
            </>
          ) : (
            <span>
              Outside our core towns right now —{" "}
              <Link href={routes.contact()} className="link font-semibold">
                ask us anyway
              </Link>
              .
            </span>
          )}
        </p>
      )}
    </div>
  );
}
