import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pearlGray: "#F3F4F6", // Your visual soul background
        roseGold: "#B5838D",  // Your elegant accent
        jetBlack: "#1A1A1A",  // The Circle of Trust button
      },
    },
  },
  plugins: [],
};
export default config;
