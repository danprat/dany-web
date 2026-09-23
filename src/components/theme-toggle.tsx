import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {
        // Ignore storage access errors
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {
        // Ignore storage access errors
      }
    }
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={showLabel ? "default" : "icon"}
        className="rounded-lg text-muted-foreground"
        aria-label="Ubah tema tampilan"
      >
        <span className="size-4" />
        {showLabel && <span>Mode Tampilan</span>}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      className={`rounded-lg transition-colors hover:text-foreground ${
        showLabel ? "w-full justify-start gap-2.5 px-3" : "text-muted-foreground"
      }`}
      aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      title={isDark ? "Mode Terang" : "Mode Gelap"}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="size-4 text-slate-700 transition-transform duration-300 hover:-rotate-12 dark:text-slate-300" />
      )}
      {showLabel && (
        <span className="text-sm font-medium">
          {isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
        </span>
      )}
    </Button>
  );
}
