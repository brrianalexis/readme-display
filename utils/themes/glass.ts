import { ThemeConfig } from "@/types";

export const glassTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background:
        "bg-gradient-to-br from-white/40 to-white/10 dark:from-neutral-900/40 dark:to-neutral-900/10 backdrop-blur-md",
      border: "border-[0.5px] border-white/40 dark:border-white/10",
      shadow:
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.07)]",
    },
    title: {
      text: "text-neutral-800/90 dark:text-white/90 drop-shadow-sm",
    },
    card: {
      image: {
        border: "opacity-90 hover:opacity-100 transition-opacity",
      },
      title: {
        text: "text-neutral-700/90 dark:text-white/80 drop-shadow-sm",
      },
      metadata: {
        text: "text-neutral-600/75 dark:text-white/60",
      },
    },
  },
  lastfm: {
    container: {
      background:
        "bg-gradient-to-br from-white/40 to-white/10 dark:from-neutral-900/40 dark:to-neutral-900/10 backdrop-blur-md",
      border: "border-[0.5px] border-white/40 dark:border-white/10",
      shadow:
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.07)]",
    },
    title: {
      text: "text-neutral-800/90 dark:text-white/90 drop-shadow-sm",
    },
    now_playing: {
      image: {
        border: "rounded-xl shadow-sm",
      },
      track: {
        text: "text-neutral-700/90 dark:text-white/80 drop-shadow-sm",
      },
      artist: {
        text: "text-neutral-600/75 dark:text-white/60",
      },
      bars: "bg-neutral-400/50 dark:bg-white/60 backdrop-blur-sm",
    },
    top_artists: {
      container: {
        background:
          "bg-gradient-to-br from-white/40 to-white/10 dark:from-neutral-900/40 dark:to-neutral-900/10 backdrop-blur-md",
        border: "border-[0.5px] border-white/40 dark:border-white/10",
        shadow:
          "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.07)]",
      },
      rank: {
        text: "text-neutral-500/75 dark:text-white/60",
      },
      artist: {
        text: "text-neutral-700/90 dark:text-white/80 drop-shadow-sm",
      },
      plays: {
        text: "text-neutral-600/75 dark:text-white/70",
      },
    },
  },
};
