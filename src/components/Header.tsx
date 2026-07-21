"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { PhoneIcon, TextIcon, MailIcon } from "@/components/Icons";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-concrete/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={`${business.name} logo`}
            width={657}
            height={160}
            sizes="160px"
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-display text-sm text-ink hover:text-orange-dark">
              Services
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-sm border border-ink/10 bg-white p-4 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-sm px-3 py-2 text-sm text-ink/80 hover:bg-concrete hover:text-orange-dark"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="col-span-2 mt-1 border-t border-ink/10 px-3 pt-2 text-sm font-semibold text-navy"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/residential-pressure-washing" className="text-display text-sm text-ink hover:text-orange-dark">
            Residential
          </Link>
          <Link href="/commercial-pressure-washing" className="text-display text-sm text-ink hover:text-orange-dark">
            Commercial
          </Link>
          <Link href="/real-estate-pressure-washing" className="text-display text-sm text-ink hover:text-orange-dark">
            Realtors
          </Link>

          <div
            className="group relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className="text-display text-sm text-ink hover:text-orange-dark">
              Service Areas
            </button>
            {areasOpen && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                <div className="grid max-h-96 grid-cols-2 gap-1 overflow-y-auto rounded-sm border border-ink/10 bg-white p-4 shadow-xl">
                  {locations.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/service-areas/${l.slug}`}
                      className="rounded-sm px-3 py-2 text-sm text-ink/80 hover:bg-concrete hover:text-orange-dark"
                    >
                      {l.city}, {l.state}
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    className="col-span-2 mt-1 border-t border-ink/10 px-3 pt-2 text-sm font-semibold text-navy"
                  >
                    View all service areas →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-display text-sm text-ink hover:text-orange-dark">
            About
          </Link>
          <Link href="/blog" className="text-display text-sm text-ink hover:text-orange-dark">
            Blog
          </Link>
          <Link href="/resources" className="text-display text-sm text-ink hover:text-orange-dark">
            Resources
          </Link>
          <Link href="/gallery" className="text-display text-sm text-ink hover:text-orange-dark">
            Gallery
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-1 border-r border-ink/15 pr-5">
            <a
              href={business.phoneHref}
              aria-label="Call us"
              title={`Call ${business.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-navy hover:text-white"
            >
              <PhoneIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={business.smsHref}
              aria-label="Text us"
              title={`Text ${business.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-navy hover:text-white"
            >
              <TextIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${business.email}`}
              aria-label="Email us"
              title={`Email ${business.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-navy hover:text-white"
            >
              <MailIcon className="h-4.5 w-4.5" />
            </a>
          </div>
          <Link
            href="/contact"
            className="text-display rounded-sm bg-orange px-5 py-2.5 text-sm text-white hover:bg-orange-dark"
          >
            Free Quote
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="text-2xl leading-none text-ink">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-ink/10 bg-concrete px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/services" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            <Link href="/residential-pressure-washing" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Residential
            </Link>
            <Link href="/commercial-pressure-washing" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Commercial
            </Link>
            <Link href="/real-estate-pressure-washing" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Realtors &amp; Sellers
            </Link>
            <Link href="/service-areas" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Service Areas
            </Link>
            <Link href="/about" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/resources" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
            <Link href="/gallery" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" className="py-3 text-display text-sm" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <a href={business.phoneHref} className="text-display flex flex-col items-center gap-1 rounded-sm bg-navy py-3 text-center text-xs text-white">
                <PhoneIcon className="h-4 w-4" /> Call
              </a>
              <a href={business.smsHref} className="text-display flex flex-col items-center gap-1 rounded-sm bg-orange py-3 text-center text-xs text-white">
                <TextIcon className="h-4 w-4" /> Text
              </a>
              <a href={`mailto:${business.email}`} className="text-display flex flex-col items-center gap-1 rounded-sm bg-ink py-3 text-center text-xs text-white">
                <MailIcon className="h-4 w-4" /> Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
