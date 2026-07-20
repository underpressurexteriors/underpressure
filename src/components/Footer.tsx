import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-white.png"
                alt={`${business.name} logo`}
                width={657}
                height={160}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Licensed and insured pressure washing for homes and businesses across North Carolina and Virginia. Based in {business.city}, {business.state}.
            </p>
            <div className="mt-5 space-y-1 text-data text-sm">
              <a href={business.phoneHref} className="block text-white hover:text-orange">
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="block text-white/80 hover:text-orange">
                {business.email}
              </a>
              <p className="text-white/50">{business.city}, {business.state} — serving NC &amp; VA</p>
            </div>
          </div>

          <div>
            <h3 className="text-display text-sm text-orange">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-display text-sm text-orange">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/residential-pressure-washing" className="hover:text-white">Residential</Link></li>
              <li><Link href="/commercial-pressure-washing" className="hover:text-white">Commercial</Link></li>
              <li><Link href="/real-estate-pressure-washing" className="hover:text-white">Realtors &amp; Sellers</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-display text-sm text-orange">Service Areas</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/70">
              {locations.slice(0, 8).map((l) => (
                <li key={l.slug}>
                  <Link href={`/service-areas/${l.slug}`} className="hover:text-white">
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="font-semibold text-orange hover:text-orange-dark">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name}. Licensed &amp; Insured. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
