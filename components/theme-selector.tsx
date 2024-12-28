import { themes } from "@/utils/themes";

type Props = {
  selectedTheme: string;
  onChange: (theme: string) => void;
};

export function ThemeSelector({ selectedTheme, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="theme-select"
        className="font-medium text-neutral-800 dark:text-neutral-200"
      >
        Theme:
      </label>
      <select
        id="theme-select"
        value={selectedTheme}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-1 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
      >
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
