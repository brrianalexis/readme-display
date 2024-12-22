import Parser from "rss-parser";
import { LetterboxdEntry } from "@/types";

const parser = new Parser();

export const getLetterboxdData = async (): Promise<LetterboxdEntry[]> => {
  const feed = await parser.parseURL(
    `https://letterboxd.com/${process.env.LETTERBOXD_USERNAME}/rss/`
  );

  return feed.items.slice(0, 3).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    image: item.content?.match(/<img src="([^"]+)"/)?.[1],
  })) as LetterboxdEntry[];
};
