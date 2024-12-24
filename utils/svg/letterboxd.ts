import { SVG_CONFIG } from "@/constants";
import { LetterboxdEntry } from "@/types";

const parseEntryTitle = (title: string): [string, string] => {
  const lastDashIndex = title.lastIndexOf(" - ");

  if (lastDashIndex === -1) return [title, ""];

  return [title.slice(0, lastDashIndex), title.slice(lastDashIndex + 3)];
};

const createEntryCard = (entry: LetterboxdEntry) => {
  const [title, rating] = parseEntryTitle(entry.title);

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
};

export const createLetterboxdSVG = (
  entries: LetterboxdEntry[],
  styles: string
) => `
<svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="${SVG_CONFIG.letterboxd.width}"
  height="${SVG_CONFIG.letterboxd.height}"
>
  <foreignObject width="${SVG_CONFIG.letterboxd.width}" height="${
  SVG_CONFIG.letterboxd.height
}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="h-full p-2">
      <style>${styles}</style>
      <div class="flex flex-col h-full font-sans">
        <div class="text-2xl text-gray-600 dark:text-white mb-2">
          🎬 Recently watched:
        </div>
        <div class="flex divide-x divide-gray-200 dark:divide-gray-700 flex-1">
          ${entries.map((entry) => createEntryCard(entry)).join("")}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>
`;
