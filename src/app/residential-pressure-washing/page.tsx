import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { residentialServices } from "@/lib/services";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Residential Pressure Washing",
  description:
    "Residential pressure washing and soft washing for homes in North Carolina and Virginia. House washing, driveway cleaning, roof washing, deck cleaning, gutter cleaning, and more.",
  alternates: { canonical: "/residential-pressure-washing" },
};

const reasons = [
  { title: "Curb appeal that holds up", detail: "A clean exterior is the fastest, most affordable way to make a home look cared for - whether you're staying or selling." },
  { title: "Protects your investment", detail: "Algae, mildew, and grime aren't just cosmetic - left alone, they degrade siding, shingles, and concrete over time." },
  { title: "Scheduled around you", detail: "Morning, afternoon, or weekend - we work appointments around your schedule, not the other way around." },
];

const timeline = [
  { season: "Spring", task: "Gutters, driveway, and siding - get ahead of pollen and the coming humidity.", link: "/blog/spring-cleaning-checklist-for-north-carolina-homeowners" },
  { season: "Summer", task: "Deck, fence, and patio - the surfaces getting the most use during outdoor season." },
  { season: "Fall", task: "Roof soft wash before winter, once summer algae growth has had time to show itself.", link: "/resources/benefits-of-roof-soft-washing" },
  { season: "Winter", task: "Gutter cleanout before storm season and freezing temperatures.", link: "/blog/5-signs-your-gutters-need-to-be-cleaned-before-winter" },
];

const scenarios = [
  {
    title: "Just moved in",
    detail: "The previous owner's maintenance schedule isn't yours. A move-in wash gets the exterior to a baseline you know, rather than inheriting years of unknown history.",
  },
  {
    title: "Getting ready to sell",
    detail: "Listing photos and showings both hinge on first impressions. See our dedicated page for realtors and sellers for the full listing-prep breakdown.",
  },
  {
    title: "Annual upkeep",
    detail: "The most cost-effective approach - regular cleaning on a schedule prevents the kind of years-deep buildup that takes longer (and costs more) to reverse.",
  },
  {
    title: "It's been a while",
    detail: "No judgment - exteriors get put off. A heavier first cleaning gets a neglected property back to a normal maintenance rhythm.",
  },
];

const residentialFaqs = [
  {
    q: "How long does a full residential exterior job take?",
    a: "It depends on scope - a driveway alone might take under an hour, while a full-property job (house wash, driveway, walkways, gutters) typically takes most of a day for an average-sized home.",
  },
  {
    q: "Do I need to be home?",
    a: "Not necessarily, as long as we have access to the areas being cleaned. Many homeowners aren't home during exterior-only visits.",
  },
  {
    q: "Will you move my outdoor furniture?",
    a: "We're happy to work around furniture, but a quicker and more thorough clean happens when driveways, patios, and decks are cleared beforehand. We'll let you know before we start if anything's in the way.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Residential Pressure Washing",
          name: "Residential Pressure Washing",
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
          mainEntity: residentialFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Residential"
        title="Your home, looking like the day you moved in."
        description="From the driveway to the roofline, we handle the full exterior of your home with equipment and technique matched to each surface."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/working.jpg"
              alt="Technician pressure washing a residential driveway"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <Eyebrow>For Homeowners</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              A cleaner exterior, without the guesswork
            </h2>
            <p className="mt-4 text-ink/70">
              Every home is different - different siding, different concrete,
              different amount of shade and tree cover. We assess your
              property before we start, so the driveway gets the surface
              cleaner, the siding gets a soft wash, and nothing gets a
              one-size-fits-all approach that risks damage.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-1">
              {reasons.map((r) => (
                <div key={r.title} className="border-l-2 border-orange pl-4">
                  <h3 className="text-display text-base text-navy">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{r.detail}</p>
                </div>
              ))}
            </div>
            <Button href="/contact" className="mt-8">Get a Free Quote</Button>
            <p className="mt-4 text-sm text-ink/60">
              Selling soon?{" "}
              <Link href="/real-estate-pressure-washing" className="font-semibold text-orange-dark underline">
                See our listing-prep page for realtors &amp; sellers
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>A Home Doesn&apos;t Need Everything At Once</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              A realistic year-round schedule
            </h2>
            <p className="mt-4 text-ink/70">
              Most homes don&apos;t need every service at the same time - spreading
              maintenance across the year keeps any one visit smaller and
              keeps ahead of buildup instead of catching up to it.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <div key={t.season} className="reveal bg-white p-6" data-reveal-delay={i * 70}>
                <span className="text-data text-xs uppercase tracking-wide text-orange-dark">{t.season}</span>
                <p className="mt-2 text-sm text-ink/70">{t.task}</p>
                {t.link && (
                  <Link href={t.link} className="mt-3 inline-block text-xs font-semibold text-orange-dark hover:text-orange">
                    Read more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Sound Familiar?</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Most homeowners call us for one of four reasons
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {scenarios.map((s, i) => (
              <div key={s.title} className="reveal border border-ink/10 bg-white p-6" data-reveal-delay={i * 70}>
                <h3 className="text-display text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Residential Services</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Everything the outside of your home needs
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {residentialServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal">
            <Eyebrow>Residential FAQ</Eyebrow>
            <h2 className="text-display mt-3 text-2xl text-ink">Common questions</h2>
          </div>
          <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {residentialFaqs.map((f) => (
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
            Let&apos;s get your home looking right.
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
