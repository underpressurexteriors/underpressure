import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about pressure washing, soft washing, pricing, scheduling, and service areas with Under Pressure Xteriors.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Under Pressure Xteriors is fully licensed and insured for both residential and commercial pressure washing work.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Zebulon, NC and serve communities across North Carolina and Virginia, including the Triangle area, eastern NC, and Southside Virginia along the US-58 and I-95 corridors. See our full service areas page for specifics.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out the form on our Contact page, call us, or email us directly. Most quotes can be handled with a description and photos of the area that needs cleaning, though some jobs may need an on-site look.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses higher water pressure and is best suited for hard, durable surfaces like concrete. Soft washing uses lower pressure combined with a cleaning solution, and is the correct method for siding, roofs, and other surfaces that could be damaged by high pressure.",
  },
  {
    q: "Do you offer recurring service?",
    a: "Yes - recurring service is available for both residential customers (such as bin cleaning or seasonal maintenance) and commercial accounts that need ongoing property upkeep.",
  },
  {
    q: "How far in advance should I book?",
    a: "It depends on the season - spring and early summer tend to be busiest. Reach out as soon as you know you need service and we'll work to find a time that fits.",
  },
  {
    q: "What if it rains on my scheduled day?",
    a: "We monitor the weather and will reach out to reschedule if conditions won't allow for a proper job, rather than rushing through a service that won't hold up.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        description="Don't see your question here? Reach out directly and we'll get you a straight answer."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-ink">
                  <span className="text-display text-lg">{f.q}</span>
                  <span className="text-orange-dark text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="reveal mt-14 text-center">
            <h2 className="text-display text-2xl text-ink">Still have questions?</h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Contact Us</Button>
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
