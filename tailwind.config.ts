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
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
        },
        crimson: "var(--color-crimson)",
        "crimson-light": "var(--color-crimson-light)",
        "gray-steel": "var(--color-gray-steel)",
        "gray-light": "var(--color-gray-light)",
        "gray-border": "var(--color-gray-border)",
        "bg-dark": "var(--color-bg)",
        "bg-dark-2": "var(--color-bg-2)",
      },
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        crimson: "0 4px 20px rgba(125, 43, 43, 0.3)",
        "crimson-sm": "0 0 8px rgba(125, 43, 43, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
