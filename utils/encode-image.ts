import axios from "axios";

import { API_CONFIG } from "@/constants";

const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const encodeImage = async (url: string): Promise<string> => {
	if (!url) return EMPTY_IMAGE;

	try {
		const response = await axios.get(url, {
			responseType: "arraybuffer",
			timeout: API_CONFIG.timeout,
		});

		const base64 = Buffer.from(response.data).toString("base64");
		const contentType = response.headers["content-type"] || "image/jpeg";
		return `data:${contentType};base64,${base64}`;
	} catch (error) {
		const detail = axios.isAxiosError(error)
			? (error.response?.status ?? error.code)
			: error;

		console.error(`Error encoding image ${url}:`, detail);

		return EMPTY_IMAGE;
	}
};
