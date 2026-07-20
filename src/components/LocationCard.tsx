import Link from "next/link";
import type { LocationEntry } from "@/lib/locations";

export default function LocationCard({ location, index }: { location: LocationEntry; index: number }) {
  return (
    <Link
      href={`/service-areas/${location.slug}`}
      className="reveal group border border-ink/10 bg-white p-5 transition-colors hover:border-orange"
      data-reveal-delay={(index % 6) * 50}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-display text-lg text-navy group-hover:text-orange-dark">
          {location.city}, {location.state}
        </h3>
        <span className="text-data text-xs text-steel">{location.state}</span>
      </div>
      <p className="mt-1 text-xs text-steel">{location.county}</p>
      <p className="mt-3 text-sm text-ink/70">{location.blurb}</p>
    </Link>
  );
}
