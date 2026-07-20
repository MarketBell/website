import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { mainNav, legalNav } from "@/lib/nav";
import { Logo } from "./Logo";

const { company, contact } = siteConfig;

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white/80">
      <div className="container-mb py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + legal entity block */}
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}. An e-learning and trader community platform
              for market education.
            </p>

            <div className="mt-6 space-y-1.5 text-sm text-white/60">
              <p className="font-semibold text-white/80">
                A product of {company.legalName}
              </p>
              <p>
                <span className="text-white/50">CIN:</span> {company.cin}
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <span>{company.registeredAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-white/40" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                >
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-white/40" />
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="hover:text-white"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>
            Payments processed securely via Razorpay. Market Bell is an
            educational platform — not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
