import { HttpResponse, http } from "msw";

import { API_CONFIG } from "@/constants";
import { server } from "@/test/mocks";

import {
	getLastFmData,
	getLastFmImageCandidates,
	getTopArtists,
} from "../get-last-fm-data";

vi.mock("../encode-image", () => ({
	encodeImage: vi.fn().mockResolvedValue("data:image/jpeg;base64,mockedBase64"),
}));

describe("Last.fm", () => {
	it("should fetch and parse data", async () => {
		process.env.LASTFM_USERNAME = "testuser";
		process.env.LASTFM_API_KEY = "testkey";

		server.use(
			http.get(API_CONFIG.lastfm.baseUrl, ({ request }) => {
				const url = new URL(request.url);
				const method = url.searchParams.get("method");

				if (method === API_CONFIG.lastfm.methods.getRecentTracks) {
					return HttpResponse.json({
						recenttracks: {
							track: [
								{
									name: "Test Track",
									artist: { "#text": "Test Artist" },
									album: { "#text": "Test Album" },
									image: [{ "#text": "test-image.jpg", size: "extralarge" }],
									"@attr": { nowplaying: "true" },
								},
							],
						},
					});
				}

				if (method === API_CONFIG.lastfm.methods.getTopArtists) {
					return HttpResponse.json({
						topartists: {
							artist: Array.from({ length: 5 }, (_, i) => ({
								name: `Artist ${i + 1}`,
								playcount: `${(5 - i) * 100}`,
								"@attr": { rank: `${i + 1}` },
								mbid: "",
								url: "",
								streamable: "0",
								image: [],
							})),
						},
					});
				}
			}),
		);

		const data = await getLastFmData();
		expect(data).toEqual({
			trackName: "Test Track",
			artistName: "Test Artist",
			albumTitle: "Test Album",
			encodedTrackImage: "data:image/jpeg;base64,mockedBase64",
			topWeeklyArtists: expect.arrayContaining([
				expect.objectContaining({
					name: "Artist 1",
					playcount: "500",
				}),
			]),
		});
	});

	it("should escape forbidden characters in top artist names", async () => {
		server.use(
			http.get(API_CONFIG.lastfm.baseUrl, () => {
				return HttpResponse.json({
					topartists: {
						artist: [
							{
								name: "Simon & Garfunkel",
								playcount: "100",
								"@attr": { rank: "1" },
								mbid: "",
								url: "",
								streamable: "0",
								image: [],
							},
						],
					},
				});
			}),
		);

		const artists = await getTopArtists();

		expect(artists[0].name).toBe("Simon &amp; Garfunkel");
	});

	it("should handle API errors", async () => {
		server.use(
			http.get(API_CONFIG.lastfm.baseUrl, () => {
				return new HttpResponse(null, { status: 500 });
			}),
		);

		await expect(getLastFmData()).rejects.toThrow();
	});
});

describe("getLastFmImageCandidates", () => {
	it("should try the original URL first, then alternate hosts and sizes", () => {
		const url = "https://lastfm-img.freetls.fastly.net/i/u/300x300/abc123.png";

		expect(getLastFmImageCandidates(url)).toEqual([
			url,
			"https://lastfm.freetls.fastly.net/i/u/300x300/abc123.png",
			"https://lastfm-img.freetls.fastly.net/i/u/174s/abc123.png",
			"https://lastfm.freetls.fastly.net/i/u/174s/abc123.png",
		]);
	});
});
