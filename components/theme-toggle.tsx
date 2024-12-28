import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <label className="font-medium text-neutral-800 dark:text-neutral-200">
          Mode:
        </label>
        <div className="w-[100px] h-[34px] bg-neutral-200 dark:bg-neutral-700 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="theme-toggle"
        className="font-medium text-neutral-800 dark:text-neutral-200"
      >
        Mode:
      </label>
      <select
        id="theme-toggle"
        value={resolvedTheme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-3 py-1 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-sky-500 dark:hover:border-sky-400 transition-colors"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
