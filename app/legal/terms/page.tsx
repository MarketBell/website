import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { termsDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Market Bell Terms & Conditions — eligibility, educational-purpose disclaimer, risk disclosure, payments, and liability. A product of Yenew Technologies Private Limited.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return <LegalLayout doc={termsDoc} />;
}
