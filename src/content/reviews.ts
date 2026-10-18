import type { Review } from "./types";

/**
 * NEVER fabricate reviews or testimonials. It is illegal under the FTC's
 * 2024 rule on fake reviews (civil penalties) and against Google policy.
 *
 * Real reviews can be added here once collected. The review UI renders a
 * "Leave a Google review" invitation when `site.reviewUrl` is configured,
 * and renders nothing while this list is empty.
 */
export const reviews: Review[] = [];
