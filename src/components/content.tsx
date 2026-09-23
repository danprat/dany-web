import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Globe,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/site.json";

export function BrowserFrame({
  src,
  alt,
  url,
  category,
}: {
  src: string;
  alt: string;
  url?: string;
  category?: string;
}) {
  const displayHost = url ? url.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : "";

  return (
    <div className="group/frame overflow-hidden rounded-xl border border-border/70 bg-card shadow-md transition-all duration-300 group-hover:shadow-xl dark:shadow-black/30">
      {/* Modern Browser Chrome / Top Bar */}
      <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/60 px-3.5 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/80 dark:bg-red-500/70" />
          <span className="size-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/70" />
        </div>
        {displayHost ? (
          <div className="flex max-w-[68%] items-center gap-1.5 truncate rounded-md bg-background/85 px-3 py-0.5 font-mono text-[11px] text-muted-foreground ring-1 ring-border/50 shadow-2xs">
            <Lock className="size-2.5 text-emerald-500 shrink-0" />
            <span className="truncate">{displayHost}</span>
          </div>
        ) : category ? (
          <span className="font-mono text-[11px] text-muted-foreground">{category}</span>
        ) : null}
        <div className="w-9" />
      </div>

      {/* Real High-Resolution Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-[1.03]"
        />
        {/* Subtle glass overlay highlight */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: { label: string; to: string };
}) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.6fr] md:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-4">{title}</h2>
      </div>
      <div className="md:justify-self-end md:text-right">
        {copy && <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{copy}</p>}
        {action && (
          <Button asChild variant="link" className="mt-3 px-0 font-semibold">
            <Link to={action.to}>
              {action.label} <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const projects = limit ? data.projects.slice(0, limit) : data.projects;
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => {
        const imageSrc = (project as { image?: string }).image || `/projects/${project.slug}.jpg`;
        return (
          <article
            key={project.slug}
            className={`group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-xl dark:bg-card/85 ${
              index === 0 && !limit ? "md:col-span-2" : ""
            }`}
          >
            <div>
              <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="block">
                <BrowserFrame
                  src={imageSrc}
                  alt={`Tangkapan layar proyek ${project.title}`}
                  url={project.url}
                  category={project.category}
                />
              </Link>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
                    <Link to="/portfolio/$slug" params={{ slug: project.slug }}>
                      {project.title}
                    </Link>
                  </h3>
                </div>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  className="icon-link shrink-0"
                  aria-label={`Detail proyek ${project.title}`}
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/40 pt-4">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {data.services.map((service) => (
        <article
          key={service.number}
          className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:bg-card/85"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="tag">{service.group}</span>
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                /{service.number}
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm">
              {service.features.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-foreground/90">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5 text-sm">
            <span className="font-mono text-xs uppercase text-muted-foreground">Model Biaya</span>
            <span className="font-semibold text-foreground">{service.price}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function LatestMaterials({ limit = 4 }: { limit?: number }) {
  const sessions = data.courses
    .flatMap((course) =>
      course.sessions.map((session) => ({
        ...session,
        course: course.title,
        slug: course.slug,
      })),
    )
    .slice(0, limit);

  return (
    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card p-3 shadow-sm sm:p-4 dark:bg-card/85">
      {sessions.map((item) => (
        <Link
          key={`${item.slug}-${item.meeting}`}
          to="/materi/$slug"
          params={{ slug: item.slug }}
          className="group grid gap-3 rounded-xl p-4 transition-colors hover:bg-muted/50 sm:grid-cols-[1.2fr_2fr_auto] sm:items-center"
        >
          <div>
            <p className="eyebrow">{item.course}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Pertemuan {String(item.meeting).padStart(2, "0")}
            </p>
          </div>
          <h3 className="font-display text-base font-semibold transition-colors group-hover:text-primary">
            {item.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{item.updated}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ArticleGrid({ limit }: { limit?: number }) {
  const articles = limit ? data.articles.slice(0, limit) : data.articles;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {articles.map((article, index) => (
        <article
          key={article.slug}
          className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg dark:bg-card/85"
        >
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="tag">{article.category}</span>
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            </div>
            <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
              <Link to="/articles/$slug" params={{ slug: article.slug }}>
                {article.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {article.date}
            </span>
            <span>{article.readTime}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="site-container page-intro">
      <div className="grid gap-8 md:grid-cols-[.3fr_1fr]">
        <div>
          <span className="font-mono text-xs font-semibold text-primary">{index}</span>
          <p className="eyebrow mt-3">{eyebrow}</p>
        </div>
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="site-container relative grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="eyebrow text-primary-foreground/75 font-mono">Konsultasi & Kolaborasi</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Siap mewujudkan sistem digital atau menuntaskan riset Anda?
          </h2>
          <p className="mt-4 text-base text-primary-foreground/85 max-w-xl leading-relaxed">
            Mari diskusikan kebutuhan Anda secara spesifik. Kita susun solusi teknis dan langkah
            eksekusi yang paling efektif serta terukur.
          </p>
        </div>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="rounded-xl shadow-lg font-semibold"
        >
          <Link to="/contact">
            Mulai Diskusi <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function CourseCard({ course }: { course: (typeof data.courses)[number] }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:bg-card/85">
      <div>
        <div className="flex items-center justify-between">
          <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="size-5" />
          </div>
          <span className="tag">{course.semester}</span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
          <Link to="/materi/$slug" params={{ slug: course.slug }}>
            {course.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-4 text-xs">
        <span className="text-muted-foreground">
          {course.count} materi · {course.updated}
        </span>
        <Link
          to="/materi/$slug"
          params={{ slug: course.slug }}
          className="flex items-center gap-1 font-semibold text-primary hover:underline"
        >
          Buka materi <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

export function ExternalProjectLink({ url }: { url: string }) {
  return (
    <Button asChild size="lg" className="rounded-xl">
      <a href={url} target="_blank" rel="noreferrer">
        Kunjungi website <ExternalLink className="size-4" />
      </a>
    </Button>
  );
}
