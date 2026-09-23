import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro, ServiceGrid } from "@/components/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan & Solusi — Dany Pratmanto" },
      {
        name: "description",
        content:
          "Layanan pengembangan website modern, sistem informasi, konsultasi teknologi, dan pendampingan akademik.",
      },
      { property: "og:title", content: "Layanan — Dany Pratmanto" },
      {
        property: "og:description",
        content: "Pengembangan solusi digital dan konsultasi teknologi yang praktis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        index="02"
        eyebrow="Layanan & Rekayasa"
        title="Solusi terukur dengan standar rekayasa modern."
        description="Dari perancangan web performa tinggi hingga sistem informasi operasional dan pendampingan riset teknologi komputasi."
      />

      <section className="site-container py-20">
        <ServiceGrid />

        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-6 sm:p-8 shadow-sm dark:bg-card/85">
          <p className="eyebrow">Prinsip Kerja & Skema Investasi</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Setiap kerja sama diawali dengan sesi pemetaan kebutuhan dan alur proses bisnis. Skema
            investasi ditentukan secara transparan berdasarkan kompleksitas fungsionalitas,
            integrasi sistem, dan target rilis—tanpa komitmen tersembunyi.
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
