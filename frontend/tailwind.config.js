/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        walk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
        moveLeftToRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      animation: {
        walk: "walk 0.5s ease-in-out infinite",
        move: "moveLeftToRight 5s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
