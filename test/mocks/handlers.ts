import { http, HttpResponse } from "msw";

import { API_CONFIG } from "@/constants";

const TEST_IMAGE_URL = "https://test-image.jpg";
const TEST_IMAGE_BASE64 =
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const lastFmHandlers = [
  http.get("https://ws.audioscrobbler.com/2.0/", ({ request }) => {
    const url = new URL(request.url);
    const method = url.searchParams.get("method");

    if (method === "user.getRecentTracks") {
      return HttpResponse.json({
        recenttracks: {
          track: [
            {
              name: "Test Track",
              artist: { "#text": "Test Artist" },
              album: { "#text": "Test Album" },
              image: [{ "#text": "test-image.jpg", size: "large" }],
              "@attr": { nowplaying: "true" },
            },
          ],
        },
      });
    }

    if (method === "user.getTopArtists") {
      return HttpResponse.json({
        topartists: {
          artist: [
            {
              name: "Top Artist 1",
              playcount: "100",
              image: [{ "#text": "artist1.jpg", size: "large" }],
            },
            {
              name: "Top Artist 2",
              playcount: "50",
              image: [{ "#text": "artist2.jpg", size: "large" }],
            },
          ],
        },
      });
    }
  }),
];

const letterboxdHandlers = [
  http.get(API_CONFIG.letterboxd.baseUrl, () => {
    return HttpResponse.xml(`
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
        <channel>
          <item>
            <title>Test Movie, 2024 - ⭑⭑⭑⭑⭑</title>
            <link>https://letterboxd.com/test/film/test-movie/</link>
            <pubDate>Thu, 14 Mar 2024 20:00:00 +0000</pubDate>
            <description><![CDATA[<p><img src="${TEST_IMAGE_URL}" /></p>Watched on Thursday March 14, 2024.]]></description>
          </item>
        </channel>
      </rss>
    `);
  }),

  http.get(TEST_IMAGE_URL, () => {
    return new HttpResponse(Buffer.from(TEST_IMAGE_BASE64, "base64"), {
      headers: {
        "Content-Type": "image/gif",
        "Content-Length": String(TEST_IMAGE_BASE64.length),
      },
    });
  }),

  http.options(TEST_IMAGE_URL, () => {
    return new HttpResponse(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  }),
];

export const handlers = [...letterboxdHandlers, ...lastFmHandlers];
