import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us | Free Quote",
  description:
    "Request a free pressure washing quote from Under Pressure Xteriors. Call, email, or send us your job details and we'll get back to you promptly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Get a free, no-pressure quote."
        description="Tell us about the job and where it's located - we'll follow up with straightforward pricing, no obligation."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal">
            <Eyebrow>Contact Details</Eyebrow>
            <h2 className="text-display mt-3 text-2xl text-ink">
              Reach us directly
            </h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-data text-xs uppercase tracking-wide text-steel">Phone</p>
                <a href={business.phoneHref} className="text-display text-xl text-navy hover:text-orange-dark">
                  {business.phone}
                </a>
              </div>
              <div>
                <p className="text-data text-xs uppercase tracking-wide text-steel">Email</p>
                <a href={`mailto:${business.email}`} className="text-display text-xl text-navy hover:text-orange-dark">
                  {business.email}
                </a>
              </div>
              <div>
                <p className="text-data text-xs uppercase tracking-wide text-steel">Based In</p>
                <p className="text-display text-xl text-navy">{business.city}, {business.state}</p>
              </div>
              <div>
                <p className="text-data text-xs uppercase tracking-wide text-steel">Service Area</p>
                <p className="text-ink/70">
                  North Carolina &amp; Virginia — see our{" "}
                  <Link href="/service-areas" className="text-orange-dark underline">
                    full list of service areas
                  </Link>
                  .
                </p>
              </div>
              <div>
                <p className="text-data text-xs uppercase tracking-wide text-steel">Hours</p>
                <ul className="mt-1 space-y-1 text-sm text-ink/70">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-data">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="reveal border border-ink/10 bg-white p-6 sm:p-8">
            <h2 className="text-display text-2xl text-ink">Request a quote</h2>
            <p className="mt-2 text-sm text-ink/60">
              Fill this out and it&apos;ll open a pre-filled email to send us -
              takes about a minute.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
