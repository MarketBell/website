import Link from "next/link";
import { ShieldCheck, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Steps } from "@/components/Steps";
import { Showcase } from "@/components/Showcase";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <div className="border-y border-outline bg-white">
        <div className="container-mb flex flex-col items-center justify-center gap-4 py-6 text-center text-sm text-navy/60 sm:flex-row sm:gap-8">
          <span className="font-medium text-navy/80">
            A product of {siteConfig.company.legalName}
          </span>
          <span className="hidden h-4 w-px bg-outline sm:block" />
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald" />
            Secure payments via Razorpay
          </span>
          <span className="hidden h-4 w-px bg-outline sm:block" />
          <span className="inline-flex items-center gap-2">
            <GraduationCap size={16} className="text-indigo" />
            Education-first platform
          </span>
        </div>
      </div>

      {/* Features */}
      <Section id="features">
        <SectionHeading
          eyebrow="Everything you need"
          title="A complete platform for market learners"
          subtitle="From your first lesson to your first certificate — courses, community, and mentors in one place."
        />
        <FeatureGrid />
      </Section>

      {/* How it works */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="How it works"
          title="From sign up to certified in four steps"
          subtitle="A simple path designed to build real, lasting market knowledge."
        />
        <Steps />
      </Section>

      {/* For mentors */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo">
              For mentors
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Teach what you know. Earn as you grow.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              Share your market expertise with a growing community of learners.
              Publish courses, host sessions, and build your reputation on the
              Market Bell mentor marketplace — with secure, transparent payouts.
            </p>
            <ul className="mt-6 space-y-3 text-navy/75">
              {[
                "Reach motivated learners across India",
                "Publish courses and (soon) host live sessions",
                "Transparent earnings, paid out securely",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <TrendingUp size={18} className="mt-1 shrink-0 text-emerald" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="lg">
                Become a mentor
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="bg-gradient-to-br from-indigo/5 to-emerald/5">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { k: "Expert-led", v: "Courses & lessons" },
                  { k: "Community", v: "Trader network" },
                  { k: "Certificates", v: "On completion" },
                  { k: "1 credit = ₹1", v: "Refer & earn" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-outline bg-white p-5"
                  >
                    <p className="text-lg font-bold text-navy">{s.k}</p>
                    <p className="mt-1 text-sm text-navy/60">{s.v}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Showcase */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Inside the app"
          title="Designed to make learning feel effortless"
          subtitle="A clean, modern experience across every screen."
        />
        <Showcase />
      </Section>

      {/* Pricing teaser */}
      <Section>
        <Reveal>
          <GlassCard className="mx-auto max-w-4xl bg-gradient-to-br from-lavender/60 to-white text-center">
            <SectionHeading
              eyebrow="Simple, transparent pricing"
              title="Free to start. Pay only for what you learn."
              subtitle="Free and paid courses, course bundles, and referral credits — all in ₹, with secure Razorpay checkout."
            />
            <div className="mt-8 flex justify-center">
              <Button href="/pricing" size="lg">
                View pricing <ArrowRight size={18} />
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="container-mb relative text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Download Market Bell
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Start learning the markets with a community that grows with you.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges tone="dark" />
            </div>
            <p className="mt-6 text-sm text-white/50">
              Available soon on Google Play and the App Store.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
