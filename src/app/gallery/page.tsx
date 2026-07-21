import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Gallery | Our Work",
  description:
    "See recent pressure washing and exterior cleaning work from Under Pressure Xteriors in and around Zebulon, NC.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Our Work",
    description: "See recent pressure washing and exterior cleaning work from Under Pressure Xteriors in and around Zebulon, NC.",
    url: `${business.url}/gallery`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Our Work",
    description: "See recent pressure washing and exterior cleaning work from Under Pressure Xteriors in and around Zebulon, NC.",
  },
};

const photos = [
  {
    src: "/images/working.jpg",
    alt: "Technician surface cleaning a residential driveway, dirt line visible between the cleaned and uncleaned concrete",
    caption: "Driveway surface cleaning - the clean line tells the story",
  },
  {
    src: "/images/rig.jpg",
    alt: "Under Pressure Xteriors rig - tandem-axle trailer with water tank system towed by a white pickup truck",
    caption: "Our rig, set up and ready for the next job",
  },
];

const equipment = [
  { title: "Self-contained water supply", detail: "The trailer carries its own tank, so jobs aren't dependent on a customer's outdoor spigot or water pressure." },
  { title: "Rotary surface cleaner", detail: "Cleans flat concrete in even, overlapping passes - no streaking or \"zebra\" pattern from wand work." },
  { title: "Soft-wash injection system", detail: "Applies the correct cleaning solution at low pressure for siding, roofing, and anything that can't take direct force." },
  { title: "Extension wands & ladders", detail: "Reach two-story siding, gutters, and rooflines without cutting corners on access." },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="See it for yourself."
        description="A growing collection of before, during, and after shots from jobs around North Carolina and Virginia. More photos are added regularly."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {photos.map((p) => (
              <figure key={p.src} className="reveal border border-ink/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-ink/70">{p.caption}</figcaption>
              </figure>
            ))}
            <div className="reveal flex aspect-[4/3] flex-col items-center justify-center border border-dashed border-ink/20 bg-concrete-dark/30 p-6 text-center">
              <p className="text-display text-lg text-navy">More photos coming soon</p>
              <p className="mt-2 max-w-xs text-sm text-ink/60">
                We&apos;re adding fresh before-and-after shots from recent jobs
                regularly - check back soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Behind the Photos</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              What a job day actually looks like
            </h2>
            <p className="mt-4 text-ink/70">
              A finished photo doesn&apos;t show the setup, the assessment, or
              the cleanup - here&apos;s the full sequence, start to finish.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="reveal" data-reveal-delay="0">
              <span className="text-data text-sm text-orange-dark">01</span>
              <h3 className="text-display mt-3 text-lg text-ink">Arrive &amp; assess</h3>
              <p className="mt-2 text-sm text-ink/70">
                Walk the property, confirm what&apos;s being cleaned, and check
                for anything - loose gutters, cracked pavers, sensitive
                landscaping - worth working around deliberately.
              </p>
            </div>
            <div className="reveal" data-reveal-delay="80">
              <span className="text-data text-sm text-orange-dark">02</span>
              <h3 className="text-display mt-3 text-lg text-ink">Set up the rig</h3>
              <p className="mt-2 text-sm text-ink/70">
                Trailer positioned, hoses run, and the right attachment -
                surface cleaner, soft-wash injector, or extension wand -
                staged for the surface at hand.
              </p>
            </div>
            <div className="reveal" data-reveal-delay="160">
              <span className="text-data text-sm text-orange-dark">03</span>
              <h3 className="text-display mt-3 text-lg text-ink">Clean, section by section</h3>
              <p className="mt-2 text-sm text-ink/70">
                Systematic passes rather than random spot-cleaning, so
                nothing gets missed and nothing gets double-billed for
                rework later.
              </p>
            </div>
            <div className="reveal" data-reveal-delay="240">
              <span className="text-data text-sm text-orange-dark">04</span>
              <h3 className="text-display mt-3 text-lg text-ink">Final walkthrough</h3>
              <p className="mt-2 text-sm text-ink/70">
                Before we call it done, we walk the result with you - this
                is when the &quot;before and after&quot; actually gets seen in
                person, not just in a photo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow dark>What Shows Up On Site</Eyebrow>
            <h2 className="text-display mt-3 text-3xl sm:text-4xl">
              The equipment behind the photos
            </h2>
            <p className="mt-4 text-white/70">
              A clean result depends on the setup as much as the technique.
              Here&apos;s what&apos;s actually on the trailer when we pull up.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {equipment.map((e, i) => (
              <div key={e.title} className="reveal border-l-2 border-orange pl-5" data-reveal-delay={i * 70}>
                <h3 className="text-display text-lg">{e.title}</h3>
                <p className="mt-2 text-sm text-white/60">{e.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Want the Full Story on a Job?</Eyebrow>
            <h2 className="text-display mt-3 text-3xl text-ink sm:text-4xl">
              Read how the work actually gets done
            </h2>
            <p className="mt-4 text-ink/70">
              Photos show the result - these go into the method behind it.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/blog/pressure-washing-vs-soft-washing-whats-the-difference" className="border border-ink/10 bg-white px-5 py-3 text-sm text-ink/80 hover:border-orange hover:text-orange-dark">
              Pressure Washing vs. Soft Washing →
            </Link>
            <Link href="/resources/benefits-of-roof-soft-washing" className="border border-ink/10 bg-white px-5 py-3 text-sm text-ink/80 hover:border-orange hover:text-orange-dark">
              Benefits of Roof Soft Washing →
            </Link>
          </div>
        </Container>
      </section>

      <section className="grain bg-concrete-dark/60 py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-display text-2xl text-ink">
            Want your property to be next?
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href={business.phoneHref} variant="ghost">
              Call {business.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
