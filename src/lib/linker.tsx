/**
 * Contextual internal links (server-side, capped).
 * Topic → owning-page table. First mention only, no self-links, max 6/page.
 * Usage: const link = createLinker(path); link("burst pipe") → <a> or text.
 */
import { routes } from "./routes";

interface Topic {
  match: RegExp;
  label: string;
  path: string;
}

const TOPICS: Topic[] = [
  { match: /\bwater extraction\b|standing water\b/i, label: "emergency water extraction", path: "/water-damage-services/emergency-water-extraction/" },
  { match: /\bflood damage\b|house flood\b|flooded home\b/i, label: "flood damage cleanup", path: "/water-damage-services/flood-damage-cleanup/" },
  { match: /\bsewage backup\b|sewage spill\b/i, label: "sewage backup cleanup", path: "/water-damage-services/sewage-backup-cleanup/" },
  { match: /\bburst pipe\b|frozen pipe\b/i, label: "burst pipe water damage", path: "/water-damage-services/burst-pipe-water-damage/" },
  { match: /\bstructural drying\b|dehumidif/i, label: "structural drying & dehumidification", path: "/water-damage-services/structural-drying-dehumidification/" },
  { match: /\bhardwood floor\b.*\bwater\b|\bcupping\b/i, label: "hardwood floor drying", path: "/water-damage-services/hardwood-floor-drying/" },
  { match: /\bmoisture detection\b|hidden moisture\b|moisture meter\b/i, label: "moisture detection & inspection", path: "/water-damage-services/moisture-detection-inspection/" },
  { match: /\bwet drywall\b|water-stained ceiling\b|ceiling stain\b/i, label: "drywall & ceiling restoration", path: "/water-damage-services/drywall-ceiling-restoration/" },
  { match: /\bwet carpet\b|soaked carpet\b/i, label: "carpet water extraction", path: "/water-damage-services/carpet-water-extraction/" },
  { match: /\bmold remediation\b|mold removal\b/i, label: "mold remediation", path: "/water-damage-services/mold-remediation/" },
  { match: /\bmusty odor\b|musty smell\b|odor removal\b/i, label: "odor removal", path: "/water-damage-services/odor-removal/" },
  { match: /\broof leak\b|leaking roof\b/i, label: "roof leak water damage", path: "/water-damage-services/roof-leak-water-damage/" },
  { match: /\bwater heater leak\b|washing machine\b.*\bleak\b|dishwasher leak\b|appliance leak\b/i, label: "appliance leak cleanup", path: "/water-damage-services/appliance-leak-cleanup/" },
  { match: /\bslab leak\b/i, label: "moisture detection & inspection", path: "/water-damage-services/moisture-detection-inspection/" },
  { match: /\bshut[-\s]?off valve\b|main water shutoff\b/i, label: "what to do when your house floods", path: "/resources/what-to-do-when-your-house-floods/" },
  { match: /\bhomeowners insurance\b.*\bcover/i, label: "does insurance cover water damage", path: "/resources/does-homeowners-insurance-cover-water-damage/" },
  { match: /\brestoration cost\b/i, label: "water damage restoration cost factors", path: "/resources/water-damage-restoration-cost-factors/" },
  { match: /\bchoosing\b.*\brestoration company\b|find\b.*\brestoration company\b/i, label: "choosing a water damage restoration company", path: "/resources/how-to-choose-a-water-damage-restoration-company/" },
];

const MAX_LINKS = 6;

export function createLinker(currentPath: string) {
  const used = new Set<string>();
  let count = 0;

  function linkFor(text: string): { label: string; path: string } | null {
    if (count >= MAX_LINKS) return null;
    for (const t of TOPICS) {
      if (used.has(t.path)) continue;
      if (t.path === currentPath) continue; // no self-links
      if (t.match.test(text)) {
        used.add(t.path);
        count++;
        return { label: t.label, path: t.path };
      }
    }
    return null;
  }

  /**
   * Link the first matching topic mention inside a paragraph.
   * Returns HTML string — caller must sanitize (content is ours, static).
   */
  function linkify(paragraph: string): string {
    if (count >= MAX_LINKS) return paragraph;
    for (const t of TOPICS) {
      if (used.has(t.path) || t.path === currentPath) continue;
      const m = paragraph.match(t.match);
      if (m && m.index !== undefined) {
        used.add(t.path);
        count++;
        const before = paragraph.slice(0, m.index);
        const after = paragraph.slice(m.index + m[0].length);
        return `${before}<a href="${t.path}" class="link">${m[0]}</a>${after}`;
      }
    }
    return paragraph;
  }

  return { linkFor, linkify, count: () => count };
}

export { routes };
