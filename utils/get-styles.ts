import postcss from "postcss";
import tailwindcss from "tailwindcss";

export async function getStyles() {
  const css = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  
    #bars {
      height: 30px;
      position: relative;
      width: 40px;
    }

    .bar {
      background: #1DB954cc;
      bottom: 1px;
      height: 3px;
      position: absolute;
      width: 3px;
      animation: sound 0ms -800ms linear infinite alternate;
    }

    @keyframes sound {
      0% {
        opacity: .35;
        height: 3px;
      }

      100% {
        opacity: 1;
        height: 15px;
      }
    }

    ${Array.from({ length: 84 })
      .map(
        (_, i) => `
          .bar:nth-child(${i + 1}) {
            left: ${i * 4}px;
            animation-duration: ${Math.floor(Math.random() * 300) + 1000}ms;
          }
        `
      )
      .join("")}
  `;

  const result = await postcss([tailwindcss]).process(css, {
    from: undefined,
  });

  return result.css;
}
