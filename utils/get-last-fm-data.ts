import axios from "axios";
import { escapeForbiddenCharacters } from "./escape-forbidden-characters";
import { API_CONFIG, getLastFmParams } from "@/constants";
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
