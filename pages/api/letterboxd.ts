import { NextApiRequest, NextApiResponse } from "next";

import { createLetterboxdSVG, getLetterboxdData, getStyles } from "@/utils";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const styles = await getStyles();
    const entries = await getLetterboxdData();
    const svgContent = createLetterboxdSVG(entries, styles);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating SVG");
  }
}
