"use client";

import { useRef, useState, useCallback } from "react";
import { SectionHeading } from "./ui";
import { beforeAfters } from "@/content/beforeAfter";

/**
 * Interactive before/after slider. Photos are licensed stock examples —
 * explicitly labeled as illustrations, never presented as our work.
 */
function Slider({
  before,
  after,
  beforeLabel,
  afterLabel,
  caption,
  beforeTab = "Before",
  afterTab = "After",
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  caption: string;
  beforeTab?: string;
  afterTab?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const move = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <figure className="card overflow-hidden">
      <div
        ref={trackRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none"
        onMouseDown={(e) => {
          move(e.clientX);
          const up = () => window.removeEventListener("mouseup", up);
          const mv = (ev: MouseEvent) => move(ev.clientX);
          window.addEventListener("mousemove", mv);
          window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", mv);
            up();
          });
        }}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        role="slider"
        aria-label={caption}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 5));
        }}
      >
        {/* After (base) */}
        <img
          src={after}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        {/* Before (clipped from the right) */}
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />
        {/* Divider handle */}
        <div
          className="absolute inset-y-0 w-1 bg-white/90 shadow"
          style={{ left: `calc(${pos}% - 2px)` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-pine shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-pine/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {beforeTab}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {afterTab}
        </span>
      </div>
      <figcaption className="p-4 text-sm text-pine/65">
        {caption}{" "}
        <span className="italic">Illustrative example photos — not an actual Flood Damages Experts job.</span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="bg-white" aria-label="What recovery looks like">
      <div className="container-x py-16">
        <SectionHeading
          eyebrow="Recovery"
          title="What recovery looks like"
          lede="Drag the sliders to compare. Every water job ends the same way: standing water extracted, the structure dried to target moisture readings, and damaged materials repaired — with a clear written record of what was done."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {beforeAfters.map((pair) => {
            const [beforeTitle, afterTitle] = pair.title.split("→").map((s) => s.trim());
            return (
              <Slider
                key={pair.slug}
                before={pair.beforePhoto}
                after={pair.afterPhoto}
                beforeLabel={`Illustrative example: ${beforeTitle}`}
                afterLabel={`Illustrative example: ${afterTitle}`}
                caption={pair.caption}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
