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
        accentBlack: "#131319",
        accentGrey: {
          DEFAULT: "#1C1C23",
          hover: "#2B2B37",
        },
        accentWhite: "#D0D0D4",
      },
    },
  },
  plugins: [],
};
export default config;
