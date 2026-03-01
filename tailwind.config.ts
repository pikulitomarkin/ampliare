import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#7B2FBE",
          dark: "#5e2392",
          light: "#9b4de0",
        },
        accent: {
          DEFAULT: "#E5B319",
          light: "#f0c84d",
          dark: "#c99a0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
