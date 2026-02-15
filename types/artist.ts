import type { Image } from "./image";

export type ArtistAttributes = {
	rank: string;
};

export type Artist = {
	streamable: string;
	image: Image[];
	mbid: string;
	url: string;
	playcount: string;
	"@attr": ArtistAttributes;
	name: string;
};
