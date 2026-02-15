import type { NextApiRequest, NextApiResponse } from "next";

import { createLetterboxdSVG, getLetterboxdData, getStyles } from "@/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "GET") {
		res.setHeader("Allow", "GET");
		return res.status(405).end();
	}

	try {
		const theme = Array.isArray(req.query.theme)
			? req.query.theme[0]
			: (req.query.theme ?? "minimal");
		const styles = await getStyles();
		const entries = await getLetterboxdData();
		const svgContent = createLetterboxdSVG(entries, styles, theme);

		res.setHeader("Content-Type", "image/svg+xml");
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=1800, stale-while-revalidate=300",
		);
		res.send(svgContent);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error generating SVG");
	}
}
