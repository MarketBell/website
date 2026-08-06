import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

/**
 * Landing page for a shared live-session link.
 *
 * The app shares `https://marketbell.in/live/<id>`. On a phone with the app
 * installed Android opens the app instead of this page; everyone else lands here,
 * and before this existed they got a 404.
 *
 * Detail comes from a deliberately public API endpoint that returns poster-level
 * information only — title, host, time, price. It carries no room identifier and no
 * token, and nothing on this page grants access: joining still goes through the app,
 * which checks registration and payment per user. A page that could let someone in
 * would hand paid sessions away for free.
 */

const API = "https://api.marketbell.in/api/v1";

type PublicSession = {
  id: string;
  title: string;
  description: string;
  mentorName: string;
  scheduledAt: string;
  durationMinutes: number;
  price: number;
  isFree: boolean;
  status: string;
  seatsLeft: number | null;
};

async function getSession(id: string): Promise<PublicSession | null> {
  // Not cached: a session's status changes during the day, and a stale "starting
  // soon" on a finished session is worse than a slightly slower page.
  try {
    const res = await fetch(`${API}/live/${encodeURIComponent(id)}/public`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as PublicSession;
  } catch {
    return null;
  }
}

function formatWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  // Sessions are scheduled and attended in India; showing the viewer's own zone
  // would put a Delhi mentor's 7pm class at a confusing hour for nobody's benefit.
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(d);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) {
    return {
      title: "Live session",
      description: "Live trading sessions on Market Bell.",
    };
  }
  const when = formatWhen(session.scheduledAt);
  return {
    title: session.title,
    // This is the text that appears when the link is pasted into WhatsApp, which is
    // where most of these links will actually be opened.
    description: `A live session with ${session.mentorName}${when ? ` on ${when} IST` : ""}. ${
      session.isFree ? "Free to join" : `₹${session.price}`
    } on Market Bell.`,
    alternates: { canonical: `/live/${id}` },
    openGraph: {
      title: session.title,
      description: `Live with ${session.mentorName}${when ? ` · ${when} IST` : ""}`,
      type: "website",
    },
  };
}

export default async function LiveSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) notFound();

  const when = formatWhen(session.scheduledAt);
  const over = session.status === "ended" || session.status === "cancelled";
  const live = session.status === "live";

  const facts: Array<{ label: string; value: string }> = [
    { label: "Host", value: session.mentorName },
    ...(when ? [{ label: "When", value: `${when} IST` }] : []),
    { label: "Length", value: `${session.durationMinutes} minutes` },
    {
      label: "Price",
      value: session.isFree ? "Free" : `₹${session.price} (GST inclusive)`,
    },
    ...(session.seatsLeft !== null
      ? [{ label: "Seats left", value: String(session.seatsLeft) }]
      : []),
  ];

  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow={
            session.status === "cancelled"
              ? "Session cancelled"
              : over
                ? "Session finished"
                : live
                  ? "Live now"
                  : "Live session"
          }
          title={session.title}
          subtitle={`with ${session.mentorName}`}
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl space-y-8">
          <Reveal>
            <GlassCard className="p-6">
              <dl className="space-y-4">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-sm font-medium text-navy/60">
                      {f.label}
                    </dt>
                    <dd className="text-right font-semibold text-navy">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>

          {session.description ? (
            <Reveal>
              <h2 className="text-xl font-bold text-navy">About this session</h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-navy/75">
                {session.description}
              </p>
            </Reveal>
          ) : null}

          <Reveal>
            <div className="rounded-2xl bg-navy/5 p-6">
              {over ? (
                <>
                  <h2 className="text-lg font-bold text-navy">
                    {session.status === "cancelled"
                      ? "This session was cancelled"
                      : "This session has ended"}
                  </h2>
                  <p className="mt-2 text-navy/70">
                    Get the app to see what is coming up next.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-navy">
                    Joining is done in the app
                  </h2>
                  <p className="mt-2 text-navy/70">
                    {session.isFree
                      ? "Install Market Bell, open this link again, and reserve your seat."
                      : "Install Market Bell, open this link again, and book your seat."}{" "}
                    Already have it? Reopening this link will take you straight to
                    the session.
                  </p>
                </>
              )}
              <div className="mt-5 flex flex-wrap gap-3">
                {siteConfig.stores.googlePlay.available ? (
                  <Button href={siteConfig.stores.googlePlay.url}>
                    Get the app
                  </Button>
                ) : (
                  <Button href="/">Explore Market Bell</Button>
                )}
                <Button href="/features" variant="secondary">
                  See what else is inside
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
