import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="reveal group flex flex-col justify-between border border-ink/10 bg-white p-6 transition-colors hover:border-orange"
      data-reveal-delay={index * 60}
    >
      <div>
        <span className="text-data text-xs text-steel">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="text-display mt-2 text-xl text-navy group-hover:text-orange-dark">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-ink/70">{service.tagline}</p>
      </div>
      <span className="mt-6 text-sm font-semibold text-orange-dark">
        Learn more →
      </span>
    </Link>
  );
}
