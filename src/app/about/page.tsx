import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Under Pressure Xteriors, a licensed and insured pressure washing company based in Zebulon, NC serving North Carolina and Virginia.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Show up, do it right", detail: "No shortcuts on method or coverage - every job gets the process that surface actually needs." },
  { title: "Straight answers", detail: "If something won't come fully clean, or a surface needs a different approach, we'll tell you before we start, not after." },
  { title: "Licensed & insured, always", detail: "Every job, residential or commercial, is covered - no exceptions." },
];

const process = [
  { step: "01", title: "Walk the property", detail: "Before any water hits a surface, we look at what we're working with - material, condition, landscaping, anything that needs protecting." },
  { step: "02", title: "Match the method", detail: "Soft wash for siding and roofs, surface cleaning for concrete, hand detail for the tight spots. The right pressure and chemistry for that specific surface, not a one-size-fits-all setting." },
  { step: "03", title: "Do the work", detail: "Clean systematically, section by section, so nothing gets missed and nothing gets rushed." },
  { step: "04", title: "Walk it with you", detail: "Before we call a job finished, we go over the result together - not just drive off once the truck's packed up." },
];

const facts = [
  { label: "Based In", value: `${business.city}, ${business.state}` },
  { label: "Coverage", value: "NC & VA" },
  { label: "Specialties", value: "9 Services" },
  { label: "Status", value: "Licensed & Insured" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on getting it right the first time."
        description="Under Pressure Xteriors is a licensed and insured pressure washing company based in Zebulon, NC, serving homeowners and businesses across North Carolina and Virginia."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="reveal">
            <div className="relative aspect-square overflow-hidden bg-navy">
              <Image
                src="/images/working.jpg"
                alt={`${business.founder}, owner of ${business.name}, pressure washing a driveway`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 border border-ink/10 bg-white p-5">
              <p className="text-display text-lg text-navy">{business.founder}</p>
              <p className="text-data text-xs uppercase tracking-wide text-steel">
                Owner &amp; Operator
              </p>
            </div>
          </div>

          <div className="reveal">
            <Eyebrow>The Short Version</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Meet {business.founder}
            </h2>
            <div className="mt-5 space-y-4 text-ink/80">
              <p>
                {business.founder} founded {business.name} in {business.city},
                North Carolina with a simple standard: do the job with the
                right method for the surface, communicate clearly, and stand
                behind the work. That standard is why the company runs fully
                licensed and insured on every job, residential or commercial.
              </p>
              <p>
                From single driveways to full commercial properties,{" "}
                {business.founder} and the {business.name} crew bring the
                same approach to every job across North Carolina and
                Virginia: assess the surface, use the right equipment and
                chemistry for it, and leave the property better than they
                found it.
              </p>
              <p>
                A more detailed story is coming soon - check back for the
                full write-up, or reach out directly with any questions about
                the company or the work.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-orange pl-4">
                  <h3 className="text-display text-sm text-navy">{v.title}</h3>
                  <p className="mt-1 text-xs text-ink/70">{v.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-white p-4">
                  <p className="text-data text-[0.65rem] uppercase tracking-wide text-steel">
                    {f.label}
                  </p>
                  <p className="text-display mt-1 text-base text-navy">{f.value}</p>
                </div>
              ))}
            </div>

            <Button href="/contact" className="mt-10">Get a Free Quote</Button>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow dark>How We Work</Eyebrow>
            <h2 className="text-display mt-3 text-3xl sm:text-4xl">
              The same process, every property.
            </h2>
            <p className="mt-4 text-white/70">
              Whether it&apos;s a driveway or a full commercial exterior, every
              job follows the same four steps - no shortcuts taken to save
              time.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="reveal" data-reveal-delay={i * 80}>
                <span className="text-data text-sm text-orange">{p.step}</span>
                <h3 className="text-display mt-3 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/rig.jpg"
              alt="Under Pressure Xteriors pressure washing rig - tandem-axle trailer with water tank system towed by a white pickup truck"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <Eyebrow>The Rig</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Equipped to run a full day, anywhere in NC or VA
            </h2>
            <p className="mt-4 text-ink/70">
              The trailer carries its own water supply and equipment, which
              means jobs aren&apos;t dependent on a customer&apos;s outdoor spigot or
              water pressure - useful for larger residential properties and
              essential for commercial jobs where water access can be
              limited or inconvenient. It&apos;s set up to handle everything from
              a single driveway to a full-property commercial route in one
              trip.
            </p>
            <p className="mt-4 text-ink/70">
              That self-contained setup is also what makes the NC/VA travel
              radius realistic - the rig rolls out already stocked and ready,
              so a job in Zebulon and a job in South Hill, VA can both happen
              in the same week without missing a beat.
            </p>
          </div>
        </Container>
      </section>

      <section className="grain bg-orange py-14 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-display max-w-xl text-2xl sm:text-3xl">
            Have a question before you book?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary" className="!bg-ink hover:!bg-ink-soft">
              Contact Us
            </Button>
            <Button href={business.phoneHref} variant="ghost" className="border-white/40 text-white hover:border-white">
              Call {business.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
