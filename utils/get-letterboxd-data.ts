import Parser from "rss-parser";
import { API_CONFIG } from "@/constants";
import { LetterboxdEntry } from "@/types";
import { encodeImage } from "./encode-image";

const parser = new Parser();

export const getLetterboxdData = async (): Promise<LetterboxdEntry[]> => {
  const feed = await parser.parseURL(API_CONFIG.letterboxd.baseUrl);

  const entries = await Promise.all(
    feed.items
      .slice(0, API_CONFIG.letterboxd.params.limit)
      .map(async (item) => {
        const imageUrl = item.content?.match(/<img src="([^"]+)"/)?.[1] || "";
        const encodedImage = await encodeImage(imageUrl);

        return {
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          image: encodedImage,
        } as LetterboxdEntry;
      })
  );

  return entries;
};
