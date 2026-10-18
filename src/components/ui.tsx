import type { ReactNode } from "react";
import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>}
      <h2
        className={`mt-2 font-serif text-3xl font-semibold text-balance sm:text-4xl ${
          dark ? "text-white" : "text-pine"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-3 text-lg ${dark ? "text-white/80" : "text-pine/70"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}

export function PhotoCard({
  href,
  title,
  blurb,
  image,
  alt,
}: {
  href: string;
  title: string;
  blurb?: string;
  image?: string;
  alt?: string;
}) {
  return (
    <Link
      href={href}
      className="card group overflow-hidden transition-shadow hover:shadow-lg"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-paper-deep">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={alt ?? title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-pine group-hover:text-lagoon-deep">
          {title}
        </h3>
        {blurb && <p className="mt-2 text-pine/70">{blurb}</p>}
      </div>
    </Link>
  );
}

export function Chip({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-pine ring-1 ring-line transition-colors hover:bg-lagoon-tint hover:text-lagoon-deep"
    >
      {children}
    </Link>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-pine/90">{children}</span>
    </li>
  );
}
