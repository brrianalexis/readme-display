import fs from "fs/promises";
import path from "path";

export async function getStyles() {
  const cssPath = path.join(process.cwd(), "styles", "output.css");
  const css = await fs.readFile(cssPath, "utf-8");

  return (
    css +
    Array.from({ length: 84 })
      .map(
        (_, i) => `
        .bar:nth-child(${i + 1}) {
          left: ${i * 4}px;
          animation-duration: ${Math.floor(Math.random() * 300) + 1000}ms;
        }
      `
      )
      .join("")
  );
}
