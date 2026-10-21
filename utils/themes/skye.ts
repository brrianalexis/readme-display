import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:radial-gradient(ellipse_at_center,#1a1140_0%,#0a0820_70%,#050310_100%)]",
	border: "border-2 border-amber-500/70 dark:border-amber-500/70",
	shadow:
		"shadow-[inset_0_0_0_1px_rgba(251,191,36,0.25),inset_0_0_30px_rgba(251,191,36,0.15),0_0_40px_rgba(251,191,36,0.2)]",
};

export const skyeTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-amber-300 dark:text-amber-300 font-serif font-bold tracking-[0.2em] uppercase text-sm [text-shadow:0_0_8px_rgba(251,191,36,0.5)]",
		},
		card: {
			image: {
				border: "border border-amber-500/50",
				filter: { sepia: 0.4, saturate: 1.3, contrast: 1.1, hueRotate: -10 },
			},
			title: {
				text: "text-amber-100 dark:text-amber-100 font-serif font-semibold tracking-[0.05em] text-xs",
			},
			metadata: {
				text: "text-amber-200/60 dark:text-amber-200/60 font-serif italic tracking-[0.05em] text-xs",
			},
			rating: {
				text: "text-amber-400 dark:text-amber-400 font-serif tracking-[0.1em] text-xs [text-shadow:0_0_4px_rgba(251,191,36,0.6)]",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-amber-300 dark:text-amber-300 font-serif font-bold tracking-[0.2em] uppercase text-sm [text-shadow:0_0_8px_rgba(251,191,36,0.5)]",
		},
		now_playing: {
			image: {
				border: "border border-amber-500/50",
				filter: { sepia: 0.4, saturate: 1.3, contrast: 1.1, hueRotate: -10 },
			},
			track: {
				text: "text-amber-100 dark:text-amber-100 font-serif font-semibold tracking-[0.05em] text-xs",
			},
			artist: {
				text: "text-amber-200/60 dark:text-amber-200/60 font-serif italic tracking-[0.05em] text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const t = i / Math.max(total - 1, 1);
				const hue = 45 - t * 25;
				const light = 50 + Math.sin(t * Math.PI) * 15;

				return `background-color: hsl(${hue}, 90%, ${light}%);`;
			},
		},
		top_artists: {
			height: 200,
			container,
			rank: {
				text: "text-amber-400 dark:text-amber-400 font-serif italic tracking-[0.05em] text-xs",
			},
			artist: {
				text: "text-amber-100 dark:text-amber-100 font-serif font-semibold tracking-[0.05em] text-xs",
			},
			plays: {
				text: "text-amber-200/60 dark:text-amber-200/60 font-serif italic tracking-[0.05em] text-xs",
			},
		},
	},
};
