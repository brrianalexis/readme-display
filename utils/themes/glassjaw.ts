import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:linear-gradient(135deg,#bcdde0_0%,#9fcdd2_50%,#7fb8c0_100%)] dark:[background:linear-gradient(135deg,#2a2520_0%,#1a1612_50%,#0d0a08_100%)]",
	border: "border-2 border-emerald-700/30 dark:border-red-700/80",
	shadow:
		"shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_8px_24px_rgba(80,140,110,0.25)] dark:shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_8px_24px_rgba(180,30,30,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
};

export const glassjawTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-emerald-900 dark:text-red-500 font-black uppercase tracking-[0.3em] text-sm [text-shadow:0_1px_0_rgba(255,255,255,0.4)] dark:[text-shadow:0_1px_0_#000,0_0_8px_rgba(220,38,38,0.4)]",
		},
		card: {
			image: {
				border:
					"border-2 border-emerald-800/30 dark:border-red-700/40 [filter:contrast(1.05)_saturate(0.9)] dark:[filter:contrast(1.1)_brightness(0.95)_sepia(0.15)]",
			},
			title: {
				text: "text-emerald-950 dark:text-stone-100 font-bold uppercase tracking-[0.1em] text-xs",
			},
			metadata: {
				text: "text-emerald-900/60 dark:text-stone-400/70 font-medium uppercase tracking-[0.1em] text-[10px]",
			},
			rating: {
				text: "text-emerald-800 dark:text-red-500 font-bold tracking-wider text-xs",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-emerald-900 dark:text-red-500 font-black uppercase tracking-[0.3em] text-sm [text-shadow:0_1px_0_rgba(255,255,255,0.4)] dark:[text-shadow:0_1px_0_#000,0_0_8px_rgba(220,38,38,0.4)]",
		},
		now_playing: {
			image: {
				border:
					"border-2 border-emerald-800/30 dark:border-red-700/40 [filter:contrast(1.05)_saturate(0.9)] dark:[filter:contrast(1.1)_brightness(0.95)_sepia(0.15)]",
			},
			track: {
				text: "text-emerald-950 dark:text-stone-100 font-bold uppercase tracking-[0.1em] text-sm",
			},
			artist: {
				text: "text-emerald-900/60 dark:text-stone-400/70 font-medium uppercase tracking-[0.1em] text-xs",
			},
			bars: "bg-emerald-800/80 dark:bg-red-600",
		},
		top_artists: {
			container,
			rank: {
				text: "text-emerald-800 dark:text-red-500 font-bold tracking-wider text-xs",
			},
			artist: {
				text: "text-emerald-950 dark:text-stone-100 font-bold uppercase tracking-[0.1em] text-xs",
			},
			plays: {
				text: "text-emerald-900/60 dark:text-stone-400/70 font-medium uppercase tracking-[0.1em] text-xs",
			},
		},
	},
};
