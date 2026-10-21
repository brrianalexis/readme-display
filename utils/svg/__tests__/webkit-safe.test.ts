import { type LastFmWidgetNowPlaying, THEME_NAMES } from "@/types";

import {
	createLastFmNowPlayingSVG,
	createLastFmTopArtistsSVG,
} from "../last-fm";
import { createLetterboxdSVG } from "../letterboxd";

// Inside a foreignObject, WebKit (Safari, GitHub's iOS app) paints elements
// that get their own layer at unscaled coordinates when the SVG is scaled
// down, so these utilities break the widgets on mobile
const LAYER_UTILITIES =
	/^-?(grayscale|sepia|invert|contrast|brightness|saturate|hue-rotate|blur|drop-shadow|backdrop-[a-z-]+|opacity|rotate|scale|translate-[xy]|skew-[xy]|mix-blend)(-|$)|^\[(filter|backdrop-filter|transform|opacity|mix-blend-mode):|^(relative|absolute|fixed|sticky|transform)$/;

const getClassTokens = (markup: string) =>
	[...markup.matchAll(/class="([^"]*)"/g)]
		.flatMap((match) => match[1].split(/\s+/))
		.filter(Boolean)
		// drop variant prefixes like dark: or hover:
		.map((token) => token.replace(/^([a-z-]+:)+/, ""));

const nowPlaying: LastFmWidgetNowPlaying = {
	trackName: "Track",
	artistName: "Artist",
	albumTitle: "Album",
	encodedTrackImage: "data:image/png;base64,AA==",
};

const artists = Array.from({ length: 5 }, (_, i) => ({
	name: `Artist ${i + 1}`,
	playcount: "100",
	streamable: "0",
	image: [],
	mbid: "",
	url: "",
	"@attr": { rank: `${i + 1}` },
}));

const entries = Array.from({ length: 3 }, (_, i) => ({
	title: `Movie ${i + 1}, 2024 - ★★★`,
	image: "data:image/png;base64,AA==",
	link: "",
	pubDate: "October 18, 2026",
}));

describe("WebKit-safe markup", () => {
	it.each(
		THEME_NAMES,
	)("should not use layer-creating classes in %s", (theme) => {
		const markup = [
			createLastFmNowPlayingSVG(nowPlaying, "", theme),
			createLastFmTopArtistsSVG(artists, "", theme),
			createLetterboxdSVG(entries, "", theme),
		].join("");

		const offending = getClassTokens(markup).filter((token) =>
			LAYER_UTILITIES.test(token),
		);

		expect(offending).toEqual([]);
	});
});
