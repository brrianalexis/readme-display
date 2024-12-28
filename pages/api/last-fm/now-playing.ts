import { NextApiRequest, NextApiResponse } from "next";

import { createLastFmNowPlayingSVG, getLastFmData, getStyles } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { theme = "minimal" } = req.query;
    const styles = await getStyles();
    const data = await getLastFmData();
    const svgContent = createLastFmNowPlayingSVG(data, styles, theme as string);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating SVG");
  }
}
