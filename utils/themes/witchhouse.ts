import { ThemeConfig } from "@/types";

export const witchhouseTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[1px] border-white/20 dark:border-white/20",
      shadow:
        "shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    },
    title: {
      text: "text-white/90 dark:text-white/90 font-light tracking-[0.5em]",
    },
    card: {
      image: {
        border: "grayscale contrast-200 brightness-50",
      },
      title: {
        text: "text-white/80 dark:text-white/80 font-light tracking-[0.3em]",
      },
      metadata: {
        text: "text-white/40 dark:text-white/40 font-light tracking-[0.2em]",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-black dark:bg-black",
      border: "border-[1px] border-white/20 dark:border-white/20",
      shadow:
        "shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    },
    title: {
      text: "text-white/90 dark:text-white/90 font-light tracking-[0.5em]",
    },
    now_playing: {
      image: {
        border: "grayscale contrast-200 brightness-50",
      },
      track: {
        text: "text-white/80 dark:text-white/80 font-light tracking-[0.3em]",
      },
      artist: {
        text: "text-white/40 dark:text-white/40 font-light tracking-[0.2em]",
      },
      bars: "bg-white/30 dark:bg-white/30",
    },
    top_artists: {
      container: {
        background: "bg-black dark:bg-black",
        border: "border-[1px] border-white/20 dark:border-white/20",
        shadow:
          "shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      },
      rank: {
        text: "text-white/40 dark:text-white/40 font-light tracking-[0.2em]",
      },
      artist: {
        text: "text-white/80 dark:text-white/80 font-light tracking-[0.3em]",
      },
      plays: {
        text: "text-white/40 dark:text-white/40 font-light tracking-[0.2em]",
      },
    },
  },
};
