import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // a custome rotate class
      rotate: {
        '92': '80deg',
      },
      // adding custome colors which are related to the theme of the website
      colors: {
        'primary': '#F8F8F8',
        'secondary': '#351120',
        'trinary': '#FEF5E3',
        'frinary': '#F6E9CE'
      },
    },
  },
  plugins: [],
};
export default config;
