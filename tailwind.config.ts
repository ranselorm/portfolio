/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#583ebc",
        dark: "#22212a",
      },
      fontFamily: {
        primary: ["Aeonik", "sans-serif"],
        heading: ["Rubik", "sans-serif"],
        eaves: ["Eaves", "sans-serif"],
      },
    },
  },
  plugins: [],
};
