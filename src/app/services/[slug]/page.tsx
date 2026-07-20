import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${business.city}, NC & VA`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          name: `${service.name} | ${business.name}`,
          description: service.metaDescription,
          provider: { "@id": `${business.url}/#organization` },
          areaServed: [
            { "@type": "State", name: "North Carolina" },
            { "@type": "State", name: "Virginia" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="grain bg-ink-soft py-16 text-white sm:py-20">
        <Container>
          <nav className="text-data text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> /{" "}
            <span className="text-white/80">{service.name}</span>
          </nav>
          <p className="text-data mt-6 text-xs uppercase tracking-[0.25em] text-orange">
            {service.category.join(" + ")} service
          </p>
          <h1 className="text-display mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{service.tagline}</p>
          <p className="mt-4 max-w-2xl text-white/60">{service.heroSummary}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href={business.phoneHref} variant="ghost" className="border-white/30 text-white hover:border-orange">
              Call {business.phone}
            </Button>
            <a href={business.smsHref} className="text-display self-center text-sm text-inherit underline underline-offset-4 opacity-80 hover:opacity-100">
              or text us
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="reveal space-y-5 text-ink/80">
              {service.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="reveal mt-12">
              <h2 className="text-display text-2xl text-navy">How it works</h2>
              <ol className="mt-6 space-y-6">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="text-data flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-display text-base text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm text-ink/70">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="reveal mt-12">
              <h2 className="text-display text-2xl text-navy">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {service.faqs.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-ink">
                      <span className="text-display text-base">{f.q}</span>
                      <span className="text-orange-dark transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-ink/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="reveal border border-ink/10 bg-white p-6">
              <h3 className="text-display text-lg text-navy">Good for</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {service.goodFor.map((g) => (
                  <li key={g} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal border border-ink/10 bg-navy p-6 text-white">
              <h3 className="text-display text-lg">Serving NC &amp; VA</h3>
              <p className="mt-2 text-sm text-white/70">
                Based in Zebulon, NC and available across the Triangle,
                eastern NC, and Southside Virginia.
              </p>
              <Link href="/service-areas" className="mt-4 inline-block text-sm font-semibold text-orange hover:text-orange-dark">
                View service areas →
              </Link>
            </div>

            <div className="reveal border border-ink/10 bg-white p-6">
              <h3 className="text-display text-lg text-navy">Other services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-ink/70 hover:text-orange-dark">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="grain bg-orange py-14 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-display max-w-xl text-2xl sm:text-3xl">
            Ready to book {service.name.toLowerCase()}?
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
