import type { ThemeConfig } from "@/types";

export const grungeTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#2a2418]",
			border: "border-[3px] border-[#5c4a2a]",
			shadow: "shadow-[4px_4px_0_rgba(0,0,0,0.5)]",
		},
		title: {
			text: "text-[#c4a43e] font-black uppercase tracking-widest",
		},
		card: {
			image: {
				border: "border-2 border-[#5c4a2a] grayscale-[30%]",
			},
			title: {
				text: "text-[#d4c49a] font-black uppercase",
			},
			metadata: {
				text: "text-[#7a6840]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#2a2418]",
			border: "border-[3px] border-[#5c4a2a]",
			shadow: "shadow-[4px_4px_0_rgba(0,0,0,0.5)]",
		},
		title: {
			text: "text-[#c4a43e] font-black uppercase tracking-widest",
		},
		now_playing: {
			image: {
				border: "border-2 border-[#5c4a2a] grayscale-[30%]",
			},
			track: {
				text: "text-[#d4c49a] font-black uppercase",
			},
			artist: {
				text: "text-[#7a6840]",
			},
			bars: "bg-[#c4a43e]",
		},
		top_artists: {
			container: {
				background: "bg-[#2a2418]",
				border: "border-[3px] border-[#5c4a2a]",
				shadow: "shadow-[4px_4px_0_rgba(0,0,0,0.5)]",
			},
			rank: {
				text: "text-[#7a6840]",
			},
			artist: {
				text: "text-[#d4c49a] font-black uppercase",
			},
			plays: {
				text: "text-[#7a6840]",
			},
		},
	},
};
