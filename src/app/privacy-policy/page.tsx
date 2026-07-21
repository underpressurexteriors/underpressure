import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description: `Privacy policy for ${business.name}.`,
    url: `${business.url}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: `Privacy policy for ${business.name}.`,
  },
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
            This policy explains what information this website, {business.url},
            collects and how it&apos;s used.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">The Short Version</h2>
          <p>
            This site doesn&apos;t have a contact form. Every &quot;Call,&quot; &quot;Text,&quot;
            and &quot;Email&quot; link on it opens your own phone or email app with
            our number or address pre-filled - whatever you send goes
            directly from your device to ours, the same as if you&apos;d looked
            up our number and reached out yourself. This website itself does
            not collect, store, or transmit the personal information you
            share with us that way.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">Information We Collect Directly</h2>
          <p>
            When you call, text, or email us using the links on this site,
            or reach out by any other means, we receive whatever information
            you choose to share - typically your name, phone number, email
            address, property address, and details about the service you&apos;re
            asking about. We use that information solely to respond to your
            inquiry, schedule and perform requested services, and communicate
            with you about your service. We do not sell or rent this
            information to third parties.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">Analytics &amp; Cookies</h2>
          <p>
            As of this policy&apos;s last update, this site does not run
            third-party analytics or advertising trackers, and does not use
            cookies beyond what your browser sets by default to load the
            page. If that changes - for example, if we add basic,
            privacy-respecting traffic analytics - we&apos;ll update this policy
            to reflect it.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">Hosting &amp; Security</h2>
          <p>
            This site is hosted on infrastructure that serves all pages over
            HTTPS. We take reasonable steps to keep any information shared
            with us secure, but no method of electronic communication is
            ever 100% guaranteed - please avoid sending sensitive financial
            or payment information by text or email.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">Children&apos;s Privacy</h2>
          <p>
            This site and our services are directed at adults seeking
            pressure washing and exterior cleaning services, not children.
            We do not knowingly collect information from anyone under 13.
          </p>

          <h2 className="text-display mt-8 text-xl text-ink">Changes to This Policy</h2>
          <p>
            If this policy changes in a meaningful way, we&apos;ll update the
            date at the top of this page.
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
