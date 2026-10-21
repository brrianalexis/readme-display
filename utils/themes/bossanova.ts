import type { ThemeConfig } from "@/types";

export const bossanovaTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#f5ebe0] dark:bg-[#2c2416]",
			border: "border-[2px] border-[#c4956a] dark:border-[#8b6940]",
			shadow: "",
		},
		title: {
			text: "text-[#8b6940] dark:text-[#c4956a] font-bold",
		},
		card: {
			image: {
				border: "border border-[#c4956a]/40 dark:border-[#8b6940]/40 rounded",
			},
			title: {
				text: "text-[#5c4a2e] dark:text-[#d4c4a8] font-bold",
			},
			metadata: {
				text: "text-[#9c8b70] dark:text-[#7a6840]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#f5ebe0] dark:bg-[#2c2416]",
			border: "border-[2px] border-[#c4956a] dark:border-[#8b6940]",
			shadow: "",
		},
		title: {
			text: "text-[#8b6940] dark:text-[#c4956a] font-bold",
		},
		now_playing: {
			image: {
				border: "border border-[#c4956a]/40 dark:border-[#8b6940]/40 rounded",
			},
			track: {
				text: "text-[#5c4a2e] dark:text-[#d4c4a8] font-bold",
			},
			artist: {
				text: "text-[#6b7c3f] dark:text-[#a0b060]",
			},
			bars: "bg-[#c4956a] dark:bg-[#c4956a]",
		},
		top_artists: {
			container: {
				background: "bg-[#f5ebe0] dark:bg-[#2c2416]",
				border: "border-[2px] border-[#c4956a] dark:border-[#8b6940]",
				shadow: "",
			},
			rank: {
				text: "text-[#9c8b70] dark:text-[#7a6840]",
			},
			artist: {
				text: "text-[#5c4a2e] dark:text-[#d4c4a8] font-bold",
			},
			plays: {
				text: "text-[#9c8b70] dark:text-[#7a6840]",
			},
		},
	},
};
