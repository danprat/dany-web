import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserFrame, ContactBand, ExternalProjectLink } from "@/components/content";
import data from "@/data/site.json";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = data.projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Portfolio Dany Pratmanto`
          : "Proyek tidak ditemukan",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Detail proyek.",
      },
      {
        property: "og:title",
        content: loaderData?.title ?? "Proyek tidak ditemukan",
      },
      {
        property: "og:description",
        content: loaderData?.description ?? "Detail proyek.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const imageSrc = (project as { image?: string }).image || `/projects/${project.slug}.jpg`;

  return (
    <>
      {/* Intro section */}
      <section className="site-container py-14 sm:py-16">
        <Button
          asChild
          variant="ghost"
          className="-ml-3 rounded-lg text-muted-foreground hover:text-foreground"
        >
          <Link to="/portfolio">
            <ArrowLeft className="size-4" /> Kembali ke portfolio
          </Link>
        </Button>

        <div className="mt-10 grid gap-10 md:grid-cols-[.3fr_1fr]">
          <div>
            <span className="font-mono text-xs font-semibold text-primary">
              PROJECT / {project.number}
            </span>
            <p className="eyebrow mt-3">{project.category}</p>
          </div>
          <div>
            <h1 className="page-title">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ExternalProjectLink url={project.url} />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proyek: High resolution screenshot with modern browser frame */}
      <section className="bg-muted/30 py-16 transition-colors dark:bg-card/30">
        <div className="site-container max-w-5xl">
          <BrowserFrame
            src={imageSrc}
            alt={`Screenshot ${project.title}`}
            url={project.url}
            category={project.category}
          />
        </div>
      </section>

      {/* Case Study Cards (Card elevation, no 1px grid) */}
      <section className="site-container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Problem", project.problem],
            ["Architecture & Stack", project.architecture],
            ["Impact", project.impact],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-card/85"
            >
              <p className="eyebrow">{title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-7 sm:p-8 shadow-sm dark:bg-card/85">
          <p className="eyebrow">Stack / Capability</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
