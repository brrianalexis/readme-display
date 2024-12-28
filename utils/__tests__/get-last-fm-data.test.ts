import { http, HttpResponse } from "msw";

import { API_CONFIG } from "@/constants";
import { server } from "@/test/mocks";

import { getLastFmData } from "../get-last-fm-data";

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
      })
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

  it("should handle API errors", async () => {
    server.use(
      http.get(API_CONFIG.lastfm.baseUrl, () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    await expect(getLastFmData()).rejects.toThrow();
  });
});
