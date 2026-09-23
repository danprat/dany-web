import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/site.json";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = data.articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.title} — Dany Pratmanto` : "Artikel tidak ditemukan",
      },
      {
        name: "description",
        content: loaderData?.excerpt ?? "Artikel tidak ditemukan.",
      },
      {
        property: "og:title",
        content: loaderData?.title ?? "Artikel tidak ditemukan",
      },
      {
        property: "og:description",
        content: loaderData?.excerpt ?? "Artikel tidak ditemukan.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <article>
      <header className="site-container max-w-4xl py-14 sm:py-20">
        <Button
          asChild
          variant="ghost"
          className="-ml-3 mb-10 rounded-lg text-muted-foreground hover:text-foreground"
        >
          <Link to="/articles">
            <ArrowLeft className="size-4" /> Semua artikel
          </Link>
        </Button>
        <div>
          <span className="tag">{article.category}</span>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,4.6rem)] font-bold tracking-tight text-foreground leading-[1.1]">
            {article.title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {article.readTime} estimasi baca
            </span>
          </div>
        </div>
      </header>

      <div className="bg-muted/30 py-12 transition-colors sm:py-16 dark:bg-card/30">
        <div className="site-container max-w-3xl rounded-2xl border border-border/60 bg-card p-7 sm:p-12 shadow-sm dark:bg-card/85">
          <p className="text-xl font-normal leading-relaxed text-foreground">{article.excerpt}</p>
          <hr className="my-10 border-border/60" />
          {article.content.map((section) => (
            <section className="mt-10 first:mt-0" key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {"bullets" in section && section.bullets ? (
                <ul className="mt-5 grid gap-3 text-base text-muted-foreground">
                  {section.bullets.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
