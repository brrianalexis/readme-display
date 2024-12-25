import { ThemeConfig } from "@/types";

import { brutalTheme } from "./brutal";
import { glassTheme } from "./glass";
import { minimalTheme } from "./minimal";
import { neonTheme } from "./neon";
import { retroTheme } from "./retro";
import { terminalTheme } from "./terminal";

const themes: Record<string, ThemeConfig> = {
  minimal: minimalTheme,
  brutal: brutalTheme,
  glass: glassTheme,
  retro: retroTheme,
  neon: neonTheme,
  terminal: terminalTheme,
};

export const getTheme = (theme_name: string = "minimal"): ThemeConfig =>
  themes[theme_name] || themes.minimal;
