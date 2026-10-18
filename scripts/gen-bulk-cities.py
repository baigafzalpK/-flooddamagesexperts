#!/usr/bin/env python3
"""
Generate src/content/citiesBulk.ts — ~1,200 programmatic city pages from the
real LeadSmart Water Damage coverage dataset (2026-10-11), top cities by ZIP
coverage across all states.

Every field is either real data from the dataset or honest general copy —
never invented local facts. Texas cities keep Gulf-specific copy (home
market); other states get a national template with real per-state stats.
"""
import json, re

DATA = "/home/hatch/workspace/waterdamage-site/scripts/data/water-damage-cities.json"
OUT = "/home/hatch/workspace/waterdamage-site/src/content/citiesBulk.ts"

# 16 deep Houston-metro cities have hand-written pages — never duplicate them.
DEEP_TX = {"houston", "pasadena", "baytown", "sugar-land", "katy", "conroe",
           "spring", "pearland", "league-city", "missouri-city", "richmond",
           "rosenberg", "humble", "galveston", "texas-city", "friendswood"}

TARGET = 1200

POPULAR = ["emergency-water-extraction", "flood-damage-cleanup",
           "structural-drying-dehumidification", "mold-remediation",
           "burst-pipe-water-damage"]

STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho",
    "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas",
    "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
    "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
    "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
    "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah",
    "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia",
    "WI": "Wisconsin", "WY": "Wyoming", "DC": "District of Columbia",
}

def slugify(name):
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "city"

def state_slug(abbr):
    return STATE_NAMES.get(abbr, abbr).lower().replace(" ", "-").replace(".", "")

def ts_str(s):
    if s is None:
        return ""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")

def fmt_pop(n):
    return f"{n:,}" if n else "—"

def ordinal(n):
    return f"{n}{'th' if 11 <= n % 100 <= 13 else {1: 'st', 2: 'nd', 3: 'rd'}.get(n % 10, 'th')}"

def main():
    d = json.load(open(DATA))
    cols = d["cols"]
    rows = [dict(zip(cols, r)) for r in d["rows"]]
    rows = [r for r in rows if r["state_id"] in STATE_NAMES]
    rows.sort(key=lambda r: (r["zips"], r["population"] or 0), reverse=True)

    # In-state coverage rank (over ALL rows of the state, deep cities included).
    by_state = {}
    for r in rows:
        by_state.setdefault(r["state_id"], []).append(r)
    rank_in_state = {}
    for abbr, lst in by_state.items():
        lst.sort(key=lambda r: (r["zips"], r["population"] or 0), reverse=True)
        for i, r in enumerate(lst, 1):
            rank_in_state[(r["city"], abbr)] = i

    picked = []          # (row, slug, stateSlug)
    seen = set()         # (stateSlug, slug)
    for r in rows:
        if len(picked) >= TARGET:
            break
        abbr = r["state_id"]
        ss = state_slug(abbr)
        slug = slugify(r["city"])
        if ss == "texas" and slug in DEEP_TX:
            continue
        base, n = slug, 2
        while (ss, slug) in seen:
            slug = f"{base}-{n}"
            n += 1
        seen.add((ss, slug))
        picked.append((r, slug, ss))

    # Same-state nearby lists.
    by_ss = {}
    for r, slug, ss in picked:
        by_ss.setdefault(ss, []).append(slug)

    def nearby_for(slug, ss, k=4):
        same = [s for s in by_ss.get(ss, []) if s != slug][:k]
        if len(same) >= k:
            return same
        extra = [s for _, s, _ in picked if s != slug and s not in same]
        return (same + extra)[:k]

    def arr(items):
        return "[" + ", ".join(f'"{ts_str(i)}"' for i in items) + "]"

    def tx_copy(city, state_name, county_display, location, pop_s, pop_phrase,
                plural, zips, rank):
        intro1 = (
            f"{city} is {pop_phrase} in {location}. "
            f"Coverage data shows water-damage restoration contractors serving {zips} ZIP "
            f"code{plural} here — making it the {ordinal(rank)} most-covered city "
            f"for water damage restoration in Texas."
        )
        intro2 = (
            f"When water gets in — a burst pipe, a room flooded after a Gulf storm, a leaking "
            f"water heater — BayouDry connects you with an independent local restoration "
            f"contractor who serves the {city} area: fast on extraction, thorough on drying, "
            f"and clear about the plan in writing before any work begins."
        )
        housing = [
            f"Coverage spans {zips} ZIP code{plural} across {county_display}" + (f", home to about {pop_s} residents." if pop_s != "—" else "."),
            f"Like much of Texas, {city}'s housing is dominated by slab-on-grade foundations — when water gets under flooring, it spreads fast and hides. Brick veneer and composition roofs are the norm.",
            "Newer subdivisions tend to mean appliance and plumbing-supply claims; older neighborhoods more burst-pipe and roof-leak calls.",
        ]
        issues = [
            ("Gulf storms don't stop at the coast",
             f"Hurricanes and tropical storms push flooding far inland across Texas — not just the coast. Contractors serving {city} see their busiest weeks after major Gulf weather systems."),
            ("Clay soil and flat land",
             f"Much of Texas sits on expansive clay with poor drainage. When it rains hard, water pools against foundations and finds its way in — which is why {city} sees so many seepage and slab-leak calls."),
            ("Freeze events burst pipes",
             "The February 2021 freeze proved even South Texas isn't exempt. Burst supply lines and water-heater failures remain a top claim driver statewide whenever temperatures drop hard."),
        ]
        faqs = [
            (f"How fast can a contractor reach {city}?",
             f"Timing varies by contractor and workload, but with {zips} ZIP code{plural} covered around {city}, same-day or next-day response is common. If water is actively flowing, say so when you request help — and shut off your main water valve first."),
            (f"What should I do before the contractor arrives in {city}?",
             "If a pipe burst, shut off the main water valve. Turn off power to wet areas at the breaker, move valuables and rugs out of the water, and don't use a household vacuum on standing water. Then document everything with photos for your insurer."),
            ("Does homeowners insurance cover water damage in Texas?",
             "Sudden, accidental water discharge — a burst pipe, an appliance failure — is often covered under a standard homeowners policy. Flooding from rising water generally needs a separate flood policy. Document the damage and ask your insurer what's covered; this is general information, not insurance advice."),
        ]
        return intro1, intro2, housing, issues, faqs

    def national_copy(city, state_name, county_display, location, pop_s,
                      pop_phrase, plural, zips, rank):
        intro1 = (
            f"{city} is {pop_phrase} in {location}. "
            f"Coverage data shows water-damage restoration contractors serving {zips} ZIP "
            f"code{plural} here — making it the {ordinal(rank)} most-covered city "
            f"for water damage restoration in {state_name}."
        )
        intro2 = (
            f"When water gets in — a burst pipe, a flooded room after a storm, a leaking "
            f"water heater — BayouDry connects you with an independent local restoration "
            f"contractor who serves the {city} area: fast on extraction, thorough on drying, "
            f"and clear about the plan in writing before any work begins."
        )
        housing = [
            f"Coverage spans {zips} ZIP code{plural} across {county_display}" + (f", home to about {pop_s} residents." if pop_s != "—" else "."),
            "Water finds the weak points in any housing stock: supply lines and water heaters in newer homes, aging pipes and roof wear in older neighborhoods, and slab or basement seepage where drainage is poor.",
            "The most common calls are burst pipes, appliance leaks, roof leaks, and storm-driven flooding — the same four drivers in almost every market.",
        ]
        issues = [
            ("Storms don't check the forecast",
             f"Heavy rain and flash flooding overwhelm drainage in every region. Contractors serving {city} see their busiest weeks after major local storm systems."),
            ("Pipes burst when temperatures swing",
             "Freeze-thaw cycles split supply lines and crack water heaters; summer heat stresses appliance hoses and AC condensate lines. Both ends of the thermometer generate water-damage calls."),
            ("Small leaks become big repairs",
             "A slow supply-line drip or a minor roof leak can soak framing and insulation for weeks before anyone notices — which is why fast moisture detection matters more than the size of the visible stain."),
        ]
        faqs = [
            (f"How fast can a contractor reach {city}?",
             f"Timing varies by contractor and workload, but with {zips} ZIP code{plural} covered around {city}, same-day or next-day response is common. If water is actively flowing, say so when you request help — and shut off your main water valve first."),
            (f"What should I do before the contractor arrives in {city}?",
             "If a pipe burst, shut off the main water valve. Turn off power to wet areas at the breaker, move valuables and rugs out of the water, and don't use a household vacuum on standing water. Then document everything with photos for your insurer."),
            (f"Does homeowners insurance cover water damage in {state_name}?",
             "Sudden, accidental water discharge — a burst pipe, an appliance failure — is often covered under a standard homeowners policy. Flooding from rising water generally needs a separate flood policy. Document the damage and ask your insurer what's covered; this is general information, not insurance advice."),
        ]
        return intro1, intro2, housing, issues, faqs

    cities_ts = []
    for r, slug, ss in picked:
        abbr = r["state_id"]
        state_name = STATE_NAMES[abbr]
        city = r["city"]
        county = r["county"] or ""
        zips = r["zips"]
        pop = r["population"] or 0
        rank = rank_in_state[(r["city"], abbr)]
        county_display = f"{county} County" if county else state_name
        location = f"{county} County, {state_name}" if county else state_name
        pop_s = fmt_pop(pop)
        pop_phrase = f"a city of about {pop_s} people" if pop else "a community"
        plural = "s" if zips != 1 else ""

        maker = tx_copy if ss == "texas" else national_copy
        intro1, intro2, housing, issues, faqs = maker(
            city, state_name, county_display, location, pop_s,
            pop_phrase, plural, zips, rank)
        nearby = nearby_for(slug, ss)

        cities_ts.append(
            "  {\n"
            f'    slug: "{slug}",\n'
            f'    stateSlug: "{ss}",\n'
            f'    county: "{ts_str(county)}",\n'
            '    status: "PUBLISHED",\n'
            "    zips: [],\n"
            f"    zipCount: {zips},\n"
            f"    population: {pop},\n"
            f"    stateRank: {rank},\n"
            "    areas: [],\n"
            f'    intro: ["{ts_str(intro1)}", "{ts_str(intro2)}"],\n'
            f"    housingNotes: {arr(housing)},\n"
            f"    localIssues: [{', '.join('{ title: \"' + ts_str(t) + '\", body: \"' + ts_str(b) + '\" }' for t, b in issues)}],\n"
            f"    popularServices: {arr(POPULAR)},\n"
            f"    nearby: {arr(nearby)},\n"
            f"    faqs: [{', '.join('{ q: \"' + ts_str(q) + '\", a: \"' + ts_str(a) + '\" }' for q, a in faqs)}],\n"
            '    updated: "2026-10-13",\n'
            "  }"
        )

    # Per-state infos with real stats (city count, ZIP total). No invented local facts.
    state_abbrs = sorted({r["state_id"] for r, _, _ in picked})
    states_ts = []
    for abbr in state_abbrs:
        if abbr == "TX":
            continue  # Texas has a hand-written stateInfo
        name = STATE_NAMES[abbr]
        ss = state_slug(abbr)
        scities = [(r, s) for r, s, sss in picked if sss == ss]
        n = len(scities)
        z = sum(r["zips"] for r, _ in scities)
        top3 = ", ".join(r["city"] for r, _ in scities[:3])
        states_ts.append(
            "  {\n"
            f'    slug: "{ss}",\n'
            f'    name: "{name}",\n'
            f'    abbr: "{abbr}",\n'
            "    intro: [\n"
            f'      "Water damage doesn\'t care about state lines. In {ts_str(name)}, coverage data shows restoration contractors serving {z:,} ZIP codes across {n} cities — from burst pipes in winter to storm flooding in the warmer months.",\n'
            f'      "BayouDry started in Houston, where Gulf storms and clay soil make water damage a way of life — and the same playbook works anywhere: extract fast, dry thoroughly, document everything, and get the plan in writing before work begins. Request help and we\'ll connect you with an independent local restoration contractor who serves your area.",\n'
            "    ],\n"
            "    details: {\n"
            f'      housing: "Housing stock varies across {ts_str(name)} — newer slab-on-grade subdivisions, older homes with aging supply lines, and everything in between. Water finds the weak points: appliance hoses, water heaters, roof valleys, and foundation drainage. Local contractors read these patterns house by house.",\n'
            f'      climate: "Every region has a water season: spring storms and flash flooding, summer humidity that slows drying, freeze-thaw cycles that split pipes. {ts_str(name)}\'s mix shapes which failures local contractors see most — including in top coverage cities like {ts_str(top3)} — but the response is the same everywhere: stop the source, extract the water, dry the structure.",\n'
            '      permits: "Permit rules for restoration and rebuild work are set city by city and county by county — there is no single statewide standard. Floodplain repairs can trigger additional requirements tied to FEMA flood maps. Check with your local permit office before major rebuild work; this is general information, not legal advice.",\n'
            "    },\n"
            '    updated: "2026-10-13",\n'
            "  }"
        )

    abbr_map = ", ".join(f'"{state_slug(a)}": "{a}"' for a in sorted(STATE_NAMES, key=lambda a: state_slug(a)))

    out = (
        "/**\n"
        " * Programmatic city pages generated from the real LeadSmart Water Damage\n"
        " * coverage dataset (2026-10-11). DO NOT hand-edit — regenerate with\n"
        " * scripts/gen-bulk-cities.py.\n"
        " *\n"
        " * Every field is real dataset data (city, county, population, ZIP-code\n"
        " * count, in-state coverage rank) or honest general copy — never invented\n"
        " * local facts. Texas cities keep Gulf-specific copy (home market).\n"
        " */\n"
        'import type { City, StateInfo } from "./types";\n'
        "\n"
        "export const bulkCities: City[] = [\n"
        + ",\n".join(cities_ts)
        + "\n];\n"
        "\n"
        "export const bulkStateInfos: StateInfo[] = [\n"
        + ",\n".join(states_ts)
        + "\n];\n"
        "\n"
        "/** State slug -> postal abbreviation for bulk city labels. */\n"
        "const ABBR: Record<string, string> = { " + abbr_map + " };\n"
        "\n"
        '/** "City Name, ST" label for bulk cities. */\n'
        'export function bulkLabel(c: Pick<City, "slug" | "stateSlug">): string {\n'
        "  const name = c.slug\n"
        '    .split("-")\n'
        "    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))\n"
        '    .join(" ")\n'
        '    .replace(/\\s[A-Z]{2}$/, "");\n'
        '  const abbr = ABBR[c.stateSlug] ?? "";\n'
        '  return abbr ? `${name}, ${abbr}` : name;\n'
        "}\n"
        "\n"
        "/** True when the slug belongs to the programmatic set. */\n"
        "const bulkSlugs = new Set(bulkCities.map((c) => c.slug + \"|\" + c.stateSlug));\n"
        "export function isBulkCity(stateSlug: string, slug: string): boolean {\n"
        '  return bulkSlugs.has(slug + "|" + stateSlug);\n'
        "}\n"
    )
    open(OUT, "w").write(out)
    print(f"wrote {OUT}: {len(cities_ts)} cities across {len(state_abbrs)} states")

if __name__ == "__main__":
    main()
