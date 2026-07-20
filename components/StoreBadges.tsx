import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/** Official-style Google Play mark — the colorful "play" triangle. */
function GooglePlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {/* left = blue, top = green, bottom = red, fold = yellow */}
      <path d="M3 2.5 L3 21.5 L13.5 12 Z" fill="#00A1FF" />
      <path d="M3 2.5 L21 9.2 L13.5 12 Z" fill="#00E676" />
      <path d="M3 21.5 L21 14.8 L13.5 12 Z" fill="#FF3D47" />
      <path d="M21 9.2 L21 14.8 L13.5 12 Z" fill="#FFD500" />
    </svg>
  );
}

/** Official Apple logo silhouette. */
function AppleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

function Badge({
  icon,
  line1,
  line2,
  available,
  url,
  ariaLabel,
}: {
  icon: React.ReactNode;
  line1: string;
  line2: string;
  available: boolean;
  url: string;
  ariaLabel: string;
}) {
  const inner = (
    <span
      className={cn(
        "flex min-w-[172px] items-center gap-3 rounded-xl border border-white/25 bg-black px-4 py-2.5 text-white transition-all",
        available
          ? "hover:border-white/50 hover:brightness-110"
          : "cursor-default"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.62rem] font-medium tracking-wide">
          {line1}
        </span>
        <span className="mt-0.5 text-lg font-semibold leading-tight">
          {line2}
        </span>
      </span>
    </span>
  );

  if (available && url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <span role="img" aria-label={`${ariaLabel} — coming soon`}>
      {inner}
    </span>
  );
}

export function StoreBadges({
  tone = "light",
  showStatus = true,
  className,
}: {
  tone?: "light" | "dark";
  showStatus?: boolean;
  className?: string;
}) {
  const { googlePlay, appStore } = siteConfig.stores;
  const comingSoon = !googlePlay.available || !appStore.available;

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <Badge
          icon={<GooglePlayIcon />}
          line1="GET IT ON"
          line2="Google Play"
          available={googlePlay.available}
          url={googlePlay.url}
          ariaLabel="Get it on Google Play"
        />
        <Badge
          icon={<AppleIcon size={26} />}
          line1="Download on the"
          line2="App Store"
          available={appStore.available}
          url={appStore.url}
          ariaLabel="Download on the App Store"
        />
      </div>
      {showStatus && comingSoon && (
        <p
          className={cn(
            "text-xs font-medium",
            tone === "dark" ? "text-white/55" : "text-navy/50"
          )}
        >
          Coming soon to Google Play &amp; the App Store.
        </p>
      )}
    </div>
  );
}
