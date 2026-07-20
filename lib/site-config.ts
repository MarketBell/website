/**
 * SINGLE source of truth for all company / legal / contact details and links.
 * Edit values here and they update across the whole site (footer, legal pages,
 * contact, structured data, metadata).
 */

export const siteConfig = {
  // Product / brand
  brand: "Market Bell",
  tagline: "Connecting Minds, Creating Wealth",
  description:
    "Market Bell is an e-learning and trader community platform — expert-led courses, practice quizzes, certificates, live sessions, and a mentor marketplace. A product of Yenew Technologies Private Limited.",
  domain: "marketbell.in",
  url: "https://marketbell.in",

  // Operating legal entity (must be disclosed for KYC / verification)
  company: {
    legalName: "Yenew Technologies Private Limited",
    shortName: "Yenew Technologies Pvt Ltd",
    cin: "U58201DL2024PTC434779",
    // Registered office as per the MCA Certificate of Incorporation.
    // NOTE: The MCA record reads "Houseno E 55 R Portion, Grnd Flr Rajeev Nagar,
    // Begumpur, North West Delhi, Delhi, Delhi, India, 110086". Only the obvious
    // "Houseno" -> "House no" typo is corrected below; everything else is kept
    // faithful to MCA so it matches D-U-N-S / Google Play / Apple / Razorpay
    // verification against the registry. (An address from a signed NDA differed;
    // the MCA COI address is authoritative and is the one used here.)
    registeredAddress:
      "House no E 55 R Portion, Grnd Flr Rajeev Nagar, Begumpur, North West Delhi, Delhi, Delhi, India, 110086",
  },

  // Contact (used everywhere, including all legal pages)
  contact: {
    email: "support@marketbell.in",
    phone: "+91 7827404280",
    phoneHref: "+917827404280",
  },

  // Store links — app not yet live; both show "Coming soon" until URLs exist.
  stores: {
    googlePlay: { available: false, url: "" },
    appStore: { available: false, url: "" },
  },

  // Last content review date shown on legal pages.
  legalLastUpdated: "21 July 2026",
} as const;

export type SiteConfig = typeof siteConfig;
