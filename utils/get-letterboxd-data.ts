import axios from "axios";
import Parser from "rss-parser";
import { API_CONFIG } from "@/constants";
import { LetterboxdEntry } from "@/types";

const parser = new Parser();

export const getLetterboxdData = async (): Promise<LetterboxdEntry[]> => {
  const feed = await parser.parseURL(API_CONFIG.letterboxd.baseUrl);

  const entries = await Promise.all(
    feed.items
      .slice(0, API_CONFIG.letterboxd.params.limit)
      .map(async (item) => {
        const imageUrl = item.content?.match(/<img src="([^"]+)"/)?.[1];
        let encodedImage = "";

        if (imageUrl) {
          const image = await axios.get(imageUrl, {
            responseType: "arraybuffer",
          });
          const raw = Buffer.from(image.data).toString("base64");
          encodedImage = `data:${image.headers["content-type"]};base64,${raw}`;
        }

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
