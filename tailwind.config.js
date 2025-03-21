
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeInScale: "fadeInScale 0.5s ease-out",
      },
    },
    fontFamily: {
      CircularStd: ["CircularStd", "sans-serif"],
      Nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};



