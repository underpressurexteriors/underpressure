import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pressure Washing for Home Sellers & Realtors",
  description:
    "Listing-ready pressure washing for homes going on the market in North Carolina and Virginia. Driveway, siding, windows, and roof cleaning timed around your listing photos and showings.",
  alternates: { canonical: "/real-estate-pressure-washing" },
  openGraph: {
    title: "Pressure Washing for Home Sellers & Realtors",
    description: "Listing-ready pressure washing for homes going on the market in North Carolina and Virginia. Driveway, siding, windows, and roof cleaning timed around your listing photos and showings.",
    url: `${business.url}/real-estate-pressure-washing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing for Home Sellers & Realtors",
    description: "Listing-ready pressure washing for homes going on the market in North Carolina and Virginia. Driveway, siding, windows, and roof cleaning timed around your listing photos and showings.",
  },
};

const included = [
  { title: "Driveway & walkway", detail: "The first surface a buyer sees walking up - and the first thing that reads as neglected if it's stained or streaked." },
  { title: "House soft wash", detail: "Algae and mildew streaking shows up clearly in listing photos, especially on light-colored siding." },
  { title: "Windows", detail: "Streak-free glass, inside and out, so listing photos aren't fighting hard water spots or film." },
  { title: "Roof soft wash", detail: "Black algae streaking on a roof reads as \"needs a new roof soon\" to buyers, even when it doesn't." },
  { title: "Deck & patio", detail: "Outdoor living space is a selling point - only if it looks like one in photos and in person." },
  { title: "Gutters", detail: "Streaked, overflowing, or debris-visible gutters are an easy detail for buyers to fixate on during a walkthrough." },
];

const timeline = [
  { step: "1-2 weeks out", detail: "Book your cleaning - this gives buffer room for weather and lets siding/roof soft wash results fully show before photos." },
  { step: "1-3 days before photos", detail: "Ideal cleaning window - surfaces are visibly fresh without weather or pollen having a chance to dull them again." },
  { step: "Photo day", detail: "Property shows at its best - no scrambling to touch up an algae streak the camera caught." },
  { step: "Through closing", detail: "A clean exterior keeps making a good impression at every showing and inspection between listing and closing." },
];

const realEstateFaqs = [
  {
    q: "Should exterior cleaning happen before or after staging?",
    a: "Before, generally - staging is mostly interior-focused, and exterior cleaning doesn't interfere with it. Booking the exterior work early in the listing-prep timeline means it's done and out of the way before the photographer and stager show up.",
  },
  {
    q: "Can you clean a vacant property?",
    a: "Yes - vacant homes are common in listing-prep work. As long as we have access to the exterior and any water shutoffs are handled, an empty house is no different to clean than an occupied one.",
  },
  {
    q: "Does this help with the home inspection too?",
    a: "Indirectly - a clean exterior doesn't change what an inspector finds, but it does make it easier to actually see the condition of siding, roofing, and gutters, which can help avoid a buyer's inspector flagging something that's really just surface grime.",
  },
  {
    q: "How fast can you turn around a listing that's going live this week?",
    a: "Reach out as early as possible - we'll always try to accommodate a tight listing timeline, but availability depends on current bookings, especially during spring and summer listing season.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Real Estate Listing Pressure Washing",
          name: "Pressure Washing for Home Sellers & Realtors",
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
          mainEntity: realEstateFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Realtors & Home Sellers"
        title="First showing starts with the listing photos."
        description="Buyers decide whether to click into a listing based on the exterior photo. We get properties camera-ready and showing-ready across North Carolina and Virginia."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              The exterior sells the click. The interior sells the house.
            </h2>
            <div className="mt-4 space-y-4 text-ink/70">
              <p>
                Before a buyer ever walks through a door, they scroll past a
                thumbnail. Real estate professionals consistently point to
                exterior cleanliness as one of the highest-return,
                lowest-cost improvements a seller can make before a listing
                goes live - it doesn&apos;t require renovation, just a few hours
                of the right cleaning.
              </p>
              <p>
                A stained driveway, streaked siding, or algae-covered roof
                doesn&apos;t just look bad in photos - it plants a doubt in a
                buyer&apos;s mind about how well the rest of the house has been
                maintained, before they&apos;ve seen a single interior room.
              </p>
              <p>
                For homes that are already staged, priced right, and ready
                to show, exterior cleaning is often the fastest, cheapest
                improvement standing between the property and its best
                possible first impression.
              </p>
            </div>
            <Button href="/contact" className="mt-8">Get a Free Quote</Button>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/working.jpg"
              alt="Technician pressure washing a driveway ahead of a home listing"
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
            <Eyebrow dark>Listing-Ready Package</Eyebrow>
            <h2 className="text-display mt-3 text-3xl sm:text-4xl">
              What we cover before photos and showings
            </h2>
            <p className="mt-4 text-white/70">
              Not every listing needs every service - we&apos;ll walk the
              property with you (or your seller) and recommend what
              actually moves the needle for that specific home.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <div key={item.title} className="reveal border-l-2 border-orange pl-5" data-reveal-delay={i * 60}>
                <h3 className="text-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Timing It Right</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Built around your listing date, not the other way around
            </h2>
            <p className="mt-4 text-ink/70">
              The biggest mistake in listing prep is booking exterior
              cleaning too late, or too early. Here&apos;s the window that
              actually works.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <div key={t.step} className="reveal border border-ink/10 bg-white p-6" data-reveal-delay={i * 70}>
                <span className="text-data text-xs uppercase tracking-wide text-orange-dark">
                  {t.step}
                </span>
                <p className="mt-2 text-sm text-ink/70">{t.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <Eyebrow>For Realtors</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              A vendor you can send sellers to without a second thought
            </h2>
            <p className="mt-4 text-ink/70">
              If you&apos;re listing multiple properties a year, having a
              reliable, fast-turnaround exterior cleaning contact matters -
              one you can recommend to a seller directly, or book on their
              behalf ahead of photos. We work around listing timelines and
              can coordinate directly with you or the homeowner.
            </p>
            <p className="mt-4 text-ink/70">
              If you list regularly in North Carolina or Virginia and want
              a standing arrangement for your listings, reach out - we&apos;re
              glad to talk through how recurring realtor work would fit
              your schedule.
            </p>
            <Button href="/contact" variant="secondary" className="mt-8">
              Talk to Us About Your Listings
            </Button>
          </div>
          <div className="reveal">
            <Eyebrow>For Buyers</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Just closed? Start clean.
            </h2>
            <p className="mt-4 text-ink/70">
              Buying a home doesn&apos;t always mean it comes to you looking its
              best - the previous owner&apos;s maintenance schedule isn&apos;t yours.
              A move-in wash (driveway, siding, deck, gutters) is a
              straightforward way to make a new house feel like it&apos;s
              actually yours from day one, before furniture and boxes make
              exterior work more of a hassle to schedule around.
            </p>
            <Button href="/residential-pressure-washing" variant="ghost" className="mt-8">
              See Residential Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal">
            <Eyebrow>Listing Prep FAQ</Eyebrow>
            <h2 className="text-display mt-3 text-2xl text-ink">Common questions</h2>
          </div>
          <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {realEstateFaqs.map((f) => (
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
            Listing soon? Let&apos;s get it photo-ready.
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
