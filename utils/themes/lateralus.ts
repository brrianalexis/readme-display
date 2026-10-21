import type { ThemeConfig } from "@/types";

const container = {
	background:
		"[background:radial-gradient(circle_at_center,#2a0815_0%,#0a0008_50%,#000_100%)]",
	border: "border border-purple-900/60 dark:border-purple-900/60",
	shadow:
		"shadow-[0_0_60px_rgba(168,85,247,0.25),inset_0_0_50px_rgba(190,18,60,0.15)]",
};

export const lateralusTheme: ThemeConfig = {
	letterboxd: {
		container,
		title: {
			text: "text-cyan-300 dark:text-cyan-300 font-light tracking-[0.35em] uppercase text-xs [text-shadow:0_0_8px_rgba(34,211,238,0.6),0_0_16px_rgba(168,85,247,0.4)]",
		},
		card: {
			image: {
				border:
					"border border-purple-700/50 [filter:contrast(1.15)_saturate(1.4)_brightness(0.95)]",
			},
			title: {
				text: "text-rose-100 dark:text-rose-100 font-light tracking-[0.15em] uppercase text-xs",
			},
			metadata: {
				text: "text-purple-300/60 dark:text-purple-300/60 font-light tracking-[0.1em] text-xs",
			},
			rating: {
				text: "text-cyan-300 dark:text-cyan-300 font-normal tracking-[0.1em] text-xs [text-shadow:0_0_4px_rgba(34,211,238,0.5)]",
			},
		},
	},
	lastfm: {
		container,
		title: {
			text: "text-cyan-300 dark:text-cyan-300 font-light tracking-[0.35em] uppercase text-xs [text-shadow:0_0_8px_rgba(34,211,238,0.6),0_0_16px_rgba(168,85,247,0.4)]",
		},
		now_playing: {
			height: 160,
			image: {
				border:
					"border border-purple-700/50 [filter:contrast(1.15)_saturate(1.4)_brightness(0.95)]",
			},
			track: {
				text: "text-rose-100 dark:text-rose-100 font-light tracking-[0.15em] uppercase text-xs",
			},
			artist: {
				text: "text-purple-300/60 dark:text-purple-300/60 font-light tracking-[0.1em] text-xs",
			},
			bars: "",
			barStyle: (i, total) => {
				const t = i / Math.max(total - 1, 1);
				const phase = (t * 5) % 1;

				const stops = [
					[345, 80, 50],
					[280, 75, 55],
					[195, 85, 55],
					[160, 70, 50],
					[40, 90, 55],
				];

				const idx = Math.floor(t * 5) % 5;
				const next = (idx + 1) % 5;
				const lerp = (a: number, b: number) => a + (b - a) * phase;

				const [h, s, l] = [
					lerp(stops[idx][0], stops[next][0]),
					lerp(stops[idx][1], stops[next][1]),
					lerp(stops[idx][2], stops[next][2]),
				];

				return `background-color: hsl(${h}, ${s}%, ${l}%);`;
			},
		},
		top_artists: {
			height: 185,
			container,
			rank: {
				text: "text-cyan-300/80 dark:text-cyan-300/80 font-light tracking-[0.1em] text-xs",
			},
			artist: {
				text: "text-rose-100 dark:text-rose-100 font-light tracking-[0.15em] uppercase text-xs",
			},
			plays: {
				text: "text-purple-300/60 dark:text-purple-300/60 font-light tracking-[0.1em] text-xs",
			},
		},
	},
};
