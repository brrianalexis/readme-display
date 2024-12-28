import { http } from "msw";

import { server } from "@/test/mocks/server";

import { encodeImage } from "../encode-image";

const TEST_IMAGE_URL = "https://test-image.jpg";
const TRANSPARENT_GIF =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

describe("encodeImage", () => {
  const originalConsoleError = console.error;

  beforeAll(() => {
    console.error = vi.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it("should encode image URL to base64", async () => {
    server.use(
      http.get(TEST_IMAGE_URL, () => {
        return new Response(Buffer.from("test image data"), {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });
      })
    );

    const result = await encodeImage(TEST_IMAGE_URL);
    expect(result).toMatch(/^data:image\/jpeg;base64,/);
  });

  it("should return transparent GIF for empty URL", async () => {
    const result = await encodeImage("");
    expect(result).toBe(TRANSPARENT_GIF);
  });

  it("should return transparent GIF on network errors", async () => {
    server.use(
      http.get(TEST_IMAGE_URL, () => {
        return Response.error();
      })
    );

    const result = await encodeImage(TEST_IMAGE_URL);
    expect(result).toBe(TRANSPARENT_GIF);
  });
});
