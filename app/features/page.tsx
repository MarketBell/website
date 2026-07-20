import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Steps } from "@/components/Steps";
import { Showcase } from "@/components/Showcase";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Market Bell's features — expert-led courses, practice quizzes, certificates, a mentor marketplace, trader community, live sessions, and refer & earn.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow="Features"
          title="Everything you need to learn the markets"
          subtitle="Courses, community, and mentors — thoughtfully designed to turn curiosity into confident, informed market participation."
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core features"
          title="One platform, all the essentials"
        />
        <FeatureGrid />
      </Section>

      <Section tone="tint">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from beginner to certified"
        />
        <Steps />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Inside the app"
          title="A clean, modern learning experience"
        />
        <Showcase />
        <Reveal>
          <div className="mt-12 flex justify-center">
            <Button href="/pricing" size="lg">
              See pricing
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
