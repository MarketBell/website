# Market Bell — Website

Marketing and legal website for **Market Bell**, an e-learning and trader
community platform. Market Bell is a product of **Yenew Technologies Private
Limited**.

Built as a premium, animated, responsive site and used for brand/marketing and
for business verification (D-U-N-S, Google Play, Apple Developer, and Razorpay
go-live) — it discloses the operating legal entity and hosts all required policy
pages.

- **Live domain (target):** https://marketbell.in
- **Author:** Gautam Lasgotra

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router) + TypeScript
- Tailwind CSS (glassmorphism design system)
- Framer Motion (scroll reveals, hero motion — respects `prefers-reduced-motion`)
- `next/font` (Inter, self-hosted) · `next/image` · `lucide-react` icons
- No backend, database, or auth — the site is content-only.

## Getting started (local)

Requires **Node 20+** and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # eslint
```

## Project structure

```
app/                 App Router pages
  page.tsx           Home
  about/ features/ pricing/ contact/
  legal/{terms,privacy,refund,shipping}/
  layout.tsx         Root layout (fonts, nav, footer, metadata, JSON-LD)
  sitemap.ts robots.ts opengraph-image.tsx
components/           GlassNav, Hero, Footer, GlassCard, LegalLayout, …
content/              features + legal copy (typed constants)
lib/site-config.ts    SINGLE source of truth for all company/legal details
public/               logo, app icon, app screenshots
middleware.ts         per-request Content-Security-Policy (nonce-based)
next.config.js        security headers + build config
vercel.json           mirrored security headers for Vercel
```

## Editing company / contact details

All company, legal, and contact values live in **`lib/site-config.ts`** — edit
them there and they update across the footer, every legal page, the contact
page, and structured data. This includes the legal name, CIN, registered office
address, support email, and phone number.

### Before go-live checklist

- [ ] When the app is published, set the Google Play (and later App Store) URLs
      in `lib/site-config.ts` under `stores` (set `available: true` and the
      `url`). The store badges switch from “Coming soon” to real links
      automatically.
- [ ] Confirm the registered office address in `lib/site-config.ts` matches the
      MCA Certificate of Incorporation exactly.
- [ ] Verify the legal pages resolve in production:
      `/legal/privacy`, `/legal/terms`, `/legal/refund`, `/legal/shipping`.

## Security

The site ships with a strict security posture:

- **Content-Security-Policy** — nonce-based, per-request (`middleware.ts`). No
  `'unsafe-inline'` for scripts; `frame-ancestors 'none'`, `object-src 'none'`,
  `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`.
- **HSTS** (2 years, preload), **X-Frame-Options: DENY**,
  **X-Content-Type-Options: nosniff**, **Referrer-Policy**, **Permissions-Policy**
  (camera/mic/geolocation/topics off), **Cross-Origin-Opener-Policy** — set in
  both `next.config.js` and `vercel.json`.
- `X-Powered-By` header disabled.
- No third-party scripts, analytics, or external fonts — everything is
  self-hosted, keeping the CSP tight and avoiding external calls.
- No forms/endpoints — contact is `mailto:` only.
- `npm audit` is clean (0 vulnerabilities) at time of build.

---

## Deploying to Vercel + connecting marketbell.in (GoDaddy)

The site is a standard Next.js app; Vercel auto-detects everything. Do this once.

### 1. Push the code to GitHub

The repository is `https://github.com/MarketBell/website`. Once your changes are
committed:

```bash
git push origin main
```

### 2. Import the project into Vercel

1. Go to https://vercel.com and sign in (you can sign in with GitHub).
2. Click **Add New… → Project**.
3. **Import** the `MarketBell/website` repository.
4. Vercel auto-detects **Next.js** — leave the build settings at their defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output: handled automatically
5. Click **Deploy**. After ~1–2 minutes you get a live URL like
   `website-xxxx.vercel.app`. Open it and confirm the site works.

No environment variables are required.

### 3. Add the custom domain `marketbell.in`

1. In Vercel, open the project → **Settings → Domains**.
2. Add **`marketbell.in`** and also **`www.marketbell.in`**.
3. Vercel will show the exact DNS records to create. Typically:
   - **Apex (`marketbell.in`)** → an **A record** pointing to `76.76.21.21`
     *(use the exact IP Vercel shows you — it can change)*.
   - **`www`** → a **CNAME record** pointing to `cname.vercel-dns.com`.
   Vercel will also let you set the apex as a redirect to `www` or vice-versa —
   choose whichever you prefer (recommend: redirect `www` → apex).

### 4. Add the DNS records at GoDaddy

1. Sign in to https://godaddy.com → **My Products** → find `marketbell.in` →
   **DNS** (Manage DNS).
2. Under **Records**, add / edit to match exactly what Vercel showed:
   - **A** record: Host `@`, Value = the IP from Vercel, TTL default.
     *(Remove GoDaddy’s default parked A record for `@` first if present.)*
   - **CNAME** record: Host `www`, Value `cname.vercel-dns.com`, TTL default.
3. Save. DNS propagation usually takes minutes but can take up to a few hours.

### 5. Verify

- Back in Vercel → **Settings → Domains**, the domains flip to **Valid /
  Verified** once DNS propagates. HTTPS (SSL) is provisioned automatically — no
  action needed.
- Visit `https://marketbell.in` and confirm the padlock (HTTPS) works.
- Confirm the verification-critical pages resolve:
  - `https://marketbell.in/legal/privacy`
  - `https://marketbell.in/legal/terms`
  - `https://marketbell.in/legal/refund`
  - `https://marketbell.in/legal/shipping`

### Future updates

Every push to the `main` branch on GitHub triggers an automatic production
deploy on Vercel. Pull requests get their own preview URLs.

---

© Yenew Technologies Private Limited. All rights reserved.
