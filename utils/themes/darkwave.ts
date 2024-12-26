import { ThemeConfig } from "@/types";

export const darkwaveTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[2px] border-zinc-800 dark:border-zinc-800",
      shadow:
        "shadow-[0_0_20px_rgba(76,29,149,0.15)] dark:shadow-[0_0_20px_rgba(76,29,149,0.15)]",
    },
    title: {
      text: "text-violet-200/80 dark:text-violet-200/80 font-bold uppercase tracking-[0.2em]",
    },
    card: {
      image: {
        border: "grayscale contrast-150 brightness-75",
      },
      title: {
        text: "text-white dark:text-white uppercase tracking-widest text-[0.9em]",
      },
      metadata: {
        text: "text-zinc-600 dark:text-zinc-600 uppercase tracking-wider",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[2px] border-zinc-800 dark:border-zinc-800",
      shadow:
        "shadow-[0_0_20px_rgba(76,29,149,0.15)] dark:shadow-[0_0_20px_rgba(76,29,149,0.15)]",
    },
    title: {
      text: "text-violet-200/80 dark:text-violet-200/80 font-bold uppercase tracking-[0.2em]",
    },
    now_playing: {
      image: {
        border: "grayscale contrast-150 brightness-75",
      },
      track: {
        text: "text-white dark:text-white uppercase tracking-widest text-[0.9em]",
      },
      artist: {
        text: "text-zinc-600 dark:text-zinc-600 uppercase tracking-wider",
      },
      bars: "bg-violet-700/80 dark:bg-violet-700/80",
    },
    top_artists: {
      container: {
        background: "bg-black dark:bg-black",
        border: "border-[2px] border-zinc-800 dark:border-zinc-800",
        shadow:
          "shadow-[0_0_20px_rgba(76,29,149,0.15)] dark:shadow-[0_0_20px_rgba(76,29,149,0.15)]",
      },
      rank: {
        text: "text-zinc-700 dark:text-zinc-700 uppercase tracking-wider",
      },
      artist: {
        text: "text-white dark:text-white uppercase tracking-widest text-[0.9em]",
      },
      plays: {
        text: "text-zinc-600 dark:text-zinc-600 uppercase tracking-wider",
      },
    },
  },
};
