import axios from "axios";
import { escapeForbiddenCharacters } from "./escape-forbidden-characters";
import { LASTFM_API_BASE_URL, LASTFM_API_COMMON_PARAMS } from "@/constants";
import { SVG_CONFIG } from "@/constants";
import {
  Image,
  TopArtistsAPIResponse,
  RecentTracksAPIResponse,
  LastFmData,
} from "@/types";

export const getLastFmData = async (): Promise<LastFmData> => {
  const [{ data: recentTracksData }, { data: topArtistsData }] =
    await Promise.all([
      axios.get<RecentTracksAPIResponse>(
        `${LASTFM_API_BASE_URL}?method=user.getRecentTracks&${LASTFM_API_COMMON_PARAMS}`
      ),
      axios.get<TopArtistsAPIResponse>(
        `${LASTFM_API_BASE_URL}?method=user.getTopArtists&period=7day&limit=5&${LASTFM_API_COMMON_PARAMS}`
      ),
    ]);

  const topWeeklyArtists = topArtistsData.topartists.artist.slice(
    0,
    SVG_CONFIG.lastfm.top_artists_amount
  );

  const lastTrack = recentTracksData.recenttracks.track[0];

  const xlImage = (
    lastTrack.image.find((image) => image.size === "extralarge") as Image
  )["#text"];

  const image = await axios.get(xlImage, { responseType: "arraybuffer" });

  const raw = Buffer.from(image.data).toString("base64");
  const encodedTrackImage = `data:${image.headers["content-type"]};base64,${raw}`;

  const albumTitle = escapeForbiddenCharacters(lastTrack.album["#text"]);
  const artistName = escapeForbiddenCharacters(lastTrack.artist["#text"]);
  const trackName = escapeForbiddenCharacters(lastTrack.name);

  return {
    albumTitle,
    artistName,
    trackName,
    encodedTrackImage,
    topWeeklyArtists,
  };
};
