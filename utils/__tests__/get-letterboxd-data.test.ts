import { http, HttpResponse } from "msw";

import { API_CONFIG } from "@/constants";
import { server } from "@/test/mocks/server";

import { getLetterboxdData } from "../get-letterboxd-data";

const TEST_IMAGE_URL = "https://test-image.jpg";

describe("Letterboxd", () => {
  it("should fetch and parse RSS feed correctly", async () => {
    const data = await getLetterboxdData();

    expect(data).toHaveLength(1);
    expect(data[0]).toEqual({
      title: "Test Movie, 2024 - ⭑⭑⭑⭑⭑",
      link: "https://letterboxd.com/test/film/test-movie/",
      pubDate: "Thu, 14 Mar 2024 20:00:00 +0000",
      image: expect.stringMatching(/^data:image\/(jpeg|png|gif);base64,/),
    });
  });

  it("should respect the limit parameter", async () => {
    server.use(
      http.get(API_CONFIG.letterboxd.baseUrl, () => {
        const items = Array.from(
          { length: API_CONFIG.letterboxd.params.limit + 2 },
          (_, i) => `
          <item>
            <title>Movie ${i + 1}</title>
            <link>https://letterboxd.com/test/film/movie-${i + 1}/</link>
            <pubDate>Thu, ${14 - i} Mar 2024 20:00:00 +0000</pubDate>
            <description><![CDATA[<p><img src="${TEST_IMAGE_URL}" /></p>]]></description>
          </item>
        `
        ).join("");

        return HttpResponse.xml(`
          <?xml version="1.0" encoding="UTF-8"?>
          <rss version="2.0">
            <channel>
              ${items}
            </channel>
          </rss>
        `);
      })
    );

    const data = await getLetterboxdData();
    expect(data).toHaveLength(API_CONFIG.letterboxd.params.limit);
  });

  it("should handle missing image in description", async () => {
    server.use(
      http.get(API_CONFIG.letterboxd.baseUrl, () => {
        return HttpResponse.xml(`
          <?xml version="1.0" encoding="UTF-8"?>
          <rss version="2.0">
            <channel>
              <item>
                <title>Movie Without Image</title>
                <link>https://letterboxd.com/test/film/no-image/</link>
                <pubDate>Thu, 14 Mar 2024 20:00:00 +0000</pubDate>
                <description><![CDATA[<p>No image here</p>]]></description>
              </item>
            </channel>
          </rss>
        `);
      })
    );

    const data = await getLetterboxdData();
    expect(data[0].image).toBe(
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );
  });

  it("should handle empty RSS feed", async () => {
    server.use(
      http.get(API_CONFIG.letterboxd.baseUrl, () => {
        return HttpResponse.xml(`
          <?xml version="1.0" encoding="UTF-8"?>
          <rss version="2.0">
            <channel></channel>
          </rss>
        `);
      })
    );

    const data = await getLetterboxdData();
    expect(data).toHaveLength(0);
  });

  it("should handle network errors", async () => {
    server.use(
      http.get(API_CONFIG.letterboxd.baseUrl, () => {
        return HttpResponse.error();
      })
    );

    await expect(getLetterboxdData()).rejects.toThrow();
  });
});
