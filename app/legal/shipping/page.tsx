import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { shippingDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "Market Bell Shipping & Delivery Policy — Market Bell provides digital educational services only, delivered instantly in-app after payment. No physical shipping.",
  alternates: { canonical: "/legal/shipping" },
};

export default function ShippingPage() {
  return <LegalLayout doc={shippingDoc} />;
}
