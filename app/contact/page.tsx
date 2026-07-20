import type { Metadata } from "next";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Market Bell (a product of Yenew Technologies Private Limited). Email support@marketbell.in, call us, or find our registered office and business details.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { company, contact } = siteConfig;
  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow="Contact"
          title="We'd love to hear from you"
          subtitle="Questions about courses, mentoring, payments, or partnerships — reach out and our team will help."
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <h2 className="text-xl font-bold text-navy">Get in touch</h2>
              <p className="mt-2 text-sm text-navy/65">
                The fastest way to reach us is by email. We aim to respond within
                a couple of business days.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-outline bg-white p-4 transition-colors hover:border-indigo/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-navy/50">
                      Email
                    </span>
                    <span className="font-semibold text-navy">
                      {contact.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-4 rounded-2xl border border-outline bg-white p-4 transition-colors hover:border-indigo/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                    <Phone size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-navy/50">
                      Phone
                    </span>
                    <span className="font-semibold text-navy">
                      {contact.phone}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-6">
                <Button href={`mailto:${contact.email}`} size="lg" external>
                  Email us
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="h-full">
              <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
                <Building2 size={20} className="text-indigo" />
                Business details
              </h2>
              <p className="mt-2 text-sm text-navy/65">
                Market Bell is operated by the following registered entity.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy/50">Legal entity</dt>
                  <dd className="mt-0.5 text-navy">{company.legalName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy/50">
                    Corporate Identity Number (CIN)
                  </dt>
                  <dd className="mt-0.5 text-navy">{company.cin}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-navy/50">
                    <MapPin size={14} /> Registered office
                  </dt>
                  <dd className="mt-0.5 leading-relaxed text-navy">
                    {company.registeredAddress}
                  </dd>
                </div>
              </dl>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
