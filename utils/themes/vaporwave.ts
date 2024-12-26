import { ThemeConfig } from "@/types";

export const vaporwaveTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background:
        "bg-gradient-to-br from-pink-200/90 to-sky-200/90 dark:from-pink-900/90 dark:to-sky-900/90",
      border: "border-2 border-pink-300 dark:border-pink-700",
      shadow: "shadow-[4px_4px_0px_#93c5fd] dark:shadow-[4px_4px_0px_#1e40af]",
    },
    title: {
      text: "text-pink-600 dark:text-pink-400 font-bold",
    },
    card: {
      image: {
        border: "border-2 border-sky-300 dark:border-sky-700 rounded-lg",
      },
      title: {
        text: "text-sky-700 dark:text-sky-300 font-bold",
      },
      metadata: {
        text: "text-pink-500/80 dark:text-pink-400/80",
      },
    },
  },
  lastfm: {
    container: {
      background:
        "bg-gradient-to-br from-pink-200/90 to-sky-200/90 dark:from-pink-900/90 dark:to-sky-900/90",
      border: "border-2 border-pink-300 dark:border-pink-700",
      shadow: "shadow-[4px_4px_0px_#93c5fd] dark:shadow-[4px_4px_0px_#1e40af]",
    },
    title: {
      text: "text-pink-600 dark:text-pink-400 font-bold",
    },
    now_playing: {
      image: {
        border: "border-2 border-sky-300 dark:border-sky-700 rounded-lg",
      },
      track: {
        text: "text-sky-700 dark:text-sky-300 font-bold",
      },
      artist: {
        text: "text-pink-500/80 dark:text-pink-400/80",
      },
      bars: "bg-gradient-to-t from-pink-500 to-sky-500 dark:from-pink-600 dark:to-sky-600",
    },
    top_artists: {
      container: {
        background:
          "bg-gradient-to-br from-pink-200/90 to-sky-200/90 dark:from-pink-900/90 dark:to-sky-900/90",
        border: "border-2 border-pink-300 dark:border-pink-700",
        shadow:
          "shadow-[4px_4px_0px_#93c5fd] dark:shadow-[4px_4px_0px_#1e40af]",
      },
      rank: {
        text: "text-pink-500/80 dark:text-pink-400/80",
      },
      artist: {
        text: "text-sky-700 dark:text-sky-300 font-bold",
      },
      plays: {
        text: "text-pink-500/80 dark:text-pink-400/80",
      },
    },
  },
};
