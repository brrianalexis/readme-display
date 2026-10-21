import type { ThemeConfig, ThemeName } from "@/types";

import { blackmetalTheme } from "./blackmetal";
import { bossanovaTheme } from "./bossanova";
import { brutalTheme } from "./brutal";
import { catppuccinTheme } from "./catppuccin";
import { citypopTheme } from "./citypop";
import { colorsTheme } from "./colors";
import { crimsonTheme } from "./crimson";
import { crossesTheme } from "./crosses";
import { darkwaveTheme } from "./darkwave";
import { draculaTheme } from "./dracula";
import { gameboyTheme } from "./gameboy";
import { glassTheme } from "./glass";
import { glassjawTheme } from "./glassjaw";
import { grungeTheme } from "./grunge";
import { inkTheme } from "./ink";
import { lateralusTheme } from "./lateralus";
import { lofiTheme } from "./lofi";
import { minimalTheme } from "./minimal";
import { neonTheme } from "./neon";
import { outrunTheme } from "./outrun";
import { postpunkTheme } from "./postpunk";
import { retroTheme } from "./retro";
import { shoegazeTheme } from "./shoegaze";
import { skyeTheme } from "./skye";
import { solarizedTheme } from "./solarized";
import { sunbatherTheme } from "./sunbather";
import { synthwaveTheme } from "./synthwave";
import { telefonTheme } from "./telefon";
import { terminalTheme } from "./terminal";
import { turnstileTheme } from "./turnstile";
import { vaporwaveTheme } from "./vaporwave";
import { witchhouseTheme } from "./witchhouse";
import { y2kTheme } from "./y2k";

export const themes: Record<ThemeName, ThemeConfig> = {
	blackmetal: blackmetalTheme,
	bossanova: bossanovaTheme,
	brutal: brutalTheme,
	catppuccin: catppuccinTheme,
	citypop: citypopTheme,
	colors: colorsTheme,
	crimson: crimsonTheme,
	crosses: crossesTheme,
	darkwave: darkwaveTheme,
	dracula: draculaTheme,
	gameboy: gameboyTheme,
	glass: glassTheme,
	glassjaw: glassjawTheme,
	grunge: grungeTheme,
	ink: inkTheme,
	lateralus: lateralusTheme,
	lofi: lofiTheme,
	minimal: minimalTheme,
	neon: neonTheme,
	outrun: outrunTheme,
	postpunk: postpunkTheme,
	retro: retroTheme,
	shoegaze: shoegazeTheme,
	skye: skyeTheme,
	solarized: solarizedTheme,
	sunbather: sunbatherTheme,
	synthwave: synthwaveTheme,
	telefon: telefonTheme,
	terminal: terminalTheme,
	turnstile: turnstileTheme,
	vaporwave: vaporwaveTheme,
	witchhouse: witchhouseTheme,
	y2k: y2kTheme,
};

export const getTheme = (name: string = "minimal"): ThemeConfig =>
	themes[name as ThemeName] ?? themes.minimal;
