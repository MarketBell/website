import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

/**
 * Landing page for a shared Community post link.
 *
 * The app's share button produces `https://www.marketbell.in/community/post/<id>`.
 * Unlike a course (a public sales page), the Community is a members-only space —
 * posts live behind authentication and can be moderated/held — so we deliberately
 * do NOT render post content on the open web. This page just gives a clean, branded
 * destination (fixing the previous 404) and points people into the app to view it.
 *
 * `robots: noindex` so shared member-content URLs are not indexed by search engines.
 */
export const metadata: Metadata = {
  title: "Community post",
  description: `Open this post in the ${siteConfig.brand} app.`,
  robots: { index: false, follow: false },
};

export default function CommunityPostPage() {
  const play = siteConfig.stores.googlePlay;
  return (
    <Section>
      <SectionHeading
        eyebrow="Community"
        title="Open this post in the app"
        subtitle={`Someone shared a post from the ${siteConfig.brand} Community. The Community is for members — open the app to read it, reply and join the conversation.`}
      />
      <div className="mx-auto mt-12 max-w-xl">
        <GlassCard className="text-center">
          <p className="text-sm leading-relaxed text-navy/70">
            Have the {siteConfig.brand} app? Open it and head to the{" "}
            <strong>Community</strong> tab to find this post. New here? Get the app
            and sign in to explore courses, mentors and the community.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            {play.available && play.url ? (
              <Button href={play.url} external size="lg">
                Get the app
              </Button>
            ) : (
              <Button href="/" size="lg">
                Explore {siteConfig.brand}
              </Button>
            )}
            <Button href="/features" variant="secondary" size="lg">
              Learn more
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
