import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

/**
 * Landing page for a shared course link.
 *
 * The app's share button produces `https://www.marketbell.in/course/<id>`. With the
 * app installed Android opens it there; everyone else lands here. The path matches
 * the in-app route so a tapped link needs no alias.
 *
 * `GET /courses/:id` is public by design — the catalogue has to be browsable before
 * purchase — and since 5 August it only signs a lesson's media for someone actually
 * entitled to it. So this page can show the curriculum as a table of contents while
 * the lessons themselves stay locked, which is exactly what a sales page wants.
 */

const API = "https://api.marketbell.in/api/v1";

type Lesson = {
  title: string;
  type?: string;
  durationMinutes?: number;
  isFreePreview?: boolean;
};

type Course = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  categoryLabel?: string;
  price: number;
  language?: string;
  level?: string;
  avgRating?: number;
  reviewCount?: number;
  enrolledCount?: number;
  totalDurationMinutes?: number;
  validityDays?: number | null;
  status?: string;
  mentor?: { name?: string; yearsOfExperience?: number; verified?: boolean };
  sections?: Array<{ title?: string; lessons?: Lesson[] }>;
};

async function getCourse(id: string): Promise<Course | null> {
  // Not cached: price, curriculum and availability all change, and a stale sales
  // page is worse than a slightly slower one.
  try {
    const res = await fetch(`${API}/courses/${encodeURIComponent(id)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as Course;
  } catch {
    return null;
  }
}

function priceLabel(price: number): string {
  return price <= 0 ? "Free" : `₹${price.toLocaleString("en-IN")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) {
    return { title: "Course", description: "Online courses on Market Bell." };
  }
  const by = course.mentor?.name ? ` by ${course.mentor.name}` : "";
  return {
    title: course.title,
    // This is what shows when the link is pasted into WhatsApp, which is where
    // most of these links will be opened.
    description:
      (course.description || `A course${by} on Market Bell.`).slice(0, 200),
    alternates: { canonical: `/course/${id}` },
    openGraph: {
      title: course.title,
      description: `${priceLabel(course.price)}${by} · Market Bell`,
      type: "website",
      ...(course.thumbnailUrl?.startsWith("http")
        ? { images: [{ url: course.thumbnailUrl }] }
        : {}),
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();

  const lessons = (course.sections ?? []).flatMap((s) => s.lessons ?? []);
  const hours = Math.floor((course.totalDurationMinutes ?? 0) / 60);
  const minutes = (course.totalDurationMinutes ?? 0) % 60;

  const facts: Array<{ label: string; value: string }> = [
    ...(course.mentor?.name ? [{ label: "Mentor", value: course.mentor.name }] : []),
    { label: "Price", value: `${priceLabel(course.price)} (GST inclusive)` },
    ...(lessons.length ? [{ label: "Lessons", value: String(lessons.length) }] : []),
    ...(course.totalDurationMinutes
      ? [
          {
            label: "Length",
            value: hours ? `${hours}h ${minutes}m` : `${minutes}m`,
          },
        ]
      : []),
    ...(course.level ? [{ label: "Level", value: course.level }] : []),
    ...(course.language ? [{ label: "Language", value: course.language }] : []),
    ...(course.validityDays
      ? [{ label: "Access", value: `${course.validityDays} days` }]
      : [{ label: "Access", value: "Lifetime" }]),
  ];

  return (
    <>
      <Section tone="dark" className="pt-28">
        <SectionHeading
          dark
          eyebrow={course.categoryLabel || "Course"}
          title={course.title}
          subtitle={
            course.mentor?.name ? `with ${course.mentor.name}` : undefined
          }
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
                    <dt className="text-sm font-medium text-navy/60">{f.label}</dt>
                    <dd className="text-right font-semibold text-navy">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>

          {course.description ? (
            <Reveal>
              <h2 className="text-xl font-bold text-navy">About this course</h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-navy/75">
                {course.description}
              </p>
            </Reveal>
          ) : null}

          {lessons.length ? (
            <Reveal>
              <h2 className="text-xl font-bold text-navy">What is inside</h2>
              <ul className="mt-3 space-y-2">
                {lessons.slice(0, 12).map((l, i) => (
                  <li
                    key={`${l.title}-${i}`}
                    className="flex items-baseline justify-between gap-4 border-b border-outline/60 pb-2 text-navy/80"
                  >
                    <span>{l.title}</span>
                    <span className="shrink-0 text-sm text-navy/50">
                      {l.isFreePreview
                        ? "Free preview"
                        : l.durationMinutes
                          ? `${l.durationMinutes}m`
                          : ""}
                    </span>
                  </li>
                ))}
              </ul>
              {lessons.length > 12 ? (
                <p className="mt-3 text-sm text-navy/60">
                  …and {lessons.length - 12} more.
                </p>
              ) : null}
            </Reveal>
          ) : null}

          <Reveal>
            <div className="rounded-2xl bg-navy/5 p-6">
              <h2 className="text-lg font-bold text-navy">
                Enrol in the Market Bell app
              </h2>
              <p className="mt-2 text-navy/70">
                Install the app, open this link again, and you can enrol from the
                course page. Already have it? Reopening this link takes you straight
                to the course.
              </p>
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
