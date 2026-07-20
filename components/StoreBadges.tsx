import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * Store badges. Renders as a real link when a store URL is configured in
 * site-config, otherwise as a non-clickable "Coming soon" badge.
 */
function Badge({
  icon,
  line1,
  store,
  available,
  url,
  tone,
}: {
  icon: React.ReactNode;
  line1: string;
  store: string;
  available: boolean;
  url: string;
  tone: "light" | "dark";
}) {
  const shell =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-navy/15 bg-white text-navy hover:border-indigo/40";

  const inner = (
    <span
      className={cn(
        "flex min-w-[168px] items-center gap-3 rounded-2xl border px-4 py-2.5 transition-all",
        shell,
        !available && "cursor-default opacity-90"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.7rem] uppercase tracking-wide opacity-70">
          {available ? line1 : "Coming soon"}
        </span>
        <span className="text-sm font-semibold">{store}</span>
      </span>
    </span>
  );

  if (available && url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${line1} ${store}`}>
        {inner}
      </a>
    );
  }
  return (
    <span role="img" aria-label={`${store} — coming soon`}>
      {inner}
    </span>
  );
}

export function StoreBadges({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Badge
        icon={<Play size={22} />}
        line1="Get it on"
        store="Google Play"
        available={siteConfig.stores.googlePlay.available}
        url={siteConfig.stores.googlePlay.url}
        tone={tone}
      />
      <Badge
        icon={<Apple size={22} />}
        line1="Download on the"
        store="App Store"
        available={siteConfig.stores.appStore.available}
        url={siteConfig.stores.appStore.url}
        tone={tone}
      />
    </div>
  );
}
