import type { ThemeConfig } from "@/types";

export const y2kTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background:
				"bg-gradient-to-br from-[#d8e8f8] via-[#e8e0f0] to-[#c8d8f0] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1a1a2e]",
			border: "border-[2px] border-[#a0b8d8]/60 dark:border-[#4a6fa5]/40",
			shadow:
				"shadow-[0_2px_15px_rgba(160,184,216,0.3)] dark:shadow-[0_2px_15px_rgba(74,111,165,0.2)]",
		},
		title: {
			text: "text-[#4a6fa5] dark:text-[#7aa2d4] font-bold",
		},
		card: {
			image: {
				border: "border border-[#a0b8d8]/40 dark:border-[#4a6fa5]/30 rounded",
			},
			title: {
				text: "text-[#3a4a6a] dark:text-[#c0d0e8] font-bold",
			},
			metadata: {
				text: "text-[#7a8aaa] dark:text-[#5a6a8a]",
			},
		},
	},
	lastfm: {
		container: {
			background:
				"bg-gradient-to-br from-[#d8e8f8] via-[#e8e0f0] to-[#c8d8f0] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1a1a2e]",
			border: "border-[2px] border-[#a0b8d8]/60 dark:border-[#4a6fa5]/40",
			shadow:
				"shadow-[0_2px_15px_rgba(160,184,216,0.3)] dark:shadow-[0_2px_15px_rgba(74,111,165,0.2)]",
		},
		title: {
			text: "text-[#4a6fa5] dark:text-[#7aa2d4] font-bold",
		},
		now_playing: {
			image: {
				border: "border border-[#a0b8d8]/40 dark:border-[#4a6fa5]/30 rounded",
			},
			track: {
				text: "text-[#3a4a6a] dark:text-[#c0d0e8] font-bold",
			},
			artist: {
				text: "text-[#7a8aaa] dark:text-[#5a6a8a]",
			},
			bars: "bg-gradient-to-t from-[#4a6fa5] to-[#a0b8d8] dark:from-[#7aa2d4] dark:to-[#4a6fa5]",
		},
		top_artists: {
			container: {
				background:
					"bg-gradient-to-br from-[#d8e8f8] via-[#e8e0f0] to-[#c8d8f0] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1a1a2e]",
				border: "border-[2px] border-[#a0b8d8]/60 dark:border-[#4a6fa5]/40",
				shadow:
					"shadow-[0_2px_15px_rgba(160,184,216,0.3)] dark:shadow-[0_2px_15px_rgba(74,111,165,0.2)]",
			},
			rank: {
				text: "text-[#7a8aaa] dark:text-[#5a6a8a]",
			},
			artist: {
				text: "text-[#3a4a6a] dark:text-[#c0d0e8] font-bold",
			},
			plays: {
				text: "text-[#7a8aaa] dark:text-[#5a6a8a]",
			},
		},
	},
};
