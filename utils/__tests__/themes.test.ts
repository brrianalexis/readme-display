import { THEME_NAMES } from "@/types";

import { getTheme } from "../themes";

describe("Theme utils", () => {
  describe("getTheme", () => {
    it.each(THEME_NAMES)("should return theme config for %s", (themeName) => {
      const theme = getTheme(themeName);
      expect(theme).toBeDefined();
      expect(theme).toHaveProperty("letterboxd");
      expect(theme).toHaveProperty("lastfm");
    });

    it("should return minimal theme for invalid theme name", () => {
      const theme = getTheme("invalid-theme");
      expect(theme).toEqual(getTheme("minimal"));
    });

    it("should return minimal theme when no theme is provided", () => {
      const theme = getTheme();
      expect(theme).toEqual(getTheme("minimal"));
    });
  });
});
