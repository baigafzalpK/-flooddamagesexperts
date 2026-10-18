import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "Water Damage Videos — Tips & Explainers",
  description:
    "Short videos from BayouDry Restoration: what to do in the first hour after water damage, how pros extract and dry, hidden moisture, and mold — plain-English explainers.",
  path: routes.videos(),
  ogImageKey: "resources",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

const VIDEOS = [
  {
    src: "/videos/bayoudry-brand-video-30s.mp4",
    title: "BayouDry Restoration — what we do",
    body: "Water damage is stressful enough. Tell us what happened and we'll connect you with an independent local specialist for the next step.",
    duration: "0:30",
  },
  {
    src: "/videos/bayoudry-first-hour-action-plan-20s.mp4",
    title: "Water inside your home? Do these 3 things now",
    body: "Shut off the water, protect your valuables, and take photos for your insurer — before anything else.",
    duration: "0:20",
  },
  {
    src: "/videos/bayoudry-burst-pipe-shutoff-20s.mp4",
    title: "Burst pipe? Shut off the main first",
    body: "Every minute of flow is more damage. Know where your main shutoff valve is before you need it.",
    duration: "0:20",
  },
  {
    src: "/videos/bayoudry-water-extraction-20s.mp4",
    title: "How pros remove standing water",
    body: "Extraction comes before drying — specialized equipment pulls water out of floors that mops can't reach.",
    duration: "0:20",
  },
  {
    src: "/videos/bayoudry-structural-drying-20s.mp4",
    title: "Drying is the step that prevents the next problem",
    body: "Air movers and dehumidifiers run until moisture readings hit their targets — that's what stops mold before it starts.",
    duration: "0:20",
  },
  {
    src: "/videos/bayoudry-hidden-moisture-20s.mp4",
    title: "Walls can look dry and still be wet",
    body: "Pros verify with moisture meters, not just their eyes — hidden moisture is where the next problem hides.",
    duration: "0:20",
  },
  {
    src: "/videos/bayoudry-mold-after-water-damage-20s.mp4",
    title: "Wet for 48 hours? Mold can start",
    body: "Dry it fast, or remediate it right. If it's been wet for days, ask about moisture mapping — not just surfaces.",
    duration: "0:20",
  },
];

export default function VideosPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.videos(),
          type: "CollectionPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Videos", path: routes.videos() },
          ],
        })}
      />
      <section className="bg-pine">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Videos" }]} />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-balance text-white sm:text-5xl">
            Water damage, explained in 20 seconds
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            What to do when it happens, how the pros fix it, and what to watch
            for — seven short videos, no jargon.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-14">
          <div className="grid gap-8 md:grid-cols-2">
            {VIDEOS.map((v, i) => (
              <figure key={v.src} className={`card overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className="relative aspect-video bg-pine-deep">
                  <video
                    src={v.src}
                    className="h-full w-full"
                    controls
                    preload="metadata"
                    playsInline
                    aria-label={v.title}
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-pine-deep/80 px-2.5 py-1 text-xs font-bold text-white">
                    {v.duration}
                  </span>
                </div>
                <figcaption className="p-5 sm:p-6">
                  <h2 className="font-serif text-xl font-semibold text-pine">{v.title}</h2>
                  <p className="mt-2 text-pine/70">{v.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-pine/55">
            Footage is AI-generated for illustration or licensed stock — not footage
            of actual BayouDry jobs. BayouDry connects you with independent
            restoration specialists; we don&apos;t perform the work ourselves.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={routes.requestService()} className="btn-primary">
              Request help
            </Link>
            <a href={`tel:${site.phoneE164}`} className="btn-secondary">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
