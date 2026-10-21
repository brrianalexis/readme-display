export const THEME_NAMES = [
	"blackmetal",
	"bossanova",
	"brutal",
	"catppuccin",
	"citypop",
	"colors",
	"crimson",
	"crosses",
	"darkwave",
	"dracula",
	"gameboy",
	"glass",
	"glassjaw",
	"grunge",
	"ink",
	"lateralus",
	"lofi",
	"minimal",
	"neon",
	"outrun",
	"postpunk",
	"retro",
	"shoegaze",
	"skye",
	"solarized",
	"sunbather",
	"synthwave",
	"telefon",
	"terminal",
	"turnstile",
	"vaporwave",
	"witchhouse",
	"y2k",
] as const;

export type ThemeName = (typeof THEME_NAMES)[number];

export type BaseThemeConfig = {
	container: {
		background: string;
		border: string;
		shadow: string;
	};
	title: {
		text: string;
		transform?: (s: string) => string;
	};
};

export type LetterboxdThemeConfig = BaseThemeConfig & {
	card: {
		image: {
			border: string;
		};
		title: {
			text: string;
		};
		metadata: {
			text: string;
		};
		rating?: {
			text: string;
		};
	};
};

export type LastFmThemeConfig = BaseThemeConfig & {
	now_playing: {
		height?: number;
		image: {
			border: string;
		};
		track: {
			text: string;
		};
		artist: {
			text: string;
			transform?: (s: string) => string;
		};
		bars: string;
		barStyle?: (index: number, total: number) => string;
	};
	top_artists: {
		height?: number;
		container: {
			background: string;
			border: string;
			shadow: string;
		};
		rank: {
			text: string;
		};
		artist: {
			text: string;
			transform?: (s: string) => string;
		};
		plays: {
			text: string;
		};
	};
};

export type ThemeConfig = {
	letterboxd: LetterboxdThemeConfig;
	lastfm: LastFmThemeConfig;
};
