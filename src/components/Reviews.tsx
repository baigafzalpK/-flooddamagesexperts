import Link from "next/link";
import { reviews } from "@/content";
import { site } from "@/content/site";
import { SectionHeading } from "./ui";

/**
 * Renders ONLY real, verified reviews. Otherwise a "Leave a Google review"
 * invitation when configured; otherwise nothing.
 */
export function Reviews() {
  const verified = reviews.filter((r) => r.verified);

  if (verified.length > 0) {
    const avg =
      verified.reduce((sum, r) => sum + r.rating, 0) / verified.length;
    return (
      <section className="bg-paper">
        <div className="container-x py-16">
          <SectionHeading
            eyebrow="Reviews"
            title="What neighbors say"
            lede={`${avg.toFixed(1)} average across ${verified.length} verified reviews.`}
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {verified.slice(0, 6).map((r, i) => (
              <figure key={i} className="card p-6">
                <div className="flex items-center gap-1 text-coral-dark" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s < r.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-3 text-pine/85 leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-pine/60">
                  <span className="font-semibold text-pine">{r.author}</span> · {r.location} · {r.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (site.reviewUrl) {
    return (
      <section className="bg-paper">
        <div className="container-x py-16 text-center">
          <SectionHeading
            eyebrow="Reviews"
            title="Recently worked with a contractor through Flood Damages Experts?"
            lede="Your review helps neighbors choose with confidence."
            align="center"
          />
          <a href={site.reviewUrl} className="btn-secondary mt-6" target="_blank" rel="noopener">
            Leave a Google review
          </a>
        </div>
      </section>
    );
  }

  return null;
}
