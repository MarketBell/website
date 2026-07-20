import type { Metadata } from "next";
import { Check, ShieldCheck, Info } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How Market Bell pricing works — free and paid courses, course bundles, referral credits (1 credit = ₹1), and secure payments via Razorpay. Prices in Indian Rupees (₹).",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "Free",
    price: "₹0",
    tagline: "Start learning at no cost",
    highlight: false,
    features: [
      "Access to free courses and lessons",
      "Join the trader community",
      "Practice quizzes on free content",
      "Earn referral credits (1 credit = ₹1)",
    ],
  },
  {
    name: "Paid courses",
    price: "Varies",
    tagline: "Pay per course — priced by each mentor",
    highlight: true,
    features: [
      "Full access to the purchased course",
      "Video lessons, resources & quizzes",
      "Certificate on completion",
      "Lifetime access to purchased content",
      "Secure one-time payment via Razorpay",
    ],
  },
  {
    name: "Course bundles",
    price: "Discounted",
    tagline: "Buy related courses together and save",
    highlight: false,
    features: [
      "Multiple courses in a single purchase",
      "Better value than buying individually",
      "Everything in paid courses",
      "Apply referral credits at checkout",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow="Pricing"
          title="Free to start. Pay only for what you learn."
          subtitle="Market Bell is free to join. Some courses and bundles are paid — priced in Indian Rupees (₹) and processed securely through Razorpay."
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <GlassCard
                interactive
                className={`flex h-full flex-col ${
                  tier.highlight ? "ring-2 ring-indigo" : ""
                }`}
              >
                {tier.highlight && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-indigo/10 px-3 py-1 text-xs font-semibold text-indigo">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-navy">{tier.name}</h3>
                <p className="mt-4 text-3xl font-bold text-navy">{tier.price}</p>
                <p className="mt-1 text-sm text-navy/60">{tier.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-navy/75">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/#get-app"
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Get the app
                  </Button>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 flex items-start justify-center gap-2 text-center text-sm text-navy/55">
            <Info size={16} className="mt-0.5 shrink-0" />
            Individual course and bundle prices are set within the app by mentors
            and shown at checkout. Figures above describe the pricing model and
            are not a specific course price.
          </p>
        </Reveal>
      </Section>

      {/* How payments work */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="How payments work"
          title="Simple, secure, and transparent"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-semibold text-navy">
              Payments via Razorpay
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              All paid purchases are processed securely by Razorpay, a
              PCI-DSS-compliant payment gateway. Market Bell does not store your
              complete card details on its servers. Once payment is confirmed,
              access to the course or bundle is granted instantly in the app.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold text-navy">
              Referral credits — 1 credit = ₹1
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Invite friends and earn referral credits. Each credit is worth ₹1
              and can be applied toward the price of paid courses and bundles at
              checkout.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold text-navy">Taxes (GST)</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Prices may be subject to applicable taxes, including GST, in
              accordance with Indian law. Any applicable taxes are shown at
              checkout before you pay.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold text-navy">
              Refunds &amp; cancellations
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Refund eligibility is governed by our Refund &amp; Cancellation
              Policy and the terms shown at the time of purchase. Digital course
              access is granted instantly, so please review the policy before
              buying.
            </p>
            <div className="mt-4">
              <Button href="/legal/refund" variant="secondary" size="md">
                Read the refund policy
              </Button>
            </div>
          </GlassCard>
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-navy/60">
            <span className="inline-flex items-center gap-2 font-medium text-navy/80">
              <ShieldCheck size={18} className="text-emerald" />
              Secure payments via Razorpay
            </span>
            <span>
              Questions about pricing? Email{" "}
              <a
                className="font-medium text-indigo hover:underline"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              .
            </span>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
