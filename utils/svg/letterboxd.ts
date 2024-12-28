import { SVG_CONFIG } from "@/constants";
import { LetterboxdEntry } from "@/types";
import { getTheme } from "@/utils";

export const parseEntryTitle = (title: string): [string, string] => {
  const lastDashIndex = title.lastIndexOf(" - ");

  if (lastDashIndex === -1) return [title, ""];

  return [title.slice(0, lastDashIndex), title.slice(lastDashIndex + 3)];
};

export const createEntryCard = (entry: LetterboxdEntry, theme_name: string) => {
  const [title, rating] = parseEntryTitle(entry.title);
  const theme = getTheme(theme_name).letterboxd;

  return `
    <div class="flex-1 flex flex-col items-center px-2">
      <div class="w-full">
        <img 
          src="${entry.image}" 
          class="w-full h-16 object-contain ${theme.card.image.border}"
          alt="${title}"
        />
      </div>
      <div class="h-[32px] flex items-center text-center mt-2">
        <div class="text-xs font-bold ${theme.card.title.text} line-clamp-2">
          ${title}
        </div>
      </div>
      <div class="h-[16px] flex items-center">
        <div class="text-xs font-medium ${theme.card.metadata.text}">
          ${rating || ""}
        </div>
      </div>
      <div class="h-[16px] flex items-center">
        <div class="text-[10px] ${theme.card.metadata.text}">
          ${new Date(entry.pubDate).toLocaleDateString()}
        </div>
      </div>
    </div>
  `;
};

export const createLetterboxdSVG = (
  entries: LetterboxdEntry[],
  styles: string,
  theme_name: string = "brutal"
) => {
  const theme = getTheme(theme_name).letterboxd;

  return `
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
      <div class="flex flex-col h-[180px] font-sans ${
        theme.container.background
      } ${theme.container.border} ${theme.container.shadow} rounded-lg p-3">
        <div class="text-lg font-extrabold tracking-tight ${
          theme.title.text
        } mb-2">
          🎬 Recently watched:
        </div>
        <div class="flex gap-2">
          ${entries.map((entry) => createEntryCard(entry, theme_name)).join("")}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>
`;
};
