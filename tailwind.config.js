/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dm-text": "hsl(0, 0%, 100%)",
      "lm-text": "hsl(200, 15%, 8%)",
      "lm-input": "hsl(0, 0%, 52%)",
    },
    backgroundColor: {
      "lm-gray": "hsl(0, 0%, 98%)",
      "dm-bg": "hsl(207, 26%, 17%)",
      "dm-el": "hsl(209, 23%, 22%)",
      "lm-input": "hsl(0, 0%, 52%)",
    },
  },
  plugins: [],
};
