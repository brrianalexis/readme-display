export type LastFmWidgetArtist = {
  name: string;
  playcount: number;
};

export type LastFmWidgetNowPlaying = {
  trackName: string;
  artistName: string;
  albumTitle: string;
  encodedTrackImage: string;
};

export type LastFmWidgetData = LastFmWidgetNowPlaying & {
  topWeeklyArtists: LastFmWidgetArtist[];
};