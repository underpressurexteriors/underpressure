export type ContentSection = {
  heading?: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: ContentSection[];
  relatedServiceSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-pressure-wash-your-driveway",
    title: "How Often Should You Pressure Wash Your Driveway?",
    description:
      "A realistic timeline for cleaning your concrete driveway, based on shade, tree cover, and traffic - plus signs it needs cleaning sooner.",
    category: "Maintenance",
    date: "2026-02-03",
    readTime: "5 min read",
    excerpt:
      "Most driveways in North Carolina and Virginia do well on a once-a-year cleaning schedule - but shade, tree cover, and traffic can move that number in either direction.",
    sections: [
      {
        body: [
          "There's no single answer that fits every driveway, but there is a reliable starting point: once a year for most homes. From there, a handful of factors push that number up or down.",
        ],
      },
      {
        heading: "What speeds up the buildup",
        body: [
          "Shade is the biggest factor. A driveway that sits under mature trees for most of the day stays damp longer after rain and dew, which is exactly what algae and mildew need to establish. Those driveways can start showing green or black staining within 6-9 months of a cleaning.",
          "Tree cover adds a second layer to the problem - sap, pollen, and leaf tannins stain concrete on their own, separate from algae growth, and they tend to work into the surface pores faster in warm, humid weather.",
          "Heavy vehicle traffic matters too. Driveways that see daily use from multiple vehicles pick up oil drips, brake dust, and tire residue faster than a single-car driveway used occasionally.",
        ],
      },
      {
        heading: "Signs it's time, regardless of the calendar",
        body: [
          "A few visual cues matter more than any fixed schedule: green or black discoloration spreading across the surface, a slick or slippery feeling when the concrete is wet (a sign of algae, not just dirt), or visible oil staining that's been sitting for more than a few weeks.",
          "If you're getting ready to sell, or hosting an event, cleaning ahead of time is worth it even if you're not due yet - a clean driveway does more for curb appeal per dollar than almost anything else on the exterior of a home.",
        ],
      },
      {
        heading: "What happens if you wait too long",
        body: [
          "Algae and lichen don't just sit on top of concrete - given enough time, they root into the surface texture, which makes them harder to fully remove and can leave faint staining even after cleaning. Waiting an extra year or two isn't dangerous, but it does mean a longer, more intensive cleaning when you finally get to it, and a higher chance the discoloration doesn't come back to 100%.",
        ],
      },
    ],
    relatedServiceSlugs: ["surface-cleaning"],
  },
  {
    slug: "why-soft-washing-is-the-right-way-to-clean-your-roof",
    title: "Why Soft Washing Is the Right Way to Clean Your Roof",
    description:
      "High-pressure washing can strip granules and void shingle warranties. Here's why soft washing is the method roofing manufacturers actually recommend.",
    category: "Roof Care",
    date: "2026-02-17",
    readTime: "6 min read",
    excerpt:
      "Those black streaks on your roof aren't dirt - they're algae. And the wrong cleaning method can do more damage to your shingles than the algae ever would.",
    sections: [
      {
        body: [
          "If your roof has dark streaking running down from the ridge, that's almost always Gloeocapsa magma - a type of algae that feeds on the limestone filler used in asphalt shingles. It's extremely common across the humid Southeast, and it spreads over time if left alone.",
          "The instinct is to blast it off with a pressure washer the same way you'd clean a driveway. That instinct is wrong, and it's worth understanding why before you or anyone else gets on your roof with equipment.",
        ],
      },
      {
        heading: "What high pressure actually does to a roof",
        body: [
          "Asphalt shingles are covered in a layer of protective granules embedded in a bonding layer. High-pressure water aimed directly at that surface can strip those granules loose, which shortens the life of the shingle and exposes the asphalt underneath to UV damage.",
          "Pressure can also force water up under shingle tabs and seams, which is exactly what shingles are designed to prevent from the other direction (rain hitting them from above, not blasted at an angle from a wand). That can lead to leaks that don't show up right away - sometimes not until the next heavy rain, well after the cleaning crew is gone.",
        ],
      },
      {
        heading: "Why soft washing solves the actual problem",
        body: [
          "Soft washing uses a roof-safe cleaning solution applied at low pressure, allowed to dwell on the surface, then rinsed away gently. The solution kills the algae colony at the root instead of just knocking the visible layer off the surface - which is why soft-washed roofs tend to stay clean for 2-4 years, versus a pressure-blasted roof where the algae often returns within a season because the colony wasn't actually killed, just disturbed.",
          "This is also the method most shingle manufacturers specifically call out as acceptable in their care guidance, while several explicitly warn against high-pressure cleaning as a warranty risk.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "If a company shows up to your house planning to pressure wash your roof the same way they'd clean your driveway, that's worth pausing on. Soft washing costs more time and different equipment than a straight pressure rinse, but it's the only method that actually solves the algae problem without creating a bigger one.",
        ],
      },
    ],
    relatedServiceSlugs: ["roof-washing"],
  },
  {
    slug: "pressure-washing-vs-soft-washing-whats-the-difference",
    title: "Pressure Washing vs. Soft Washing: What's the Difference?",
    description:
      "Pressure washing and soft washing aren't interchangeable - each is the right tool for different surfaces. Here's how to tell which your project needs.",
    category: "Education",
    date: "2026-03-02",
    readTime: "5 min read",
    excerpt:
      "\"Pressure washing\" gets used as a catch-all term, but a professional exterior cleaning job is usually a mix of two very different methods matched to different surfaces.",
    sections: [
      {
        body: [
          "People tend to use \"pressure washing\" as a blanket term for any kind of exterior cleaning, but professionally, it refers to one specific method - and using it on the wrong surface can cause real damage. Soft washing is the other half of the toolkit, and knowing the difference helps you understand what a quote is actually describing.",
        ],
      },
      {
        heading: "Pressure washing",
        body: [
          "Pressure washing uses high water pressure - often with a rotary surface cleaner for flat areas - to physically blast dirt, algae, and grime off a hard, durable surface. It's the right call for concrete driveways, sidewalks, paver patios, and other hardscape that can handle direct force without being damaged.",
        ],
      },
      {
        heading: "Soft washing",
        body: [
          "Soft washing uses low pressure combined with a specialized cleaning solution. The chemistry does the actual work of breaking down algae, mold, and mildew, and the low-pressure rinse just clears it away afterward. This is the correct method for anything that could be damaged by force: vinyl and wood siding, stucco, roofing, and painted surfaces.",
          "The key advantage of soft washing beyond safety is that it kills organic growth at the root rather than just knocking the visible layer off - which is why soft-washed surfaces tend to stay clean noticeably longer than a straight high-pressure rinse would leave them.",
        ],
      },
      {
        heading: "Why most full-property jobs use both",
        body: [
          "A typical whole-house job usually blends both methods: pressure washing for the driveway, walkways, and patio, soft washing for the siding and roof. Using the wrong method on the wrong surface is one of the most common ways DIY pressure washing goes wrong - either the surface doesn't get properly clean, or it gets damaged in the process.",
        ],
      },
    ],
    relatedServiceSlugs: ["surface-cleaning", "soft-wash-house-washing"],
  },
  {
    slug: "hidden-cost-of-ignoring-algae-and-mold-on-siding",
    title: "The Hidden Cost of Ignoring Algae and Mold on Your Siding",
    description:
      "Algae and mold on siding aren't just cosmetic - left alone, they can degrade materials, trap moisture, and even affect indoor air quality over time.",
    category: "Home Care",
    date: "2026-03-18",
    readTime: "5 min read",
    excerpt:
      "Green and black staining on siding is easy to write off as a cosmetic issue. It usually isn't - and waiting to deal with it tends to cost more than the cleaning would have.",
    sections: [
      {
        body: [
          "It's easy to look at streaked or discolored siding and think of it purely as a curb-appeal issue - something to get around to eventually. In most cases, though, the growth causing that discoloration is doing more than sitting on the surface, and the longer it's left, the more it can affect the material underneath.",
        ],
      },
      {
        heading: "Moisture retention",
        body: [
          "Algae and mold hold moisture against the siding surface longer than bare siding would otherwise stay wet. For wood and fiber cement siding especially, prolonged moisture exposure is one of the more common contributors to rot, warping, and paint failure over time.",
        ],
      },
      {
        heading: "It spreads, and it compounds",
        body: [
          "Organic growth on siding doesn't stay contained to one spot - it spreads across the surface and into shaded, damp corners where it's harder to see until it's well established. What starts as a faint discoloration on a north-facing wall can, over a couple of years, become a much larger and more stubborn cleaning job.",
        ],
      },
      {
        heading: "Indoor connections worth knowing about",
        body: [
          "While exterior siding growth and interior air quality are separate issues, homes with persistent exterior moisture problems - clogged gutters directing water down siding, algae holding dampness against the wall - are more likely to also deal with related moisture issues near that same area, like window sills or wall cavities. It's not a direct cause-and-effect in every case, but exterior moisture problems rarely stay perfectly isolated to the exterior.",
        ],
      },
      {
        heading: "The fix is usually simpler than the wait",
        body: [
          "A soft wash treatment that kills the growth at the root, done on a roughly annual basis for shaded or humid-prone homes, is a fraction of the cost and effort of addressing rot, repainting, or siding repair down the line. If it's been more than two years since your siding was cleaned, it's worth a look.",
        ],
      },
    ],
    relatedServiceSlugs: ["soft-wash-house-washing", "gutter-cleaning"],
  },
  {
    slug: "how-to-prepare-your-property-before-a-pressure-washing-appointment",
    title: "How to Prepare Your Property Before a Pressure Washing Appointment",
    description:
      "A simple checklist to help your pressure washing appointment go faster and smoother, from moving items off the driveway to closing windows.",
    category: "Booking Tips",
    date: "2026-04-01",
    readTime: "4 min read",
    excerpt:
      "A few minutes of prep before we arrive means more time actually cleaning, and a better result overall. Here's what helps most.",
    sections: [
      {
        body: [
          "You don't need to do much to get ready for a pressure washing appointment, but a little prep goes a long way toward making the visit efficient and getting the best possible result.",
        ],
      },
      {
        heading: "Clear the surface",
        body: [
          "Move vehicles, potted plants, patio furniture, grills, toys, and anything else off the driveway, patio, or deck that's being cleaned. It's not required, but it means we can clean the full surface in one pass instead of working around obstacles and leaving untouched patches underneath them.",
        ],
      },
      {
        heading: "Close windows and doors",
        body: [
          "For house washing and roof cleaning, make sure windows, doors, and any exterior vents near the work area are closed. This keeps overspray and rinse water from getting inside, especially in older homes where window seals may not be perfectly tight.",
        ],
      },
      {
        heading: "Bring pets inside",
        body: [
          "Cleaning solutions used for soft washing are applied and rinsed with pet safety in mind, but it's still best practice to keep pets indoors or in a separate area of the yard while work is underway, and for a short period after until everything's fully rinsed and dry.",
        ],
      },
      {
        heading: "Note anything fragile or already damaged",
        body: [
          "If there's a loose gutter section, an already-cracked paver, or delicate landscaping near the work area, mention it before we start. It helps us work around it deliberately rather than finding out mid-job.",
        ],
      },
      {
        heading: "That's really it",
        body: [
          "Beyond those basics, there's nothing else needed on your end - we bring our own water supply and equipment, so there's no need to have an outdoor spigot ready or anything staged for us.",
        ],
      },
    ],
    relatedServiceSlugs: [],
  },
  {
    slug: "spring-cleaning-checklist-for-north-carolina-homeowners",
    title: "Spring Cleaning Checklist for North Carolina Homeowners",
    description:
      "A season-by-season exterior maintenance checklist for NC and VA homeowners coming out of winter, from gutters to driveways to decks.",
    category: "Seasonal",
    date: "2026-04-15",
    readTime: "6 min read",
    excerpt:
      "Winter leaves a specific kind of buildup on a home's exterior. Here's what to check and clean before the humidity of a Carolina summer sets in.",
    sections: [
      {
        body: [
          "Winter in North Carolina and Virginia isn't as harsh as further north, but it still leaves its mark - pollen is on the way, humidity is about to climb, and anything that built up over the colder months is about to get baked onto surfaces by the first real heat wave. Spring is the best window to get ahead of it.",
        ],
      },
      {
        heading: "1. Gutters first",
        body: [
          "Fall leaf drop plus winter storms usually means gutters are carrying more debris than any other point in the year. Clear them before spring rain hits so water is actually routing through downspouts instead of sheeting over the side and against your foundation.",
        ],
      },
      {
        heading: "2. Driveway and walkways",
        body: [
          "Salt (if you got any icy days), tree debris, and months without much rinsing rain leave driveways looking duller than they are. A surface clean now, before pollen season peaks, saves you from cleaning twice.",
        ],
      },
      {
        heading: "3. Siding",
        body: [
          "Check north-facing and shaded walls specifically - these hold onto winter moisture longest and are usually the first places algae shows up as temperatures climb. A soft wash now, before humidity really sets in, gets ahead of the growing season instead of chasing it in July.",
        ],
      },
      {
        heading: "4. Deck and fence",
        body: [
          "If a deck or fence went into winter without a fresh seal, check for graying or moisture damage now, while it's still easy to clean and reseal before the wood sees a full humid season unprotected.",
        ],
      },
      {
        heading: "5. Roof",
        body: [
          "If you noticed streaking last fall, spring is a good time for a soft wash roof cleaning - before summer heat and humidity accelerate the algae's spread.",
        ],
      },
      {
        heading: "Timing tip",
        body: [
          "Getting this done in March or April, ahead of peak pollen season, means less re-cleaning than waiting until pollen has already coated everything in a yellow-green film.",
        ],
      },
    ],
    relatedServiceSlugs: ["gutter-cleaning", "surface-cleaning", "soft-wash-house-washing", "fence-deck-cleaning", "roof-washing"],
  },
  {
    slug: "why-commercial-properties-need-regular-pressure-washing",
    title: "Why Commercial Properties Need Regular Pressure Washing",
    description:
      "For retail, HOA, and commercial properties, exterior cleanliness affects first impressions, safety, and even lease value. Here's the business case for a maintenance schedule.",
    category: "Commercial",
    date: "2026-04-29",
    readTime: "5 min read",
    excerpt:
      "A dirty storefront or algae-streaked walkway sends a message before a single customer walks through the door. For commercial property, exterior cleaning isn't just cosmetic - it's part of the operation.",
    sections: [
      {
        body: [
          "Residential customers usually think about pressure washing in terms of curb appeal. For commercial property owners and managers, the stakes are a little different - exterior condition affects customer perception, safety, and in some cases lease compliance.",
        ],
      },
      {
        heading: "First impressions happen in the parking lot",
        body: [
          "Customers form an opinion about a business before they walk through the door. A stained storefront, grimy entryway, or algae-covered sidewalk undercuts everything the interior is doing right - and it's one of the few first impressions that's completely within a property's control.",
        ],
      },
      {
        heading: "Safety and liability",
        body: [
          "Algae and mildew on walkways, entrances, and parking areas create a slip hazard, especially after rain. For a commercial property with regular foot traffic, that's a liability question as much as a cleanliness one.",
        ],
      },
      {
        heading: "Protecting the asset",
        body: [
          "Grease buildup on loading docks, oil staining in parking areas, and algae on building exteriors all degrade the underlying materials over time if left unaddressed - concrete, siding, and signage all have a longer service life with regular cleaning than without it.",
        ],
      },
      {
        heading: "Setting up a maintenance schedule",
        body: [
          "The properties that stay ahead of this - rather than doing a single deep clean once things look bad - usually run on a recurring schedule: storefront glass and entryways cleaned frequently, parking lots and sidewalks a few times a year, and a full building wash annually. Recurring service also tends to be more efficient per visit, since buildup never gets a chance to fully set in.",
        ],
      },
    ],
    relatedServiceSlugs: ["surface-cleaning", "soft-wash-house-washing", "window-cleaning"],
  },
  {
    slug: "5-signs-your-gutters-need-to-be-cleaned-before-winter",
    title: "5 Signs Your Gutters Need to Be Cleaned Before Winter",
    description:
      "Clogged gutters cause foundation and fascia damage that's easy to prevent. Here are five signs it's time for a cleanout before cold weather hits.",
    category: "Seasonal",
    date: "2026-05-13",
    readTime: "4 min read",
    excerpt:
      "Gutter problems are quiet until they're not - by the time you notice water damage, the gutter clog has usually been a problem for a while. Here's what to look for earlier.",
    sections: [
      {
        body: [
          "Gutters do their job invisibly when they're working, which means most people only notice them when something's already gone wrong. A few warning signs show up before that point, if you know where to look.",
        ],
      },
      {
        heading: "1. Water spilling over the sides during rain",
        body: [
          "This is the clearest sign - if you see water sheeting over the edge of a gutter instead of flowing through the downspout during a rainstorm, that section is clogged and needs attention.",
        ],
      },
      {
        heading: "2. Visible plant growth in the gutter line",
        body: [
          "Small plants or grass sprouting from a gutter means there's enough decomposed organic material sitting in there to support growth - which also means the gutter has been holding standing debris for a while.",
        ],
      },
      {
        heading: "3. Sagging or pulling-away sections",
        body: [
          "A gutter packed full of wet leaves and debris is heavy - significantly heavier than an empty one. If a section looks like it's sagging or pulling away from the fascia, built-up weight from debris is a common cause.",
        ],
      },
      {
        heading: "4. Staining on the fascia or siding below",
        body: [
          "Streaking or dark staining on the fascia board or siding directly under a gutter run usually means water has been overflowing there repeatedly rather than draining through the downspout properly.",
        ],
      },
      {
        heading: "5. Standing water near the foundation after rain",
        body: [
          "If you notice pooling water near the foundation after storms, especially near a downspout, it's worth checking whether the gutter and downspout are actually carrying water away from the house or just dumping it in one spot due to a clog upstream.",
        ],
      },
      {
        heading: "Why before winter matters",
        body: [
          "Clearing gutters before winter means storm and snow-melt water has somewhere to go instead of freezing in a clogged gutter, which can add ice weight and stress to the gutter system during the coldest months.",
        ],
      },
    ],
    relatedServiceSlugs: ["gutter-cleaning"],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
