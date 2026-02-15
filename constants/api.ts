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
		params: {
			limit: 3,
		},
	},
} as const;

export const getLetterboxdUrl = () =>
	`https://letterboxd.com/${process.env.LETTERBOXD_USERNAME}/rss/`;

export const getLastFmUrl = (
	method: keyof typeof API_CONFIG.lastfm.methods,
	extra?: Record<string, string | number>,
) => {
	const params = new URLSearchParams({
		method: API_CONFIG.lastfm.methods[method],
		user: process.env.LASTFM_USERNAME ?? "",
		api_key: process.env.LASTFM_API_KEY ?? "",
		format: API_CONFIG.lastfm.params.format,
	});

	if (extra) {
		for (const [key, value] of Object.entries(extra)) {
			params.set(key, String(value));
		}
	}

	return `${API_CONFIG.lastfm.baseUrl}?${params}`;
};
