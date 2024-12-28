export const SVG_CONFIG = {
  letterboxd: {
    width: 480,
    height: 250,
    entries_amount: 3,
  },
  lastfm: {
    now_playing: {
      width: 480,
      height: 170,
      animation: {
        bars: {
          count: 84,
          min_duration: 1000,
          max_duration: 1300,
        },
      },
    },
    top_artists: {
      width: 480,
      height: 235,
      amount: 5,
    },
  },
} as const;
