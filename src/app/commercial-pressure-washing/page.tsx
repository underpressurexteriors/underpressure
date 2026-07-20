import type { Metadata } from "next";
import Image from "next/image";
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
};

const clientTypes = [
  { title: "Retail & Storefronts", detail: "Sidewalks, entryways, and storefront glass that stay presentable for foot traffic." },
  { title: "HOAs & Communities", detail: "Recurring maintenance for shared amenities, entrance signage, sidewalks, and common-area buildings." },
  { title: "Property Managers", detail: "Standing service across a portfolio of properties, billed and scheduled on your terms." },
  { title: "Industrial & Warehouse", detail: "Loading docks, warehouse aprons, and equipment pads that need routine degreasing and cleaning." },
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
              {clientTypes.map((c) => (
                <div key={c.title} className="border-l-2 border-orange pl-4">
                  <h3 className="text-display text-base text-navy">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{c.detail}</p>
                </div>
              ))}
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
