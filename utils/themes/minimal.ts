import { ThemeConfig } from "@/types";

export const minimalTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "",
      border: "",
      shadow: "",
    },
    title: {
      text: "text-neutral-600 dark:text-neutral-400 font-normal",
    },
    card: {
      image: {
        border: "opacity-90 hover:opacity-100 transition-opacity",
      },
      title: {
        text: "text-neutral-700 dark:text-neutral-300 font-normal",
      },
      metadata: {
        text: "text-neutral-400 dark:text-neutral-500",
      },
    },
  },
  lastfm: {
    container: {
      background: "",
      border: "",
      shadow: "",
    },
    title: {
      text: "text-neutral-600 dark:text-neutral-400 font-normal",
    },
    now_playing: {
      image: {
        border: "opacity-90 hover:opacity-100 transition-opacity",
      },
      track: {
        text: "text-neutral-700 dark:text-neutral-300 font-normal",
      },
      artist: {
        text: "text-neutral-500 dark:text-neutral-500",
      },
      bars: "bg-neutral-300 dark:bg-neutral-600",
    },
    top_artists: {
      container: {
        background: "",
        border: "",
        shadow: "",
      },
      rank: {
        text: "text-neutral-400 dark:text-neutral-500",
      },
      artist: {
        text: "text-neutral-700 dark:text-neutral-300 font-normal",
      },
      plays: {
        text: "text-neutral-400 dark:text-neutral-500",
      },
    },
  },
};
