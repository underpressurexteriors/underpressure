import { business } from "@/lib/business";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-black/10 lg:hidden">
      <a
        href={business.phoneHref}
        className="text-display bg-navy py-3.5 text-center text-xs text-white"
      >
        Call
      </a>
      <a
        href={business.smsHref}
        className="text-display bg-orange py-3.5 text-center text-xs text-white"
      >
        Text
      </a>
      <a
        href={`mailto:${business.email}`}
        className="text-display bg-ink py-3.5 text-center text-xs text-white"
      >
        Email
      </a>
    </div>
  );
}
