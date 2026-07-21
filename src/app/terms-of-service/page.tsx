import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${business.name}.`,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service",
    description: `Terms of service for ${business.name}.`,
    url: `${business.url}/terms-of-service`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service",
    description: `Terms of service for ${business.name}.`,
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 sm:py-24">
        <Container className="prose prose-neutral max-w-3xl">
          <p className="text-sm text-steel">Last updated: {new Date().getFullYear()}</p>
          <p>
            These terms govern your use of {business.url} and any services
            booked through {business.name}. By using this site or booking a
            service, you agree to these terms.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Quotes &amp; Pricing</h2>
          <p>
            Quotes provided online, by phone, or by email are estimates
            based on the information provided and may be adjusted after an
            on-site assessment if actual conditions differ materially from
            what was described.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Scheduling &amp; Weather</h2>
          <p>
            Service dates may be rescheduled due to weather or conditions
            that would prevent a proper and safe cleaning. We&apos;ll communicate
            any changes as early as possible.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Property Access</h2>
          <p>
            Customers are responsible for providing reasonable access to the
            areas being cleaned and for disclosing any known damage,
            fragile surfaces, or conditions that may affect the work.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Liability</h2>
          <p>
            {business.name} is licensed and insured. Any concerns about
            completed work should be reported promptly so we can address
            them.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a> or{" "}
            {business.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
