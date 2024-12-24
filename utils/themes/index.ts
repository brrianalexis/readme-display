import { ThemeConfig } from "@/types";

import { brutalTheme } from "./brutal";
import { glassTheme } from "./glass";
import { minimalTheme } from "./minimal";

const themes: Record<string, ThemeConfig> = {
  minimal: minimalTheme,
  brutal: brutalTheme,
  glass: glassTheme,
};

export const getTheme = (theme_name: string = "minimal"): ThemeConfig =>
  themes[theme_name] || themes.minimal;
