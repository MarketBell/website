import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand lockup: the MB mark (navy + emerald) sits in a white rounded tile so it
 * stays legible on both light and dark backgrounds, next to the wordmark. The
 * wordmark colour adapts via `tone`.
 */
export function Logo({
  tone = "light",
  withWordmark = true,
  className,
  size = 40,
}: {
  tone?: "light" | "dark";
  withWordmark?: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brand} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className="flex items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/app-icon.png"
          alt=""
          width={size - 10}
          height={size - 10}
          priority
        />
      </span>
      {withWordmark && (
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            tone === "dark" ? "text-white" : "text-navy"
          )}
        >
          Market Bell
        </span>
      )}
    </Link>
  );
}
