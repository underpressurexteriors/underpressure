import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="grain flex min-h-[70vh] items-center bg-ink-soft text-white">
      <Container className="text-center">
        <p className="text-data text-xs uppercase tracking-[0.3em] text-orange">404</p>
        <h1 className="text-display mt-4 text-4xl sm:text-5xl">
          This page got washed away.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist. Head back home or check
          out our services.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Link href="/services" className="text-sm font-semibold text-orange hover:text-white">
            View Services →
          </Link>
        </div>
      </Container>
    </section>
  );
}
