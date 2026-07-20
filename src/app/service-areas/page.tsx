import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import LocationCard from "@/components/LocationCard";
import Button from "@/components/Button";
import { ncLocations, vaLocations } from "@/lib/locations";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Service Areas | North Carolina & Virginia",
  description:
    "Under Pressure Xteriors provides pressure washing across North Carolina and Virginia, based in Zebulon, NC. See the full list of towns and cities we serve.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="North Carolina & Virginia, covered."
        description="Based in Zebulon, NC, with a regular route through the Triangle, eastern North Carolina, and Southside Virginia along the US-58 and I-95 corridors."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal">
            <Eyebrow>North Carolina — {ncLocations.length} Areas</Eyebrow>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ncLocations.map((loc, i) => (
              <LocationCard key={loc.slug} location={loc} index={i} />
            ))}
          </div>

          <div className="reveal mt-16">
            <Eyebrow>Virginia — {vaLocations.length} Areas</Eyebrow>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vaLocations.map((loc, i) => (
              <LocationCard key={loc.slug} location={loc} index={i} />
            ))}
          </div>

          <div className="reveal mt-16 border border-ink/10 bg-white p-8">
            <h2 className="text-display text-xl text-navy">Why NC and VA together?</h2>
            <p className="mt-3 max-w-2xl text-ink/70">
              Zebulon sits close enough to the Virginia border that a
              self-contained rig - carrying its own water and equipment -
              makes both states realistic to cover in the same week without
              adding travel that customers end up paying for. Most of our
              North Carolina work stays within the Triangle and points east;
              Virginia work runs along the US-58 and I-95 corridors in the
              southern part of the state.
            </p>
          </div>

          <div className="reveal mt-14 border border-ink/10 bg-white p-8 text-center">
            <h2 className="text-display text-2xl text-navy">
              Don&apos;t see your town listed?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/70">
              This isn&apos;t a complete list of everywhere we go - if you&apos;re
              in North Carolina or Virginia and reasonably close to our
              route, reach out and we&apos;ll let you know if we can get to you.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Ask About Your Area</Button>
              <Button href={business.phoneHref} variant="ghost">
                Call {business.phone}
              </Button>
            <a href={business.smsHref} className="text-display self-center text-sm text-inherit underline underline-offset-4 opacity-80 hover:opacity-100">
              or text us
            </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
