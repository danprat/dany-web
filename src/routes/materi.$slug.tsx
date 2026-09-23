import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/site.json";

export const Route = createFileRoute("/materi/$slug")({
  loader: ({ params }) => {
    const course = data.courses.find((item) => item.slug === params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Materi Kuliah Dany Pratmanto`
          : "Materi tidak ditemukan",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Detail materi kuliah.",
      },
      {
        property: "og:title",
        content: loaderData?.title ?? "Materi tidak ditemukan",
      },
      {
        property: "og:description",
        content: loaderData?.description ?? "Detail materi kuliah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursePage,
});

function CoursePage() {
  const course = Route.useLoaderData();

  return (
    <>
      <section className="site-container py-14 sm:py-16">
        <Button
          asChild
          variant="ghost"
          className="-ml-3 rounded-lg text-muted-foreground hover:text-foreground"
        >
          <Link to="/materi">
            <ArrowLeft className="size-4" /> Semua mata kuliah
          </Link>
        </Button>

        <div className="mt-10 grid gap-10 md:grid-cols-[.3fr_1fr]">
          <div>
            <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="size-6" />
            </div>
            <p className="eyebrow mt-4">{course.semester}</p>
          </div>
          <div>
            <h1 className="page-title">{course.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {course.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-xs text-muted-foreground font-mono">
              <span className="rounded-md bg-muted px-2.5 py-1 text-foreground/80">
                {course.count} materi tersedia
              </span>
              <span className="rounded-md bg-muted px-2.5 py-1 text-foreground/80">
                Terakhir diperbarui {course.updated}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 transition-colors dark:bg-card/30">
        <div className="site-container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Daftar Pertemuan Perkuliahan</h2>
            <span className="eyebrow">Silabus Aktif</span>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-6 shadow-sm divide-y divide-border/50 dark:bg-card/85">
            {course.sessions.map((session) => (
              <article
                key={session.meeting}
                className="grid gap-4 py-6 first:pt-2 last:pb-2 md:grid-cols-[.25fr_1fr_auto] md:items-center"
              >
                <div>
                  <p className="font-mono text-xs font-semibold text-primary">
                    PERTEMUAN {String(session.meeting).padStart(2, "0")}
                  </p>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {session.updated}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{session.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {session.summary}
                  </p>
                  <span className="tag mt-3">{session.type}</span>
                </div>
                <Button
                  variant="outline"
                  className="rounded-xl shadow-2xs"
                  aria-label={`Buka ${session.title}`}
                >
                  <FileText className="size-4" /> Buka Modul <ArrowRight className="size-3.5" />
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-border/80 bg-card/60 p-5 text-sm text-muted-foreground shadow-2xs dark:bg-card/50">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Download className="size-4 text-primary" />
              <span>Informasi Akses Berkas</span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Materi perkuliahan ini disinkronkan langsung dengan repositori pengajaran Dany
              Pratmanto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
