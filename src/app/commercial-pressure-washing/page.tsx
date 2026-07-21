import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { commercialServices } from "@/lib/services";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Commercial Pressure Washing",
  description:
    "Commercial pressure washing for businesses, HOAs, and property managers in North Carolina and Virginia. Storefront washing, parking lot cleaning, dumpster pads, and recurring maintenance programs.",
  alternates: { canonical: "/commercial-pressure-washing" },
  openGraph: {
    title: "Commercial Pressure Washing",
    description: "Commercial pressure washing for businesses, HOAs, and property managers in North Carolina and Virginia. Storefront washing, parking lot cleaning, dumpster pads, and recurring maintenance programs.",
    url: `${business.url}/commercial-pressure-washing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pressure Washing",
    description: "Commercial pressure washing for businesses, HOAs, and property managers in North Carolina and Virginia. Storefront washing, parking lot cleaning, dumpster pads, and recurring maintenance programs.",
  },
};

const clientTypes = [
  { title: "Retail & Storefronts", detail: "Sidewalks, entryways, and storefront glass that stay presentable for foot traffic." },
  { title: "HOAs & Communities", detail: "Recurring maintenance for shared amenities, entrance signage, sidewalks, and common-area buildings.", href: "/property-management" },
  { title: "Property Managers", detail: "Standing service across a portfolio of properties, billed and scheduled on your terms.", href: "/property-management" },
  { title: "Industrial & Warehouse", detail: "Loading docks, warehouse aprons, and equipment pads that need routine degreasing and cleaning." },
];

const cadence = [
  { frequency: "Weekly / Bi-weekly", fit: "Storefront glass and high-traffic entryways where daily impressions matter most." },
  { frequency: "Quarterly", fit: "Parking lots, sidewalks, and common-area hardscape - frequent enough to stay ahead of buildup." },
  { frequency: "Annually", fit: "Full building exterior wash and roof soft washing for the whole property." },
];

const operations = [
  {
    title: "Off-hours available",
    detail: "Early morning, evening, or overnight scheduling for properties where daytime work would disrupt customers or staff.",
  },
  {
    title: "On-site coordination",
    detail: "We work directly with property staff or management to confirm access, timing, and any areas that need to stay clear during the visit.",
  },
  {
    title: "Multi-site scheduling",
    detail: "For portfolios with more than one location, we can build a rotation that covers every property on a consistent, predictable schedule.",
  },
  {
    title: "Documented completion",
    detail: "Straightforward confirmation of what was done and when - useful for your own records or reporting up to ownership.",
  },
];

const commercialFaqs = [
  {
    q: "Can you work outside business hours?",
    a: "Yes - early morning, evening, and off-hours scheduling is available for properties where daytime cleaning would interfere with customers, tenants, or operations.",
  },
  {
    q: "Do you require a contract for recurring service?",
    a: "Recurring service can be set up on whatever cadence fits the property - weekly, quarterly, or annually. We're happy to talk through a structure that works for your situation rather than requiring a rigid standard contract.",
  },
  {
    q: "Can you handle multiple properties under one account?",
    a: "Yes - this is common for property managers and multi-location businesses. See our property management page for more on how portfolio-wide service works.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Commercial Pressure Washing",
          name: "Commercial Pressure Washing",
          provider: { "@id": `${business.url}/#organization` },
          areaServed: [
            { "@type": "State", name: "North Carolina" },
            { "@type": "State", name: "Virginia" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: commercialFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Commercial"
        title="Properties that stay presentable, on a schedule you set."
        description="From a one-time cleanup to a standing maintenance contract, we work around your business hours and tenant schedules."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal order-2 lg:order-1">
            <Eyebrow>For Businesses &amp; Property Managers</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              One vendor for the whole exterior
            </h2>
            <p className="mt-4 text-ink/70">
              Commercial properties come with more surfaces, more square
              footage, and less room for downtime. We plan around your
              operating hours, coordinate with on-site staff, and can set up
              recurring service so cleaning stays consistent without you
              having to schedule it every time.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {clientTypes.map((c) =>
                c.href ? (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="border-l-2 border-orange pl-4 hover:bg-white/50"
                  >
                    <h3 className="text-display text-base text-navy">{c.title} →</h3>
                    <p className="mt-1 text-sm text-ink/70">{c.detail}</p>
                  </Link>
                ) : (
                  <div key={c.title} className="border-l-2 border-orange pl-4">
                    <h3 className="text-display text-base text-navy">{c.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{c.detail}</p>
                  </div>
                )
              )}
            </div>
            <Button href="/contact" className="mt-8">Request a Commercial Quote</Button>
          </div>
          <div className="reveal order-1 relative aspect-[4/3] overflow-hidden lg:order-2">
            <Image
              src="/images/rig.jpg"
              alt="Under Pressure Xteriors commercial-capacity pressure washing rig"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Recurring Service</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              A cadence built around how the property actually gets used
            </h2>
            <p className="mt-4 text-ink/70">
              Different surfaces need different frequencies. Here&apos;s a
              realistic starting structure - we&apos;ll adjust it based on your
              specific property and foot traffic.{" "}
              <Link href="/blog/why-commercial-properties-need-regular-pressure-washing" className="text-orange-dark underline">
                See why this matters for the business case
              </Link>
              , not just the cosmetics.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {cadence.map((c, i) => (
              <div key={c.frequency} className="reveal border border-ink/10 bg-white p-6" data-reveal-delay={i * 80}>
                <h3 className="text-display text-lg text-navy">{c.frequency}</h3>
                <p className="mt-2 text-sm text-ink/70">{c.fit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>How We Operate</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Built to fit around a running business
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {operations.map((o, i) => (
              <div key={o.title} className="reveal border-l-2 border-orange pl-5" data-reveal-delay={i * 70}>
                <h3 className="text-display text-lg text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{o.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Commercial Services</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Built to cover full properties, not just single surfaces
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal">
            <Eyebrow>Commercial FAQ</Eyebrow>
            <h2 className="text-display mt-3 text-2xl text-ink">Common questions</h2>
          </div>
          <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {commercialFaqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink">
                  <span className="text-display text-base">{f.q}</span>
                  <span className="text-orange-dark shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="grain bg-orange py-14 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-display max-w-xl text-2xl sm:text-3xl">
            Ask about recurring commercial service.
          </h2>
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
