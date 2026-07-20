import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Gallery | Our Work",
  description:
    "See recent pressure washing and exterior cleaning work from Under Pressure Xteriors in and around Zebulon, NC.",
  alternates: { canonical: "/gallery" },
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

          <div className="reveal mt-14 text-center">
            <h2 className="text-display text-2xl text-ink">
              Want your property to be next?
            </h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Get a Free Quote</Button>
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
