import type { Service, ServiceCategory } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "emergency-response",
    name: "Emergency Response",
    blurb:
      "When water is spreading, every hour matters. Emergency extraction, flood cleanup, sewage backup, and burst-pipe response from local Houston restoration contractors.",
    photo: "/photos/cat-emergency-response.jpg",
  },
  {
    slug: "drying-mitigation",
    name: "Drying & Mitigation",
    blurb:
      "Standing water is only half the problem. Professional structural drying, dehumidification, hardwood floor drying, and moisture detection stop damage from spreading behind walls and under floors.",
    photo: "/photos/cat-drying-mitigation.jpg",
  },
  {
    slug: "repair-restoration",
    name: "Repair & Restoration",
    blurb:
      "After the water is gone, the rebuild begins. Drywall and ceiling repair, carpet extraction, mold remediation, and odor removal return your property to its pre-loss condition.",
    photo: "/photos/cat-repair-restoration.jpg",
  },
  {
    slug: "property-claims",
    name: "Property & Claims",
    blurb:
      "Water damage is rarely just one problem. Commercial properties, roof leaks, appliance failures, and the insurance documentation that ties a claim together.",
    photo: "/photos/cat-property-claims.jpg",
  },
];

const TIMELINE_URGENT = ["Right now", "Within 24 hours", "Within a few days"];
const TIMELINE_STANDARD = ["As soon as possible", "Within a month", "Just planning ahead"];

export const services: Service[] = [
  {
    slug: "emergency-water-extraction",
    name: "Emergency Water Extraction",
    category: "emergency-response",
    status: "PUBLISHED",
    seoTitle: "Emergency Water Extraction in Houston",
    metaDescription:
      "Emergency water extraction in Houston for burst pipes, floods, and storm damage. BayouDry connects you with a local restoration contractor for rapid response.",
    h1: "Emergency Water Extraction in Houston",
    answer:
      "Emergency water extraction is the rapid removal of standing water from a home or business using professional pumps and extractors. When water is actively spreading — from a burst pipe, a failed water heater, or storm intrusion — your restoration contractor removes the water first, because every hour of standing water means deeper damage to floors, walls, and belongings.",
    intro: [
      "Water does not wait in Houston. A supply line lets go in a Heights bungalow, a water heater fails in a Katy garage, or a tropical storm pushes water under the doors — and on flat ground over expansive clay soil, it has nowhere to drain. It sits, spreads, and soaks into everything it touches.",
      "BayouDry connects you with a local restoration contractor who treats extraction as the emergency it is: standing water comes out with professional-grade equipment, the source gets identified and stopped, and moisture mapping begins so the drying that follows targets the real problem. Extraction always comes before drying and repair — nothing else works until the water is out.",
    ],
    signs: [
      {
        title: "Standing water on the floor",
        body: "Any amount of standing water — from a thin sheet to several inches — needs professional extraction. Household mops and wet-vacs cannot keep pace with real flooding.",
      },
      {
        title: "A pipe, water heater, or appliance is actively leaking",
        body: "If the source is still flowing, shut off the main water valve first, then call. A contractor stops the damage from growing while extraction begins.",
      },
      {
        title: "Storm water is coming inside",
        body: "Tropical storms and hurricanes push water into Houston homes through doors, windows, and slab edges. Storm water is treated as contaminated, which changes how it is handled.",
      },
      {
        title: "Ceilings are sagging or dripping",
        body: "A sagging ceiling means water is pooling above it — in an attic, a wall cavity, or an upstairs floor. It can come down all at once; keep the area clear and call.",
      },
      {
        title: "A previous leak left hidden moisture",
        body: "Warped baseboards, a musty smell, or paint bubbling weeks after a leak all point to water that was never extracted. A contractor finds what is still wet and finishes the job.",
      },
    ],
    process: [
      {
        title: "Water shutoff and safety check",
        body: "The contractor helps confirm the water source is stopped and checks for electrical hazards before anyone steps into the wet area.",
      },
      {
        title: "Standing water extraction",
        body: "Truck-mounted or portable extractors and submersible pumps remove standing water far faster and more completely than consumer equipment.",
      },
      {
        title: "Removal of unsalvageable materials",
        body: "Carpet pad, saturated drywall sections, and swollen baseboards that cannot be restored are removed so they do not hold moisture against the structure.",
      },
      {
        title: "Moisture mapping and drying plan",
        body: "Moisture meters map exactly what is wet — walls, subfloor, framing — and the contractor sets up the drying phase based on real readings, not guesswork.",
      },
    ],
    costFactors: [
      "The volume of water and the square footage affected",
      "How long the water sat before extraction began",
      "The types of materials involved — carpet and pad versus hardwood or tile",
      "The water category — clean water, storm runoff, or sewage each require different handling",
      "Access and timing — multi-story homes or after-hours emergencies",
    ],
    diy: {
      safe: [
        "Shut off the main water valve if a pipe or fixture is the source",
        "Turn off power to wet areas at the breaker if you can do so without entering standing water",
        "Move small valuables, electronics, and rugs out of the water's path",
        "Take photos and video of the damage before anything is moved",
        "Open interior doors to improve airflow once the water source is stopped",
      ],
      stop: [
        "Do not enter standing water that may contact electrical outlets or appliances",
        "Do not use a household wet-vac on sewage or storm runoff",
        "Do not pull up carpet or cut into walls — hidden hazards include wiring and mold",
        "Do not delay calling a contractor; damage compounds every hour",
        "Do not throw away damaged items before documenting them for insurance",
      ],
    },
    faqs: [
      {
        q: "How quickly does standing water need to be removed?",
        a: "Immediately. The longer water sits, the deeper it penetrates floors, drywall, and framing — and the greater the risk of secondary issues like mold. Extraction is always the first step, before any drying or repair.",
      },
      {
        q: "Can I use my own wet vacuum or pumps?",
        a: "A household wet-vac handles minor spills but cannot keep pace with real flooding or extract water trapped in carpet pad and subfloor. Professional extractors remove far more water, which is what makes the drying phase actually work.",
      },
      {
        q: "What happens after the water is extracted?",
        a: "Extraction is step one. Your contractor then maps moisture with meters, sets up air movers and dehumidifiers, and removes materials that cannot be saved — the full drying process follows.",
      },
    ],
    related: ["flood-damage-cleanup", "burst-pipe-water-damage", "structural-drying-dehumidification", "moisture-detection-inspection"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/emergency-water-extraction.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "flood-damage-cleanup",
    name: "Flood Damage Cleanup",
    category: "emergency-response",
    status: "PUBLISHED",
    seoTitle: "Flood Damage Cleanup in Houston",
    metaDescription:
      "Flood damage cleanup in Houston after hurricanes, tropical storms, and bayou flooding. BayouDry connects you with a local contractor for extraction and drying.",
    h1: "Flood Damage Cleanup in Houston",
    answer:
      "Flood damage cleanup is the professional removal of storm water — from hurricanes, tropical storms, bayou overflow, or extreme rainfall — from a Houston property, followed by drying, sanitizing, and restoration. Floodwater is treated as contaminated: your restoration contractor extracts it, removes what it ruined, and dries the structure to prevent mold.",
    intro: [
      "Houston knows floods. Harvey, Imelda, Beryl, and the unnamed downpours in between have taught the metro that flat topography and clay soil turn heavy rain into standing water, and that bayous — Buffalo, Brays, White Oak — overtop their banks with little warning. Slab-on-grade homes, which most of Houston is built on, take water straight across the floor.",
      "Floodwater is never just water. Street and bayou runoff carries sewage, fuel, pesticides, and debris, which is why professionals treat it as contaminated from the first minute. BayouDry connects you with a local restoration contractor who extracts the water, removes flood-damaged materials, sanitizes what remains, and dries the structure in Houston's humid climate — where mold follows unfinished drying fast.",
    ],
    signs: [
      {
        title: "Storm water entered the home",
        body: "Water that came in during a storm — through doors, windows, or up from the slab — needs professional handling. It is contaminated until proven otherwise.",
      },
      {
        title: "The bayou or street flooded nearby",
        body: "If the street or a nearby bayou flooded, assume the water that reached your home carried contaminants. Keep people and pets out of it.",
      },
      {
        title: "Floodwater smells or looks dirty",
        body: "Discoloration, debris, or a foul smell confirms contamination. Do not attempt cleanup yourself — this is a job for protective equipment and professional disposal.",
      },
      {
        title: "Drywall is wet above the baseboards",
        body: "Flood lines on drywall mark how high the water reached. Wet drywall and the insulation behind it usually must be removed, not dried in place.",
      },
      {
        title: "Previous flood damage was never fully dried",
        body: "Homes that flooded before and were only surface-cleaned often harbor mold in walls and under flooring. A contractor assesses what the last event left behind.",
      },
    ],
    process: [
      {
        title: "Safety assessment and water categorization",
        body: "The contractor assesses hazards — electrical, structural, contamination — and categorizes the water to determine the remediation approach.",
      },
      {
        title: "Contaminated water extraction",
        body: "Floodwater is extracted with professional equipment, with containment and protective measures appropriate for contaminated water.",
      },
      {
        title: "Removal of flood-damaged materials",
        body: "Drywall, insulation, carpet and pad, and cabinetry that contacted floodwater are removed and disposed of — they cannot be restored once contaminated.",
      },
      {
        title: "Drying, sanitizing, and verification",
        body: "The remaining structure is dried with commercial equipment, sanitized, and verified with moisture readings before any rebuild begins.",
      },
    ],
    costFactors: [
      "The depth of the water and the number of rooms affected",
      "How much drywall, insulation, flooring, and cabinetry must be removed",
      "The contamination level — bayou and street runoff requires fuller remediation",
      "Drying time in Houston's humid climate",
      "Content handling — cleaning salvageable belongings versus discarding what cannot be saved",
    ],
    diy: {
      safe: [
        "Stay out of floodwater — it may contain sewage, chemicals, or hidden hazards",
        "Turn off electricity and gas if water reached outlets, appliances, or the panel area",
        "Photograph everything for insurance before cleanup begins",
        "Move undamaged valuables to higher ground if it is safe to do so",
        "Contact your insurer promptly — flood claims have documentation requirements",
      ],
      stop: [
        "Do not wade into floodwater to save belongings",
        "Do not assume the water is clean — street and bayou runoff is contaminated",
        "Do not run the HVAC system until the ductwork has been checked",
        "Do not wait for it to dry on its own — it will not, and mold follows",
        "Do not discard flood-damaged items before your adjuster documents them",
      ],
    },
    faqs: [
      {
        q: "Is floodwater dangerous?",
        a: "Yes — treat it as contaminated. Street and bayou runoff can carry sewage, fuel, pesticides, and debris. Keep people and pets out of it, and let a professional handle extraction and sanitizing.",
      },
      {
        q: "Does homeowners insurance cover flood damage?",
        a: "Standard homeowners policies typically exclude damage from rising water; separate flood insurance, often through the NFIP, covers it. Document everything and check your policies before assuming either way.",
      },
      {
        q: "How long until my home is livable again?",
        a: "It depends on the water depth, contamination, and how much material must be removed. Your contractor assesses the damage and gives you a realistic sequence — extraction, drying, then rebuild.",
      },
    ],
    related: ["emergency-water-extraction", "sewage-backup-cleanup", "structural-drying-dehumidification", "mold-remediation"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/flood-damage-cleanup.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "sewage-backup-cleanup",
    name: "Sewage Backup Cleanup",
    category: "emergency-response",
    status: "PUBLISHED",
    seoTitle: "Sewage Backup Cleanup in Houston",
    metaDescription:
      "Sewage backup cleanup in Houston by local restoration contractors. Safe black-water extraction, contaminated-material removal, and disinfection.",
    h1: "Sewage Backup Cleanup in Houston",
    answer:
      "Sewage backup cleanup is the professional remediation of black water — Category 3 water carrying bacteria and pathogens — after a drain backup, toilet overflow, or storm-driven sewer intrusion. Your restoration contractor extracts the sewage, removes contaminated materials, disinfects, and dries the structure.",
    intro: [
      "Houston's heavy downpours can overwhelm municipal sewer lines and push sewage into low-lying homes, especially in older neighborhoods like the Heights and Montrose where clay pipes and root intrusion are common. Shifting clay soil cracks lines over time, and one bad storm is all it takes for black water to come up through tubs, showers, and floor drains.",
      "What comes up is not just dirty water — it is a genuine health hazard that contaminates everything porous it touches: carpet, drywall, insulation, and belongings. BayouDry connects you with a local restoration contractor who treats a backup like the hazard it is: extraction with professional equipment, removal of what cannot be restored, disinfection of what can, and structural drying so mold does not follow the sewage.",
    ],
    signs: [
      {
        title: "Drains backing up with dark or foul water",
        body: "Water rising in tubs, showers, or floor drains — especially dark or foul-smelling — is a sewage backup until proven otherwise. Stop using the plumbing and call.",
      },
      {
        title: "A sewage smell followed heavy rain",
        body: "Houston downpours can overwhelm sewer lines and push sewage into homes. If the smell arrived with the storm, treat it as contamination.",
      },
      {
        title: "A toilet or tub overflowed",
        body: "Overflows past the bowl contaminate flooring and baseboards. What looks like a small spill often reaches the subfloor and wall cavities.",
      },
      {
        title: "Gurgling drains throughout the house",
        body: "Gurgling from multiple fixtures at once usually signals a main-line problem, not a single clogged drain. Do not keep running water to test it.",
      },
      {
        title: "A previous backup was only surface-cleaned",
        body: "Lingering odor after a past backup means contamination was missed — often in wall cavities, under flooring, or in the HVAC. Professional remediation finds it.",
      },
    ],
    process: [
      {
        title: "Stop the source and contain",
        body: "All plumbing use stops, the affected area is contained, and the contractor identifies whether the cause is a blockage, a broken line, or storm-driven intrusion.",
      },
      {
        title: "Black-water extraction",
        body: "Standing sewage is extracted with professional equipment under containment, with protective measures appropriate for Category 3 water.",
      },
      {
        title: "Removal of contaminated materials",
        body: "Porous materials that contacted sewage — carpet and pad, affected drywall, insulation — are removed, bagged, and disposed of as contaminated waste.",
      },
      {
        title: "Disinfection and structural drying",
        body: "All remaining surfaces are disinfected with professional-grade products, then the structure is dried and verified with moisture readings.",
      },
    ],
    costFactors: [
      "How much of the property the sewage reached and how long it sat",
      "How much drywall, insulation, flooring, or cabinetry must be removed",
      "How long the sewage sat before cleanup began",
      "Drying needs in Houston's humid conditions, where mold follows quickly",
      "Content handling — cleaning salvageable belongings versus discarding contaminated items",
    ],
    diy: {
      safe: [
        "Stop using all plumbing — sinks, toilets, showers",
        "Keep people and pets away from the affected area",
        "Turn off the HVAC if sewage reached vents or the air handler",
        "Photograph the damage for insurance",
        "Open windows for ventilation if the weather allows",
      ],
      stop: [
        "Do not touch or wade in sewage — it is a genuine health hazard",
        "Do not mop it up and call it done — contamination hides in porous materials",
        "Do not use household fans to dry sewage — they spread contaminants",
        "Do not flush or run water to test the drains",
        "Do not delay — bacteria multiply and odor sets into materials",
      ],
    },
    faqs: [
      {
        q: "Is sewage backup covered by insurance?",
        a: "Standard policies often exclude it unless you carry a water-backup endorsement. Check your policy — and get documentation from your contractor either way, since the claim process needs it.",
      },
      {
        q: "Can anything be saved after a sewage backup?",
        a: "Hard, non-porous surfaces can usually be disinfected. Porous materials that contacted sewage — carpet and pad, affected drywall, insulation — must be removed. Your contractor makes the call item by item.",
      },
      {
        q: "How do I know if it is really sewage?",
        a: "Dark color, foul odor, or origin from a drain, toilet, or sewer line all point to black water. When in doubt, treat it as a hazard and let a specialist assess it.",
      },
    ],
    related: ["emergency-water-extraction", "flood-damage-cleanup", "odor-removal", "mold-remediation"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/sewage-backup-cleanup.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "burst-pipe-water-damage",
    name: "Burst Pipe Water Damage",
    category: "emergency-response",
    status: "PUBLISHED",
    seoTitle: "Burst Pipe Water Damage in Houston",
    metaDescription:
      "Burst pipe water damage in Houston — a legacy of the 2021 freeze and aging plumbing. BayouDry connects you with a local contractor to stop the water.",
    h1: "Burst Pipe Water Damage in Houston",
    answer:
      "Burst pipe water damage is the flooding that follows when a supply pipe ruptures — releasing large volumes of water into walls, ceilings, and floors. In Houston, Winter Storm Uri in 2021 burst pipes across the metro; aging copper and galvanized lines, slab leaks, and attic pipes exposed to cold snaps still fail today. Your restoration contractor stops the water, extracts it, and dries the structure.",
    intro: [
      "Houston learned about burst pipes the hard way. When Winter Storm Uri knocked out power for days in February 2021, pipes in attics, exterior walls, and unheated garages froze and split across the metro — flooding homes from the Woodlands to Sugar Land. But freezes are not the only cause: aging galvanized lines in older homes, shifting clay soil stressing slab plumbing, and corroded supply lines fail year-round.",
      "A burst pipe does its worst damage out of sight. Water races inside wall cavities, pools above ceilings, and wicks into framing long before it shows on a surface. BayouDry connects you with a local restoration contractor who stops the source, extracts standing and trapped water, opens and dries wall cavities, and verifies moisture levels before any rebuild — because rebuilding over wet framing just hides the next problem.",
    ],
    signs: [
      {
        title: "Water pouring or spraying from a wall or ceiling",
        body: "An active burst is unmistakable. Shut off the main water valve immediately, then call — extraction and drying need to start quickly.",
      },
      {
        title: "A sudden drop in water pressure",
        body: "Pressure that falls off a cliff, especially during or after a freeze, often means a pipe has split somewhere in the system.",
      },
      {
        title: "Wet spots spreading across drywall or ceilings",
        body: "A stain that grows by the hour marks an active leak behind the surface. The visible spot is usually much smaller than the wet area behind it.",
      },
      {
        title: "The water meter runs with everything off",
        body: "A spinning meter with all fixtures closed means water is escaping somewhere — often under the slab or inside a wall.",
      },
      {
        title: "A hissing sound inside a wall",
        body: "Pressurized water escaping through a split pipe hisses. If you hear it, shut off the main valve and call before the wall gives way.",
      },
    ],
    process: [
      {
        title: "Shut off the water",
        body: "The first priority is stopping the flow — the contractor confirms the main valve is closed and the failed section is isolated.",
      },
      {
        title: "Extraction of standing and trapped water",
        body: "Standing water is extracted, and trapped water in wall cavities and ceiling bays is released through controlled openings.",
      },
      {
        title: "Opening and drying wall cavities",
        body: "Wet drywall sections and insulation are removed so air movers and dehumidifiers can dry the framing and interior cavities directly.",
      },
      {
        title: "Moisture verification before rebuild",
        body: "Moisture meters confirm framing, subfloor, and remaining materials are back to their dry standard before any reconstruction begins.",
      },
    ],
    costFactors: [
      "How long the pipe ran before discovery",
      "How far the water traveled — walls, ceilings, and additional floors",
      "The pipe location — slab, attic, or wall — and the access required",
      "The materials affected — drywall, insulation, hardwood, cabinetry",
      "Whether mold treatment is needed after prolonged saturation",
    ],
    diy: {
      safe: [
        "Shut off the main water valve immediately — know where it is before an emergency",
        "Turn off power to affected areas at the breaker",
        "Catch dripping water with buckets and move furniture out of the way",
        "Photograph all damage for insurance",
        "During freezes, open cabinet doors under sinks to let warm air circulate",
      ],
      stop: [
        "Do not ignore a small leak — a pinhole today is a burst pipe tomorrow",
        "Do not cut into walls yourself to find the break",
        "Do not use electrical devices in wet areas",
        "Do not wait until morning if water is actively spreading",
        "Do not run the water heater if its supply line failed",
      ],
    },
    faqs: [
      {
        q: "What should I do first when a pipe bursts?",
        a: "Shut off the main water valve, then turn off power to the affected areas. After that, call a restoration contractor — extraction and drying need to start quickly.",
      },
      {
        q: "Why did Houston pipes burst in 2021 — and could it happen again?",
        a: "Winter Storm Uri knocked out power for days during a hard freeze, and pipes in attics, exterior walls, and unheated spaces froze and split. Any extended freeze with power loss can do it again, which is why knowing your shutoff valve matters.",
      },
      {
        q: "Will insurance cover burst pipe damage?",
        a: "Sudden, accidental pipe bursts are typically covered by homeowners insurance, though gradual leaks from neglected maintenance may not be. Document the damage and the timeline for your claim.",
      },
    ],
    related: ["emergency-water-extraction", "structural-drying-dehumidification", "drywall-ceiling-restoration", "moisture-detection-inspection"],
    timelineOptions: TIMELINE_URGENT,
    photo: "/photos/burst-pipe-water-damage.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "structural-drying-dehumidification",
    name: "Structural Drying & Dehumidification",
    category: "drying-mitigation",
    status: "PUBLISHED",
    seoTitle: "Structural Drying & Dehumidification in Houston",
    metaDescription:
      "Structural drying and dehumidification in Houston to stop hidden moisture behind walls and under floors. BayouDry connects you with a local drying specialist.",
    h1: "Structural Drying & Dehumidification in Houston",
    answer:
      "Structural drying and dehumidification is the controlled removal of moisture from a building's framing, subfloor, drywall, and concrete after water intrusion — using commercial air movers, dehumidifiers, and moisture meters. Surface water is only half the problem; your restoration contractor dries what you cannot see, because trapped moisture leads to mold, rot, and warped materials.",
    intro: [
      "In Houston's climate, air-drying is not a drying plan — it is a mold plan. Humid Gulf air keeps moisture locked inside wall cavities, under slab edges, and in framing long after surfaces feel dry to the touch. Water hides in the places you cannot see: inside walls, beneath flooring, above ceilings, and in the concrete slab itself.",
      "Professional structural drying controls the three variables that actually remove moisture — airflow, temperature, and humidity — and verifies the result with meters, not guesswork. BayouDry connects you with a local water-damage specialist who maps the moisture, places commercial equipment to target it, and monitors daily until materials return to their dry standard.",
    ],
    signs: [
      {
        title: "Surfaces look dry but smell musty",
        body: "A musty smell with dry surfaces is the classic sign of trapped moisture — usually inside a wall cavity, under flooring, or in framing.",
      },
      {
        title: "Baseboards or drywall feel soft or swollen",
        body: "Swollen baseboards and soft drywall mean the material absorbed water and never fully dried. It will not recover on its own.",
      },
      {
        title: "Paint is bubbling or peeling after a leak",
        body: "Bubbling paint marks moisture pushing out from behind the surface. The paint is the symptom; the wet material behind it is the problem.",
      },
      {
        title: "A leak was fixed but the area was never professionally dried",
        body: "Fixing the pipe without drying the structure leaves moisture in cavities and framing. If the repair skipped the drying step, it needs one now.",
      },
      {
        title: "Concrete or slab feels damp weeks later",
        body: "Concrete holds moisture for a long time, especially on Houston's high water table. Damp slab weeks after an event needs professional dehumidification.",
      },
    ],
    process: [
      {
        title: "Moisture mapping",
        body: "Meters and thermal imaging map exactly what is wet and how wet — walls, subfloor, framing, concrete — establishing the baseline for the drying plan.",
      },
      {
        title: "Water extraction first",
        body: "Any remaining standing or trapped water is extracted before drying equipment goes in. Drying cannot outpace an active water source.",
      },
      {
        title: "Targeted drying equipment",
        body: "Commercial air movers, dehumidifiers, and specialty mats are placed to pull moisture from the specific materials and cavities that are wet.",
      },
      {
        title: "Daily monitoring to dry standard",
        body: "Moisture readings are taken daily against the dry standard of unaffected materials. Equipment comes out only when readings confirm the structure is dry.",
      },
    ],
    costFactors: [
      "The volume of trapped moisture and the square footage involved",
      "The materials involved — hardwood, drywall, and concrete each dry differently",
      "How much must be opened for airflow — wall cavities, built-ins, or flooring",
      "Houston's ambient humidity, which extends drying time",
      "The duration of equipment placement and monitoring visits",
    ],
    diy: {
      safe: [
        "Remove wet rugs, cushions, and loose items to speed evaporation",
        "Open interior doors and closets to improve air circulation",
        "Run your air conditioner — it removes humidity as it cools",
        "Wipe down hard surfaces that got splashed",
        "Keep the area clear so the contractor's equipment can be placed effectively",
      ],
      stop: [
        "Do not assume a surface that feels dry is actually dry — moisture hides inside materials",
        "Do not point household fans at wet drywall and walk away — uneven drying warps materials",
        "Do not close up walls or lay new flooring before moisture readings confirm dryness",
        "Do not run a dehumidifier in a sealed room with an active leak",
        "Do not skip the drying step to save time — trapped moisture becomes mold",
      ],
    },
    faqs: [
      {
        q: "How long does structural drying take?",
        a: "Typically several days, depending on the materials, the amount of trapped moisture, and Houston's humidity. Your contractor takes daily moisture readings and removes equipment only when materials reach their dry standard — not before.",
      },
      {
        q: "Why can't I just open the windows and wait?",
        a: "In Houston's humid climate, open windows often add moisture rather than remove it. Professional drying controls temperature, airflow, and humidity together — that combination is what actually pulls water out of structure.",
      },
      {
        q: "What is a dry standard?",
        a: "It is the moisture level of unaffected materials in your home, measured as a baseline. Drying is complete when wet materials return to that baseline — your contractor verifies it with meters, not guesswork.",
      },
    ],
    related: ["emergency-water-extraction", "moisture-detection-inspection", "hardwood-floor-drying", "mold-remediation"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/structural-drying-dehumidification.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "hardwood-floor-drying",
    name: "Hardwood Floor Drying",
    category: "drying-mitigation",
    status: "PUBLISHED",
    seoTitle: "Hardwood Floor Drying in Houston",
    metaDescription:
      "Hardwood floor drying in Houston that saves cupped, buckled floors after leaks and floods. BayouDry connects you with a local restoration contractor.",
    h1: "Hardwood Floor Drying in Houston",
    answer:
      "Hardwood floor drying is the specialized process of saving water-damaged wood floors — cupped, crowned, or buckled planks — using drying mats, targeted dehumidification, and controlled conditions. Fast action matters: your restoration contractor can often dry hardwood in place, avoiding a full tear-out and replacement.",
    intro: [
      "Houston homes carry a lot of wood — oak and pine floors in older neighborhoods, engineered hardwood in newer builds — and wood moves with water. Planks cup when one side absorbs moisture, crown when the top dries faster than the bottom, and buckle when they swell hard enough to lift off the subfloor. A refrigerator line, a dishwasher leak, or a few inches of storm water is all it takes.",
      "The difference between a saved floor and a replaced floor is usually speed and method. Specialty drying mats pull moisture from the wood evenly while dehumidifiers control the room, and the floor is given time to acclimate before anyone decides on refinishing. BayouDry connects you with a local restoration contractor who knows when hardwood can be saved in place — and tells you honestly when it cannot.",
    ],
    signs: [
      {
        title: "Planks are cupping at the edges",
        body: "Cupping — edges higher than the center — is the early, often reversible stage. Controlled drying usually flattens cupped boards back out.",
      },
      {
        title: "Boards are buckling or lifting",
        body: "Buckling means boards have swollen off the subfloor. It is harder to reverse, which is why drying needs to start before cupping becomes buckling.",
      },
      {
        title: "Dark staining or discoloration appeared",
        body: "Dark stains mark where water sat longest. Light staining may sand out; deep staining affects the refinishing decision after drying.",
      },
      {
        title: "The floor feels spongy underfoot",
        body: "A spongy feel means moisture has reached the subfloor, not just the boards. Both layers need drying and verification.",
      },
      {
        title: "Gaps opened between boards after a leak",
        body: "Boards shrink as they dry unevenly, opening gaps. Professional drying controls the process so the floor settles back evenly.",
      },
    ],
    process: [
      {
        title: "Moisture assessment",
        body: "The contractor measures moisture in the boards and the subfloor, and evaluates the type of distortion — cupping, crowning, or buckling.",
      },
      {
        title: "Surface water removal",
        body: "Standing water is extracted from the floor surface and any water trapped beneath is addressed before mat drying begins.",
      },
      {
        title: "Specialty mat drying",
        body: "Drying mats are sealed to the floor and pull moisture evenly from the wood while dehumidifiers control the room's humidity.",
      },
      {
        title: "Acclimation and refinishing decision",
        body: "The floor acclimates after drying, moisture readings confirm the dry standard, and the contractor advises whether refinishing or replacement is the right call.",
      },
    ],
    costFactors: [
      "The square footage of affected flooring",
      "The type of distortion — cupped boards are often salvageable, buckled boards often are not",
      "The type of wood and finish",
      "How long the floor stayed wet before drying began",
      "The condition of the subfloor underneath",
    ],
    diy: {
      safe: [
        "Blot or mop up surface water right away",
        "Remove area rugs so trapped moisture can escape",
        "Run the air conditioner to lower indoor humidity",
        "Keep foot traffic off the wet area",
        "Photograph the damage from multiple angles",
      ],
      stop: [
        "Do not sand or refinish cupped floors before they are fully dry — you will ruin the finish",
        "Do not apply heat directly — heat guns and space heaters crack wood",
        "Do not tear up the floor yourself before a contractor assesses salvageability",
        "Do not let the floor sit wet to see what happens — buckling becomes permanent",
        "Do not stack heavy furniture on drying floors",
      ],
    },
    faqs: [
      {
        q: "Can cupped hardwood floors be saved?",
        a: "Often, yes. Cupping is the wood's response to moisture on one side, and controlled drying usually flattens planks back out. Buckling — where boards lift off the subfloor — is harder to reverse, which is why fast drying matters.",
      },
      {
        q: "How long before I know if the floor is salvageable?",
        a: "Your contractor assesses moisture levels and the type of distortion, then begins drying. Most floors show their trajectory during the drying period — a contractor tells you honestly whether refinishing or replacement is the right call.",
      },
      {
        q: "Will the floor need refinishing after drying?",
        a: "Sometimes. Light water staining may sand out; deep staining or finish damage may require refinishing. Your contractor advises after the floor reaches its dry standard.",
      },
    ],
    related: ["structural-drying-dehumidification", "moisture-detection-inspection", "emergency-water-extraction", "carpet-water-extraction"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/hardwood-floor-drying.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "moisture-detection-inspection",
    name: "Moisture Detection & Inspection",
    category: "drying-mitigation",
    status: "PUBLISHED",
    seoTitle: "Moisture Detection & Inspection in Houston",
    metaDescription:
      "Moisture detection and inspection in Houston finds hidden water behind walls and under slabs. BayouDry connects you with a local specialist for a full survey.",
    h1: "Moisture Detection & Inspection in Houston",
    answer:
      "Moisture detection and inspection is a professional survey of your property using moisture meters, thermal imaging, and hygrometers to find water hiding behind walls, under floors, and above ceilings. Your restoration contractor maps exactly what is wet — so drying targets the real problem instead of guessing.",
    intro: [
      "The most expensive water damage in Houston is the kind nobody sees. A slow supply-line leak inside a wall, AC condensate soaking an attic, storm water wicking up through a slab edge — by the time a stain appears or a smell develops, the hidden damage is usually far larger than the visible sign. Materials feel dry to the touch long before they actually are.",
      "A professional moisture inspection removes the guesswork. Thermal imaging cameras detect the temperature differences moisture creates, non-invasive meters read through surfaces, and pin meters confirm exact readings where it counts. BayouDry connects you with a local water-damage specialist who produces a moisture map of your property — what is wet, how wet, and what needs to happen next.",
    ],
    signs: [
      {
        title: "A musty smell with no visible water",
        body: "Musty odor without a visible source almost always means hidden moisture — in a wall cavity, under flooring, or above a ceiling.",
      },
      {
        title: "Stains appearing on ceilings or walls",
        body: "A new stain marks water's arrival point, not its source. An inspection traces the moisture path back to where it started.",
      },
      {
        title: "Higher-than-normal indoor humidity",
        body: "Persistently humid rooms, fogging windows, or a clammy feel can signal moisture evaporating from hidden wet materials.",
      },
      {
        title: "A leak was repaired but the area was never checked",
        body: "Plumbers fix pipes; they do not map moisture. If a repair never included a drying assessment, an inspection closes the loop.",
      },
      {
        title: "Buying a Houston home and want to check for past water issues",
        body: "In a flood-prone metro, a moisture survey before purchase can reveal past leaks, storm intrusion, or incomplete drying the seller never disclosed.",
      },
    ],
    process: [
      {
        title: "Visual and history review",
        body: "The specialist reviews what happened — the leak, the storm, the stain — and inspects visible conditions before instruments come out.",
      },
      {
        title: "Non-invasive scanning",
        body: "Thermal imaging and non-invasive meters scan walls, floors, and ceilings to locate moisture without opening anything.",
      },
      {
        title: "Pin-meter verification",
        body: "Where scanning finds suspect areas, pin meters confirm exact moisture content — minimal intrusion, maximum certainty.",
      },
      {
        title: "Moisture map and recommendations",
        body: "You receive a map of what is wet and how wet, plus a clear recommendation: what needs drying, what needs removal, and what is fine.",
      },
    ],
    costFactors: [
      "The size of the property or area surveyed",
      "Known-leak follow-up versus an exploratory survey",
      "Access to wall cavities, attics, and crawlspaces",
      "Thermal imaging and the level of technology used",
      "Documentation needed for insurance or real estate",
    ],
    diy: {
      safe: [
        "Note where and when you see stains, smells, or dampness",
        "Check under sinks and around toilets, water heaters, and washing machines regularly",
        "Look at ceilings below bathrooms and kitchens",
        "Keep a photo log of anything that changes over time",
        "Run bathroom exhaust fans to reduce everyday moisture",
      ],
      stop: [
        "Do not cut exploratory holes in walls to check — you may hit wiring or plumbing",
        "Do not rely on touch — materials feel dry long before they are",
        "Do not ignore a musty smell because you cannot see water",
        "Do not paint over stains without finding the moisture source",
        "Do not assume a previous owner's leak was properly dried",
      ],
    },
    faqs: [
      {
        q: "Can you really find water inside walls without opening them?",
        a: "Yes. Thermal imaging cameras detect temperature differences caused by moisture, and non-invasive meters read through surfaces. Pin meters then confirm exact readings where needed — minimal holes, maximum information.",
      },
      {
        q: "When should I get a moisture inspection?",
        a: "After any leak, flood, or storm intrusion — even if things look dry. Also before buying an older Houston home, after noticing musty odors, or when a previous repair never included professional drying.",
      },
      {
        q: "What do I get from the inspection?",
        a: "A moisture map showing exactly what is wet and how wet, plus a clear recommendation: what needs drying, what needs removal, and what is fine. It is also useful documentation for insurance claims.",
      },
    ],
    related: ["structural-drying-dehumidification", "burst-pipe-water-damage", "roof-leak-water-damage", "mold-remediation"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/moisture-detection-inspection.jpg",
    updated: "2026-10-13",
  },
  {
    slug: "drywall-ceiling-restoration",
    name: "Drywall & Ceiling Restoration",
    category: "repair-restoration",
    status: "PUBLISHED",
    seoTitle: "Drywall & Ceiling Restoration in Houston",
    metaDescription:
      "Drywall and ceiling restoration in Houston after leaks, floods, and storms. BayouDry connects you with a local contractor to rebuild damaged walls and ceilings.",
    h1: "Drywall & Ceiling Restoration in Houston",
    answer:
      "Drywall and ceiling restoration is the removal and replacement of water-damaged drywall, insulation, and ceiling materials — then finishing and texturing to match. When water soaks drywall, it loses structural integrity and invites mold; your restoration contractor cuts out what is ruined, dries the cavity, and rebuilds.",
    intro: [
      "Water finds drywall from every direction in Houston. Roof leaks after hurricanes and hailstorms stain ceilings; burst pipes soak walls from the inside; upstairs bathroom leaks drip through to the rooms below; and clogged AC drain lines — one of the metro's most common water sources — overflow pans into attic ceilings. Drywall's paper facing and gypsum core absorb it all.",
      "Saturated drywall cannot simply be dried back to strength — it crumbles, and its paper facing feeds mold. BayouDry connects you with a local restoration contractor who removes what is ruined, dries the cavity behind it, replaces insulation where needed, and rebuilds with texture matched to your existing walls — orange peel, knockdown, or smooth.",
    ],
    signs: [
      {
        title: "Brown or yellow stains on walls or ceilings",
        body: "Water stains mark where moisture traveled. The stain is the endpoint — the wet area behind it is usually larger.",
      },
      {
        title: "Drywall feels soft, swollen, or crumbly",
        body: "Drywall that gives under pressure has lost its integrity. It needs removal, not paint.",
      },
      {
        title: "Paint bubbling or peeling",
        body: "Bubbling paint means moisture is pushing out from behind the surface. Painting over it seals the problem in.",
      },
      {
        title: "A ceiling sagging under trapped water",
        body: "A sagging ceiling is holding water above it. Keep the area clear and call — draining it wrong brings the whole section down.",
      },
      {
        title: "Musty odor near a previously wet wall",
        body: "Odor near a wall that got wet means moisture is still inside the cavity — often in the insulation or on the back of the drywall.",
      },
    ],
    process: [
      {
        title: "Damage assessment and moisture readings",
        body: "The contractor maps the wet area with meters, determines how far the damage extends beyond the visible stain, and identifies the water source.",
      },
      {
        title: "Controlled removal",
        body: "Ruined drywall is cut out in clean sections, and saturated insulation is removed — contained so dust and debris do not spread through the home.",
      },
      {
        title: "Cavity drying and treatment",
        body: "The open cavity is dried with targeted airflow and dehumidification, and framing is checked and treated before anything is closed up.",
      },
      {
        title: "Rebuild, texture, and finish",
        body: "New drywall goes in, insulation is replaced, and texture is matched to the surrounding walls so the repair disappears into the room.",
      },
    ],
    costFactors: [
      "The square footage of drywall affected",
      "How much insulation behind it must also be replaced",
      "Ceiling work versus wall work — ceilings are more labor-intensive",
      "Texture matching — orange peel, knockdown, and smooth finishes differ",
      "The scope of finish work — priming and painting after the rebuild",
    ],
    diy: {
      safe: [
        "Keep the room clear of furniture and valuables",
        "Place a bucket under an actively dripping ceiling",
        "Photograph stains and damage for insurance",
        "Turn off water to the source if the leak is plumbing",
        "Note the stain's location relative to fixtures above — it helps the contractor trace the leak",
      ],
      stop: [
        "Do not poke a sagging ceiling to drain it — trapped water can come down all at once",
        "Do not paint over water stains — the damage underneath continues",
        "Do not leave wet drywall in place hoping it dries — saturated drywall and insulation breed mold",
        "Do not cut out drywall near electrical boxes yourself",
        "Do not ignore a small stain — it often marks a much larger wet area behind the surface",
      ],
    },
    faqs: [
      {
        q: "Can wet drywall be dried instead of replaced?",
        a: "Sometimes, if it got only briefly damp. But drywall that stayed saturated loses strength, and its paper facing feeds mold — in those cases, removal is the right call. Your contractor tests moisture levels and advises honestly.",
      },
      {
        q: "Will the new drywall match the old texture?",
        a: "A good contractor matches common Houston textures — orange peel, knockdown, smooth — so the repair blends in. Ask to see the texture match before final paint.",
      },
      {
        q: "How do you find the leak that caused it?",
        a: "Moisture meters and thermal imaging trace the water path back to its source — a roof leak, a pipe, an AC drain line. Fixing the source comes before any rebuild, or the new drywall gets ruined too.",
      },
    ],
    related: ["burst-pipe-water-damage", "roof-leak-water-damage", "mold-remediation", "structural-drying-dehumidification"],
    timelineOptions: TIMELINE_STANDARD,
    photo: "/photos/drywall-ceiling-restoration.jpg",
    updated: "2026-10-13",
  },
]
