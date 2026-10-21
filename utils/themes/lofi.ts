import type { ThemeConfig } from "@/types";

export const lofiTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#f4efe6] dark:bg-[#252220]",
			border: "border border-[#d4cbbf] dark:border-[#3d3632]",
			shadow: "shadow-sm",
		},
		title: {
			text: "text-[#8b7e6a] dark:text-[#a89880] font-medium",
		},
		card: {
			image: {
				border:
					"border border-[#d4cbbf] dark:border-[#3d3632] rounded sepia-[15%]",
			},
			title: {
				text: "text-[#5c5044] dark:text-[#c4b8a4] font-medium",
			},
			metadata: {
				text: "text-[#a89880] dark:text-[#6b5f50]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#f4efe6] dark:bg-[#252220]",
			border: "border border-[#d4cbbf] dark:border-[#3d3632]",
			shadow: "shadow-sm",
		},
		title: {
			text: "text-[#8b7e6a] dark:text-[#a89880] font-medium",
		},
		now_playing: {
			image: {
				border:
					"border border-[#d4cbbf] dark:border-[#3d3632] rounded sepia-[15%]",
			},
			track: {
				text: "text-[#5c5044] dark:text-[#c4b8a4] font-medium",
			},
			artist: {
				text: "text-[#a89880] dark:text-[#6b5f50]",
			},
			bars: "bg-[#8b7e6a] dark:bg-[#a89880]",
		},
		top_artists: {
			container: {
				background: "bg-[#f4efe6] dark:bg-[#252220]",
				border: "border border-[#d4cbbf] dark:border-[#3d3632]",
				shadow: "shadow-sm",
			},
			rank: {
				text: "text-[#a89880] dark:text-[#6b5f50]",
			},
			artist: {
				text: "text-[#5c5044] dark:text-[#c4b8a4] font-medium",
			},
			plays: {
				text: "text-[#a89880] dark:text-[#6b5f50]",
			},
		},
	},
};
