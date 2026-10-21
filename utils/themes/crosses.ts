import type { ThemeConfig } from "@/types";

const container = {
	background: "bg-[#0a0d12] dark:bg-[#0a0d12]",
	border: "border border-white/15 dark:border-white/15",
	shadow:
		"shadow-[0_0_60px_rgba(56,107,165,0.25)] dark:shadow-[0_0_60px_rgba(56,107,165,0.2)]",
};

const titleTransform = (s: string) =>
	s.replace(
		/[tT]/g,
		'<span style="font-size:1.4em;line-height:1;vertical-align:-0.24em;display:inline-block;">†</span>',
	);

export const crossesTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-white dark:text-white font-bold tracking-[0.2em] uppercase text-sm",
			transform: titleTransform,
		},
		card: {
			image: {
				border:
					"border border-white/20 grayscale contrast-110 brightness-90 [filter:grayscale(1)_contrast(1.1)_brightness(0.9)_sepia(0.3)_hue-rotate(180deg)]",
			},
			title: {
				text: "text-white dark:text-white font-semibold tracking-[0.1em] uppercase text-xs",
			},
			metadata: {
				text: "text-sky-200/50 dark:text-sky-200/50 font-light tracking-[0.1em] text-xs",
			},
			rating: {
				text: "text-sky-300/80 dark:text-sky-300/80 font-normal tracking-[0.1em] text-xs",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-white dark:text-white font-bold tracking-[0.2em] uppercase text-sm",
			transform: titleTransform,
		},
		now_playing: {
			image: {
				border:
					"border border-white/20 [filter:grayscale(1)_contrast(1.1)_brightness(0.9)_sepia(0.3)_hue-rotate(180deg)]",
			},
			track: {
				text: "text-white dark:text-white font-semibold tracking-[0.1em] uppercase text-xs",
			},
			artist: {
				text: "text-sky-200/50 dark:text-sky-200/50 font-light tracking-[0.1em] text-xs",
				transform: titleTransform,
			},
			bars: "bg-sky-200/70 dark:bg-sky-200/70",
		},
		top_artists: {
			container,
			rank: {
				text: "text-sky-300/80 dark:text-sky-300/80 font-light tracking-[0.1em] text-xs",
			},
			artist: {
				text: "text-white dark:text-white font-semibold tracking-[0.1em] uppercase text-xs",
				transform: titleTransform,
			},
			plays: {
				text: "text-sky-200/50 dark:text-sky-200/50 font-light tracking-[0.1em] text-xs",
			},
		},
	},
};
