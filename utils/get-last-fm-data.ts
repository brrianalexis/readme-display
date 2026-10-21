import axios from "axios";

import { API_CONFIG, getLastFmUrl } from "@/constants";
import type {
	Artist,
	Image,
	ImageSize,
	LastFmData,
	RecentTracksAPIResponse,
	TopArtistsAPIResponse,
} from "@/types";

import { encodeImage } from "./encode-image";
import { escapeForbiddenCharacters } from "./escape-forbidden-characters";

const getLastFmImage = async (
	images: Image[],
	size: ImageSize = "extralarge",
): Promise<string> => {
	const image = images.find((img) => img.size === size);

	if (!image || !image["#text"]) {
		return "";
	}

	return encodeImage(getLastFmImageCandidates(image["#text"]));
};

// The API returns covers on lastfm-img.freetls.fastly.net, but that host
// answers 404 from Vercel for URLs that work elsewhere. The alternate host
// goes first and the original stays as a fallback, then a smaller size
const LASTFM_IMAGE_HOSTS = [
	"lastfm.freetls.fastly.net",
	"lastfm-img.freetls.fastly.net",
];

export const getLastFmImageCandidates = (url: string): string[] => {
	if (!URL.canParse(url)) {
		return [url];
	}

	const { pathname } = new URL(url);
	const smallerPathname = pathname.replace(/\/i\/u\/[^/]+\//, "/i/u/174s/");

	const candidates = [pathname, smallerPathname].flatMap((path) =>
		LASTFM_IMAGE_HOSTS.map((host) => `https://${host}${path}`),
	);

	return [...new Set([...candidates, url])];
};

export const getTopArtists = async (): Promise<Artist[]> => {
	const { data } = await axios.get<TopArtistsAPIResponse>(
		getLastFmUrl("getTopArtists", {
			period: API_CONFIG.lastfm.params.period,
			limit: API_CONFIG.lastfm.params.limit,
		}),
		{ timeout: API_CONFIG.timeout },
	);

	return data.topartists.artist
		.slice(0, API_CONFIG.lastfm.params.limit)
		.map((artist) => ({
			...artist,
			name: escapeForbiddenCharacters(artist.name),
		}));
};

export const getLastFmData = async (): Promise<LastFmData> => {
	const [{ data: recentTracksData }, topWeeklyArtists] = await Promise.all([
		axios.get<RecentTracksAPIResponse>(getLastFmUrl("getRecentTracks"), {
			timeout: API_CONFIG.timeout,
		}),
		getTopArtists(),
	]);

	const lastTrack = recentTracksData.recenttracks.track[0];

	if (!lastTrack) {
		return {
			albumTitle: "",
			artistName: "",
			trackName: "No recent tracks",
			encodedTrackImage: "",
			topWeeklyArtists,
		};
	}

	const encodedTrackImage = await getLastFmImage(lastTrack.image);

	return {
		albumTitle: escapeForbiddenCharacters(lastTrack.album["#text"]),
		artistName: escapeForbiddenCharacters(lastTrack.artist["#text"]),
		trackName: escapeForbiddenCharacters(lastTrack.name),
		encodedTrackImage,
		topWeeklyArtists,
	};
};
