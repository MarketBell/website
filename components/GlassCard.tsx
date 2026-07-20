import { cn } from "@/lib/cn";

/**
 * Signature glass surface. `tone="dark"` for use on dark sections.
 * `interactive` adds the hover lift + glow used on feature/pricing cards.
 */
export function GlassCard({
  tone = "light",
  interactive = false,
  className,
  children,
}: {
  tone?: "light" | "dark";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-7",
        tone === "light" ? "glass-light" : "glass-dark",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-lg motion-reduce:transform-none motion-reduce:transition-none",
        interactive &&
          (tone === "light" ? "hover:border-indigo/30" : "hover:border-white/30"),
        className
      )}
    >
      {children}
    </div>
  );
}
