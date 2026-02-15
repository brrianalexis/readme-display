import type { ThemeConfig, ThemeName } from "@/types";

import { blackmetalTheme } from "./blackmetal";
import { brutalTheme } from "./brutal";
import { citypopTheme } from "./citypop";
import { darkwaveTheme } from "./darkwave";
import { gameboyTheme } from "./gameboy";
import { glassTheme } from "./glass";
import { minimalTheme } from "./minimal";
import { neonTheme } from "./neon";
import { postpunkTheme } from "./postpunk";
import { retroTheme } from "./retro";
import { sunbatherTheme } from "./sunbather";
import { synthwaveTheme } from "./synthwave";
import { terminalTheme } from "./terminal";
import { vaporwaveTheme } from "./vaporwave";
import { witchhouseTheme } from "./witchhouse";

export const themes: Record<ThemeName, ThemeConfig> = {
	minimal: minimalTheme,
	brutal: brutalTheme,
	glass: glassTheme,
	retro: retroTheme,
	neon: neonTheme,
	terminal: terminalTheme,
	vaporwave: vaporwaveTheme,
	synthwave: synthwaveTheme,
	gameboy: gameboyTheme,
	darkwave: darkwaveTheme,
	postpunk: postpunkTheme,
	citypop: citypopTheme,
	witchhouse: witchhouseTheme,
	blackmetal: blackmetalTheme,
	sunbather: sunbatherTheme,
};

export const getTheme = (name: string = "minimal"): ThemeConfig =>
	themes[name as ThemeName] ?? themes.minimal;
