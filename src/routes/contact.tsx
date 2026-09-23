import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/site.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Konsultasi — Dany Pratmanto" },
      {
        name: "description",
        content:
          "Hubungi Dany Pratmanto untuk proyek website, sistem informasi, atau konsultasi akademik.",
      },
      { property: "og:title", content: "Kontak — Dany Pratmanto" },
      {
        property: "og:description",
        content: "Mulai percakapan tentang proyek atau konsultasi teknologi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="site-container py-16 sm:py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="eyebrow">06 / Kontak & Diskusi</p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-tight text-foreground leading-[1.1]">
            Mari diskusikan kebutuhan proyek atau riset Anda.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Punya rencana implementasi sistem, butuh konsultasi arsitektur perangkat lunak, atau
            ingin pendampingan riset komputasi? Mari bahas konteks masalah, prioritas fitur, dan
            solusi teknologi yang paling efektif.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Respon cepat dalam 1×24 jam kerja via WhatsApp & Email profesional
            </span>
          </div>
        </div>

        {/* Elevated Contact Cards (No 1px brutalist grid) */}
        <div className="grid gap-6">
          <a
            href={`https://wa.me/${data.profile.whatsapp}?text=${encodeURIComponent(data.profile.whatsappPrefill)}`}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg dark:bg-card/85"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <MessageCircle className="size-6" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500" />
            </div>
            <p className="eyebrow mt-10">WhatsApp Langsung</p>
            <p className="mt-2 font-display text-2xl font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              +62 897 4041 777
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Saluran tercepat untuk diskusi awal, pengecekan jadwal ketersediaan, atau konsultasi
              singkat.
            </p>
          </a>

          <a
            href={`mailto:${data.profile.email}`}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:bg-card/85"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-6" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <p className="eyebrow mt-10">Email Profesional</p>
            <p className="mt-2 font-display text-xl font-semibold text-foreground break-all group-hover:text-primary transition-colors">
              {data.profile.email}
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Saluran utama untuk pengiriman dokumen TOR, brief teknis sistem, atau korespondensi
              akademik resmi.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
