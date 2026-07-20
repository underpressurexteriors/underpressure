import type { ContentSection } from "./blog";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  readTime: string;
  excerpt: string;
  sections: ContentSection[];
  relatedServiceSlugs: string[];
};

export const resources: Resource[] = [
  {
    slug: "why-not-to-use-bleach-on-a-fence-or-deck",
    title: "Why You Shouldn't Use Bleach on a Fence or Deck",
    description:
      "Bleach is a common DIY choice for cleaning wood fences and decks, but it can damage wood fibers, corrode hardware, and kill nearby plants. Here's what to use instead.",
    topic: "Deck & Fence Care",
    readTime: "6 min read",
    excerpt:
      "Bleach is cheap, available everywhere, and a common go-to for cleaning wood - which is exactly why it causes so much accidental damage to fences and decks every year.",
    sections: [
      {
        body: [
          "Chlorine bleach shows up in a lot of DIY cleaning advice for decks and fences, mostly because it's inexpensive, easy to find, and does visibly lighten algae and mildew stains. The problem is what it does beyond the stain - and why professional exterior cleaning almost never uses it on wood.",
        ],
      },
      {
        heading: "It breaks down wood fibers",
        body: [
          "Chlorine bleach is a strong oxidizer. On wood, that means it doesn't just clean the surface - it breaks down the lignin that holds wood fibers together. Over repeated use, this leaves wood more porous, more prone to splintering, and less able to hold stain or sealant evenly. A deck cleaned with bleach a few times often ends up looking blotchy or unevenly absorbent once it's finally stained.",
        ],
      },
      {
        heading: "It only bleaches - it doesn't kill the root cause",
        body: [
          "Bleach lightens the visible color of algae and mold, which looks like a clean result, but it doesn't reliably kill the organism at the root the way a proper mildewcide or soft-wash solution does. That's why bleached decks and fences often show the same staining again within a few months - the growth wasn't eliminated, just discolored.",
        ],
      },
      {
        heading: "It corrodes hardware",
        body: [
          "Deck screws, joist hangers, and other galvanized or coated hardware corrode faster with repeated bleach exposure. Chlorine accelerates oxidation on metal, and a deck's structural hardware isn't something you want degrading faster than it has to.",
        ],
      },
      {
        heading: "It's hard on everything around the deck",
        body: [
          "Bleach runoff is toxic to grass, shrubs, and garden beds near a deck or fence line. Even diluted, splashed or dripped bleach tends to leave dead patches in lawn and landscaping that take a season or more to recover, if they recover at all.",
        ],
      },
      {
        heading: "What to use instead",
        body: [
          "A proper wood-safe cleaner or a soft-wash solution designed for exterior wood does the same job - killing algae and mildew - without the fiber damage, hardware corrosion, or landscaping risk. These solutions are formulated to break down at a controlled pH and are typically safer for surrounding plants when applied and rinsed correctly. If you're planning to stain or seal after cleaning, this also matters more than it might seem: bleach-damaged wood absorbs stain unevenly, which shows up as a blotchy finish no amount of careful staining technique can fully hide.",
        ],
      },
    ],
    relatedServiceSlugs: ["fence-deck-cleaning"],
  },
  {
    slug: "soft-wash-vs-pressure-washer-for-your-house",
    title: "Soft Wash vs. Pressure Washer: What's Actually Safe for Your House?",
    description:
      "Using a pressure washer on house siding is one of the most common causes of accidental home exterior damage. Here's why soft washing is the method siding manufacturers recommend.",
    topic: "House Washing",
    readTime: "7 min read",
    excerpt:
      "A pressure washer looks like the obvious tool for cleaning a house exterior. On most siding types, it's actually the wrong one - and the damage it causes isn't always visible right away.",
    sections: [
      {
        body: [
          "It's an intuitive assumption: more pressure means a cleaner result, faster. For concrete, that's often true. For the siding on your home, it's usually the opposite - and the risk isn't hypothetical. High-pressure washing is one of the most common causes of accidental exterior damage homeowners deal with, largely because the damage doesn't always show up immediately.",
        ],
      },
      {
        heading: "What high pressure does to siding",
        body: [
          "Vinyl siding is installed with small gaps and overlapping panels designed to handle rain running down the surface, not water forced upward or sideways under pressure. A pressure washer aimed at the wrong angle can force water behind panels and into the wall cavity, where it doesn't dry out the way exterior rain does. That trapped moisture is how mold and rot start inside a wall, often unnoticed until much later.",
          "Wood and fiber cement (Hardie board) siding face a related but different problem: high pressure can strip paint, roughen the surface texture, and in some cases crack fiber cement panels outright, especially at seams and corners.",
          "Stucco is particularly vulnerable - pressure washing can crack the surface coat or drive water into the underlying layers, leading to problems that are expensive to repair compared to the cost of cleaning it correctly in the first place.",
        ],
      },
      {
        heading: "Why soft washing is the manufacturer-recommended method",
        body: [
          "Soft washing uses low water pressure - similar to a garden hose - combined with a cleaning solution that does the actual work of breaking down algae, mold, and mildew. The solution dwells on the surface, breaks down the organic growth at the root, and then gets rinsed away gently. No force, no risk of forcing water where it shouldn't go.",
          "This is also why most siding manufacturers explicitly recommend against high-pressure cleaning in their care documentation - not as an overly cautious suggestion, but because it's a documented cause of the moisture intrusion and material damage claims they see.",
        ],
      },
      {
        heading: "It also lasts longer",
        body: [
          "Beyond the safety difference, soft washing tends to produce a longer-lasting result. Because the solution kills the algae and mildew colony rather than just rinsing the visible layer off the surface, soft-washed siding typically stays clean for 12-24 months, compared to a pressure-rinsed surface where growth can reappear within months since the root wasn't addressed.",
        ],
      },
      {
        heading: "When pressure washing is still the right call",
        body: [
          "This isn't an argument against pressure washing generally - it's the correct method for concrete, pavers, and other hard, non-porous surfaces that can handle direct force without damage. The point is matching the method to the material: pressure washing for hardscape, soft washing for siding and roofing. A professional exterior cleaning job typically uses both, on the surfaces each one is actually built for.",
        ],
      },
    ],
    relatedServiceSlugs: ["soft-wash-house-washing", "surface-cleaning"],
  },
  {
    slug: "benefits-of-roof-soft-washing",
    title: "The Benefits of Roof Soft Washing (Beyond Just Looking Better)",
    description:
      "Roof soft washing does more than remove ugly streaking - it can extend shingle life, reduce attic heat, and prevent moss-related damage. Here's the full case for it.",
    topic: "Roof Care",
    readTime: "6 min read",
    excerpt:
      "Roof cleaning gets filed under curb appeal, but the actual benefits go further - shingle lifespan, energy efficiency, and preventing damage that's much more expensive than a cleaning.",
    sections: [
      {
        body: [
          "Roof soft washing tends to get thought of as a cosmetic service - something you do to make black streaking disappear before selling a house. That's a real benefit, but it's only part of the picture. The algae and moss causing that discoloration are doing more than making a roof look older than it is.",
        ],
      },
      {
        heading: "It can extend shingle life",
        body: [
          "The algae responsible for roof streaking, Gloeocapsa magma, feeds on the limestone filler in asphalt shingles. Left to spread unchecked over years, that process can contribute to premature granule loss and shingle degradation, which shortens the effective lifespan of a roof that would otherwise have years of life left.",
        ],
      },
      {
        heading: "Dark streaking absorbs more heat",
        body: [
          "Algae streaking is dark, and dark surfaces absorb more solar heat than clean, lighter shingles. On a heavily streaked roof, that can mean measurably higher surface temperatures on the affected sections, which translates into more heat radiating into the attic space below - something that shows up as a slightly harder-working HVAC system on hot days.",
        ],
      },
      {
        heading: "Moss is a bigger problem than it looks",
        body: [
          "Moss holds moisture directly against the shingle surface, which is a slower but more serious issue than algae streaking alone. Sustained moisture retention under moss growth can contribute to shingle curling and, in more advanced cases, provide an entry point for water intrusion at seams and edges. Moss also tends to grow thickest at the edges and in shaded valleys - exactly the areas where water flow and drainage matter most.",
        ],
      },
      {
        heading: "It's cheaper than what it prevents",
        body: [
          "A roof soft wash costs a fraction of a roof repair, and nowhere close to the cost of a full replacement. Treating the algae and moss while it's still a surface-level cosmetic issue is meaningfully cheaper than waiting until it's contributed to a shingle or moisture problem that requires actual repair work.",
        ],
      },
      {
        heading: "Why soft washing specifically",
        body: [
          "All of this only holds up if the cleaning method itself doesn't damage the roof - which is why soft washing, not pressure washing, is the right approach. Low-pressure application with a roof-safe solution kills the algae and moss at the root without stripping granules or forcing water under shingles, so you get the benefits above without trading them for a different problem.",
        ],
      },
    ],
    relatedServiceSlugs: ["roof-washing"],
  },
  {
    slug: "how-to-tell-if-your-driveway-needs-cleaning",
    title: "How to Tell If Your Driveway Needs Cleaning (vs. Just a Rinse)",
    description:
      "Not every dirty driveway needs professional surface cleaning - sometimes a garden hose is enough. Here's how to tell the difference before you call anyone.",
    topic: "Concrete & Hardscape",
    readTime: "5 min read",
    excerpt:
      "Dust and light dirt rinse off with a hose. Algae, oil, and set-in staining don't. Knowing which one you're looking at saves you from either overpaying or under-cleaning.",
    sections: [
      {
        body: [
          "Not every dirty driveway needs professional equipment. Some just need a garden hose and five minutes. The trick is knowing which situation you're actually in before deciding what to do about it.",
        ],
      },
      {
        heading: "When a hose rinse is genuinely enough",
        body: [
          "Light surface dust, recent pollen, or loose dirt that hasn't had time to work into the concrete's pores usually rinses away with plain water and moderate hose pressure. If the discoloration is uniform, light-colored, and doesn't feel slick or slippery when wet, there's a decent chance it's just surface dust rather than organic growth.",
        ],
      },
      {
        heading: "The slip test",
        body: [
          "Wet the discolored area and touch it. If it feels slick or slightly slippery rather than just wet, that's algae - not dirt. Algae forms a thin biofilm that changes the surface texture, and a hose alone won't remove it since the growth has already anchored into the concrete's pores.",
        ],
      },
      {
        heading: "Signs it's a surface cleaning job",
        body: [
          "Green or black patches that don't rinse away with a hose, especially in shaded areas or where downspouts drain onto the driveway.",
          "Oil or rust staining that's been sitting for more than a few weeks - these bond to concrete in a way plain water can't touch.",
          "A driveway that hasn't been professionally cleaned in over a year, even if it doesn't look dramatically dirty - buildup happens gradually and is easy to not notice day to day.",
          "Uneven discoloration where tire tracks or high-traffic areas look noticeably different from the rest of the slab.",
        ],
      },
      {
        heading: "Why the distinction matters",
        body: [
          "A hose rinse costs nothing and takes a few minutes - there's no reason to pay for professional cleaning if that's genuinely all a driveway needs. But algae and set-in staining only get worse with time, and by the time they're obviously bad, the cleaning takes longer and costs more than it would have a year earlier. If you're not sure which situation you're in, the slip test above is the fastest way to check before deciding.",
        ],
      },
    ],
    relatedServiceSlugs: ["surface-cleaning"],
  },
  {
    slug: "dangers-of-diy-pressure-washing",
    title: "The Real Risks of DIY Pressure Washing (and How to Avoid Them)",
    description:
      "A rented pressure washer is easy to get and hard to use correctly. Here's what actually goes wrong with DIY pressure washing, and how to reduce the risk if you're doing it yourself.",
    topic: "Safety",
    readTime: "6 min read",
    excerpt:
      "Pressure washers look simple to operate, and mostly are - right up until the moment they're not. Here's what actually tends to go wrong, and why.",
    sections: [
      {
        body: [
          "A pressure washer is one of the more deceptively simple pieces of equipment to rent - point the wand, pull the trigger, done. In practice, the gap between how easy it looks and how easy it is to use correctly is where most DIY pressure washing problems happen.",
        ],
      },
      {
        heading: "Surface damage is the most common outcome",
        body: [
          "The single most frequent DIY pressure washing mistake is using too much pressure, too close, on a surface that can't handle it - wood decking, siding, softer stone, or aging concrete. Damage like gouged wood grain, stripped paint, or cracked stucco often isn't obvious until the surface dries, by which point it's already done.",
        ],
      },
      {
        heading: "Ladder work changes the risk profile entirely",
        body: [
          "Cleaning gutters, second-story siding, or a roofline means combining pressure washing equipment with ladder work - a common source of fall injuries even without a hose and wand adding weight, recoil, and a wet surface underfoot. This is the category of DIY pressure washing project where professional equipment (extension wands, proper ladder stabilization, roof-safe access techniques) makes the biggest safety difference.",
        ],
      },
      {
        heading: "Chemical handling, if soft washing solutions are involved",
        body: [
          "If a DIY job involves any cleaning solution beyond plain water - which is often necessary for algae and mold, since water alone won't kill the growth - proper dilution ratios, application technique, and protection for nearby landscaping all matter. Getting concentration wrong can either fail to clean effectively or, in the other direction, damage plants, painted surfaces, or metal fixtures nearby.",
        ],
      },
      {
        heading: "Water intrusion you won't see right away",
        body: [
          "As covered in more detail elsewhere on this site, high pressure aimed at the wrong angle on siding can force water behind panels and into wall cavities. This is a delayed-damage problem - it doesn't show up the day of cleaning, which makes it easy for a DIY job to look successful right up until mold or rot appears weeks or months later.",
        ],
      },
      {
        heading: "If you're doing it yourself anyway",
        body: [
          "Stick to hard, durable surfaces you're confident can handle pressure - concrete and pavers are the safest DIY starting point. Keep the wand moving rather than holding it stationary on one spot. Start with the widest fan tip and lowest effective pressure, and increase only if needed. And skip anything involving a ladder or a roof - that's the category where the cost of a mistake is highest and where professional equipment and technique make the most difference.",
        ],
      },
    ],
    relatedServiceSlugs: [],
  },
  {
    slug: "understanding-paver-sealing-and-sanding-after-cleaning",
    title: "Understanding Paver Sanding and Sealing After Cleaning",
    description:
      "Cleaning a paver patio or pool deck is only half the job if joint sand is compromised. Here's what polymeric sand and sealing actually do, and when you need them.",
    topic: "Concrete & Hardscape",
    readTime: "5 min read",
    excerpt:
      "A paver patio can look clean and still be one heavy rain away from weeds pushing through the joints. Sanding and sealing are what actually lock the surface down long-term.",
    sections: [
      {
        body: [
          "Cleaning a paver patio removes the algae, efflorescence, and grime sitting on the surface - but it doesn't address what's happening between the pavers, which is often the bigger long-term issue. Joint sand and sealant are what actually keep a paver surface stable, weed-free, and protected over time.",
        ],
      },
      {
        heading: "Why joint sand matters",
        body: [
          "The sand between pavers isn't just cosmetic - it locks the individual pavers together, preventing shifting, and blocks the gaps that would otherwise let weeds establish and ants nest. Regular sand washes out over time, especially with repeated cleaning, rain, and foot traffic, which is why joints that looked fine a couple of years ago might now show gaps.",
        ],
      },
      {
        heading: "Polymeric sand vs. regular sand",
        body: [
          "Polymeric sand contains a binding additive that activates when it's wet, hardening into a semi-solid joint that resists washout far better than plain sand. It's swept into the joints after cleaning, then activated with a controlled water application. The result holds up significantly longer against rain, cleaning, and traffic than standard paver sand.",
        ],
      },
      {
        heading: "What sealing actually does",
        body: [
          "A paver or concrete sealant creates a protective layer that resists staining (from grease, sunscreen, and pool chemicals in particular), makes efflorescence less likely to develop, and gives future cleanings an easier surface to work with since dirt doesn't bond as deeply. On pool decks especially, sealing also helps reduce how quickly algae reestablishes in the constantly damp environment around a pool.",
        ],
      },
      {
        heading: "When it's worth doing",
        body: [
          "If joints are visibly low, sand is washing out with every rain, or a patio hasn't been sealed in the last few years, cleaning alone will look great temporarily but won't address the underlying issue. Sanding and sealing right after a cleaning - while the surface is already clear of debris - is the most efficient time to do it, since you're not paying for a separate cleaning pass beforehand.",
        ],
      },
    ],
    relatedServiceSlugs: ["paver-pool-deck-cleaning"],
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);

export const resourceTopics = Array.from(new Set(resources.map((r) => r.topic)));
