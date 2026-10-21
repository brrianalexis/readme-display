import type { ThemeConfig } from "@/types";

export const postpunkTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-neutral-100 dark:bg-neutral-900",
			border: "border-[1px] border-neutral-400 dark:border-neutral-700",
			shadow: "shadow-none",
		},
		title: {
			text: "text-neutral-900 dark:text-neutral-200 font-light uppercase tracking-[0.25em] text-sm",
		},
		card: {
			image: {
				border: "",
				filter: { brightness: 1.1, contrast: 1.25, grayscale: 1 },
			},
			title: {
				text: "text-neutral-800 dark:text-neutral-300 font-light uppercase tracking-[0.15em] text-xs",
			},
			metadata: {
				text: "text-neutral-500 dark:text-neutral-600 uppercase tracking-wide text-xs font-light",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-neutral-100 dark:bg-neutral-900",
			border: "border-[1px] border-neutral-400 dark:border-neutral-700",
			shadow: "shadow-none",
		},
		title: {
			text: "text-neutral-900 dark:text-neutral-200 font-light uppercase tracking-[0.25em] text-sm",
		},
		now_playing: {
			image: {
				border: "",
				filter: { brightness: 1.1, contrast: 1.25, grayscale: 1 },
			},
			track: {
				text: "text-neutral-800 dark:text-neutral-300 font-light uppercase tracking-[0.15em] text-xs",
			},
			artist: {
				text: "text-neutral-500 dark:text-neutral-600 uppercase tracking-wide text-xs font-light",
			},
			bars: "bg-neutral-900 dark:bg-neutral-200",
		},
		top_artists: {
			container: {
				background: "bg-neutral-100 dark:bg-neutral-900",
				border: "border-[1px] border-neutral-400 dark:border-neutral-700",
				shadow: "shadow-none",
			},
			rank: {
				text: "text-neutral-500 dark:text-neutral-600 uppercase tracking-wide text-xs font-light",
			},
			artist: {
				text: "text-neutral-800 dark:text-neutral-300 font-light uppercase tracking-[0.15em] text-xs",
			},
			plays: {
				text: "text-neutral-500 dark:text-neutral-600 uppercase tracking-wide text-xs font-light",
			},
		},
	},
};
