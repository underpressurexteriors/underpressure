import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ArticleSections from "@/components/ArticleSections";
import JsonLd from "@/components/JsonLd";
import { resources, getResource } from "@/lib/resources";
import { getService } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${business.url}/resources/${resource.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.description,
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const relatedServices = resource.relatedServiceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const otherResources = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.description,
          author: { "@type": "Organization", name: business.name },
          publisher: { "@id": `${business.url}/#organization` },
          mainEntityOfPage: `${business.url}/resources/${resource.slug}`,
        }}
      />
      <section className="grain bg-ink-soft py-16 text-white sm:py-20">
        <Container className="max-w-3xl">
          <nav className="text-data text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/resources" className="hover:text-white">Resources</Link>
          </nav>
          <p className="text-data mt-6 text-xs uppercase tracking-[0.25em] text-orange">
            {resource.topic}
          </p>
          <h1 className="text-display mt-3 text-3xl leading-[1.05] sm:text-5xl">
            {resource.title}
          </h1>
          <p className="text-data mt-5 text-sm text-white/60">{resource.readTime}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal">
            <ArticleSections sections={resource.sections} />
          </div>

          {relatedServices.length > 0 && (
            <div className="reveal mt-14 border border-ink/10 bg-white p-6">
              <h3 className="text-display text-lg text-navy">Related services</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-block border border-orange/40 px-4 py-2 text-sm text-orange-dark hover:bg-orange hover:text-white"
                    >
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="reveal mt-14 border-t border-ink/10 pt-10 text-center">
            <h3 className="text-display text-2xl text-ink">
              Have a property that needs this done right?
            </h3>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Get a Free Quote</Button>
              <Button href={business.phoneHref} variant="ghost">
                Call {business.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-concrete-dark/60 py-16 sm:py-20">
        <Container>
          <h3 className="text-display text-xl text-ink">More guides</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherResources.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="border border-ink/10 bg-white p-5 hover:border-orange"
              >
                <span className="text-data text-xs uppercase text-orange-dark">{r.topic}</span>
                <h4 className="text-display mt-2 text-base text-navy">{r.title}</h4>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
