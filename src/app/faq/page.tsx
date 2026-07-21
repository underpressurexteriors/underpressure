import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about pressure washing, soft washing, pricing, scheduling, safety, and service areas with Under Pressure Xteriors.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about pressure washing, soft washing, pricing, scheduling, safety, and service areas with Under Pressure Xteriors.",
    url: `${business.url}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions",
    description: "Answers to common questions about pressure washing, soft washing, pricing, scheduling, safety, and service areas with Under Pressure Xteriors.",
  },
};

const faqGroups = [
  {
    category: "General",
    items: [
      {
        q: "Are you licensed and insured?",
        a: "Yes. Under Pressure Xteriors is fully licensed and insured for both residential and commercial pressure washing work.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Zebulon, NC and serve communities across North Carolina and Virginia, including the Triangle area, eastern NC, and Southside Virginia along the US-58 and I-95 corridors. See our full service areas page for specifics.",
      },
      {
        q: "What's the difference between pressure washing and soft washing?",
        a: "Pressure washing uses higher water pressure and is best suited for hard, durable surfaces like concrete. Soft washing uses lower pressure combined with a cleaning solution, and is the correct method for siding, roofs, and other surfaces that could be damaged by high pressure. Most full-property jobs use both.",
      },
      {
        q: "Do you bring your own water?",
        a: "Yes - our trailer carries its own water supply, so we're not dependent on your outdoor spigot or water pressure.",
      },
    ],
  },
  {
    category: "Booking & Pricing",
    items: [
      {
        q: "How do I get a quote?",
        a: "Call, text, or email us with a description (and photos if you have them) of what needs cleaning. Most jobs can be quoted this way; larger or more complex properties may need a quick on-site look first.",
      },
      {
        q: "How far in advance should I book?",
        a: "It depends on the season - spring and early summer tend to be busiest as pollen and algae season ramps up. Reach out as soon as you know you need service and we'll work to find a time that fits.",
      },
      {
        q: "Do you offer recurring service?",
        a: "Yes - recurring service is available for both residential customers (such as bin cleaning or seasonal maintenance) and commercial accounts that need ongoing property upkeep.",
      },
      {
        q: "Is the quote the final price?",
        a: "Quotes are based on the information and photos provided. If conditions on-site differ meaningfully from what was described - more surface area, heavier buildup than expected - we'll walk you through any adjustment before starting work, not after.",
      },
    ],
  },
  {
    category: "Scheduling & Weather",
    items: [
      {
        q: "What if it rains on my scheduled day?",
        a: "We monitor the weather and will reach out to reschedule if conditions won't allow for a proper job, rather than rushing through a service that won't hold up.",
      },
      {
        q: "Do you work year-round?",
        a: "Yes, though scheduling can be tighter in peak spring and summer months. Winter is often a good time to book since demand is lower and it puts your property ahead of pollen season.",
      },
      {
        q: "How long does a typical job take?",
        a: "It depends entirely on the scope - a single driveway might take under an hour, while a full-property residential job (house wash, driveway, walkways, gutters) or a larger commercial property can take most of a day.",
      },
    ],
  },
  {
    category: "Safety & Preparation",
    items: [
      {
        q: "Do I need to be home during service?",
        a: "Not necessarily, as long as we have access to the areas being cleaned. Many customers aren't home during exterior-only jobs like driveway or roof cleaning.",
      },
      {
        q: "Is soft washing safe for pets and landscaping?",
        a: "Our soft-wash solutions are applied and rinsed with plant and pet safety in mind, and we pre-wet and rinse landscaping near the work area. Even so, it's good practice to keep pets indoors while work is underway and for a short time after.",
      },
      {
        q: "What should I do to prepare for my appointment?",
        a: "Move vehicles and outdoor furniture off surfaces being cleaned, close windows near the work area, and bring pets inside. See our full prep checklist on the blog for the complete rundown.",
      },
      {
        q: "Will pressure washing damage my property?",
        a: "Used correctly - the right pressure and method matched to each surface - no. That matching is the whole job: pressure washing for concrete and pavers, soft washing for siding and roofing. This is exactly why DIY pressure washing causes so much accidental damage; equipment misapplied to the wrong surface is the most common cause.",
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqs = faqGroups.flatMap((g) => g.items);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
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
          {faqGroups.map((group) => (
            <div key={group.category} className="reveal mb-14 last:mb-0">
              <h2 className="text-display mb-4 text-xl text-navy">{group.category}</h2>
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {group.items.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink">
                      <span className="text-display text-base sm:text-lg">{f.q}</span>
                      <span className="text-orange-dark shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-ink/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="reveal mt-4 border border-ink/10 bg-white p-6 text-center">
            <p className="text-sm text-ink/70">
              Want more detail on soft washing, DIY risks, or specific
              services? Check the{" "}
              <Link href="/resources" className="font-semibold text-orange-dark underline">
                Resources
              </Link>{" "}
              section for in-depth guides.
            </p>
          </div>

          <div className="reveal mt-14 text-center">
            <h2 className="text-display text-2xl text-ink">Still have questions?</h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Contact Us</Button>
              <Button href={business.phoneHref} variant="ghost">
                Call {business.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
