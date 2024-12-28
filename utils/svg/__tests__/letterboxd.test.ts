import { LetterboxdEntry, THEME_NAMES } from "@/types";

import { createEntryCard, parseEntryTitle } from "../letterboxd";

describe("letterboxd svg utils", () => {
  describe("parseEntryTitle", () => {
    it("should split title and rating correctly", () => {
      expect(parseEntryTitle("Movie Title, 2016 - ⭑⭑⭑⭑⭑")).toEqual([
        "Movie Title, 2016",
        "⭑⭑⭑⭑⭑",
      ]);
    });

    it("should handle titles without rating", () => {
      expect(parseEntryTitle("Movie Title, 2016")).toEqual([
        "Movie Title, 2016",
        "",
      ]);
    });

    it("should handle titles with multiple dashes", () => {
      expect(parseEntryTitle("Movie - With - Dashes, 2016 - ⭑⭑⭑")).toEqual([
        "Movie - With - Dashes, 2016",
        "⭑⭑⭑",
      ]);
    });
  });

  describe("createEntryCard", () => {
    const mockEntry: LetterboxdEntry = {
      title: "Test Movie, 2016 - ⭑⭑⭑⭑",
      link: "https://letterboxd.com/test",
      pubDate: "2024-03-14",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    };

    it.each(THEME_NAMES)("should create entry card for %s theme", (theme) => {
      const card = createEntryCard(mockEntry, theme);

      expect(card).toContain("Test Movie");
      expect(card).toContain("⭑⭑⭑⭑");
      expect(card).toContain(mockEntry.image);
      expect(card).toContain(new Date(mockEntry.pubDate).toLocaleDateString());
    });

    it("should handle entries without rating", () => {
      const entryWithoutRating: LetterboxdEntry = {
        ...mockEntry,
        title: "Test Movie",
      };

      const card = createEntryCard(entryWithoutRating, "minimal");
      expect(card).toContain("Test Movie");
      expect(card).not.toContain("⭑");
    });
  });
});
