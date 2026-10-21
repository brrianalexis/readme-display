import { SVG_CONFIG } from "@/constants";
import type { LastFmWidgetNowPlaying } from "@/types";
import { getTheme } from "@/utils";

import { createThemedImage } from "../image";

export const createSoundBars = (theme_name: string) => {
	const theme = getTheme(theme_name).lastfm;

	const total = SVG_CONFIG.lastfm.now_playing.animation.bars.count;

	return Array.from({ length: total })
		.map((_, i) => {
			const style = theme.now_playing.barStyle?.(i, total);

			return `<div class="bar ${theme.now_playing.bars}"${style ? ` style="${style}"` : ""}></div>`;
		})
		.join("");
};

export const createNowPlaying = (
	props: LastFmWidgetNowPlaying,
	theme_name: string,
) => {
	const theme = getTheme(theme_name).lastfm;

	return `
    <div class="flex flex-col h-full ${theme.container.background} ${
			theme.container.border
		} ${theme.container.shadow} rounded-lg p-4">
      <div class="text-xl font-extrabold tracking-tight ${
				theme.title.text
			} mb-2">
        ${theme.title.transform?.("🎧 Last seen vibing to:") ?? "🎧 Last seen vibing to:"}
      </div>
      <div class="flex flex-1 items-center gap-4">
        <div class="w-[80px]">
          ${createThemedImage({
						id: "cover",
						src: props.encodedTrackImage,
						alt: `${props.albumTitle} by ${props.artistName} album cover`,
						width: 80,
						height: 80,
						className: "w-[80px] h-[80px]",
						image: theme.now_playing.image,
					})}
        </div>
        <div class="flex-1">
          <div class="text-lg font-extrabold tracking-tight ${
						theme.now_playing.track.text
					} truncate">
            ${props.trackName}
          </div>
          <div class="text-base ${theme.now_playing.artist.text}">
            ${theme.now_playing.artist.transform?.(props.artistName) ?? props.artistName}
          </div>
          <div id="bars" class="my-1">
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
	theme_name: string = "minimal",
) => {
	const height =
		getTheme(theme_name).lastfm.now_playing.height ??
		SVG_CONFIG.lastfm.now_playing.height;

	return `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  width="${SVG_CONFIG.lastfm.now_playing.width}"
  height="${height}"
>
  <foreignObject width="${SVG_CONFIG.lastfm.now_playing.width}" height="${height}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="box-border h-full p-2">
      <style><![CDATA[${styles}]]></style>
      <div class="flex flex-col h-full gap-3 font-sans">
        ${createNowPlaying(props, theme_name)}
      </div>
    </div>
  </foreignObject>
</svg>
`;
};
