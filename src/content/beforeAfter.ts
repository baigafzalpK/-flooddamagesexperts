import type { BeforeAfter } from "./types";

/**
 * Before/after photo pairs for BayouDry Restoration.
 *
 * These are ILLUSTRATIVE EXAMPLES, not BayouDry jobs — see the `isExample`
 * flag and the captions. The two photos in a pair show representative
 * stages (they are not the same room). Never present stock or example
 * pairs as "our work". Add real project photos only with the homeowner's
 * written consent.
 */
export const beforeAfters: BeforeAfter[] = [
  {
    slug: "standing-water-extraction-example",
    title: "Standing Water → Extracted and Drying",
    serviceSlug: "flood-damage-cleanup",
    beforePhoto: "/photos/example-flooded-living-room-before.jpg",
    afterPhoto: "/photos/example-flooded-living-room-after.jpg",
    caption:
      "Illustrative example: standing water inside a building (left), and a floor after the standing water has been extracted while drying is still underway (right). Stock photos — not a BayouDry job.",
    isExample: true,
  },
  {
    slug: "ceiling-water-damage-severity",
    title: "Why Fast Action Matters: Severe vs. Typical Damage",
    serviceSlug: "drywall-ceiling-restoration",
    beforePhoto: "/photos/example-water-stained-ceiling-before.jpg",
    afterPhoto: "/photos/example-water-stained-ceiling-after.jpg",
    caption:
      "Illustrative examples: a typical early brown water stain (left) versus severe ceiling deterioration from long-term, unaddressed moisture (right). Catching the stain early is what keeps a repair small. Stock photos — not BayouDry jobs.",
    isExample: true,
  },
  {
    slug: "wet-floor-drying-example",
    title: "Wet Floor → Drying Equipment Running",
    serviceSlug: "structural-drying-dehumidification",
    beforePhoto: "/photos/example-soaked-carpet-before.jpg",
    afterPhoto: "/photos/example-soaked-carpet-after.jpg",
    caption:
      "Illustrative example: a wet floor (left), and a wood floor with drying equipment running during structural drying (right). Stock photos — not a BayouDry job.",
    isExample: true,
  },
  {
    slug: "wet-floor-to-restored-living-room",
    title: "Wet Floor → Restored Living Room",
    serviceSlug: "flood-damage-cleanup",
    beforePhoto: "/photos/example-wet-floor-before.jpg",
    afterPhoto: "/photos/example-restored-living-room-after.jpg",
    caption:
      "Illustrative example: a wet floor while drying is underway (left), and a bright restored living room after repairs and refinishing (right). Representative stages, not the same room — stock photos, not a BayouDry job.",
    isExample: true,
  },
  {
    slug: "damaged-kitchen-to-renovated",
    title: "Water-Damaged Kitchen → Renovated",
    serviceSlug: "drywall-ceiling-restoration",
    beforePhoto: "/photos/example-damaged-kitchen-before.jpg",
    afterPhoto: "/photos/example-renovated-kitchen-after.jpg",
    caption:
      "Illustrative example: moisture-damaged wall finishes (left), and a renovated kitchen after the water source was fixed and damaged materials were replaced (right). Representative stages, not the same room — stock photos, not a BayouDry job.",
    isExample: true,
  },
  {
    slug: "mold-bedroom-to-fresh",
    title: "Mold-Damaged Bedroom → Fresh Again",
    serviceSlug: "mold-remediation",
    beforePhoto: "/photos/example-mold-bedroom-before.jpg",
    afterPhoto: "/photos/example-fresh-bedroom-after.jpg",
    caption:
      "Illustrative example: mold staining on a wall from unaddressed moisture (left), and a fresh bedroom after remediation and repainting (right). Representative stages, not the same room — stock photos, not a BayouDry job.",
    isExample: true,
  },
];
