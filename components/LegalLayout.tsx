import { Fragment } from "react";
import { CalendarClock } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";
import type { LegalDoc } from "@/content/legal";

function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Linkify the configured contact email + phone inside a plain-text paragraph
 * without dangerouslySetInnerHTML — splits on the known tokens and renders
 * anchors as React nodes, so there is no HTML injection surface.
 */
function LinkifiedText({ text }: { text: string }) {
  const { email, phone, phoneHref } = siteConfig.contact;
  const tokens = [
    { match: email, node: (
      <a key="email" href={`mailto:${email}`} className="font-medium text-indigo hover:underline">
        {email}
      </a>
    ) },
    { match: phone, node: (
      <a key="phone" href={`tel:${phoneHref}`} className="font-medium text-indigo hover:underline">
        {phone}
      </a>
    ) },
  ];

  const parts: React.ReactNode[] = [text];
  tokens.forEach(({ match, node }) => {
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (typeof part !== "string" || !part.includes(match)) continue;
      const [before, ...after] = part.split(match);
      parts.splice(i, 1, before, node, after.join(match));
      i += 2;
    }
  });

  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}

export function LegalLayout({ doc }: { doc: LegalDoc }) {
  const { company, contact, legalLastUpdated } = siteConfig;

  return (
    <>
      {/* Header band */}
      <section className="bg-navy-deep pt-28 text-white">
        <Container className="py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-light">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <CalendarClock size={16} />
            Last updated: {legalLastUpdated}
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="On this page">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                On this page
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {doc.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="text-navy/60 hover:text-indigo"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <article className="max-w-3xl">
            <p className="text-lg leading-relaxed text-navy/75">{doc.intro}</p>

            <div className="mt-10 space-y-10">
              {doc.sections.map((s) => (
                <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-navy">{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-navy/75">
                      <LinkifiedText text={p} />
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-3 space-y-2">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed text-navy/75">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
                          <span>
                            <LinkifiedText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Legal entity block */}
            <div className="mt-14 rounded-3xl border border-outline bg-white p-6 shadow-glass">
              <h2 className="text-lg font-bold text-navy">Company details</h2>
              <dl className="mt-4 space-y-2 text-sm text-navy/75">
                <div>
                  <dt className="inline font-semibold text-navy/60">Operated by: </dt>
                  <dd className="inline">{company.legalName}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy/60">CIN: </dt>
                  <dd className="inline">{company.cin}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy/60">Registered office: </dt>
                  <dd className="inline">{company.registeredAddress}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy/60">Email: </dt>
                  <dd className="inline">
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-indigo hover:underline"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy/60">Phone: </dt>
                  <dd className="inline">
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="font-medium text-indigo hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </Container>
    </>
  );
}
