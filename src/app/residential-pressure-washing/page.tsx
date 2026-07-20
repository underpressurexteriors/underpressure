import type { Metadata } from "next";
import Image from "next/image";
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
