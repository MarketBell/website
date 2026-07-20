import { siteConfig } from "@/lib/site-config";

/**
 * Organization + WebSite JSON-LD. Rendered with the request nonce so it is
 * permitted under the strict, nonce-based Content-Security-Policy.
 */
export function StructuredData({ nonce }: { nonce?: string }) {
  const { company, contact } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: company.legalName,
        alternateName: siteConfig.brand,
        url: siteConfig.url,
        email: contact.email,
        telephone: contact.phone,
        identifier: { "@type": "PropertyValue", name: "CIN", value: company.cin },
        address: {
          "@type": "PostalAddress",
          streetAddress: company.registeredAddress,
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.brand,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // The browser blanks out the nonce value in the DOM after applying CSP,
      // so the client reads it back as "" — a benign server/client mismatch on
      // this non-executable data script. Suppress the hydration warning.
      suppressHydrationWarning
      // Content is fully static and defined above — no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
