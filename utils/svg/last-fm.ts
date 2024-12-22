import { SVG_CONFIG } from "@/constants";
import { Artist, LastFmData } from "@/types";

const createSoundBars = () =>
  Array.from({ length: SVG_CONFIG.lastfm.animation.bars.count })
    .map(() => `<div class="bar"></div>`)
    .join("");

const createNowPlaying = (props: LastFmData) => /*html*/ `
  <div class="flex flex-col">
    <div class="text-2xl text-gray-600 dark:text-white mb-2">
      🎧 Last seen vibing to:
    </div>
    <div class="flex items-center gap-4">
      <a class="w-[100px]" href="" target="_blank">
        <img
          src="${props.encodedTrackImage}"
          class="w-[100px] h-[100px] rounded-md"
          alt="${props.albumTitle} by ${props.artistName} album cover"
        />
      </a>
      <div class="flex-1 relative">
        <div class="text-2xl mb-1 text-gray-600 dark:text-white truncate">
          ${props.trackName}
        </div>
        <div class="text-xl text-gray-400">
          ${props.artistName}
        </div>
        <div id="bars" class="my-1 relative w-10 h-[30px]">
          ${createSoundBars()}
        </div>
      </div>
    </div>
  </div>
`;

const createWeeklyArtists = (artists: Artist[]) => /*html*/ `
  <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
    <div class="text-2xl text-gray-600 dark:text-white">
      🎵 On repeat lately:
    </div>  
    ${artists
      .map((artist, index) => {
        const rank = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"][index];
        return `
          <div class="flex items-center py-2 border-b border-gray-200 dark:border-gray-700 gap-3">
            <div class="text-xl min-w-[32px] text-center">${rank}</div>
            <div class="flex justify-between items-center flex-1">
              <div class="text-gray-600 dark:text-white">${artist.name}</div>
              <div class="text-sm text-gray-400">${artist.playcount} plays</div>
            </div>
          </div>
        `;
      })
      .join("")}
  </div>
`;

export const createLastFmSVG = (props: LastFmData, styles: string) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="${SVG_CONFIG.lastfm.width}"
  height="${SVG_CONFIG.lastfm.height}"
>
  <foreignObject width="${SVG_CONFIG.lastfm.width}" height="${
  SVG_CONFIG.lastfm.height + 20
}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="p-2">
      <style>${styles}</style>
      <div class="flex flex-col gap-3 font-sans">
        ${createNowPlaying(props)}
        ${createWeeklyArtists(props.topWeeklyArtists)}
      </div>
    </div>
  </foreignObject>
</svg>
`;
