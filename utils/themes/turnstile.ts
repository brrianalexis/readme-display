import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:linear-gradient(180deg,#fbe1ec_0%,#f8c8dc_50%,#f5b3cf_100%)] dark:[background:linear-gradient(180deg,#cfe4f5_0%,#b8d4e8_50%,#a8c8e0_100%)]",
	border: "border border-white/70 dark:border-white/60",
	shadow:
		"shadow-[0_0_50px_rgba(248,200,220,0.6),inset_0_0_60px_rgba(255,255,255,0.4)] dark:shadow-[0_0_50px_rgba(184,212,232,0.6),inset_0_0_60px_rgba(255,255,255,0.3)]",
};

export const turnstileTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-rose-500/90 dark:text-sky-700/90 font-black uppercase tracking-[0.05em] text-base [text-shadow:0_2px_8px_rgba(255,255,255,0.8)]",
		},
		card: {
			image: {
				border:
					"border-2 border-white/80 rounded-md shadow-[0_4px_12px_rgba(244,114,182,0.3)] dark:shadow-[0_4px_12px_rgba(56,189,248,0.3)]",
				filter: { saturate: 1.1 },
			},
			title: {
				text: "text-[#c2466f] dark:text-sky-900 font-bold uppercase tracking-tight text-xs",
			},
			metadata: {
				text: "text-rose-500/70 dark:text-sky-700/70 font-medium uppercase text-xs",
			},
			rating: {
				text: "text-rose-500 dark:text-sky-700 font-bold uppercase tracking-wide text-xs",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-rose-500/90 dark:text-sky-700/90 font-black uppercase tracking-[0.05em] text-base [text-shadow:0_2px_8px_rgba(255,255,255,0.8)]",
		},
		now_playing: {
			image: {
				border:
					"border-2 border-white/80 rounded-md shadow-[0_4px_12px_rgba(244,114,182,0.3)] dark:shadow-[0_4px_12px_rgba(56,189,248,0.3)]",
				filter: { saturate: 1.1 },
			},
			track: {
				text: "text-[#c2466f] dark:text-sky-900 font-bold uppercase tracking-tight text-sm",
			},
			artist: {
				text: "text-rose-500/70 dark:text-sky-700/70 font-medium uppercase text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const t = i / Math.max(total - 1, 1);
				const hue = 320 + t * 40;

				return `background-color: hsl(${hue}, 80%, 75%);`;
			},
		},
		top_artists: {
			container,
			rank: {
				text: "text-rose-500 dark:text-sky-700 font-bold uppercase text-xs",
			},
			artist: {
				text: "text-[#c2466f] dark:text-sky-900 font-bold uppercase tracking-tight text-xs",
			},
			plays: {
				text: "text-rose-500/70 dark:text-sky-700/70 font-medium uppercase text-xs",
			},
		},
	},
};
