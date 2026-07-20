export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: ("residential" | "commercial")[];
  tagline: string;
  metaDescription: string;
  heroSummary: string;
  overview: string[];
  goodFor: string[];
  process: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "surface-cleaning",
    name: "Surface Cleaning",
    shortName: "Surface Cleaning",
    category: ["residential", "commercial"],
    tagline: "Driveways, sidewalks & concrete, stripped back to new",
    metaDescription:
      "Professional surface cleaning for driveways, sidewalks, and concrete in Zebulon, NC and across the NC/VA region. Flat-surface pressure washing that lifts oil, algae, and tire marks without etching the slab.",
    heroSummary:
      "A rotary surface cleaner rides just above the concrete, so every pass overlaps evenly and there are no streak marks left behind from a wand.",
    overview: [
      "Concrete looks gray until you clean it, then you find out it was actually white. Surface cleaning targets driveways, sidewalks, walkways, and any flat hardscape where algae, mildew, oil residue, and general grime build up over time.",
      "We use a rotary surface cleaner rather than a handheld wand for flat work. The enclosed spinning head keeps water contained, cleans in consistent overlapping circles, and eliminates the striping or 'zebra' pattern that comes from uneven wand technique. That means a cleaner result and a faster job.",
      "Water pressure and dwell time are adjusted per surface. Stamped concrete, exposed aggregate, and standard broom-finish concrete all respond differently, and we set up accordingly so the finish stays intact while the buildup comes off.",
    ],
    goodFor: [
      "Driveways and parking pads",
      "Sidewalks and front walkways",
      "Garage floors and carports",
      "Parking lots and drive-thru lanes (commercial)",
      "Warehouse aprons and loading areas",
    ],
    process: [
      { title: "Pre-treat", detail: "Oil spots, rust staining, and heavy organic growth get a pre-treatment application so the surface cleaner isn't fighting the toughest spots alone." },
      { title: "Surface clean", detail: "The rotary head passes in overlapping rows across the entire slab, lifting embedded dirt out of the surface pores." },
      { title: "Edge & detail", detail: "Wand work along edges, expansion joints, and tight corners the rotary head can't reach." },
      { title: "Rinse & inspect", detail: "A final rinse clears loosened debris, and we walk the surface with you before we call it done." },
    ],
    faqs: [
      {
        q: "Will pressure washing damage my concrete?",
        a: "Standard broom-finish concrete holds up well to properly calibrated surface cleaning. We adjust pressure and nozzle selection for stamped, sealed, or decorative concrete so the finish isn't disturbed.",
      },
      {
        q: "How often should a driveway be cleaned?",
        a: "Most homes in our service area do well with an annual cleaning. Shaded driveways or ones near heavy tree cover can develop algae faster and may benefit from cleaning every 6-9 months.",
      },
      {
        q: "Can you remove oil stains completely?",
        a: "Fresh oil stains usually lift well with pre-treatment and hot water. Older, deeply set stains may lighten significantly but not disappear entirely - we'll give you an honest expectation before starting.",
      },
    ],
  },
  {
    slug: "soft-wash-house-washing",
    name: "Soft Wash / House Washing",
    shortName: "Soft Wash",
    category: ["residential", "commercial"],
    tagline: "Low-pressure house washing that's safe on siding",
    metaDescription:
      "Soft wash house washing in Zebulon, NC and the surrounding NC/VA area. Low-pressure, chemical-based cleaning that removes algae and mildew from vinyl, brick, stucco, and painted siding without damage.",
    heroSummary:
      "House washing uses low pressure and the right cleaning solution to do the work, not brute force against your siding.",
    overview: [
      "Soft washing is the correct method for cleaning the exterior of a home. Instead of blasting siding with high pressure, which can force water behind panels, strip paint, or crack stucco, we apply a low-pressure, controlled cleaning solution that breaks down algae, mildew, and dirt at the surface, then rinse it away gently.",
      "This is the method that actually kills the black streaks and green algae you see on siding, not just knocks the visible layer off. Because the solution addresses the organic growth itself, results also last considerably longer than a straight pressure rinse.",
      "We work around windows, outlets, light fixtures, and landscaping, and pre-wet sensitive plants before application. Vinyl, fiber cement (Hardie board), brick, stucco, and painted wood surfaces are all soft-washed with formulas suited to that material.",
    ],
    goodFor: [
      "Vinyl, wood, and fiber cement siding",
      "Stucco and brick exteriors",
      "Soffits, fascia, and eaves",
      "Retail storefronts and office exteriors (commercial)",
      "HOA communities and multi-unit exteriors",
    ],
    process: [
      { title: "Protect landscaping", detail: "Plants and grass along the foundation get pre-rinsed and, when needed, covered before any chemical application." },
      { title: "Apply soft-wash solution", detail: "A low-pressure application targets algae, mold, mildew, and dirt across the full exterior, including soffits and trim." },
      { title: "Dwell time", detail: "The solution sits long enough to break down organic growth at the root, not just the surface layer." },
      { title: "Low-pressure rinse", detail: "A gentle rinse clears the solution and residue, leaving siding clean without forcing water behind panels." },
    ],
    faqs: [
      {
        q: "Is soft washing safe for vinyl siding?",
        a: "Yes - soft washing is the manufacturer-recommended approach for vinyl siding. Low pressure combined with the correct cleaning solution avoids the cracked panels and water intrusion that high-pressure washing can cause.",
      },
      {
        q: "Will the chemicals hurt my grass or bushes?",
        a: "We pre-wet and rinse landscaping before and after application, and use formulas designed to be safe for plants when applied correctly. Sensitive plants can also be covered on request.",
      },
      {
        q: "How long does a house wash last?",
        a: "Because soft washing kills algae and mildew at the root instead of just rinsing the surface, most homes stay clean for 12-24 months depending on shade, humidity, and tree cover.",
      },
    ],
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    shortName: "Roof Washing",
    category: ["residential", "commercial"],
    tagline: "Soft wash roof cleaning that removes streaks, not shingles",
    metaDescription:
      "Soft wash roof cleaning in Zebulon, NC and the NC/VA region. Safe, low-pressure treatment that removes black algae streaks (Gloeocapsa magma) and moss without damaging shingles.",
    heroSummary:
      "Those black streaks on a roof are algae, not dirt, and pressure alone won't remove them - the right chemical treatment does.",
    overview: [
      "The dark streaking that shows up on asphalt shingle roofs is typically a algae called Gloeocapsa magma, which feeds on the limestone filler in shingles. It spreads over time and, left alone, can shorten shingle life and quietly increase attic temperatures on the affected side of the roof.",
      "Roof washing is always a soft-wash service, never a high-pressure job. We apply a roof-safe cleaning solution that kills the algae and moss at the root, let it dwell, and rinse from the top down at low pressure so granules stay put and shingles stay sealed.",
      "This same low-pressure approach is used on metal roofing, tile, and architectural shingles, with the solution and dwell time adjusted for the roofing material.",
    ],
    goodFor: [
      "Asphalt shingle roofs with black streaking",
      "Moss and lichen growth on shaded roof sections",
      "Metal roofing",
      "Commercial and multi-family roof sections",
    ],
    process: [
      { title: "Roof inspection", detail: "We check the roofline for the type and extent of growth, plus any soft spots or existing damage, before starting." },
      { title: "Soft-wash application", detail: "A roof-safe solution is applied from the ridge down, targeting algae and moss without foot traffic on fragile areas where avoidable." },
      { title: "Dwell & rinse", detail: "The solution is given time to work, then rinsed at low pressure so granule loss and seal disruption are avoided." },
      { title: "Gutter flush", detail: "Downspouts and gutters get flushed at the end so wash runoff doesn't sit and re-stain fascia." },
    ],
    faqs: [
      {
        q: "Do you walk on the roof to clean it?",
        a: "We minimize foot traffic and use ladder and low-angle application wherever the roof pitch and layout allow, prioritizing shingle integrity over speed.",
      },
      {
        q: "Will this void my roof warranty?",
        a: "Most shingle manufacturers specifically warn against high-pressure washing but accept soft washing, since it doesn't force water under shingles or strip granules. We're happy to reference your manufacturer's care guidance if you have it.",
      },
      {
        q: "How long until the streaks come back?",
        a: "Soft washing kills the algae colony rather than just rinsing the surface, so most roofs stay clean for 2-4 years depending on shade and moisture exposure.",
      },
    ],
  },
  {
    slug: "fence-deck-cleaning",
    name: "Fence & Deck Cleaning",
    shortName: "Fence & Deck",
    category: ["residential"],
    tagline: "Wood, vinyl & composite, brought back to its true color",
    metaDescription:
      "Fence and deck cleaning in Zebulon, NC and the NC/VA area. Pressure and soft-wash cleaning for wood, vinyl, and composite decking and fencing, prepped and ready for staining or sealing.",
    heroSummary:
      "Grayed-out wood almost always has its original color underneath - the graying is surface buildup, not the wood itself.",
    overview: [
      "Fences and decks take a beating from weather, foot traffic, and standing moisture, which shows up as gray, weathered wood, greenish algae in shaded corners, and grime packed into the grain. Cleaning brings the material's actual color back and gives a clean, prepped surface if you're staining or sealing afterward.",
      "Wood decking gets a different pressure and nozzle setup than vinyl or composite, since wood grain can be damaged by too much pressure held too close, while composite and vinyl can typically handle a more direct approach.",
      "For decks that will be stained or sealed after cleaning, we time the job so the wood has proper drying time before any coating goes on.",
    ],
    goodFor: [
      "Wood, vinyl, and composite fencing",
      "Wood, composite, and PVC decking",
      "Pergolas and pool decks",
      "Pre-stain and pre-seal prep cleaning",
    ],
    process: [
      { title: "Surface assessment", detail: "We check the material (wood, vinyl, composite) and its condition to set the right pressure and cleaning approach." },
      { title: "Treat growth", detail: "Algae, mildew, and mold in shaded or damp corners gets treated so it doesn't just come back in a season." },
      { title: "Wash", detail: "Boards and fence lines are cleaned with a technique matched to the grain and material, avoiding gouging or fuzzing on wood." },
      { title: "Dry & prep", detail: "For stain or sealant jobs, we account for dry time so the surface is ready when the coating goes on." },
    ],
    faqs: [
      {
        q: "Can pressure washing damage my deck boards?",
        a: "Held too close or at too high a pressure, yes - especially on softer woods. We use wide-fan nozzles and appropriate pressure for the material so the grain isn't damaged.",
      },
      {
        q: "Should I stain my deck right after cleaning?",
        a: "No - wood needs to fully dry before stain or sealant is applied, typically 24-48 hours depending on weather. We can advise a timeline based on conditions at your property.",
      },
      {
        q: "Do you clean chain-link or metal fencing too?",
        a: "Yes, metal and chain-link fencing can be cleaned as part of a fence package alongside wood, vinyl, or composite sections.",
      },
    ],
  },
  {
    slug: "patio-cleaning",
    name: "Patio Cleaning",
    shortName: "Patio Cleaning",
    category: ["residential"],
    tagline: "Concrete, stone & tile patios, cleaned for entertaining season",
    metaDescription:
      "Patio cleaning in Zebulon, NC and the NC/VA region for concrete, natural stone, and tile patios. Removes algae, food and grease stains, and buildup from outdoor living spaces.",
    heroSummary:
      "Patios take more organic buildup than any other surface on the property - shade, moisture, food, and foot traffic all in one spot.",
    overview: [
      "Between grill grease, spilled drinks, tree debris, and shade-loving algae, patios accumulate grime faster than almost any other hardscape around the house. Patio cleaning uses surface cleaning equipment for open areas and detail wand work around furniture, planters, and edges.",
      "Natural stone, tile, and stamped or stained concrete each need their own pressure setting to avoid stripping sealant or damaging grout lines, so we identify the material before setting up equipment.",
      "This service pairs well with fence and deck cleaning or a full exterior house wash for properties getting ready to host events or list for sale.",
    ],
    goodFor: [
      "Concrete, stamped concrete, and stained patios",
      "Natural stone (flagstone, slate, travertine)",
      "Tile patios and grouted surfaces",
      "Outdoor kitchens and grill areas",
    ],
    process: [
      { title: "Clear & assess", detail: "Furniture and planters are moved as needed and the surface material is identified to set proper pressure." },
      { title: "Pre-treat stains", detail: "Grease, food, and organic staining gets targeted pre-treatment before the main clean." },
      { title: "Clean", detail: "Surface cleaner handles open areas; wand detailing covers edges, grout lines, and tight corners." },
      { title: "Rinse & reset", detail: "Final rinse, then furniture and planters are set back in place." },
    ],
    faqs: [
      {
        q: "Will cleaning remove my patio's sealant?",
        a: "We adjust pressure to avoid stripping intact sealant. If the sealant is already failing or worn, cleaning may reveal that more clearly - which is useful information before resealing.",
      },
      {
        q: "Can you get grill grease stains off concrete?",
        a: "Most grease staining lightens substantially with pre-treatment and hot water cleaning. Very old, deeply set grease may not come out 100%, and we'll set honest expectations on-site.",
      },
    ],
  },
  {
    slug: "trash-can-cleaning",
    name: "Trash Can Cleaning & Sanitizing",
    shortName: "Trash Can Cleaning",
    category: ["residential", "commercial"],
    tagline: "Hot-water cleaning and sanitizing for residential & commercial bins",
    metaDescription:
      "Trash and recycling bin cleaning and sanitizing in Zebulon, NC and the NC/VA region. Hot water pressure cleaning that removes odor, grime, and bacteria from residential and commercial bins curbside.",
    heroSummary:
      "Bin cleaning is done curbside with contained, high-heat equipment - no mess left behind, no water going where it shouldn't.",
    overview: [
      "Trash and recycling bins sit in the sun holding bacteria, mold, maggots, and the source of most yard odor complaints - and most people never clean them because it's an unpleasant job. We handle it curbside with dedicated bin-cleaning equipment that uses hot, high-pressure water and a sanitizing rinse, with wastewater contained rather than run into your yard or storm drains.",
      "Both residential single-bin service and recurring routes, and commercial dumpster/multi-bin accounts for HOAs, apartment complexes, and businesses, are available.",
    ],
    goodFor: [
      "Residential trash and recycling bins",
      "Recurring monthly or quarterly bin routes",
      "HOA and apartment community bin programs",
      "Commercial dumpster exteriors",
    ],
    process: [
      { title: "Curbside pickup", detail: "Bins are cleaned in place at the curb using a self-contained system - no need to move them anywhere." },
      { title: "Hot water wash", detail: "High-heat, high-pressure water breaks down grime and residue built up on interior walls and the lid." },
      { title: "Sanitize", detail: "An EPA-registered sanitizing treatment addresses bacteria and odor at the source, not just the visible grime." },
      { title: "Wastewater containment", detail: "Dirty water is captured and hauled away rather than draining into your yard or the street." },
    ],
    faqs: [
      {
        q: "Do I need to do anything to prepare?",
        a: "Just have your empty bin(s) at the curb on your scheduled day, the same way you would for trash pickup.",
      },
      {
        q: "Is this available as a recurring service?",
        a: "Yes - monthly and quarterly recurring routes are available for residential customers, along with ongoing commercial bin programs.",
      },
    ],
  },
  {
    slug: "paver-pool-deck-cleaning",
    name: "Paver & Pool Deck Cleaning",
    shortName: "Paver & Pool Deck",
    category: ["residential", "commercial"],
    tagline: "Paver and pool deck cleaning with optional sand & seal",
    metaDescription:
      "Paver and pool deck cleaning in Zebulon, NC and the NC/VA region. Safe cleaning for pavers, travertine, and concrete pool decks, with polymeric sand re-application and sealing available.",
    heroSummary:
      "Pool decks stay wet longer than any other surface on the property, which makes them the fastest place algae and efflorescence show up.",
    overview: [
      "Pool decks and paver patios deal with constant moisture, sunscreen residue, and splash-out chemicals, which accelerates algae growth and can cause efflorescence (that chalky white buildup) on pavers and concrete. Cleaning is calibrated to lift that buildup without blasting sand out of paver joints or damaging travertine's softer surface.",
      "For paver surfaces, we offer polymeric sand re-application after cleaning to lock joints back in and discourage weed growth, plus sealing to protect against future staining and make the next cleaning easier.",
    ],
    goodFor: [
      "Paver patios and pool decks",
      "Travertine and natural stone pool surrounds",
      "Concrete pool decks",
      "Commercial and community pool areas",
    ],
    process: [
      { title: "Clean", detail: "Algae, efflorescence, and organic buildup are lifted with pressure and technique matched to the paver or stone material." },
      { title: "Joint sand check", detail: "Paver joints are assessed for sand loss during cleaning." },
      { title: "Re-sand (optional)", detail: "Polymeric sand is swept into joints and activated to lock pavers in place and resist weeds." },
      { title: "Seal (optional)", detail: "A sealant is applied to protect the surface and make future cleanings easier." },
    ],
    faqs: [
      {
        q: "Will pressure washing remove sand from between my pavers?",
        a: "It's possible with pavers that already have compromised joints. We adjust pressure to minimize this, and offer polymeric sand re-application as part of the service if needed.",
      },
      {
        q: "Do you clean around an active pool?",
        a: "Yes, we work around pool equipment and water carefully and can coordinate timing so cleaning doesn't interfere with pool use longer than necessary.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    category: ["residential", "commercial"],
    tagline: "Interior debris removal plus exterior brightening",
    metaDescription:
      "Gutter cleaning in Zebulon, NC and the NC/VA region. Interior debris removal to stop overflow and foundation damage, plus exterior gutter and fascia brightening on request.",
    heroSummary:
      "A clogged gutter doesn't just overflow - it pushes water straight down against your foundation and fascia board.",
    overview: [
      "Clogged gutters are one of the most common, most avoidable causes of fascia rot, foundation moisture issues, and basement seepage. We clear leaves, seed pods, and debris from the gutter interior so water routes through downspouts the way it's supposed to, rather than sheeting over the side.",
      "Exterior gutter and fascia brightening is available as an add-on to address the black streaking (oxidation and dirt buildup) that shows up on the outside of gutters over time, giving the roofline a finished look to match a house wash.",
    ],
    goodFor: [
      "Single-story and multi-story homes",
      "Gutters near heavy tree cover",
      "Pre-storm season and post-fall cleanouts",
      "Commercial and multi-unit gutter systems",
    ],
    process: [
      { title: "Interior clear-out", detail: "Debris is removed by hand or vacuum from gutter runs and checked at each downspout for clogs." },
      { title: "Downspout flush", detail: "Downspouts are flushed to confirm water is routing and draining properly." },
      { title: "Exterior brighten (optional)", detail: "Gutter faces and fascia are washed to remove oxidation streaking and match a freshly cleaned exterior." },
      { title: "Final check", detail: "We confirm gutters are flowing and debris has been bagged and hauled off, not left in your yard." },
    ],
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "Twice a year is standard for most properties - typically spring and fall. Homes with heavy tree cover overhead may need more frequent service.",
      },
      {
        q: "Do you repair gutters too?",
        a: "Our focus is cleaning, but we'll flag any loose brackets, separated seams, or damage we spot during the job so you know before it becomes a bigger problem.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Window Cleaning",
    category: ["residential", "commercial"],
    tagline: "Streak-free glass, inside and out",
    metaDescription:
      "Window cleaning in Zebulon, NC and the NC/VA region for homes and businesses. Streak-free interior and exterior glass cleaning, screens and sills included.",
    heroSummary:
      "Clean glass is the difference between a house that looks pressure washed and one that looks finished.",
    overview: [
      "Window cleaning is often the last step that ties a full exterior cleaning together - it's hard to notice freshly washed siding when the windows are still covered in hard water spots, pollen film, and streaks. We clean exterior glass, screens, tracks, and sills, with interior cleaning available on request for both homes and businesses.",
      "Storefronts and commercial glass fronts are serviced on a scheduled or one-time basis, keeping street-facing glass clear and presentable.",
    ],
    goodFor: [
      "Residential exterior and interior glass",
      "Screens, tracks, and sills",
      "Storefront and office glass fronts (commercial)",
      "Post-construction window cleanup",
    ],
    process: [
      { title: "Screens & tracks", detail: "Screens are removed and cleaned, and tracks are cleared of dirt and debris buildup." },
      { title: "Wash glass", detail: "Glass is washed and squeegeed for a streak-free finish, inside and/or outside per the service booked." },
      { title: "Sills & frames", detail: "Sills and frames are wiped down to remove residue left from the wash." },
      { title: "Final inspection", detail: "We check panes in good light for streaking or missed spots before wrapping up." },
    ],
    faqs: [
      {
        q: "Do you clean interior windows too?",
        a: "Yes, interior glass cleaning is available on request in addition to exterior cleaning.",
      },
      {
        q: "How often do storefronts typically get cleaned?",
        a: "Many commercial clients schedule window cleaning weekly, bi-weekly, or monthly depending on street-front visibility and foot traffic. One-time cleanings are also available.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const residentialServices = services.filter((s) => s.category.includes("residential"));
export const commercialServices = services.filter((s) => s.category.includes("commercial"));
