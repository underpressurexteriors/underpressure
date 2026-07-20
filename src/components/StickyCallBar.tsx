import Link from "next/link";
import { business } from "@/lib/business";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-black/10 lg:hidden">
      <a
        href={business.phoneHref}
        className="text-display flex-1 bg-navy py-3.5 text-center text-sm text-white"
      >
        Call {business.phone}
      </a>
      <Link
        href="/contact"
        className="text-display flex-1 bg-orange py-3.5 text-center text-sm text-white"
      >
        Free Quote
      </Link>
    </div>
  );
}
