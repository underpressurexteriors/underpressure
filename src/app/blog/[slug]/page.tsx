import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ArticleSections from "@/components/ArticleSections";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getService } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${business.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedServices = post.relatedServiceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: business.name },
          publisher: { "@id": `${business.url}/#organization` },
          mainEntityOfPage: `${business.url}/blog/${post.slug}`,
        }}
      />
      <section className="grain bg-ink-soft py-16 text-white sm:py-20">
        <Container className="max-w-3xl">
          <nav className="text-data text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <p className="text-data mt-6 text-xs uppercase tracking-[0.25em] text-orange">
            {post.category}
          </p>
          <h1 className="text-display mt-3 text-3xl leading-[1.05] sm:text-5xl">
            {post.title}
          </h1>
          <div className="text-data mt-5 flex gap-4 text-sm text-white/60">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal">
            <ArticleSections sections={post.sections} />
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
              Ready to get it done?
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
          <h3 className="text-display text-xl text-ink">More from the blog</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="border border-ink/10 bg-white p-5 hover:border-orange"
              >
                <span className="text-data text-xs uppercase text-orange-dark">{p.category}</span>
                <h4 className="text-display mt-2 text-base text-navy">{p.title}</h4>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
