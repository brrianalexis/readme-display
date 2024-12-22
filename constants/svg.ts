export const SVG_CONFIG = {
  lastfm: {
    width: 480,
    height: 480,
    top_artists_amount: 5,
    animation: {
      bars: {
        count: 84,
        min_duration: 1000,
        max_duration: 1300,
      },
    },
  },
  letterboxd: {
    width: 700,
    height: 250,
    entries_amount: 3,
  },
} as const;
