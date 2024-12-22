import axios from "axios";

import { API_CONFIG, getLastFmParams } from "@/constants";
import {
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
  size: ImageSize = "extralarge"
): Promise<string> => {
  const image = images.find((img) => img.size === size);

  if (!image || !image["#text"]) {
    return "";
  }

  return encodeImage(image["#text"]);
};

export const getLastFmData = async (): Promise<LastFmData> => {
  const [{ data: recentTracksData }, { data: topArtistsData }] =
    await Promise.all([
      axios.get<RecentTracksAPIResponse>(
        `${API_CONFIG.lastfm.baseUrl}?${getLastFmParams("getRecentTracks")}`
      ),
      axios.get<TopArtistsAPIResponse>(
        `${API_CONFIG.lastfm.baseUrl}?${getLastFmParams(
          "getTopArtists"
        )}&period=${API_CONFIG.lastfm.params.period}&limit=${
          API_CONFIG.lastfm.params.limit
        }`
      ),
    ]);

  const topWeeklyArtists = topArtistsData.topartists.artist.slice(
    0,
    API_CONFIG.lastfm.params.limit
  );
  const lastTrack = recentTracksData.recenttracks.track[0];

  const encodedTrackImage = await getLastFmImage(lastTrack.image);

  return {
    albumTitle: escapeForbiddenCharacters(lastTrack.album["#text"]),
    artistName: escapeForbiddenCharacters(lastTrack.artist["#text"]),
    trackName: escapeForbiddenCharacters(lastTrack.name),
    encodedTrackImage,
    topWeeklyArtists,
  };
};
