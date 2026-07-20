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

            <Button href="/contact" className="mt-10">Get a Free Quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
