import type { NextApiRequest, NextApiResponse } from "next";

import { createLastFmNowPlayingSVG, getLastFmData, getStyles } from "@/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "GET") {
		res.setHeader("Allow", "GET");
		return res.status(405).end();
	}

	try {
		const { theme = "minimal" } = req.query;
		const styles = await getStyles();
		const data = await getLastFmData();
		const svgContent = createLastFmNowPlayingSVG(data, styles, theme as string);

		res.setHeader("Content-Type", "image/svg+xml");
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=60, stale-while-revalidate=30",
		);
		res.send(svgContent);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error generating SVG");
	}
}
