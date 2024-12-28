import { SVG_CONFIG } from "@/constants";
import { Artist, LastFmWidgetNowPlaying, THEME_NAMES } from "@/types";

import {
  createLastFmTopArtistsSVG,
  createNowPlaying,
  createSoundBars,
} from "../last-fm";

describe("last-fm svg utils", () => {
  describe("createSoundBars", () => {
    it.each(THEME_NAMES)(
      "should generate correct number of bars for %s theme",
      (theme) => {
        const bars = createSoundBars(theme);
        const barCount = (bars.match(/<div class="bar/g) || []).length;

        expect(barCount).toBe(
          SVG_CONFIG.lastfm.now_playing.animation.bars.count
        );
      }
    );

    it.each(THEME_NAMES)(
      "should apply theme class to bars for %s theme",
      (theme) => {
        const bars = createSoundBars(theme);
        expect(bars).toContain(`class="bar`);
      }
    );
  });

  describe("createNowPlaying", () => {
    const mockProps: LastFmWidgetNowPlaying = {
      trackName: "Test Track",
      artistName: "Test Artist",
      albumTitle: "Test Album",
      encodedTrackImage:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    };

    it.each(THEME_NAMES)(
      "should create now playing widget for %s theme",
      (theme) => {
        const widget = createNowPlaying(mockProps, theme);

        expect(widget).toContain(mockProps.trackName);
        expect(widget).toContain(mockProps.artistName);
        expect(widget).toContain(mockProps.albumTitle);
        expect(widget).toContain(mockProps.encodedTrackImage);
        expect(widget).toContain("Last seen vibing to:");
      }
    );
  });

  describe("createLastFmTopArtistsSVG", () => {
    const mockArtists: Artist[] = Array.from({ length: 5 }, (_, i) => ({
      name: `Artist ${i + 1}`,
      playcount: `${(5 - i) * 100}`,
      streamable: "0",
      image: [],
      mbid: "",
      url: "",
      "@attr": { rank: `${i + 1}` },
    }));

    const mockStyles = ".test { color: red; }";

    it.each(THEME_NAMES)(
      "should create top artists SVG for %s theme",
      (theme) => {
        const svg = createLastFmTopArtistsSVG(mockArtists, mockStyles, theme);

        expect(svg).toContain(`width="${SVG_CONFIG.lastfm.top_artists.width}"`);
        expect(svg).toContain(
          `height="${SVG_CONFIG.lastfm.top_artists.height}"`
        );
        expect(svg).toContain("On repeat lately:");
        mockArtists.forEach((artist) => {
          expect(svg).toContain(artist.name);
          expect(svg).toContain(`${artist.playcount} plays`);
        });
        expect(svg).toContain(mockStyles);
      }
    );
  });
});
