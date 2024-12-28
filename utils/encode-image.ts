import axios from "axios";

const EMPTY_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const encodeImage = async (url: string): Promise<string> => {
  if (!url) return EMPTY_IMAGE;

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    const base64 = Buffer.from(response.data).toString("base64");
    const contentType = response.headers["content-type"] || "image/jpeg";
    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    console.error("Error encoding image:", error);
    return EMPTY_IMAGE;
  }
};
