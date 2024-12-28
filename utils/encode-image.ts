const EMPTY_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const encodeImage = async (url: string): Promise<string> => {
  if (!url) return EMPTY_IMAGE;

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const contentType = response.headers.get("content-type") || "image/jpeg";
    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    console.error("Error encoding image:", error);
    return EMPTY_IMAGE;
  }
};
