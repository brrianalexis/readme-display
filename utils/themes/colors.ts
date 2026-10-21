import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)_border-box]",
	border: "border-2 border-solid border-transparent",
	shadow: "",
};

const rainbow =
	"bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-500 via-blue-500 to-purple-500";

export const colorsTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-red-500 dark:text-red-500 font-light tracking-[0.4em] uppercase text-sm",
		},
		card: {
			image: {
				border: "border border-white/60",
				filter: { brightness: 1.1, contrast: 1.25, grayscale: 1 },
			},
			title: {
				text: "text-white dark:text-white font-extralight tracking-[0.2em] uppercase text-xs",
			},
			metadata: {
				text: "text-white/60 dark:text-white/60 font-thin tracking-[0.15em] uppercase text-xs",
			},
			rating: {
				text: `${rainbow} bg-clip-text text-transparent font-medium tracking-[0.1em] text-xs`,
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-red-500 dark:text-red-500 font-light tracking-[0.4em] uppercase text-sm",
		},
		now_playing: {
			image: {
				border: "border border-white/60",
				filter: { brightness: 1.1, contrast: 1.25, grayscale: 1 },
			},
			track: {
				text: "text-white dark:text-white font-extralight tracking-[0.2em] uppercase text-xs",
			},
			artist: {
				text: "text-white/60 dark:text-white/60 font-thin tracking-[0.15em] uppercase text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const hue = Math.round((i / Math.max(total - 1, 1)) * 300);

				return `background-color: hsl(${hue}, 90%, 55%);`;
			},
		},
		top_artists: {
			container,
			rank: {
				text: "text-red-500 dark:text-red-500 font-thin tracking-[0.15em] text-xs",
			},
			artist: {
				text: "text-white dark:text-white font-extralight tracking-[0.2em] uppercase text-xs",
			},
			plays: {
				text: "text-white/60 dark:text-white/60 font-thin tracking-[0.15em] uppercase text-xs",
			},
		},
	},
};
