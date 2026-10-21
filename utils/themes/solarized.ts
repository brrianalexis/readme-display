import type { ThemeConfig } from "@/types";

export const solarizedTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#fdf6e3] dark:bg-[#002b36]",
			border: "border-[2px] border-[#93a1a1] dark:border-[#586e75]",
			shadow: "",
		},
		title: {
			text: "text-[#268bd2] dark:text-[#268bd2] font-bold",
		},
		card: {
			image: {
				border: "border border-[#eee8d5] dark:border-[#073642] rounded",
			},
			title: {
				text: "text-[#657b83] dark:text-[#839496] font-bold",
			},
			metadata: {
				text: "text-[#93a1a1] dark:text-[#586e75]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#fdf6e3] dark:bg-[#002b36]",
			border: "border-[2px] border-[#93a1a1] dark:border-[#586e75]",
			shadow: "",
		},
		title: {
			text: "text-[#268bd2] dark:text-[#268bd2] font-bold",
		},
		now_playing: {
			image: {
				border: "border border-[#eee8d5] dark:border-[#073642] rounded",
			},
			track: {
				text: "text-[#657b83] dark:text-[#839496] font-bold",
			},
			artist: {
				text: "text-[#2aa198] dark:text-[#2aa198]",
			},
			bars: "bg-[#268bd2]",
		},
		top_artists: {
			container: {
				background: "bg-[#fdf6e3] dark:bg-[#002b36]",
				border: "border-[2px] border-[#93a1a1] dark:border-[#586e75]",
				shadow: "",
			},
			rank: {
				text: "text-[#93a1a1] dark:text-[#586e75]",
			},
			artist: {
				text: "text-[#657b83] dark:text-[#839496] font-bold",
			},
			plays: {
				text: "text-[#93a1a1] dark:text-[#586e75]",
			},
		},
	},
};
