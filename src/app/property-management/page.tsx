import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pressure Washing for Property Managers",
  description:
    "Pressure washing for HOAs, apartment communities, and commercial portfolios in North Carolina and Virginia. One vendor, consistent quality, documentation ready for your files.",
  alternates: { canonical: "/property-management" },
  openGraph: {
    title: "Pressure Washing for Property Managers",
    description: "Pressure washing for HOAs, apartment communities, and commercial portfolios in North Carolina and Virginia. One vendor, consistent quality, documentation ready for your files.",
    url: `${business.url}/property-management`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing for Property Managers",
    description: "Pressure washing for HOAs, apartment communities, and commercial portfolios in North Carolina and Virginia. One vendor, consistent quality, documentation ready for your files.",
  },
};

const vendorConcerns = [
  {
    title: "Insurance on file",
    detail: "Licensed and insured, with documentation ready for your vendor files before the first job is scheduled.",
  },
  {
    title: "Consistent quality, every property",
    detail: "The same process and standards across every property in your portfolio - not different results depending on who shows up.",
  },
  {
    title: "Invoicing that fits your structure",
    detail: "Per-property, consolidated, or however your accounting needs it billed - we'll work with your process, not make you work around ours.",
  },
  {
    title: "Scheduling around occupied space",
    detail: "Coordinated timing that respects tenants, residents, and business hours - not a crew showing up unannounced.",
  },
  {
    title: "One point of contact",
    detail: "A direct line for scheduling, questions, or a property that needs to be added to the rotation - no call center, no runaround.",
  },
  {
    title: "Work you can document",
    detail: "Straightforward records of what was done and when, useful for board meetings, owner reporting, or your own maintenance logs.",
  },
];

const segments = [
  {
    title: "HOA & Community Associations",
    detail:
      "Entrance signage, common-area sidewalks, clubhouse and pool-deck exteriors, and community building facades. We can work with board timelines and provide straightforward before/after documentation if it's useful for a meeting or newsletter update.",
  },
  {
    title: "Multifamily & Apartment Communities",
    detail:
      "Building exteriors, breezeways, stairwells, dumpster corrals, and parking structures - scheduled to minimize disruption to residents and coordinated around occupied units rather than assuming empty ones.",
  },
  {
    title: "Commercial Portfolios",
    detail:
      "Retail centers, office parks, and mixed-use properties kept to a consistent standard across every location under one contract, instead of managing a different vendor relationship at each site.",
  },
];

export default function PropertyManagementPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Property Management Pressure Washing",
          name: "Pressure Washing for Property Managers",
          provider: { "@id": `${business.url}/#organization` },
          areaServed: [
            { "@type": "State", name: "North Carolina" },
            { "@type": "State", name: "Virginia" },
          ],
        }}
      />
      <PageHero
        eyebrow="Property Management"
        title="One vendor for the whole portfolio."
        description="HOAs, apartment communities, and commercial properties across North Carolina and Virginia - kept to one standard, on one schedule, with one point of contact."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <Eyebrow>Why It&apos;s Different From a One-Off Job</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              You&apos;re not cleaning a building. You&apos;re vetting a vendor.
            </h2>
            <p className="mt-4 text-ink/70">
              Managing property on behalf of an HOA board, an ownership
              group, or a portfolio of investors comes with a different set
              of questions than a homeowner cleaning their own driveway -
              insurance documentation, consistency across multiple sites,
              and a vendor relationship that doesn&apos;t need to be re-explained
              every time. That&apos;s what this page is actually about.
            </p>
            <Button href="/contact" className="mt-8">Talk to Us About Your Portfolio</Button>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/rig.jpg"
              alt="Under Pressure Xteriors rig set up for a property management job"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow dark>What Property Managers Actually Need</Eyebrow>
            <h2 className="text-display mt-3 text-3xl sm:text-4xl">
              The vendor-relationship stuff, handled
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vendorConcerns.map((v, i) => (
              <div key={v.title} className="reveal border-l-2 border-orange pl-5" data-reveal-delay={i * 60}>
                <h3 className="text-display text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Who We Work With</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Three kinds of properties, one standard
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {segments.map((s, i) => (
              <div key={s.title} className="reveal border border-ink/10 bg-white p-7" data-reveal-delay={i * 80}>
                <h3 className="text-display text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{s.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Getting Started</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Adding a property (or a portfolio) to the schedule
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="reveal" data-reveal-delay="0">
              <span className="text-data text-sm text-orange-dark">01</span>
              <h3 className="text-display mt-3 text-lg text-ink">Walk the property</h3>
              <p className="mt-2 text-sm text-ink/70">
                We look at what&apos;s actually there - common areas, hardscape,
                building exteriors - and scope what a realistic recurring
                schedule looks like.
              </p>
            </div>
            <div className="reveal" data-reveal-delay="80">
              <span className="text-data text-sm text-orange-dark">02</span>
              <h3 className="text-display mt-3 text-lg text-ink">Set the terms</h3>
              <p className="mt-2 text-sm text-ink/70">
                Frequency, invoicing structure, and how we coordinate
                scheduling around tenants, residents, or board timelines -
                agreed on up front, not figured out mid-contract.
              </p>
            </div>
            <div className="reveal" data-reveal-delay="160">
              <span className="text-data text-sm text-orange-dark">03</span>
              <h3 className="text-display mt-3 text-lg text-ink">Run the schedule</h3>
              <p className="mt-2 text-sm text-ink/70">
                Recurring service runs on the agreed cadence, with a direct
                point of contact if a property needs something outside the
                normal rotation.
              </p>
            </div>
          </div>
          <p className="reveal mt-10 text-sm text-ink/60">
            For a look at how we typically structure visit frequency across
            different surfaces,{" "}
            <Link href="/commercial-pressure-washing" className="font-semibold text-orange-dark underline">
              see our commercial services page
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="grain bg-orange py-14 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-display max-w-xl text-2xl sm:text-3xl">
            Managing multiple properties? Let&apos;s talk portfolio-wide.
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary" className="!bg-ink hover:!bg-ink-soft">
              Request a Quote
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
