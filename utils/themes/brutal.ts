import { ThemeConfig } from "@/types";

export const brutalTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-stone-50 dark:bg-neutral-900",
      border: "border-3 border-neutral-800 dark:border-neutral-200",
      shadow: "shadow-[4px_4px_0px_#262626] dark:shadow-[4px_4px_0px_#e5e5e5]",
    },
    title: {
      text: "text-neutral-800 dark:text-neutral-100",
    },
    card: {
      image: {
        border: "border-2 border-neutral-800 dark:border-neutral-200",
      },
      title: {
        text: "text-neutral-800 dark:text-neutral-100",
      },
      metadata: {
        text: "text-neutral-600 dark:text-neutral-400",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-stone-50 dark:bg-neutral-900",
      border: "border-3 border-neutral-800 dark:border-neutral-200",
      shadow: "shadow-[4px_4px_0px_#262626] dark:shadow-[4px_4px_0px_#e5e5e5]",
    },
    title: {
      text: "text-neutral-800 dark:text-neutral-100",
    },
    now_playing: {
      image: {
        border: "border-2 border-neutral-800 dark:border-neutral-200",
      },
      track: {
        text: "text-neutral-800 dark:text-neutral-100",
      },
      artist: {
        text: "text-neutral-600 dark:text-neutral-400",
      },
      bars: "bg-neutral-800 border-neutral-800 dark:bg-neutral-200 dark:border-neutral-200",
    },
    top_artists: {
      container: {
        background: "bg-stone-50 dark:bg-neutral-900",
        border: "border-3 border-neutral-800 dark:border-neutral-200",
        shadow:
          "shadow-[4px_4px_0px_#262626] dark:shadow-[4px_4px_0px_#e5e5e5]",
      },
      rank: {
        text: "text-neutral-900 dark:text-neutral-100",
      },
      artist: {
        text: "text-neutral-900 dark:text-neutral-100",
      },
      plays: {
        text: "text-neutral-800 dark:text-neutral-200",
      },
    },
  },
};
