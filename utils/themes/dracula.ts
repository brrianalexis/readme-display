import type { ThemeConfig } from "@/types";

export const draculaTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#282a36]",
			border: "border-[2px] border-[#6272a4]",
			shadow: "shadow-lg shadow-[#6272a4]/20",
		},
		title: {
			text: "text-[#bd93f9] font-bold",
		},
		card: {
			image: {
				border: "border border-[#44475a] rounded",
			},
			title: {
				text: "text-[#f8f8f2] font-bold",
			},
			metadata: {
				text: "text-[#6272a4]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#282a36]",
			border: "border-[2px] border-[#6272a4]",
			shadow: "shadow-lg shadow-[#6272a4]/20",
		},
		title: {
			text: "text-[#bd93f9] font-bold",
		},
		now_playing: {
			image: {
				border: "border border-[#44475a] rounded",
			},
			track: {
				text: "text-[#f8f8f2] font-bold",
			},
			artist: {
				text: "text-[#ff79c6]",
			},
			bars: "bg-gradient-to-t from-[#bd93f9] to-[#ff79c6]",
		},
		top_artists: {
			container: {
				background: "bg-[#282a36]",
				border: "border-[2px] border-[#6272a4]",
				shadow: "shadow-lg shadow-[#6272a4]/20",
			},
			rank: {
				text: "text-[#6272a4]",
			},
			artist: {
				text: "text-[#f8f8f2] font-bold",
			},
			plays: {
				text: "text-[#6272a4]",
			},
		},
	},
};
