import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacyDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Market Bell Privacy Policy — what information we collect, how we use it, sharing, security, retention, and your rights. A product of Yenew Technologies Private Limited.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return <LegalLayout doc={privacyDoc} />;
}
