import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { PhoneIcon, TextIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us | Call, Text, or Email",
  description:
    "Reach Under Pressure Xteriors instantly - call, text, or email for a free pressure washing quote. Serving North Carolina and Virginia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Call, Text, or Email",
    description: "Reach Under Pressure Xteriors instantly - call, text, or email for a free pressure washing quote. Serving North Carolina and Virginia.",
    url: `${business.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Call, Text, or Email",
    description: "Reach Under Pressure Xteriors instantly - call, text, or email for a free pressure washing quote. Serving North Carolina and Virginia.",
  },
};

const actions = [
  {
    href: business.phoneHref,
    icon: PhoneIcon,
    label: "Call",
    value: business.phone,
    detail: "Fastest way to reach us during business hours.",
  },
  {
    href: business.smsHref,
    icon: TextIcon,
    label: "Text",
    value: business.phone,
    detail: "Send job details and a photo - we'll text you right back.",
  },
  {
    href: `mailto:${business.email}`,
    icon: MailIcon,
    label: "Email",
    value: business.email,
    detail: "Best for detailed requests or commercial inquiries.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/rig.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        </div>

        <Container className="relative py-20 sm:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-data text-xs uppercase tracking-[0.3em] text-orange">
              Zero-Friction Contact
            </p>
            <h1 className="text-display mt-4 text-4xl leading-[1.02] text-white sm:text-6xl">
              One tap. That&apos;s it.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              No forms, no waiting on a callback queue. Call, text, or email
              us directly and we&apos;ll get back to you fast with a
              straightforward quote.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {actions.map((action, i) => (
              <a
                key={action.label}
                href={action.href}
                className="reveal group relative flex flex-col justify-between overflow-hidden border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange hover:bg-white/[0.08]"
                data-reveal-delay={i * 100}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange/0 transition-all duration-500 group-hover:bg-orange/20" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white transition-transform duration-300 group-hover:scale-110">
                    <action.icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-display mt-6 text-2xl text-white">
                    {action.label}
                  </h2>
                  <p className="text-data mt-2 text-base text-orange">
                    {action.value}
                  </p>
                  <p className="mt-3 text-sm text-white/60">{action.detail}</p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white">
                  {action.label} now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="reveal border border-ink/10 bg-white p-7">
              <PinIcon className="h-7 w-7 text-orange" />
              <h3 className="text-display mt-4 text-lg text-navy">Based In</h3>
              <p className="mt-1 text-ink/70">{business.city}, {business.state}</p>
              <p className="mt-1 text-sm text-ink/50">
                Serving North Carolina &amp; Virginia —{" "}
                <Link href="/service-areas" className="text-orange-dark underline">
                  see all areas
                </Link>
              </p>
            </div>

            <div className="reveal border border-ink/10 bg-white p-7" data-reveal-delay="80">
              <ClockIcon className="h-7 w-7 text-orange" />
              <h3 className="text-display mt-4 text-lg text-navy">Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/70">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-data text-right">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal border border-ink/10 bg-white p-7" data-reveal-delay="160">
              <PhoneIcon className="h-7 w-7 text-orange" />
              <h3 className="text-display mt-4 text-lg text-navy">Licensed &amp; Insured</h3>
              <p className="mt-1 text-sm text-ink/70">
                Every job, residential or commercial, covered from start to
                finish.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
