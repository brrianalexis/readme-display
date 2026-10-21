import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:radial-gradient(ellipse_at_top,#3a1838_0%,#1a0d2e_50%,#0a0618_100%)]",
	border: "border border-rose-900/60 dark:border-rose-900/60",
	shadow:
		"shadow-[0_0_50px_rgba(190,30,60,0.25),inset_0_0_40px_rgba(80,20,60,0.4)]",
};

export const crimsonTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-rose-400 dark:text-rose-400 font-serif font-bold italic tracking-wide text-base [text-shadow:0_0_12px_rgba(244,63,94,0.5)]",
		},
		card: {
			image: {
				border: "border border-rose-900/60",
				filter: { contrast: 1.1, saturate: 1.2, hueRotate: -5 },
			},
			title: {
				text: "text-rose-100 dark:text-rose-100 font-serif font-semibold tracking-tight text-xs",
			},
			metadata: {
				text: "text-rose-300/60 dark:text-rose-300/60 font-serif italic text-xs",
			},
			rating: {
				text: "text-rose-400 dark:text-rose-400 font-serif font-bold tracking-wide text-xs",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-rose-400 dark:text-rose-400 font-serif font-bold italic tracking-wide text-base [text-shadow:0_0_12px_rgba(244,63,94,0.5)]",
		},
		now_playing: {
			image: {
				border: "border border-rose-900/60",
				filter: { contrast: 1.1, saturate: 1.2, hueRotate: -5 },
			},
			track: {
				text: "text-rose-100 dark:text-rose-100 font-serif font-semibold tracking-tight text-sm",
			},
			artist: {
				text: "text-rose-300/60 dark:text-rose-300/60 font-serif italic text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const t = i / Math.max(total - 1, 1);
				const hue = 340 - t * 60;

				return `background-color: hsl(${hue}, 75%, 55%);`;
			},
		},
		top_artists: {
			container,
			rank: {
				text: "text-rose-400 dark:text-rose-400 font-serif italic text-xs",
			},
			artist: {
				text: "text-rose-100 dark:text-rose-100 font-serif font-semibold tracking-tight text-xs",
			},
			plays: {
				text: "text-rose-300/60 dark:text-rose-300/60 font-serif italic text-xs",
			},
		},
	},
};
