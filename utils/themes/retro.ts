import { ThemeConfig } from "@/types";

export const retroTheme: ThemeConfig = {
  letterboxd: {
    container: {
      background: "bg-[#c0c0c0] dark:bg-[#3b3b3b]",
      border:
        "border-[3px] border-[#dfdfdf] dark:border-[#7c7c7c] border-r-[#808080] dark:border-r-[#202020] border-b-[#808080] dark:border-b-[#202020]",
      shadow: "",
    },
    title: {
      text: "text-[#000000] dark:text-[#ffffff] font-['MS_Sans_Serif']",
    },
    card: {
      image: {
        border:
          "border-2 border-[#808080] dark:border-[#202020] border-r-[#dfdfdf] dark:border-r-[#7c7c7c] border-b-[#dfdfdf] dark:border-b-[#7c7c7c]",
      },
      title: {
        text: "text-[#000000] dark:text-[#ffffff] font-['MS_Sans_Serif']",
      },
      metadata: {
        text: "text-[#000000]/70 dark:text-[#ffffff]/70 font-['MS_Sans_Serif']",
      },
    },
  },
  lastfm: {
    container: {
      background: "bg-[#c0c0c0] dark:bg-[#3b3b3b]",
      border:
        "border-[3px] border-[#dfdfdf] dark:border-[#7c7c7c] border-r-[#808080] dark:border-r-[#202020] border-b-[#808080] dark:border-b-[#202020]",
      shadow: "",
    },
    title: {
      text: "text-[#000000] dark:text-[#ffffff] font-['MS_Sans_Serif']",
    },
    now_playing: {
      image: {
        border:
          "border-2 border-[#808080] dark:border-[#202020] border-r-[#dfdfdf] dark:border-r-[#7c7c7c] border-b-[#dfdfdf] dark:border-b-[#7c7c7c]",
      },
      track: {
        text: "text-[#000000] dark:text-[#ffffff] font-['MS_Sans_Serif']",
      },
      artist: {
        text: "text-[#000000]/70 dark:text-[#ffffff]/70 font-['MS_Sans_Serif']",
      },
      bars: "bg-[#000080] dark:bg-[#000080]",
    },
    top_artists: {
      container: {
        background: "bg-[#c0c0c0] dark:bg-[#3b3b3b]",
        border:
          "border-[3px] border-[#dfdfdf] dark:border-[#7c7c7c] border-r-[#808080] dark:border-r-[#202020] border-b-[#808080] dark:border-b-[#202020]",
        shadow: "",
      },
      rank: {
        text: "text-[#000000]/70 dark:text-[#ffffff]/70 font-['MS_Sans_Serif']",
      },
      artist: {
        text: "text-[#000000] dark:text-[#ffffff] font-['MS_Sans_Serif']",
      },
      plays: {
        text: "text-[#000000]/70 dark:text-[#ffffff]/70 font-['MS_Sans_Serif']",
      },
    },
  },
};
