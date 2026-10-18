import type { Service } from "./types";

const TIMELINE_URGENT = ["Right now", "Within 24 hours", "Within a few days"];
const TIMELINE_STANDARD = ["As soon as possible", "Within a month", "Just planning ahead"];

export const moreServices: Service[] = [
  {
    slug: "carpet-water-extraction",
    name: "Carpet Water Extraction",
    category: "repair-restoration",
    status: "PUBLISHED",
    seoTitle: "Carpet Water Extraction in Houston",
    metaDescription:
      "Carpet water extraction in Houston after floods, leaks, and overflows. BayouDry connects you with a local contractor to pull water and save your carpet.",
    h1: "Carpet Water Extraction in Houston",
    answer:
      "Carpet water extraction is the deep removal of water from carpet and carpet pad using professional-grade extractors — far beyond what a rental machine or shop vac achieves. After a leak or flood, your restoration contractor extracts the water, evaluates the pad, and dries the carpet and subfloor.",
    intro: [
      "Carpet and pad act like a sponge, and on Houston's slab-on-grade homes there is nowhere for the water to go but sideways — wicking across rooms from a single leak point. A carpet that feels merely damp on top can hold gallons in the pad underneath, pressed against a concrete slab that keeps it wet for weeks.",
      "Professional extraction pulls water from the carpet fibers, the pad, and the subfloor surface in one pass — something rental machines cannot do. The pad is usually discarded and replaced: it is inexpensive, nearly impossible to fully dry, and the leading cause of mold under carpet. BayouDry connects you with a local restoration contractor who extracts deeply, dries the subfloor, and tells you honestly whether the carpet itself can stay.",
    ],
    signs: [
      {
        title: "Carpet squishes underfoot",
        body: "A squishy carpet means the pad is saturated. The longer it sits, the more the subfloor absorbs — and the worse the outcome for the carpet.",
      },
      {
        title: "A leak or flood reached carpeted rooms",
        body: "Water travels under carpet far beyond the visible wet area. A contractor maps the full extent rather than treating only what you can see.",
      },
      {
        title: "Musty smell rising from the carpet",
        body: "Odor from carpet after water exposure means the pad or subfloor is still wet — or already growing mold. Surface drying will not fix it.",
      },
      {
        title: "Carpet is discolored or rippling",
        body: "Discoloration marks contamination or dye damage; rippling means the backing has been compromised by moisture. Both need professional assessment.",
      },
      {
        title: "Previous water damage was never extracted",
        body: "Carpet that got wet before and was left to air-dry often hides mold in the pad. A contractor checks what the last event left behind.",
      },
    ],
    process: [
      {
        title: "Water extraction",
        body: "Professional extractors pull water from the carpet, the pad, and the subfloor surface — the deep extraction rental machines cannot achieve.",
      },
      {
        title: "Pad evaluation",
        body: "The pad is inspected and, in most cases, removed and discarded. It is cheap to replace and nearly impossible to dry once saturated.",
      },
      {
        title: "Subfloor drying",
        body: "The exposed subfloor — concrete slab or wood — is dried with air movers and dehumidifiers, then verified with moisture readings.",
      },
      {
        title: "Cleaning and reinstallation decision",
        body: "Salvageable carpet is cleaned and reinstalled over new pad; carpet that cannot be saved is documented for the insurance claim.",
      },
    ],
    costFactors: [
      "The square footage of affected carpet",
      "Pad replacement — in most cases the pad is discarded and replaced",
      "The water category — clean, gray, or black water change the approach",
      "Subfloor drying needs, especially on concrete slab",
      "In-place drying versus lifting the carpet to dry the subfloor",
    ],
    diy: {
      safe: [
        "Blot — do not rub — standing water with towels",
        "Lift furniture onto blocks or foil to prevent staining",
        "Remove small rugs and place them to dry elsewhere",
        "Run the AC to lower indoor humidity",
        "Photograph the damage",
      ],
      stop: [
        "Do not use a rental carpet cleaner on floodwater — it cannot extract deeply enough",
        "Do not leave wet pad under carpet hoping it dries — it will not, and mold follows",
        "Do not walk on wet carpet more than necessary — it damages the backing",
        "Do not apply heat directly to carpet",
        "Do not reinstall or stretch carpet before the subfloor is verified dry",
      ],
    },
    faqs: [
      {
        q: "Can wet carpet be saved?",
        a: "Often, if the water was clean and extraction starts quickly. The pad underneath is usually discarded — it is inexpensive and nearly impossible to fully dry. Contaminated water from sewage or flooding means the carpet goes too.",
      },
      {
        q: "Why does the pad have to go?",
        a: "Carpet pad is a sponge that traps water against the subfloor. It dries too slowly to prevent mold, and it is cheap to replace — drying the carpet over a new, dry pad is the standard approach.",
      },
      {
        q: "How long until I can walk on it normally?",
        a: "Once extraction and drying are complete and moisture readings confirm the carpet and subfloor are dry — your contractor verifies this with meters. Rushing it risks mold under a carpet that feels dry on top.",
      },
    ],
    related: ["emergency-water-extraction", "flood-damage-cleanup", "structural-drying-dehumidification", "odor-removal"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/carpet-water-extraction.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    category: "repair-restoration",
    status: "PUBLISHED",
    seoTitle: "Mold Remediation in Houston",
    metaDescription:
      "Mold remediation in Houston after water damage, floods, and leaks. BayouDry connects you with a local specialist for containment, removal, and prevention.",
    h1: "Mold Remediation in Houston",
    answer:
      "Mold remediation is the professional containment, removal, and cleanup of mold growth — typically after water damage, flooding, or prolonged humidity. Your restoration contractor isolates the affected area, removes mold-damaged materials, cleans remaining surfaces, and addresses the moisture source so it does not return.",
    intro: [
      "Houston is built for mold: Gulf humidity, flood events, slow leaks inside walls, and AC systems that run most of the year. Mold can begin growing within 24 to 48 hours of moisture exposure, which is why every unfinished drying job in this metro eventually becomes a mold job. It hides on the back of drywall, in insulation, under flooring, and inside HVAC-adjacent cavities.",
      "Remediation is a process, not a spray bottle. The affected area is contained so spores do not spread through the home, mold-damaged porous materials are removed, remaining surfaces are cleaned with professional methods, and — critically — the moisture source is fixed so the growth does not return. BayouDry connects you with a local water-damage specialist who follows that sequence start to finish.",
    ],
    signs: [
      {
        title: "Visible mold growth on walls, ceilings, or baseboards",
        body: "Visible growth is only part of the colony — what you see usually extends further inside the material or cavity behind it.",
      },
      {
        title: "Musty odor that will not go away",
        body: "A persistent musty smell with no visible source means hidden growth — behind drywall, under flooring, or in a wall cavity.",
      },
      {
        title: "Mold returned after a previous cleanup",
        body: "Regrowth means the moisture source was never fixed or the first cleanup only treated the surface. Professional remediation addresses the cause.",
      },
      {
        title: "Water damage that was never professionally dried",
        body: "Any leak or flood that skipped the drying phase is a mold site in waiting — especially in Houston's humidity.",
      },
      {
        title: "Condensation problems around windows or AC vents",
        body: "Chronic condensation feeds surface mold on sills, vents, and surrounding drywall. The moisture pattern points to the fix.",
      },
    ],
    process: [
      {
        title: "Inspection and moisture source identification",
        body: "The specialist locates all growth — visible and hidden — and identifies the moisture feeding it. No remediation plan works without this step.",
      },
      {
        title: "Containment",
        body: "The work area is sealed off with barriers and negative air pressure so spores do not spread to clean parts of the home during removal.",
      },
      {
        title: "Removal and cleaning",
        body: "Mold-damaged porous materials are removed and disposed of; remaining structural surfaces are cleaned with professional methods.",
      },
      {
        title: "Drying, verification, and prevention",
        body: "The area is dried to its moisture standard, the work is verified, and the moisture source is addressed so the problem does not recur.",
      },
    ],
    costFactors: [
      "The size of the affected area",
      "The location of the growth — surface mold versus mold inside wall cavities or HVAC",
      "The materials involved — drywall, wood, concrete",
      "Moisture-source repair — remediation without fixing the water is temporary",
      "Post-remediation verification testing, if requested",
    ],
    diy: {
      safe: [
        "Fix the moisture source if it is simple — a dripping pipe, a clogged AC drain",
        "Run the AC and exhaust fans to lower indoor humidity",
        "Keep the affected area undisturbed until a contractor assesses it",
        "Photograph the growth for your records",
        "Move unaffected belongings away from the area",
      ],
      stop: [
        "Do not bleach large mold patches — bleach does not reach roots in porous materials and the problem returns",
        "Do not disturb large areas of mold without containment — you spread spores through the house",
        "Do not paint over mold",
        "Do not run the HVAC if mold may be in the ductwork",
        "Do not ignore the moisture source — remediation without fixing the water is temporary",
      ],
    },
    faqs: [
      {
        q: "Can mold be completely removed?",
        a: "The goal of remediation is to remove active growth and return the area to a normal condition — not to sterilize the home, since mold spores exist everywhere. A professional removes the growth, cleans the area, and fixes the moisture that fed it.",
      },
      {
        q: "How fast does mold grow after water damage?",
        a: "Mold can begin growing within 24 to 48 hours of moisture exposure, which is why fast drying after any leak or flood matters so much in Houston's humid climate.",
      },
      {
        q: "Should I get mold testing?",
        a: "A visual inspection and moisture assessment usually identify the problem. Independent testing can be useful for large infestations, real estate transactions, or post-remediation verification — your contractor advises whether it is warranted.",
      },
    ],
    related: ["structural-drying-dehumidification", "moisture-detection-inspection", "drywall-ceiling-restoration", "odor-removal"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/mold-remediation.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "odor-removal",
    name: "Odor Removal",
    category: "repair-restoration",
    status: "PUBLISHED",
    seoTitle: "Odor Removal in Houston",
    metaDescription:
      "Musty odor removal in Houston after water damage, floods, and sewage. BayouDry connects you with a local specialist who treats the source, not the symptom.",
    h1: "Odor Removal in Houston",
    answer:
      "Odor removal after water damage is the professional elimination of musty, sewage, or mildew smells by treating the source — not masking it. Your restoration contractor finds where the odor lives — in wet drywall, carpet pad, subfloor, or HVAC — removes or treats the source, and deodorizes the space.",
    intro: [
      "A musty smell that survives every candle and air freshener is telling you something: the odor is not in the air, it is in the materials. After Houston floods and leaks, smell lives in soaked carpet pad, the back of drywall, damp subfloor, and ductwork that circulated humid air through the whole property. Masking it just schedules the next complaint.",
      "Professional odor removal starts with the source. Your contractor traces the smell to the material holding it, removes or treats that material, and then deodorizes — with HEPA air scrubbing, hydroxyl treatment, and targeted products matched to the odor. BayouDry connects you with a local specialist who verifies the result with you before calling the job done: gone, not covered up.",
    ],
    signs: [
      {
        title: "Musty smell lingers after water damage",
        body: "Odor that outlasts the visible cleanup means moisture or contamination is still trapped somewhere — the drying or remediation was incomplete.",
      },
      {
        title: "Odor returns every time the AC runs",
        body: "Smell that arrives with the airflow points to the ductwork or air handler — moisture, mold, or contamination in the system itself.",
      },
      {
        title: "Sewage smell after a backup",
        body: "Lingering sewage odor after a backup means contamination was missed — often in wall cavities, under flooring, or in the HVAC.",
      },
      {
        title: "A room smells worse in humid weather",
        body: "Houston's humid summers reactivate trapped moisture and the odor with it. Seasonal smell is a moisture problem, not an air problem.",
      },
      {
        title: "Air fresheners and candles changed nothing",
        body: "If masking products made no lasting difference, the source is embedded in materials. It needs removal or professional treatment.",
      },
    ],
    process: [
      {
        title: "Source identification",
        body: "The specialist traces the odor to its source using inspection and moisture readings — treating the wrong thing wastes everyone's time.",
      },
      {
        title: "Source removal",
        body: "Materials holding the odor — pad, drywall sections, insulation — are removed and disposed of properly.",
      },
      {
        title: "Professional deodorization",
        body: "Remaining surfaces and air are treated with methods matched to the odor: HEPA air scrubbing, hydroxyl treatment, and targeted products.",
      },
      {
        title: "Verification",
        body: "The specialist walks the property with you to confirm the odor is gone — not masked, gone — before the job is considered complete.",
      },
    ],
    costFactors: [
      "The type of odor — musty, sewage, and mildew each need different treatment",
      "Source removal versus in-place treatment",
      "The size of the affected area",
      "HVAC involvement — ductwork spreads odor through the whole property",
      "Standalone treatment versus odor removal as the final step of a larger remediation",
    ],
    diy: {
      safe: [
        "Note when and where the odor is strongest — it helps the contractor trace it",
        "Run the AC to reduce the humidity that feeds musty smells",
        "Remove obviously ruined materials like soaked rugs",
        "Ventilate with fresh air when the weather allows",
        "Change your HVAC filter",
      ],
      stop: [
        "Do not mask odors with sprays and candles — they hide a problem that keeps growing",
        "Do not run an ozone machine yourself — ozone is unsafe to breathe and damages rubber, fabrics, and electronics",
        "Do not seal in odor with paint or new flooring before the source is treated",
        "Do not assume the smell will fade on its own — persistent odor means persistent moisture or contamination",
        "Do not disturb suspected mold to air it out",
      ],
    },
    faqs: [
      {
        q: "Why does the musty smell come back every summer?",
        a: "Because the source — moisture trapped in materials — is still there. Houston's humid summers reactivate it. Permanent odor removal means finding and eliminating the source, not treating the air.",
      },
      {
        q: "Can't I just use an ozone generator?",
        a: "Ozone can damage household materials and is unsafe to breathe, yet often fails to reach odor trapped inside walls and floors. Professionals use safer, targeted methods after removing the source.",
      },
      {
        q: "Will the smell definitely go away?",
        a: "When the source is fully removed or treated — not just covered up — yes. Your contractor verifies the result with you before considering the job complete.",
      },
    ],
    related: ["mold-remediation", "sewage-backup-cleanup", "carpet-water-extraction", "flood-damage-cleanup"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/odor-removal.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "commercial-water-damage",
    name: "Commercial Water Damage",
    category: "property-claims",
    status: "PUBLISHED",
    seoTitle: "Commercial Water Damage in Houston",
    metaDescription:
      "Commercial water damage restoration in Houston for offices, retail, and rentals. BayouDry connects you with a local contractor to limit downtime.",
    h1: "Commercial Water Damage in Houston",
    answer:
      "Commercial water damage restoration is the rapid response to flooding, leaks, and storm intrusion in offices, retail spaces, restaurants, warehouses, and rental properties — with an emphasis on limiting downtime. Your restoration contractor works around your operations to extract water, dry the structure, and document everything for your records.",
    intro: [
      "A flooded office on a Monday morning, a restaurant with water under the dining room, a warehouse near the Ship Channel taking storm water, a burst pipe in a multi-tenant building — commercial water damage in Houston is measured in downtime as well as dollars. Every hour closed is revenue lost, and tenants, customers, and employees all need answers fast.",
      "Commercial restoration is phased around your business: work zones keep unaffected areas operational, disruptive steps are scheduled after hours where possible, and documentation is built for business interruption claims from the start. BayouDry connects you with a local restoration contractor experienced in commercial properties — one who understands that getting you back open is the job, not just getting you dry.",
    ],
    signs: [
      {
        title: "A leak or flood in a tenant space",
        body: "Water in one unit affects neighbors, common areas, and the building's systems. Multi-tenant properties need coordinated response, not piecemeal fixes.",
      },
      {
        title: "Storm water entered the building",
        body: "Houston storms push water into lobbies, ground-floor retail, and loading docks. Storm water is treated as contaminated, which changes the handling.",
      },
      {
        title: "A burst pipe or failed water heater",
        body: "Commercial buildings concentrate risk — large water heaters, long pipe runs, sprinkler systems. One failure can affect multiple floors.",
      },
      {
        title: "Sprinkler malfunction or accidental discharge",
        body: "A discharged sprinkler head releases a large volume fast. The water is clean, but the volume and spread demand professional extraction and drying.",
      },
      {
        title: "Recurring moisture in a commercial building",
        body: "Chronic dampness in a building — around foundations, in basements, near loading areas — signals a systemic issue that needs professional assessment.",
      },
    ],
    process: [
      {
        title: "Rapid assessment and triage",
        body: "The contractor assesses the full extent, identifies what threatens operations most, and sequences the work to protect revenue first.",
      },
      {
        title: "Phased extraction and drying",
        body: "Water is extracted and drying equipment is placed in zones, so unaffected areas of the business stay operational during remediation.",
      },
      {
        title: "Content and inventory protection",
        body: "Inventory, equipment, electronics, and documents are moved, protected, or inventoried — with a record suitable for insurance.",
      },
      {
        title: "Documentation and handoff",
        body: "Moisture readings, photos, work logs, and equipment records are compiled into a file built for commercial and business interruption claims.",
      },
    ],
    costFactors: [
      "The size of the affected commercial space",
      "Operational impact — phased work around your business versus full shutdown",
      "The type of finishes and contents involved",
      "After-hours or weekend scheduling needs",
      "Documentation required for business interruption claims",
    ],
    diy: {
      safe: [
        "Shut off the water source if it is safe and accessible",
        "Move inventory, electronics, and documents away from water",
        "Photograph everything for insurance and landlord records",
        "Notify your property manager and insurer promptly",
        "Keep staff and customers away from wet areas",
      ],
      stop: [
        "Do not let employees handle contaminated water — standing water may be unsafe",
        "Do not reopen wet areas to customers before they are verified dry",
        "Do not delay documentation — commercial claims need thorough records",
        "Do not run the HVAC over wet commercial spaces without assessment",
        "Do not attempt large-scale extraction with consumer equipment",
      ],
    },
    faqs: [
      {
        q: "How do you minimize disruption to our business?",
        a: "Work is phased — your contractor dries and restores in zones so unaffected areas stay operational, and schedules disruptive steps around your hours where possible.",
      },
      {
        q: "Can you work after hours?",
        a: "Yes. Commercial restoration is routinely scheduled evenings and weekends to avoid business disruption — discuss timing with your contractor during the assessment.",
      },
      {
        q: "What documentation will we receive?",
        a: "Moisture readings, photos, a record of the work performed, and equipment logs — the paper trail your insurer and property manager expect for a commercial claim.",
      },
    ],
    related: ["emergency-water-extraction", "structural-drying-dehumidification", "insurance-claims-documentation", "sewage-backup-cleanup"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/commercial-water-damage.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "insurance-claims-documentation",
    name: "Insurance Claims Documentation",
    category: "property-claims",
    status: "PUBLISHED",
    seoTitle: "Insurance Claims Documentation in Houston",
    metaDescription:
      "Insurance claims documentation for water damage in Houston. BayouDry connects you with a contractor who documents damage for your claim.",
    h1: "Insurance Claims Documentation in Houston",
    answer:
      "Insurance claims documentation is the thorough recording of water damage — photos, moisture readings, material inventories, and work logs — that supports your homeowners or commercial claim. Your restoration contractor documents the damage and the remediation in the format adjusters expect, so your claim moves faster.",
    intro: [
      "After a Houston storm or a burst pipe, the difference between a smooth claim and a denied one is usually documentation. Adjusters decide based on evidence: dated photos, moisture readings, room-by-room scopes of damaged materials, and logs of the mitigation work. Homeowners who start cleanup without recording anything often discover too late that the proof is gone.",
      "BayouDry connects you with a local restoration contractor who builds your claim file as the work happens — documenting the damage before mitigation, the moisture levels during drying, and the full scope of what must be repaired. The contractor is not a public adjuster and does not negotiate with your insurer; they produce the professional evidence that you, your adjuster, or your public adjuster work from.",
    ],
    signs: [
      {
        title: "You are about to file a water damage claim",
        body: "Documentation starts before mitigation, not after. A contractor records the damage in its original state — the evidence your claim depends on.",
      },
      {
        title: "An adjuster is scheduled to visit",
        body: "A professional documentation package gives the adjuster everything needed to scope the loss accurately on the first visit.",
      },
      {
        title: "A previous claim was underpaid or denied",
        body: "Many denials and underpayments come down to insufficient evidence of the damage's extent. Professional documentation supports appeals and supplemental claims.",
      },
      {
        title: "Damage spans multiple rooms or systems",
        body: "Multi-room losses are hard to document completely on your own. A contractor inventories each area systematically.",
      },
      {
        title: "You need a professional scope of work",
        body: "A line-by-line scope of damaged materials and required repairs is the foundation of any serious claim — and of any contractor bid that follows.",
      },
    ],
    process: [
      {
        title: "Full damage documentation",
        body: "Dated photos and video capture every affected area before mitigation begins, preserving the evidence in its original state.",
      },
      {
        title: "Moisture mapping and readings",
        body: "Meter readings and thermal imaging document exactly what is wet — objective data an adjuster can verify.",
      },
      {
        title: "Detailed scope of work",
        body: "A room-by-room scope lists damaged materials and required repairs, with contents inventoried where applicable.",
      },
      {
        title: "Claim-ready file handoff",
        body: "Photos, readings, scope, work logs, and receipts are organized into a file built for adjusters — and for supplements if the first estimate falls short.",
      },
    ],
    costFactors: [
      "The extent and complexity of the damage",
      "The number of rooms, systems, and contents involved",
      "Contents inventory — individual item documentation for larger losses",
      "New claim versus supplemental documentation for an existing claim",
      "Coordination needed with your adjuster",
    ],
    diy: {
      safe: [
        "Photograph and video everything before moving or discarding anything",
        "Keep a written timeline — when you discovered the damage, what you did",
        "Save receipts for emergency expenses like tarping or water shutoff",
        "Make a room-by-room list of damaged items",
        "Keep samples of damaged materials like flooring or drywall",
      ],
      stop: [
        "Do not discard damaged items before the adjuster documents them",
        "Do not start permanent repairs before documenting — emergency mitigation is fine, rebuilds wait",
        "Do not sign anything from the insurer you do not understand",
        "Do not exaggerate damage — it undermines legitimate claims",
        "Do not assume the first adjuster estimate is final — supplements are common",
      ],
    },
    faqs: [
      {
        q: "Is the contractor the same as a public adjuster?",
        a: "No. Your restoration contractor documents the damage and the work performed; a public adjuster negotiates with the insurer on your behalf. The contractor's documentation is what both you and any adjuster work from.",
      },
      {
        q: "What does claim-ready documentation include?",
        a: "Dated photos and video, moisture meter readings, a room-by-room scope of damaged materials, equipment and work logs, and receipts — organized so an adjuster can verify the loss efficiently.",
      },
      {
        q: "Can documentation help if my claim was already denied?",
        a: "Often. Many denials and underpayments come down to insufficient evidence of the damage's extent. A professional documentation package supports appeals and supplemental claims — though outcomes always depend on your policy.",
      },
    ],
    related: ["flood-damage-cleanup", "burst-pipe-water-damage", "commercial-water-damage", "roof-leak-water-damage"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/insurance-claims-documentation.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "roof-leak-water-damage",
    name: "Roof Leak Water Damage",
    category: "property-claims",
    status: "PUBLISHED",
    seoTitle: "Roof Leak Water Damage in Houston",
    metaDescription:
      "Roof leak water damage repair in Houston after storms and hurricanes. BayouDry connects you with a local contractor to find the leak and fix the damage.",
    h1: "Roof Leak Water Damage in Houston",
    answer:
      "Roof leak water damage is the interior destruction caused when a compromised roof lets rain inside — stained ceilings, soaked insulation, warped decking, and mold in the attic. In Houston, hurricanes, tropical storms, and hail punish roofs; your restoration contractor dries the interior damage and documents it while a roofer addresses the roof itself.",
    intro: [
      "Houston roofs take a beating. Hurricanes and tropical storms drive rain sideways under shingles, hail bruises and cracks them, and the metro's intense downpours exploit every weak flashing and worn seal. Water that enters at the roofline rarely drips straight down — it runs along rafters and decking, soaks insulation, and appears as a stain rooms away from the actual breach.",
      "Two trades, one sequence: the roofer fixes the roof, and the restoration contractor handles everything the water did inside — drying the attic and cavities, removing ruined drywall and insulation, preventing mold, and documenting the damage for insurance. BayouDry connects you with a local restoration contractor for the interior side, sequenced so drying starts now instead of waiting on the roofing schedule.",
    ],
    signs: [
      {
        title: "Water stains on ceilings after rain",
        body: "Stains that appear or darken after storms mark active intrusion. The stain is the endpoint — the wet area above it is larger.",
      },
      {
        title: "Dripping during heavy storms",
        body: "Active dripping means the breach is open now. Contain the drip, protect what is below, and call — interior drying should not wait for the roofer.",
      },
      {
        title: "Musty smell in the attic",
        body: "Attic odor means moisture has been entering for a while — wet insulation, damp decking, and likely mold growth.",
      },
      {
        title: "Missing or damaged shingles after a storm",
        body: "Visible roof damage after a Houston storm almost always means interior water followed. Check ceilings and the attic, not just the roof.",
      },
      {
        title: "A previous roof repair that still leaks inside",
        body: "If the roof was patched but interior stains keep growing, either the breach was missed or the interior was never dried. Both need addressing.",
      },
    ],
    process: [
      {
        title: "Interior damage assessment",
        body: "The contractor maps interior moisture with meters and thermal imaging, tracing the water path back toward the roof breach.",
      },
      {
        title: "Emergency interior protection",
        body: "Active drips are contained, vulnerable contents are protected, and the area is stabilized while the roofing repair is scheduled.",
      },
      {
        title: "Drying the attic and cavities",
        body: "Wet insulation is removed where needed, and the attic, decking, and wall cavities are dried with targeted equipment.",
      },
      {
        title: "Interior restoration and documentation",
        body: "Ruined drywall and insulation are replaced, and the full scope is documented for the insurance claim tied to the storm event.",
      },
    ],
    costFactors: [
      "How far the water traveled inside before discovery",
      "Attic impact — insulation, decking, and framing condition",
      "The number of rooms with interior damage",
      "Mold treatment needs in the attic or wall cavities",
      "Coordination timing with the roofing repair",
    ],
    diy: {
      safe: [
        "Place buckets under active drips and move valuables",
        "Photograph stains and damage after each storm",
        "Check the attic for daylight through the roof boards — from a safe position",
        "Note which storms caused the leak — dates help insurance claims",
        "Keep gutters clear so water sheds properly",
      ],
      stop: [
        "Do not climb on a wet or storm-damaged roof yourself",
        "Do not ignore a small stain — roof leaks worsen with every storm",
        "Do not let interior damage sit while waiting on the roofer — dry it now",
        "Do not seal the interior before the roof is fixed — trapped water breeds mold",
        "Do not assume one stain means one leak — water travels along framing",
      ],
    },
    faqs: [
      {
        q: "Do you fix the roof too?",
        a: "Your restoration contractor handles the interior water damage — drying, drywall, insulation, and mold prevention. The roof repair itself is a roofer's trade; the two are sequenced so the interior is dried and protected while the roof gets fixed.",
      },
      {
        q: "Why does the stain appear far from the actual leak?",
        a: "Water runs along rafters, decking, and framing before dripping down — often many feet from where it entered. Moisture meters and attic inspection trace it back to the source.",
      },
      {
        q: "Is roof leak damage covered by insurance?",
        a: "Sudden storm damage to the roof and the resulting interior water damage are typically covered; gradual wear and neglected maintenance usually are not. Document each storm event and the damage that followed.",
      },
    ],
    related: ["drywall-ceiling-restoration", "moisture-detection-inspection", "structural-drying-dehumidification", "insurance-claims-documentation"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/roof-leak-water-damage.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "appliance-leak-cleanup",
    name: "Appliance Leak Cleanup",
    category: "property-claims",
    status: "PUBLISHED",
    seoTitle: "Appliance Leak Cleanup in Houston",
    metaDescription:
      "Appliance leak cleanup in Houston — water heaters, washers, dishwashers, and ice makers. BayouDry connects you with a local restoration contractor.",
    h1: "Appliance Leak Cleanup in Houston",
    answer:
      "Appliance leak cleanup is the extraction, drying, and restoration after a water heater, washing machine, dishwasher, refrigerator ice maker, or AC drain line fails. These slow leaks hide behind and under appliances — your restoration contractor finds the full extent, dries it, and repairs the damage.",
    intro: [
      "The most common water damage in Houston homes does not come from storms — it comes from appliances. Clogged AC condensate drain lines are the metro's signature slow leak: the long cooling season grows algae in drain lines, the overflow pan spills, and water runs into ceilings and walls for weeks. Behind them come water heater failures, burst washing machine hoses, dishwasher leaks, and ice maker supply lines.",
      "Slow leaks are deceptive precisely because they are slow — soaking subfloors, cabinets, and wall cavities long before anyone notices a puddle. By the time you see damage, the hidden damage is usually larger. BayouDry connects you with a local restoration contractor who pulls the appliance, maps the moisture, dries what is wet, and repairs floors, walls, and cabinets.",
    ],
    signs: [
      {
        title: "Water pooling around an appliance",
        body: "Recurring puddles near the washer, dishwasher, fridge, or water heater mean an active leak — not condensation, not a one-time spill.",
      },
      {
        title: "A musty smell near the laundry or kitchen",
        body: "Odor around appliances signals moisture trapped behind or beneath them, often with mold already growing in the hidden space.",
      },
      {
        title: "Warped flooring in front of the dishwasher or fridge",
        body: "Buckling or discolored flooring at the appliance's edge marks water migrating out from underneath — the damage under the unit is worse.",
      },
      {
        title: "The water heater is rusting or dripping",
        body: "Rust streaks, a dripping relief valve, or water at the base mean the tank is failing. Water heaters rarely leak a little for long.",
      },
      {
        title: "AC drain line backing up or overflowing the pan",
        body: "Water in the emergency drain pan or overflowing it means the primary line is clogged — a Houston classic that floods ceilings if ignored.",
      },
    ],
    process: [
      {
        title: "Source identification and shutoff",
        body: "The contractor identifies which appliance or line failed and confirms the water supply is shut off before work begins.",
      },
      {
        title: "Extraction and appliance area access",
        body: "Standing water is extracted, and the appliance is pulled out so the hidden area behind and beneath it can be assessed.",
      },
      {
        title: "Hidden moisture drying",
        body: "Moisture meters map the full extent — subfloor, cabinets, wall cavities — and targeted drying brings everything back to its dry standard.",
      },
      {
        title: "Repair and prevention advice",
        body: "Damaged flooring, drywall, and cabinetry are repaired, and the contractor advises on prevention — drain line maintenance, hose upgrades, pan alarms.",
      },
    ],
    costFactors: [
      "How long the leak ran undetected",
      "How far the water traveled — subfloor, cabinets, and wall cavities",
      "The type of flooring affected",
      "Mold growth behind or under the appliance",
      "Appliance replacement itself, which is a separate trade",
    ],
    diy: {
      safe: [
        "Shut off the appliance's water supply valve",
        "Turn off power to the appliance if water reached electrical parts",
        "Mop up visible water and pull the appliance out if you can do so safely",
        "Check and clear your AC condensate drain line regularly — algae clogs are common in Houston",
        "Replace rubber washing machine hoses with braided steel lines",
      ],
      stop: [
        "Do not ignore a small puddle that keeps coming back",
        "Do not run a leaking dishwasher or washing machine one more time",
        "Do not push the appliance back before the area behind it is dry",
        "Do not assume the floor under the appliance is fine — check it",
        "Do not use the appliance again until the leak source is fixed",
      ],
    },
    faqs: [
      {
        q: "What is the most common appliance leak in Houston?",
        a: "Clogged AC condensate drain lines — Houston's long cooling season grows algae in drain lines, and the overflow pan eventually spills into ceilings and walls. Water heater failures and washing machine hoses are close behind.",
      },
      {
        q: "Can a slow appliance leak really cause major damage?",
        a: "Yes — slow leaks are often worse than sudden ones because they soak subfloors, cabinets, and wall cavities for weeks before anyone notices. By the time you see damage, the hidden damage is usually larger.",
      },
      {
        q: "Do you replace the appliance?",
        a: "No — your restoration contractor handles the water damage: extraction, drying, and repair of floors, walls, and cabinets. Appliance repair or replacement is a separate trade, sequenced after the area is dry.",
      },
    ],
    related: ["emergency-water-extraction", "moisture-detection-inspection", "structural-drying-dehumidification", "burst-pipe-water-damage"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/appliance-leak-cleanup.jpg",
    updated: "2026-10-13",
  },
]
