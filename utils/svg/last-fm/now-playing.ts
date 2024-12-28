import { SVG_CONFIG } from "@/constants";
import { LastFmWidgetNowPlaying } from "@/types";
import { getTheme } from "@/utils";

export const createSoundBars = (theme_name: string) => {
  const theme = getTheme(theme_name).lastfm;

  return Array.from({
    length: SVG_CONFIG.lastfm.now_playing.animation.bars.count,
  })
    .map(() => `<div class="bar ${theme.now_playing.bars}"></div>`)
    .join("");
};

const createNowPlaying = (
  props: LastFmWidgetNowPlaying,
  theme_name: string
) => {
  const theme = getTheme(theme_name).lastfm;

  return `
    <div class="flex flex-col ${theme.container.background} ${
    theme.container.border
  } ${theme.container.shadow} rounded-lg p-4">
      <div class="text-xl font-extrabold tracking-tight ${
        theme.title.text
      } mb-2">
        🎧 Last seen vibing to:
      </div>
      <div class="flex items-center gap-4">
        <div class="w-[80px]">
          <img src="${props.encodedTrackImage}" class="w-[80px] h-[80px] ${
    theme.now_playing.image.border
  }" alt="${props.albumTitle} by ${props.artistName} album cover" />
        </div>
        <div class="flex-1">
          <div class="text-lg font-extrabold tracking-tight ${
            theme.now_playing.track.text
          } truncate">
            ${props.trackName}
          </div>
          <div class="text-base ${theme.now_playing.artist.text}">
            ${props.artistName}
          </div>
          <div id="bars" class="my-1 relative w-10 h-[20px]">
            ${createSoundBars(theme_name)}
          </div>
        </div>
      </div>
    </div>
  `;
};

export const createLastFmNowPlayingSVG = (
  props: LastFmWidgetNowPlaying,
  styles: string,
  theme_name: string = "minimal"
) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="${SVG_CONFIG.lastfm.now_playing.width}"
  height="${SVG_CONFIG.lastfm.now_playing.height}"
>
  <foreignObject width="${SVG_CONFIG.lastfm.now_playing.width}" height="${
  SVG_CONFIG.lastfm.now_playing.height
}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="p-2">
      <style>${styles}</style>
      <div class="flex flex-col gap-3 font-sans">
        ${createNowPlaying(props, theme_name)}
      </div>
    </div>
  </foreignObject>
</svg>
`;
