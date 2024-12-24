import { NextApiRequest, NextApiResponse } from "next";

import { createLastFmSVG, getLastFmData, getStyles } from "@/utils";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const styles = await getStyles();
  const data = await getLastFmData();

  const svgContent = createLastFmSVG(data, styles);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svgContent);
}
