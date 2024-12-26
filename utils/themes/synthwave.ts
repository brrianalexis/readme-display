import { ThemeConfig } from "@/types";

export const synthwaveTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background:
        "bg-gradient-to-b from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950",
      border: "border-[2px] border-orange-500/50 dark:border-orange-400/50",
      shadow:
        "shadow-[0_0_30px_rgba(249,115,22,0.3)] dark:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
    },
    title: {
      text: "text-orange-400 dark:text-orange-300 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]",
    },
    card: {
      image: {
        border: "border border-orange-500/30 dark:border-orange-400/30 rounded",
      },
      title: {
        text: "text-purple-100 dark:text-purple-200 font-bold drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]",
      },
      metadata: {
        text: "text-orange-300/80 dark:text-orange-200/80",
      },
    },
  },
  lastfm: {
    container: {
      background:
        "bg-gradient-to-b from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950",
      border: "border-[2px] border-orange-500/50 dark:border-orange-400/50",
      shadow:
        "shadow-[0_0_30px_rgba(249,115,22,0.3)] dark:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
    },
    title: {
      text: "text-orange-400 dark:text-orange-300 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]",
    },
    now_playing: {
      image: {
        border: "border border-orange-500/30 dark:border-orange-400/30 rounded",
      },
      track: {
        text: "text-purple-100 dark:text-purple-200 font-bold drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]",
      },
      artist: {
        text: "text-orange-300/80 dark:text-orange-200/80",
      },
      bars: "bg-gradient-to-t from-orange-500 to-purple-500 dark:from-orange-400 dark:to-purple-400",
    },
    top_artists: {
      container: {
        background:
          "bg-gradient-to-b from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950",
        border: "border-[2px] border-orange-500/50 dark:border-orange-400/50",
        shadow:
          "shadow-[0_0_30px_rgba(249,115,22,0.3)] dark:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
      },
      rank: {
        text: "text-orange-300/80 dark:text-orange-200/80",
      },
      artist: {
        text: "text-purple-100 dark:text-purple-200 font-bold drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]",
      },
      plays: {
        text: "text-orange-300/80 dark:text-orange-200/80",
      },
    },
  },
};
