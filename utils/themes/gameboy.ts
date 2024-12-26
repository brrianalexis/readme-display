import { ThemeConfig } from "@/types";

export const gameboyTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-[#9bbc0f] dark:bg-[#0f380f]",
      border: "border-[3px] border-[#306230] dark:border-[#8bac0f]",
      shadow: "shadow-[4px_4px_0px_#306230] dark:shadow-[4px_4px_0px_#8bac0f]",
    },
    title: {
      text: "text-[#0f380f] dark:text-[#9bbc0f] font-bold",
    },
    card: {
      image: {
        border:
          "border-[2px] border-[#306230] dark:border-[#8bac0f] grayscale contrast-125 brightness-110",
      },
      title: {
        text: "text-[#0f380f] dark:text-[#9bbc0f] font-bold",
      },
      metadata: {
        text: "text-[#306230] dark:text-[#8bac0f]",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-[#9bbc0f] dark:bg-[#0f380f]",
      border: "border-[3px] border-[#306230] dark:border-[#8bac0f]",
      shadow: "shadow-[4px_4px_0px_#306230] dark:shadow-[4px_4px_0px_#8bac0f]",
    },
    title: {
      text: "text-[#0f380f] dark:text-[#9bbc0f] font-bold",
    },
    now_playing: {
      image: {
        border:
          "border-[2px] border-[#306230] dark:border-[#8bac0f] grayscale contrast-125 brightness-110",
      },
      track: {
        text: "text-[#0f380f] dark:text-[#9bbc0f] font-bold",
      },
      artist: {
        text: "text-[#306230] dark:text-[#8bac0f]",
      },
      bars: "bg-[#0f380f] dark:bg-[#9bbc0f]",
    },
    top_artists: {
      container: {
        background: "bg-[#9bbc0f] dark:bg-[#0f380f]",
        border: "border-[3px] border-[#306230] dark:border-[#8bac0f]",
        shadow:
          "shadow-[4px_4px_0px_#306230] dark:shadow-[4px_4px_0px_#8bac0f]",
      },
      rank: {
        text: "text-[#306230] dark:text-[#8bac0f]",
      },
      artist: {
        text: "text-[#0f380f] dark:text-[#9bbc0f] font-bold",
      },
      plays: {
        text: "text-[#306230] dark:text-[#8bac0f]",
      },
    },
  },
};
