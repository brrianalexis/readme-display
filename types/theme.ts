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

// Mirrors the CSS filter functions, applied in key order. Rendered as an SVG
// filter because CSS filters inside a foreignObject break in WebKit when the
// widget is scaled down
export type ImageFilter = Partial<
	Record<
		| "blur"
		| "brightness"
		| "contrast"
		| "grayscale"
		| "hueRotate"
		| "invert"
		| "opacity"
		| "saturate"
		| "sepia",
		number
	>
>;

export type ThemeImage = {
	border: string;
	filter?: ImageFilter;
	darkFilter?: ImageFilter;
};

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
		image: ThemeImage;
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
		image: ThemeImage;
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
