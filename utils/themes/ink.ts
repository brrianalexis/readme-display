import type { ThemeConfig } from "@/types";

export const inkTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-white dark:bg-black",
			border: "border-[2px] border-black dark:border-white",
			shadow: "",
		},
		title: {
			text: "text-black dark:text-white font-black uppercase tracking-widest",
		},
		card: {
			image: {
				border: "border-2 border-black dark:border-white",
				filter: { grayscale: 1 },
			},
			title: {
				text: "text-black dark:text-white font-black",
			},
			metadata: {
				text: "text-neutral-500 dark:text-neutral-500",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-white dark:bg-black",
			border: "border-[2px] border-black dark:border-white",
			shadow: "",
		},
		title: {
			text: "text-black dark:text-white font-black uppercase tracking-widest",
		},
		now_playing: {
			image: {
				border: "border-2 border-black dark:border-white",
				filter: { grayscale: 1 },
			},
			track: {
				text: "text-black dark:text-white font-black",
			},
			artist: {
				text: "text-neutral-500 dark:text-neutral-500",
			},
			bars: "bg-black dark:bg-white",
		},
		top_artists: {
			container: {
				background: "bg-white dark:bg-black",
				border: "border-[2px] border-black dark:border-white",
				shadow: "",
			},
			rank: {
				text: "text-neutral-500 dark:text-neutral-500",
			},
			artist: {
				text: "text-black dark:text-white font-black",
			},
			plays: {
				text: "text-neutral-500 dark:text-neutral-500",
			},
		},
	},
};
