import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import data from "@/data/site.json";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="site-container flex h-18 items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Dany Pratmanto, halaman utama"
          >
            <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm transition-transform group-hover:-rotate-3">
              DP
            </span>
            <div className="hidden sm:block">
              <span className="block text-sm font-semibold leading-tight">Dany Pratmanto</span>
              <span className="block text-[11px] text-muted-foreground">Dosen & Developer</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
            {data.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${path === item.to ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex rounded-lg">
              <Link to="/contact">
                Mulai Diskusi <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav
            className="site-container grid gap-1.5 border-t border-border py-4 lg:hidden"
            aria-label="Navigasi mobile"
          >
            {data.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  path === item.to
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-muted text-foreground/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle showLabel />
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm"
            >
              Mulai Diskusi Proyek
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/60 bg-muted/40 text-foreground transition-colors dark:bg-card/40">
        <div className="site-container grid gap-12 py-16 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm">
                DP
              </span>
              <p className="font-display text-2xl font-semibold">Dany Pratmanto</p>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
              Dosen Teknologi Komputer & Software Developer di Tegal, Indonesia. Membangun platform
              digital berstandar industri dan mendampingi riset komputasi terapan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="grid content-start gap-2.5">
              <p className="eyebrow mb-1">Navigasi</p>
              {data.navigation.slice(1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid content-start gap-2.5">
              <p className="eyebrow mb-1">Kontak & Jaringan</p>
              <a
                href={`mailto:${data.profile.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a
                href={`https://wa.me/${data.profile.whatsapp}?text=${encodeURIComponent(data.profile.whatsappPrefill)}`}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={data.profile.sintaUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                SINTA Kemdiktisaintek
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="site-container flex flex-col gap-2 border-t border-border/40 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:items-center">
          <span>© 2026 Dany Pratmanto · Dosen & Software Developer</span>
          <span>Menghubungkan ketelitian akademik dengan solusi perangkat lunak nyata.</span>
        </div>
      </footer>
    </div>
  );
}
