import type { Metadata } from "next";
import { business } from "@/lib/business";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources | Exterior Cleaning Guides",
  description:
    "In-depth guides on exterior cleaning best practices - why not to use bleach on wood, soft washing vs pressure washing, roof care, and more.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | Exterior Cleaning Guides",
    description: "In-depth guides on exterior cleaning best practices - why not to use bleach on wood, soft washing vs pressure washing, roof care, and more.",
    url: `${business.url}/resources`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Exterior Cleaning Guides",
    description: "In-depth guides on exterior cleaning best practices - why not to use bleach on wood, soft washing vs pressure washing, roof care, and more.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The full explanation, not just the quick answer."
        description="Longer guides on the methods, materials, and decisions behind good exterior cleaning - so you know not just what we do, but why."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {resources.map((r, i) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="reveal group flex flex-col border border-ink/10 bg-white p-7 transition-colors hover:border-orange"
                data-reveal-delay={(i % 4) * 70}
              >
                <span className="text-data text-xs uppercase tracking-wide text-orange-dark">
                  {r.topic}
                </span>
                <h2 className="text-display mt-3 text-2xl leading-tight text-navy group-hover:text-orange-dark">
                  {r.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-ink/70">{r.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-data text-xs text-steel">{r.readTime}</span>
                  <span className="text-sm font-semibold text-orange-dark">Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
