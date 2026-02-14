import type {
	Artist,
	ArtistInfoLink,
	ArtistInfoStats,
	TopArtistsAttributes,
} from "./artist";
import type { Image } from "./image";
import type { Tag } from "./tag";
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
		"@attr": TopArtistsAttributes;
	};
};

export type ArtistInfoAPIResponse = {
	artist: {
		name: string;
		mbid: string;
		url: string;
		image: Image[];
		streamable: string;
		ontour: string;
		stats: ArtistInfoStats;
		similar: {
			artist: Artist[];
		};
		tags: {
			tag: Tag[];
		};
		bio: {
			links: {
				link: ArtistInfoLink[];
			};
			published: string;
			summary: string;
			content: string;
		};
	};
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
