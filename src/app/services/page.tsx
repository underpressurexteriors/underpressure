import type { Metadata } from "next";
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </Container>
      </section>
    </>
  );
}
