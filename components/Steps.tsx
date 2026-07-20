import { StaggerGroup, StaggerItem } from "./Reveal";
import { steps } from "@/content/features";

export function Steps() {
  return (
    <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <StaggerItem key={step.title} className="h-full">
          <div className="relative h-full rounded-3xl border border-outline bg-white p-6 shadow-glass">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-navy">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">
              {step.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
