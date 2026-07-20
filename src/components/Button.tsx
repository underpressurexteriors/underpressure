import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 text-display text-[0.95rem]";

  const variants: Record<string, string> = {
    primary: "bg-orange text-white hover:bg-orange-dark",
    secondary: "bg-navy text-white hover:bg-navy-deep",
    ghost:
      "border border-ink/20 text-ink hover:border-orange hover:text-orange-dark",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
