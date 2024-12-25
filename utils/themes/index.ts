import { ThemeConfig } from "@/types";

import { brutalTheme } from "./brutal";
import { glassTheme } from "./glass";
import { minimalTheme } from "./minimal";
import { retroTheme } from "./retro";

const themes: Record<string, ThemeConfig> = {
  minimal: minimalTheme,
  brutal: brutalTheme,
  glass: glassTheme,
  retro: retroTheme,
};

export const getTheme = (theme_name: string = "minimal"): ThemeConfig =>
  themes[theme_name] || themes.minimal;
