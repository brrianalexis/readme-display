import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:linear-gradient(180deg,#d4e0e8_0%,#e8dcc8_50%,#d4e0e8_100%),repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_3px)] [background-blend-mode:multiply] dark:[background:linear-gradient(180deg,#1a1f28_0%,#2a1f1a_50%,#1a1f28_100%),repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(255,255,255,0.04)_2px,rgba(255,255,255,0.04)_3px)] dark:[background-blend-mode:screen]",
	border: "border border-slate-400/40 dark:border-amber-700/30",
	shadow: "",
};

export const telefonTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-slate-700 dark:text-amber-200/90 font-mono lowercase tracking-tight text-xs",
		},
		card: {
			image: {
				border:
					"border border-slate-400/40 [filter:contrast(0.95)_brightness(1.05)_saturate(0.85)]",
			},
			title: {
				text: "text-slate-800 dark:text-amber-100 font-mono lowercase tracking-tight text-xs",
			},
			metadata: {
				text: "text-slate-500 dark:text-amber-200/40 font-mono lowercase tracking-tight text-[10px]",
			},
			rating: {
				text: "text-amber-600 dark:text-amber-400 font-mono tracking-tight text-xs",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-slate-700 dark:text-amber-200/90 font-mono lowercase tracking-tight text-xs",
		},
		now_playing: {
			image: {
				border:
					"border border-slate-400/40 [filter:contrast(0.95)_brightness(1.05)_saturate(0.85)]",
			},
			track: {
				text: "text-slate-800 dark:text-amber-100 font-mono lowercase tracking-tight text-sm",
			},
			artist: {
				text: "text-slate-500 dark:text-amber-200/40 font-mono lowercase tracking-tight text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const t = i / Math.max(total - 1, 1);

				if (t < 0.33) {
					return `background-color: hsl(200, 30%, ${50 + t * 30}%);`;
				}

				if (t < 0.66) {
					return `background-color: hsl(35, 80%, 60%);`;
				}

				return `background-color: hsl(200, 30%, ${65 - (t - 0.66) * 30}%);`;
			},
		},
		top_artists: {
			container,
			rank: {
				text: "text-amber-600 dark:text-amber-400 font-mono lowercase text-xs",
			},
			artist: {
				text: "text-slate-800 dark:text-amber-100 font-mono lowercase tracking-tight text-xs",
			},
			plays: {
				text: "text-slate-500 dark:text-amber-200/40 font-mono lowercase tracking-tight text-xs",
			},
		},
	},
};
