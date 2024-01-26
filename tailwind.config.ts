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
        secondary: "#c7b5fd",
        tech: "#60a5fa",
        soft: "#2dd4bf",
        computer: "#fb923c",
        separator: "#a78bfa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,0, 255, 0.35)",
          "0 0px 65px rgba(255, 0,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
