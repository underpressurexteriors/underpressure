import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-24">
        <Container className="prose prose-neutral max-w-3xl">
          <p className="text-sm text-steel">Last updated: {new Date().getFullYear()}</p>
          <p>
            {business.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
            This policy explains what information we collect through{" "}
            {business.url} and how we use it.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Information We Collect</h2>
          <p>
            When you submit a quote request or contact form, we collect the
            information you provide, such as your name, phone number, email
            address, property address, and details about the service you&apos;re
            requesting. We do not sell or rent this information to third
            parties.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">How We Use It</h2>
          <p>
            We use the information you provide solely to respond to your
            inquiry, schedule and perform requested services, and communicate
            with you about your service. We may also use aggregated,
            non-identifying analytics data to understand how visitors use
            our site.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Cookies</h2>
          <p>
            Our site may use basic analytics cookies to understand site
            traffic. You can disable cookies through your browser settings
            at any time.
          </p>
          <h2 className="text-display mt-8 text-xl text-ink">Contact Us</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a> or{" "}
            {business.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
