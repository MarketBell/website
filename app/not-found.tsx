import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="container-mb relative text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-light">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="onDark" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="onDark" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
