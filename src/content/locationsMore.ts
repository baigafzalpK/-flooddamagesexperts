/**
 * Additional city records + city/service cross-content for BayouDry Restoration.
 * Same rules as locations.ts: call brand, no crews/trucks/licenses/reviews/response times,
 * no prices, no invented facts. Content stays ABOUT each place.
 */
import type { City, CityService } from "./types";

export const moreCities: City[] = [
  {
    slug: "league-city",
    stateSlug: "texas",
    county: "Galveston County",
    status: "PUBLISHED",
    zips: ["77573", "77574"],
    areas: [
      "South Shore Harbour",
      "Bay Colony",
      "Tuscan Lakes",
      "Hidden Lakes",
      "Marina Bay",
    ],
    intro: [
      "League City sits between Houston and Galveston on the western shore of Clear Lake — a fast-growing suburb of waterfront subdivisions, marinas, and master-planned communities. Homes in South Shore Harbour and the bayfront corridors carry the highest water exposure; inland neighborhoods like Tuscan Lakes and Hidden Lakes trade surge risk for storm-rain ponding and bayou flooding.",
      "The city's waterfront identity is its vulnerability. Clear Creek feeds into the lake, and during hurricanes storm surge can push up through the lake into residential canals and low streets. Between storms, League City's water calls look like the rest of the bay area: slab leaks in tract subdivisions, sewage backups where lift stations meet heavy rain, and wind-driven rain through roofs and windows.",
    ],
    housingNotes: [
      "Waterfront and canal-front subdivisions (South Shore Harbour, Marina Bay) with bay homes, boat lifts, and ground floors at or near base flood elevation.",
      "1990s–2010s slab-on-grade tract subdivisions (Bay Colony, Tuscan Lakes, Hidden Lakes) with copper and PEX supply lines.",
      "Raised coastal construction in high-exposure zones, plus older homes near Clear Creek with aging drainage infrastructure.",
    ],
    localIssues: [
      {
        title: "Storm surge through Clear Lake",
        body: "During hurricanes, storm surge pushes from Galveston Bay up through Clear Lake into League City's canals, marinas, and waterfront streets. Ground-floor water in waterfront subdivisions is the signature event, and saltwater contamination makes professional removal of affected porous materials the standard response.",
      },
      {
        title: "High water table",
        body: "League City's proximity to the bay and lake means the water table sits high year-round. Groundwater pushes up through slab edges and into crawlspaces during wet seasons, and drainage systems that rely on gravity flow to the lake slow down when lake levels rise.",
      },
      {
        title: "Clear Creek flooding",
        body: "Clear Creek drains the area west of the lake and has a history of flooding during tropical systems. Homes along the creek corridor and its tributaries sit in mapped floodplains, and the flat terrain spreads overflow wide.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "structural-drying-dehumidification",
      "mold-remediation",
      "sewage-backup-cleanup",
    ],
    nearby: ["galveston", "texas-city", "friendswood", "baytown"],
    faqs: [
      {
        q: "What floodplain rules apply to repairs in League City?",
        a: "League City enforces floodplain development regulations tied to FEMA maps — a large share of the city, especially waterfront and creek-corridor areas, sits in designated zones. Substantial improvements can require permits and elevation documentation. Check with the city's planning office for your address; this is general information, not legal advice.",
      },
      {
        q: "How does a high water table affect my home?",
        a: "A high water table means groundwater is constantly pressing against your foundation. It seeps through slab cracks and cold joints, keeps crawlspaces damp, and overwhelms French drains designed for rain alone. A local specialist treats water-table intrusion as an ongoing condition — interior drainage and vapor management — not a one-time leak.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "missouri-city",
    stateSlug: "texas",
    county: "Fort Bend County",
    status: "PUBLISHED",
    zips: ["77459", "77489"],
    areas: [
      "Quail Valley",
      "Lake Olympia",
      "Sienna",
      "Riverstone",
      "Teal Run",
    ],
    intro: [
      "Missouri City is Fort Bend County's eastern anchor — older than its master-planned neighbors but growing into them, with Quail Valley's 1970s lake communities sitting beside the sprawling Sienna and Riverstone developments. The housing runs from lakefront and golf-course homes of the 1970s and 80s to brand-new tract construction.",
      "Water risk here is a mix of old and new. Quail Valley's lake-adjacent homes and older plumbing produce steady slab-leak and sewer calls; the newer master-planned areas deal with prairie-flat drainage and detention pond behavior during extreme rain. Buffalo Bayou's upper reaches and the city's bayou network shape flood exposure across the eastern neighborhoods.",
    ],
    housingNotes: [
      "1970s–1980s lakefront and golf-course communities (Quail Valley, Lake Olympia) with aging copper supply lines and original cast-iron or clay drains.",
      "2000s–2020s master-planned subdivisions (Sienna, Riverstone portions) with slab-on-grade foundations and modern plumbing.",
      "Lake-adjacent lots with high water tables and shoreline drainage conditions.",
    ],
    localIssues: [
      {
        title: "Lake Quail Valley and shoreline drainage",
        body: "Homes around Lake Quail Valley and the area's other water features sit with groundwater pressure from the lake side. Shoreline erosion, saturated lots, and water seeping through slab edges are chronic issues in the lake communities.",
      },
      {
        title: "Aging plumbing in Quail Valley-era homes",
        body: "The 1970s and 80s homes that anchor Missouri City are now on plumbing past its expected life. Copper pinhole leaks, failing water heaters, and root-intruded sewer lines produce the city's routine water calls — often discovered during remodels or as slow damage behind walls.",
      },
      {
        title: "Flat prairie drainage in new developments",
        body: "The newer eastern subdivisions sit on flat former farmland where storm water moves slowly. During extreme rain, detention ponds fill and streets pond, and homes with marginal grading take water at the slab edge first.",
      },
    ],
    popularServices: [
      "burst-pipe-water-damage",
      "emergency-water-extraction",
      "sewage-backup-cleanup",
      "structural-drying-dehumidification",
      "hardwood-floor-drying",
    ],
    nearby: ["sugar-land", "richmond", "pearland", "houston"],
    faqs: [
      {
        q: "Do water-damage repairs in Missouri City need permits?",
        a: "Emergency drying and extraction generally don't. Rebuild work in FEMA-designated floodplain areas — including bayou and creek corridors — falls under the city's floodplain ordinance, which can require permits and elevation documentation for substantial improvements. Check with the city's development services; this is general information, not legal advice.",
      },
      {
        q: "Is lake-adjacent seepage different from a plumbing leak?",
        a: "Yes. Seepage is groundwater or lake-influenced water pushing through the foundation continuously, while a plumbing leak is a point source that can be repaired. A local water-damage specialist distinguishes the two with moisture mapping — treating seepage as drainage management and a leak as a plumbing repair plus drying.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "richmond",
    stateSlug: "texas",
    county: "Fort Bend County",
    status: "PUBLISHED",
    zips: ["77406", "77407", "77469"],
    areas: [
      "Historic Richmond",
      "Wessendorff Park",
      "Harvest Green",
      "Aliana",
      "Long Meadow Farms",
    ],
    intro: [
      "Richmond is Fort Bend County's historic seat — a small city with a genuine 19th-century downtown now ringed by some of the metro's newest master-planned communities. Historic Richmond's older homes sit near the Brazos River; Harvest Green, Aliana, and Long Meadow Farms are sprawling 2010s developments on former farmland.",
      "The contrast in housing age creates two distinct water profiles. Historic homes near the river deal with flood exposure, aging plumbing, and pier-and-beam foundations. The new master-planned communities deal with flat-prairie drainage, slab leaks from soil movement, and upstairs-plumbing failures in two-story tract homes.",
    ],
    housingNotes: [
      "Historic homes in old Richmond: early-1900s to mid-century pier-and-beam and slab construction near the Brazos River, with aging plumbing and flood exposure.",
      "2010s–2020s master-planned subdivisions (Harvest Green, Aliana, Long Meadow Farms) with slab-on-grade foundations, PEX supply lines, and upstairs laundry rooms.",
      "River-adjacent properties along the Brazos with mapped floodplain exposure.",
    ],
    localIssues: [
      {
        title: "Brazos River flood exposure",
        body: "The Brazos River runs along Richmond's east side, and neighborhoods near the river sit in mapped floodplains. During major rain events the river rises and backs up drainage channels, and river water is contaminated — professional flood cleanup is the standard response.",
      },
      {
        title: "Flat prairie drainage in new subdivisions",
        body: "Richmond's newest communities sit on flat former farmland where fractions of a percent of grade decide where water goes. During extreme rain, streets and detention ponds carry water designed to bypass homes — but homes with marginal grading or low slab elevations take water first.",
      },
      {
        title: "Aging plumbing in historic homes",
        body: "Homes in historic Richmond that predate modern plumbing codes may carry galvanized, cast-iron, or mixed-era pipe systems. Slow leaks under pier-and-beam floors can run for months, and the area's humidity accelerates mold growth in undried spaces.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "structural-drying-dehumidification",
      "mold-remediation",
    ],
    nearby: ["rosenberg", "sugar-land", "missouri-city", "katy"],
    faqs: [
      {
        q: "What permits cover flood repair near the Brazos in Richmond?",
        a: "Emergency drying doesn't typically require permits. Rebuild work in FEMA-designated floodplains along the Brazos falls under floodplain regulations that can require permits and elevation documentation for substantial improvements. Check with the city's permit office for your address; this is general information, not legal advice.",
      },
      {
        q: "Why do new subdivisions flood when the houses are brand new?",
        a: "Newness doesn't fix topography. Flat land, detention ponds sized for design storms, and drainage that depends on channels staying clear mean extreme rain can overwhelm the system regardless of home age. In master-planned areas, lot grading and slab elevation relative to the street matter more than the home's age.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "rosenberg",
    stateSlug: "texas",
    county: "Fort Bend County",
    status: "PUBLISHED",
    zips: ["77471"],
    areas: [
      "Historic Downtown Rosenberg",
      "Canyon Gate",
      "Brazos Town Center",
      "Bonbrook",
      "Springhill",
    ],
    intro: [
      "Rosenberg is Richmond's twin across the railroad — a working city with a historic downtown core, older neighborhoods from the mid-1900s, and newer subdivisions pushing west into former farmland. It's more affordable than its eastern neighbors, which means more first-time buyers inheriting older plumbing they didn't install.",
      "The Brazos River forms Rosenberg's eastern boundary, and the same riverine flood exposure as Richmond applies to neighborhoods near it. Inland, the water calls are the Fort Bend staples: slab leaks, water-heater failures, aging cast-iron drains, and storm-water ponding on flat lots.",
    ],
    housingNotes: [
      "Mid-century homes in the historic core and older neighborhoods: pier-and-beam and early slab construction with aging cast-iron drains and galvanized supply lines.",
      "2000s–2010s subdivisions (Canyon Gate, Bonbrook) with slab-on-grade foundations and copper/PEX plumbing.",
      "Brazos River-adjacent neighborhoods with mapped floodplain exposure.",
    ],
    localIssues: [
      {
        title: "Brazos River flooding",
        body: "The Brazos borders Rosenberg to the east, and neighborhoods near the river carry mapped flood exposure. During major rain events the river rises and drainage channels back up, pushing contaminated water into low-lying homes.",
      },
      {
        title: "Aging cast-iron drains in the older core",
        body: "Rosenberg's mid-century neighborhoods still run on original cast-iron and clay sewer lines. Roots, corrosion, and heavy rain combine to produce sewage backups — contaminated events that need professional removal and disinfection.",
      },
      {
        title: "Slab leaks on expansive clay",
        body: "The city's newer slab-on-grade subdivisions sit on the same expansive Fort Bend clay as Sugar Land and Katy. Soil movement stresses embedded supply lines, producing the classic warm-spot and high-water-bill slab leaks.",
      },
    ],
    popularServices: [
      "burst-pipe-water-damage",
      "emergency-water-extraction",
      "sewage-backup-cleanup",
      "flood-damage-cleanup",
      "drywall-ceiling-restoration",
    ],
    nearby: ["richmond", "sugar-land", "katy", "missouri-city"],
    faqs: [
      {
        q: "Do I need a permit for water-damage repair in Rosenberg?",
        a: "Emergency extraction and drying generally don't require permits. Rebuild work in FEMA-designated floodplain areas near the Brazos falls under floodplain rules that can require permits and elevation documentation for substantial improvements. Check with the city; this is general information, not legal advice.",
      },
      {
        q: "My home is from the 1960s — what plumbing should I worry about?",
        a: "Cast-iron drain lines and galvanized supply lines are the two most likely originals still in place. Cast iron corrodes from the inside and is vulnerable to root intrusion; galvanized steel narrows with mineral buildup and develops pinhole leaks. A local specialist can advise on which failure you're seeing based on where the water appears.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "humble",
    stateSlug: "texas",
    county: "Harris County",
    status: "PUBLISHED",
    zips: ["77338", "77346", "77396"],
    areas: [
      "Downtown Humble",
      "Deerbrook",
      "Atascocita",
      "Townsen Corridor",
      "Summerwood Edge",
    ],
    intro: [
      "Humble sits at Houston's northeastern edge where the metro meets the piney woods and Lake Houston — a city of mid-century neighborhoods, the Deerbrook commercial corridor, and unincorporated communities like Atascocita that share its services. Lake Houston to the east and the San Jacinto River watershed shape its flood exposure.",
      "The water profile here blends city and woods. Older Humble neighborhoods carry aging plumbing and settled grading; the lake and river bring flood exposure during tropical systems; and the pine canopy brings the same root-intrusion sewer problems as Conroe and Spring. The 2021 freeze burst pipes across the area's older homes particularly hard.",
    ],
    housingNotes: [
      "Mid-century single-family neighborhoods (1950s–1980s) with aging copper, galvanized, and cast-iron plumbing.",
      "Lake Houston-adjacent homes with waterfront exposure and high water tables.",
      "2000s–2010s subdivisions in Atascocita and along the Townsen corridor with slab-on-grade foundations and modern plumbing.",
    ],
    localIssues: [
      {
        title: "Lake Houston and San Jacinto River flooding",
        body: "Lake Houston and the San Jacinto River put eastern Humble neighborhoods in mapped floodplains. During hurricanes and dam-release events, lake and river levels rise into low-lying homes — and the water is contaminated runoff, requiring professional flood cleanup.",
      },
      {
        title: "Pine-root sewer intrusion",
        body: "Humble's pine canopy sends roots into the aging clay and cast-iron sewer lines of its mid-century neighborhoods. Backups during heavy rain are the recurring outcome, and finished lower levels suffer the worst damage.",
      },
      {
        title: "Freeze damage in older homes",
        body: "The February 2021 freeze burst supply lines across Humble's older housing stock — exposed pipes in attics, crawlspaces, and exterior walls. Many homes repaired quickly without full drying, and hidden moisture from those events still shows up as mold and warped flooring years later.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "sewage-backup-cleanup",
      "mold-remediation",
    ],
    nearby: ["houston", "spring", "conroe", "baytown"],
    faqs: [
      {
        q: "What floodplain rules apply around Lake Houston?",
        a: "Harris County's floodplain regulations apply in FEMA-designated zones around Lake Houston and the San Jacinto River, and Humble's own ordinances cover properties inside city limits. Substantial improvements in those zones can require permits and elevation documentation. Check with the county or city permit office; this is general information, not legal advice.",
      },
      {
        q: "I repaired freeze-burst pipes in 2021 but now smell mustiness — what happened?",
        a: "Likely incomplete drying. Burst-pipe repairs often fix the plumbing without drying the wall cavities, insulation, and subflooring the water reached. In Humble's humid climate, trapped moisture grows mold and warps materials over months. A local water-damage specialist uses moisture meters and thermal imaging to find where the old water is still hiding.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "galveston",
    stateSlug: "texas",
    county: "Galveston County",
    status: "PUBLISHED",
    zips: ["77550", "77551", "77554"],
    areas: [
      "The Strand District",
      "East End Historic District",
      "Sea Isle",
      "Pirates Beach",
      "West End",
    ],
    intro: [
      "Galveston is a barrier island city — and water damage here is not a risk but a certainty over time. The East End Historic District's Victorian homes, the Strand's commercial buildings, and the West End's beach houses all sit exposed to the Gulf on one side and the bay on the other. Every hurricane season is a planning season.",
      "The island's building code reflects this: raised construction, breakaway walls, and strict elevation rules in the highest-exposure zones. But historic homes predate modern codes, and even elevated homes take wind-driven rain through roofs and windows. Saltwater exposure, high water tables, and near-constant humidity define the restoration work here.",
    ],
    housingNotes: [
      "Historic Victorian and early-1900s homes in the East End Historic District: pier construction, wood siding, and pre-code elevations — irreplaceable materials meet maximum exposure.",
      "Raised coastal construction on the West End (Sea Isle, Pirates Beach) built to elevation standards, with breakaway ground floors and stilt construction.",
      "The Strand's historic commercial buildings with masonry construction and flat roofs vulnerable to wind-driven rain.",
    ],
    localIssues: [
      {
        title: "Hurricane storm surge",
        body: "As a barrier island, Galveston takes the full force of storm surge during hurricanes — from the Gulf side and from the bay side simultaneously. Ground floors flood with saltwater, and in the highest zones even elevated homes take wind-driven rain. Saltwater contamination requires professional removal of affected porous materials.",
      },
      {
        title: "High water table and standing humidity",
        body: "The water table on the island sits just feet below grade, and ambient humidity stays high year-round. Groundwater pushes into ground-floor spaces, drying equipment works harder and longer, and any undried moisture becomes mold quickly in the island climate.",
      },
      {
        title: "Historic materials vs. modern water",
        body: "East End Victorians were built with old-growth wood, lime plaster, and materials that behave differently from modern drywall and pine framing. Improper drying can destroy irreplaceable historic fabric — a local specialist who understands historic construction adjusts drying targets and methods rather than applying a one-size-fits-all protocol.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "structural-drying-dehumidification",
      "mold-remediation",
      "roof-leak-water-damage",
    ],
    nearby: ["texas-city", "league-city", "friendswood", "baytown"],
    faqs: [
      {
        q: "What are the rules for rebuilding on Galveston after storm damage?",
        a: "Galveston enforces some of the strictest floodplain and coastal regulations in the metro, tied to FEMA flood maps and VE zones on the Gulf side. Substantially damaged structures in designated zones must be brought into compliance — which can mean elevation. Check with the city's development services before any rebuild; this is general information, not legal advice.",
      },
      {
        q: "Is saltwater damage really that different from freshwater?",
        a: "Yes. Saltwater corrodes metal fasteners, wiring, and HVAC components, deposits minerals into porous materials, and carries bay and Gulf contamination. A local water-damage specialist treats saltwater events as a separate category — more material removal, different cleaning chemistry, and adjusted drying protocols for the island's humidity.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "texas-city",
    stateSlug: "texas",
    county: "Galveston County",
    status: "PUBLISHED",
    zips: ["77590", "77591", "77592"],
    areas: [
      "Downtown Texas City",
      "Lago Mar",
      "Bay Street Corridor",
      "Northside",
      "Texas City Dike Area",
    ],
    intro: [
      "Texas City is an industrial port city on Galveston Bay's western shore — refineries and the famous Texas City Dike on the water side, mid-century neighborhoods in the middle, and the fast-growing Lago Mar master-planned community pushing west. It's a city where hurricane exposure and industrial-town housing age meet.",
      "The bay defines the risk. Storm surge pushes into bayfront neighborhoods and the low-lying areas near the dike during hurricanes, while the city's older core runs on aging water and sewer infrastructure that fails during heavy rain. Lago Mar's newer homes trade surge risk for the flat-prairie drainage challenges of the mainland.",
    ],
    housingNotes: [
      "Mid-century neighborhoods (1940s–1970s) in the older core with aging cast-iron drains, galvanized supply lines, and older water heaters.",
      "Lago Mar and newer western subdivisions: 2000s–2020s slab-on-grade tract homes with modern plumbing.",
      "Bayfront and dike-adjacent properties with storm-surge exposure and saltwater-flood history.",
    ],
    localIssues: [
      {
        title: "Storm surge from Galveston Bay",
        body: "Texas City's long bayfront — including the dike area — takes storm surge directly during hurricanes. Bayfront neighborhoods and low-lying areas near the industrial complex have flooded with saltwater in major storms, requiring professional removal of contaminated materials.",
      },
      {
        title: "Aging infrastructure in the older core",
        body: "The mid-century neighborhoods around downtown run on some of the oldest residential plumbing on the bay side. Cast-iron sewer lines, galvanized supply lines, and decades-old water heaters fail on schedule, and heavy rain turns every weak point into a backup or burst.",
      },
      {
        title: "Flat mainland drainage in new subdivisions",
        body: "Lago Mar and the western subdivisions sit on flat former prairie where storm water moves slowly. During extreme rain, detention ponds and channels carry the load — and homes with marginal grading take water at the slab edge first.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "sewage-backup-cleanup",
      "structural-drying-dehumidification",
    ],
    nearby: ["galveston", "league-city", "baytown", "friendswood"],
    faqs: [
      {
        q: "What permits apply to storm repairs in Texas City?",
        a: "Emergency drying doesn't typically need permits. Rebuild work in FEMA-designated flood zones — which cover much of the bayfront and low-lying areas — falls under the city's floodplain regulations, which can require permits and elevation documentation for substantial improvements. Check with the city's building inspections office; this is general information, not legal advice.",
      },
      {
        q: "Does the Texas City Dike protect homes from flooding?",
        a: "The dike protects the industrial complex and port from wave action — it was not built to protect residential neighborhoods from storm surge or rainfall flooding. Bayfront and low-lying homes still carry real surge exposure during hurricanes, and the dike can even slow drainage back out after a storm passes.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    slug: "friendswood",
    stateSlug: "texas",
    county: "Galveston County",
    status: "PUBLISHED",
    zips: ["77546"],
    areas: [
      "Downtown Friendswood",
      "Blackhawk Corridor",
      "Imperial Estates",
      "Heritage Colony",
      "Friendswood Lakes",
    ],
    intro: [
      "Friendswood is a quiet, affluent suburb straddling Galveston and Harris counties between Pearland and League City — a city of 1970s–2000s subdivisions, good schools, and a small-town feel. The housing is overwhelmingly single-family slab-on-grade, well maintained, and newer than the metro average.",
      "That doesn't mean dry. Clear Creek runs through Friendswood, and the city's low-lying areas have flooded during tropical systems — including neighborhoods that considered themselves safe. The water calls here are the suburban routine: slab leaks, appliance and water-heater failures, and creek-driven flooding when the watershed overwhelms.",
    ],
    housingNotes: [
      "1970s–2000s slab-on-grade subdivisions with copper and PEX supply lines — slab leaks are the signature call.",
      "Newer developments along the Blackhawk corridor with modern plumbing and two-story tract homes with upstairs laundry.",
      "Creek-adjacent neighborhoods along Clear Creek with mapped floodplain exposure.",
    ],
    localIssues: [
      {
        title: "Clear Creek flooding",
        body: "Clear Creek runs through Friendswood and has a documented flood history during tropical systems. Homes along the creek corridor sit in mapped floodplains, and the flat terrain spreads overflow beyond the banks into streets and yards.",
      },
      {
        title: "Slab leaks in established subdivisions",
        body: "Friendswood's large stock of slab-on-grade homes on expansive clay produces steady slab-leak calls. Soil movement stresses embedded lines, and leaks travel under flooring before surfacing — warm spots, high water bills, and damp edges are the classic signs.",
      },
      {
        title: "Upstairs laundry and appliance failures",
        body: "The city's two-story tract homes concentrate plumbing risk on the second floor. A burst washer hose or failed water heater upstairs sends water through ceilings into living space below — a two-level event that needs immediate extraction and structural drying.",
      },
    ],
    popularServices: [
      "flood-damage-cleanup",
      "emergency-water-extraction",
      "burst-pipe-water-damage",
      "structural-drying-dehumidification",
      "appliance-leak-cleanup",
    ],
    nearby: ["pearland", "league-city", "galveston", "texas-city"],
    faqs: [
      {
        q: "Do flood repairs in Friendswood need permits?",
        a: "Emergency drying generally doesn't. Rebuild work in FEMA-designated floodplain areas along Clear Creek falls under floodplain regulations that can require permits and elevation documentation for substantial improvements. Check with the city; this is general information, not legal advice.",
      },
      {
        q: "My Friendswood home is newer — do I still need to worry about slab leaks?",
        a: "Yes. Slab leaks here are driven by soil movement, not just pipe age — expansive clay shifts with moisture cycles and stresses even modern PEX and copper lines. Newer homes also run more plumbing through slabs and attics. If you notice a warm floor spot or a rising water bill, have a local specialist check before the damage spreads.",
      },
    ],
    updated: "2026-10-13",
  },
];

export const cityServices: CityService[] = [
  {
    citySlug: "houston",
    serviceSlug: "flood-damage-cleanup",
    status: "PUBLISHED",
    localAngle: [
      "Houston's floods are not generic rain events — they are bayou floods, storm-surge floods, and flat-prairie sheet floods, often in combination. Buffalo Bayou, Brays Bayou, and White Oak Bayou drain the metro, and during tropical systems they can rise faster than streets drain. Neighborhoods from Meyerland to Kingwood have taken water in events that arrived as rain in one part of the city and as bayou overflow in another. A flood cleanup plan in Houston starts by identifying which water you're dealing with, because floodwater here is contaminated — runoff, sewage, and chemicals mixed together — and that changes every decision downstream.",
      "The city's floodplain geography also shapes the rebuild side. Large parts of Houston sit in FEMA-designated flood zones, and the city's floodplain ordinance treats repairs above a threshold as substantial improvements — which can trigger elevation and permitting requirements. Homes inside the Loop with pier-and-beam foundations dry differently from slab-on-grade subdivisions in Clear Lake or Kingwood, and high water tables mean groundwater keeps working against foundations long after the surface water is gone. In Houston's year-round humidity, drying equipment runs longer and moisture targets are harder to hold.",
      "Insurance documentation matters as much as the drying itself. Flood damage in Houston often involves both homeowners insurance and the National Flood Insurance Program, which have different adjusters, different rules, and different timelines. A local water-damage specialist documents damage with the photo logs, moisture readings, and material inventories that adjusters expect — because in a city that has filed this many flood claims, the paperwork is part of the recovery.",
    ],
    localFaqs: [
      {
        q: "Is Houston floodwater safe to clean up myself?",
        a: "No — treat all Houston floodwater as contaminated. It carries sewage, chemicals, and debris picked up across the metro, and it soaks into porous materials that can't be disinfected in place. Protective gear, professional extraction, and removal of affected drywall, carpet pad, and insulation are the standard approach.",
      },
      {
        q: "My home flooded but isn't in a mapped floodplain — does that change anything?",
        a: "It doesn't change the cleanup, and it may not change the insurance picture either — many Houston homes that flooded in recent events were outside mapped floodplains. It does affect permitting: rebuild rules are stricter inside designated zones, but the drying and documentation work is the same regardless of the map.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    citySlug: "houston",
    serviceSlug: "emergency-water-extraction",
    status: "PUBLISHED",
    localAngle: [
      "In Houston, water extraction is rarely about a single appliance — it's about slab leaks under post-tension slabs, burst pipes in 100-year-old bungalows, sewage backups during spring downpours, and storm water finding every gap in a flat-roofed townhome. The first job is always the same: find the water's full extent before it finds yours. Houston's clay soil holds water against foundations, its humidity slows natural drying to a crawl, and its heat turns a soaked wall cavity into a mold farm within days. Extraction that starts fast and reaches everywhere matters more here than in drier climates.",
      "The housing mix changes the extraction playbook by neighborhood. Inside the Loop, pier-and-beam bungalows in the Heights and Montrose need under-house extraction and crawlspace drying — water pools under the floor and hides there. In slab-on-grade subdivisions across the west side and Kingwood, slab leaks push water laterally under flooring, so the visible wet spot is rarely the full picture. In Galleria-corridor apartments and mid-rises, water migrates down through units, and extraction has to coordinate with building management across floors.",
      "What you do in the first hours sets the ceiling on the recovery. A local water-damage specialist arrives with truck-mounted or portable extraction, moisture meters, and thermal imaging — not just a wet vac. They map the migration path, pull water from carpet, pad, and hard surfaces, and set the drying plan before mold gets its foothold. In Houston's climate, that window is shorter than most homeowners expect.",
    ],
    localFaqs: [
      {
        q: "How fast does water need to be extracted in Houston?",
        a: "As fast as possible — Houston's heat and humidity accelerate mold growth, which can start within 24 to 48 hours in soaked materials. The longer water sits, the more it wicks into drywall, subflooring, and framing, and the more material has to be removed rather than dried. Call a specialist first, then document for insurance while extraction is underway.",
      },
      {
        q: "Can I just use my own wet vac and fans?",
        a: "For a small, clean-water spill — maybe. For anything that soaked flooring, walls, or multiple rooms, no: household equipment can't pull water from carpet pad or wall cavities, and without moisture meters you can't tell what's actually dry. In Houston's humidity, surfaces feel dry long before the structure is.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    citySlug: "katy",
    serviceSlug: "burst-pipe-water-damage",
    status: "PUBLISHED",
    localAngle: [
      "Katy learned about burst pipes the hard way in February 2021, when the freeze burst supply lines across the metro by the thousands. The area's newer subdivisions were hit especially hard: many Katy homes run water lines through attics and exterior walls, putting pipes in unconditioned spaces that dropped well below freezing during the multi-day outage. When the thaw came, water ran for hours — sometimes days — before homeowners discovered it. The damage pattern in Katy is distinctive: ceilings collapsed in two-story tract homes, attics soaked insulation and drywall across entire wings, and garages flooded where lines burst in unheated walls.",
      "The geography of Katy's plumbing explains why bursts are so destructive here. Two-story master-planned homes concentrate the risk upstairs — a burst line in an attic or a second-floor bathroom sends water down through ceilings into living space, doubling the affected area. Slab-on-grade construction means supply lines also run under concrete, where freeze damage can be hidden until the bill arrives. And because so many Katy homes were built in the same era by the same builders, the same vulnerable pipe routings repeat across entire subdivisions.",
      "Recovery follows a sequence: shut off the main, get the plumbing repaired, then extract and dry before mold takes hold. Katy's burst-pipe jobs almost always involve ceiling and drywall work — the water comes from above — so the drying plan has to reach into wall cavities and attic spaces, not just the floors. A local water-damage specialist documents everything for the insurance claim as they go, because burst-pipe claims in Katy are common enough that adjusters have seen them all and expect thorough records.",
    ],
    localFaqs: [
      {
        q: "What should I do first when I discover a burst pipe?",
        a: "Shut off the main water valve — usually at the street meter or where the line enters the home — then shut off electricity to any wet areas. Don't touch standing water near outlets or panels. Then call a plumber for the repair and a water-damage specialist for extraction; the plumbing fix stops the source, but the drying determines what survives.",
      },
      {
        q: "Are Katy homes still vulnerable to freezes after 2021?",
        a: "Many are. Homes built since the freeze often have better-insulated or rerouted plumbing, but the existing stock — hundreds of thousands of homes — still carries supply lines in attics, exterior walls, and unheated garages. Drip faucets and cabinet doors help during a freeze, but the underlying routing hasn't changed in most homes.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    citySlug: "sugar-land",
    serviceSlug: "sewage-backup-cleanup",
    status: "PUBLISHED",
    localAngle: [
      "Sewage backups in Sugar Land follow a pattern familiar across Fort Bend County's master-planned suburbs: heavy rain overwhelms a section of the system — a lift station, a gravity main, a lateral choked with roots — and contaminated water backs up through the lowest drain in the home. First Colony's 1980s-era lines are now forty years old; Riverstone and Telfair are newer but sit on flat ground where storm water has nowhere to go fast. The result is the same: black water in bathrooms, laundry rooms, and ground-floor spaces, carrying pathogens that make this a very different job from a clean-water leak.",
      "What makes sewage cleanup different is that drying alone is never enough. Porous materials the sewage touches — carpet and pad, lower drywall, subflooring, baseboards — generally cannot be disinfected in place and must be removed by a professional. Hard surfaces get cleaned and disinfected with products rated for the contamination, and the affected area is dried and verified with moisture readings before anything is rebuilt. In Sugar Land's humidity, that verification step is critical: trapped moisture behind a rebuilt wall becomes a mold problem within weeks.",
      "Prevention is part of the conversation too. Backwater valves on the main lateral can stop city-side surges from entering the home — a common recommendation for homes that have backed up once, since recurrence is likely. And where backups trace to root intrusion or aging clay and cast-iron lines, a camera inspection of the lateral tells you whether the problem is yours, the city's, or both. A local water-damage specialist handles the contamination; a plumber with a camera addresses the line.",
    ],
    localFaqs: [
      {
        q: "Is a sewage backup dangerous to clean up myself?",
        a: "Yes — sewage is contaminated water carrying bacteria, viruses, and parasites, and it requires protective equipment and proper disinfection to handle safely. Without professional removal of affected porous materials, contamination stays in the structure. Leave the cleanup to a specialist and keep children and pets away from the area.",
      },
      {
        q: "Does homeowners insurance cover sewage backups in Sugar Land?",
        a: "Standard homeowners policies typically exclude sewer backup unless you've added a water-backup endorsement — many Sugar Land homeowners discovered this after their first backup. Check your policy for a sewer and drain backup rider before you need it; the endorsement is usually inexpensive compared to the cleanup.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    citySlug: "pasadena",
    serviceSlug: "structural-drying-dehumidification",
    status: "PUBLISHED",
    localAngle: [
      "Structural drying in Pasadena is a humidity problem as much as a water problem. The city's mid-century homes — pier-and-beam bungalows and early slab ranches along the ship channel corridor — sit in one of the most humid microclimates in the metro, with bay moisture, industrial-area heat, and flat lots that hold water against foundations. Pulling standing water out is the easy part; getting the structure genuinely dry in air this wet is the actual work. Without industrial dehumidification sized to the space and the season, wall cavities and subfloors stay damp for weeks — and in Pasadena's climate, damp becomes mold fast.",
      "The housing stock shapes the drying plan. Pier-and-beam homes in Southmore and Strawberry Park need under-house drying: crawlspaces with poor ventilation where water pools and hides, accessible only through small access points. Slab homes need moisture mapping across the slab, because water migrates laterally under flooring far from where it entered. Older homes with plaster walls dry differently from drywall — plaster holds moisture longer and releases it slower, which changes equipment placement and drying targets.",
      "Professional drying is measured, not guessed. A local water-damage specialist takes baseline moisture readings in walls, floors, and framing, sets dehumidifiers and air movers to create the right drying conditions, and returns to verify readings against dry standards before equipment comes out. In Pasadena's older homes, that verification is what separates a dry structure from one that grows mold behind fresh paint six months later.",
    ],
    localFaqs: [
      {
        q: "Why can't I just run fans and open windows to dry my home?",
        a: "In Pasadena's humidity, open windows often add moisture rather than removing it — Gulf air is wet most of the year. Household fans move air but don't remove moisture from the air or from inside wall cavities and subfloors. Professional drying uses dehumidifiers to pull moisture out of the air and directed airflow to pull it out of materials, verified with meters.",
      },
      {
        q: "How long does structural drying take in this climate?",
        a: "It depends on the materials, the water category, and the season — typically several days for a contained event, longer for saturated framing or plaster. What matters isn't the calendar but the readings: equipment stays until moisture levels in the structure match dry standards for the area. A specialist should show you the readings, not just a timeline.",
      },
    ],
    updated: "2026-10-13",
  },
  {
    citySlug: "conroe",
    serviceSlug: "mold-remediation",
    status: "PUBLISHED",
    localAngle: [
      "Mold in Conroe has two hometowns: the piney-woods humidity that never fully leaves, and the water events that feed it. A slow slab leak under a Tavola subdivision home, a sewage backup from pine-root intrusion in an older downtown neighborhood, an attic soaked during a storm — in Montgomery County's climate, any of these becomes a mold job if the moisture isn't found and dried completely. The 2021 freeze added a backlog: pipes burst, repairs were made, and in many homes the drying was skipped — so mold from three-year-old water is still being discovered behind walls and under floors today.",
      "Texas law draws a line that matters here. Mold remediation companies and workers in Texas need licenses from the Texas Department of Licensing and Regulation (TDLR) — one of the few regulated corners of the restoration industry in this state. When you're hiring for mold work in Conroe, the license is the first thing to verify, and a legitimate specialist will show it without being asked. Texas also requires specific protocols for larger mold projects, including containment and documentation.",
      "The remediation itself follows a defined sequence: find the moisture source and fix it, contain the affected area so spores don't spread through the home, remove contaminated porous materials, clean and treat the remaining structure, and dry everything to verified standards. In Conroe's older pier-and-beam homes, that often means working in crawlspaces with limited access; in newer subdivisions, it means opening walls where a slow leak hid for months. The job isn't done when the visible mold is gone — it's done when the moisture that fed it is gone too.",
    ],
    localFaqs: [
      {
        q: "Does mold remediation in Texas require a license?",
        a: "Yes — Texas requires mold remediation companies and workers to hold TDLR mold licenses, and assessors who test for mold need separate assessor licenses. This is one of the few parts of water-damage work Texas regulates at the state level. Ask to see the license before work begins.",
      },
      {
        q: "Can I just bleach the mold myself?",
        a: "Bleach doesn't work on porous materials — it kills surface mold on hard surfaces but leaves roots in drywall, wood, and grout, and the water in bleach can actually feed the mold. Worse, scrubbing mold without containment spreads spores through the home. For anything beyond a small surface spot on tile or glass, professional remediation with containment is the right call.",
      },
    ],
    updated: "2026-10-13",
  },
];
