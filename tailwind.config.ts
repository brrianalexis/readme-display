import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  mode: "jit",
  safelist: [
    "backdrop-blur-sm",
    "bg-white/20",
    "bg-neutral-900/20",
    "text-neutral-800/90",
    "text-neutral-200/90",
    "text-neutral-700/90",
    "text-neutral-300/90",
    "text-neutral-600/75",
    "text-neutral-400/75",
  ],
} satisfies Config;
