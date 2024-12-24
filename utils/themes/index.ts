import { ThemeConfig } from "@/types";

import { brutalTheme } from "./brutal";

const themes: Record<string, ThemeConfig> = {
  brutal: brutalTheme,
};

export const getTheme = (theme_name: string = "brutal"): ThemeConfig => {
  return themes[theme_name] || themes.brutal;
};
