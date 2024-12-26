import { ThemeConfig } from "@/types";

export const blackmetalTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[1px] border-white/30 dark:border-white/30",
      shadow: "shadow-none",
    },
    title: {
      text: "text-white dark:text-white font-metal uppercase tracking-[0.15em] text-shadow-brutal",
    },
    card: {
      image: {
        border: "grayscale contrast-[2] brightness-90 invert",
      },
      title: {
        text: "text-white dark:text-white font-metal uppercase tracking-[0.1em] text-shadow-brutal",
      },
      metadata: {
        text: "text-white/60 dark:text-white/60 uppercase tracking-wider",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[1px] border-white/30 dark:border-white/30",
      shadow: "shadow-none",
    },
    title: {
      text: "text-white dark:text-white font-metal uppercase tracking-[0.15em] text-shadow-brutal",
    },
    now_playing: {
      image: {
        border: "grayscale contrast-[2] brightness-90 invert",
      },
      track: {
        text: "text-white dark:text-white font-metal uppercase tracking-[0.1em] text-shadow-brutal",
      },
      artist: {
        text: "text-white/60 dark:text-white/60 uppercase tracking-wider",
      },
      bars: "bg-white dark:bg-white",
    },
    top_artists: {
      container: {
        background: "bg-black dark:bg-black",
        border: "border-[1px] border-white/30 dark:border-white/30",
        shadow: "shadow-none",
      },
      rank: {
        text: "text-white/60 dark:text-white/60 uppercase tracking-wider",
      },
      artist: {
        text: "text-white dark:text-white font-metal uppercase tracking-[0.1em] text-shadow-brutal",
      },
      plays: {
        text: "text-white/60 dark:text-white/60 uppercase tracking-wider",
      },
    },
  },
};
