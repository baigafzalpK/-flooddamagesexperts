import type { Article } from "./types";

/**
 * Informational guides for BayouDry Restoration (Houston, TX).
 * Call-brand rules: BayouDry connects homeowners with independent local
 * restoration contractors. The contractor does the work, sets the price,
 * and takes payment — BayouDry does none of those. Never "our technicians",
 * "our crews", or "our trucks". Cost content explains factors only — no
 * dollar figures. Insurance content explains documentation, never promises
 * coverage. Mold content covers process only, never health diagnoses.
 */
export const articles: Article[] = [
  {
    slug: "what-to-do-when-your-house-floods",
    title: "What to Do When Your House Floods: The First 30 Minutes",
    category: "first-steps",
    status: "PUBLISHED",
    seoTitle: "What to Do When Your House Floods: First Steps | BayouDry",
    metaDescription:
      "Flooded home? Safety first: shut off water and power, stop the source, document damage, and call a restoration contractor. The first 30 minutes, step by step.",
    answer:
      "Make the home safe first: shut off the water at the main valve if the source is a leak, and kill power to affected areas at the breaker — never step through standing water to reach either. Then stop the source if you can do it safely, move valuables out of the water, take photos and video of everything, and call your insurer and a water-damage restoration contractor. The faster water extraction begins, the less damage spreads.",
    sections: [
      {
        heading: "Make it safe before you do anything else",
        body: [
          "Water and electricity are a dangerous combination. Before you wade into a flooded room, head to the breaker panel and switch off power to the affected areas. If the panel itself is wet, flooded, or you cannot reach it without walking through water, stop and wait for the power to be cut externally or for professional help.",
          "If the water is coming from inside the house — a burst pipe, failed water heater, or appliance hose — shut off the main water valve. In most Houston homes it is near the street, on an exterior wall, or in the garage. Knowing where yours is before an emergency is one of the simplest things you can do to limit damage.",
          "Once the space is electrically safe, the priority is stopping more water from arriving. That can mean a bucket under an active drip, towels at a doorway, or turning off the valve to a specific fixture. Small actions in the first minutes often prevent a bad situation from becoming a much bigger one.",
        ],
        list: [
          "Kill power to affected areas at the breaker — never walk through water to reach a panel",
          "Shut off the main water valve if the source is a plumbing failure",
          "Keep children and pets out of standing water entirely",
          "If the water smells like sewage or came from a drain, do not enter it at all",
        ],
      },
      {
        heading: "Move valuables and protect what you can",
        body: [
          "Once the scene is safe, move what matters most out of the water: documents, electronics, photos, and anything irreplaceable. Water wicks upward fast — furniture legs, rugs, and boxes on the floor are damaged within minutes, and items a few inches off the floor can be ruined in an hour.",
          "Lift furniture onto blocks, wood shims, or even plastic bins to keep legs out of the water. Pull up small rugs and roll up draperies or curtains so hems stay dry. If you have a wet/dry vacuum, you can start pulling surface water, but do not overexert yourself or risk injury moving heavy saturated furniture alone.",
          "For hardwood floors, start removing surface water with towels or a wet/dry vacuum as soon as it is safe. Hardwood absorbs water quickly and begins cupping within hours, but quick removal meaningfully improves the odds of saving the floor — more on that in our hardwood drying guide.",
        ],
      },
      {
        heading: "Document everything before you clean",
        body: [
          "Before you move or throw away anything, photograph and video the full scene: water lines on walls, soaked flooring, damaged furniture, and the apparent source. Open every affected room and closet. Insurance adjusters and restoration contractors both need this record, and you cannot recreate it after cleanup starts.",
          "Save the photos with timestamps — your phone does this automatically. Keep a running list of damaged items with approximate age and value, and hold onto damaged items until your insurer says you can dispose of them. Bagging wet items for inspection prevents disposal mistakes.",
          "Do not start ripping out drywall, carpet, or flooring yourself unless the contractor directs you to. Unnecessary demolition can complicate an insurance claim, and opening walls without knowing where the moisture is often makes the problem harder to map.",
        ],
        list: [
          "Photo and video every affected area before moving anything",
          "List damaged items with approximate age and value",
          "Keep damaged items until your insurer releases them",
          "Do not tear out materials on your own before the assessment",
        ],
      },
      {
        heading: "Call your insurer and a restoration contractor",
        body: [
          "Call your homeowners insurance carrier promptly to report the loss. Ask what documentation they need, whether emergency mitigation is expected, and how to submit the claim. Most policies want quick reporting, and acting fast protects your position — our insurance guide walks through the questions to ask your adjuster.",
          "Then call a water-damage restoration contractor. BayouDry connects you with independent local restoration contractors in the Houston area — the contractor who takes your job does the extraction, drying, and repair work and sets the price. When you call, describe the water source, how much of the home is affected, and whether it is clean water, gray water, or sewage.",
          "Start both calls the same day the damage happens. Drying that begins within the first day gives you the best shot at preventing mold growth and secondary damage to drywall, subflooring, and framing — materials that cannot be fully dried once they are saturated often must be removed and replaced.",
        ],
      },
      {
        heading: "What not to do in the first 30 minutes",
        body: [
          "Do not turn on ceiling fans, HVAC, or household vacuums in a soaked home — standard vacuums are dangerous around water, and blowing air across wet materials before the source is stopped can spread contaminants. Let the contractor plan the drying strategy.",
          "Do not use bleach on a large spill expecting it to handle contamination. Household bleach is ineffective on porous materials and does nothing about water trapped behind walls or under flooring. Surface cleaning is not the same as structural drying.",
          "And do not assume the water is harmless because it looks clear. Water that has sat in carpet, insulation, or crawlspaces picks up contaminants quickly. Treat every intrusion as potentially contaminated until a professional evaluates it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I call my insurance company or a contractor first?",
        a: "Do both as soon as the scene is safe, in either order. Call your insurer to report the loss and learn what documentation they need, and call a restoration contractor to start mitigation. Quick extraction protects your property and your claim at the same time.",
      },
      {
        q: "Is it safe to stay in the house while it is flooded?",
        a: "It depends on the extent. If the power is safely off in affected areas, the water is clean, and only one room is affected, you may be able to stay. If the flooding is widespread, sewage is involved, or the electrical system is compromised, arrange to stay elsewhere until a professional says the home is safe.",
      },
      {
        q: "Can I start drying with my own fans and dehumidifier?",
        a: "Surface water removal helps, but household equipment cannot verify that walls, subflooring, and framing are actually dry. A contractor's moisture meters confirm when materials have reached safe levels — without them, you are guessing, and guesswork is what leads to mold behind finished walls.",
      },
    ],
    services: [
      "emergency-water-extraction",
      "flood-damage-cleanup",
      "moisture-detection-inspection",
    ],
    relatedArticles: [
      "hurricane-flood-preparation-houston",
      "water-damage-restoration-process",
      "does-homeowners-insurance-cover-water-damage",
    ],
    editorialNote:
      "General emergency guidance; electrical hazards and structural concerns should be handled by qualified professionals.",
    photo: "/photos/what-to-do-when-your-house-floods.jpg",
    published: "2026-10-13",
    updated: "2026-10-13",
    reviewedBy: null,
  },
  {
    slug: "does-homeowners-insurance-cover-water-damage",
    title: "Does Homeowners Insurance Cover Water Damage?",
    category: "insurance",
    status: "PUBLISHED",
    seoTitle: "Does Homeowners Insurance Cover Water Damage? | BayouDry",
    metaDescription:
      "Insurance covers sudden water damage — like burst pipes — but not gradual leaks or rising floodwater. How claims, documentation, and adjusters actually work.",
    answer:
      "Homeowners insurance typically covers sudden, accidental water damage — burst pipes, appliance failures, roof damage from a storm — but not gradual problems like slow leaks or deferred maintenance. Rising floodwater is almost never covered by a standard policy; that requires separate flood insurance. Coverage depends entirely on the cause of the loss and your policy's terms, so read your policy and report damage promptly.",
    sections: [
      {
        heading: "The key question: what caused the water?",
        body: [
          "Adjusters start with the source. A supply line that bursts overnight, a water heater that fails, or a tree limb that punctures the roof during a storm are sudden events — the kind of losses homeowners insurance is built to cover. The damage that follows, like soaked drywall and ruined flooring, is generally part of the claim.",
          "Gradual damage is the opposite. A pinhole leak under a sink that has been dripping for months, grout that has been failing for years, or a roof that has needed replacement for a decade are maintenance issues, and carriers routinely deny claims built on them. The longer the water was there, the harder the claim.",
          "Floodwater — water that rises from the ground outside — is its own category. Standard homeowners policies exclude it. In a flood-prone metro like Houston, separate flood insurance (often through the National Flood Insurance Program) is what covers rising water. If you do not carry it, flood losses come out of pocket.",
        ],
        list: [
          "Sudden and accidental events are generally covered",
          "Gradual leaks and maintenance failures are generally excluded",
          "Rising floodwater needs separate flood insurance",
          "Sewage backups are usually excluded unless you bought an endorsement",
        ],
      },
      {
        heading: "What the adjuster will ask you",
        body: [
          "Expect questions about when you first noticed the damage, what you think caused it, what maintenance the area has had, and what you have done since. Be honest and specific — the adjuster's job is to match the facts to the policy language, and inconsistencies slow everything down.",
          "The adjuster will want your documentation: photos and video of the damage before cleanup, your list of damaged items, and receipts or records for any emergency work you authorized. This is why the first-30-minutes documentation step matters so much — it is the foundation of the claim.",
          "The adjuster may also send their own moisture mapping or ask for the contractor's report. Professional moisture readings and drying logs from your restoration contractor carry weight because they show what was wet, what was dried, and what had to be replaced.",
        ],
      },
      {
        heading: "How to document for the best outcome",
        body: [
          "Photograph everything before anyone starts cleaning: water lines, standing water, the suspected source, and every affected room and closet. Video walkthroughs capture the scope better than stills alone. Keep timestamps on.",
          "Track every conversation with your carrier — date, time, who you spoke with, what they said. Save every receipt: emergency plumber visits, hotel stays if you are displaced, and any mitigation work. Most policies reimburse reasonable emergency mitigation because it reduces the total claim.",
          "Your restoration contractor's written documentation matters too. Ask for a scope of work with line items, moisture readings at the start and end of drying, and before-and-after photos of removed materials. A thorough paper trail makes the adjuster's job easier, which tends to make claims move faster.",
        ],
        list: [
          "Photo and video everything before cleanup begins",
          "Log every call with your insurer: date, name, what was said",
          "Save receipts for emergency mitigation and displacement costs",
          "Ask your contractor for moisture logs and a line-item scope",
        ],
      },
      {
        heading: "Mold coverage and other common surprises",
        body: [
          "Mold is a frequent source of disputes. If mold grew because a covered sudden event went unmitigated, remediation is often included — but if it grew from a long-term leak you should have known about, carriers treat it as maintenance and decline it. Some policies cap mold coverage at a specific dollar amount or exclude it entirely.",
          "Additional living expenses — hotel costs while your home is being dried — are covered under many policies when the damage makes the home uninhabitable, subject to limits. Keep every receipt and ask about your limit before booking.",
          "Replacement versus repair also surprises people. Carriers owe you for damage caused by the event, not for pre-existing wear. A 20-year-old roof with storm damage may get a repair settlement rather than a full replacement. Understanding the distinction up front prevents frustration later.",
        ],
      },
      {
        heading: "What to do if the claim is denied",
        body: [
          "A denial is not the end of the story. Ask for the denial in writing with the specific policy language cited, then read that section of your policy yourself. Denials are sometimes based on a misunderstanding of the facts — for example, an adjuster assuming a leak was gradual when it was actually sudden.",
          "You can supplement the record: contractor reports showing the source was sudden, maintenance records showing the area was in good condition, or a second opinion from another contractor. If you believe the denial is wrong, your state insurance department can explain your appeal options.",
          "BayouDry does not decide coverage or influence your carrier — coverage is strictly between you and your insurer. What your independent contractor can do is document the damage thoroughly and explain the work in terms adjusters recognize, which helps you present the strongest possible claim.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does homeowners insurance cover flood damage in Houston?",
        a: "Standard homeowners policies exclude rising floodwater — that requires separate flood insurance. A standard policy can cover water damage from sudden events like a burst pipe or storm-damaged roof, but water that rises from the ground is not covered without a flood policy.",
      },
      {
        q: "Should I wait for the adjuster before starting repairs?",
        a: "Do not wait to stop the damage — most policies expect you to take reasonable emergency steps like shutting off water and starting extraction. Document everything first, then begin mitigation. The rebuild and non-emergency repairs can wait for the adjuster's review.",
      },
      {
        q: "Will filing a claim raise my premium?",
        a: "It can. Carriers consider claim history when setting rates, and multiple water claims can affect your policy. That is a question for your agent, who can tell you how your carrier treats water damage claims before you file.",
      },
    ],
    services: [
      "insurance-claims-documentation",
      "moisture-detection-inspection",
      "drywall-ceiling-restoration",
    ],
    relatedArticles: [
      "water-damage-restoration-cost-factors",
      "water-damage-restoration-process",
      "sewage-backup-health-risks",
    ],
    editorialNote:
      "General information about insurance claims, not legal or coverage advice; policy terms vary and only the policyholder's carrier determines coverage.",
    photo: "/photos/does-homeowners-insurance-cover-water-damage.jpg",
    published: "2026-10-13",
    updated: "2026-10-13",
    reviewedBy: null,
  },
  {
    slug: "water-damage-restoration-process",
    title: "The Water Damage Restoration Process, Step by Step",
    category: "process",
    status: "PUBLISHED",
    seoTitle: "Water Damage Restoration Process Step by Step | BayouDry",
    metaDescription:
      "What happens after water damage: inspection, extraction, drying, cleaning, and restoration. Each phase of the process explained in order.",
    answer:
      "Professional water damage restoration follows five phases in order: inspection and moisture mapping, water extraction, structural drying with dehumidification, cleaning and sanitizing, and restoration of damaged materials. Skipping or rushing phases — especially drying — is what causes mold, warped floors, and odors later. A good contractor verifies dryness with moisture meters before declaring any phase complete.",
    sections: [
      {
        heading: "Phase 1: Inspection and moisture mapping",
        body: [
          "Everything starts with finding all the water, not just the visible water. Your contractor inspects the affected areas with moisture meters and thermal imaging to map where water has traveled — behind drywall, under flooring, into subflooring and framing. Water wicks sideways and upward through porous materials, so the visible stain is rarely the full footprint.",
          "The contractor also classifies the water: clean (from a supply line), gray (from appliances or rainwater with contaminants), or black (sewage or floodwater with sewage risk). The category changes the safety procedures, what can be cleaned in place, and what must be removed.",
          "This mapping becomes the plan. It tells the contractor what equipment goes where, which materials can be saved, and what needs to come out. Ask to see the moisture readings — a contractor who shows you the numbers is a contractor who measures rather than guesses.",
        ],
      },
      {
        heading: "Phase 2: Water extraction",
        body: [
          "Standing water comes out first, using truck-mounted or portable extraction units. This phase is about speed: every hour water sits in contact with materials, it migrates deeper into subflooring, drywall, and framing, and the job gets bigger.",
          "Carpeting usually gets extracted in place if it can be saved; carpet padding almost always gets removed and discarded because it holds water and contaminants and rarely dries cleanly. Furniture is moved or blocked to prevent dye transfer and leg damage.",
          "Extraction alone does not dry a structure. Pulling the standing water is like wringing out a sponge — the materials are still saturated, which is why the next phase exists.",
        ],
      },
      {
        heading: "Phase 3: Structural drying and dehumidification",
        body: [
          "This is the phase that determines whether you get mold or not. High-volume air movers push air across wet surfaces to speed evaporation, while commercial dehumidifiers pull the moisture out of the air so it does not just relocate to another room. The two work as a system.",
          "Drying takes days, not hours — typically two to five for common residential losses, longer when framing or subflooring is saturated. Equipment stays running around the clock, and the contractor returns to take moisture readings and reposition equipment as materials dry.",
          "Materials that cannot be dried to target moisture levels get removed instead: saturated drywall, swollen baseboards, soaked insulation. Removal is not a failure — it is the correct outcome when drying is no longer possible, and it prevents mold colonies from establishing behind finished surfaces.",
        ],
        list: [
          "Air movers and dehumidifiers work together as a drying system",
          "Expect days of drying, with daily moisture readings",
          "Saturated porous materials get removed, not dried",
          "The phase ends when readings confirm materials are dry — not before",
        ],
      },
      {
        heading: "Phase 4: Cleaning and sanitizing",
        body: [
          "Once dry, affected surfaces get cleaned and treated. For clean-water losses this means washing down hard surfaces; for gray or black water it means antimicrobial treatments on anything that was in contact with the water. Salvageable materials get cleaned; contaminated porous materials are already gone by this point.",
          "Odor treatment happens here too. Musty smells come from moisture and microbial growth, not from the water itself — proper drying usually resolves them, and targeted deodorizing addresses anything that remains. If an odor persists after verified drying, that is a sign something is still wet and the contractor should re-check the mapping.",
          "HVAC systems that ran during the loss may need inspection. Ductwork can spread contaminants or moisture through the house, so contractors often recommend checking it, especially after sewage or mold-related losses.",
        ],
      },
      {
        heading: "Phase 5: Restoration and rebuild",
        body: [
          "The final phase returns the home to its pre-loss condition: replaced drywall, new baseboards, reinstalled or replaced flooring, repainting, and finish work. Some restoration contractors handle the full rebuild; others handle mitigation and hand off to a general contractor for finishes — ask which model your contractor follows before work begins.",
          "This is also where the insurance paperwork closes out. Final invoices, moisture logs, and photos of replaced materials go to the adjuster to settle the claim. Keep copies of everything.",
          "Walk the finished work with the contractor and check it the way you would any remodel: flat walls, matching paint, doors that close, flooring transitions that feel right. The job is done when the house is back — not when the equipment leaves.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does water damage restoration take?",
        a: "Most residential jobs take three to seven days for extraction and drying, plus additional time for any rebuild work. The timeline depends on how much water there was, what materials are affected, and whether drywall or flooring must be replaced. Your contractor should give you a timeline after the moisture mapping — and explain what could change it.",
      },
      {
        q: "Can I stay in my home during restoration?",
        a: "Often yes, for contained losses in one or two rooms. If the damage is widespread, sewage is involved, or extensive demolition is needed, the contractor may recommend staying elsewhere during the heavy work. Ask your contractor directly — they can tell you which areas stay usable and which will not.",
      },
      {
        q: "Do I really need professional drying, or can I just use fans?",
        a: "Household fans move air but do not remove moisture from it, so water just evaporates and re-condenses elsewhere in the house. Professional dehumidification actually extracts the moisture. Materials also need to be dried to verified target levels — which requires moisture meters, not guesswork.",
      },
    ],
    services: [
      "structural-drying-dehumidification",
      "moisture-detection-inspection",
      "emergency-water-extraction",
    ],
    relatedArticles: [
      "drying-hardwood-floors-after-water-damage",
      "mold-after-water-damage",
      "what-to-do-when-your-house-floods",
    ],
    editorialNote:
      "Process phases describe industry-standard practice; actual scope varies by job.",
    photo: "/photos/water-damage-restoration-process.jpg",
    published: "2026-10-13",
    updated: "2026-10-13",
    reviewedBy: null,
  },
  {
    slug: "water-damage-restoration-cost-factors",
    title: "Water Damage Restoration Cost Factors",
    category: "cost",
    status: "PUBLISHED",
    seoTitle: "Water Damage Restoration Cost Factors | BayouDry",
    metaDescription:
      "No two water damage jobs cost the same. Water category, area size, materials, equipment time, and rebuild scope — the factors that shape every quote.",
    answer:
      "Water damage restoration pricing is driven by the water category (clean, gray, or sewage), how far the water spread, what materials are affected, how long drying equipment runs, and how much must be removed and rebuilt rather than dried in place. Reputable contractors quote after an on-site inspection and moisture mapping — never from a phone description alone. Always ask for a written, line-item estimate.",
    sections: [
      {
        heading: "Water category changes everything",
        body: [
          "Clean water from a supply line is the simplest loss: extraction, drying, and cleaning, with most materials salvageable. Gray water from dishwashers, washing machines, or rainwater intrusion brings contaminants that require antimicrobial treatment and usually mean carpet padding and some porous materials get removed.",
          "Black water — sewage backups and floodwater carrying sewage — is a different job entirely. Contaminated porous materials like carpet, padding, drywall, and insulation must be removed, not cleaned. The safety procedures, protective equipment, and disposal requirements add real labor and cost.",
          "This is why the same square footage can produce very different quotes. A contractor who asks about the water source before giving any numbers is doing their job correctly; one who quotes sight unseen is not.",
        ],
        list: [
          "Clean water: extraction and drying, most materials salvageable",
          "Gray water: contaminants require treatment and more material removal",
          "Black water: contaminated porous materials must be removed",
        ],
      },
      {
        heading: "Size, spread, and how long it sat",
        body: [
          "The footprint of the water is the biggest cost driver. A single bathroom is one thing; water that traveled under flooring into three rooms and a hallway is a materially different job. Moisture mapping exists precisely to find the true footprint, which is often larger than what you can see.",
          "Time matters as much as area. Water discovered and extracted the same day is a drying job. Water that sat for days or weeks has wicked into framing, swollen subflooring, and likely grown mold — which turns a drying job into a removal, remediation, and rebuild job. This is the main reason fast action saves money.",
          "Multiple floors compound everything. Water from an upstairs bathroom travels down through ceilings, walls, and floor cavities, and each layer it touches adds to the scope. Gravity makes upstairs leaks expensive.",
        ],
      },
      {
        heading: "Materials: dry in place or remove and replace",
        body: [
          "Not all materials respond to water the same way, and this shapes the quote. Concrete and tile dry well. Hardwood can often be saved with dedicated drying if action is fast. Drywall wicks water upward and usually needs the bottom section cut out and replaced once it is saturated. Carpet padding is nearly always discarded.",
          "Removal and replacement costs more than drying — it adds demolition labor, disposal, and the rebuild itself. But removal is the correct answer for materials that cannot be returned to safe moisture levels, and a contractor who removes what cannot be saved is protecting you from mold and rot down the road.",
          "Finishes add their own line items. Replacing a section of drywall is not just drywall — it is mudding, taping, texture matching, priming, and painting. Flooring replacement often extends beyond the damaged room so the new floor matches. Ask how the quote handles finish matching.",
        ],
      },
      {
        heading: "Equipment time and labor hours",
        body: [
          "Structural drying is not a one-visit service. Equipment runs for days, the contractor returns to check moisture readings and reposition machines, and someone is monitoring the drying curve. That ongoing labor and equipment time is a real line item.",
          "Emergency scheduling affects pricing too. A call answered at night or on a weekend gets faster response because the contractor shifts crews and equipment — many contractors charge a premium for after-hours emergency service, which is reasonable and should be disclosed up front.",
          "The size of the crew matters. Two technicians with proper equipment can handle a contained loss; a whole-house flood needs a larger team. More hands cost more, but a larger crew also shortens the total timeline, which can reduce equipment rental days.",
        ],
      },
      {
        heading: "How to compare quotes fairly",
        body: [
          "Get at least two or three written estimates, and compare them line by line rather than by the bottom number. One quote may look cheaper because it skips the moisture mapping, the antimicrobial treatment, or the rebuild — which makes it incomplete, not cheaper.",
          "Every estimate should show the scope in phases: inspection, extraction, drying, cleaning, and rebuild, each with its own lines. Ask what is excluded: texture matching, painting, flooring transitions, permits. Surprises live in the exclusions.",
          "BayouDry does not set prices — the independent contractor who takes your job does, and you pay them directly. Never accept a firm price from a description alone; a legitimate quote follows an on-site inspection.",
        ],
        list: [
          "Get two or three written estimates and compare line items",
          "Check the exclusions — that is where surprises hide",
          "Confirm whether the contractor handles the rebuild or hand it off",
          "Never accept a firm quote without an on-site inspection",
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't anyone give me a price over the phone?",
        a: "Because the visible damage rarely shows the full scope. Water hides behind walls, under flooring, and inside framing — and the water category, which changes the entire job, often is not clear from a description. Any firm number given sight unseen is a guess, and guesses lead to mid-job price changes.",
      },
      {
        q: "Does insurance cover the full cost of restoration?",
        a: "That depends on your policy, the cause of the loss, and your deductible — coverage is never automatic. Get the contractor's written estimate and documentation to your adjuster early, and ask the adjuster what is covered before authorizing the rebuild. Our insurance guide explains how to document for the best outcome.",
      },
      {
        q: "What is the most expensive part of water damage restoration?",
        a: "Usually the rebuild — removing and replacing drywall, flooring, and finishes — especially when water sat long enough to reach framing and subflooring. Fast extraction and drying keep jobs in the mitigation range; delay pushes them into removal and rebuild.",
      },
    ],
    services: [
      "insurance-claims-documentation",
      "structural-drying-dehumidification",
      "hardwood-floor-drying",
    ],
    relatedArticles: [
      "does-homeowners-insurance-cover-water-damage",
      "water-damage-restoration-process",
      "how-to-choose-a-water-damage-restoration-company",
    ],
    editorialNote:
      "Cost factors only — no pricing figures, ranges, or estimates are given.",
    photo: "/photos/water-damage-restoration-cost-factors.jpg",
    published: "2026-10-13",
    updated: "2026-10-13",
    reviewedBy: null,
  },
  {
    slug: "how-to-choose-a-water-damage-restoration-company",
    title: "How to Choose a Water Damage Restoration Company",
    category: "choosing",
    status: "PUBLISHED",
    seoTitle: "How to Choose a Water Damage Restoration Company",
    metaDescription:
      "Ask about IICRC training, insurance, moisture mapping, written estimates, and rebuild capability. The questions and red flags that matter.",
    answer:
      "Choose a restoration company whose technicians hold IICRC water damage restoration training, that carries proper liability insurance, maps moisture with meters before quoting, gives written line-item estimates, and can explain each phase of the process clearly. Ask who does the actual fieldwork, whether they handle the rebuild or hand it off, and how they verify materials are dry. Avoid anyone who quotes a firm price sight unseen or pressures you to sign immediately.",
    sections: [
      {
        heading: "Training and credentials to ask about",
        body: [
          "The relevant industry credential is IICRC certification in water damage restoration — it means the technician has been trained in extraction, drying science, and moisture verification. Ask which technicians on your job hold it, not just whether the company has someone certified somewhere.",
          "Beyond training, confirm the company carries general liability insurance and workers' compensation. Restoration work involves heavy equipment, demolition, and sometimes sewage — you want to know that the people in your home are covered and that your property is protected if something goes wrong.",
          "For mold-related work, ask about separate mold remediation credentials and whether the company follows containment procedures. Water damage and mold remediation are related but distinct disciplines, and the right training for each matters.",
        ],
        list: [
          "IICRC water damage restoration training for field technicians",
          "General liability insurance and workers' compensation",
          "Mold remediation credentials when mold is involved",
          "Ongoing training, not a single course from years ago",
        ],
      },
      {
        heading: "Questions to ask before you hire",
        body: [
          "A short phone interview reveals most of what you need. Ask how the company finds hidden moisture — the answer should involve moisture meters and thermal imaging, not just looking around. Ask what equipment they run for drying and how they decide when materials are dry enough.",
          "Ask about the full scope: does the company handle extraction through rebuild, or does it stop after drying and hand the rebuild to someone else? Both models are legitimate, but you deserve to know which one you are getting before work begins, so you are not surprised mid-job.",
          "Finally, ask for the process in plain order: inspection, extraction, drying, cleaning, rebuild. A contractor who can walk you through the phases without jargon is a contractor who understands the work.",
        ],
        list: [
          "How do you find hidden moisture behind walls and under floors?",
          "Will I get a written line-item estimate before work starts?",
          "Do you handle the full rebuild or hand it off after drying?",
          "How do you verify materials are dry before finishing?",
          "Who exactly will be doing the work in my home?",
        ],
      },
      {
        heading: "Red flags to watch for",
        body: [
          "Firm quotes without an on-site inspection are a major warning. No one can price water damage from a phone description — the moisture footprint is unknown until it is measured. A number given sight unseen will either balloon mid-job or cut corners to fit.",
          "High-pressure tactics are another. Demanding an immediate signature, refusing to put the estimate in writing, or insisting you cannot get a second opinion are signs to keep looking. Water damage is urgent, but urgency is not an excuse for skipping due diligence.",
          "Watch for vague answers about process. If a contractor cannot explain the drying phase, does not use moisture meters, or dismisses questions about insurance documentation, the job will be guesswork. Professional restoration is measured and documented at every step.",
        ],
        list: [
          "Firm pricing with no on-site inspection",
          "Pressure to sign immediately or skip a second opinion",
          "Refusal to provide a written estimate",
          "No moisture meters or drying verification process",
          "Cash-only payment demands or large upfront deposits",
        ],
      },
      {
        heading: "How BayouDry fits in",
        body: [
          "BayouDry is a connection service, not a restoration company. We match you with an independent local restoration contractor in the Houston area who can handle your situation. That contractor does the work, sets the price, and takes payment — not BayouDry.",
          "When you request help, describe the situation plainly: the water source, how much of the home is affected, and any urgency. We pass those details to the contractor so the first conversation starts with the right context.",
          "You still choose. Ask the contractor the questions in this guide, compare with another company if you want, and approve the written estimate before anything begins. BayouDry's role is to get you to a qualified contractor fast — the hiring decision is yours.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I get multiple estimates?",
        a: "Yes — two or three written estimates let you compare scope, not just price. Make sure each one is based on an on-site inspection with moisture mapping, and compare the line items. A cheaper estimate that skips drying verification or rebuild finishes is not actually cheaper.",
      },
      {
        q: "What if my insurance company recommends a contractor?",
        a: "You can use your carrier's preferred contractor or choose your own — the decision is yours. Preferred vendors are convenient and already vetted by the carrier, but an independent contractor you select yourself works just as well as long as they document thoroughly for the claim. Get the written estimate either way.",
      },
      {
        q: "How do I know the job was done right?",
        a: "Ask for the final moisture readings showing materials reached target dryness, walk the finished work with the contractor, and check for lingering musty odors after a few days. If odors persist or new stains appear, call the contractor back — reputable ones stand behind their drying verification.",
      },
    ],
    services: [
      "moisture-detection-inspection",
      "structural-drying-dehumidification",
      "mold-remediation",
    ],
    relatedArticles: [
      "water-damage-restoration-cost-factors",
      "water-damage-restoration-process",
      "sewage-backup-health-risks",
    ],
    photo: "/photos/how-to-choose-a-water-damage-restoration-company.jpg",
    published: "2026-10-13",
    updated: "2026-10-13",
    reviewedBy: null,
  },
];
