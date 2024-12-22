import { NextApiRequest, NextApiResponse } from "next";

import { LetterboxdEntry } from "@/types";
import { getLetterboxdData, getStyles } from "@/utils";

const createSVG = (entries: LetterboxdEntry[], styles: string) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="600"
  height="250"
>
  <foreignObject width="600" height="250">
    <div xmlns="http://www.w3.org/1999/xhtml" class="h-full p-2">
      <style>${styles}</style>
      <div class="flex flex-col h-full font-sans">
        <div class="text-2xl text-gray-600 dark:text-white mb-2">
          🎬 Recently watched:
        </div>
        <div class="flex divide-x divide-gray-200 dark:divide-gray-700 flex-1">
          ${entries
            .map((entry) => {
              const [title, rating] = (() => {
                const lastDashIndex = entry.title.lastIndexOf(" - ");
                if (lastDashIndex === -1) return [entry.title, ""];
                return [
                  entry.title.slice(0, lastDashIndex),
                  entry.title.slice(lastDashIndex + 3),
                ];
              })();
              return `
                <div class="flex-1 flex flex-col items-center px-1">
                  <div class="flex items-center">
                    <img 
                      src="${entry.image}" 
                      class="w-full h-20 object-contain rounded-md hover:opacity-80 transition-opacity"
                      alt="${title}"
                    />
                  </div>
                  <div class="h-[60px] flex items-center text-center">
                    <div class="text-sm text-gray-600 dark:text-white line-clamp-2">
                      ${title}
                    </div>
                  </div>
                  <div class="h-[30px] flex items-center">
                    <div class="text-sm text-gray-400">
                      ${rating || ""}
                    </div>
                  </div>
                  <div class="h-[20px] flex items-center">
                    <div class="text-xs text-gray-400">
                      ${new Date(entry.pubDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>
`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const styles = await getStyles();
    const entries = await getLetterboxdData();
    const svgContent = createSVG(entries, styles);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating SVG");
  }
}
