import { ThemeConfig } from "@/types";

export const terminalTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border border-green-500/30 dark:border-green-500/30",
      shadow:
        "shadow-[0_0_10px_rgba(34,197,94,0.2)] dark:shadow-[0_0_10px_rgba(34,197,94,0.2)]",
    },
    title: {
      text: "text-green-500 dark:text-green-500 font-mono",
    },
    card: {
      image: {
        border: "brightness-[0.8] contrast-[1.2] opacity-90",
      },
      title: {
        text: "text-green-400 dark:text-green-400 font-mono",
      },
      metadata: {
        text: "text-green-600/90 dark:text-green-600/90 font-mono",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border border-green-500/30 dark:border-green-500/30",
      shadow:
        "shadow-[0_0_10px_rgba(34,197,94,0.2)] dark:shadow-[0_0_10px_rgba(34,197,94,0.2)]",
    },
    title: {
      text: "text-green-500 dark:text-green-500 font-mono",
    },
    now_playing: {
      image: {
        border: "brightness-[0.8] contrast-[1.2] opacity-90",
      },
      track: {
        text: "text-green-400 dark:text-green-400 font-mono",
      },
      artist: {
        text: "text-green-600/90 dark:text-green-600/90 font-mono",
      },
      bars: "bg-green-500/80 dark:bg-green-500/80",
    },
    top_artists: {
      container: {
        background: "bg-black dark:bg-black",
        border: "border border-green-500/30 dark:border-green-500/30",
        shadow:
          "shadow-[0_0_10px_rgba(34,197,94,0.2)] dark:shadow-[0_0_10px_rgba(34,197,94,0.2)]",
      },
      rank: {
        text: "text-green-600/90 dark:text-green-600/90 font-mono",
      },
      artist: {
        text: "text-green-400 dark:text-green-400 font-mono",
      },
      plays: {
        text: "text-green-600/90 dark:text-green-600/90 font-mono",
      },
    },
  },
};
