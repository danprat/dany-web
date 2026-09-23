import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CourseCard, PageIntro } from "@/components/content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import data from "@/data/site.json";

export const Route = createFileRoute("/materi/")({
  head: () => ({
    meta: [
      { title: "Materi Kuliah & Knowledge Base — Dany Pratmanto" },
      {
        name: "description",
        content:
          "Materi perkuliahan terstruktur berdasarkan mata kuliah, topik, dan pertemuan semester aktif.",
      },
      { property: "og:title", content: "Materi Kuliah — Dany Pratmanto" },
      {
        property: "og:description",
        content: "Knowledge base perkuliahan dan materi akademik Dany Pratmanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Semua");

  const filtered = useMemo(
    () =>
      data.courses.filter((course) => {
        const haystack = [
          course.title,
          course.description,
          ...course.sessions.flatMap((s) => [s.title, s.type, `Pertemuan ${s.meeting}`]),
        ]
          .join(" ")
          .toLowerCase();
        const typeMatch = type === "Semua" || course.sessions.some((s) => s.type === type);
        return haystack.includes(query.toLowerCase()) && typeMatch;
      }),
    [query, type],
  );

  return (
    <>
      <PageIntro
        index="03"
        eyebrow="Knowledge Base & Perkuliahan"
        title="Belajar terstruktur, aplikatif, dan langsung ke inti."
        description="Akses modul perkuliahan, slide presentasi, panduan praktikum, dan tugas akademik untuk mendukung proses belajar yang mandiri dan terarah."
      />

      <section className="sticky top-18 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="site-container flex flex-col gap-3.5 py-4 md:flex-row md:items-center">
          <label className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari mata kuliah, materi, atau pertemuan..."
              className="h-11 rounded-xl pl-10 text-sm shadow-xs"
            />
            <span className="sr-only">Cari materi</span>
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
            {["Semua", "Materi", "Tugas", "PDF", "PPT", "Referensi"].map((item) => (
              <Button
                key={item}
                variant={type === item ? "default" : "outline"}
                size="sm"
                onClick={() => setType(item)}
                className="shrink-0 rounded-lg shadow-2xs"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="eyebrow">{filtered.length} mata kuliah ditemukan</p>
          {(query || type !== "Semua") && (
            <Button
              variant="link"
              onClick={() => {
                setQuery("");
                setType("Semua");
              }}
              className="text-xs font-semibold"
            >
              Reset filter
            </Button>
          )}
        </div>

        {filtered.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border/60 bg-card py-20 text-center shadow-sm dark:bg-card/85">
            <p className="font-display text-2xl font-semibold">Materi tidak ditemukan</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Coba kata kunci pencarian lain atau pilih filter kategori "Semua".
            </p>
          </div>
        )}
      </section>
    </>
  );
}
