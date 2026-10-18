/**
 * Location content for BayouDry Restoration (Houston, TX).
 * First 8 of 16 cities live here; the rest + city/service cross-content are in locationsMore.ts.
 * Business rule: BayouDry is a call brand for LeadSmart buyers. BayouDry connects
 * homeowners with independent local restoration contractors. Copy never claims
 * BayouDry's own crews, technicians, trucks, licenses, offices, reviews, or response times.
 * No prices, no invented facts.
 */
import type { City, StateInfo } from "./types";

export const stateInfos: StateInfo[] = [
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    intro: [
      "The Texas Gulf Coast around Houston is one of the most water-exposed housing markets in the country. Hurricanes and tropical storms push storm surge into bayfront communities, slow-moving systems dump feet of rain across flat clay prairie, and inland bayous overflow into established neighborhoods. The 2021 freeze added a different failure mode: burst supply lines and sprinkler systems across homes never built for sustained subfreezing temperatures.",
      "That combination means water damage here is rarely a single cause. A Houston home can face bayou flooding in one season, a slab leak in the next, and hurricane wind-driven rain after that. Local contractors who work the Gulf Coast full time read moisture behavior in Gulf-humidity conditions — high water tables, expansive clay soils, and older pier-and-beam stock alongside sprawling slab-on-grade subdivisions.",
    ],
    details: {
      housing:
        "Houston metro housing spans eras and foundations. Inside the Loop, pre-1960 pier-and-beam bungalows and mid-century ranch homes sit beside new construction. Outer suburbs — Katy, Sugar Land, Pearland, Missouri City — are overwhelmingly 1980s–2010s slab-on-grade tract subdivisions. Galveston and the bayfront lean on raised coastal construction with strict elevation rules. Apartment and townhome corridors run along every freeway, and many neighborhoods carry decades of deferred plumbing maintenance.",
      climate:
        "Houston's climate is subtropical and humid, averaging over 50 inches of rain a year with intense spring and fall storm seasons. Hurricane season runs June through November, bringing storm surge to Galveston and the bay area and torrential rainfall to the inland prairie. Summer heat keeps humidity high year-round, which slows drying and makes rapid moisture control essential after any water event.",
      permits:
        "Texas does not license water-damage restoration companies at the state level, though mold remediation companies and workers do need Texas Department of Licensing and Regulation (TDLR) mold licenses when mold is involved. Most Gulf Coast cities enforce floodplain ordinances tied to FEMA flood maps — repairs classified as substantial improvements in a designated floodplain can require permits and elevation documentation. Check with your city or county permit office before major rebuild work; this is general information, not legal advice.",
    },
    updated: "2026-10-13",
  },
];

export const regions: { slug: string; name: string; blurb: string; citySlugs: string[] }[] = [
  {
    slug: "central-houston",
    name: "Central Houston",
    blurb: "Houston and its closest neighbors — the city's bayous, inner-loop housing stock, and dense industrial corridors.",
    citySlugs: ["houston", "pasadena", "humble"],
  },
  {
    slug: "baytown-bay-area",
    name: "Baytown & the Bay Area",
    blurb: "The industrial east side, the lake, and the Galveston coast — surge, rainfall flooding, and refinery-town plumbing.",
    citySlugs: ["baytown", "league-city", "galveston", "texas-city"],
  },
  {
    slug: "west-fort-bend",
    name: "West & Fort Bend County",
    blurb: "Katy, Sugar Land, and the Fort Bend corridor — flat prairie, master-planned subdivisions, and detention-pond drainage.",
    citySlugs: ["katy", "sugar-land", "missouri-city", "richmond", "rosenberg"],
  },
  {
    slug: "north-south-suburbs",
    name: "North & South Suburbs",
    blurb: "The fast-growing north along I-45 and the southern Brazoria corridor — piney woods, clay soils, and new construction.",
    citySlugs: ["spring", "conroe", "pearland", "friendswood"],
  },
];

export const cities: City[] = [
  {
    slug: "houston",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: [
      "77002",
      "77006",
      "77008",
      "77018",
      "77024",
      "77030",
      "77054",
      "77056",
      "77057",
      "77077",
    ],
    areas: [
      "The Heights",
      "Montrose",
      "Memorial",
      "Galleria",
      "Clear Lake",
      "Kingwood",
    ],
    intro: [
      "Houston is a city built on bayous and clay — flat, flood-prone, and sprawling across a patchwork of housing eras. Inside the Loop, pre-1960 bungalows and 1970s townhomes sit beside infill construction; outside it, subdivisions stretch for miles in every direction. After the major floods of the past decade, water behavior in Houston neighborhoods is better mapped than almost anywhere, but the risk has not gone away: slow tropical systems, bayou overflows, and aging infrastructure keep local restoration contractors busy year-round.",
      "What makes Houston different from most big cities is how ordinary a water event is. Slab leaks are a staple call in outer-loop subdivisions. Sewage backups hit older neighborhoods with clay and cast-iron sewer lines during heavy rain. Storm-driven water enters through roofs and windows during hurricane season. A contractor who works Houston full time thinks in bayous, flood zones, and soil type — not just square footage.",
    ],
    housingNotes: [
      "Inside-the-Loop stock: 1920s–1960s pier-and-beam and slab bungalows in the Heights, Montrose, and Garden Oaks — aging galvanized and polybutylene supply lines, cast-iron drains, and minimal crawlspace ventilation.",
      "1970s–2000s slab-on-grade subdivisions across the west side, Kingwood, and Clear Lake — post-tension slabs, copper and PEX supply lines, and slab leaks that travel under flooring before surfacing.",
      "High-rise and mid-rise apartments along the 610 loop and the Galleria corridor, where multi-story water migration is a building-management issue, not just a homeowner one.",
    ],
    localIssues: [
      {
        title: "Bayou flooding and storm rain",
        body: "Houston's bayou system drains the metro, but during tropical systems the bayous can rise faster than streets can drain. Neighborhoods along Buffalo Bayou, Brays Bayou, and White Oak Bayou have seen repeated flood events, and even homes outside mapped floodplains have taken water. Floodwater here is contaminated — a local water-damage specialist treats post-flood drying as a contamination job, not just a drying job.",
      },
      {
        title: "Clay soil and poor drainage",
        body: "Much of Harris County sits on expansive gumbo clay that drains slowly and shifts with moisture changes. Flat grades, subsidence, and clay-heavy soil mean water lingers against foundations and under slabs. Foundation movement from soil expansion cracks slabs and supply lines, which is why Houston generates so many slab-leak calls.",
      },
      {
        title: "Aging galvanized pipes inside the Loop",
        body: "Homes built before the 1980s inside the Loop often still carry galvanized steel or polybutylene supply lines, both past or near the end of their service life. Pinhole leaks behind walls are common, and because many of these homes have pier-and-beam foundations, leaks can run for weeks under the house before anyone sees water.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "structural-drying-dehumidification",
      "mold-remediation",
    ],
    nearby: ["pasadena", "humble", "baytown", "katy"],
    faqs: [
      {
        q: "Does flood repair in Houston require a permit?",
        a: "It depends on the scope. Emergency water extraction and drying generally do not need a permit, but rebuild work in a FEMA-designated floodplain can trigger the City of Houston's floodplain ordinance — repairs classified as substantial improvements may require permits and elevation certification. Check with the city's permit office before major reconstruction; this is general information, not legal advice.",
      },
      {
        q: "Why do Houston homes get so many slab leaks?",
        a: "The combination of expansive clay soil, high water tables, and decades of shifting ground stresses rigid supply lines embedded in slabs. Copper lines corrode, and even flexible PEX can be damaged where the soil moves. A leak under a slab often shows up far from the actual break, so a local specialist uses acoustic and thermal detection to find the source before cutting concrete.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "pasadena",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: ["77502", "77503", "77504", "77505", "77506"],
    areas: [
      "Southmore",
      "Strawberry Park",
      "Red Bluff",
      "Golden Acres",
      "Deepwater",
    ],
    intro: [
      "Pasadena sits just southeast of Houston along the industrial Houston Ship Channel corridor — a city of mid-century neighborhoods, refinery-adjacent industry, and waterfront exposure to Galveston Bay. Much of the housing stock went up in the 1950s through the 1970s as refinery and chemical plant workers settled close to their jobs, and many of those homes are now on their second or third round of plumbing systems.",
      "The city's geography drives its water problems. Parts of Pasadena sit low with bayou and ship-channel exposure, and heavy rain events that barely register in west Houston can pond in Pasadena's flatter, older neighborhoods. Cast-iron drain lines and aging water heaters in 60-year-old homes fail on a regular schedule, and storm surge from the bay has reached low-lying areas during major hurricanes.",
    ],
    housingNotes: [
      "Mid-century ranch and bungalow stock (1950s–1970s) on pier-and-beam and slab foundations, with original cast-iron drains and aging galvanized supply lines common.",
      "Flat, low-lying lots in older neighborhoods where grading has settled over decades and water ponds against foundations during heavy rain.",
      "Industrial corridor homes and waterfront-adjacent areas exposed to storm surge and bayou backflow during hurricanes.",
    ],
    localIssues: [
      {
        title: "Storm surge and bay backflow",
        body: "During hurricanes, Galveston Bay storm surge can push up the ship channel and into low-lying Pasadena neighborhoods and bayous. Even when rainfall is moderate, surge-driven backflow can overwhelm drainage. Homes near the waterfront and along Vince Bayou carry the highest exposure.",
      },
      {
        title: "Settled grading and ponding",
        body: "Decades of subsidence and settled lots mean many older Pasadena homes sit in slight depressions relative to the street. Heavy rain ponds against foundations and under pier-and-beam homes, and water that should sheet away instead soaks into the structure.",
      },
      {
        title: "Aging cast-iron sewer lines",
        body: "Mid-century Pasadena homes often still run on original cast-iron drain lines, which corrode from the inside out. Heavy rain infiltrates cracked lines and overwhelms connections, causing sewage backups — a contaminated-water event that requires professional removal, not just mopping.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "structural-drying-dehumidification",
      "sewage-backup-cleanup",
      "burst-pipe-water-damage",
      "emergency-water-extraction",
    ],
    nearby: ["houston", "baytown", "league-city", "pearland"],
    faqs: [
      {
        q: "Do I need a permit for water-damage repair in Pasadena?",
        a: "Emergency extraction and drying generally do not require a permit. If rebuild work is extensive or the property is in a FEMA floodplain — which covers much of Pasadena's low-lying areas — the city's floodplain regulations can apply to substantial improvements. Check with Pasadena's permit office for your address; this is general information, not legal advice.",
      },
      {
        q: "How serious is a sewage backup in a mid-century home?",
        a: "Very — sewage is contaminated water carrying pathogens, and in Pasadena's older homes with cast-iron lines, backups during heavy rain are a recurring problem. Porous materials the sewage touches — carpet pad, lower drywall, subflooring — generally must be removed by a professional rather than disinfected in place.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "baytown",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: ["77520", "77521", "77523"],
    areas: [
      "Wooster Point",
      "Goose Creek",
      "Lakewood",
      "Crystal Bay",
      "Downtown Baytown",
    ],
    intro: [
      "Baytown is a refinery city on the east side of Harris County, split by Goose Creek and edged by Galveston Bay — which means its homes face water from nearly every direction. The housing is a mix of mid-century neighborhoods built for refinery and chemical-plant workers, newer subdivisions on the city's outskirts, and lakefront and bayfront properties that carry the highest flood exposure in the area.",
      "Major hurricanes have hit Baytown hard, with storm surge pushing into neighborhoods near the bay and slow rainfall flooding Goose Creek out of its banks. Between storms, the aging water and sewer infrastructure of the city's older core produces the everyday water events: burst pipes, water-heater failures, and sewage backups during heavy rain.",
    ],
    housingNotes: [
      "Mid-century single-family neighborhoods (1950s–1980s) near the industrial core with original cast-iron plumbing and aging water heaters.",
      "Lakefront and bayfront properties around Goose Creek and Galveston Bay, including raised coastal construction in high-exposure zones.",
      "Newer subdivisions on the city's north and east edges with slab-on-grade foundations and modern PEX and PVC plumbing.",
    ],
    localIssues: [
      {
        title: "Hurricane storm surge",
        body: "Baytown's position on Galveston Bay puts bayfront and lakefront neighborhoods directly in the path of storm surge during hurricanes. Surge events push saltwater into ground floors and crawlspaces, and saltwater contamination complicates both drying and rebuild decisions.",
      },
      {
        title: "Goose Creek and bayou flooding",
        body: "Goose Creek runs through the city and has a history of flooding during tropical systems and extended rain. Homes near the creek and its tributaries have taken water in major events, and even moderate storms can pond in the flatter neighborhoods.",
      },
      {
        title: "Aging infrastructure in the older core",
        body: "The mid-century neighborhoods closest to the refineries run on some of the oldest residential plumbing in the metro. Cast-iron drain lines, galvanized supply lines, and decades-old water heaters fail regularly — and heavy rain makes every weak point worse.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "sewage-backup-cleanup",
      "roof-leak-water-damage",
    ],
    nearby: ["houston", "pasadena", "league-city", "humble"],
    faqs: [
      {
        q: "Are there special rules for rebuilding in Baytown's flood-prone areas?",
        a: "Yes — Baytown enforces floodplain development rules tied to FEMA maps for properties in designated flood zones, including elevation requirements for substantially improved structures. If your home is near Goose Creek or the bay and took major damage, check with the city's development office before rebuilding; this is general information, not legal advice.",
      },
      {
        q: "Is saltwater flooding harder to clean up than freshwater?",
        a: "It is. Saltwater accelerates corrosion of metal components, leaves mineral deposits, and carries its own contamination profile from the bay. A local water-damage specialist treats saltwater events differently from freshwater ones — contaminated porous materials typically need removal, and drying equipment placement has to account for humidity and heat in Baytown's climate.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "sugar-land",
    stateSlug: "texas",
    county: "Fort Bend County",
    status: "PUBLISHED",
    zips: ["77478", "77479", "77498"],
    areas: [
      "First Colony",
      "Greatwood",
      "New Territory",
      "Riverstone",
      "Telfair",
    ],
    intro: [
      "Sugar Land is one of Fort Bend County's showcase suburbs — a city of master-planned communities, from the 1980s-era First Colony to newer developments like Riverstone and Telfair. The homes are mostly slab-on-grade tract construction from the last four decades, generally well built but sitting on some of the flattest, most clay-heavy ground in the metro.",
      "The city's defining water event was the Brazos River flooding during Hurricane Harvey, which sent water into neighborhoods along the river that had never flooded before. Beyond the river, Sugar Land's everyday water problems are the suburban classics: slab leaks, water-heater failures, appliance leaks, and sewage backups where lift stations and gravity mains meet during heavy rain.",
    ],
    housingNotes: [
      "1980s–2000s slab-on-grade tract subdivisions (First Colony, Greatwood, New Territory) with copper and PEX supply lines — slab leaks are the signature failure.",
      "Newer master-planned communities (Riverstone, Telfair) with modern plumbing but grading that channels storm water toward detention ponds.",
      "Older homes near the Brazos River corridor and Old Sugar Land with higher flood exposure and older drainage infrastructure.",
    ],
    localIssues: [
      {
        title: "Flat prairie drainage and detention pond overflow",
        body: "Sugar Land is flat — fractions of a percent of grade — so storm water moves slowly and pools when rainfall outpaces the drainage system. Detention ponds in master-planned communities are sized for design storms; during extreme events they can overtop, sending water into streets and garages.",
      },
      {
        title: "Brazos River flooding",
        body: "The Brazos River forms Sugar Land's southern edge, and during Hurricane Harvey it rose far beyond its banks into river-adjacent neighborhoods. Homes along the river sit in mapped floodplains, and river water is contaminated — professional cleanup and removal of affected porous materials is the standard response.",
      },
      {
        title: "Slab leaks in tract subdivisions",
        body: "The city's huge stock of slab-on-grade homes on expansive clay makes slab leaks a routine call. Soil movement stresses embedded lines, and leaks often travel under flooring for weeks before surfacing as warm spots, rising water bills, or visible damage.",
      },
    ],
    popularServices: [
      "emergency-water-extraction",
      "flood-damage-cleanup",
      "burst-pipe-water-damage",
      "sewage-backup-cleanup",
      "hardwood-floor-drying",
    ],
    nearby: ["missouri-city", "richmond", "katy", "houston"],
    faqs: [
      {
        q: "What permits apply to water-damage repair in Sugar Land?",
        a: "Emergency drying and extraction generally don't require permits, but rebuild work in FEMA-designated floodplains along the Brazos River can trigger floodplain regulations and substantial-improvement reviews. Check with the city's development services office for your address; this is general information, not legal advice.",
      },
      {
        q: "How do I know if I have a slab leak?",
        a: "Common signs include a warm spot on the floor, the sound of running water when nothing is on, an unexplained spike in the water bill, or damp carpet edges. A local water-damage specialist uses acoustic listening and thermal imaging to pinpoint the break before any concrete is cut.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "katy",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: ["77449", "77493", "77494"],
    areas: [
      "Cinco Ranch",
      "Old Katy",
      "Cane Island",
      "Grand Lakes",
      "Katy Mills Corridor",
    ],
    intro: [
      "Katy grew from a small railroad town into one of the largest suburban markets in the metro — hundreds of thousands of residents across Harris, Fort Bend, and Waller counties, mostly in slab-on-grade subdivisions built from the 1990s onward. Cinco Ranch, Grand Lakes, and Cane Island are textbook master-planned communities; Old Katy retains the area's historic core along the railroad.",
      "Katy's water story is written by its geography: former rice-prairie farmland, almost perfectly flat, drained by bayous and a web of detention ponds. During Hurricane Harvey, parts of Katy flooded from reservoir releases as well as rainfall, a lesson in how the area's drainage system behaves under stress. Day to day, the water events are slab leaks, burst supply lines from the 2021 freeze, and storm-water intrusion through roofs and grading failures.",
    ],
    housingNotes: [
      "1990s–2020s slab-on-grade master-planned subdivisions with PEX and copper supply lines — slab leaks and burst lines are the dominant calls.",
      "Old Katy's older stock near the railroad: pier-and-beam and early slab homes with aging galvanized plumbing.",
      "Multi-story tract homes with upstairs laundry rooms and bathrooms — a supply-line failure on the second floor floods two levels at once.",
    ],
    localIssues: [
      {
        title: "Flat prairie drainage",
        body: "Katy sits on former rice prairie with almost no natural slope. Rainfall has nowhere to go quickly, so the area depends entirely on bayous, ditches, and detention ponds. When extreme rain outpaces that system — as it did during Harvey — streets and garages take water, and homes near bayous and reservoirs face the worst of it.",
      },
      {
        title: "Freeze-burst supply lines",
        body: "The February 2021 freeze hit Katy's newer subdivisions hard: exposed supply lines in attics, exterior walls, and unheated garages burst by the thousands. Homes built since have seen more freeze-resistant plumbing practices, but older PEX and copper runs in unconditioned spaces remain vulnerable.",
      },
      {
        title: "Upstairs plumbing failures",
        body: "Katy's two-story tract homes concentrate risk on the second floor — laundry rooms and master bathrooms above living space. A burst washer hose or supply line upstairs can send water through ceilings and walls into two floors, making fast extraction and structural drying critical.",
      },
    ],
    popularServices: [
      "burst-pipe-water-damage",
      "emergency-water-extraction",
      "structural-drying-dehumidification",
      "drywall-ceiling-restoration",
      "appliance-leak-cleanup",
    ],
    nearby: ["sugar-land", "houston", "missouri-city", "richmond"],
    faqs: [
      {
        q: "Do I need a permit to repair freeze-burst pipe damage in Katy?",
        a: "Replacing burst pipes and drying the damage generally doesn't require a permit. If ceilings, walls, or flooring are rebuilt — especially in a FEMA floodplain area — Harris County or Fort Bend County permit and floodplain rules may apply depending on your exact address. Check with the county permit office; this is general information, not legal advice.",
      },
      {
        q: "Why are burst pipes such a big deal in newer Katy homes?",
        a: "Many Katy homes run supply lines through attics and exterior walls to save slab space, which puts pipes in unconditioned zones. During a hard freeze, those lines burst while homeowners are distracted by power outages. The real damage often comes when water thaws and flows for hours unnoticed — which is why extraction and drying start immediately after the plumbing is repaired.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "conroe",
    stateSlug: "texas",
    county: "Montgomery County",
    status: "PUBLISHED",
    zips: ["77301", "77302", "77303", "77304", "77384"],
    areas: [
      "Downtown Conroe",
      "River Plantation",
      "Panorama Village",
      "Tavola",
      "Crighton Ridge",
    ],
    intro: [
      "Conroe is the seat of fast-growing Montgomery County, where the piney woods meet Houston's northern sprawl. The city mixes a genuine historic downtown, older river-adjacent neighborhoods, and fast-expanding new subdivisions pushing into former timberland. Lake Conroe to the northwest adds recreational waterfront homes to the mix.",
      "The piney-woods setting gives Conroe a water profile distinct from the prairie suburbs. Tall pines mean root intrusion into sewer lines; clay soils under new subdivisions mean grading and foundation-drainage problems; and the San Jacinto River and Lake Conroe watershed mean flood exposure in low-lying areas. Growth has been so fast that new-construction drainage issues are a category of their own.",
    ],
    housingNotes: [
      "Older homes in downtown Conroe and river-adjacent neighborhoods: pier-and-beam and early slab construction with aging cast-iron and clay sewer lines.",
      "New subdivisions (Tavola and newer developments) on cleared pine forest with slab foundations and grading that sometimes channels water toward the home.",
      "Lake Conroe waterfront properties with raised or pier construction and flood exposure along the shoreline and coves.",
    ],
    localIssues: [
      {
        title: "Pine-tree root intrusion on sewer lines",
        body: "Conroe's tall pines have aggressive root systems that seek out the moisture in aging clay and cast-iron sewer lines. Roots crack and block the lines, and during heavy rain the combination backs sewage up into homes. Clearing and lining the line addresses the cause; the contamination inside requires professional cleanup.",
      },
      {
        title: "New-construction grading issues",
        body: "Montgomery County's building boom has cleared vast pine tracts, and some new subdivisions have drainage graded toward foundations rather than away. Homeowners in developments under ten years old sometimes discover water intrusion through slab edges and weep screeds after the first few hard rains.",
      },
      {
        title: "San Jacinto River and lake flooding",
        body: "The San Jacinto River and Lake Conroe feed flooding into low-lying Conroe neighborhoods during tropical systems and dam-release events. River-adjacent homes and waterfront properties on the lake carry mapped flood exposure, and floodwater here is contaminated runoff, not clean rain.",
      },
    ],
    popularServices: [
      "sewage-backup-cleanup",
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "mold-remediation",
      "moisture-detection-inspection",
    ],
    nearby: ["spring", "humble", "houston", "katy"],
    faqs: [
      {
        q: "Do I need a permit for water-damage repairs in Conroe?",
        a: "Emergency extraction and drying don't typically require permits. Rebuild work in FEMA-designated floodplains — including areas near the San Jacinto River and Lake Conroe — falls under Montgomery County floodplain regulations, which can require permits and elevation documentation for substantial improvements. Check with the county; this is general information, not legal advice.",
      },
      {
        q: "Can tree roots really cause a sewage backup?",
        a: "Yes — it's one of the most common causes in Conroe's older neighborhoods. Pine roots penetrate joints in clay and cast-iron sewer lines, gradually blocking flow until a heavy rain overwhelms the line and backs sewage into the home. A local specialist handles the contamination cleanup; a plumber with a camera inspection addresses the line itself.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "spring",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: ["77373", "77379", "77380", "77381", "77382", "77388"],
    areas: [
      "Old Town Spring",
      "Cypresswood",
      "Birchbrook",
      "Benders Landing",
      "Spring Creek Corridor",
    ],
    intro: [
      "Spring is Houston's northern bedroom belt — unincorporated Harris County rather than a city proper, stretching from Cypress Creek to Spring Creek under a pine canopy. Old Town Spring preserves the area's railroad-era roots; around it, decades of subdivisions from the 1970s to today house one of the largest suburban populations in the metro.",
      "Creeks define Spring's water risk. Cypress Creek has a documented history of flooding during tropical systems, and homes near the creek and its tributaries have taken water repeatedly. Under the canopy, the same pine-root sewer problems as Conroe apply, and the area's older subdivisions carry aging plumbing that fails on schedule.",
    ],
    housingNotes: [
      "1970s–1990s slab-on-grade subdivisions with original copper and early PEX supply lines — slab leaks and pinhole copper failures are routine.",
      "Old Town Spring's historic homes: pier-and-beam construction with aging plumbing and poor under-house ventilation.",
      "Newer developments near Spring Creek and the Grand Parkway with modern plumbing but flood exposure along creek corridors.",
    ],
    localIssues: [
      {
        title: "Cypress Creek flooding",
        body: "Cypress Creek winds through Spring and has repeatedly left its banks during tropical systems and extended rain, flooding neighborhoods along its corridor. Even streets blocks from the creek can flood when tributary ditches back up. Homes near the creek sit in mapped floodplains, and the water is contaminated.",
      },
      {
        title: "Pine-root sewer intrusion",
        body: "Like Conroe, Spring's pine canopy sends roots into aging clay and cast-iron sewer lines. Backups during heavy rain are the signature outcome — and in homes with finished lower levels, the damage escalates quickly.",
      },
      {
        title: "Aging copper supply lines",
        body: "The 1970s–1990s subdivisions that define much of Spring were plumbed with copper that is now 30–50 years old. Pinhole leaks develop behind walls and above ceilings, often discovered only when water stains appear or flooring warps.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "sewage-backup-cleanup",
      "burst-pipe-water-damage",
      "drywall-ceiling-restoration",
    ],
    nearby: ["conroe", "humble", "houston", "katy"],
    faqs: [
      {
        q: "Spring is unincorporated — who issues permits for flood repair?",
        a: "Harris County handles permits for unincorporated areas, and its floodplain regulations apply in FEMA-designated zones along Cypress Creek and Spring Creek. Substantial improvements in those zones can require permits and elevation documentation. Check with Harris County's permit office for your address; this is general information, not legal advice.",
      },
      {
        q: "What should I do if Cypress Creek is rising toward my home?",
        a: "Move valuables and documents to upper floors, shut off electricity to areas water may reach, and get out before roads flood — Harris County issues evacuation guidance through emergency alerts. After the water recedes, call a water-damage specialist before starting cleanup yourself: floodwater is contaminated, and insurance documentation works best when the damage is recorded professionally first.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "pearland",
    stateSlug: "texas",
    county: "Brazoria County",
    status: "PUBLISHED",
    zips: ["77581", "77584", "77588"],
    areas: [
      "Shadow Creek Ranch",
      "Silverlake",
      "Southwyck",
      "Old Town Pearland",
      "Green Tee",
    ],
    intro: [
      "Pearland is Brazoria County's boomtown — one of the fastest-growing cities in Texas, built largely from the 1990s onward on former ranch and farmland south of Houston. Master-planned communities like Shadow Creek Ranch and Silverlake define the landscape: slab-on-grade tract homes, detention ponds, and bayous threading between subdivisions.",
      "Growth has outpaced drainage in places, and Pearland's flat, clay-heavy ground holds water. During Hurricane Harvey, parts of Pearland flooded from both rainfall and bayou overflow, including neighborhoods that had never seen water. The everyday calls are slab leaks, appliance and water-heater failures, and sewage backups where the municipal system meets heavy rain.",
    ],
    housingNotes: [
      "1990s–2020s slab-on-grade tract subdivisions with copper and PEX supply lines — slab leaks are the most common water event.",
      "Older homes in Old Town Pearland and Green Tee with aging plumbing and lower-elevation lots.",
      "Two-story master-planned homes with upstairs laundry — second-floor supply failures flood two levels.",
    ],
    localIssues: [
      {
        title: "Flat clay ground that holds water",
        body: "Pearland's former farmland is almost perfectly flat with heavy clay soils that drain slowly. During intense rain, water ponds in streets and yards faster than the bayou and ditch system can move it, and homes with settled or poorly graded lots take water first.",
      },
      {
        title: "Bayou and drainage-channel overflow",
        body: "Clear Creek, Mary's Creek, and the county's drainage channels carry Pearland's storm water toward the bay. During tropical systems these channels can overtop, and the flat terrain means overflow spreads wide rather than staying in the channel. Several subdivisions flooded during Harvey from channel overflow, not just rainfall.",
      },
      {
        title: "Slab leaks in newer tract homes",
        body: "Even homes under 20 years old develop slab leaks here. Expansive clay soil moves with moisture cycles, stressing embedded supply lines, and poor initial grading lets water sit against slabs. Warm floor spots, high water bills, and damp flooring edges are the classic signs.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "structural-drying-dehumidification",
      "carpet-water-extraction",
    ],
    nearby: ["friendswood", "league-city", "houston", "missouri-city"],
    faqs: [
      {
        q: "Do flood repairs in Pearland need permits?",
        a: "Emergency drying generally doesn't. Rebuild work in FEMA-designated floodplains — including areas along Clear Creek and Mary's Creek — falls under Pearland's floodplain ordinance, which can require permits and elevation documentation for substantial improvements. Check with the city's permit center; this is general information, not legal advice.",
      },
      {
        q: "My neighborhood has detention ponds — can it still flood?",
        a: "Yes. Detention ponds are designed to slow runoff for a design-level storm, not to prevent all flooding. During extreme events they can fill and overtop, and streets designed as secondary drainage can carry water toward homes. If your street ponds deeply in heavy rain, your home's grading and foundation drainage matter more than the pond.",
      },
    ],
    updated: "2026-10-13",
  },
];

/**
 * The only way to print "City, ST". Never hardcode the state in templates.
 */
export function cityLabel(c: Pick<City, "slug" | "stateSlug">): string {
  const names: Record<string, string> = {
    houston: "Houston, TX",
    pasadena: "Pasadena, TX",
    baytown: "Baytown, TX",
    "sugar-land": "Sugar Land, TX",
    katy: "Katy, TX",
    conroe: "Conroe, TX",
    spring: "Spring, TX",
    pearland: "Pearland, TX",
    "league-city": "League City, TX",
    "missouri-city": "Missouri City, TX",
    richmond: "Richmond, TX",
    rosenberg: "Rosenberg, TX",
    humble: "Humble, TX",
    galveston: "Galveston, TX",
    "texas-city": "Texas City, TX",
    friendswood: "Friendswood, TX",
  };
  return names[c.slug] ?? c.slug;
}
