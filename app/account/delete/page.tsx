import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Delete your account",
  description: `How to permanently delete your ${siteConfig.brand} account and data.`,
  alternates: { canonical: "/account/delete" },
};

const { contact, brand } = siteConfig;

export default function DeleteAccountPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Account"
        title="Delete your account"
        subtitle={`You can permanently delete your ${brand} account and associated data at any time.`}
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-6">
        <GlassCard>
          <h2 className="text-lg font-semibold text-navy">
            Delete from the app (recommended)
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-navy/75">
            <li>Open the {brand} app and sign in.</li>
            <li>
              Go to <strong>More → Settings → Account security</strong>.
            </li>
            <li>
              Tap <strong>Delete account</strong> and confirm.
            </li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-navy/65">
            Your account is deleted immediately and you are signed out.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-semibold text-navy">
            Request deletion by email
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">
            If you cannot access the app, email us from your registered address and
            we will delete your account and data.
          </p>
          <div className="mt-5">
            <Button
              href={`mailto:${contact.email}?subject=Delete%20my%20${encodeURIComponent(
                brand
              )}%20account`}
              external
              size="md"
            >
              Email {contact.email}
            </Button>
          </div>
        </GlassCard>

        <GlassCard tone="light">
          <h2 className="text-lg font-semibold text-navy">What gets deleted</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">
            Deleting your account permanently removes your profile, course
            enrolments and progress, credits, saved items, and community activity
            (posts, comments and messages). This cannot be undone.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy/60">
            Records we are required to keep for legal, tax or accounting purposes
            (for example, invoices for completed purchases) may be retained as
            required by law.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
