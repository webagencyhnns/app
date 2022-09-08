/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        'spin-slowly': 'spin 20s linear infinite',
           wiggle    : 'wiggle 1s ease-in-out infinite',
      },      
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200%": "200%",
        "50%": "50%",
      },
      backgroundPosition: {
        bottom: "bottom",
        "bottom-4": "center bottom 1rem",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
        "100%": "100%",
      },
    },
    plugins: [],
  },
}