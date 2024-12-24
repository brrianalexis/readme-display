import { SVG_CONFIG } from "@/constants";
import { Artist, LastFmData } from "@/types";
import { getTheme } from "@/utils/themes";

const createSoundBars = (theme_name: string) => {
  const theme = getTheme(theme_name).lastfm;

  return Array.from({ length: SVG_CONFIG.lastfm.animation.bars.count })
    .map(() => `<div class="bar ${theme.now_playing.bars}"></div>`)
    .join("");
};

const createNowPlaying = (props: LastFmData, theme_name: string) => {
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

const createWeeklyArtists = (artists: Artist[], theme_name: string) => {
  const theme = getTheme(theme_name).lastfm;

  return `
    <div class="flex flex-col ${theme.container.background} ${
    theme.container.border
  } ${theme.container.shadow} rounded-lg p-4">
      <div class="text-xl font-extrabold tracking-tight ${
        theme.title.text
      } mb-2">
        🎵 On repeat lately:
      </div>  
      <div class="flex flex-col gap-2">
        ${artists
          .map((artist, index) => {
            const rank = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"][index];
            return `
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <div class="text-base min-w-[24px] text-center ${theme.top_artists.rank.text}">${rank}</div>
                  <div class="font-bold ${theme.top_artists.artist.text} text-sm">${artist.name}</div>
                </div>
                <div class="text-xs ${theme.top_artists.plays.text}">${artist.playcount} plays</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
};

export const createLastFmSVG = (
  props: LastFmData,
  styles: string,
  theme_name: string = "brutal"
) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="${SVG_CONFIG.lastfm.width}"
  height="${SVG_CONFIG.lastfm.height}"
>
  <foreignObject width="${SVG_CONFIG.lastfm.width}" height="${
  SVG_CONFIG.lastfm.height
}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="p-2">
      <style>${styles}</style>
      <div class="flex flex-col gap-3 font-sans">
        ${createNowPlaying(props, theme_name)}
        ${createWeeklyArtists(props.topWeeklyArtists, theme_name)}
      </div>
    </div>
  </foreignObject>
</svg>
`;
