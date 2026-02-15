import type { Artist } from "./artist";
import type { Track, TrackAttributes } from "./track";

export type RecentTracksAPIResponse = {
	recenttracks: {
		track: Track[];
		"@attr": TrackAttributes;
	};
};

export type TopArtistsAPIResponse = {
	topartists: {
		artist: Artist[];
	};
};

export type LastFmWidgetNowPlaying = {
	trackName: string;
	artistName: string;
	albumTitle: string;
	encodedTrackImage: string;
};

export type LastFmData = {
	albumTitle: string;
	artistName: string;
	trackName: string;
	encodedTrackImage: string;
	topWeeklyArtists: Artist[];
};

export type LetterboxdEntry = {
	title: string;
	image: string;
	link: string;
	pubDate: string;
};
