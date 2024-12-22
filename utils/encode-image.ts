import axios from "axios";

export const encodeImage = async (url: string): Promise<string> => {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    const buffer = Buffer.from(response.data);

    return `data:${response.headers["content-type"]};base64,${buffer.toString(
      "base64"
    )}`;
  } catch (error) {
    console.error(`Failed to encode image from ${url}:`, error);
    return "";
  }
};
