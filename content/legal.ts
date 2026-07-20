import { siteConfig } from "@/lib/site-config";

const { email, phone } = siteConfig.contact;

/**
 * Legal content model. Each document is an ordered list of sections; a section
 * body is either paragraph strings or a bullet list. Rendered as plain JSX by
 * LegalLayout (no dangerouslySetInnerHTML) so there is no injection surface.
 *
 * Terms & Privacy are ported from the app's legal markdown; the contact block
 * has been updated to the website's support email + phone.
 */
export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const contactLine = `Email: ${email} · Phone: ${phone}`;

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Terms & Conditions",
  intro:
    'These Terms govern your access to and use of the Market Bell website, mobile application, educational content, community features, and related services (the "Platform"). By using Market Bell you agree to be bound by these Terms.',
  sections: [
    {
      heading: "1. About Market Bell",
      paragraphs: [
        "An educational and community-driven platform providing trading and financial-market learning resources. Market Bell does not provide investment advisory, portfolio management, brokerage services, or guaranteed recommendations.",
      ],
    },
    {
      heading: "2. Eligibility",
      paragraphs: [
        "You must be at least 18 (or the legal age in your jurisdiction), have legal capacity to contract, provide accurate registration information, and comply with applicable laws.",
      ],
    },
    {
      heading: "3. Account Registration",
      paragraphs: [
        "Provide accurate information, keep your credentials confidential, and you are responsible for activity under your account. Notify us of any unauthorized access.",
      ],
    },
    {
      heading: "4. Educational Purpose Only",
      paragraphs: [
        "All content is for educational and informational purposes only — not investment, financial, tax, legal, or personalized trading advice. Conduct independent research and consult professionals.",
      ],
    },
    {
      heading: "5. Risk Disclosure",
      paragraphs: [
        "Trading and investing involve significant risk. Markets can be volatile; past performance does not guarantee future results. You are solely responsible for your decisions and should never invest money you cannot afford to lose.",
      ],
    },
    {
      heading: "6. Community Guidelines",
      paragraphs: [
        "No false/misleading information, harassment, hate speech, illegal/harmful content, fraudulent schemes, impersonation, spam, or market manipulation. We may remove content and suspend accounts that violate standards.",
      ],
    },
    {
      heading: "7. User-Generated Content",
      paragraphs: [
        "You retain ownership of content you submit but grant Market Bell a non-exclusive, worldwide, royalty-free licence to use, display, reproduce, and distribute it for platform operations and promotion. You are responsible for what you publish.",
      ],
    },
    {
      heading: "8. Intellectual Property",
      paragraphs: [
        "Platform content (logos, branding, course materials, videos, graphics, text, designs) is owned by or licensed to Market Bell and protected by IP laws. Do not copy, reproduce, modify, distribute, sell, or republish without permission.",
      ],
    },
    {
      heading: "9. Subscription & Payments",
      paragraphs: [
        "Certain features/courses may require payment. Pricing may change; payments are processed via approved methods; access may be restricted if payment fails; taxes may apply.",
      ],
    },
    {
      heading: "10. Refund Policy",
      paragraphs: [
        "Refund eligibility, if offered, is governed by the terms displayed at the time of purchase and our Refund & Cancellation Policy. Market Bell may approve or reject requests per applicable policies and law.",
      ],
    },
    {
      heading: "11. Suspension & Termination",
      paragraphs: [
        "We may suspend, restrict, or terminate accounts for violations, unlawful activity, abuse, security compromise, or harm to others or the Platform.",
      ],
    },
    {
      heading: "12. Third-Party Services",
      paragraphs: [
        "The Platform may link to third-party services, payment gateways, or tools. We are not responsible for third-party content, availability, or practices.",
      ],
    },
    {
      heading: "13. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Market Bell is not liable for trading/investment losses, lost profits or data, business interruption, or indirect/incidental/consequential damages. Use is at your own risk.",
      ],
    },
    {
      heading: "14. Disclaimer of Warranties",
      paragraphs: [
        'The Platform is provided "as-is" and "as-available" with no warranties of accuracy, continuous availability, error-free operation, or profitability.',
      ],
    },
    {
      heading: "15. Changes to Terms",
      paragraphs: [
        "Updated Terms are posted with a revised date; continued use constitutes acceptance.",
      ],
    },
    {
      heading: "16. Contact",
      paragraphs: [
        contactLine,
        "By using Market Bell you acknowledge that you have read, understood, and agreed to these Terms and Conditions, including the educational-purpose and risk-disclosure provisions.",
      ],
    },
  ],
};

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro:
    "Your privacy is important to us. This Privacy Policy explains how Market Bell collects, uses, stores, and safeguards your information when you use our e-learning and trader community platform.",
  sections: [
    {
      heading: "1. Introduction",
      paragraphs: [
        'Market Bell ("we," "our," or "us") provides educational content, learning resources, community discussions, market insights, and related services. By using our platform you agree to the collection and use of information in accordance with this policy.',
      ],
    },
    {
      heading: "2. Information We Collect",
      list: [
        "Personal information: full name, email, mobile number, profile information, date of birth (if required), profile picture (optional), account credentials.",
        "Usage information: device info, browser/app version, IP address, OS, app usage statistics, login activity, pages/features used.",
        "Community content: posts, comments, questions, messages, feedback you voluntarily share.",
        "Payment information: handled by trusted third-party providers; we do not store complete payment card information on our servers.",
      ],
    },
    {
      heading: "3. How We Use Your Information",
      paragraphs: [
        "To create and manage your account; provide courses and resources; facilitate community interactions; improve experience and performance; send service notifications; respond to support; personalize content; monitor security; and comply with legal obligations.",
      ],
    },
    {
      heading: "4. Educational Purpose Disclaimer",
      paragraphs: [
        "Content and discussions are for educational and informational purposes only and should not be considered financial, investment, legal, or professional advice. Users are responsible for their own research and decisions.",
      ],
    },
    {
      heading: "5. Sharing of Information",
      paragraphs: [
        "We do not sell, rent, or trade your personal information. We may share with service providers, payment processors, analytics providers, legal authorities (when required), and business partners — all expected to maintain appropriate confidentiality and security.",
      ],
    },
    {
      heading: "6. Community and Public Content",
      paragraphs: [
        "Information you post in public areas may be visible to others. Exercise caution when sharing personal, financial, or sensitive information.",
      ],
    },
    {
      heading: "7. Data Security",
      paragraphs: [
        "We implement reasonable technical, administrative, and organizational measures to protect your information. No internet-based system can guarantee absolute security.",
      ],
    },
    {
      heading: "8. Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary to provide services, fulfill legal obligations, resolve disputes, and enforce agreements.",
      ],
    },
    {
      heading: "9. Cookies & Tracking",
      paragraphs: [
        "We may use cookies and similar technologies to improve functionality, remember preferences, analyze usage, and maintain security.",
      ],
    },
    {
      heading: "10. Your Rights",
      paragraphs: [
        "You may access, correct, delete, or request a copy of your data; withdraw consent; or object to certain processing, subject to applicable law.",
      ],
    },
    {
      heading: "11. Children's Privacy",
      paragraphs: [
        "Market Bell is not intended for children under 18 without parental or guardian supervision.",
      ],
    },
    {
      heading: "12. Changes",
      paragraphs: [
        "We may update this policy from time to time; updated versions are posted with a revised date.",
      ],
    },
    {
      heading: "13. Contact Us",
      paragraphs: [
        contactLine,
        "By creating an account or using Market Bell, you acknowledge that you have read, understood, and agreed to this Privacy Policy.",
      ],
    },
  ],
};

export const refundDoc: LegalDoc = {
  slug: "refund",
  title: "Refund & Cancellation Policy",
  intro:
    "This Refund & Cancellation Policy explains when refunds and cancellations apply to purchases made on Market Bell. Because Market Bell sells digital educational services, please read this policy carefully before making a payment.",
  sections: [
    {
      heading: "1. Digital Products & Instant Access",
      paragraphs: [
        "Market Bell sells digital services — online courses, video lessons, learning resources, and access to live sessions. Access is granted instantly in the app once payment is confirmed. There is no physical product and no shipping.",
      ],
    },
    {
      heading: "2. Courses & Bundles",
      list: [
        "You may request a refund for a purchased course or bundle only if you have not accessed or consumed a significant portion of its content, and the request is made within the refund window shown at the time of purchase.",
        "Once course content has been accessed, streamed, or downloaded, the purchase is considered used and is generally non-refundable.",
        "Any refund window and conditions displayed at checkout for a specific course or bundle take precedence and form part of this policy.",
      ],
    },
    {
      heading: "3. Live Sessions",
      list: [
        "If you purchase a paid live session and miss it for reasons attributable to you, the payment is non-refundable (user-miss = no refund).",
        "If a live session is cancelled by the mentor or by Market Bell, you are entitled to a full refund of that session, or the option to attend a rescheduled session where available (mentor-cancel = full refund).",
      ],
    },
    {
      heading: "4. Referral Credits",
      paragraphs: [
        "Referral credits (1 credit = ₹1) are promotional and can be applied toward paid purchases at checkout. Referral credits are not redeemable for cash and are non-refundable.",
      ],
    },
    {
      heading: "5. How to Request a Refund",
      paragraphs: [
        `To request a refund, email ${email} from your registered email address with your order details and the reason for the request. We may ask for additional information to process your request.`,
      ],
    },
    {
      heading: "6. Processing of Approved Refunds",
      paragraphs: [
        "Approved refunds are processed to the original payment method through our payment gateway, Razorpay. Once initiated, the time to reflect in your account depends on your bank or card issuer and Razorpay's processing timelines.",
      ],
    },
    {
      heading: "7. Taxes",
      paragraphs: [
        "Where a refund is approved, any applicable taxes are handled in accordance with applicable law. Non-refundable fees or taxes, if any, will be communicated where relevant.",
      ],
    },
    {
      heading: "8. Contact",
      paragraphs: [contactLine],
    },
  ],
};

export const shippingDoc: LegalDoc = {
  slug: "shipping",
  title: "Shipping & Delivery Policy",
  intro:
    "This Shipping & Delivery Policy explains how Market Bell delivers what you purchase. Market Bell provides digital educational services only.",
  sections: [
    {
      heading: "1. Digital Services Only — No Physical Shipping",
      paragraphs: [
        "Market Bell sells digital educational services only: online courses, video lessons, learning resources, certificates, and access to community features and live sessions. We do not sell or ship any physical goods, so no physical shipping, courier, or delivery charges apply.",
      ],
    },
    {
      heading: "2. Instant Digital Delivery",
      paragraphs: [
        "Access to a purchased course, bundle, or session is delivered digitally and granted instantly within the Market Bell app once your payment is successfully confirmed by our payment gateway, Razorpay.",
      ],
    },
    {
      heading: "3. Accessing Your Purchase",
      list: [
        "Log in to the Market Bell app with the account used for the purchase.",
        "Your purchased courses and bundles appear in your enrolled content.",
        "Live-session access details are shown in the app for the relevant session.",
      ],
    },
    {
      heading: "4. Delivery Issues",
      paragraphs: [
        `If your payment was successful but you cannot access your purchase, please contact us at ${email} with your order details and we will resolve it promptly.`,
      ],
    },
    {
      heading: "5. Contact",
      paragraphs: [contactLine],
    },
  ],
};

export const legalDocs: Record<string, LegalDoc> = {
  terms: termsDoc,
  privacy: privacyDoc,
  refund: refundDoc,
  shipping: shippingDoc,
};
