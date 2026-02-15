import fs from "node:fs/promises";
import path from "node:path";

import { SVG_CONFIG } from "@/constants";

const { count, min_duration, max_duration } =
	SVG_CONFIG.lastfm.now_playing.animation.bars;

export async function getStyles() {
	const cssPath = path.join(process.cwd(), "styles", "output.css");
	const css = await fs.readFile(cssPath, "utf-8");

	const range = max_duration - min_duration + 1;

	return (
		css +
		Array.from({ length: count })
			.map(
				(_, i) => `
        .bar:nth-child(${i + 1}) {
          left: ${i * 4}px;
          animation-duration: ${Math.floor(Math.random() * range) + min_duration}ms;
        }
      `,
			)
			.join("")
	);
}
