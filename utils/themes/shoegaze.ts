import type { ThemeConfig } from "@/types";

export const shoegazeTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background:
				"bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 dark:from-rose-950 dark:via-pink-950 dark:to-violet-950",
			border: "border border-pink-200/50 dark:border-pink-800/30",
			shadow:
				"shadow-[0_0_40px_rgba(236,72,153,0.15)] dark:shadow-[0_0_40px_rgba(236,72,153,0.1)]",
		},
		title: {
			text: "text-pink-400/80 dark:text-pink-300/60 font-light italic",
		},
		card: {
			image: {
				border: "rounded-lg",
				filter: { blur: 0.5, opacity: 0.8 },
			},
			title: {
				text: "text-rose-500/80 dark:text-rose-300/70 font-light italic",
			},
			metadata: {
				text: "text-pink-300/60 dark:text-pink-400/40",
			},
		},
	},
	lastfm: {
		container: {
			background:
				"bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 dark:from-rose-950 dark:via-pink-950 dark:to-violet-950",
			border: "border border-pink-200/50 dark:border-pink-800/30",
			shadow:
				"shadow-[0_0_40px_rgba(236,72,153,0.15)] dark:shadow-[0_0_40px_rgba(236,72,153,0.1)]",
		},
		title: {
			text: "text-pink-400/80 dark:text-pink-300/60 font-light italic",
		},
		now_playing: {
			image: {
				border: "rounded-lg",
				filter: { blur: 0.5, opacity: 0.8 },
			},
			track: {
				text: "text-rose-500/80 dark:text-rose-300/70 font-light italic",
			},
			artist: {
				text: "text-pink-300/60 dark:text-pink-400/40",
			},
			bars: "bg-gradient-to-t from-pink-300/60 to-violet-300/40 dark:from-pink-500/40 dark:to-violet-500/30",
		},
		top_artists: {
			container: {
				background:
					"bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 dark:from-rose-950 dark:via-pink-950 dark:to-violet-950",
				border: "border border-pink-200/50 dark:border-pink-800/30",
				shadow:
					"shadow-[0_0_40px_rgba(236,72,153,0.15)] dark:shadow-[0_0_40px_rgba(236,72,153,0.1)]",
			},
			rank: {
				text: "text-pink-300/60 dark:text-pink-400/40",
			},
			artist: {
				text: "text-rose-500/80 dark:text-rose-300/70 font-light italic",
			},
			plays: {
				text: "text-pink-300/60 dark:text-pink-400/40",
			},
		},
	},
};
