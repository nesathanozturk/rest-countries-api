/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dmtext: "hsl(0, 0%, 100%)",
      lmtxt: "hsl(200, 15%, 8%)",
      lminput: "hsl(0, 0%, 52%)",
    },
    backgroundColor: {
      lmgray: "hsl(0, 0%, 98%)",
      dmbg: "hsl(207, 26%, 17%)",
      dmel: "hsl(209, 23%, 22%)",
      lminput: "hsl(0, 0%, 52%)",
      lmel: "hsl(0, 0%, 100%)",
    },
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
