import type { ThemeConfig } from "@/types";

export const outrunTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#0d0014]",
			border: "border-[2px] border-[#ff2975]",
			shadow:
				"shadow-[0_0_20px_rgba(255,41,117,0.4),0_0_60px_rgba(255,41,117,0.1)]",
		},
		title: {
			text: "text-[#ff2975] font-black uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,41,117,0.8)]",
		},
		card: {
			image: {
				border: "border border-[#ff2975]/30",
			},
			title: {
				text: "text-[#00fff9] font-bold drop-shadow-[0_0_8px_rgba(0,255,249,0.5)]",
			},
			metadata: {
				text: "text-[#ff2975]/60",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#0d0014]",
			border: "border-[2px] border-[#ff2975]",
			shadow:
				"shadow-[0_0_20px_rgba(255,41,117,0.4),0_0_60px_rgba(255,41,117,0.1)]",
		},
		title: {
			text: "text-[#ff2975] font-black uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,41,117,0.8)]",
		},
		now_playing: {
			image: {
				border: "border border-[#ff2975]/30",
			},
			track: {
				text: "text-[#00fff9] font-bold drop-shadow-[0_0_8px_rgba(0,255,249,0.5)]",
			},
			artist: {
				text: "text-[#ff2975]/60",
			},
			bars: "bg-gradient-to-t from-[#ff2975] to-[#00fff9]",
		},
		top_artists: {
			container: {
				background: "bg-[#0d0014]",
				border: "border-[2px] border-[#ff2975]",
				shadow:
					"shadow-[0_0_20px_rgba(255,41,117,0.4),0_0_60px_rgba(255,41,117,0.1)]",
			},
			rank: {
				text: "text-[#ff2975]/60",
			},
			artist: {
				text: "text-[#00fff9] font-bold drop-shadow-[0_0_8px_rgba(0,255,249,0.5)]",
			},
			plays: {
				text: "text-[#ff2975]/60",
			},
		},
	},
};
