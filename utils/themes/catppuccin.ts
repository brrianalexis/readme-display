import type { ThemeConfig } from "@/types";

export const catppuccinTheme: ThemeConfig = {
	letterboxd: {
		container: {
			background: "bg-[#eff1f5] dark:bg-[#1e1e2e]",
			border: "border-[2px] border-[#ccd0da] dark:border-[#313244]",
			shadow: "shadow-md shadow-[#9ca0b0]/10 dark:shadow-[#11111b]/30",
		},
		title: {
			text: "text-[#8839ef] dark:text-[#cba6f7] font-bold",
		},
		card: {
			image: {
				border: "border border-[#ccd0da] dark:border-[#313244] rounded-lg",
			},
			title: {
				text: "text-[#4c4f69] dark:text-[#cdd6f4] font-bold",
			},
			metadata: {
				text: "text-[#8c8fa1] dark:text-[#6c7086]",
			},
		},
	},
	lastfm: {
		container: {
			background: "bg-[#eff1f5] dark:bg-[#1e1e2e]",
			border: "border-[2px] border-[#ccd0da] dark:border-[#313244]",
			shadow: "shadow-md shadow-[#9ca0b0]/10 dark:shadow-[#11111b]/30",
		},
		title: {
			text: "text-[#8839ef] dark:text-[#cba6f7] font-bold",
		},
		now_playing: {
			image: {
				border: "border border-[#ccd0da] dark:border-[#313244] rounded-lg",
			},
			track: {
				text: "text-[#4c4f69] dark:text-[#cdd6f4] font-bold",
			},
			artist: {
				text: "text-[#ea76cb] dark:text-[#f5c2e7]",
			},
			bars: "bg-gradient-to-t from-[#8839ef] to-[#ea76cb] dark:from-[#cba6f7] dark:to-[#f5c2e7]",
		},
		top_artists: {
			container: {
				background: "bg-[#eff1f5] dark:bg-[#1e1e2e]",
				border: "border-[2px] border-[#ccd0da] dark:border-[#313244]",
				shadow: "shadow-md shadow-[#9ca0b0]/10 dark:shadow-[#11111b]/30",
			},
			rank: {
				text: "text-[#8c8fa1] dark:text-[#6c7086]",
			},
			artist: {
				text: "text-[#4c4f69] dark:text-[#cdd6f4] font-bold",
			},
			plays: {
				text: "text-[#8c8fa1] dark:text-[#6c7086]",
			},
		},
	},
};
