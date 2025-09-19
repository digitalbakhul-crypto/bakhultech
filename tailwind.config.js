/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        epilogue: ["var(--font-epilogue)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        primary: "#FF7800",
        secondary: "#A4A8A9",
        heading: "#E6ECED",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
