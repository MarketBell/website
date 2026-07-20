import { GlassCard } from "./GlassCard";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { features, type Feature } from "@/content/features";

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <GlassCard interactive className="h-full">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
          <Icon size={22} />
        </span>
        {feature.comingSoon && (
          <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-gold">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/65">
        {feature.description}
      </p>
    </GlassCard>
  );
}

export function FeatureGrid({ limit }: { limit?: number }) {
  const items = limit ? features.slice(0, limit) : features;
  return (
    <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((f) => (
        <StaggerItem key={f.title} className="h-full">
          <FeatureItem feature={f} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
