export const API_CONFIG = {
  lastfm: {
    baseUrl: "http://ws.audioscrobbler.com/2.0/",
    methods: {
      getRecentTracks: "user.getRecentTracks",
      getTopArtists: "user.getTopArtists",
    },
    params: {
      period: "7day",
      limit: 5,
      format: "json",
    },
  },
  letterboxd: {
    baseUrl: `https://letterboxd.com/${process.env.LETTERBOXD_USERNAME}/rss/`,
    params: {
      limit: 3,
    },
  },
} as const;

export const getLastFmParams = (
  method: keyof typeof API_CONFIG.lastfm.methods
) =>
  `method=${API_CONFIG.lastfm.methods[method]}&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=${API_CONFIG.lastfm.params.format}`;
