import { ThemeConfig } from "@/types";

export const neonTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-white dark:bg-neutral-900",
      border: "border-[2px] border-violet-500/50 dark:border-fuchsia-500/50",
      shadow:
        "shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:shadow-[0_0_15px_rgba(217,70,219,0.5)]",
    },
    title: {
      text: "text-violet-500 dark:text-fuchsia-500 font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.5)]",
    },
    card: {
      image: {
        border: "opacity-90",
      },
      title: {
        text: "text-blue-500 dark:text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
      },
      metadata: {
        text: "text-violet-400 dark:text-fuchsia-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.3)]",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-white dark:bg-neutral-900",
      border: "border-[2px] border-violet-500/50 dark:border-fuchsia-500/50",
      shadow:
        "shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:shadow-[0_0_15px_rgba(217,70,219,0.5)]",
    },
    title: {
      text: "text-violet-500 dark:text-fuchsia-500 font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.5)]",
    },
    now_playing: {
      image: {
        border: "opacity-90 rounded-lg",
      },
      track: {
        text: "text-blue-500 dark:text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
      },
      artist: {
        text: "text-violet-400 dark:text-fuchsia-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.3)]",
      },
      bars: "bg-gradient-to-t from-violet-500 to-blue-500 dark:from-fuchsia-500 dark:to-cyan-400",
    },
    top_artists: {
      container: {
        background: "bg-white dark:bg-neutral-900",
        border: "border-[2px] border-violet-500/50 dark:border-fuchsia-500/50",
        shadow:
          "shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:shadow-[0_0_15px_rgba(217,70,219,0.5)]",
      },
      rank: {
        text: "text-violet-400 dark:text-fuchsia-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.3)]",
      },
      artist: {
        text: "text-blue-500 dark:text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
      },
      plays: {
        text: "text-violet-400 dark:text-fuchsia-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] dark:drop-shadow-[0_0_8px_rgba(217,70,219,0.3)]",
      },
    },
  },
};
