import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * Full-bleed section band with consistent vertical rhythm. `tone` sets the
 * background: light page bg, tinted lavender, or a dark navy band.
 */
export function Section({
  id,
  tone = "light",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: "light" | "tint" | "dark";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  const tones = {
    light: "bg-lightbg text-navy",
    tint: "bg-lavender/50 text-navy",
    dark: "bg-navy-deep text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28",
        tones[tone],
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + subhead block used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-navy/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
