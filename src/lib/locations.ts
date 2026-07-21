export type LocationEntry = {
  slug: string;
  city: string;
  state: "NC" | "VA";
  stateFull: string;
  county: string;
  blurb: string;
  nearby: string[];
  corridor: string;
  distanceNote: string;
  regionalNote: string;
};

export const locations: LocationEntry[] = [
  // North Carolina - Wake / Franklin / Nash county area around Zebulon
  {
    slug: "zebulon-nc",
    city: "Zebulon",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "Home base for Under Pressure Xteriors, right in eastern Wake County.",
    nearby: ["Wendell", "Wake Forest", "Rolesville"],
    corridor: "US-264",
    distanceNote: "Local - this is where we're based.",
      regionalNote:
      "Home base means Zebulon gets the most consistent attention on our route - a mix of established in-town neighborhoods and newer subdivisions branching out along US-264. Moderate tree cover across town means algae tends to show up on roofs and north-facing siding within a couple of humid Carolina summers.",
  },
  {
    slug: "wendell-nc",
    city: "Wendell",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "A fast-growing Wake County town just down US-64 from Zebulon.",
    nearby: ["Zebulon", "Knightdale", "Raleigh"],
    corridor: "US-64",
    distanceNote: "Minutes from our home base in Zebulon.",
      regionalNote:
      "Growth along the US-64 corridor means most driveways here are newer concrete, often still under builder-grade sealant - which is why a lot of Wendell jobs are a first-ever cleaning around the two-year mark rather than years of buildup.",
  },
  {
    slug: "knightdale-nc",
    city: "Knightdale",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "One of the Triangle's fastest-growing suburbs, full of newer neighborhoods with a lot of exterior surface to maintain.",
    nearby: ["Wendell", "Raleigh", "Rolesville"],
    corridor: "US-64",
    distanceNote: "A short drive west of Zebulon.",
      regionalNote:
      "Dense, newer subdivisions with HOA-governed exteriors are the norm - which means consistent siding color and finish across a neighborhood, and uneven streaking from a rushed soft wash stands out fast to the neighbors.",
  },
  {
    slug: "rolesville-nc",
    city: "Rolesville",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "A quickly developing town north of Knightdale with plenty of newer siding and driveways still under builder-grade sealant.",
    nearby: ["Wake Forest", "Zebulon", "Youngsville"],
    corridor: "NC-401",
    distanceNote: "Just north of Zebulon in Wake County.",
      regionalNote:
      "Rapid new-home construction has filled Rolesville with two-story vinyl-sided houses, many with second-story sections that need proper extension-wand equipment to reach safely rather than a ladder alone.",
  },
  {
    slug: "wake-forest-nc",
    city: "Wake Forest",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "A historic Wake County town with a mix of established brick homes and new construction throughout its growing subdivisions.",
    nearby: ["Rolesville", "Youngsville", "Raleigh"],
    corridor: "US-1",
    distanceNote: "Northwest of Zebulon, a straightforward drive.",
      regionalNote:
      "A genuine mix of century-old brick homes near the historic downtown and newer subdivisions on the outskirts. Brick and older mortar joints call for gentler soft-wash pressure than the vinyl-heavy newer builds nearby.",
  },
  {
    slug: "youngsville-nc",
    city: "Youngsville",
    state: "NC",
    stateFull: "North Carolina",
    county: "Franklin County",
    blurb: "A small Franklin County town seeing rapid new-construction growth along the US-1 corridor.",
    nearby: ["Wake Forest", "Franklinton", "Rolesville"],
    corridor: "US-1",
    distanceNote: "Just over the Wake/Franklin county line from Zebulon.",
      regionalNote:
      "One of the fastest-growing small towns on the US-1 corridor - mostly new construction with landscaping still establishing, so we're deliberate about where soft-wash runoff goes around young plantings.",
  },
  {
    slug: "franklinton-nc",
    city: "Franklinton",
    state: "NC",
    stateFull: "North Carolina",
    county: "Franklin County",
    blurb: "A Franklin County town with older housing stock that benefits from regular soft washing and gutter maintenance.",
    nearby: ["Youngsville", "Louisburg", "Bunn"],
    corridor: "US-1",
    distanceNote: "Northwest of Zebulon in Franklin County.",
      regionalNote:
      "Older housing stock than the newer Wake County towns nearby, with more wood siding and aging gutter systems - gutter condition and fascia checks matter more here than in a brand-new subdivision.",
  },
  {
    slug: "louisburg-nc",
    city: "Louisburg",
    state: "NC",
    stateFull: "North Carolina",
    county: "Franklin County",
    blurb: "The Franklin County seat, with a historic downtown and surrounding rural properties.",
    nearby: ["Franklinton", "Bunn", "Nashville"],
    corridor: "US-401",
    distanceNote: "North of Zebulon along the Franklin County line.",
      regionalNote:
      "The historic Franklin County seat mixes century-old downtown buildings with surrounding rural homes on larger, more shaded lots - algae and moss growth tend to run heavier here than in open newer subdivisions.",
  },
  {
    slug: "bunn-nc",
    city: "Bunn",
    state: "NC",
    stateFull: "North Carolina",
    county: "Franklin County",
    blurb: "A rural Franklin County community with farmhouses, larger lots, and outbuildings alongside newer homes.",
    nearby: ["Zebulon", "Louisburg", "Spring Hope"],
    corridor: "NC-39",
    distanceNote: "Northeast of Zebulon in Franklin County.",
      regionalNote:
      "A rural community of larger lots, farmhouses, and outbuildings alongside newer homes. Well water and septic systems are common out here, which we account for when directing wash runoff away from wellheads and drain fields.",
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "North Carolina's capital and the anchor of the Triangle, with everything from downtown storefronts to sprawling residential subdivisions.",
    nearby: ["Knightdale", "Garner", "Wake Forest"],
    corridor: "US-64 / I-540",
    distanceNote: "A straight shot west of Zebulon.",
      regionalNote:
      "Everything from downtown storefronts and row houses to sprawling suburban subdivisions - the widest range of any stop on our North Carolina route, so equipment and crew size scale to whatever the property actually needs.",
  },
  {
    slug: "garner-nc",
    city: "Garner",
    state: "NC",
    stateFull: "North Carolina",
    county: "Wake County",
    blurb: "A growing Wake County town south of Raleigh with a strong mix of residential neighborhoods and commercial corridors.",
    nearby: ["Raleigh", "Clayton", "Knightdale"],
    corridor: "US-70",
    distanceNote: "South of Raleigh, a reasonable drive from Zebulon.",
      regionalNote:
      "A mix of established 1990s-2000s neighborhoods and newer development. Concrete driveways from that earlier wave of growth are old enough now to show real algae buildup rather than just surface dust.",
  },
  {
    slug: "clayton-nc",
    city: "Clayton",
    state: "NC",
    stateFull: "North Carolina",
    county: "Johnston County",
    blurb: "One of the fastest-growing towns in the state, with new subdivisions going up constantly along the US-70 corridor.",
    nearby: ["Garner", "Smithfield", "Raleigh"],
    corridor: "US-70",
    distanceNote: "Southeast of Raleigh, within our regular service radius.",
      regionalNote:
      "One of the fastest-growing towns in the state - a large share of homes here are under five years old, so most Clayton jobs are a true first cleaning rather than catching up on years of neglect.",
  },
  {
    slug: "smithfield-nc",
    city: "Smithfield",
    state: "NC",
    stateFull: "North Carolina",
    county: "Johnston County",
    blurb: "The Johnston County seat, with a historic downtown and a wide mix of home ages and commercial buildings.",
    nearby: ["Clayton", "Selma", "Wilson's Mills"],
    corridor: "US-70 / I-95",
    distanceNote: "Southeast of Zebulon along the I-95 corridor.",
      regionalNote:
      "The Johnston County seat pairs older in-town housing stock with newer development along US-70. Humidity off the nearby Neuse River basin keeps algae growth active for more of the year than drier inland towns.",
  },
  {
    slug: "nashville-nc",
    city: "Nashville",
    state: "NC",
    stateFull: "North Carolina",
    county: "Nash County",
    blurb: "The Nash County seat, a quiet community with established neighborhoods and a small-town commercial district.",
    nearby: ["Rocky Mount", "Bunn", "Spring Hope"],
    corridor: "US-64",
    distanceNote: "East of Zebulon toward Rocky Mount.",
      regionalNote:
      "A quiet, established Nash County community with a broad mix of home ages and less new-construction churn than the Triangle towns - recurring seasonal maintenance tends to matter more here than one-time pre-sale cleanings.",
  },
  {
    slug: "rocky-mount-nc",
    city: "Rocky Mount",
    state: "NC",
    stateFull: "North Carolina",
    county: "Nash / Edgecombe Counties",
    blurb: "A regional hub along I-95 with a broad mix of residential neighborhoods, retail centers, and industrial property.",
    nearby: ["Nashville", "Wilson", "Tarboro"],
    corridor: "I-95 / US-64",
    distanceNote: "East of Zebulon along US-64.",
      regionalNote:
      "A regional hub with real variety - residential neighborhoods, retail centers along US-64/I-95, and older industrial buildings. Commercial work here often means loading docks and warehouse aprons alongside standard storefronts.",
  },
  {
    slug: "henderson-nc",
    city: "Henderson",
    state: "NC",
    stateFull: "North Carolina",
    county: "Vance County",
    blurb: "A Vance County city near Kerr Lake with a mix of lakefront properties and in-town residential and commercial buildings.",
    nearby: ["Oxford", "Louisburg", "South Hill, VA"],
    corridor: "I-85 / US-1",
    distanceNote: "North of Zebulon, near the Virginia state line.",
      regionalNote:
      "A Vance County city near Kerr Lake, where lakefront and near-lake properties see noticeably heavier mildew and algae exposure than homes further from the water, given the near-constant humidity.",
  },
  {
    slug: "oxford-nc",
    city: "Oxford",
    state: "NC",
    stateFull: "North Carolina",
    county: "Granville County",
    blurb: "The Granville County seat, with a historic downtown district and surrounding residential neighborhoods.",
    nearby: ["Henderson", "Butner", "Louisburg"],
    corridor: "NC-96",
    distanceNote: "Northwest of Zebulon toward the Virginia line.",
      regionalNote:
      "The historic Granville County seat has a well-preserved downtown district of older masonry and painted wood - we lean soft-wash heavy rather than high pressure on most buildings in and around it.",
  },
  // Virginia - US-58 corridor / southern VA towns
  {
    slug: "south-hill-va",
    city: "South Hill",
    state: "VA",
    stateFull: "Virginia",
    county: "Mecklenburg County",
    blurb: "A Southside Virginia town along the US-58 corridor, just across the state line from our home base.",
    nearby: ["Clarksville", "Chase City", "Henderson, NC"],
    corridor: "US-58 / I-85",
    distanceNote: "The closest Virginia stop on our regular route.",
      regionalNote:
      "The first Virginia stop on our regular route, sitting right at the US-58/I-85 interchange. A mix of established in-town homes and newer development, not unlike the character of towns just across the state line in NC.",
  },
  {
    slug: "clarksville-va",
    city: "Clarksville",
    state: "VA",
    stateFull: "Virginia",
    county: "Mecklenburg County",
    blurb: "A lake town on Kerr Lake / Buggs Island Lake, with waterfront homes and docks that see heavy algae and mildew exposure.",
    nearby: ["South Hill", "Chase City", "Boydton"],
    corridor: "US-58",
    distanceNote: "Along the US-58 corridor in Southside Virginia.",
      regionalNote:
      "A lake town on Kerr Lake / Buggs Island Lake, where dock and waterfront home cleaning is a regular request - full-time exposure to lake humidity means algae shows up faster here than almost anywhere else on our route.",
  },
  {
    slug: "chase-city-va",
    city: "Chase City",
    state: "VA",
    stateFull: "Virginia",
    county: "Mecklenburg County",
    blurb: "A small Southside Virginia town with a historic core and surrounding rural residential properties.",
    nearby: ["South Hill", "Clarksville", "Kenbridge"],
    corridor: "US-58",
    distanceNote: "Southside Virginia, off the US-58 corridor.",
      regionalNote:
      "A small Southside Virginia town of mostly older rural residential properties on larger, well-treed lots - shaded roof sections are usually the first place algae shows itself here.",
  },
  {
    slug: "emporia-va",
    city: "Emporia",
    state: "VA",
    stateFull: "Virginia",
    county: "Greensville County",
    blurb: "An independent city along I-95 in Southside Virginia, with a mix of residential neighborhoods and roadside commercial property.",
    nearby: ["South Hill", "Lawrenceville", "Jarratt"],
    corridor: "I-95 / US-58",
    distanceNote: "Southside Virginia along the I-95 corridor.",
      regionalNote:
      "An independent city along I-95 with more roadside commercial property - hotels, gas stations, retail - mixed in with residential neighborhoods than the more rural towns further along the US-58 corridor.",
  },
  {
    slug: "south-boston-va",
    city: "South Boston",
    state: "VA",
    stateFull: "Virginia",
    county: "Halifax County",
    blurb: "A Halifax County town along the US-58 corridor with a historic tobacco-district downtown and surrounding residential streets.",
    nearby: ["Danville", "Clarksville", "Chase City"],
    corridor: "US-58",
    distanceNote: "Southside Virginia, west along the US-58 corridor.",
      regionalNote:
      "A Halifax County town with a historic tobacco-district downtown of older brick storefronts and homes, which call for lower, more careful pressure than newer construction would need.",
  },
  {
    slug: "danville-va",
    city: "Danville",
    state: "VA",
    stateFull: "Virginia",
    county: "Pittsylvania County",
    blurb: "A larger Southside Virginia city on the North Carolina border, with historic river-district architecture and a wide residential and commercial base.",
    nearby: ["South Boston", "Yanceyville, NC", "Martinsville"],
    corridor: "US-58 / US-29",
    distanceNote: "The western edge of our Virginia service area.",
      regionalNote:
      "A larger Southside Virginia city with genuine historic river-district architecture and the widest mix of property types on our Virginia route - residential, commercial, and larger industrial-scale work alike.",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
export const ncLocations = locations.filter((l) => l.state === "NC");
export const vaLocations = locations.filter((l) => l.state === "VA");
