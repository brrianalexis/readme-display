import type { NextApiRequest, NextApiResponse } from "next";

import { createLastFmTopArtistsSVG, getStyles, getTopArtists } from "@/utils";

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
		const [styles, topArtists] = await Promise.all([
			getStyles(),
			getTopArtists(),
		]);
		const svgContent = createLastFmTopArtistsSVG(topArtists, styles, theme);

		res.setHeader("Content-Type", "image/svg+xml");
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=300, stale-while-revalidate=60",
		);
		res.send(svgContent);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error generating SVG");
	}
}
