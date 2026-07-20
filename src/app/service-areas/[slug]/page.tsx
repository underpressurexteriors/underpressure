import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import { locations, getLocation } from "@/lib/locations";
import { services } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: `Pressure Washing in ${loc.city}, ${loc.state} | ${business.name}`,
    description: `Licensed and insured pressure washing, soft washing, and exterior cleaning in ${loc.city}, ${loc.stateFull}. ${loc.blurb} Free quotes from ${business.name}.`,
    alternates: { canonical: `/service-areas/${loc.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const nearbyLocations = locations
    .filter((l) => l.slug !== loc.slug && loc.nearby.some((n) => n.startsWith(l.city)))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pressure Washing",
          name: `Pressure Washing in ${loc.city}, ${loc.state}`,
          provider: { "@id": `${business.url}/#organization` },
          areaServed: {
            "@type": "City",
            name: loc.city,
            containedInPlace: { "@type": "AdministrativeArea", name: loc.stateFull },
          },
        }}
      />
      <section className="grain bg-ink-soft py-16 text-white sm:py-20">
        <Container>
          <nav className="text-data text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link> /{" "}
            <span className="text-white/80">{loc.city}, {loc.state}</span>
          </nav>
          <p className="text-data mt-6 text-xs uppercase tracking-[0.25em] text-orange">
            {loc.county} · {loc.stateFull}
          </p>
          <h1 className="text-display mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Pressure Washing in {loc.city}, {loc.state}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{loc.blurb}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href={business.phoneHref} variant="ghost" className="border-white/30 text-white hover:border-orange">
              Call {business.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="reveal space-y-5 text-ink/80">
            <p>
              Under Pressure Xteriors provides pressure washing, soft washing,
              and full exterior cleaning services to homeowners and
              businesses in {loc.city}, {loc.stateFull}, and throughout{" "}
              {loc.county}. {loc.distanceNote}
            </p>
            <p>
              Whether it&apos;s an algae-streaked driveway, siding that needs a
              soft wash, or a commercial property that needs to stay
              presentable, we bring the right equipment and technique for{" "}
              {loc.city}&apos;s mix of home styles and property types. Properties
              along the {loc.corridor} corridor are part of our regular
              route, alongside neighboring communities like{" "}
              {loc.nearby.join(", ")}.
            </p>
            <p>
              Every job in {loc.city} starts with a free, no-obligation quote.
              We&apos;ll take a look at what needs cleaning, walk you through the
              approach, and give you a straightforward price before any work
              begins.
            </p>
          </div>

          <aside className="space-y-8">
            <div className="reveal border border-ink/10 bg-white p-6">
              <h3 className="text-display text-lg text-navy">At a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink/60">County</dt>
                  <dd className="text-data text-ink">{loc.county}</dd>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink/60">State</dt>
                  <dd className="text-data text-ink">{loc.stateFull}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/60">Corridor</dt>
                  <dd className="text-data text-ink">{loc.corridor}</dd>
                </div>
              </dl>
            </div>

            {nearbyLocations.length > 0 && (
              <div className="reveal border border-ink/10 bg-white p-6">
                <h3 className="text-display text-lg text-navy">Nearby areas</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {nearbyLocations.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/service-areas/${l.slug}`} className="text-ink/70 hover:text-orange-dark">
                        {l.city}, {l.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="reveal border border-ink/10 bg-navy p-6 text-white">
              <h3 className="text-display text-lg">Two service lines</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link href="/residential-pressure-washing" className="text-orange hover:text-white">
                  Residential →
                </Link>
                <Link href="/commercial-pressure-washing" className="text-orange hover:text-white">
                  Commercial →
                </Link>
              </div>
            </div>
          </aside>
        </Container>

        <Container className="mt-8">
          <div className="reveal">
            <Eyebrow>Services available in {loc.city}</Eyebrow>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
