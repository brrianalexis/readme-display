export type BaseThemeConfig = {
  container: {
    background: string;
    border: string;
    shadow: string;
  };
  title: {
    text: string;
  };
};

export type LetterboxdThemeConfig = BaseThemeConfig & {
  card: {
    image: {
      border: string;
    };
    title: {
      text: string;
    };
    metadata: {
      text: string;
    };
  };
};

export type LastFmThemeConfig = BaseThemeConfig & {
  now_playing: {
    image: {
      border: string;
    };
    track: {
      text: string;
    };
    artist: {
      text: string;
    };
    bars: string;
  };
  top_artists: {
    container: {
      background: string;
      border: string;
      shadow: string;
    };
    rank: {
      text: string;
    };
    artist: {
      text: string;
    };
    plays: {
      text: string;
    };
  };
};

export type ThemeConfig = {
  letterboxd: LetterboxdThemeConfig;
  lastfm: LastFmThemeConfig;
};
