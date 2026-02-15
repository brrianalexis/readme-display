import axios from "axios";

import { API_CONFIG, getLastFmParams } from "@/constants";
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

	return encodeImage(image["#text"]);
};

export const getTopArtists = async (): Promise<Artist[]> => {
	const { data } = await axios.get<TopArtistsAPIResponse>(
		`${API_CONFIG.lastfm.baseUrl}?${getLastFmParams(
			"getTopArtists",
		)}&period=${API_CONFIG.lastfm.params.period}&limit=${
			API_CONFIG.lastfm.params.limit
		}`,
	);

	return data.topartists.artist.slice(0, API_CONFIG.lastfm.params.limit);
};

export const getLastFmData = async (): Promise<LastFmData> => {
	const [{ data: recentTracksData }, topWeeklyArtists] = await Promise.all([
		axios.get<RecentTracksAPIResponse>(
			`${API_CONFIG.lastfm.baseUrl}?${getLastFmParams("getRecentTracks")}`,
		),
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
