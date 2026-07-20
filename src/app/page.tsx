import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import LocationCard from "@/components/LocationCard";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `Pressure Washing in ${business.city}, NC | Licensed & Insured`,
  description:
    "Under Pressure Xteriors provides professional pressure washing, soft washing, roof cleaning, and more for homes and businesses across North Carolina and Virginia. Free quotes.",
  alternates: { canonical: "/" },
};

const whyUs = [
  {
    title: "Licensed & Insured",
    detail: "Fully licensed and insured for both residential and commercial work, so you're covered from the first spray to the last rinse.",
  },
  {
    title: "Residential + Commercial",
    detail: "One crew, two service lines - from single-family driveways to multi-unit properties and commercial storefronts.",
  },
  {
    title: "Method Matched to the Surface",
    detail: "Soft wash for siding and roofs, surface cleaning for concrete, hand detailing for the tight spots. We don't run one setting for every job.",
  },
  {
    title: "NC & VA Coverage",
    detail: "Based in Zebulon, NC and routing regularly through the Triangle, eastern NC, and Southside Virginia along US-58 and I-95.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": `${business.url}/#organization`,
          name: business.name,
          image: `${business.url}/images/working.jpg`,
          telephone: business.phone,
          email: business.email,
          url: business.url,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: business.city,
            addressRegion: business.state,
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "State", name: "North Carolina" },
            { "@type": "State", name: "Virginia" },
          ],
          founder: { "@type": "Person", name: business.founder },
          sameAs: [],
        }}
      />
      <Hero />

      <div className="border-b border-ink/10 bg-navy py-3">
        <Container>
          <div className="text-data flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs uppercase tracking-wide text-white/80 sm:justify-between">
            <span>Licensed &amp; Insured</span>
            <span>Residential &amp; Commercial</span>
            <span>Free On-Site Quotes</span>
            <span>Serving North Carolina &amp; Virginia</span>
          </div>
        </Container>
      </div>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>What We Clean</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Nine specialties. One crew you can call for all of them.
            </h2>
            <p className="mt-4 text-ink/70">
              From a single driveway to a full exterior refresh, every service
              is performed with the pressure, chemistry, and equipment suited
              to that specific surface.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow dark>Two Service Lines</Eyebrow>
            <h2 className="text-display mt-3 text-3xl sm:text-4xl">
              Built for homeowners. Built for property managers, too.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="reveal border border-white/15 p-8">
              <span className="text-data text-xs uppercase tracking-wide text-orange">Residential</span>
              <h3 className="text-display mt-3 text-2xl">
                Your home, looking like the day you moved in
              </h3>
              <p className="mt-4 text-white/70">
                House washing, driveway and walkway cleaning, roof soft
                washing, deck and fence cleaning, gutter cleanouts, and more -
                scheduled around your life, not the other way around.
              </p>
              <Button href="/residential-pressure-washing" variant="secondary" className="mt-6 !bg-white !text-ink hover:!bg-white/90">
                Residential Services
              </Button>
            </div>
            <div className="reveal border border-white/15 p-8" data-reveal-delay="100">
              <span className="text-data text-xs uppercase tracking-wide text-orange">Commercial</span>
              <h3 className="text-display mt-3 text-2xl">
                Storefronts, lots &amp; properties that stay presentable
              </h3>
              <p className="mt-4 text-white/70">
                Parking lot and sidewalk cleaning, storefront washing, dumpster
                pad and trash enclosure cleaning, and recurring maintenance
                programs for HOAs, retail centers, and multi-unit properties.
              </p>
              <Button href="/commercial-pressure-washing" className="mt-6">
                Commercial Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Why Under Pressure Xteriors</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Run right, not rushed.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div key={item.title} className="reveal bg-white p-7" data-reveal-delay={i * 70}>
                <h3 className="text-display text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>On the Job</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Real equipment. Real jobsites.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="reveal relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/rig.jpg"
                alt="Under Pressure Xteriors pressure washing rig - tandem-axle trailer with water tank towed by a white pickup truck"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="reveal relative aspect-[4/3] overflow-hidden" data-reveal-delay="100">
              <Image
                src="/images/working.jpg"
                alt="Technician surface cleaning a residential driveway, showing the clean line between washed and unwashed concrete"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal mt-8 text-center">
            <Link href="/gallery" className="text-sm font-semibold text-orange-dark hover:text-orange">
              See more of our work →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-20 sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Where We Work</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Rolling through the Triangle, eastern NC, and Southside Virginia
            </h2>
            <p className="mt-4 text-ink/70">
              Based in Zebulon, NC, with a regular route covering these
              communities and everywhere in between.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 9).map((loc, i) => (
              <LocationCard key={loc.slug} location={loc} index={i} />
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <Link href="/service-areas" className="text-sm font-semibold text-orange-dark hover:text-orange">
              View all {locations.length} service areas →
            </Link>
          </div>
        </Container>
      </section>

      <section className="grain bg-orange py-16 text-white">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-display max-w-2xl text-3xl sm:text-4xl">
            Get a free, no-pressure quote today.
          </h2>
          <p className="max-w-xl text-white/90">
            Tell us what needs cleaning and where - we&apos;ll get back to you with
            a straightforward quote, no obligation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary" className="!bg-ink hover:!bg-ink-soft">
              Request a Free Quote
            </Button>
            <Button href={business.phoneHref} variant="ghost" className="border-white/40 text-white hover:border-white">
              Call {business.phone}
            </Button>
            <a href={business.smsHref} className="text-display self-center text-sm text-inherit underline underline-offset-4 opacity-80 hover:opacity-100">
              or text us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
