import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services } from "@/lib/services";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pressure Washing Services",
  description:
    "Full list of pressure washing and exterior cleaning services from Under Pressure Xteriors: surface cleaning, soft washing, roof washing, gutter cleaning, window cleaning, and more.",
  alternates: { canonical: "/services" },
};

const methods = [
  {
    name: "Pressure Washing",
    for: "Concrete, pavers, brick, and other hard, durable surfaces",
    detail: "High water pressure - often through a rotary surface cleaner for flat areas - physically strips dirt, algae, and grime off surfaces built to take direct force.",
    services: ["Surface Cleaning", "Patio Cleaning", "Paver & Pool Deck"],
  },
  {
    name: "Soft Washing",
    for: "Siding, roofing, and anything that could be damaged by force",
    detail: "Low pressure combined with a cleaning solution does the actual work - the chemistry breaks down algae and mildew at the root, and a gentle rinse clears it away.",
    services: ["Soft Wash / House Wash", "Roof Washing"],
  },
];

const chooseFaqs = [
  {
    q: "How do I know which method my property needs?",
    a: "As a rule: hard, non-porous surfaces like concrete and pavers can take pressure washing. Anything with a coating, texture, or that could trap water - siding, roofing, painted wood - needs soft washing instead. Most full-property jobs use both.",
  },
  {
    q: "Can I just get everything soft washed to be safe?",
    a: "Soft washing works well on siding and roofing, but it's not efficient for open concrete - a surface cleaner does that job faster and more thoroughly. We match the method to the surface, not the other way around.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Full Service List"
        title="Every exterior surface, one call away."
        description="Nine specialty services covering the full outside of your home or business, each performed with equipment and technique matched to the material."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Two Methods, Matched to the Surface</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Not every surface gets the same treatment
            </h2>
            <p className="mt-4 text-ink/70">
              &quot;Pressure washing&quot; gets used as a catch-all term, but a proper
              exterior cleaning job is really two different methods, used on
              different surfaces.{" "}
              <Link href="/resources/soft-wash-vs-pressure-washer-for-your-house" className="text-orange-dark underline">
                Read the full breakdown
              </Link>{" "}
              if you want the details.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {methods.map((m) => (
              <div key={m.name} className="reveal border border-ink/10 bg-white p-7">
                <h3 className="text-display text-xl text-navy">{m.name}</h3>
                <p className="text-data mt-1 text-xs uppercase tracking-wide text-orange-dark">
                  {m.for}
                </p>
                <p className="mt-4 text-sm text-ink/70">{m.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.services.map((s) => (
                    <span key={s} className="text-data rounded-sm bg-concrete px-2.5 py-1 text-xs text-ink/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
            {chooseFaqs.map((f) => (
              <div key={f.q} className="border-l-2 border-orange pl-4">
                <h4 className="text-display text-sm text-ink">{f.q}</h4>
                <p className="mt-1 text-sm text-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>The Full List</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              All nine specialties
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="grain bg-orange py-14 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Eyebrow dark>
            <span className="text-white/80">Not sure what you need?</span>
          </Eyebrow>
          <h2 className="text-display max-w-xl text-2xl sm:text-3xl">
            Tell us what it looks like - we&apos;ll tell you what it needs.
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
