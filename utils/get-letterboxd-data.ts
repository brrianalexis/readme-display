import Parser from "rss-parser";

import { API_CONFIG, getLetterboxdUrl } from "@/constants";
import type { LetterboxdEntry } from "@/types";
import { encodeImage } from "./encode-image";
import { escapeForbiddenCharacters } from "./escape-forbidden-characters";

const parser = new Parser();

const isReview = (guid: string): boolean => guid.includes("letterboxd-review");

const extractWatchedDate = (item: Parser.Item): string => {
	if (isReview(item.guid || "")) {
		return item.pubDate || "";
	}

	const match = item.content?.match(/<p>Watched on (.+?)\.<\/p>/);

	return match ? match[1] : item.pubDate || "";
};

export const getLetterboxdData = async (): Promise<LetterboxdEntry[]> => {
	const feed = await parser.parseURL(getLetterboxdUrl());

	const entries = await Promise.all(
		feed.items
			.slice(0, API_CONFIG.letterboxd.params.limit)
			.map(async (item) => {
				const imageUrl = item.content?.match(/<img src="([^"]+)"/)?.[1] || "";
				const encodedImage = await encodeImage(imageUrl);
				const watchedDate = extractWatchedDate(item);

				return {
					title: escapeForbiddenCharacters(item.title || ""),
					link: item.link,
					pubDate: watchedDate,
					image: encodedImage,
				} as LetterboxdEntry;
			}),
	);

	return entries;
};
