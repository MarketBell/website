import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { refundDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Market Bell Refund & Cancellation Policy — refunds for digital courses, bundles, and live sessions, referral credits, and how to request a refund via Razorpay.",
  alternates: { canonical: "/legal/refund" },
};

export default function RefundPage() {
  return <LegalLayout doc={refundDoc} />;
}
