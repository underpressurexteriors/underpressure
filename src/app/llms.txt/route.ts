import { services } from "@/lib/services";
import { locations, ncLocations, vaLocations } from "@/lib/locations";
import { blogPosts } from "@/lib/blog";
import { resources } from "@/lib/resources";
import { business } from "@/lib/business";

export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];

  lines.push(`# ${business.name}`);
  lines.push("");
  lines.push(
    `> ${business.name} is a licensed and insured pressure washing and exterior cleaning company based in ${business.city}, ${business.state}, serving homeowners, businesses, HOAs, property managers, and realtors across North Carolina and Virginia. Services include surface cleaning, soft washing, roof washing, fence and deck cleaning, patio cleaning, trash can cleaning, paver and pool deck cleaning, gutter cleaning, and window cleaning.`
  );
  lines.push("");
  lines.push(`Phone: ${business.phone}`);
  lines.push(`Email: ${business.email}`);
  lines.push(`Website: ${business.url}`);
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.name}](${business.url}/services/${s.slug}): ${s.tagline}`);
  }
  lines.push("");

  lines.push("## Who We Serve");
  lines.push(`- [Residential](${business.url}/residential-pressure-washing): House washing, driveways, decks, roofs, and gutters for homeowners.`);
  lines.push(`- [Commercial](${business.url}/commercial-pressure-washing): Storefronts, parking lots, and recurring maintenance for businesses.`);
  lines.push(`- [Property Management](${business.url}/property-management): HOAs, multifamily communities, and commercial portfolios.`);
  lines.push(`- [Realtors & Home Sellers](${business.url}/real-estate-pressure-washing): Listing-prep exterior cleaning timed around photos and showings.`);
  lines.push("");

  lines.push(`## Service Areas — North Carolina (${ncLocations.length})`);
  lines.push(
    ncLocations.map((l) => `[${l.city}](${business.url}/service-areas/${l.slug})`).join(", ")
  );
  lines.push("");
  lines.push(`## Service Areas — Virginia (${vaLocations.length})`);
  lines.push(
    vaLocations.map((l) => `[${l.city}](${business.url}/service-areas/${l.slug})`).join(", ")
  );
  lines.push("");

  lines.push("## Blog");
  for (const p of blogPosts) {
    lines.push(`- [${p.title}](${business.url}/blog/${p.slug}): ${p.description}`);
  }
  lines.push("");

  lines.push("## Resources & Guides");
  for (const r of resources) {
    lines.push(`- [${r.title}](${business.url}/resources/${r.slug}): ${r.description}`);
  }
  lines.push("");

  lines.push("## Other Pages");
  lines.push(`- [About](${business.url}/about)`);
  lines.push(`- [FAQ](${business.url}/faq)`);
  lines.push(`- [Gallery](${business.url}/gallery)`);
  lines.push(`- [Contact](${business.url}/contact)`);
  lines.push("");

  lines.push(`Total service area pages: ${locations.length}. Full sitemap: ${business.url}/sitemap.xml`);

  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
