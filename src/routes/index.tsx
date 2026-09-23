import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArticleGrid,
  ContactBand,
  LatestMaterials,
  ProjectGrid,
  SectionHeading,
  ServiceGrid,
} from "@/components/content";
import data from "@/data/site.json";
import profileImage from "@/assets/foto-profil-dany.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dany Pratmanto — Dosen & Software Developer" },
      {
        name: "description",
        content:
          "Dosen Teknologi Komputer & Software Developer. Merancang arsitektur sistem informasi handal di industri dan mendampingi riset komputasi terapan.",
      },
      { property: "og:title", content: "Dany Pratmanto — Dosen & Software Developer" },
      {
        property: "og:description",
        content: "Portfolio, layanan teknologi, dan materi kuliah Dany Pratmanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="site-container">
          <div className="max-w-4xl">
            {/* Active collaboration badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/80 px-4 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs">
                Tegal, Indonesia · Available for Projects & Research
              </span>
            </div>

            {/* Headline with comfortable leading-[1.1] */}
            <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5.2rem)] font-bold tracking-tight text-foreground leading-[1.1]">
              Solusi Digital yang <span className="text-primary">Terstruktur.</span>
              <br />
              Riset Akademik yang Tuntas.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <Button asChild size="lg" className="rounded-xl shadow-md font-semibold">
                <Link to="/portfolio">
                  Eksplorasi Portfolio <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl shadow-xs font-semibold"
              >
                <Link to="/contact">
                  Mulai Diskusi <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-2 text-xs text-muted-foreground">
              <ArrowDown className="size-4 animate-bounce" />
              <span>Jelajahi portofolio proyek & modul perkuliahan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Navigator Cards (Card elevation, no harsh 1px grid) */}
      <section className="site-container pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/services"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:bg-card/85"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <BriefcaseBusiness className="size-6" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <p className="eyebrow mt-8">Untuk Klien Bisnis & Organisasi</p>
            <h2 className="mt-2 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
              Saya butuh sistem digital handal
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Website performa tinggi, sistem informasi manajemen, aplikasi operasional, dan
              arsitektur cloud teruji.
            </p>
          </Link>

          <Link
            to="/materi"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:bg-card/85"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <BookOpen className="size-6" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <p className="eyebrow mt-8">Untuk Mahasiswa & Peneliti</p>
            <h2 className="mt-2 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
              Saya butuh modul kuliah & bimbingan
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Materi perkuliahan terstruktur, modul praktikum, referensi skripsi, dan pendampingan
              riset komputasi.
            </p>
          </Link>
        </div>
      </section>

      {/* 01 / Selected Work */}
      <section className="site-container py-20">
        <SectionHeading
          eyebrow="01 / Selected work"
          title="Platform nyata yang bekerja di lapangan."
          copy="Bukan sekadar konsep prototipe. Dirancang dan diimplementasikan untuk kebutuhan operasional, penerbitan, dan layanan publik."
          action={{ label: "Semua portfolio", to: "/portfolio" }}
        />
        <ProjectGrid limit={4} />
      </section>

      {/* 02 / Services */}
      <section className="bg-muted/35 py-24 transition-colors dark:bg-card/30">
        <div className="site-container">
          <SectionHeading
            eyebrow="02 / Services"
            title="Eksekusi presisi dari analisis hingga sistem rilis."
            copy="Metodologi terukur untuk membangun perangkat lunak berkualitas tinggi maupun menyelesaikan tantangan riset komputasi."
            action={{ label: "Detail layanan & lingkup kerja", to: "/services" }}
          />
          <ServiceGrid />
        </div>
      </section>

      {/* 03 / Knowledge Base */}
      <section className="site-container grid gap-12 py-24 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
        <div>
          <div className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
            <BookOpen className="size-6" />
          </div>
          <p className="eyebrow mt-6">03 / Knowledge base</p>
          <h2 className="section-title mt-3">Modul kuliah & basis pengetahuan terkini.</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Disusun sistematis per pertemuan perkuliahan untuk mempercepat pemahaman konsep dan
            kecakapan praktik mahasiswa.
          </p>
          <Button asChild variant="outline" className="mt-7 rounded-xl shadow-xs font-semibold">
            <Link to="/materi">
              Semua materi kuliah <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <LatestMaterials />
      </section>

      {/* 04 / Notes */}
      <section className="bg-muted/35 py-24 transition-colors dark:bg-card/30">
        <div className="site-container">
          <SectionHeading
            eyebrow="04 / Notes"
            title="Wawasan teknis dari ruang kerja dan kelas."
            copy="Prinsip rekayasa perangkat lunak, arsitektur MVP, dan strategi riset sistem informasi."
            action={{ label: "Semua artikel & catatan", to: "/articles" }}
          />
          <ArticleGrid limit={3} />
        </div>
      </section>

      {/* 05 / About with semi-formal natural lighting & active status badge */}
      <section className="site-container grid gap-14 py-24 md:grid-cols-[.5fr_1fr] md:items-center">
        <div className="relative mx-auto w-full max-w-sm">
          {/* Ambient natural backlight glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent blur-2xl -z-10 opacity-75" />

          {/* Semi-formal photo with natural lighting and rounded modern frame */}
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={profileImage.url || "/foto-profil-dany.jpg"}
              alt="Dany Pratmanto"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top contrast-[1.02] brightness-[1.01]"
            />
            {/* Subtle soft gradient scrim at base */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Lencana Status Aktif (Active Status Badge) */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 rounded-full border border-border/80 bg-background/95 px-4 py-2 shadow-lg backdrop-blur-md whitespace-nowrap">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold text-foreground">
              Aktif Mengajar & Menerima Proyek
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow">05 / About</p>
          <h2 className="section-title mt-4">
            Memadukan standar riset akademik dengan rekayasa perangkat lunak nyata.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Sebagai dosen di {data.profile.institution} dan praktisi software aktif, saya memadukan
            standar teori akademik dengan kebutuhan lapangan. Pengalaman di ruang kelas melatih saya
            menguraikan masalah rumit menjadi langkah yang sistematis; pengalaman membangun kode di
            dunia nyata memastikan setiap sistem yang dihasilkan relevan, cepat, dan tahan uji.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {data.profile.fields.map((field) => (
              <span className="tag" key={field}>
                {field}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8 rounded-xl shadow-xs font-semibold">
            <Link to="/about">
              Kenali lebih dekat tentang Dany <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactBand />
    </>
  );
}
