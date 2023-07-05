/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  colors: {
    "c-white": "hsl(0, 0%, 100%)",
    "vl-gray": "hsl(0, 0%, 98%)",
    "dark-gray": "hsl(0, 0%, 52%)",
    "db-text": "hsl(200, 15%, 8%)",
    "db-bg": "hsl(209, 23%, 22%)",
    "db-el": "hsl(207, 26%, 17%)",
  },
  plugins: [],
};
