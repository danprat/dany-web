import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid, ContactBand, PageIntro } from "@/components/content";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Artikel & Catatan Rekayasa — Dany Pratmanto" },
      {
        name: "description",
        content:
          "Tulisan praktis seputar rekayasa perangkat lunak, arsitektur MVP, dan metodologi riset sistem informasi.",
      },
      { property: "og:title", content: "Artikel & Catatan Rekayasa — Dany Pratmanto" },
      {
        property: "og:description",
        content:
          "Refleksi teknis dari ruang kerja software engineering dan ruang kelas perkuliahan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesPage,
});
function ArticlesPage() {
  return (
    <>
      <PageIntro
        index="04"
        eyebrow="Artikel & Catatan Praktisi"
        title="Catatan rekayasa perangkat lunak & riset komputasi."
        description="Refleksi praktis dari proyek nyata dan ruang kelas: mulai dari arsitektur MVP yang sehat hingga batasan riset sistem informasi yang terukur."
      />
      <section className="site-container py-20">
        <ArticleGrid />
      </section>
      <ContactBand />
    </>
  );
}
