import axios from "axios";

import { API_CONFIG } from "@/constants";

const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// Tries each URL in order and falls through to the next one only when the
// server answers with an error status. Network errors and timeouts stop the
// chain, so a slow upstream can't stack timeouts past the function limit
export const encodeImage = async (urls: string | string[]): Promise<string> => {
	const candidates = (Array.isArray(urls) ? urls : [urls]).filter(Boolean);

	for (const url of candidates) {
		try {
			const response = await axios.get(url, {
				responseType: "arraybuffer",
				timeout: API_CONFIG.timeout,
			});

			const base64 = Buffer.from(response.data).toString("base64");
			const contentType = response.headers["content-type"] || "image/jpeg";

			return `data:${contentType};base64,${base64}`;
		} catch (error) {
			const status = axios.isAxiosError(error)
				? error.response?.status
				: undefined;

			console.error(
				`Error encoding image ${url}:`,
				status ?? (axios.isAxiosError(error) ? error.code : error),
			);

			if (!status) {
				break;
			}
		}
	}

	return EMPTY_IMAGE;
};
