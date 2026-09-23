import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, PageIntro } from "@/components/content";
import data from "@/data/site.json";
import profileImage from "@/assets/foto-profil-dany.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Dany Pratmanto" },
      {
        name: "description",
        content: "Profil Dany Pratmanto, dosen dan software developer di Tegal.",
      },
      { property: "og:title", content: "Tentang Dany Pratmanto" },
      { property: "og:description", content: "Dosen, software developer, dan praktisi teknologi." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        index="05"
        eyebrow="Tentang Saya"
        title="Mengajar dengan logika, membangun dengan kode."
        description="Karier di persimpangan antara dunia akademik dan industri perangkat lunak untuk menghasilkan dampak nyata."
      />

      <section className="site-container grid gap-16 py-20 md:grid-cols-[.65fr_1.35fr] md:items-start">
        {/* Profile Image with natural lighting & active status badge */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Ambient backlight glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent blur-2xl -z-10 opacity-75" />

          {/* Semi-formal photo with natural lighting and rounded modern frame */}
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={profileImage.url || "/foto-profil-dany.webp"}
              alt="Dany Pratmanto"
              className="aspect-[4/5] w-full object-cover object-top contrast-[1.02] brightness-[1.01]"
            />
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

        {/* Profile Bio & Cards */}
        <div>
          <p className="eyebrow">Profile</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {data.profile.name}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saya berprofesi sebagai dosen di Program Studi Teknologi Komputer UBSI Tegal sekaligus
            praktisi dan pengembang perangkat lunak independen. Saya meyakini bahwa pengajaran
            terbaik lahir dari pengalaman nyata di industri, dan kode terbaik lahir dari pemahaman
            metodologis yang kokoh.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Fokus keahlian saya meliputi rekayasa perangkat lunak web modern, arsitektur sistem
            informasi operasional, penambangan data (data mining), dan analisis teks (text
            analytics). Di kampus, saya membimbing mahasiswa agar siap menghadapi standar industri;
            di luar kampus, saya membantu organisasi dan pelaku usaha membangun sistem digital yang
            efisien serta andal.
          </p>

          {/* Academic & Professional Stats Cards (No 1px grid, elevated cards) */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm dark:bg-card/85">
              <p className="eyebrow">Institusi</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {data.profile.institution}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm dark:bg-card/85">
              <p className="eyebrow">Program Studi</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {data.profile.department}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm dark:bg-card/85">
              <p className="eyebrow">SINTA ID Kemdiktisaintek</p>
              <a
                href={data.profile.sintaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {data.profile.sinta} <ArrowUpRight className="size-3.5" />
              </a>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm dark:bg-card/85">
              <p className="eyebrow">Bidang Keahlian</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {data.profile.fields.join(" · ")}
              </p>
            </div>
          </div>

          <h3 className="mt-12 font-display text-xl font-semibold">Fokus kerja & Kompetensi</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Pengembangan Web & Aplikasi",
              "Sistem Informasi Manajemen",
              "Data Mining & Machine Learning",
              "Text Analytics & NLP",
              "Cloud Deployment & VPS",
              "Pendampingan Skripsi & Riset",
            ].map((item) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-3.5 shadow-2xs dark:bg-card/85"
                key={item}
              >
                <div className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <CheckCircle2 className="size-3.5" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-10 rounded-xl shadow-md">
            <Link to="/portfolio">
              Lihat portfolio proyek <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
