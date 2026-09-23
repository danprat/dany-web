import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro, ProjectGrid } from "@/components/content";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio Proyek Digital — Dany Pratmanto" },
      {
        name: "description",
        content:
          "Kompilasi proyek sistem informasi manajemen, platform penerbitan, dan infrastruktur web yang aktif digunakan.",
      },
      { property: "og:title", content: "Portfolio Proyek Digital — Dany Pratmanto" },
      {
        property: "og:description",
        content: "Platform digital nyata yang dirancang dan diimplementasikan oleh Dany Pratmanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageIntro
        index="01"
        eyebrow="Portfolio Terpilih"
        title="Perangkat lunak nyata untuk masalah nyata."
        description="Platform web, sistem informasi manajemen, dan infrastruktur digital yang dirancang untuk efisiensi operasional, keamanan data, dan kehandalan jangka panjang."
      />
      <section className="site-container py-20">
        <ProjectGrid />
      </section>
      <ContactBand />
    </>
  );
}
