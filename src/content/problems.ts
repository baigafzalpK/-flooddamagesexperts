import type { Problem } from "./types";

/**
 * Homepage symptom finder for BayouDry Restoration: plain-words symptom ->
 * likely cause -> the service that handles it and the guide that explains it.
 * guideSlug values reference articles.ts / articlesMore.ts.
 * Call-brand language throughout; the independent contractor does the work.
 */
export const problems: Problem[] = [
  {
    slug: "water-stain-spreading-ceiling",
    symptom: "A water stain is spreading across the ceiling",
    cause:
      "Usually a roof leak or a plumbing failure from the floor above — the stain you see is the edge of a larger wet area hidden in the ceiling cavity.",
    serviceSlug: "roof-leak-water-damage",
    guideSlug: "what-to-do-when-your-house-floods",
    urgency: "high",
  },
  {
    slug: "musty-smell-wont-go-away",
    symptom: "A musty smell that won't go away",
    cause:
      "Persistent musty odor usually means hidden moisture or mold growth behind walls, under flooring, or in the HVAC system — surface cleaning will not reach it.",
    serviceSlug: "mold-remediation",
    guideSlug: "mold-after-water-damage",
    urgency: "medium",
  },
  {
    slug: "warm-spot-on-floor",
    symptom: "A warm spot on the floor",
    cause:
      "A warm area on a slab floor often points to a hot-water slab leak underneath — water escaping from a pipe buried in the foundation.",
    serviceSlug: "moisture-detection-inspection",
    guideSlug: "water-damage-restoration-process",
    urgency: "medium",
  },
  {
    slug: "sewage-smell-from-drains",
    symptom: "Sewage smell coming from drains",
    cause:
      "Sewer gas or an early-stage backup in the main line — it can precede a full backup, so it deserves attention before wastewater enters the home.",
    serviceSlug: "sewage-backup-cleanup",
    guideSlug: "sewage-backup-health-risks",
    urgency: "high",
  },
  {
    slug: "soaked-carpet-after-storm",
    symptom: "Soaked carpet after a storm",
    cause:
      "Flood intrusion or wind-driven rain entering through doors, windows, or a compromised roof — storm water is treated as contaminated and needs professional extraction.",
    serviceSlug: "emergency-water-extraction",
    guideSlug: "hurricane-flood-preparation-houston",
    urgency: "high",
  },
  {
    slug: "bubbling-peeling-paint",
    symptom: "Bubbling or peeling paint on a wall or ceiling",
    cause:
      "Moisture trapped behind the drywall is pushing the paint off — the visible bubbling is a sign of a larger wet area inside the wall cavity.",
    serviceSlug: "drywall-ceiling-restoration",
    guideSlug: "water-damage-restoration-process",
    urgency: "medium",
  },
  {
    slug: "hardwood-floors-cupping",
    symptom: "Hardwood floors cupping or warping",
    cause:
      "Moisture under or within the flooring is swelling the planks — fast professional drying can often save the floor if it starts within days.",
    serviceSlug: "hardwood-floor-drying",
    guideSlug: "drying-hardwood-floors-after-water-damage",
    urgency: "medium",
  },
  {
    slug: "water-under-sink-behind-washer",
    symptom: "Water pooling under the sink or behind the washer",
    cause:
      "A supply-line or drain leak from a fixture or appliance — even a slow drip saturates cabinets, subflooring, and the wall behind over time.",
    serviceSlug: "appliance-leak-cleanup",
    guideSlug: "what-to-do-when-your-house-floods",
    urgency: "medium",
  },
  {
    slug: "wet-spot-after-freeze",
    symptom: "A new wet spot appeared after a hard freeze",
    cause:
      "A pipe likely cracked during the freeze and started leaking when it thawed — freeze damage often hides inside walls until the ice melts and water flows again.",
    serviceSlug: "burst-pipe-water-damage",
    guideSlug: "texas-freeze-burst-pipes",
    urgency: "high",
  },
  {
    slug: "stain-keeps-growing",
    symptom: "A damp stain that keeps getting bigger",
    cause:
      "An active, ongoing leak is feeding the stain — the source is still running, so drying the surface alone will not stop it. The leak must be found and fixed first.",
    serviceSlug: "moisture-detection-inspection",
    guideSlug: "water-damage-restoration-process",
    urgency: "high",
  },
];
