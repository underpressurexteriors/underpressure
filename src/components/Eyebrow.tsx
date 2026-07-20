export default function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-data text-xs uppercase tracking-[0.2em] ${
        dark ? "text-white/60" : "text-navy/60"
      }`}
    >
      <span className="h-px w-8 bg-orange" aria-hidden="true" />
      {children}
    </div>
  );
}
