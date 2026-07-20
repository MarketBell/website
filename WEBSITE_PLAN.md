# Market Bell — Website Build Plan

> Hand this file to a fresh Claude Code session opened in the **website repo root**
> (`…\Yenew\Project\website`). It is the single source of truth for building the
> Market Bell marketing + legal website. Read it fully before writing code.

---

## 0. TL;DR

Build a **premium, Apple.com-inspired, animated, responsive marketing website** for the
**Market Bell** app, on **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
deployed on **Vercel** with the domain **marketbell.in**. It is **static** (no backend, no
database — the app has its own). It must look high-end (glassmorphism, big type, smooth motion)
and it must satisfy **business verification** for D-U-N-S, Google Play, Apple, and **Razorpay
go-live** (real legal-entity details + policy pages).

---

## 1. Purpose (why this site exists)

1. **Brand / marketing** for the Market Bell app (drive Play Store / App Store installs).
2. **Business verification** — a live website is expected by D-U-N-S, Google Play (org),
   Apple Developer (org), and **required by Razorpay** to move from Test → Live payments.
   Verifiers look for: the **legal operating company**, **contact**, and **policy pages**.

Both goals must be met: brand-forward, but with the legal entity clearly disclosed.

---

## 2. Brand & legal identity (READ CAREFULLY)

- **Product / brand shown everywhere:** **Market Bell** (domain `marketbell.in`).
- **Operating legal entity (must be disclosed):** **YENEW TECHNOLOGIES PRIVATE LIMITED**
  (registered under MCA, India). Market Bell is a **product of** Yenew Technologies Pvt Ltd.
- **Where Yenew must appear** (for KYC/verification): the **footer** (every page), the **About**
  page, and **all legal pages**, including:
  - Legal name: `Yenew Technologies Private Limited`
  - **CIN:** `<FILL — from MCA / Certificate of Incorporation>`
  - **Registered office address:** `<FILL — exact MCA address>`
  - **Contact email:** `support@marketbell.in`
  - **Contact phone:** `<FILL — business phone>`
  > These `<FILL>` values are REAL and must be provided by Gautam before go-live. Use clearly
  > marked placeholders (e.g. `[CIN pending]`) if not yet supplied — never invent a CIN/number.

- **Logo:** reuse the **existing app logo** — do NOT design a new one. Copy the brand art from
  the app repo:
  - `…\Yenew\Project\market-bell\mobile\assets\branding\` (app logo PNGs), and/or
  - `…\Yenew\Project\market-bell\docs\logoa.png`, `logob.png`, `theme.jpg`, `app.jpeg`.
  Copy the chosen logo into the website `public/` folder and use it in the nav, hero, footer,
  favicon, and OG image. If both light and dark logo variants exist, use the light-on-dark
  variant on dark sections and the dark/color variant on light sections.

### Color palette (from the Market Bell app — match it)
Sample exact colors from the logo, and align to the app's tokens (`app_colors.dart`):

| Token | Hex | Use |
|---|---|---|
| Indigo (primary) | `#4F46E5` | primary buttons, links, accents |
| Indigo light | `#818CF8` | gradients, hovers |
| Navy (text/dark bg) | `#0F172A` | headings, dark sections |
| Deep navy (bg) | `#020617` | dark hero background base |
| Emerald | `#10B981` | success/"free" accents, small highlights |
| Gold | `#FBBF24` | premium/certificate accents (sparingly) |
| Light bg | `#F6F7FB` | page background (light sections) |
| Lavender tint | `#EDEBFB` | soft section tints, glass fills |
| White | `#FFFFFF` | cards/surfaces |

Primary brand accent = **indigo `#4F46E5`**. Keep it consistent with the app so the site and app
feel like one product. If the logo's dominant color differs, lead with the logo color for the
mark and keep indigo as the interactive/accent color.

### Typography
Apple-like: a clean geometric sans. Use **Inter** (or `next/font` with Inter) as the base;
optionally a slightly tighter display weight for hero headlines. Large, confident headings;
generous line-height for body. (Don't ship actual SF Pro — it's Apple-licensed; Inter reads
similarly and is free.)

---

## 3. Design language — "Apple site" + glassmorphism

Aim for the feel of apple.com / a top product landing page:

- **Layout:** big hero, lots of whitespace, centered max-width (~1200px) content, full-bleed
  section backgrounds, strong visual rhythm section-to-section.
- **Glassmorphism (the signature ask):**
  - **Sticky top navbar**: translucent, `backdrop-blur`, subtle bottom border, frosted look;
    becomes slightly more opaque on scroll.
  - **Glass cards** for features/pricing: semi-transparent white (`bg-white/60` to `/70`),
    `backdrop-blur-xl`, thin `border-white/40`, soft shadow, rounded-2xl.
  - On **dark sections**, glass = `bg-white/10` + blur + `border-white/15`.
  - Keep blur usage reasonable on mobile (perf) — lighter blur / fewer layers below `md`.
- **Depth & light:** soft radial gradients (indigo → lavender), a faint grid or aurora glow
  behind the hero, subtle noise texture optional. Dark hero (deep navy) with a glowing logo and
  glass panels = premium.
- **Motion (Framer Motion):**
  - Section **reveal on scroll** (fade + rise), staggered children.
  - Hero: gentle entrance, floating device mockup, animated gradient/aurora.
  - **Hover**: cards lift + glow; buttons have a soft press.
  - Smooth in-page anchor scrolling. Respect `prefers-reduced-motion` (disable big motion).
- **Light + dark:** default light, with **at least the hero and one CTA section in dark** for
  contrast (Apple does this). A full dark-mode toggle is optional (nice-to-have, not required).
- **Imagery:** app screenshots inside clean phone mockups (use the app screenshots from
  `market-bell/mobile` / store assets; if none, use tasteful placeholders clearly marked).

---

## 4. Tech stack (decided)

- **Next.js (App Router) + TypeScript** — Vercel-native, great SEO for a public site, file-based
  routing for legal pages, image optimization. (Chosen over plain React: SEO + routing + Vercel
  DX. No MERN — there is no backend/DB need.)
- **Tailwind CSS** for styling (fast, consistent, easy glassmorphism utilities).
- **Framer Motion** for animations.
- **next/font** (Inter) for fonts; **next/image** for images.
- **lucide-react** (or Heroicons) for icons.
- Fully **static** (`output: 'export'` is optional; standard Vercel deploy is fine). No API
  routes, no database, no auth.
- Node 20+, `npm`.

---

## 5. Site map & content

Routes (App Router):
```
/                     Home (landing)
/about                About Market Bell + Yenew
/features             Feature deep-dive (optional if Home covers it)
/pricing              What users pay for (courses/bundles) — supports Razorpay review
/contact              Contact + business details
/legal/terms          Terms & Conditions
/legal/privacy        Privacy Policy
/legal/refund         Refund & Cancellation Policy
/legal/shipping       Shipping/Delivery Policy (digital delivery statement)
```

### Home sections (top → bottom)
1. **Glass sticky nav** — logo, links (Features, Pricing, About, Contact), "Get the app" button.
2. **Hero** (dark, glassmorphic) — logo, headline (e.g. *"Learn the markets. Trade with a
   community."*), subhead, **Google Play badge** (+ "App Store — coming soon"), animated
   aurora/gradient + floating phone mockup.
3. **Trust strip** — "A product of Yenew Technologies Pvt Ltd" + small logos/《secure payments via
   Razorpay》badge.
4. **Features** — glass cards: Courses & video lessons, Practice quizzes, Certificates,
   Mentor marketplace, Trader community, Live sessions (mark "coming soon"), Refer & earn.
5. **How it works** — 3–4 steps (sign up → learn → practice → get certified).
6. **For mentors** — teach & earn (mentor value prop).
7. **Screenshots / product showcase** — scrolling device mockups.
8. **Pricing teaser** → link to /pricing.
9. **Final CTA** (dark, glass) — "Download Market Bell" + store badges.
10. **Footer** — Yenew legal block (name, CIN, registered address, `support@marketbell.in`,
    phone), legal links (Terms/Privacy/Refund/Shipping), copyright.

### /pricing
Explain the model plainly (Razorpay reviewers read this): free + paid courses, course bundles,
prices in ₹, "1 credit = ₹1" referral credits, payments processed securely via Razorpay, GST
note if applicable. No fake numbers — use real/representative pricing, marked clearly.

### /contact
`support@marketbell.in`, business phone, registered address, and a simple mailto contact (no
backend form needed; if a form is wanted, use a mailto or a serverless form later — not required
for launch).

### Legal pages
**Reuse the existing content** from the app repo `docs/`:
- `market-bell/docs/Privacy Policy_Market Bell.docx`
- `market-bell/docs/Terms & Conditions_ Market Bell.docx`
- `market-bell/docs/About us_Market Bell.docx`
Convert to clean web pages. **Add** the two Razorpay-needed pages if not already present:
- **Refund & Cancellation Policy** — state the policy clearly (e.g. course refund window / no
  refund after access, live-session: user-miss = no refund, mentor-cancel = full refund).
- **Shipping/Delivery** — state that Market Bell sells **digital services only** (no physical
  shipping); access is granted instantly in-app after payment.
Every legal page must show the **Yenew legal entity + contact + last-updated date**.

---

## 6. Components to build
- `GlassNav` (sticky, blur, scroll-aware)
- `Hero` (dark, aurora bg, mockup, motion)
- `Section` wrapper (scroll-reveal)
- `GlassCard` (feature/pricing)
- `FeatureGrid`, `Steps`, `MentorCTA`, `Showcase` (device mockups)
- `StoreBadges` (Google Play now; App Store "coming soon")
- `Footer` (legal entity block + links)
- `LegalLayout` (shared layout for /legal/* with a table-of-contents + last-updated)
- `Container`, `Button`, motion primitives.

---

## 7. Non-negotiables / guardrails
- **Responsive** (mobile-first; test 360px → 1440px). Nav collapses to a glass mobile menu.
- **Accessible** — semantic HTML, alt text, color contrast, keyboard nav, `prefers-reduced-motion`.
- **Performance** — Lighthouse ≥ 90; lazy-load images, cap heavy blur on mobile, optimize the
  logo/mockups.
- **SEO/meta** — per-page `<title>`/description, Open Graph + Twitter cards (OG image = logo on
  brand background), favicon = MB logo, `sitemap.xml` + `robots.txt`, canonical URLs.
- **No invented facts** — real Yenew CIN/address/phone or clearly-marked `[pending]` placeholders;
  never fabricate registration numbers or testimonials.
- **No AI/Claude attribution anywhere** (commits, files, footer). Author = Gautam / Yenew.
- Keep the site **in sync with the app brand** (same logo, same indigo).

---

## 8. Repo / file structure
```
website/
  app/
    layout.tsx            (fonts, GlassNav, Footer, metadata)
    page.tsx              (Home)
    about/page.tsx
    features/page.tsx
    pricing/page.tsx
    contact/page.tsx
    legal/
      terms/page.tsx
      privacy/page.tsx
      refund/page.tsx
      shipping/page.tsx
    globals.css
  components/             (GlassNav, Hero, GlassCard, Footer, …)
  content/                (legal text as MDX/TS constants; company details in one config)
  lib/site-config.ts      (SINGLE place for company name, CIN, address, email, phone, links)
  public/                 (logo, favicon, og image, screenshots)
  tailwind.config.ts, next.config.js, package.json, tsconfig.json
  README.md
```
Put **all company/legal details in `lib/site-config.ts`** so they're edited in one place.

---

## 9. Build phases (suggested order)
1. Scaffold Next.js + TS + Tailwind + Framer Motion; set up fonts, colors, `site-config.ts`.
2. `GlassNav` + `Footer` (with the Yenew legal block) + base layout + logo/favicon.
3. Home: Hero → Features → How it works → Mentor → Showcase → CTA.
4. About, Pricing, Contact.
5. Legal pages (port docx content) + Refund + Shipping.
6. Motion polish, responsive pass, SEO/meta, Lighthouse.
7. Commit + push to the repo; deploy on Vercel; attach `marketbell.in`.

---

## 10. Deploy (Vercel + marketbell.in)
1. Push the repo to GitHub.
2. Vercel → New Project → import the repo → framework auto-detected (Next.js) → Deploy.
3. Vercel → Project → **Domains** → add `marketbell.in` (and `www`). Vercel shows DNS records.
4. At **GoDaddy DNS** for marketbell.in, add the records Vercel gives (usually an `A`/`CNAME`
   for apex + `www`). Wait for propagation → HTTPS auto-provisions.
5. Verify all legal pages resolve (needed for Razorpay/store verification):
   `marketbell.in/legal/privacy`, `/legal/terms`, `/legal/refund`, `/legal/shipping`.

---

## 11. Assets checklist (gather before/at build)
- [ ] Logo (light + dark variants) from `market-bell/mobile/assets/branding/` or `docs/`.
- [ ] Favicon + OG image (derive from logo).
- [ ] App screenshots (for mockups) — from the app / store assets.
- [ ] Real company details: CIN, registered address, business phone (from Gautam).
- [ ] Google Play listing URL (once live) for the "Get the app" badge; App Store = "coming soon".

---

## 12. Workflow note (for Gautam)
- This site is a **separate repo** from the app. Open Claude Code in **`…\Yenew\Project\website`**
  for website work, and in **`…\Yenew\Project\market-bell`** for app/backend work. Never open the
  parent `…\Yenew\Project` (it just contains both repos).
