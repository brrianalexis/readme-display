import { ThemeConfig } from "@/types";

export const sunbatherTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background:
        "bg-gradient-to-br from-rose-300 to-orange-200 dark:from-rose-900 dark:to-orange-900",
      border: "border-[1px] border-white/30 dark:border-white/20",
      shadow:
        "shadow-[0_0_40px_rgba(251,113,133,0.4)] dark:shadow-[0_0_40px_rgba(251,113,133,0.2)]",
    },
    title: {
      text: "text-white dark:text-white font-extralight tracking-[0.25em] uppercase text-sm",
    },
    card: {
      image: {
        border: "contrast-125 brightness-110 saturate-150",
      },
      title: {
        text: "text-white dark:text-white font-extralight tracking-[0.15em] uppercase text-xs",
      },
      metadata: {
        text: "text-white/70 dark:text-white/70 font-thin tracking-[0.1em] text-xs",
      },
    },
  },
  lastfm: {
    container: {
      background:
        "bg-gradient-to-br from-rose-300 to-orange-200 dark:from-rose-900 dark:to-orange-900",
      border: "border-[1px] border-white/30 dark:border-white/20",
      shadow:
        "shadow-[0_0_40px_rgba(251,113,133,0.4)] dark:shadow-[0_0_40px_rgba(251,113,133,0.2)]",
    },
    title: {
      text: "text-white dark:text-white font-extralight tracking-[0.25em] uppercase text-sm",
    },
    now_playing: {
      image: {
        border: "contrast-125 brightness-110 saturate-150",
      },
      track: {
        text: "text-white dark:text-white font-extralight tracking-[0.15em] uppercase text-xs",
      },
      artist: {
        text: "text-white/70 dark:text-white/70 font-thin tracking-[0.1em] text-xs",
      },
      bars: "bg-white/80 dark:bg-white/80",
    },
    top_artists: {
      container: {
        background:
          "bg-gradient-to-br from-rose-300 to-orange-200 dark:from-rose-900 dark:to-orange-900",
        border: "border-[1px] border-white/30 dark:border-white/20",
        shadow:
          "shadow-[0_0_40px_rgba(251,113,133,0.4)] dark:shadow-[0_0_40px_rgba(251,113,133,0.2)]",
      },
      rank: {
        text: "text-white/70 dark:text-white/70 font-thin tracking-[0.1em] text-xs",
      },
      artist: {
        text: "text-white dark:text-white font-extralight tracking-[0.15em] uppercase text-xs",
      },
      plays: {
        text: "text-white/70 dark:text-white/70 font-thin tracking-[0.1em] text-xs",
      },
    },
  },
};
