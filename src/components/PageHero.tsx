import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="grain bg-ink-soft py-16 text-white sm:py-20">
      <Container>
        <p className="text-data text-xs uppercase tracking-[0.25em] text-orange">
          {eyebrow}
        </p>
        <h1 className="text-display mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
