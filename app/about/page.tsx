import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Market Bell is an e-learning and trader community platform, a product of Yenew Technologies Private Limited. Learn about our mission, vision, and what we offer.",
  alternates: { canonical: "/about" },
};

const offerings = [
  {
    title: "Comprehensive Learning",
    body: "Structured courses, educational content, live sessions, and market-focused resources for traders at every stage.",
  },
  {
    title: "Practical Market Insights",
    body: "Analysis, strategies, and actionable insights bridging theory and real-world conditions.",
  },
  {
    title: "Collaborative Community",
    body: "Connect with like-minded traders, exchange ideas, and learn from fellow members.",
  },
  {
    title: "Continuous Growth",
    body: "Tools and an environment to support your ongoing development, from beginner to advanced.",
  },
];

const reasons = [
  "Expert-driven educational resources",
  "Interactive and engaging learning experience",
  "Supportive trader community",
  "Practical market-focused approach",
  "Continuous learning and skill development",
  "Commitment to responsible trading education",
];

export default function AboutPage() {
  const { company } = siteConfig;
  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow="About Market Bell"
          title="Connecting Minds, Creating Wealth"
          subtitle="A dynamic e-learning and trader community platform designed to empower aspiring and experienced market participants with the knowledge, skills, and network they need to succeed."
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy">Who we are</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Market Bell is a dynamic e-learning and trader community platform
              designed to empower aspiring and experienced market participants
              with the knowledge, skills, and network they need to succeed in
              today&apos;s financial markets. We believe that successful trading
              is built on education, discipline, and continuous learning. Our
              platform brings together expert-led learning resources, practical
              market insights, and a collaborative community where traders can
              learn, share, and grow together.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-navy">Our mission</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              To make quality trading education accessible to everyone and
              create a supportive ecosystem where individuals can develop
              confidence, improve decision-making, and achieve their financial
              goals through informed market participation.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-navy">Our vision</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              To become a trusted global destination for trading education and
              community-driven learning, where individuals are empowered with
              the knowledge, confidence, and support needed to navigate
              financial markets responsibly and successfully.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="What we offer" title="Built for every stage of your journey" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((o) => (
            <GlassCard key={o.title} interactive>
              <h3 className="text-lg font-semibold text-navy">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{o.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading align="left" eyebrow="Why choose Market Bell?" title="Learning never stops" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-2xl border border-outline bg-white p-4 text-navy/80"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Legal entity disclosure */}
      <Section tone="tint">
        <Reveal>
          <GlassCard className="mx-auto max-w-3xl">
            <h2 className="text-xl font-bold text-navy">The company behind Market Bell</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Market Bell is a product of{" "}
              <strong className="text-navy">{company.legalName}</strong>, a
              company registered in India under the Ministry of Corporate
              Affairs (MCA).
            </p>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-navy/60">Legal name</dt>
                <dd className="text-navy">{company.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy/60">CIN</dt>
                <dd className="text-navy">{company.cin}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-navy/60">Registered office</dt>
                <dd className="text-navy">{company.registeredAddress}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  );
}
