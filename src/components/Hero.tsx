import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-soft">
      <div className="absolute inset-0">
        <Image
          src="/images/working.jpg"
          alt="Under Pressure Xteriors technician pressure washing a concrete driveway, dirt line clearly visible against the freshly cleaned surface"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_30%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-soft/80 via-transparent to-transparent" />
      </div>

      <Container className="relative flex min-h-[86vh] flex-col justify-end py-16 sm:min-h-[80vh]">
        <p
          className="reveal text-data text-xs uppercase tracking-[0.3em] text-orange"
        >
          Licensed &amp; Insured · Zebulon, NC · Serving NC &amp; VA
        </p>
        <h1
          className="reveal text-display mt-4 max-w-3xl text-5xl leading-[0.98] text-white sm:text-7xl"
          data-reveal-delay="80"
        >
          Pressure on.
          <br />
          <span className="text-orange">Grime gone.</span>
        </h1>
        <p
          className="reveal mt-6 max-w-xl text-base text-white/75 sm:text-lg"
          data-reveal-delay="160"
        >
          Under Pressure Xteriors delivers professional surface cleaning, soft
          washing, and full exterior detailing for homes and businesses
          across North Carolina and Virginia — done right the first time.
        </p>

        <div
          className="reveal mt-9 flex flex-col gap-4 sm:flex-row"
          data-reveal-delay="240"
        >
          <Button href="/contact">Get a Free Quote</Button>
          <Button href={business.phoneHref} variant="ghost" className="border-white/30 text-white hover:border-orange">
            Call {business.phone}
          </Button>
        </div>

        <dl
          className="reveal mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6"
          data-reveal-delay="320"
        >
          <div>
            <dt className="text-data text-xs uppercase tracking-wide text-white/50">Coverage</dt>
            <dd className="text-display mt-1 text-lg text-white">NC &amp; VA</dd>
          </div>
          <div>
            <dt className="text-data text-xs uppercase tracking-wide text-white/50">Service</dt>
            <dd className="text-display mt-1 text-lg text-white">9 Specialties</dd>
          </div>
          <div>
            <dt className="text-data text-xs uppercase tracking-wide text-white/50">Clients</dt>
            <dd className="text-display mt-1 text-lg text-white">Home &amp; Biz</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
