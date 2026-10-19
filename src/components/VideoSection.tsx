"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { SectionHeading } from "./ui";

const VIDEOS = [
  {
    src: "/videos/rain-on-window.mp4",
    title: "When the rain won't stop",
    body: "Storms and heavy rain are how most water damage starts. If water found its way in, what you do next decides how bad it gets.",
    credit: "Mixkit — free commercial license",
  },
  {
    src: "/videos/flowing-river.mp4",
    title: "Moving water, rising risk",
    body: "Floodwater keeps moving long after the rain stops. Extraction and structural drying are what stop the damage from spreading.",
    credit: "Coverr — free commercial license",
  },
];

/**
 * Licensed stock footage (commercial use) of rain and flowing water.
 * Muted autoplay loops; each card has its own play/pause control.
 */
export function VideoSection() {
  return (
    <section className="bg-paper" aria-label="Water up close">
      <div className="container-x py-16">
        <SectionHeading
          eyebrow="Water, up close"
          title="This is how water damage starts"
          lede="Most jobs we see begin with weather like this — or a pipe that picked the worst possible moment. Watch what water does, then see how specialists undo it."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {VIDEOS.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={routes.videos()} className="btn-secondary">
            Watch all 7 videos — tips & explainers
          </Link>
        </div>
        <p className="mt-6 text-center text-sm text-pine/55">
          Stock footage for illustration — not a Flood Damages Experts job. Footage: Mixkit and
          Coverr, both under free commercial licenses.
        </p>
      </div>
    </section>
  );
}

function VideoCard({
  src,
  title,
  body,
}: {
  src: string;
  title: string;
  body: string;
  credit: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="card overflow-hidden">
      <div className="relative aspect-video bg-pine">
        <video
          ref={ref}
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={title}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause: ${title}` : `Play: ${title}`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-pine/80 text-white backdrop-blur transition hover:bg-pine"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          )}
        </button>
      </div>
      <figcaption className="p-5">
        <h3 className="font-serif text-lg font-semibold text-pine">{title}</h3>
        <p className="mt-1 text-[15px] text-pine/70">{body}</p>
      </figcaption>
    </figure>
  );
}
