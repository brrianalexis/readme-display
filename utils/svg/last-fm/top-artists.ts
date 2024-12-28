import { SVG_CONFIG } from "@/constants";
import { Artist } from "@/types";
import { getTheme } from "@/utils";

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

export const createLastFmTopArtistsSVG = (
  artists: Artist[],
  styles: string,
  theme_name: string = "minimal"
) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="${SVG_CONFIG.lastfm.top_artists.width}"
  height="${SVG_CONFIG.lastfm.top_artists.height}"
>
  <foreignObject width="${SVG_CONFIG.lastfm.top_artists.width}" height="${
  SVG_CONFIG.lastfm.top_artists.height
}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="p-2">
      <style>${styles}</style>
      <div class="flex flex-col gap-3 font-sans">
        ${createWeeklyArtists(artists, theme_name)}
      </div>
    </div>
  </foreignObject>
</svg>
`;
