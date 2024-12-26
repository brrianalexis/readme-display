import { ThemeConfig } from "@/types";

export const citypopTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background:
        "bg-gradient-to-br from-sky-100 to-pink-100 dark:from-sky-900 dark:to-pink-900",
      border: "border-[2px] border-sky-400/50 dark:border-sky-500/50",
      shadow:
        "shadow-[0_0_20px_rgba(56,189,248,0.2)] dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    },
    title: {
      text: "text-sky-600 dark:text-sky-400 font-bold tracking-wide",
    },
    card: {
      image: {
        border: "rounded-lg brightness-105 saturate-[1.2]",
      },
      title: {
        text: "text-pink-600 dark:text-pink-400 font-medium",
      },
      metadata: {
        text: "text-sky-600/70 dark:text-sky-400/70",
      },
    },
  },
  lastfm: {
    container: {
      background:
        "bg-gradient-to-br from-sky-100 to-pink-100 dark:from-sky-900 dark:to-pink-900",
      border: "border-[2px] border-sky-400/50 dark:border-sky-500/50",
      shadow:
        "shadow-[0_0_20px_rgba(56,189,248,0.2)] dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    },
    title: {
      text: "text-sky-600 dark:text-sky-400 font-bold tracking-wide",
    },
    now_playing: {
      image: {
        border: "rounded-lg brightness-105 saturate-[1.2]",
      },
      track: {
        text: "text-pink-600 dark:text-pink-400 font-medium",
      },
      artist: {
        text: "text-sky-600/70 dark:text-sky-400/70",
      },
      bars: "bg-gradient-to-t from-sky-400 to-pink-400 dark:from-sky-500 dark:to-pink-500",
    },
    top_artists: {
      container: {
        background:
          "bg-gradient-to-br from-sky-100 to-pink-100 dark:from-sky-900 dark:to-pink-900",
        border: "border-[2px] border-sky-400/50 dark:border-sky-500/50",
        shadow:
          "shadow-[0_0_20px_rgba(56,189,248,0.2)] dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
      },
      rank: {
        text: "text-sky-600/70 dark:text-sky-400/70",
      },
      artist: {
        text: "text-pink-600 dark:text-pink-400 font-medium",
      },
      plays: {
        text: "text-sky-600/70 dark:text-sky-400/70",
      },
    },
  },
};
